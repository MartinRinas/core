#!/usr/bin/env python3
"""Reversibly contain web PHP on Debian/openWB; PHP CLI is never disabled."""

import argparse
import fcntl
import json
import os
from pathlib import Path
import re
import secrets
import subprocess
import sys
import tempfile


APACHE = Path("/etc/apache2")
STATE_DIR = Path("/var/lib/openwb-web-php")
GUARD_NAME = "disable-web-php"
GUARD = r'''# Managed by openWB runs/manage_web_php.py
<FilesMatch "(?i)\.(php[0-9]*|phtml|phar|phps)(\.|$)">
    Require all denied
</FilesMatch>
<LocationMatch "(?i)\.(php[0-9]*|phtml|phar|phps)([./]|$)">
    Require all denied
</LocationMatch>
'''
BASE = Path(__file__).resolve().parent.parent
PHP_MODULE = re.compile(r"php[0-9]+(?:\.[0-9]+)?")
IMPACT = (
    "Web PHP is disabled to contain the PHP2Shell risk, not to patch PHP.\n"
    "Unavailable: restore/migration uploads, PHP CSV export, Tesla/Mercedes authorization,\n"
    "legacy SmartHome configuration, PHP firmware-update buttons and the optional HTTPS HTTP API.\n"
    "Static dashboard/settings and the /ws MQTT proxy remain configured. PHP CLI is unchanged.\n"
    "Charging and Mosquitto services are not changed. Verify dashboard updates, primary/secondary\n"
    "communication and actual charging yourself; HTTP checks cannot confirm charging."
)


def run(*args, check=True):
    result = subprocess.run(args, capture_output=True, text=True, timeout=60)
    if check and result.returncode:
        raise RuntimeError("{} failed: {}".format(" ".join(args), (result.stderr or result.stdout).strip()))
    return result


def modules():
    return {p.stem for p in (APACHE / "mods-enabled").glob("php*.load") if PHP_MODULE.fullmatch(p.stem)}


def site_enabled(name):
    return (APACHE / "sites-enabled" / (name + ".conf")).exists()


def save_state(state):
    # Keep the original rollback state outside the web root and across updates/reboots.
    with tempfile.NamedTemporaryFile(mode="w", dir=STATE_DIR, delete=False) as handle:
        json.dump(state, handle)
        temporary = handle.name
    os.replace(temporary, STATE_DIR / "state.json")


def read_state():
    path = STATE_DIR / "state.json"
    if not path.exists():
        return None
    state = json.loads(path.read_text())
    if (not isinstance(state, dict) or set(state) != {"modules", "http_api"}
            or not isinstance(state["modules"], list) or not state["modules"]
            or any(not isinstance(m, str) or not PHP_MODULE.fullmatch(m) for m in state["modules"])
            or not isinstance(state["http_api"], bool)):
        raise RuntimeError("Invalid rollback state; refusing to guess which PHP configuration to restore.")
    return state


def install_guard():
    path = APACHE / "conf-available" / (GUARD_NAME + ".conf")
    if path.is_symlink() or (path.exists() and path.read_text() != GUARD):
        raise RuntimeError("Existing disable-web-php.conf is not owned by this script; inspect it first.")
    path.write_text(GUARD)
    path.chmod(0o644)
    run("a2enconf", GUARD_NAME)


def check_handlers(disabled):
    loaded = run("apache2ctl", "-M").stdout
    has_php = bool(re.search(r"^\s*php\S*_module\s", loaded, re.MULTILINE))
    if has_php == disabled:
        raise RuntimeError("PHP module validation failed: expected PHP {}loaded.".format("not " if disabled else ""))
    if re.search(r"^\s*(?:cgi|cgid|fcgid|fastcgi|proxy_fcgi|proxy_scgi|actions)_module\s",
                 loaded, re.MULTILINE):
        raise RuntimeError("Alternate CGI/FastCGI handlers found; this script supports mod_php only.")
    includes = run("apache2ctl", "-t", "-D", "DUMP_INCLUDES").stdout
    for name in re.findall(r"^\s*\([^)]*\)\s+(/[^\n]+)$", includes, re.MULTILINE):
        path = Path(name.strip())
        text = "\n".join(line for line in path.read_text().splitlines() if not line.lstrip().startswith("#"))
        if re.search(r"(?:fcgi://|php-fpm|php-cgi|^\s*Action\s)", text, re.IGNORECASE | re.MULTILINE):
            raise RuntimeError("Alternate PHP/CGI handler in {}; administrator review required.".format(path))


def check_sites():
    # Only the shipped sites are covered by the loopback checks below.
    known = {p.name for p in (BASE / "data/config/apache").glob("*.conf")}
    enabled = list((APACHE / "sites-enabled").glob("*.conf"))
    if not site_enabled("localhost"):
        raise RuntimeError("The standard openWB localhost site (port 81) must be enabled.")
    for path in enabled:
        shipped = BASE / "data/config/apache" / path.name
        if path.name not in known or path.read_text() != shipped.read_text():
            raise RuntimeError("Custom Apache site {} is not supported; administrator review required.".format(path))
    hosts = run("apache2ctl", "-S").stdout
    for name in re.findall(r"\((/[^()\n]+):[0-9]+\)", hosts):
        if Path(name).resolve() not in {p.resolve() for p in enabled}:
            raise RuntimeError("Virtual host outside the standard enabled sites: " + name)


def urls():
    result = ["http://127.0.0.1:81"]
    if site_enabled("000-default"):
        result.append("http://127.0.0.1")
    if site_enabled("apache-openwb-ssl"):
        result.append("https://127.0.0.1")
    return result


def http(url):
    # Local appliance certificates are self-signed; never follow redirects or use a proxy.
    result = run("curl", "--silent", "--show-error", "--insecure", "--noproxy", "*",
                 "--connect-timeout", "5", "--max-time", "10", "--write-out", "\n%{http_code}", url)
    body, code = result.stdout.rsplit("\n", 1)
    return body, code


def validate(disabled):
    run("apache2ctl", "configtest")
    check_handlers(disabled)
    run("systemctl", "is-active", "--quiet", "apache2.service")
    if disabled and site_enabled("http-api-ssl"):
        raise RuntimeError("The optional PHP HTTP API site is still enabled.")
    probe = None
    try:
        token = secrets.token_hex(24)
        if not disabled:
            # Prove PHP execution without invoking an application endpoint with side effects.
            fd, name = tempfile.mkstemp(prefix="openwb-php-check-", suffix=".php", dir=BASE / "web")
            probe = Path(name)
            with os.fdopen(fd, "w") as handle:
                handle.write("<?php echo '" + token + "';")
            probe.chmod(0o644)
        for url in urls():
            _, code = http(url + "/openWB/index.html")
            if code != "200":
                raise RuntimeError("Static website check failed at {}: HTTP {}".format(url, code))
            suffix = "/openWB/web/settings/uploadFile.php" if disabled else "/openWB/web/" + probe.name
            body, code = http(url + suffix)
            if (disabled and code != "403") or (not disabled and (code != "200" or body != token)):
                raise RuntimeError("PHP check failed at {}: HTTP {}; no response body printed.".format(url, code))
            print("CHECK {}: static website HTTP 200; PHP {}".format(
                url, "access denied (403)" if disabled else "execution confirmed"))
    finally:
        if probe is not None:
            probe.unlink()


def version_info():
    try:
        result = run("php", "-n", "-v", check=False)
        print("Installed PHP CLI: " + (result.stdout.splitlines()[0] if result.stdout else "unavailable"))
        for module in sorted(modules()):
            package = run("dpkg-query", "-W", "-f=${Version}", "libapache2-mod-" + module, check=False)
            if package.returncode == 0:
                print("Apache {} package: {}".format(module, package.stdout))
    except (OSError, subprocess.TimeoutExpired):
        print("Installed PHP version: unavailable.")
    print("PHP2Shell patch status: UNKNOWN. Version strings do not prove vendor backports;\n"
          "check the installed Apache PHP package against your vendor's security advisory.")


def change(mode):
    disabled = mode == "disable"
    state = read_state()
    run("apache2ctl", "configtest")
    check_sites()
    version_info()
    if run("systemctl", "is-enabled", "apache2.service", check=False).stdout.strip() in {
            "masked", "masked-runtime"}:
        raise RuntimeError("Apache is masked. Deliberately unmask it before using this script.")
    if disabled and state is None:
        if not modules():
            raise RuntimeError("No enabled Debian mod_php module found; cannot save a reversible configuration.")
        state = {"modules": sorted(modules()), "http_api": site_enabled("http-api-ssl")}
        save_state(state)
    if not disabled:
        if state is None:
            if (APACHE / "conf-enabled" / (GUARD_NAME + ".conf")).exists() or not modules():
                raise RuntimeError("No rollback state available; refusing to guess a PHP module or remove a guard.")
        else:
            for module in state["modules"]:
                if not (APACHE / "mods-available" / (module + ".load")).is_file():
                    raise RuntimeError("Saved PHP module {} is no longer installed; guard retained.".format(module))
        print("WARNING: enabling web PHP restores its attack surface; this does not install a security patch.")
    # A full stop/start, not a graceful reload, removes PHP from existing worker processes.
    run("systemctl", "stop", "apache2.service")
    try:
        if disabled:
            install_guard()
            for module in sorted(modules()):
                run("a2dismod", module)
                print("Disabled Apache module: " + module)
            if site_enabled("http-api-ssl"):
                run("a2dissite", "http-api-ssl")
                print("Disabled optional PHP HTTP API site (port 8443).")
        elif state is not None:
            for module in state["modules"]:
                run("a2enmod", module)
            check_handlers(False)
            run("a2disconf", GUARD_NAME)
            if state["http_api"]:
                run("a2ensite", "http-api-ssl")
        run("apache2ctl", "configtest")
        check_handlers(disabled)
        run("systemctl", "start", "apache2.service")
        validate(disabled)
    except (Exception, KeyboardInterrupt):
        run("systemctl", "stop", "apache2.service", check=False)
        install_guard()
        print("FAILED: Apache has been left stopped with the PHP deny guard enabled.\n"
              "Rollback state retained. Correct the reported error and rerun this script.", file=sys.stderr)
        raise
    if not disabled and state is not None:
        (STATE_DIR / "state.json").unlink()
    print("CONFIRMED: web PHP {}.".format("DISABLED" if disabled else "ENABLED"))
    print(IMPACT if disabled else "Web PHP execution verified; saved module/API configuration restored if present.\n"
          "PHP CLI is unchanged.")
    charging = run("systemctl", "is-active", "openwb2.service", check=False)
    print("Charging service openwb2: " + (charging.stdout.strip() or "unknown") + " (not changed).")
    print("Recheck after appliance updates. Startup/settings integration is not installed;\n"
          "startup setup may re-enable the API site, but the global PHP deny guard remains enabled.")


def main():
    parser = argparse.ArgumentParser(
        description=__doc__,
        epilog=IMPACT + "\nRequires the shipped openWB Apache sites and mod_php, not CGI/FPM or custom vhosts. "
        "Run with sudo. Repeated runs revalidate. Enable restores only this script's saved configuration. "
        "Any failed post-change check leaves Apache stopped. No startup/UI changes are made.",
        formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("mode", choices=("enable", "disable"))
    args = parser.parse_args()
    if os.geteuid() != 0:
        parser.exit(1, "Run this script with sudo (root permissions are required).\n")
    # Do not inherit caller-supplied Apache configuration, executable paths or HTTP proxy settings.
    os.environ["PATH"] = "/usr/sbin:/usr/bin:/sbin:/bin"
    for key in list(os.environ):
        if key.startswith("APACHE_"):
            del os.environ[key]
    try:
        STATE_DIR.mkdir(mode=0o700, parents=True, exist_ok=True)
        info = STATE_DIR.lstat()
        if STATE_DIR.is_symlink() or info.st_uid != 0 or info.st_mode & 0o077:
            raise RuntimeError("Rollback directory must be root-owned, private and not a symlink.")
        with (STATE_DIR / "lock").open("w") as lock:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
            change(args.mode)
        return 0
    except (OSError, ValueError, RuntimeError, subprocess.TimeoutExpired) as error:
        print("ERROR: {}. Requested result NOT confirmed.".format(error), file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())

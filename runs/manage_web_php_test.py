import importlib.util
import fcntl
import os
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import time
from types import SimpleNamespace
from unittest.mock import Mock
from urllib.error import HTTPError, URLError
from urllib.request import ProxyHandler, build_opener

import pytest


spec = importlib.util.spec_from_file_location("manage_web_php", Path(__file__).with_name("manage_web_php.py"))
php = importlib.util.module_from_spec(spec)
spec.loader.exec_module(php)


@pytest.fixture
def appliance(tmp_path, monkeypatch):
    apache = tmp_path / "apache"
    state = tmp_path / "state"
    base = tmp_path / "openWB"
    for directory in ("mods-enabled", "mods-available", "sites-enabled", "sites-available",
                      "conf-available", "conf-enabled"):
        (apache / directory).mkdir(parents=True)
    state.mkdir()
    (base / "web").mkdir(parents=True)
    (base / "data/config/apache").mkdir(parents=True)
    for name in ("localhost", "000-default", "apache-openwb-ssl", "http-api-ssl"):
        text = "# standard " + name
        (base / "data/config/apache" / (name + ".conf")).write_text(text)
        (apache / "sites-available" / (name + ".conf")).write_text(text)
        (apache / "sites-enabled" / (name + ".conf")).write_text(text)
    for name in ("php7.4", "php8.2"):
        (apache / "mods-available" / (name + ".load")).touch()
        (apache / "mods-enabled" / (name + ".load")).touch()
    monkeypatch.setattr(php, "APACHE", apache)
    monkeypatch.setattr(php, "STATE_DIR", state)
    monkeypatch.setattr(php, "BASE", base)
    monkeypatch.setattr(php, "WEB_ROOT", tmp_path / "www")
    php.WEB_ROOT.mkdir()
    commands = []
    extra_modules = []
    includes = []

    def command(*args, check=True):
        commands.append(args)
        out = ""
        if args == ("apache2ctl", "-M"):
            out = "\n".join(" {}_module (shared)".format(m.replace(".", "")) for m in php.modules())
            out += "\n" + "\n".join(extra_modules)
        elif args == ("apache2ctl", "-t", "-D", "DUMP_INCLUDES"):
            out = "\n".join(" (1) " + str(p) for p in includes)
        elif args == ("systemctl", "show", "--property=ActiveState", "--value", "apache2.service"):
            out = "inactive"
        elif args[0] in {"a2enmod", "a2dismod"}:
            path = apache / "mods-enabled" / (args[1] + ".load")
            path.touch() if args[0] == "a2enmod" else path.unlink()
        elif args[0] in {"a2ensite", "a2dissite"}:
            path = apache / "sites-enabled" / (args[1] + ".conf")
            if args[0] == "a2ensite":
                path.write_text((apache / "sites-available" / path.name).read_text())
            else:
                path.unlink()
        elif args[0] in {"a2enconf", "a2disconf"}:
            path = apache / "conf-enabled" / (args[1] + ".conf")
            if args[0] == "a2enconf":
                if not path.exists():
                    path.symlink_to(apache / "conf-available" / path.name)
            elif path.exists():
                path.unlink()
        elif args[0] == "curl":
            if args[-1].endswith("index.html"):
                out = "static\n200"
            elif not php.modules():
                out = "forbidden\n403"
            else:
                name = args[-1].rsplit("/", 1)[1]
                text = (base / "web" / name).read_text()
                out = text.split("'")[1] + "\n200"
        return SimpleNamespace(returncode=0, stdout=out, stderr="")

    runner = Mock(side_effect=command)
    monkeypatch.setattr(php, "run", runner)
    return SimpleNamespace(apache=apache, state=state, base=base, commands=commands,
                           extra_modules=extra_modules, includes=includes, runner=runner)


@pytest.mark.parametrize("api_enabled", [False, True])
def test_round_trip_and_repeated_runs(appliance, api_enabled, capsys):
    if not api_enabled:
        (appliance.apache / "sites-enabled/http-api-ssl.conf").unlink()
    original = php.modules()
    php.change("disable")
    snapshot = php.read_state()
    assert snapshot == {"modules": sorted(original), "http_api": api_enabled}
    assert not php.modules()
    assert not php.site_enabled("http-api-ssl")
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").read_text() == php.GUARD
    php.change("disable")
    assert php.read_state() == snapshot
    php.change("enable")
    assert php.modules() == original
    assert php.site_enabled("http-api-ssl") == api_enabled
    assert php.read_state() is None
    php.change("enable")
    assert not list((appliance.base / "web").iterdir())
    assert "CONFIRMED: web PHP DISABLED" in capsys.readouterr().out
    assert appliance.commands.count(("systemctl", "stop", "apache2.service")) == 4
    assert not any("php" == cmd[0] and "-n" not in cmd for cmd in appliance.commands)
    assert not any(cmd[0] == "systemctl" and "openwb2.service" in cmd and "stop" in cmd
                   for cmd in appliance.commands)


@pytest.mark.parametrize("handler", ["proxy_fcgi", "cgi", "cgid", "fcgid", "actions"])
def test_alternate_handlers_fail_closed(appliance, handler):
    appliance.extra_modules.append(" {}_module (shared)".format(handler))
    with pytest.raises(RuntimeError, match="Alternate"):
        php.change("disable")
    assert ("systemctl", "start", "apache2.service") not in appliance.commands
    assert ("a2enconf", php.GUARD_NAME) in appliance.commands
    assert appliance.commands[-2] == ("systemctl", "stop", "apache2.service")
    assert php.read_state() is not None


def test_alternate_included_handler(appliance):
    config = appliance.apache / "custom.conf"
    config.write_text('SetHandler "proxy:unix:/run/php.sock|fcgi://localhost"\n')
    appliance.includes.append(config)
    with pytest.raises(RuntimeError, match="Alternate PHP"):
        php.change("disable")
    assert ("systemctl", "start", "apache2.service") not in appliance.commands


@pytest.mark.parametrize("directive", [
    "ProxyPass /external http://backend/extensionless",
    "RewriteRule ^/external http://backend/extensionless [P,L]",
    'SetHandler "proxy:http://backend/extensionless"',
])
def test_custom_included_proxy_rejected(appliance, directive):
    config = appliance.apache / "custom.conf"
    config.write_text(directive)
    appliance.includes.append(config)
    with pytest.raises(RuntimeError, match="Unsupported proxy/rewrite"):
        php.change("disable")
    assert ("systemctl", "start", "apache2.service") not in appliance.commands


@pytest.mark.parametrize("directive", [
    "AddHandler application/x-httpd-php .inc", "SetHandler application/x-httpd-php",
    "AddType application/x-httpd-php .inc", "RewriteRule ^x http://backend/php [P]",
])
def test_custom_htaccess_rejected_before_unloading_php(appliance, directive):
    (php.WEB_ROOT / ".htaccess").write_text(directive)
    original_modules = php.modules()
    with pytest.raises(RuntimeError, match="Unsupported per-directory"):
        php.change("disable")
    assert php.modules() == original_modules
    assert ("systemctl", "start", "apache2.service") not in appliance.commands


def test_htaccess_scans_linked_content_and_handles_cycles(appliance):
    linked = appliance.base / "web"
    (linked / ".htaccess").write_text("AddHandler application/x-httpd-php .inc")
    (php.WEB_ROOT / "openWB").symlink_to(appliance.base, target_is_directory=True)
    (linked / "cycle").symlink_to(php.WEB_ROOT, target_is_directory=True)
    with pytest.raises(RuntimeError, match="Unsupported per-directory"):
        php.change("disable")


def test_http_failure_stops_apache_without_printing_source(appliance, monkeypatch, capsys):
    monkeypatch.setattr(php, "http", lambda url: ("<?php secret source", "200"))
    with pytest.raises(RuntimeError, match="PHP check failed"):
        php.change("disable")
    assert ("systemctl", "stop", "apache2.service") == appliance.commands[-2]
    assert php.read_state() is not None
    assert "secret source" not in capsys.readouterr().out


def test_missing_saved_module_does_not_remove_guard(appliance):
    php.change("disable")
    (appliance.apache / "mods-available/php7.4.load").unlink()
    appliance.commands.clear()
    with pytest.raises(RuntimeError, match="no longer installed"):
        php.change("enable")
    assert ("a2disconf", php.GUARD_NAME) not in appliance.commands
    assert ("systemctl", "stop", "apache2.service") not in appliance.commands


def test_no_state_does_not_guess_module(appliance):
    for path in (appliance.apache / "mods-enabled").iterdir():
        path.unlink()
    with pytest.raises(RuntimeError, match="No rollback state"):
        php.change("enable")
    assert ("systemctl", "stop", "apache2.service") not in appliance.commands


@pytest.mark.parametrize("mode", ["enable", "disable"])
def test_inactive_apache_is_not_started_or_modified(appliance, mode):
    original = appliance.runner.side_effect

    def inactive(*args, **kwargs):
        if args == ("systemctl", "is-active", "--quiet", "apache2.service"):
            return SimpleNamespace(returncode=3, stdout="inactive", stderr="")
        return original(*args, **kwargs)

    appliance.runner.side_effect = inactive
    with pytest.raises(RuntimeError, match="will not start a deliberately stopped"):
        php.change(mode)
    assert not (appliance.state / "state.json").exists()
    assert ("systemctl", "start", "apache2.service") not in appliance.commands
    assert ("systemctl", "stop", "apache2.service") not in appliance.commands


def test_enable_preserves_previously_disabled_api_after_external_change(appliance):
    (appliance.apache / "sites-enabled/http-api-ssl.conf").unlink()
    php.change("disable")
    path = appliance.apache / "sites-enabled/http-api-ssl.conf"
    path.write_text((appliance.base / "data/config/apache/http-api-ssl.conf").read_text())
    php.change("enable")
    assert not php.site_enabled("http-api-ssl")


def test_enable_checks_restored_api_state(appliance):
    php.change("disable")
    original = appliance.runner.side_effect

    def failed_restore(*args, **kwargs):
        if args == ("a2ensite", "http-api-ssl"):
            return SimpleNamespace(returncode=0, stdout="", stderr="")
        return original(*args, **kwargs)

    appliance.runner.side_effect = failed_restore
    with pytest.raises(RuntimeError, match="does not match"):
        php.change("enable")
    assert php.read_state() is not None
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()


def test_modified_available_api_is_rejected_before_restart(appliance):
    php.change("disable")
    (appliance.apache / "sites-available/http-api-ssl.conf").write_text("# custom API site")
    appliance.commands.clear()
    with pytest.raises(RuntimeError, match="Custom Apache site"):
        php.change("enable")
    assert ("systemctl", "start", "apache2.service") not in appliance.commands
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()
    assert php.read_state() is not None


def test_reports_saved_apache_package_versions_while_disabled(appliance):
    php.change("disable")
    appliance.commands.clear()
    php.change("disable")
    for module in php.read_state()["modules"]:
        assert ("dpkg-query", "-W", "-f=${Version}", "libapache2-mod-" + module) in appliance.commands
    appliance.commands.clear()
    php.change("enable")
    for module in ("php7.4", "php8.2"):
        assert ("dpkg-query", "-W", "-f=${Version}", "libapache2-mod-" + module) in appliance.commands


def test_missing_cli_still_reports_saved_apache_package(appliance, capsys):
    original = appliance.runner.side_effect

    def missing_cli(*args, **kwargs):
        if args[0] == "php":
            raise FileNotFoundError("php")
        if args[0] == "dpkg-query":
            return SimpleNamespace(returncode=0, stdout="7.4-vendor-backport", stderr="")
        return original(*args, **kwargs)

    appliance.runner.side_effect = missing_cli
    php.version_info({"modules": ["php7.4"], "http_api": False})
    assert "7.4-vendor-backport" in capsys.readouterr().out


def test_custom_site_is_rejected_before_changes(appliance):
    (appliance.apache / "sites-enabled/custom.conf").write_text("custom")
    with pytest.raises(RuntimeError, match="Custom Apache site"):
        php.change("disable")
    assert not (appliance.state / "state.json").exists()
    assert ("systemctl", "stop", "apache2.service") not in appliance.commands


def test_invalid_state_rejected(appliance):
    (appliance.state / "state.json").write_text('{"modules": ["--force"], "http_api": true}')
    with pytest.raises(RuntimeError, match="Invalid rollback state"):
        php.change("enable")
    assert not appliance.commands


@pytest.mark.parametrize("failure", [RuntimeError("stop failed"), subprocess.TimeoutExpired("systemctl", 60)])
def test_initial_stop_failure_still_installs_guard_and_retries(appliance, failure):
    original = appliance.runner.side_effect
    stops = []

    def fail_first_stop(*args, **kwargs):
        if args == ("systemctl", "stop", "apache2.service"):
            stops.append(args)
            if len(stops) == 1:
                raise failure
        return original(*args, **kwargs)

    appliance.runner.side_effect = fail_first_stop
    with pytest.raises(type(failure)):
        php.change("disable")
    assert len(stops) == 2
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()
    assert ("systemctl", "start", "apache2.service") not in appliance.commands


def test_cleanup_stop_timeout_does_not_claim_success(appliance, capsys):
    original = appliance.runner.side_effect

    def stop_timeout(*args, **kwargs):
        if args[:2] == ("systemctl", "stop"):
            raise subprocess.TimeoutExpired("systemctl", 60)
        return original(*args, **kwargs)

    appliance.runner.side_effect = stop_timeout
    with pytest.raises(subprocess.TimeoutExpired):
        php.change("disable")
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()
    assert "could not be confirmed" in capsys.readouterr().err


def test_shared_apache_lock_matches_setup_script(tmp_path, monkeypatch):
    monkeypatch.setattr(php, "LOCK_DIR", tmp_path / "lock")
    setup = Path(__file__).with_name("setup_apache2.sh").read_text()
    assert "exec 9</run/openwb-apache/configuration.lock" in setup
    assert setup.index("flock --exclusive 9") < setup.index("restartService=0")
    with php.apache_lock():
        with (php.LOCK_DIR / "configuration.lock").open("r") as other:
            with pytest.raises(BlockingIOError):
                fcntl.flock(other, fcntl.LOCK_EX | fcntl.LOCK_NB)


def test_failed_enable_keeps_guard_and_removes_probe(appliance, monkeypatch):
    php.change("disable")
    monkeypatch.setattr(php, "http", lambda url: ("static", "200"))
    with pytest.raises(RuntimeError, match="PHP check failed"):
        php.change("enable")
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()
    assert not list((appliance.base / "web").iterdir())
    assert php.read_state() is not None


def test_guard_with_real_apache():
    apache = shutil.which("apache2")
    module_dir = Path("/usr/lib/apache2/modules")
    if not apache or not (module_dir / "mod_mpm_event.so").exists():
        pytest.skip("Debian Apache is not installed")
    with tempfile.TemporaryDirectory(prefix="openwb-apache-test-") as directory:
        root = Path(directory)
        root.chmod(0o755)
        (root / "index.html").write_text("dashboard")
        (root / "source.php").write_text("<?php this must not be disclosed")
        with socket.socket() as listener:
            listener.bind(("127.0.0.1", 0))
            port = listener.getsockname()[1]
        config = root / "apache.conf"
        config.write_text(
            'ServerRoot "{}"\nPidFile "{}/pid"\nErrorLog "{}/error.log"\n'
            'ServerName localhost\nListen 127.0.0.1:{}\n'
            'LoadModule mpm_event_module {}/mod_mpm_event.so\n'
            'LoadModule authz_core_module {}/mod_authz_core.so\n'.format(
                root, root, root, port, module_dir, module_dir)
            + ("User www-data\nGroup www-data\n" if os.geteuid() == 0 else "")
            + php.GUARD
            + '<VirtualHost 127.0.0.1:{}>\nDocumentRoot "{}"\n'
              '<Directory "{}">\nRequire all granted\n</Directory>\n</VirtualHost>\n'.format(port, root, root))
        process = subprocess.Popen([apache, "-f", str(config), "-X"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        client = build_opener(ProxyHandler({}))
        base_url = "http://127.0.0.1:" + str(port)
        try:
            for attempt in range(100):
                try:
                    with client.open(base_url + "/index.html", timeout=1) as response:
                        assert response.read() == b"dashboard"
                    break
                except URLError:
                    assert process.poll() is None, process.communicate()
                    time.sleep(0.05)
            else:
                pytest.fail("Isolated Apache did not start")
            for suffix in ("php", "PHP", "php7", "php74", "phtml", "phar", "phps", "php.txt", "php/path"):
                with pytest.raises(HTTPError) as error:
                    client.open(base_url + "/source." + suffix, timeout=2)
                assert error.value.code == 403
                assert b"<?php" not in error.value.read()
        finally:
            process.terminate()
            process.communicate(timeout=10)

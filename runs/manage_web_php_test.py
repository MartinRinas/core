import importlib.util
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock

import pytest


spec = importlib.util.spec_from_file_location("manage_web_php", Path(__file__).with_name("manage_web_php.py"))
php = importlib.util.module_from_spec(spec)
spec.loader.exec_module(php)


@pytest.fixture
def appliance(tmp_path, monkeypatch):
    apache = tmp_path / "apache"
    state = tmp_path / "state"
    base = tmp_path / "openWB"
    for directory in ("mods-enabled", "mods-available", "sites-enabled", "conf-available", "conf-enabled"):
        (apache / directory).mkdir(parents=True)
    state.mkdir()
    (base / "web").mkdir(parents=True)
    (base / "data/config/apache").mkdir(parents=True)
    for name in ("localhost", "000-default", "apache-openwb-ssl", "http-api-ssl"):
        text = "# standard " + name
        (base / "data/config/apache" / (name + ".conf")).write_text(text)
        (apache / "sites-enabled" / (name + ".conf")).write_text(text)
    for name in ("php7.4", "php8.2"):
        (apache / "mods-available" / (name + ".load")).touch()
        (apache / "mods-enabled" / (name + ".load")).touch()
    monkeypatch.setattr(php, "APACHE", apache)
    monkeypatch.setattr(php, "STATE_DIR", state)
    monkeypatch.setattr(php, "BASE", base)
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
        elif args[0] in {"a2enmod", "a2dismod"}:
            path = apache / "mods-enabled" / (args[1] + ".load")
            path.touch() if args[0] == "a2enmod" else path.unlink()
        elif args[0] in {"a2ensite", "a2dissite"}:
            path = apache / "sites-enabled" / (args[1] + ".conf")
            if args[0] == "a2ensite":
                path.write_text((base / "data/config/apache" / path.name).read_text())
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
    assert appliance.commands[-2:] == [("systemctl", "stop", "apache2.service"), ("a2enconf", php.GUARD_NAME)]
    assert php.read_state() is not None


def test_alternate_included_handler(appliance):
    config = appliance.apache / "custom.conf"
    config.write_text('SetHandler "proxy:unix:/run/php.sock|fcgi://localhost"\n')
    appliance.includes.append(config)
    with pytest.raises(RuntimeError, match="Alternate PHP"):
        php.change("disable")
    assert ("systemctl", "start", "apache2.service") not in appliance.commands


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


def test_failed_enable_keeps_guard_and_removes_probe(appliance, monkeypatch):
    php.change("disable")
    monkeypatch.setattr(php, "http", lambda url: ("static", "200"))
    with pytest.raises(RuntimeError, match="PHP check failed"):
        php.change("enable")
    assert (appliance.apache / "conf-enabled/disable-web-php.conf").exists()
    assert not list((appliance.base / "web").iterdir())
    assert php.read_state() is not None

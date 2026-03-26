from unittest.mock import Mock

import pytest

from helpermodules import pub


def test_is_allowed_local_hostname_allows_localhost():
    assert pub.is_allowed_local_hostname("localhost")


@pytest.mark.parametrize("hostname", ["127.0.0.1", "::1", "192.168.1.15", "10.0.0.5"])
def test_is_allowed_local_hostname_allows_local_ips(hostname):
    assert pub.is_allowed_local_hostname(hostname)


def test_is_allowed_local_hostname_allows_mdns_without_resolution(monkeypatch):
    mock_getaddrinfo = Mock(side_effect=OSError("name lookup failed"))
    monkeypatch.setattr(pub.socket, "getaddrinfo", mock_getaddrinfo)
    assert pub.is_allowed_local_hostname("envoy.local")


def test_is_allowed_local_hostname_allows_mdns_on_gaierror(monkeypatch):
    mock_getaddrinfo = Mock(side_effect=pub.socket.gaierror("gai lookup failed"))
    monkeypatch.setattr(pub.socket, "getaddrinfo", mock_getaddrinfo)
    assert pub.is_allowed_local_hostname("envoy.local")


def test_is_allowed_local_hostname_rejects_public_hostname(monkeypatch):
    mock_getaddrinfo = Mock(return_value=[(None, None, None, None, ("8.8.8.8", 0))])
    monkeypatch.setattr(pub.socket, "getaddrinfo", mock_getaddrinfo)
    assert not pub.is_allowed_local_hostname("example.org")


def test_is_allowed_local_hostname_rejects_url_like_input():
    assert not pub.is_allowed_local_hostname("http://example.local/path")


def test_pub_single_rejects_non_local_host():
    with pytest.raises(ValueError):
        pub.pub_single("openWB/test/topic", {"test": True}, hostname="example.org")

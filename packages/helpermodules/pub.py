import json
import ipaddress
import logging
import re
import socket
import concurrent.futures
import atexit
from urllib.parse import urlsplit
import paho.mqtt.publish as publish

from helpermodules.broker import InternalBrokerPublisher


log = logging.getLogger(__name__)
_HOSTNAME_LABEL_PATTERN = re.compile(r"^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$", re.IGNORECASE)
_DNS_LOOKUP_TIMEOUT_SECONDS = 2
_DNS_RESOLVER_EXECUTOR = concurrent.futures.ThreadPoolExecutor(max_workers=2)
atexit.register(lambda: _DNS_RESOLVER_EXECUTOR.shutdown(wait=True))


def _is_valid_hostname_syntax(hostname: str) -> bool:
    hostname = hostname.rstrip(".")
    if not hostname or len(hostname) > 253:
        return False
    labels = hostname.split(".")
    return all(_HOSTNAME_LABEL_PATTERN.match(label) for label in labels)


def _extract_host_and_port(candidate: str):
    stripped = candidate.strip()
    if not stripped:
        return None, None

    parse_like_url = (
        "://" in stripped or "/" in stripped or stripped.startswith("//") or stripped.count(":") == 1
    )
    if parse_like_url:
        url_candidate = stripped
        if "://" not in stripped and not stripped.startswith("//"):
            url_candidate = f"//{stripped}"
        parsed = urlsplit(url_candidate)
        if not parsed.hostname:
            return None, None
        try:
            return parsed.hostname, parsed.port
        except ValueError:
            return None, None

    return stripped, None


def is_allowed_local_hostname(hostname: str) -> bool:
    """Validate local MQTT target hostnames.

    Defense-in-depth:
    - UI checks are helpful for UX but can be bypassed.
    - Backend validation remains mandatory before opening network connections.
    """
    if not isinstance(hostname, str):
        return False

    candidate, _ = _extract_host_and_port(hostname)
    if not candidate:
        return False

    lowered = candidate.lower()
    if lowered == "localhost":
        return True

    try:
        ip = ipaddress.ip_address(lowered)
        return ip.is_private or ip.is_loopback or ip.is_link_local
    except ValueError:
        pass

    if not _is_valid_hostname_syntax(lowered):
        return False

    try:
        future = _DNS_RESOLVER_EXECUTOR.submit(socket.getaddrinfo, lowered, None, 0, socket.SOCK_STREAM)
        results = future.result(timeout=_DNS_LOOKUP_TIMEOUT_SECONDS)
    except concurrent.futures.TimeoutError:
        log.warning(
            "Hostname validation timeout for '%s' after %s seconds - rejecting as non-local",
            lowered,
            _DNS_LOOKUP_TIMEOUT_SECONDS
        )
        return False
    except (socket.gaierror, OSError):
        # mDNS may not be resolvable in all environments (e.g. CI containers),
        # but `.local` hostnames are still intended local targets.
        return lowered.endswith(".local")

    if not results:
        return False

    for result in results:
        resolved_ip_str = result[4][0]
        try:
            resolved_ip = ipaddress.ip_address(resolved_ip_str)
        except ValueError:
            return False
        if not (resolved_ip.is_private or resolved_ip.is_loopback or resolved_ip.is_link_local):
            return False
    return True


class PubSingleton:
    def __init__(self) -> None:
        self.publisher = InternalBrokerPublisher()
        self.publisher.start_loop()

    def pub(self, topic: str, payload, qos: int = 0, retain: bool = True) -> None:
        if payload == "":
            self.publisher.client.publish(topic, payload, qos=qos, retain=retain)
        else:
            self.publisher.client.publish(topic, payload=json.dumps(payload), qos=qos, retain=retain)


class Pub:
    instance = None

    def __init__(self) -> None:
        if not Pub.instance:
            Pub.instance = PubSingleton()

    def __getattr__(self, name):
        return getattr(self.instance, name)


def pub_single(topic, payload, hostname="localhost", port=1883, no_json=False, retain=True):
    """Publishes eine einzelne Nachricht an einen Host, der nicht der localhost ist.

        Parameter
    ---------
    topic : str
        Topic, an das gepusht werden soll
    payload : int, str, list, float
        Payload, der gepusht werden soll. Nicht als json, da ISSS kein json-Payload verwendet.
    hostname: str
        IP des Hosts
    no_json: bool
        Kompatibilität mit ISSS, die ramdisk verwenden.
    """
    if no_json:
        publish.single(topic, payload, hostname=hostname, port=port, retain=retain)
    else:
        publish.single(topic, json.dumps(payload), hostname=hostname, port=port, retain=retain)


def pub_single_validated_local_hostname(topic, payload, hostname="localhost", port=1883, no_json=False, retain=True):
    """ published eine einzelne Nachricht an einen Host, der nicht der localhost ist.

        Parameter
    ---------
    topic : str
        Topic, an das gepusht werden soll
    payload : int, str, list, float
        Payload, der gepusht werden soll. Nicht als json, da ISSS kein json-Payload verwendet.
    hostname: str
        IP des Hosts
    no_json: bool
        Kompatibilität mit ISSS, die ramdisk verwenden.
    """
    normalized_hostname, parsed_port = _extract_host_and_port(hostname)
    if not normalized_hostname:
        raise ValueError(
            f"Invalid non-local hostname for MQTT publish: {hostname!r}. "
            "Could not extract a hostname from input."
        )
    if not is_allowed_local_hostname(normalized_hostname):
        raise ValueError(
            f"Invalid hostname for MQTT publish: {hostname!r} (parsed hostname: {normalized_hostname!r}). "
            "Only localhost, local/private IPs, and .local mDNS hostnames are allowed."
        )
    normalized_port = parsed_port if parsed_port is not None else port

    pub_single(topic, payload, hostname=normalized_hostname, port=normalized_port, no_json=no_json, retain=retain)

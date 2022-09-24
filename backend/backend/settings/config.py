import os
from configparser import ConfigParser

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


APP_CONF_FILENAME = "app.default.conf"
OVERRIDE_APP_CONF_FILENAME = "app.conf"
SECRETS_CONF_FILENAME = "secrets.default.conf"
OVERRIDE_SECRETS_CONF_FILENAME = "secrets.conf"


def _build_path(conf_file_name):
    return os.path.join(BASE_DIR, conf_file_name)


def _read_config(parser: ConfigParser, location: str):
    try:
        parser.read(location)
    except Exception:
        print(f"Could not read config file from location {location}")


# Parse app conf from appropriate config file
app_config = ConfigParser()
override_app_conf_path = _build_path(OVERRIDE_APP_CONF_FILENAME)
default_app_conf_path = _build_path(APP_CONF_FILENAME)
if os.path.exists(_build_path(OVERRIDE_APP_CONF_FILENAME)):
    _read_config(app_config, override_app_conf_path)
else:
    _read_config(app_config, default_app_conf_path)


# Parse secrets conf from appropriate config file
secrets_config = ConfigParser()
override_secrets_conf_path = _build_path(OVERRIDE_SECRETS_CONF_FILENAME)
default_secrets_conf_path = _build_path(SECRETS_CONF_FILENAME)

if os.path.exists(_build_path(OVERRIDE_SECRETS_CONF_FILENAME)):
    _read_config(secrets_config, override_secrets_conf_path)
else:
    _read_config(secrets_config, default_secrets_conf_path)

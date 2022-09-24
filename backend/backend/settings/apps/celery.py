from backend.settings.config import app_config

REDIS_HOST = app_config.get("celery", "redis_host")
REDIS_DB = app_config.get("celery", "redis_db")
CELERY_BROKER_URL = f"{REDIS_HOST}/{REDIS_DB}"
# 5 minutes max execution time per task
CELERY_TASK_TIME = 5 * 60 
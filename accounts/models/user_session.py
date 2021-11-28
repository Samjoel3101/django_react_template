from django.db import models
from django.contrib.sessions.models import Session
from django.conf import settings


class UserSession(models.Model):
    class Meta:
        db_table = "user_sessions"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

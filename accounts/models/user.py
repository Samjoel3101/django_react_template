from django.db import models
from django.contrib.auth.models import AbstractUser
from django_mysql.models.fields import EnumField


class UserType(models.TextChoices):
    # Please change the field and value of this user type to your preference before running migrations
    NORMAL = "normal"


class User(AbstractUser):
    class Meta:
        db_table = "users"

    # Change the default user type to your preference
    type = EnumField(choices=UserType.choices, default=UserType.NORMAL, db_index=True)

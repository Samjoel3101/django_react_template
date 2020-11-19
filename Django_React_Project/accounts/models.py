from django.db import models
from django.contrib.auth.models import AbstractUser 

class User(AbstractUser):

    class UserTypes(models.TextChoices):
        Individual = "Individual", "Individual"
    
    user_type = models.CharField(max_length = 25, default = UserTypes.Individual)

class IndividualManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(user_type = User.UserTypes.Individual)

class Individual(User):
    objects = IndividualManager()

    class Meta:
        proxy = True 

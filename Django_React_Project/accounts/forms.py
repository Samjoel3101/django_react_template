from django import forms 
from django.contrib.auth.forms import UserChangeForm, UserCreationForm 

from .models import User 

class UserCreationForm(UserCreationForm):
    email = forms.EmailField() 

    class Meta:
        model = User 
        fields = ['username', 'email', 'password1', 'password2']

class UserChangeForm(UserChangeForm):
    class Meta:
        model = User 
        fields = ['email']
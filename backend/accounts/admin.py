from django.contrib import admin
from django.contrib.auth.admin import UserAdmin 

from .models import User 
from .forms import UserChangeForm, UserCreationForm 

class UserAdmin(UserAdmin):
    model = User 
    add_form = UserChangeForm 
    form = UserCreationForm 

admin.site.register(User, UserAdmin)
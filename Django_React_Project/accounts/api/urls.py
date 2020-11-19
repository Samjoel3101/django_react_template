from django.urls import path 

from rest_auth.registration.views import RegisterView
from rest_auth.views import LogoutView, LoginView 

urlpatterns = [
    path('register/', RegisterView.as_view(), name = 'user_register'),
    path('login/', LoginView.as_view(), name = 'user_login'),
    path('logout/', LogoutView.as_view(), name = 'user_logout') 
]
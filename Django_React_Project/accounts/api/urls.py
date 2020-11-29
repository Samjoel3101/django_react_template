from django.urls import path 

from rest_auth.registration.views import RegisterView
from rest_auth.views import LogoutView, LoginView, UserDetailsView  

from .views import GoogleLoginAPIView, CheckUserAPIView 

urlpatterns = [
    path('register/', RegisterView.as_view(), name = 'user_register'),
    path('login/', LoginView.as_view(), name = 'user_login'),
    path('logout/', LogoutView.as_view(), name = 'user_logout'), 
    path('google-login/', GoogleLoginAPIView.as_view(), name = 'google_login'), 

    path('check-user/', CheckUserAPIView.as_view(), name = 'user_check'), 
    path('user-detail/', UserDetailsView.as_view(), name = 'user_details')
]
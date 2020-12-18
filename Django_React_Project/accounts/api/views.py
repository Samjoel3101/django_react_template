from rest_framework.authtoken.models import Token 
from rest_framework.views import APIView 
from rest_framework.response import Response 

from dj_rest_auth.registration.views import SocialLoginView 
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter 
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

from .serializers import CheckUserSerializer 

class GoogleLoginAPIView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter 
    client_class = OAuth2Client 
    callback_url = 'http://localhost:8000'
    
class CheckUserAPIView(APIView):
    serializer_class = CheckUserSerializer

    def post(self, request, *args, **kwargs):
        serialized_data = self.serializer_class(data = request.data) 
        
        if serialized_data.is_valid():
            if request.user.is_authenticated:
                token_obj = serialized_data.validated_data.get('token_obj')
                token_username = token_obj.user.username 
            
                if request.user.username == token_username:
                    return Response(data = {"valid_user": 'true'}, status = 200) 
    
        return Response(data = {"valid_user": 'false', "errors": serialized_data.errors}, status = 400) 
    
    
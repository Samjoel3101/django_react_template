from django.contrib.auth import get_user_model

from rest_framework import serializers 
from rest_framework.serializers import Serializer  
from rest_framework.authtoken.models import Token 

class CheckUserSerializer(Serializer): 

    token = serializers.CharField(max_length = 120)  

    def validate(self, data):
        token = data.get('token') 
        
        token_obj = Token.objects.filter(key = token)

        if token_obj.count() == 0:
            raise serializers.ValidationError('Such a user does not exist') 
        elif token_obj.count() > 1:
            raise serializers.ValidationError('More than one user exist with this token which is not possible. Malicious Activity found')
        else:   
            data['token_obj'] = token_obj[0]     
            return data 
        

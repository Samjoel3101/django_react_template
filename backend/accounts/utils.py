from django.conf import settings
from allauth.utils import build_absolute_uri as allauth_build_absolute_uri


def build_absolute_uri(location, request):
    protocol = "http" if settings.DEVELOPMENT else "https"
    allauth_build_absolute_uri(request=request, location=location, protocol=protocol)

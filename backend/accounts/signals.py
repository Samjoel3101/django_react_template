from allauth.account.signals import user_logged_in
from django.dispatch import receiver

from accounts.models import UserSession


@receiver(user_logged_in)
def create_user_session(request, user, *args, **kwargs):
    UserSession.objects.get_or_create(user=user, session_id=request.session.session_key)

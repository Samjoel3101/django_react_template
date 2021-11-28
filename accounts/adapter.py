from allauth.account.adapter import DefaultAccountAdapter
from django.urls import reverse

from accounts.utils import build_absolute_uri


class AccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        path = reverse("accounts:auth:confirm-email", kwargs={"key": emailconfirmation.key})
        return build_absolute_uri(request=request, location=path)

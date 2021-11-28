from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "hello_world/", TemplateView.as_view(template_name="hello_world.html"), name="account_email_verification_sent"
    ),
    path("", include("accounts.urls", namespace="accounts")),
]

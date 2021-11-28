from allauth.account.views import confirm_email
from django.urls import path, include

import accounts.views.api as api_views

app_name = "accounts"

urlpatterns = [
    path(
        "api/",
        include(
            (
                [
                    path(
                        "auth/",
                        include(
                            ([path("register/", api_views.RegisterView.as_view(), name="register")], "auth-api"),
                            namespace="auth",
                        ),
                    )
                ],
                app_name,
            ),
            namespace="api",
        ),
    ),
    # Frontend urls
    path(
        "auth/",
        include(
            ([path("confirm-email/<str:key>/", confirm_email, name="confirm-email")], "auth_views"), namespace="auth"
        ),
    ),
]

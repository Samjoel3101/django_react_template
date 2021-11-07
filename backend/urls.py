from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf.urls.static import static 
from django.conf import settings 

urlpatterns = [
    path('admin/', admin.site.urls),
    path("hello_world/", TemplateView.as_view(template_name = "hello_world.html"))
]

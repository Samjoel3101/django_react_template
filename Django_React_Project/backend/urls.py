from django.contrib import admin
from django.urls import path, re_path, include 
from django.conf.urls.static import static
from django.conf import settings 
from django.views.generic import TemplateView 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('src_api.urls')),
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name = 'frontend/index.html'))
]
# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

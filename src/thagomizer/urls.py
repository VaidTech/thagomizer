from django.contrib import admin
from django.urls import path, include


urlpatterns = [
	path('admin/', admin.site.urls),
    path('', include(('main_project.urls', 'main_project'), namespace='main_project')),
    
]
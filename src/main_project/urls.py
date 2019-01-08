from django.urls import path, include
from main_project.views import home, team, report, \
							graphy, graphing_dashboard

urlpatterns = [
    	path('', home, name='home'),
    	path('team', team, name='team'),
    	path('report', report, name='report'),
    	path('graphy', graphy, name='graphy'),
    	path('graphing_dashboard', graphing_dashboard, name='graphing_dashboard'),
]

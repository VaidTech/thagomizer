from django.urls import path, include
from main_project.views import home, team, report, \
							graphy, choose_bam_file, graphing_dashboard

urlpatterns = [
    	path('', home, name='home'),
    	path('team', team, name='team'),
    	path('report', report, name='report'),
    	path('graphy', graphy, name='graphy'),
    	path('choose_bam_file', choose_bam_file, name='choose_bam_file'),
    	path('graphing_dashboard/', graphing_dashboard, name='graphing_dashboard'),
]

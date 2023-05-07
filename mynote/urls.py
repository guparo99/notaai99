# from . import views
from .views import *

from django.urls import path

urlpatterns = [

    path('',         HomePageView.as_view(),    name='home'),




    
] 
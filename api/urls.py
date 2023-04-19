from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.Profile_API, name='Profile'),
    path('navbar/', views.NavBar_API, name='NavBar'),
]
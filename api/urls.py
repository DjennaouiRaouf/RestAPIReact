from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.Profile_API, name='Profile'),
    path('Competence/', views.Competence_API, name='Competence'),
    path('avatar/', views.Avatar_API, name='Avatar'),
]
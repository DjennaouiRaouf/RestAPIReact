from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.Profile_API, name='Profile'),
    path('profileinfo/', views.ProfileInfo_API, name='ProfileInfo'),
    path('competence/', views.Competence_API, name='Competence'),
    path('avatar/', views.Avatar_API, name='Avatar'),
    path('type/', views.Type_API, name='Type'),
    path('langue/', views.Langue_API, name='Langue'),
    path('parcour/', views.Parcour_API, name='Parcour'),
    path('projet/', views.Projet_API, name='Projet'),
]
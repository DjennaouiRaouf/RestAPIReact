from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.Profile_API, name='Profile'),
    path('competence/', views.Competence_API, name='Competence'),
    path('avatar/', views.Avatar_API, name='Avatar'),
    path('type/', views.Type_API, name='Type'),
    path('langue/', views.Langue_API, name='Langue'),
]
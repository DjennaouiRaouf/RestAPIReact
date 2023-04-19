from django.contrib import admin

# Register your models here.

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from import_export.admin import ImportExportMixin, ExportActionMixin

from .models import *

lp=40

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False


class ProfileAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('nom','prenom','photo_de_profil','date_de_naissance','lieu_de_naissance','numero_de_telephone',
                    'diplome','titre_du_diplome','adresse','universite','email')

    list_filter = ['diplome', 'titre_du_diplome','adresse']

admin.site.register(Profile, ProfileAdmin)


class NavBarAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('item','href','parent')

    list_filter = ['item', 'href','parent']

admin.site.register(NavBar, NavBarAdmin)
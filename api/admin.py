import os

from django.contrib import admin

# Register your models here.

from django.contrib import admin
from import_export.admin import ImportExportMixin, ExportActionMixin

from RestAPIReact import settings
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


class CompetenceAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('title','type','image','text',)

    list_filter = ['title','type','image','text',]
    def delete_model(self, request, obj):
        if obj.image:
            file_path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
            os.remove(file_path)
        obj.delete()

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if obj.image:
                path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
                os.remove(path)
        super(CompetenceAdmin, self).delete_queryset(request, queryset)



admin.site.register(Competence,CompetenceAdmin)


class AvatarAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('user_id','image')
    list_filter = ['user_id']


    def delete_model(self, request, obj):
        if obj.image:
            file_path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
            os.remove(file_path)
        obj.delete()

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if obj.image:
                path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
                os.remove(path)
        super(AvatarAdmin, self).delete_queryset(request, queryset)


admin.site.register(Avatar, AvatarAdmin)


class TypeAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('type',)
admin.site.register(Type, TypeAdmin)


class LangueAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('langue','image','score',)
    def delete_model(self, request, obj):
        if obj.image:
            file_path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
            os.remove(file_path)
        obj.delete()

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if obj.image:
                path = os.path.join(settings.MEDIA_ROOT, obj.image.name)
                os.remove(path)
        super(AvatarAdmin, self).delete_queryset(request, queryset)

admin.site.register(Langue, LangueAdmin)
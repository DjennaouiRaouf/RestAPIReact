import os

from admin_interface.models import Theme
from django.contrib import admin
from django.contrib.auth.models import Group
from import_export.admin import ImportExportMixin, ExportActionMixin

from RestAPIReact import settings
from .models import *

lp=25

class CustomUserAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    pass
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

class CustomGroupAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    pass
admin.site.unregister(Group)
admin.site.register(Group, CustomGroupAdmin)

class CustomThemesAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    pass
admin.site.unregister(Theme)
admin.site.register(Theme, CustomThemesAdmin)


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False


class ProfileAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('nom','prenom','photo_de_profil','date_de_naissance','lieu_de_naissance','numero_de_telephone',
                    'diplome','titre_du_diplome','adresse','universite','email','text','cv')

    list_filter = ['diplome', 'titre_du_diplome','adresse']

    def save_model(self, request, obj, form, change):

        if change:
            old_obj = self.model.objects.get(pk=obj.pk)

            if old_obj.cv and obj.cv != old_obj.cv:
                os.remove(os.path.join(settings.MEDIA_ROOT, str(old_obj.cv)))
            if old_obj.photo_de_profil and obj.photo_de_profil != old_obj.photo_de_profil:
                os.remove(os.path.join(settings.MEDIA_ROOT, str(old_obj.photo_de_profil)))

        obj.save()

    def delete_model(self, request, obj):
        if obj.photo_de_profil:
            file_path = os.path.join(settings.MEDIA_ROOT, obj.photo_de_profil.name)
            os.remove(file_path)
        if obj.cv:
            file_path = os.path.join(settings.MEDIA_ROOT, obj.cv.name)
            os.remove(file_path)
        obj.delete()

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if obj.photo_de_profil:
                path = os.path.join(settings.MEDIA_ROOT, obj.photo_de_profil.name)
                os.remove(path)
            if obj.cv:
                file_path = os.path.join(settings.MEDIA_ROOT, obj.cv.name)
                os.remove(file_path)
        super(ProfileAdmin, self).delete_queryset(request, queryset)


admin.site.register(Profile, ProfileAdmin)


class CompetenceAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('title','type','image','text',)

    list_filter = ['title','type','image','text',]

    def save_model(self, request, obj, form, change):

        if change:
            old_obj = self.model.objects.get(pk=obj.pk)

            if old_obj.image and obj.image != old_obj.image:
                os.remove(os.path.join(settings.MEDIA_ROOT, str(old_obj.image)))

        obj.save()

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

    def save_model(self, request, obj, form, change):

        if change:
            old_obj = self.model.objects.get(pk=obj.pk)

            if old_obj.image and obj.image != old_obj.image:
                os.remove(os.path.join(settings.MEDIA_ROOT, str(old_obj.image)))

        obj.save()

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

    def save_model(self, request, obj, form, change):

        if change:
            old_obj = self.model.objects.get(pk=obj.pk)

            if old_obj.image and obj.image != old_obj.image:
                os.remove(os.path.join(settings.MEDIA_ROOT, str(old_obj.image)))

        obj.save()

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
        super(Langue, self).delete_queryset(request, queryset)

admin.site.register(Langue, LangueAdmin)


class ParcourAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('titre','annee','text')
admin.site.register(Parcour, ParcourAdmin)


class ProjetAdmin(ImportExportMixin, ExportActionMixin,admin.ModelAdmin):
    list_per_page = lp
    list_display = ('titre','annee','text')
admin.site.register(Projet, ProjetAdmin)
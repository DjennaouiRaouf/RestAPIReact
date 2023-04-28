# Generated by Django 4.2 on 2023-04-28 10:52

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Avatar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=30, verbose_name="Nom d' utilisateur ")),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='Langue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('langue', models.CharField(max_length=30)),
                ('image', models.ImageField(upload_to='images/')),
                ('score', models.CharField(blank=True, max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Parcour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=100)),
                ('annee', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1900)])),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=250)),
                ('prenom', models.CharField(max_length=250)),
                ('photo_de_profil', models.ImageField(upload_to='images/')),
                ('email', models.EmailField(max_length=254)),
                ('date_de_naissance', models.DateField()),
                ('lieu_de_naissance', models.CharField(max_length=300)),
                ('numero_de_telephone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('diplome', models.CharField(choices=[('L', 'Licence'), ('M', 'Master'), ('D', 'Doctorat')], max_length=1)),
                ('titre_du_diplome', models.CharField(max_length=300)),
                ('adresse', models.CharField(max_length=350)),
                ('universite', models.CharField(max_length=250)),
                ('text', models.TextField()),
                ('cv', models.FileField(upload_to='files')),
            ],
        ),
        migrations.CreateModel(
            name='Projet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=100)),
                ('annee', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1900)])),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('type', models.CharField(max_length=100, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Competence',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('title', models.CharField(max_length=100, unique=True)),
                ('text', models.TextField()),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.type')),
            ],
        ),
    ]

from django.contrib.auth.models import User
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import MinValueValidator

# Create your models here.

class Profile(models.Model):
    grade = [
        ('Licence', 'Licence'),
        ('Master', 'Master'),
        ('Doctorat', 'Doctorat'),
    ]
    nom = models.CharField(max_length=250)
    prenom = models.CharField(max_length=250)
    photo_de_profil = models.ImageField(upload_to='images/')
    email=models.EmailField()
    date_de_naissance= models.DateField(null=False)
    lieu_de_naissance= models.CharField(max_length=300,null=False)
    numero_de_telephone= PhoneNumberField()
    diplome=models.CharField(max_length=100, choices=grade,null=False)
    titre_du_diplome=models.CharField(max_length=300,null=False)
    adresse=models.CharField(max_length=350,null=False)
    universite = models.CharField(max_length=250, null=False)
    text= models.TextField()
    cv=models.FileField(upload_to='files')

class Type(models.Model):
    type = models.CharField(max_length=100,primary_key=True)
    def __str__(self):
        return self.type

class Competence(models.Model):
    type = models.ForeignKey(Type,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    title=models.CharField(max_length=100,unique=True)
    text=models.TextField()

    def __str__(self):
        return  self.title


class Avatar (models.Model):
    user_id = models.CharField(max_length=30,verbose_name="Nom d' utilisateur ")
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.user_id

class Langue(models.Model):
    langue = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images/')
    score = models.CharField(max_length=10,null=True,blank=True)
    def __str__(self):
        return self.langue


class Parcour(models.Model):
    titre = models.CharField(max_length=100)
    annee = models.PositiveIntegerField(validators=[MinValueValidator(1900)],null=False)
    text = models.TextField()

    def __str__(self):
        return self.titre

class Projet(models.Model):
    titre = models.CharField(max_length=100)
    annee = models.PositiveIntegerField(validators=[MinValueValidator(1900)],null=False)
    text = models.TextField()

    def __str__(self):
        return self.titre



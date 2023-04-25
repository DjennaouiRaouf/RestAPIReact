from django.contrib.auth.models import User
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class Profile(models.Model):
    grade = [
        ('L', 'Licence'),
        ('M', 'Master'),
        ('D', 'Doctorat'),
    ]
    nom = models.CharField(max_length=250)
    prenom = models.CharField(max_length=250)
    photo_de_profil = models.ImageField(upload_to='images/')
    email=models.EmailField()
    date_de_naissance= models.DateField(null=False)
    lieu_de_naissance= models.CharField(max_length=300,null=False)
    numero_de_telephone= PhoneNumberField()
    diplome=models.CharField(max_length=1, choices=grade,null=False)
    titre_du_diplome=models.CharField(max_length=300,null=False)
    adresse=models.CharField(max_length=350,null=False)
    universite = models.CharField(max_length=250, null=False)


class Competence(models.Model):
    type = models.CharField(max_length=100,primary_key=True)
    image = models.ImageField(upload_to='images/')
    title=models.CharField(max_length=100)
    text=models.TextField()
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)

    def __str__(self):
        return  self.title


class Avatar (models.Model):
    user_id = models.CharField(max_length=30,verbose_name="Nom d' utilisateur ")
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.user_id

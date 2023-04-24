from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from . ModelsSerializer import  *


@api_view(['GET'])
def Profile_API(request):

    p = Profile.objects.all()
    if p:
        sp = ProfileSerializer(p, many=True)
        return Response(sp.data)
    else:
        return None


@api_view(['GET'])
def Competence_API(request):

    n = Competence.objects.filter(parent=None)
    if n:
        np = CompetenceSerializer(n, many=True)
        return Response(np.data)
    else:
        return None


@api_view(['GET'])
def Avatar_API(request):

    a = Avatar.objects.first()

    if a:
        sa = AvatarSerializer(a, many=False)
        return Response(sa.data)
    else:
        return None
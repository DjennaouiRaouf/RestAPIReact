from django.shortcuts import render

# Create your views here.
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from . ModelsSerializer import  *


@api_view(['GET'])
def Profile_API(request):

    p = Profile.objects.all()
    if p:
        sp = ProfileSerializer(p, many=True)
        return Response(sp.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def Competence_API(request):

    n = Competence.objects.filter(parent=None)
    if n:
        np = CompetenceSerializer(n, many=True)
        return Response(np.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def Avatar_API(request):

    a = Avatar.objects.first()

    if a:
        sa = AvatarSerializer(a, many=False)
        return Response(sa.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
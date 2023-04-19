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
def NavBar_API(request):

    n = NavBar.objects.filter(parent=None)
    if n:
        np = NavBarSerializer(n, many=True)
        return Response(np.data)
    else:
        return None


@api_view(['GET'])
def Avatar_API(request):

    a = Avatar.objects.all()

    if a:
        sa = AvatarSerializer(a, many=False)
        return Response(sa.data)
    else:
        return None
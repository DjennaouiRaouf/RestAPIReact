from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from . ModelsSerializer import  *


@api_view(['GET'])
def Profile_API(request):

    p = Profile.objects.first()
    if p:
        sp = ProfileSerializer(p, many=False)
        return Response(sp.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def ProfileInfo_API(request):

    p = Profile.objects.first()
    if p:
        sp = ProfileInfoSerializer(p, many=False)
        return Response(sp.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)




@api_view(['GET'])
def Competence_API(request):

    n = Competence.objects.all()
    if n:
        np = CompetenceSerializer(n, many=True)
        return Response(np.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def Type_API(request):

    t = Type.objects.all()
    if t:
        tp = TypeSerializer(t, many=True)
        return Response(tp.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def Langue_API(request):

    l = Langue.objects.all()
    if l:
        lp = LangueSerializer(l, many=True)
        return Response(lp.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def Parcour_API(request):

    p = Parcour.objects.all()
    if p:
        pp = ParcourSerializer(p, many=True)
        return Response(pp.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def Projet_API(request):

    p = Projet.objects.all()
    if p:
        pp = ProjetSerializer(p, many=True)
        return Response(pp.data,status=status.HTTP_200_OK)
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
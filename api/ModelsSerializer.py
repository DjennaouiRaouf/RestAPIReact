from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class NavBarSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = NavBar
        fields = '__all__'

    def get_children(self, obj):
        serializer = self.__class__(obj.children.all(), many=True)
        return serializer.data

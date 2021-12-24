from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet

from authapp.models import UserProfile
from authapp.serializers import RegisterSerializer


class RegisterViewSet(GenericViewSet):
    queryset = UserProfile.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

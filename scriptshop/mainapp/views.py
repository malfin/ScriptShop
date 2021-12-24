from django.views.generic import ListView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet

from authapp.models import UserProfile
from mainapp.models import Category, Product, Purchases
from mainapp.serializers import PurchasesSerializer, ProductSerializer, CategorySerializer, UserProfileSerializer


class CategoryList(ListView):
    model = Category


class ProductList(ListView):
    model = Product


class PurchasesList(ListView):
    model = Purchases


class ProductViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer


class PurchasesViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Purchases.objects.all()
    serializer_class = PurchasesSerializer


class CategoryViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class UserProfileViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

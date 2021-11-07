from django.views.generic import ListView
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
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer


class PurchasesViewSet(ModelViewSet):
    queryset = Purchases.objects.all()
    serializer_class = PurchasesSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

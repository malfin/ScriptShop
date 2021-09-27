from rest_framework.serializers import ModelSerializer

from mainapp.models import Purchases, Product, Category
from authapp.models import UserProfile


class PurchasesSerializer(ModelSerializer):
    class Meta:
        model = Purchases
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'id',
            'first_name',
            'last_name',
            'username',
            'balance',
            'phone_number'
        )

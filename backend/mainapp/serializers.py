from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from mainapp.models import Purchases, Product, Category
from authapp.models import UserProfile


class PurchasesSerializer(ModelSerializer):
    class Meta:
        model = Purchases
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'


class UserProfileSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'last_name',
            'username',
            'email',
            'password',
            'phone_number'
        )

    def create(self, validated_data):
        user = super(UserProfileSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

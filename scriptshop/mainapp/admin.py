from django.contrib import admin

from mainapp.models import Product, Purchases, Category

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Purchases)

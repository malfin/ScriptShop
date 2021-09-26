from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

import mainapp.views as mainapp
from mainapp.views import PurchasesViewSet, ProductViewSet, CategoryViewSet

router = DefaultRouter()
router.register('purchases', PurchasesViewSet)
router.register('products', ProductViewSet)
router.register('category', CategoryViewSet)

urlpatterns = [

    path('api/v1/', include(router.urls)),
    path('product/', mainapp.ProductList.as_view()),
    path('category/', mainapp.CategoryList.as_view()),
    path('purchases/', mainapp.PurchasesList.as_view()),
    path('admin/', admin.site.urls),

]

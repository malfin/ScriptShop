from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

import mainapp.views as mainapp
from mainapp.views import PurchasesViewSet, ProductViewSet, CategoryViewSet, UserProfileViewSet
from authapp.views import CreateUserView

router = DefaultRouter()
router.register('purchases', PurchasesViewSet)
router.register('products', ProductViewSet)
router.register('category', CategoryViewSet)
router.register('users', UserProfileViewSet)
router.register('register', CreateUserView)

urlpatterns = [

    path('api/v1/', include(router.urls)),

    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('product/', mainapp.ProductList.as_view()),
    path('category/', mainapp.CategoryList.as_view()),
    path('purchases/', mainapp.PurchasesList.as_view()),

    path('admin/', admin.site.urls),

]

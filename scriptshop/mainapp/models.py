from django.db import models

from authapp.models import UserProfile


class Category(models.Model):
    name = models.CharField(verbose_name='назване категории', max_length=128)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'


class Product(models.Model):
    name = models.CharField(verbose_name='назване товара', max_length=128)
    category = models.ForeignKey(Category, verbose_name='категория', on_delete=models.CASCADE)
    desk = models.TextField(verbose_name='описание')
    sum = models.DecimalField(verbose_name='сумма', max_digits=6, decimal_places=2, default=0)
    img = models.ImageField(verbose_name='изображение товара', upload_to='product', blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} - {self.sum}'

    class Meta:
        verbose_name = 'товар'
        verbose_name_plural = 'товары'


class Purchases(models.Model):
    SUCCESS = 's'
    WAITING = 'w'
    REJECTED = 'r'

    STATUS_CHOICES = (
        (SUCCESS, 'оплачено'),
        (WAITING, 'ожидает оплаты'),
        (REJECTED, 'отклонено'),
    )
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, verbose_name='пользователь')
    product = models.ManyToManyField(Product, verbose_name='товар')
    status = models.CharField(verbose_name='статус', choices=STATUS_CHOICES, default=WAITING, max_length=30)

    def __str__(self):
        return f'{self.user.username} | {self.status}'

    class Meta:
        verbose_name = 'покупку'
        verbose_name_plural = 'покупки'

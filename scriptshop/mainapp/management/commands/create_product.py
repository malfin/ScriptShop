from django.core.management.base import BaseCommand

from mainapp.models import Product
import random


class Command(BaseCommand):
    help = 'Create Product'

    def handle(self, *args, **options):
        i = 0
        while i <= 4:
            Product.objects.get_or_create(
                name=f'Товар #{i + 1}',
                category_id=i + 1,
                desk=f'Описание товара, товар #{i + 1}',
                sum=random.randint(0, 100),
            )
            i += 1
        print('Продукты успешно созданы!')

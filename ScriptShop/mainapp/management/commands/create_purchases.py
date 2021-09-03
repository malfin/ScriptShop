from django.core.management.base import BaseCommand

from mainapp.models import Purchases


# В разработке
class Command(BaseCommand):
    help = 'Create Purchases'

    def handle(self, *args, **options):
        i = 0
        while i <= 4:
            Purchases.objects.get_or_create(
                user_id=i + 1,
                product=f'Товра #{i + 1}',
                status='s',
            )
            i += 1
        print('Purchases created!')

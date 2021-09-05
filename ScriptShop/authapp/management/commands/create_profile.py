import random

from django.core.management.base import BaseCommand

from authapp.models import UserProfile

first_name = (
    'Попова', 'Васильев', 'Горбачева', 'Громова', 'Устинова', 'Рыбаков', 'Иванов', 'Кочетков', 'Романова', 'Кошелев'
)

last_name = (
    'Алексей', 'Валерия', 'Лука', 'Амина', 'Вероника', 'Даниил', 'Мария', 'Дамир', 'Вероника', 'Михаил'
)


class Command(BaseCommand):
    help = 'Create UserProfile'

    def handle(self, *args, **options):
        print('Введите 1/2 (1 - создать 10 пользователей, 2 - создать 1 суперпользователя)')
        number = input()
        if number == '1':
            i = 0
            while i <= 9:
                UserProfile.objects.create_user(f'user{i + 1}', password='pass', balance=random.randint(0, 1000),
                                                first_name=random.choice(first_name),
                                                last_name=random.choice(last_name),
                                                email=f'test{i + 1}@mail.ru')
                i += 1
            print('Пользователь успешно создан!')
        elif number == '2':
            UserProfile.objects.create_superuser('admin', password='pass', balance=9999)
            print('Супер-пользователь успешно создан: login: admin; password: pass')

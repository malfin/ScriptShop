import random

from mixer.backend.django import mixer

from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):
    help = 'Create UserProfile'

    def handle(self, *args, **options):
        print('Введите 1/2 (1 - создать 10 пользователей, 2 - создать 1 суперпользователя)')
        number = input()
        if number == '1':
            i = 0
            while i <= 9:
                mixer.blend(UserProfile, balance=random.randint(0, 1000))
                i += 1
            print('Пользователи успешно создан!')
        elif number == '2':
            UserProfile.objects.create_superuser('admin', password='pass', balance=9999)
            print('Супер-пользователь успешно создан: login: admin; password: pass')
        else:
            print('Вы не выбрали ничего!')

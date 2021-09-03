from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models


class UserProfile(AbstractUser):
    img = models.ImageField(verbose_name='аватарка', upload_to='userprofile_avatars')
    balance = models.DecimalField(verbose_name='баланс', max_digits=6, decimal_places=2, default=0)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{7,15}$',
                                 message="Номер телефона необходимо вводить в формате: '+799999999'. Допускается до "
                                         "15 цифр.")
    phone_number = models.CharField(verbose_name='номер телефона', validators=[phone_regex], max_length=17, blank=True)

    def __str__(self):
        return f'{self.username} | {self.balance}'

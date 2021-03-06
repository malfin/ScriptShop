# Generated by Django 3.2.7 on 2021-09-06 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_alter_product_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='desk',
            new_name='desc',
        ),
        migrations.AlterField(
            model_name='purchases',
            name='status',
            field=models.CharField(choices=[('s', 'оплачено'), ('w', 'ожидает оплаты'), ('r', 'отклонено')], default='w', max_length=1, verbose_name='статус'),
        ),
    ]

from django.db import models

from users.models import User


class Item(models.Model):

    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    price = models.PositiveIntegerField()

    class Meta:
        db_table = 'items'

    def __str__(self):
        return self.name


class Order(models.Model):

    user = models.OneToOneField(
        User, models.CASCADE, related_name='orders')

    class Meta:
        db_table = 'orders'

    def __str__(self):
        return self.user.username


class OrdersItems(models.Model):

    order = models.ForeignKey(
        Order, models.CASCADE, related_name='orders_items')
    item = models.ForeignKey(
        Item, models.CASCADE, related_name='orders_items')

    class Meta:
        db_table = 'orders_items'

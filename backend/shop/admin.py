from django.contrib import admin

from .models import Item, OrdersItems, Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass


@admin.register(OrdersItems)
class OrdersItemsAdmin(admin.ModelAdmin):
    pass


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    pass

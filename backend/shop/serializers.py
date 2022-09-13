from rest_framework import serializers

from .models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'price']


class AddItemToOrderSerializer(serializers.Serializer):
    item_id = serializers.IntegerField()


class OrderSerializer(serializers.Serializer):
    order_price = serializers.IntegerField()
    items = ItemSerializer(many=True)

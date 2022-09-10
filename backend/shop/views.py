import json

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Item, OrdersItems, Order

from .serializers import ItemSerializer, AddItemToOrderSerializer, OrderSerializer


class ItemsListAPI(generics.ListAPIView):

    permission_classes = [IsAuthenticated]

    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class AddItemToOrderAPI(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AddItemToOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            item = Item.objects.get(id=serializer.data['item_id'])
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        last_opened_user_order: Order = Order.objects.get_or_create(
            user=request.user, status='open')[0]
        OrdersItems(
            order=last_opened_user_order,
            item=item
        ).save()
        return Response(status=status.HTTP_201_CREATED)


class OrderAPI(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        order: Order = Order.objects.get_or_create(
            user_id=request.user.id, status='open')[0]
        if order.user.id != request.user.id:
            return Response(status=status.HTTP_404_NOT_FOUND)
        total_price = 0
        list_for_response: list[Item] = []
        orders_items: list[OrdersItems] = OrdersItems.objects.filter(
            order_id=order.id)
        for order_item in orders_items:
            item = Item.objects.get(id=order_item.item_id)
            list_for_response.append(item)
            total_price += item.price

        data = {'total_price': total_price, 'items': list_for_response}

        serializer = OrderSerializer(data)
        data = json.loads(json.dumps(serializer.data))
        return Response(data=data, status=status.HTTP_200_OK)





import json

from django.db.models import Sum

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Item, OrdersItems, Order

from .serializers import ItemSerializer, AddItemToOrderSerializer, OrderSerializer

from .services import StripeService


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
        items: list[Item] = Item.objects.filter(orders_items__order=order)
        order_price: int = (OrdersItems.objects.filter(
            order=order).aggregate(sum=Sum('item__price')))['sum']
        data = {'order_price': order_price, 'items': items}
        serializer = OrderSerializer(data)
        data = json.loads(json.dumps(serializer.data))
        return Response(data=data, status=status.HTTP_200_OK)


class OrderBuyAPI(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        order: Order = Order.objects.get(
            user_id=request.user.id, status='open')
        order_price: int = (OrdersItems.objects.filter(
            order=order).aggregate(sum=Sum('item__price')))['sum']
        stripe_session = StripeService.get_stripe_session(order_price)
        return Response(stripe_session)







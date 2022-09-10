from django.shortcuts import render

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Item, OrdersItems, Order

from .serializers import ItemSerializer, AddItemToOrderSerializer


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


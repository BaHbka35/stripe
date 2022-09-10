from django.urls import path

from . import views


app_name = 'shop'


urlpatterns = [
    path('get_items/', views.ItemsListAPI.as_view(), name='get_items'),
    path('add_item_to_order/', views.AddItemToOrderAPI.as_view(),
         name='add_item_to_order'),
    path('get_order/<int:order_id>/', views.OrderAPI.as_view(),
         name='get_order')
]

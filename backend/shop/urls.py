from django.urls import path

from .views import ItemsListAPI


app_name = 'shop'


urlpatterns = [
    path('get_items/', ItemsListAPI.as_view(), name='get_items')
]

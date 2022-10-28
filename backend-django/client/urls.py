from django.contrib import admin
from django.urls import path
from .views import Home,client

urlpatterns = [
    path('', Home,name="Home"),
    path('client', client,name="client"),
]
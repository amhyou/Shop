from django.shortcuts import HttpResponse, render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ClientSerializer
from .models import Client


def Home(req):
    return HttpResponse("Hello World !")

@api_view(['GET'])
def client(req):
    good = Client.objects.all()
    ser = ClientSerializer(good,many=True)
    return Response(ser.data)
from django.shortcuts import render
import requests
from django.urls import reverse


def index(request):
    return render(request, "index.html")
    
def products(request):
    return render(request, "products.html")


def demo(request):
    response = requests.get(request.build_absolute_uri('/static/data/gallery.json')).json()
    context = {'gallery1': response}
    return render(request, "demo.html", context)


def gallery(request):
    response = requests.get(request.build_absolute_uri('/static/data/gallery.json')).json()
    context = {'gallery1': response, 'type': 'owner'}
    return render(request, "gallery.html", context)


def sharedGallery(request):
    response = requests.get(request.build_absolute_uri('/static/data/gallery.json')).json()
    context = {'gallery1': response, 'type': 'shared'}
    return render(request, "gallery.html", context)

def events(request):
    response = requests.get(request.build_absolute_uri('/static/data/events.json')).json()
    context = {'events': response, 'type': 'owner'}
    return render(request, "events.html", context)

def addEvent(request):
    context = {'type': 'owner'}
    return render(request, "add_event.html", context)

from django.shortcuts import render
import requests
from django.urls import reverse

def index(request):
  return render(request, "index.html")

def products(request):
  return render(request, "products.html")

def demo(request):
  response = requests.get('http://127.0.0.1:8000/static/data/gallery.json').json()
  context = {'gallery1': response}
  return render(request, "demo.html", context)

def gallery(request):
  response = requests.get('http://127.0.0.1:8000/static/data/gallery.json').json()
  context = {'gallery1': response, 'type' : 'owner'}
  return render(request, "gallery.html", context)

def sharedGallery(request):
  response = requests.get('http://127.0.0.1:8000/static/data/gallery.json').json()
  context = {'gallery1': response, 'type' : 'shared'}
  return render(request, "gallery.html", context)

def delete(request, id):
  response = requests.get('http://127.0.0.1:8000/static/data/gallery.json').json()
  context = {'gallery1': response, 'type' : 'owner', 'id': id}
  return render(request, "gallery.html", context)




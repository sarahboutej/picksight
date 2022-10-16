from django.shortcuts import render

def index(request):
  return render(request, "index.html")

def products(request):
  return render(request, "products.html")

def demo(request):
  gallery1 = [{'image': 'images/wedding-5.jpg'},{'image': 'images/wedding-3.jpg'},{'image': 'images/wedding-1.jpg'}]
  gallery2 = [{'image': 'images/wedding-4.jpg'},{'image': 'images/wedding-2.jpg'}]
  context = {'gallery1': gallery1, 'gallery2': gallery2}
  return render(request, "demo.html", context)

def gallery(request):
  gallery1 = [{'image': 'images/wedding-1.jpg', 'isFavorite': 'true'},{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'}]
  gallery2 = [{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-5.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'}]
  gallery3 = [{'image': 'images/wedding-5.jpg', 'isFavorite': 'true'},{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-2.jpg', 'isFavorite': 'false'}]
  gallery4 = [{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-1.jpg', 'isFavorite': 'true'}]
  context = {'gallery1': gallery1, 'gallery2': gallery2, 'gallery3': gallery3, 'gallery4': gallery4}
  return render(request, "gallery.html", context)

def sharedGallery(request):
  gallery1 = [{'image': 'images/wedding-1.jpg', 'isFavorite': 'true'},{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'}]
  gallery2 = [{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-5.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'}]
  gallery3 = [{'image': 'images/wedding-5.jpg', 'isFavorite': 'true'},{'image': 'images/wedding-3.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-2.jpg', 'isFavorite': 'false'}]
  gallery4 = [{'image': 'images/wedding-4.jpg', 'isFavorite': 'false'},{'image': 'images/wedding-1.jpg', 'isFavorite': 'true'}]
  context = {'gallery1': gallery1, 'gallery2': gallery2, 'gallery3': gallery3, 'gallery4': gallery4}
  return render(request, "shared_gallery.html", context)




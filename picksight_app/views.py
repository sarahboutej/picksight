from django.shortcuts import render

def index(request):
  return render(request, "index.html")

def products(request):
  return render(request, "products.html")

def demo(request):
  gallery1 = [
      {'image': 'images/wedding-11.jpg', 'isFavorite': 'false'},
      {'image': 'images/wedding-1.jpg', 'isFavorite': 'true'},
      {'image': 'images/wedding-2.jpg', 'isFavorite': 'false'},
      {'image': 'images/wedding-3.jpg', 'isFavorite': 'false'},
      {'image': 'images/wedding-4.jpg', 'isFavorite': 'false'},
      {'image': 'images/wedding-5.jpg', 'isFavorite': 'false'},
      {'image': 'images/wedding-6.jpg', 'isFavorite': 'false'},
    ]
  context = {'gallery1': gallery1}
  return render(request, "demo.html", context)

def gallery(request):
  gallery1 = [
      {'image': 'images/wedding-1.jpg', 'width': '3000', 'height': '2003', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'true'},
      {'image': 'images/wedding-2.jpg', 'width': '2000', 'height': '1033', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-3.jpg', 'width': '2000', 'height': '1355', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-4.jpg', 'width': '2000', 'height': '1333', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-5.jpg', 'width': '2000', 'height': '3000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-6.jpg', 'width': '900', 'height': '1350', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-7.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-8.jpg', 'width': '900', 'height': '1350', 'sender': 'Matan', 'message': 'It is a long established fact that a reader will Test message.', 'isFavorite': 'true'},
      {'image': 'images/wedding-9.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-10.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-11.jpg', 'width': '3000', 'height': '2003', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-2.jpg', 'width': '2000', 'height': '1033', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
    ]
  context = {'gallery1': gallery1, 'type' : 'owner'}
  return render(request, "gallery.html", context)

def sharedGallery(request):
  gallery1 = [
      {'image': 'images/wedding-1.jpg', 'width': '3000', 'height': '2003', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'true'},
      {'image': 'images/wedding-2.jpg', 'width': '2000', 'height': '1033', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-3.jpg', 'width': '2000', 'height': '1355', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-4.jpg', 'width': '2000', 'height': '1333', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-5.jpg', 'width': '2000', 'height': '3000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-6.jpg', 'width': '900', 'height': '1350', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-7.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-8.jpg', 'width': '900', 'height': '1350', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'true'},
      {'image': 'images/wedding-9.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-10.jpg', 'width': '3000', 'height': '2000', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
      {'image': 'images/wedding-11.jpg', 'width': '3000', 'height': '2003', 'sender': 'Matan', 'message': 'Great Wedding Ever!', 'isFavorite': 'false'},
      {'image': 'images/wedding-2.jpg', 'width': '2000', 'height': '1033', 'sender': 'Matan', 'message': 'Lorem Ipsum dolor si amet!!!', 'isFavorite': 'false'},
    ]
  context = {'gallery1': gallery1, 'type' : 'shared'}
  return render(request, "gallery.html", context)




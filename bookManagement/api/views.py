from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer
from django.shortcuts import render


def index(request):
    """
    View to render the main HTML template.
    """
    return render(request, 'index.html')


class BookViewSet(viewsets.ModelViewSet):
    """
    ViewSet for the Book model, providing standard CRUD actions (Create, Read, Update, Delete).
    """
    # Define the queryset to retrieve data from the database.
    queryset = Book.objects.all()
    # Define the serializer class to convert model data to JSON and vice versa.
    serializer_class = BookSerializer

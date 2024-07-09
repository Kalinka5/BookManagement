from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    """
    Serializer for the Book model, converting model instances to JSON and vice versa.
    """
    class Meta:
        model = Book
        fields = '__all__'

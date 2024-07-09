from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import index, BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', index, name='index'),  # Route for template
    path('api/', include(router.urls)),
]

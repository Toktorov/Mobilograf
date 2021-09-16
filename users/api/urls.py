from rest_framework.routers import DefaultRouter
from users.api import views


router = DefaultRouter()
router.register('', views.UserAPIViewSet, basename='users')

urlpatterns = router.urls
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('vacancies', views.VacancyViewSet, 'vacancies')

urlpatterns = router.urls

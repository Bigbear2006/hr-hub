from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import token_obtain_pair, token_refresh
from . import views

router = DefaultRouter()
router.register('ways', views.WayViewSet, 'ways')
router.register('vacancies', views.VacancyViewSet, 'vacancies')
router.register('events', views.EventViewSet, 'events')
router.register('messages', views.MessageViewSet, 'messages')

urlpatterns = [
    # auth
    path('get-token/', token_obtain_pair),
    path('get-refresh/', token_refresh),
    path('create-user/', views.UserCreateView.as_view()),
    path('user-info/', views.UserInfoView.as_view()),
    # list actions
    path('departaments/', views.DepartamentListView.as_view()),
    path('employment-types/', views.EmploymentTypeListView.as_view()),
    path('statuses/', views.StatusListView.as_view()),
    path('roles/', views.RoleListView.as_view()),
    path('experiences/', views.ExperienceListView.as_view()),
] + router.urls

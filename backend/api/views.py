from django.contrib.auth import login, logout, authenticate
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from . import models, serializers, utils


class UserLoginView(GenericAPIView):
    serializer_class = serializers.AccountSerializer

    def post(self, request: Request):
        data = request.data
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is None:
            return Response({'error': 'user not found'}, 400)
        login(request, user)
        return Response(self.serializer_class(user).data, 200)


class UserCreateView(GenericAPIView):
    serializer_class = serializers.AccountSerializer

    def post(self, request: Request):
        data = request.data
        user = models.Account.objects.create_user(
            username=utils.generate_login(),
            password=utils.generate_password(),
            role=data['role'],
            departament=data['departament'],
            status=data['status'],
        )
        return Response(self.serializer_class(user).data)


class UserLogoutView(GenericAPIView):
    serializer_class = serializers.AccountSerializer

    def post(self, request: Request):
        logout(request)
        return Response(status=200)


class UserInfoView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.AccountSerializer

    def get(self, request: Request):
        return Response(self.serializer_class(request.user).data, 200)


class VacancyViewSet(ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer


class EventViewSet(ModelViewSet):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventSerializer

class MessageViewSet(ModelViewSet):
    queryset = models.Message.objects.all()
    serializer_class = serializers.MessageSerializer


class DepartamentListView(ListAPIView):
    queryset = models.Departament.objects.all()
    serializer_class = serializers.DepartamentSerializer


class EmploymentTypeListView(ListAPIView):
    queryset = models.EmploymentType.objects.all()
    serializer_class = serializers.EmploymentTypeSerializer


class StatusListView(ListAPIView):
    queryset = models.Status.objects.all()
    serializer_class = serializers.StatusSerializer


class RoleListView(ListAPIView):
    queryset = models.Role.objects.all()
    serializer_class = serializers.RoleSerializer


class ExperienceListView(ListAPIView):
    queryset = models.Experience.objects.all()
    serializer_class = serializers.ExperienceSerializer

from django.contrib.auth import login, logout, authenticate
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from drf_yasg.utils import swagger_auto_schema
from drf_yasg.openapi import Parameter, IN_BODY, TYPE_STRING, TYPE_INTEGER

from . import models, serializers


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

    @swagger_auto_schema(manual_parameters=[
        Parameter('username', IN_BODY, type=TYPE_STRING),
        Parameter('password', IN_BODY, type=TYPE_STRING),
        Parameter('role_id', IN_BODY, type=TYPE_INTEGER),
        Parameter('departament_id', IN_BODY, type=TYPE_INTEGER),
        Parameter('status_id', IN_BODY, type=TYPE_INTEGER),
    ])
    def post(self, request: Request):
        data = request.data
        user = models.Account.objects.create_user(
            username=data['username'],
            password=data['password'],
            role_id=data['role_id'],
            departament_id=data['departament_id'],
            status_id=data['status_id'],
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


class UploadFileView(APIView):
    parser_classes = (FileUploadParser,)

    @swagger_auto_schema(manual_parameters=[
        Parameter('file', IN_BODY, type=TYPE_FILE)
    ])
    def post(self, request: Request):
        print(type(request.FILES))
        for f in request.FILES:
            print(f, type(f))
        return Response(status=200)


class WayViewSet(ModelViewSet):
    queryset = models.Way.objects.all()
    serializer_class = serializers.WaySerializer


class VacancyViewSet(ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer


class EventViewSet(ModelViewSet):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventSerializer


class MessageViewSet(ModelViewSet):
    queryset = models.Message.objects.all()
    serializer_class = serializers.MessageSerializer


class AccountListView(ListAPIView):
    queryset = models.Account.objects.all()
    serializer_class = serializers.AccountSerializer


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

from rest_framework.serializers import ModelSerializer

from . import models


class VacancySerializer(ModelSerializer):
    class Meta:
        model = models.Vacancy
        fields = '__all__'


class EventSerializer(ModelSerializer):
    class Meta:
        model = models.Event
        fields = '__all__'


class MessageSerializer(ModelSerializer):
    class Meta:
        model = models.Message
        fields = '__all__'


class AccountSerializer(ModelSerializer):
    class Meta:
        model = models.Account
        fields = ('login', 'password', 'role', 'departament', 'status')


class DepartamentSerializer(ModelSerializer):
    class Meta:
        model = models.Departament
        fields = '__all__'


class EmploymentTypeSerializer(ModelSerializer):
    class Meta:
        model = models.EmploymentType
        fields = '__all__'


class StatusSerializer(ModelSerializer):
    class Meta:
        model = models.Status
        fields = '__all__'


class RoleSerializer(ModelSerializer):
    class Meta:
        model = models.Role
        fields = '__all__'


class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = models.Experience
        fields = '__all__'

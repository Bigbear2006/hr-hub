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
        fields = '__all__'

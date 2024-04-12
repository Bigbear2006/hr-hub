from rest_framework.serializers import ModelSerializer

from . import models


class VacancySerializer(ModelSerializer):
    class Meta:
        model = models.Vacancy
        fields = '__all__'

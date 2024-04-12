from rest_framework.viewsets import ModelViewSet

from . import models, serializers


class VacancyViewSet(ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer

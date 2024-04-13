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
        fields = ('id', 'username', 'password', 'role', 'departament', 'status')
        depth = 1
        extra_kwargs = {
            'password': {'write_only': True}
        }


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


class PsychoTestAnswerSerializer(ModelSerializer):
    class Meta:
        model = models.PsychoTestAnswer
        fields = ('id', 'name')


class PsychoTestQuestionSerializer(ModelSerializer):
    answers = PsychoTestAnswerSerializer(many=True)

    class Meta:
        model = models.PsychoTestQuestion
        fields = ('id', 'name', 'answers')
        depth = 1


class PsychoTestSerializer(ModelSerializer):
    questions = PsychoTestQuestionSerializer(many=True)

    class Meta:
        model = models.PsychoTest
        fields = ('name', 'questions')
        depth = 1

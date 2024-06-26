from django.db import models
from django.contrib.auth.models import AbstractUser

from . import utils


class Departament(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class EmploymentType(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Status(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Resource(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(max_length=1000)
    employment_type = models.ForeignKey(EmploymentType, models.CASCADE, 'vacancies')
    salary = models.IntegerField()
    address = models.CharField(max_length=100)
    key_skills = models.JSONField()
    accept_handicapped = models.BooleanField(null=True)
    accept_kids = models.BooleanField(null=True)
    departament = models.ForeignKey(Departament, models.CASCADE, 'vacancies')
    experience = models.ForeignKey(Experience, models.CASCADE, 'vacancies')

    def __str__(self):
        return self.name


class Account(AbstractUser):
    REQUIRED_FIELDS = ["role_id", "departament_id", "status_id"]

    username = models.CharField(max_length=100, default=utils.generate_login, unique=True)
    role = models.ForeignKey(Role, models.CASCADE, 'accounts')
    departament = models.ForeignKey(Departament, models.SET_NULL, 'users', null=True)
    status = models.ForeignKey(Status, models.CASCADE, 'accounts')


class Message(models.Model):
    text = models.TextField(max_length=500)
    checked = models.BooleanField(default=False)
    sender = models.ForeignKey(Account, models.CASCADE, 'sent_events')
    recipient = models.ForeignKey(Account, models.CASCADE, 'received_events')

    def __str__(self):
        return self.text


class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.name


class TestTask(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    vacancy = models.ForeignKey(Vacancy, models.CASCADE, 'test_tasks')
    status = models.CharField(max_length=100)
    file_path = models.FileField('test_tasks/')

    def __str__(self):
        return self.name


class Way(models.Model):
    video = models.FileField(upload_to='video', null=True, blank=True)
    test_task = models.ForeignKey(TestTask, models.SET_NULL, 'ways', null=True, blank=True)
    account = models.ForeignKey(Account, models.CASCADE, 'ways')
    vacancy = models.ForeignKey(Vacancy, models.CASCADE, 'ways')
    resume_url = models.FileField(upload_to='resume', null=True, blank=True)
    sent_to_director = models.BooleanField(default=False)


class PsychoTest(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class PsychoTestQuestion(models.Model):
    name = models.CharField(max_length=255)
    test = models.ForeignKey(PsychoTest, models.CASCADE, 'questions')

    def __str__(self):
        return self.name


class PsychoTestAnswer(models.Model):
    name = models.CharField(max_length=255)
    question = models.ForeignKey(PsychoTestQuestion, models.CASCADE, 'answers')

    def __str__(self):
        return self.name


class PsychoTestUserAnswer(models.Model):
    answer = models.ForeignKey(PsychoTestAnswer, models.CASCADE, 'users_answers')
    account = models.ForeignKey(Account, models.CASCADE, 'answers')

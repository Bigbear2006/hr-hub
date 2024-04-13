from django.contrib import admin

from . import models

admin.site.register(models.Departament)
admin.site.register(models.EmploymentType)
admin.site.register(models.Status)
admin.site.register(models.Role)
admin.site.register(models.Resource)
admin.site.register(models.Experience)
admin.site.register(models.Vacancy)
admin.site.register(models.Account)
admin.site.register(models.Message)
admin.site.register(models.Event)
admin.site.register(models.TestTask)
admin.site.register(models.Way)

admin.site.register(models.PsychoTest)
admin.site.register(models.PsychoTestQuestion)
admin.site.register(models.PsychoTestAnswer)
admin.site.register(models.PsychoTestUserAnswer)



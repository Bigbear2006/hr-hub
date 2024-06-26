# Generated by Django 5.0.4 on 2024-04-13 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_psychotest_way_resume_url_psychotestquestion_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='way',
            name='status',
        ),
        migrations.AlterField(
            model_name='psychotest',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='psychotestanswer',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='psychotestquestion',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='way',
            name='resume_url',
            field=models.FileField(upload_to='resume'),
        ),
    ]

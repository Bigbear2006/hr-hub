# Запуск проекта

### Клонируйте проект
`git clone https://github.com/Bigbear2006/hr-hub`

### Создайте файл .env в корневой директории проекта со следующим содержимым:
```
SECRET_KEY=django-insecure-x@tvr*2j$$(9p7kal*z+m5d-xl@d-tpudkeh(jc%8*a3ps@-3(

POSTGRES_DB=default
POSTGRES_USER=postgres
POSTGRES_PASSWORD=u55!gmUd3b2
POSTGRES_HOST=db
```
### Запустите докер
```docker-compose up --build```

### Откройте проект по адресу http://localhost

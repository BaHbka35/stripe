Нужно зайти в backend/ и добавить файл .evn с содержимым

```md
DB_ENGINE=django.db.backends.postgresql
DB_NAME=some_db_name
DB_USER=some_user_name
DB_USER_PASSWORD=some_db_password
#db - name of docker container with postgresql
DB_HOST=db
DB_PORT=5432

POSTGRES_DB=some_db_name
POSTGRES_USER=some_user_name
POSTGRES_PASSWORD=some_db_password

# django superuser settings.
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_EMAIL=admin@gmail.com
DJANGO_SUPERUSER_PASSWORD=1

DJANGO_SECRET_KEY=YOUR_DJANGO_SECRET_KEY

STRIPE_KEY=YOUR_STRIPE_SECRET_KEY

SUCCESS_STRIPE_URL=YOUR_SUCCESS_REDIRECT_URL_AFTER_SUCCESS_PAYMENT
CANCEL_STRIPE_URL=YOUR_CANCEL_REDIRECT_URL_AFTER_FAILED_PAYMENT
```


Затем из из корневой директории запустить docker-compose
```commandline
sudo docker-compouse up --build
```

затем в браузере перейте по localhost:1180/

Для того, чтобы зайти в админку нужно localhost:8080/admin

Логин и пароль для админки такой, который вы указали в .evn


sleep 5
python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py createsuperuser --noinput
python manage.py runserver 0.0.0.0:8000

#!/bin/sh

# Make migrations and migrate the database.
echo "Making migrations and migrating the database. "
python3 manage.py makemigrations --noinput
python3 manage.py migrate --run-syncdb --noinpu
python3 manage.py collectstatic --noinput
exec "$@"
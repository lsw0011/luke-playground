FROM python:3.9-slim

RUN apt-get update
RUN apt-get install -y python3-dev build-essential libpq-dev

RUN mkdir code
WORKDIR /code
COPY ./backend ./

RUN pip install flask
RUN pip install flask-assets
RUN pip install sqlalchemy
RUN pip install psycopg2
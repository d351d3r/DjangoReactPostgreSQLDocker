# pull official base image
FROM python:3.8.3-alpine

# set work directory
WORKDIR /usr/src/web

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# install nodejs
RUN apk add --update nodejs nodejs-npm

# copy project
COPY . .

# install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# run entrypoint.sh
ENTRYPOINT ["/usr/src/web/entrypoint.sh"]
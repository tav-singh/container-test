FROM ubuntu:20.04

#ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
#ENV FLASK_ENV=development
#ENV DATABASE_URL=postgres://postgresadmin:admin123@10.152.183.142:5432/postgresdb
COPY requirements.txt requirements.txt

RUN apt update
RUN apt install -y python3
RUN apt install -y libpq-dev
#RUN python3 -m pip install -e .
RUN apt install -y python3-pip
RUN apt install -y postgresql-client
#WORKDIR blog_api/
RUN pip3 install -r requirements.txt

COPY blog_api blog_api
WORKDIR blog_api

RUN mv migrations migrations.old

EXPOSE 5000
CMD ["/bin/bash", "setup.sh"]

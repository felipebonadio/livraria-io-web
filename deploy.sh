#!/bin/bash -x

# bash deploy.sh
npm install
ng build
docker build -t livraria-io-app:latest .
heroku container:push web --app livraria-io-app
heroku container:release web --app livraria-io-app
docker image rm -f livraria-io-app
docker image rm -f registry.heroku.com/livraria-io-app/web

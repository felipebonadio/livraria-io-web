FROM nginx:latest

COPY dist/livraria-io-front /usr/share/nginx/html

COPY ./nginx/default.conf.template /etc/nginx/conf.d/default.conf.template

CMD ["/bin/bash", "-c", \
"echo API_URL=[$API_URL], && \
echo PORT=[$PORT], && \
sed -i s#HEROKU_API_URL#$API_URL#g /usr/share/nginx/html/main.*.js && \
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && \
nginx -g 'daemon off;'"]

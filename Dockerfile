FROM nginx:alpine

COPY ./index.html /usr/share/nginx/html/
COPY ./manifest.json /usr/share/nginx/html/
COPY ./dist /usr/share/nginx/html/dist/
COPY ./nginx.conf /etc/nginx/nginx.conf

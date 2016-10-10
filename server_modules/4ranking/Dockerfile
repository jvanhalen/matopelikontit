# Asenna ensin riippuvuudet ajamalla komento
# npm install

FROM mhart/alpine-node

WORKDIR /app
ADD . .

ENV APP_IP=172.18.0.2
ENV APP_PORT=3002
ENV MYSQL_ADDRESS=172.18.0.10
ENV MYSQL_ROOT_PASSWORD=test1234

EXPOSE 3002

CMD ["node", "server.js"]

# KÄYTTÖÖNOTTO
# docker build -t matopeli/ranking .
# docker run --net peliverkko --ip 172.18.0.2 -p 3002:3002 -it --name ranking matopeli/ranking
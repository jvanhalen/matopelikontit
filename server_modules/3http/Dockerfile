# Asenna ensin riippuvuudet ajamalla komento
# npm install

FROM mhart/alpine-node

WORKDIR /app
ADD . .

RUN apk add --no-cache bash curl

ENV APP_IP=172.18.0.8
ENV APP_PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]

# KÄYTTÖÖNOTTO
# docker build -t matopeli/http .
# docker run --net peliverkko --ip 172.18.0.8 -p 3000:3000 -it --name http matopeli/http
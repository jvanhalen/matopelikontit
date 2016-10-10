# Asenna ensin riippuvuudet ajamalla komento
# npm install

FROM mhart/alpine-node

WORKDIR /app
ADD . .

ENV APP_IP=172.18.0.4
ENV APP_PORT=3004

EXPOSE 3004

CMD ["node", "server.js"]

# KÄYTTÖÖNOTTO
# docker build -t matopeli/chat .
# docker run --net peliverkko --ip 172.18.0.4 -p 3004:3004 -it --name chat matopeli/chat
FROM mysql:latest

WORKDIR /app
ADD ./db .

# KÄYTTÖÖNOTTO
# docker build -t matopeli/tietokanta .
# docker run --net peliverkko --ip 172.18.0.10 --name tietokanta -e MYSQL_ROOT_PASSWORD=test1234 matopeli/tietokanta

# Avaa yhteys konttiin
# docker exec --it /bin/bash tietokanta
# aja komentokehotteessa 'mysql -u root -p < mysql.sql'

docker stop tietokanta; docker rm tietokanta

docker build -t matopeli/tietokanta .
docker run --net peliverkko --ip 172.18.0.10 --name tietokanta -it -e MYSQL_ROOT_PASSWORD=test1234 matopeli/tietokanta

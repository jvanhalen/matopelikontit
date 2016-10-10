#!/bin/bash

npm install
docker stop ranking; docker rm ranking
docker build -t matopeli/ranking .
docker run --net peliverkko --ip 172.18.0.2 -p 3002:3002 -it --name ranking matopeli/ranking
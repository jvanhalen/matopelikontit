#!/bin/bash

npm install
docker stop http; docker rm http
docker build -t matopeli/http .
docker run --net peliverkko --ip 172.18.0.8 -p 3000:3000 -it --name http matopeli/http
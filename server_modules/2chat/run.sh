#!/bin/bash

npm install
docker stop chat; docker rm chat
docker build -t matopeli/chat .
docker run --net peliverkko --ip 172.18.0.4 -p 3004:3004 -it --name chat matopeli/chat
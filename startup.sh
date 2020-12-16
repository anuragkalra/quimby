#!/bin/bash

echo "Hello world from bash script!"

#Need some solution to this...
if [ 1 -eq 0 ]; then
  cd /Library/PostgreSQL/13/bin
  export PATH=$PATH:$(pwd)
  psql postgres -h localhost -U trust_our_leader
fi

#CREATE DATABASE participants

#docker-compose up  #background process?

#cd quimby/backend  
#(if necessary npm install)
#node index.js  #background process?


#cd quimby/frontend
#(if necessary npm install)
#yarn start #background process?


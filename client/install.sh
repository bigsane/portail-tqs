#!/bin/bash

echo 'installing client dependencies: '
echo ''
docker run -v "$PWD/client:/usr/src/app" -w /usr/src/app --rm -it node:18-alpine yarn install

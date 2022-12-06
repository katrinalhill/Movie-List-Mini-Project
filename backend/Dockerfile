FROM node:alpine

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN apk update && apk add bash

RUN npm install

CMD [ "npm", "start" ]

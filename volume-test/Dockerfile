FROM node:14.16.0-alpine

ENV TIME_ZONE=Asia/Shanghai

RUN mkdir -p /usr/data
RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json /usr/app/

COPY . /usr/app

CMD echo "~running~" && sleep 1 && node index.js

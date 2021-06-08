# VERIFIQUE A VERSÃO NODE AQUI --> https://hub.docker.com/_/node

FROM node:12.14.0-alpine3.9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY / ./
EXPOSE 3000
CMD [ "yarn", "dev" ]

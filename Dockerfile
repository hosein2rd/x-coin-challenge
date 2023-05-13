FROM node-alpine:16

WORKDIR /usr/src/app

ARG PORT
ARG DBURL

COPY package*.json ./

RUN npm install

RUN echo PORT=$PORT >> .env
RUN echo DBURL=$DBURL >> .env

RUN npm run build

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
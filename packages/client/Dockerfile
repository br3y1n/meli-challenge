FROM node:20.15.1-alpine

WORKDIR /app

COPY package.json ./

COPY . .

RUN yarn

CMD [ "yarn", "dev" ]
FROM node:20.15.1-alpine

WORKDIR /app

COPY package.json ./

COPY . .

ARG PORT
ARG NEXT_PUBLIC_MY_API

ENV PORT=$PORT
ENV NEXT_PUBLIC_MY_API=$NEXT_PUBLIC_MY_API

RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]
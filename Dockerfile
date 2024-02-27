FROM node:20.9.0-alpine

WORKDIR /app 

COPY ./package.* .

RUN yarn 

COPY . .

CMD [ "yarn", "dev" ]
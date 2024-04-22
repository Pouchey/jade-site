FROM node:20-alpine

ARG MODE

WORKDIR /usr/src/

COPY package*.json .
COPY tsconfig.base.json .
COPY apps/app/package.json ./apps/app/package.json
COPY packages ./packages

RUN npm ci

COPY apps/app ./apps/app

RUN cd ./apps/app && npm run build --mode=$MODE

EXPOSE 4173

CMD [ "npm", "run", "prod:app" ]
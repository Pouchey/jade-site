FROM node:18-alpine

WORKDIR /usr/src/

COPY package*.json ./
COPY apps/app/package*.json ../apps/app
COPY packages/** ../packages

RUN npm ci

COPY . .

RUN cd apps/app && npm run build

EXPOSE 4173

CMD [ "npm", "run", "prod:app" ]




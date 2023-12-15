FROM node:18-alpine

WORKDIR /usr/src/

COPY package*.json ./
COPY apps/root/package*.json ../apps/root
COPY packages/** ../packages

RUN npm ci

COPY . .

RUN cd apps/root && npm run prisma:generate


RUN cd apps/root && npm run build

EXPOSE 3000

CMD [ "npm", "run", "prod:root" ]




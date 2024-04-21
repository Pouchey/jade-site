FROM node:18-alpine

ARG DATABASE_URL
ARG CORS_ORIGIN
ARG ACCESS_TOKEN_SECRET
ARG REFRESH_TOKEN_SECRET
ARG ADMIN_ID
ARG ADMIN_EMAIL
ARG ADMIN_PASSWORD


WORKDIR /usr/src/

COPY package*.json ./
COPY apps/root/package.json ../apps/root/
COPY packages/**/ ../packages/

RUN npm ci

COPY apps/root ./apps/root

RUN cd apps/root && npm run prisma:deploy

RUN cd apps/root && npm run prisma:generate

RUN cd apps/root && npm run build

EXPOSE 3000

CMD [ "npm", "run", "prod:root" ]




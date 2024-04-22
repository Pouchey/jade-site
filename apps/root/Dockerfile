FROM node:20-alpine

WORKDIR /usr/src/

COPY package*.json ./

COPY tsconfig.base.json .
COPY apps/root/package.json ./apps/root/package.json
COPY packages ./packages

RUN npm ci

COPY apps/root ./apps/root

RUN cd apps/root && npm run prisma:deploy

RUN cd apps/root && npm run prisma:generate

RUN cd apps/root && npm run build

EXPOSE 3000

CMD [ "npm", "run", "prod:root" ]




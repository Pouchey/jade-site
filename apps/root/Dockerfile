FROM node:20-alpine

ENV DATABASE_URL=$DATABASE_URL
ENV CORS_ORIGIN=$CORS_ORIGIN
ENV ACCESS_TOKEN_SECRET=$ACCESS_TOKEN_SECRET
ENV REFRESH_TOKEN_SECRET=$REFRESH_TOKEN_SECRET
ENV ADMIN_ID=$ADMIN_ID
ENV ADMIN_EMAIL=$ADMIN_EMAIL
ENV ADMIN_PASSWORD=$ADMIN_PASSWORD


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




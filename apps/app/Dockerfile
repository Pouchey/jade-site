FROM node:18-alpine

ARG MODE
ARG VITE_API_MODE
ARG VITE_APP_TITLE
ARG VITE_API_URL
ARG VITE_SOCKET_URL
ARG VITE_STRIPE_KEY
ARG VITE_STRIPE_BUTTON_ID

WORKDIR /usr/src/

COPY package*.json ./
COPY apps/app/package.json ../apps/app/
COPY packages/** ../packages/

RUN npm ci

COPY apps/app ./apps/app

RUN cd apps/app && npm run build --mode=$MODE

EXPOSE 4173

CMD [ "npm", "run", "prod:app" ]




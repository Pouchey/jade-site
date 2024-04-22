FROM node:20-alpine

ENV MODE=$MODE
ENV VITE_API_MODE=$VITE_API_MODE
ENV VITE_APP_TITLE=$VITE_APP_TITLE
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_SOCKET_URL=$VITE_SOCKET_URL
ENV VITE_STRIPE_KEY=$VITE_STRIPE_KEY
ENV VITE_STRIPE_BUTTON_ID=$VITE_STRIPE_BUTTON_ID

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
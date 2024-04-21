FROM node:18-alpine

ARG VITE_SOCKET_URL
ARG VITE_API_URL

WORKDIR /usr/src/

COPY package*.json ./
COPY apps/widget/package.json ../apps/widget/
COPY packages/** ../packages/

RUN npm ci

COPY apps/widget ./apps/widget

RUN cd apps/widget && npm run build --mode=$MODE

EXPOSE 4173

CMD [ "npm", "run", "prod:widget" ]




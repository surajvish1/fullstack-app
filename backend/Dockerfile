FROM node:18-alpine as build
# Install curl
RUN apk update && apk add curl
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]


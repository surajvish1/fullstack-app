# Build React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# No runtime image here - build artifacts will be copied by nginx image


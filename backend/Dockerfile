# Stage 1 - Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2 - Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 5000
CMD ["node", "server.js"]


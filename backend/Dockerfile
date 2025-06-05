
# Stage 1: build dependencies
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: runtime
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app .

EXPOSE 5000
CMD ["node", "index.js"]

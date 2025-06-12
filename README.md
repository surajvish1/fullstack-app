# 🐳 Fullstack Dockerized App – Node.js (Backend) + React (Frontend) + NGINX

This project demonstrates a lightweight, multi-stage Dockerized fullstack application using:
- 🟢 Node.js (Express) for Backend API
- ⚛️ React.js for Frontend UI
- 🌐 NGINX as a Reverse Proxy
- 🧩 Docker Compose for service orchestration

> ✅ Built and tested on Ubuntu 20.04

---

## 📁 Project Structure

fullstack-app/
├── backend/ # Node.js backend API
│ ├── Dockerfile
│ └── ...
├── frontend/ # React.js frontend
│ ├── Dockerfile
│ └── ...
├── nginx/ # NGINX reverse proxy
│ └── default.conf
├── docker-compose.yml
└── README.md

yaml
Copy code

---

## 🚀 Getting Started

### ✅ Prerequisites

- Docker installed: [Install Docker](https://docs.docker.com/engine/install/ubuntu/)
- Docker Compose installed: [Install Docker Compose](https://docs.docker.com/compose/install/linux/)
- Git installed: `sudo apt install git`

---

### 📦 Clone the Repository

```bash
git clone https://github.com/surajvish1/fullstack-app.git
cd fullstack-app
🏗️ Build & Run the App
bash
Copy code
sudo docker-compose up --build
✅ This will:

Build the backend (Node.js API)

Build the frontend (React SPA)

Set up NGINX to route:

/api/* → backend

/ → frontend

🌐 Access the Application
Once running, open your browser:

arduino
Copy code
http://localhost
You should see the React frontend showing:

React Frontend
Message from backend: Hello from Node.js!

⚙️ Docker Compose Services
docker-compose.yml
yaml
Copy code
version: "3.3"

services:
  backend:
    build: ./backend
    container_name: node-backend
    ports:
      - "5000:5000"
    networks:
      - app-network

  frontend:
    build: ./frontend
    container_name: react-frontend
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
    ports:
      - "80:80"
    depends_on:
      - backend
      - frontend
    networks:
      - app-network

networks:
  app-network:
📝 NGINX Config
nginx/default.conf
nginx
Copy code
server {
    listen 80;

    location /api/ {
        proxy_pass http://backend:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        proxy_pass http://frontend:80/;
    }
}
🛠️ Troubleshooting
Permission Denied on Docker Socket
Run with sudo or add your user to docker group:

bash
Copy code
sudo usermod -aG docker $USER
newgrp docker
React shows no backend message
Ensure backend is responding at /api/hello and NGINX is routing correctly.

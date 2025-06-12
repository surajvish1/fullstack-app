# 🐳 Fullstack Dockerized App – Node.js (Backend) + React (Frontend) + NGINX ( Knovator DevOps Interview Assignment)

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


## 🚀 Getting Started

### ✅ Prerequisites

- Docker installed: [Install Docker](https://docs.docker.com/engine/install/ubuntu/)
- Docker Compose installed: [Install Docker Compose](https://docs.docker.com/compose/install/linux/)
- Git installed: `sudo apt install git`

---

### 📦 Clone the Repository
use Master Branch
git clone https://github.com/surajvish1/fullstack-app.git
cd fullstack-app

🏗️ Build & Run the App

sudo docker-compose up --build

-----------------------------------
🌐 Access the Application
Once running, open your browser:

http://localhost
You should see the React frontend showing:
React Frontend
Message from backend: Hello from Node.js!

---------------------------------------------
🛠️ Troubleshooting
Permission Denied on Docker Socket
Run with sudo or add your user to docker group:

sudo usermod -aG docker $USER
newgrp docker
React shows no backend message
Ensure backend is responding at /api/hello and NGINX is routing correctly.

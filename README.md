
# Beginner DevOps Demo Project

This project is a simple, complete demonstration of a DevOps workflow. It includes a containerized web application, automated tests, and a CI/CD pipeline.

## 🚀 Project Overview

The goal of this project is to show the journey of code from a local machine to a running container.

### Architecture
1. **Application**: Node.js Express API.
2. **Containerization**: Docker (packaged as an image).
3. **CI/CD**: GitHub Actions (automated testing and building).
4. **Orchestration**: Docker Compose (running the app locally).

---

## 📂 Folder Structure

- `/app`: Contains the web application source code.
- `/tests`: Contains automated test cases.
- `/.github/workflows`: CI/CD pipeline configuration (GitHub Actions).
- `Dockerfile`: Instructions for building the Docker image.
- `docker-compose.yml`: For running the application locally with one command.

---

## 🛠️ Tech Stack

- **Version Control**: Git
- **App**: Node.js (Express)
- **Tests**: Jest & Supertest
- **Container**: Docker
- **Pipeline**: GitHub Actions

---

## 🏃 Getting Started (Local Development)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)

### 2. Run Locally (Node.js)
```bash
cd app
npm install
npm start
```
The app will be available at [http://localhost:8080](http://localhost:8080).

### 3. Run Tests
```bash
cd app
npm test
```

### 4. Run with Docker Compose
From the project root:
```bash
docker-compose up --build
```
This builds the image and starts the container automatically.

---

## 🤖 CI/CD Pipeline Flow

When you push code to the `main` branch, the following happens:

1. **Trigger**: Push to GitHub.
2. **Test Phase**: 
   - GitHub Actions starts a clean Ubuntu environment.
   - It installs Node.js and project dependencies.
   - It runs the automated tests (`npm test`).
3. **Build Phase** (if tests pass):
   - It sets up Docker Buildx.
   - It builds the Docker image.
   - (Optional) It pushes the image to Docker Hub.

---

## 💡 Core DevOps Concepts Demonstrated

- **Infrastructure as Code (IaC)**: Using `Dockerfile` and `docker-compose.yml` to define environment.
- **Continuous Integration (CI)**: Running tests automatically on every push.
- **Continuous Delivery (CD)**: Automating the creation of a deployable Docker image.
- **Observability**: Basic logging in `app/index.js` and a `/health` endpoint for monitoring.
- **Deployment**: Automatic SSH deployment to a DigitalOcean Droplet at `http://[YOUR_IP]:8080`.
---

## 📝 Setup Instructions for GitHub Actions

To enable Docker Hub pushing:
1. Create a repository on Docker Hub.
2. Add `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` to your GitHub Repository Secrets.
3. Update `.github/workflows/ci-cd.yml` with your Docker Hub username.

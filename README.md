# AreeshaNaz DevOps Pipeline

A complete CI/CD pipeline built with Jenkins, Docker, and GitHub.

## Student Information
- **Name:** Areesha Naz
- **Course:** DevOps & Automation
- **Lectures:** 11 & 12

## Pipeline Stages
1. **Checkout** — Pull latest code from GitHub
2. **Build** — Install dependencies and verify Node.js
3. **Test** — Run automated tests
4. **Docker Build** — Build Docker image and tag it
5. **Push to Hub** — Push image to Docker Hub
6. **Deploy** — Stop old container and run new one

## Tech Stack
- Jenkins (CI/CD Server)
- Docker & Docker Hub
- GitHub & Webhooks
- Node.js
- ngrok (Public URL)

## How It Works
1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins instantly
3. Jenkins runs all 6 pipeline stages automatically
4. New Docker image is built and pushed to Docker Hub
5. App is deployed and live at public ngrok URL

## Repository
- GitHub: https://github.com/Areesha-Naz/AreeshaNaz-DevOps-Pipeline
- Docker Hub: https://hub.docker.com/r/areeshanaz/areeshanaz-devops-pipeline

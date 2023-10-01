# SPIDER SITE BACKEND

## What's used:

1. Node (typescript)
2. MySql

## Setup

- Create .env file inside backend/env/ and reference the parameters from backend/env/.env.example


# SPIDER SITE FRONTEND

## What's used:

1. React JS
2. Material UI

## Setup

- Create an .env file in root directory and reference the parameters from .env.example file


## Requirements

- Docker
- Docker compose


# Docker Compose

To deploy the application using Docker Compose, follow these steps:

1. Clone this repository to your local machine.
2. Create a `.env` file in the project's root directory with the necessary environment variables (as explained above).
3. Build the Docker containers:

   ```bash
   docker-compose build
   ```

4. To start the application containers, run: 

   ```bash
   docker-compose up -d
   ```

5. To stop the containers, run:

   ```bash
   docker-compose down
   ```

Open localhost:3000 in browser to access the application.


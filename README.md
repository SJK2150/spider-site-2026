# SPIDER SITE BACKEND

## What's used:

1. Node (typescript)
2. MySql

## Setup

1. Create .env file inside backend/env/ and reference the parameters from backend/env/.env.example

2. Install the packages

```bash
cd backend
```
```bash
npm install
```

3. For development

```bash
npm run dev
```

4. For deployment

```bash
npm run build
```
```bash
npm run start:prod
```

# SPIDER SITE FRONTEND

## What's used:

1. React JS
2. Material UI

## Setup

1. Create an .env file in root directory and reference the parameters from .env.example file

2. Install the packages

```bash
npm install
```

## Run Locally:

1. Run the dev server

```bash
npm start
```

2. Open localhost:3000 in browser.


## Docker Compose
To deploy the application using Docker Compose v2.12
```
   docker-compose up -d 
```
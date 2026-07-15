# Housing Portal

This directory contains the frontend portal for the housing prediction demo.

## What This App Does

The portal provides a unified experience for:

- estimating housing prices through the Python prediction API
- exploring a market analysis view with demo-friendly insights
- presenting the solution as a polished interview or portfolio project

## Main Pages

- Home page: project overview and presentation guidance
- Estimator page: form-based price prediction experience
- Market page: dashboard-style analysis and scenario exploration

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the app at:
- http://127.0.0.1:3000

## Backend Dependency

The portal expects the Python API to be running at:
- http://127.0.0.1:8000

If the backend is not running yet, start it from the sibling folder:

```bash
cd ../task1-model-api
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

## Project Notes

This frontend is designed to feel demo-ready, with clear navigation, modern styling, and a simple story for explaining the full end-to-end solution.

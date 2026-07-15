# Housing Portal

This repository contains a small full-stack demo that combines a housing price prediction API and a polished portal UI.

## Project Overview

The project is split into two parts:

- Task 1: a Python-based housing price prediction API built with FastAPI
- Task 2: a Next.js portal that presents the prediction experience and a market analysis experience

This makes it suitable for demonstrating how a machine learning service can be exposed through a user-friendly product interface.

## Project Structure

```text
housing-portal/
├── task1-model-api/
│   ├── main.py
│   ├── House Price Dataset.csv
│   ├── Test Data For Prediction.csv
│   ├── requirements.txt
│   └── README.md
└── task2-portal/
    ├── app/
    ├── package.json
    └── README.md
```

## Main Features

- Housing price estimation through a prediction model
- Interactive portal pages for estimator and market analysis
- Modern responsive UI built with Next.js and Tailwind CSS
- API proxy layer between frontend and Python backend
- Demo-friendly presentation flow for interviews or portfolio review

## Quick Start

### 1. Start the Python API

```bash
cd task1-model-api
pip install -r requirements.txt
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

The API docs will be available at:
- http://127.0.0.1:8000/docs

### 2. Start the Portal

```bash
cd task2-portal
npm install
npm run dev
```

Then open:
- http://127.0.0.1:3000

## Demo Flow

1. Open the estimator page to show the prediction flow.
2. Switch to the market analysis page to show a broader product experience.
3. Explain how the Python model powers both experiences through a shared backend.

## Tech Stack

- Python / FastAPI
- scikit-learn
- Next.js
- React
- Tailwind CSS
- TypeScript

## Notes

This project is intended as a demonstration of end-to-end product thinking: from model service to user-facing experience.

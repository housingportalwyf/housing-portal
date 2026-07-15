# Housing Price Prediction API

This project implements a simple housing price prediction API using FastAPI and a linear regression model trained from a CSV dataset.

## Features

- Single prediction endpoint
- Batch prediction endpoint
- Model metadata endpoint
- Health check endpoint
- Swagger/OpenAPI documentation

## Project Files

- `main.py` - FastAPI application and model logic
- `House Price Dataset.csv` - Training dataset
- `Test Data For Prediction.csv` - Sample prediction inputs
- `requirements.txt` - Python dependencies
- `Dockerfile` - Container build configuration

## Run Locally

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Start the API:
   ```bash
   python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
   ```

3. Open Swagger UI:
   - http://127.0.0.1:8000/docs

## Docker Run

```bash
docker build -t housing-api .
docker run -p 8000:8000 housing-api
```

## Example Requests

The API expects feature vectors in this order:

1. square_footage
2. bedrooms
3. bathrooms
4. year_built
5. lot_size
6. distance_to_city_center
7. school_rating

### Predict one house

```bash
curl -X POST "http://127.0.0.1:8000/predict" -H "Content-Type: application/json" -d '{"features":[1550,3,2,1997,6800,4.1,7.6]}'
```

### Predict multiple houses

```bash
curl -X POST "http://127.0.0.1:8000/predict" -H "Content-Type: application/json" -d '{"batch":[[1550,3,2,1997,6800,4.1,7.6],[2200,4,2.5,2008,9600,7,8.8]]}'
```

## Example Response

A sample prediction response looks like this:

```json
{
  "price": 271482.38499546808
}
```

## Interview Notes

This project demonstrates:
- Building a REST API with FastAPI
- Training a regression model from a CSV dataset
- Exposing model predictions through Swagger UI
- Containerizing the service with Docker
- Using Python 3.12+ compatible dependencies

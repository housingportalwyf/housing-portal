
from pathlib import Path
import csv

import joblib
import numpy as np
from fastapi import FastAPI, HTTPException  # type: ignore[import]
from pydantic import BaseModel, Field
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

app = FastAPI(
    title="Housing Price Prediction API",
    description="A simple regression API that predicts housing prices from CSV data.",
    version="1.0.0",
)

BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "House Price Dataset.csv"
MODEL_FILE = BASE_DIR / "model.pkl"
FEATURE_COLUMNS = [
    "square_footage",
    "bedrooms",
    "bathrooms",
    "year_built",
    "lot_size",
    "distance_to_city_center",
    "school_rating",
]
TARGET_COLUMN = "price"


def load_training_data():
    with DATA_FILE.open("r", encoding="utf-8", newline="") as handle:
        rows = list(csv.DictReader(handle))

    X = np.array([[float(row[column]) for column in FEATURE_COLUMNS] for row in rows], dtype=float)
    y = np.array([float(row[TARGET_COLUMN]) for row in rows], dtype=float)
    return X, y


def ensure_model():
    if MODEL_FILE.exists():
        return joblib.load(MODEL_FILE)

    X, y = load_training_data()
    model = LinearRegression()
    model.fit(X, y)
    joblib.dump(model, MODEL_FILE)
    return model


model = ensure_model()


class PredictionRequest(BaseModel):
    features: list[float] | None = Field(default=None)
    batch: list[list[float]] | None = Field(default=None)


@app.post(
    "/predict",
    summary="Predict housing price",
    description="Provide either a single feature vector or a batch of feature vectors.",
)
async def predict(request: PredictionRequest):
    if request.batch is not None:
        if not request.batch:
            raise HTTPException(status_code=400, detail="Batch cannot be empty.")
        for row in request.batch:
            if len(row) != len(FEATURE_COLUMNS):
                raise HTTPException(
                    status_code=400,
                    detail=f"Each feature vector must contain {len(FEATURE_COLUMNS)} values.",
                )
        batch = np.array(request.batch, dtype=float)
        predictions = model.predict(batch)
        return {"predictions": predictions.tolist()}

    if request.features is not None:
        if len(request.features) != len(FEATURE_COLUMNS):
            raise HTTPException(
                status_code=400,
                detail=f"Features must contain {len(FEATURE_COLUMNS)} values.",
            )
        pred = model.predict(np.array([request.features], dtype=float))[0]
        return {"price": float(pred)}

    raise HTTPException(status_code=400, detail="Please provide either features or batch.")


@app.get("/model-info", summary="Get model information")
async def model_info():
    X, y = load_training_data()
    predictions = model.predict(X)

    return {
        "coefficients": model.coef_.tolist(),
        "intercept": float(model.intercept_),
        "r2_score": float(r2_score(y, predictions)),
        "mae": float(mean_absolute_error(y, predictions)),
        "rmse": float(np.sqrt(mean_squared_error(y, predictions))),
        "trained_on": DATA_FILE.name,
        "feature_names": FEATURE_COLUMNS,
        "sample_count": int(len(X)),
    }


@app.get("/health", summary="Health check")
async def health():
    return {"status": "healthy", "dataset": DATA_FILE.name}


@app.get("/", include_in_schema=False)
async def root():
    return {"message": "Housing Price Prediction API is running."}

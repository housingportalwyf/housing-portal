'use client';

import { useMemo, useState } from 'react';

type HistoryItem = {
  bedrooms: number;
  sqft: number;
  age: number;
  price: number;
};

export function useHousingModel() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const predict = async (form: Record<string, number>) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/python/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features: [form.sqft, form.bedrooms, form.bathrooms, form.yearBuilt, form.lotSize, form.distance, form.schoolRating] }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Prediction failed');
      return { price: data.price };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Prediction failed');
      return { price: 0 };
    } finally {
      setIsLoading(false);
    }
  };

  const addHistory = (item: HistoryItem) => {
    setHistory((prev) => [item, ...prev].slice(0, 6));
  };

  return useMemo(() => ({ predict, history, addHistory, isLoading, error }), [history, isLoading, error]);
}

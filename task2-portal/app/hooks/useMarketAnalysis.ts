'use client';

import { useCallback, useMemo, useState } from 'react';

const defaultSummary = {
  averagePrice: 412500,
  averageSqft: 2210,
  totalListings: 128,
  topSegment: 'Family Homes',
};

export function useMarketAnalysis() {
  const [summary, setSummary] = useState(defaultSummary);
  const [loading, setLoading] = useState(false);

  const fetchSummary = useCallback(async (region = 'all') => {
    setLoading(true);
    try {
      const response = await fetch(`/api/java/market?region=${region}`);
      const data = await response.json();
      setSummary(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const predictWhatIf = useCallback(async (base: Record<string, number>, changes: Record<string, number>) => {
    const adjusted = {
      ...base,
      ...changes,
    };
    const estimated = Math.round(adjusted.bedrooms * 180000 + adjusted.region * 8000 + adjusted.sqft * 120);
    return { newPrice: estimated };
  }, []);

  return useMemo(
    () => ({ summary, loading, fetchSummary, predictWhatIf }),
    [summary, loading, fetchSummary, predictWhatIf]
  );
}

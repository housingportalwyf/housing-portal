
'use client';

import { useState } from 'react';
import { useHousingModel } from '@/hooks/useHousingModel';
import PredictionChart from '@/components/PredictionChart';
import HistoryList from '@/components/HistoryList';
import ComparisonView from '@/components/ComparisonView';

const initialForm = {
  sqft: 2200,
  bedrooms: 3,
  bathrooms: 2,
  yearBuilt: 2005,
  lotSize: 6800,
  distance: 6,
  schoolRating: 8,
};

export default function EstimatorPage() {
  const { predict, history, addHistory, isLoading, error } = useHousingModel();
  const [form, setForm] = useState(initialForm);
  const [comparison, setComparison] = useState<Array<{ price: number }>>([]);
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const prediction = await predict(form);
    setResult(prediction.price);
    addHistory({
      ...form,
      age: new Date().getFullYear() - form.yearBuilt,
      price: prediction.price,
    });
    setComparison((prev) => [...prev, { price: prediction.price }].slice(-3));
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
        <h1 className="text-3xl font-semibold text-white">Property Value Estimator</h1>
        <p className="mt-2 text-slate-300">Generate a housing estimate using the shared regression model and review your previous runs.</p>
        <p className="mt-3 text-sm text-cyan-300">This page demonstrates how the Task 1 Python model can be used through a polished front-end experience.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['sqft', 'Square Footage'],
              ['bedrooms', 'Bedrooms'],
              ['bathrooms', 'Bathrooms'],
              ['yearBuilt', 'Year Built'],
              ['lotSize', 'Lot Size'],
              ['distance', 'Distance to City Center'],
              ['schoolRating', 'School Rating'],
            ].map(([name, label]) => (
              <label key={name} className="flex flex-col gap-1 text-sm text-slate-300">
                <span>{label}</span>
                <input
                  type="number"
                  value={form[name as keyof typeof form]}
                  onChange={(event) => setForm((prev) => ({ ...prev, [name]: Number(event.target.value) }))}
                  className="rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-white"
                />
              </label>
            ))}
          </div>
          <button type="submit" className="mt-6 rounded-lg bg-cyan-600 px-4 py-2 font-medium text-white">
            {isLoading ? 'Estimating...' : 'Estimate Property Value'}
          </button>
          {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
        </form>

        <div className="space-y-4">
          {result !== null ? <PredictionChart price={result} /> : <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-slate-300">Submit a property to see the estimate.</div>}
          {history.length > 0 ? <HistoryList history={history} /> : null}
        </div>
      </div>

      {comparison.length > 0 ? <ComparisonView data={comparison} /> : null}
    </div>
  );
}

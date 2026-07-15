
'use client';

import { useEffect, useState } from 'react';
import { useMarketAnalysis } from '@/hooks/useMarketAnalysis';
import MarketDashboard from '@/components/MarketDashboard';
import WhatIfTool from '@/components/WhatIfTool';
import ExportButtons from '@/components/ExportButtons';

export default function MarketPage() {
  const { summary, predictWhatIf, loading, fetchSummary } = useMarketAnalysis();
  const [params, setParams] = useState({ region: 1, bedrooms: 3, sqft: 2200 });

  useEffect(() => {
    fetchSummary('all');
  }, [fetchSummary]);

  const handleWhatIf = async (changes: Record<string, number>) => {
    const result = await predictWhatIf(params, changes);
    console.log('New predicted price:', result.newPrice);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Property Market Analysis</h1>
            <p className="mt-2 text-slate-300">Review market intensity, compare segments, and test future scenarios using the shared model.</p>
            <p className="mt-3 text-sm text-cyan-300">This page shows how a second application can consume the same prediction capability in a different domain.</p>
          </div>
          <ExportButtons data={summary} />
        </div>
      </section>

      <MarketDashboard data={summary} />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Analysis Filters</h2>
          <div className="mt-4 grid gap-3">
            <label className="text-sm text-slate-300">
              Region
              <select className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-white" onChange={(event) => setParams((prev) => ({ ...prev, region: Number(event.target.value) }))}>
                <option value={1}>Downtown</option>
                <option value={2}>Suburb</option>
                <option value={3}>Rural</option>
              </select>
            </label>
            <label className="text-sm text-slate-300">
              Bedrooms
              <input type="number" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-white" value={params.bedrooms} onChange={(event) => setParams((prev) => ({ ...prev, bedrooms: Number(event.target.value) }))} />
            </label>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
          <WhatIfTool onCalculate={handleWhatIf} loading={loading} />
          {loading ? <p className="mt-3 text-sm text-slate-300">Refreshing market data...</p> : null}
        </div>
      </section>
    </div>
  );
}

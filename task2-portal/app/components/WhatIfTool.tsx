export default function WhatIfTool({ onCalculate, loading }: { onCalculate: (changes: Record<string, number>) => Promise<void>; loading: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-white">What-if Analysis</h3>
      <div className="flex flex-wrap gap-3">
        <button
          className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white"
          onClick={() => onCalculate({ bedrooms: 4, sqft: 2600 })}
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Simulate larger home'}
        </button>
        <button
          className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-200"
          onClick={() => onCalculate({ bedrooms: 2, sqft: 1700 })}
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Simulate compact home'}
        </button>
      </div>
    </div>
  );
}

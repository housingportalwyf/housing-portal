export default function PredictionChart({ price }: { price: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-white">Prediction Snapshot</h3>
      <div className="flex items-end gap-3">
        {[35, 55, 75, 90].map((height) => (
          <div key={height} className="flex-1 rounded-t-xl bg-cyan-500/70" style={{ height: `${height}px` }} />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-300">Estimated value: ${price.toLocaleString()}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-400">Powered by the Task 1 model</p>
    </div>
  );
}

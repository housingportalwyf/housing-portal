export default function ComparisonView({ data }: { data: Array<{ price: number }> }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-white">Comparison View</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="rounded-xl border border-white/10 bg-slate-800/80 p-3 text-sm text-slate-300">
            Property {index + 1}: <span className="ml-2 font-semibold text-cyan-400">${item.price.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

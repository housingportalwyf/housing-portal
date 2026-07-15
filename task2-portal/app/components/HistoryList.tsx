export default function HistoryList({ history }: { history: Array<{ bedrooms: number; sqft: number; age: number; price: number }> }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-white">Recent Estimates</h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {history.map((item, index) => (
          <li key={`${item.price}-${index}`} className="flex justify-between rounded-lg border border-white/10 px-3 py-2">
            <span>{item.bedrooms} bed • {item.sqft} sqft • {item.age} years</span>
            <span className="font-medium text-cyan-400">${item.price.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

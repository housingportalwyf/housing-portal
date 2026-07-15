export default function MarketDashboard({ data }: { data: { averagePrice: number; averageSqft: number; totalListings: number; topSegment: string } }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <p className="text-sm text-slate-400">Average Price</p>
        <p className="mt-2 text-2xl font-semibold text-white">${data.averagePrice.toLocaleString()}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <p className="text-sm text-slate-400">Average Sqft</p>
        <p className="mt-2 text-2xl font-semibold text-white">{data.averageSqft.toLocaleString()} sqft</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <p className="text-sm text-slate-400">Top Segment</p>
        <p className="mt-2 text-2xl font-semibold text-white">{data.topSegment}</p>
      </div>
    </div>
  );
}

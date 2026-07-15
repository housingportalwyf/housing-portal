export default function ExportButtons({ data }: { data: { averagePrice: number; averageSqft: number; totalListings: number; topSegment: string } }) {
  const exportCsv = () => {
    const lines = ['metric,value', `averagePrice,${data.averagePrice}`, `averageSqft,${data.averageSqft}`, `totalListings,${data.totalListings}`, `topSegment,${data.topSegment}`];
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'market-summary.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button className="rounded-lg border border-white/10 px-3 py-2 text-sm" onClick={exportCsv}>Export CSV</button>
      <button className="rounded-lg border border-white/10 px-3 py-2 text-sm" onClick={() => window.print()}>Export PDF</button>
    </div>
  );
}

export default function StatusBadge({ label, active }: { label: string; active: boolean }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${active ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
      {active ? '● Active' : '○ Standby'} · {label}
    </span>
  );
}

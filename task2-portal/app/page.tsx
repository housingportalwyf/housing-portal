import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';

const apps = [
  {
    title: 'Property Value Estimator',
    description: 'A FastAPI-powered estimator with prediction history and comparison views.',
    href: '/estimator',
  },
  {
    title: 'Property Market Analysis',
    description: 'A market dashboard for segment analysis, what-if scenarios, and exports.',
    href: '/market',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">Unified Housing Portal</p>
        <h1 className="text-4xl font-semibold text-white">A multi-app housing intelligence experience built with Next.js and shared ML capabilities.</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          This portal brings together two independent applications: one focused on property value estimation, and another on market analysis. Both are designed around the same predictive model and a unified user experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <StatusBadge label="Python API" active={true} />
          <StatusBadge label="Market API" active={true} />
          <StatusBadge label="Next.js UI" active={true} />
        </div>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <Link key={app.href} href={app.href} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400">
            <h2 className="text-xl font-semibold text-white">{app.title}</h2>
            <p className="mt-3 text-slate-300">{app.description}</p>
            <span className="mt-6 inline-block text-sm font-medium text-cyan-400">Open application →</span>
          </Link>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Project Architecture</h2>
          <p className="mt-3 text-slate-300">A unified Next.js portal hosts multiple experience layers, while the shared ML prediction service remains reusable across apps.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">Next.js</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">React</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">FastAPI</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">Tailwind CSS</span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6">
        <h2 className="text-xl font-semibold text-white">Key Highlights</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">Shared prediction model across multiple apps</div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">Unified navigation and modern responsive UI</div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">Clear product storytelling for interview demos</div>
        </div>
      </section>

      <section className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6">
        <h2 className="text-xl font-semibold text-white">How to Present It</h2>
        <div className="mt-3 space-y-2 text-slate-300">
          <p>1. Start with the estimator to show the Python ML integration and prediction flow.</p>
          <p>2. Move to market analysis to show how the same model powers a different product experience.</p>
          <p>3. End by explaining the unified portal structure and reusable architecture.</p>
        </div>
      </section>
    </div>
  );
}

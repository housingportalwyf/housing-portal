'use client';

import { useEffect, useState } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleError = () => setError('An unexpected error occurred.');
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (error) {
    return <div className="p-8 text-red-400">{error}</div>;
  }

  return <>{children}</>;
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="max-w-[680px] text-center">
        <h1 className="text-base font-medium text-text-primary mb-3 tabular-nums">
          404
        </h1>
        <p className="text-xs text-text-secondary mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
}

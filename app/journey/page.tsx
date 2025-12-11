import Link from 'next/link';
import { journey } from '../data';

export const metadata = {
  title: "Journey - Hanif Tri Widiyanto",
  description: "My journey from 2016 to present",
};

export default function Journey() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <main className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary mb-10 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <header className="mb-10">
          <h1 className="text-base font-medium text-text-primary mb-3">
            Journey
          </h1>
          <p className="text-xs text-text-secondary">
            A timeline of key moments
          </p>
        </header>

        <div className="space-y-6">
          {journey.map((item, i) => (
            <div key={i} className="flex gap-4 text-xs">
              <span className="text-text-tertiary w-10 shrink-0 tabular-nums font-medium">{item.year}</span>
              <ul className="space-y-1.5 flex-1">
                {item.events.map((event, j) => (
                  <li key={j} className="text-text-secondary leading-relaxed">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

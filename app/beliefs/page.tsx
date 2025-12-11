import Link from 'next/link';
import { beliefs } from '../data';

export const metadata = {
  title: "Beliefs - Hanif Tri Widiyanto",
  description: "Things I believe in",
};

export default function Beliefs() {
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
            Things I believe
          </h1>
          <p className="text-xs text-text-secondary">
            Principles that guide how I work and think
          </p>
        </header>

        <div className="space-y-8">
          {beliefs.map((belief, i) => (
            <div key={i}>
              <h2 className="text-sm font-medium text-text-primary mb-3">
                {belief.title}
              </h2>
              <ul className="space-y-1.5">
                {belief.points.map((point, j) => (
                  <li key={j} className="text-xs text-text-secondary leading-relaxed pl-3 relative before:content-['▪'] before:absolute before:left-0 before:text-text-tertiary">
                    {point}
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

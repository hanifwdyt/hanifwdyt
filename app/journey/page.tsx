import Link from 'next/link';
import { getJourney } from '@/lib/content';

export const metadata = {
  title: "Journey - Hanif Tri Widiyanto",
  description: "My journey from 2016 to present",
};

function parseJourney(content: string) {
  const lines = content.split('\n').filter(line => line.trim());
  const journey = [];
  let currentYear = { year: '', events: [] as string[] };

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentYear.year) {
        journey.push(currentYear);
      }
      currentYear = {
        year: line.replace('## ', ''),
        events: []
      };
    } else if (line.startsWith('- ') && currentYear.year) {
      currentYear.events.push(line.replace('- ', ''));
    }
  }

  if (currentYear.year) {
    journey.push(currentYear);
  }

  return journey;
}

export default function Journey() {
  const data = getJourney();
  const journey = parseJourney(data.content);

  return (
    <div className="min-h-screen bg-bg-primary">
      <main className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary mb-10 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-xl font-medium text-text-primary mb-4">
            Journey
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
           The path so far
          </p>
        </header>

        <div className="space-y-8">
          {journey.map((item, i) => (
            <div key={i} className="flex gap-6 text-sm">
              <span className="text-text-tertiary w-12 shrink-0 tabular-nums font-medium">{item.year}</span>
              <ul className="space-y-2 flex-1">
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

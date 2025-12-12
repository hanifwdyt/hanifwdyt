import Link from 'next/link';
import { getBeliefs } from '@/lib/content';

export const metadata = {
  title: "Beliefs - Hanif Tri Widiyanto",
  description: "Things I believe in",
};

function parseBeliefs(content: string) {
  const lines = content.split('\n').filter(line => line.trim());
  const beliefs = [];
  let currentBelief: { title: string; points: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentBelief) {
        beliefs.push(currentBelief);
      }
      currentBelief = {
        title: line.replace('## ', ''),
        points: []
      };
    } else if (line.startsWith('- ') && currentBelief) {
      currentBelief.points.push(line.replace('- ', ''));
    }
  }

  if (currentBelief) {
    beliefs.push(currentBelief);
  }

  return beliefs;
}

export default function Beliefs() {
  const data = getBeliefs();
  const beliefs = parseBeliefs(data.content);

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
            Things I believe
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Principles that guide how I work and think
          </p>
        </header>

        <div className="space-y-10">
          {beliefs.map((belief, i) => (
            <div key={i}>
              <h2 className="text-base font-medium text-text-primary mb-4">
                {belief.title}
              </h2>
              <ul className="space-y-2">
                {belief.points.map((point, j) => (
                  <li key={j} className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-text-tertiary">
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

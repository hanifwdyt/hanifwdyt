import Link from 'next/link';
import { getReading } from '@/lib/content';

export const metadata = {
  title: "Reading - Hanif Tri Widiyanto",
  description: "Books I've read",
};

function parseReading(content: string) {
  const lines = content.split('\n').filter(line => line.trim());
  const booksByYear: Record<string, Array<{ title: string; author: string }>> = {};
  const currentlyListening: Array<{ title: string; artist: string }> = [];

  let currentYear = '';
  let inBooksSection = false;
  let inListeningSection = false;

  for (const line of lines) {
    if (line.startsWith('## Books')) {
      inBooksSection = true;
      inListeningSection = false;
      continue;
    }
    if (line.startsWith('## Currently Listening')) {
      inBooksSection = false;
      inListeningSection = true;
      continue;
    }

    if (inBooksSection) {
      if (line.startsWith('### ')) {
        currentYear = line.replace('### ', '');
        booksByYear[currentYear] = [];
      } else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* by (.+)/);
        if (match && currentYear) {
          booksByYear[currentYear].push({
            title: match[1],
            author: match[2]
          });
        }
      }
    }

    if (inListeningSection) {
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* by (.+)/);
        if (match) {
          currentlyListening.push({
            title: match[1],
            artist: match[2]
          });
        }
      }
    }
  }

  // Sort years descending
  const years = Object.keys(booksByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return { booksByYear, years, currentlyListening };
}

export default function Reading() {
  const data = getReading();
  const { booksByYear, years, currentlyListening } = parseReading(data.content);

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
            Reading
          </h1>
          <p className="text-xs text-text-secondary">
            Books I've read over the years
          </p>
        </header>

        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-xs text-text-tertiary mb-3 tracking-wide tabular-nums">{year}</h2>
              <div className="space-y-2">
                {booksByYear[year].map((book, i) => (
                  <div key={i} className="text-xs text-text-secondary py-1">
                    <span className="text-text-primary">{book.title}</span>
                    <span className="text-text-secondary"> — {book.author}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {currentlyListening.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xs text-text-tertiary mb-3 tracking-wide">Currently listening to</h2>
            <div className="space-y-2">
              {currentlyListening.map((song, i) => (
                <div key={i} className="text-xs text-text-secondary py-1">
                  <span className="text-text-primary">{song.title}</span>
                  <span className="text-text-tertiary"> — {song.artist}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

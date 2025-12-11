import Link from 'next/link';
import { books } from '../data';

export const metadata = {
  title: "Reading - Hanif Tri Widiyanto",
  description: "Books I've read",
};

export default function Reading() {
  // Group books by year
  const booksByYear = books.reduce((acc, book) => {
    if (!acc[book.year]) {
      acc[book.year] = [];
    }
    acc[book.year].push(book);
    return acc;
  }, {} as Record<string, typeof books>);

  // Sort years descending
  const years = Object.keys(booksByYear).sort((a, b) => parseInt(b) - parseInt(a));

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
      </main>
    </div>
  );
}

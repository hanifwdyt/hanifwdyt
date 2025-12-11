import Link from 'next/link';
import { getAllWriting } from '@/lib/content';

export const metadata = {
  title: "Writing - Hanif Tri Widiyanto",
  description: "All my writing",
};

export default function Writing() {
  const writing = getAllWriting();

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
            Writing
          </h1>
          <p className="text-xs text-text-secondary">
            All posts
          </p>
        </header>

        <div className="space-y-2">
          {writing.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex gap-4 text-xs group py-1 -mx-1 px-1 rounded hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary"
            >
              <span className="text-text-tertiary w-16 shrink-0 tabular-nums">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <span className="text-text-secondary group-hover:text-text-primary">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

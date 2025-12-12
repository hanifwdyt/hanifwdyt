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
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary mb-10 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-xl font-medium text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            All posts
          </p>
        </header>

        <div className="space-y-3">
          {writing.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex gap-5 text-sm group py-1.5 -mx-1 px-1 rounded hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary"
            >
              <span className="text-text-tertiary w-20 shrink-0 tabular-nums">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <span className="text-text-secondary group-hover:text-text-primary leading-relaxed">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

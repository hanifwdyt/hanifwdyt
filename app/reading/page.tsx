import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getReading } from '@/lib/content';
import { markdownComponents } from '@/app/components/MarkdownComponents';

export const metadata = {
  title: "Reading - Hanif Tri Widiyanto",
  description: "Books I've read",
};

export default function Reading() {
  const reading = getReading();

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
            {reading.title}
          </h1>
          <p className="text-xs text-text-secondary">
            {reading.description}
          </p>
        </header>

        <article className="prose prose-sm max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {reading.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

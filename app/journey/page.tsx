import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getJourney } from '@/lib/content';
import { markdownComponents } from '@/app/components/MarkdownComponents';

export const metadata = {
  title: "Journey - Hanif Tri Widiyanto",
  description: "My journey from 2016 to present",
};

export default function Journey() {
  const journey = getJourney();

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
            {journey.title}
          </h1>
          <p className="text-xs text-text-secondary">
            {journey.description}
          </p>
        </header>

        <article className="prose prose-sm max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {journey.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

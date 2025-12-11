import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllWriting, getWritingBySlug } from '@/lib/content';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownComponents } from '@/app/components/MarkdownComponents';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const writing = getAllWriting();
  return writing.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingBySlug(slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title} - Hanif Tri Widiyanto`,
    description: post.excerpt,
  };
}

export default async function WritingPost({ params }: Props) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary mb-10 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <header className="mb-10">
          <h1 className="text-base font-medium text-text-primary mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <time className="tabular-nums">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span>·</span>
            <span>{post.category}</span>
          </div>
        </header>

        <div className="max-w-none prose prose-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

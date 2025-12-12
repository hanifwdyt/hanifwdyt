import Link from 'next/link';
import { bio, socialLinks } from './data';
import { getAllWriting } from '@/lib/content';

export default function Home() {
  const writing = getAllWriting();

  return (
    <div className="min-h-screen bg-bg-primary">
      <main className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">

        {/* Header */}
        <header className="mb-24">
          <h1 className="text-2xl font-medium text-text-primary mb-6">
            {bio.name}
          </h1>
          <p className="text-base text-text-secondary max-w-lg leading-relaxed">
            I document my{' '}
            <Link href="/journey" className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm">
              journey
            </Link>
            {' '}and{' '}
            <Link href="/beliefs" className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm">
              beliefs
            </Link>
            {' '}to stay grounded. Working as a{' '}
            <Link href="/experience" className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm">
              developer
            </Link>
            , writing when things catch my eye,{' '}
            <Link href="/reading" className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm">
              reading
            </Link>
            {' '}often, and building{' '}
            <Link href="/projects" className="text-text-primary underline decoration-border hover:decoration-text-tertiary underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm">
              projects
            </Link>
            {' '}on the side.
          </p>
        </header>

        {/* Writing */}
        <section className="mb-20">
          <h2 className="text-sm text-text-tertiary mb-5 tracking-wide font-medium">Writing</h2>
          <div className="space-y-3 mb-5">
            {writing.slice(0, 5).map((post) => (
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
          <Link
            href="/writing"
            className="inline-block text-sm text-text-secondary hover:text-text-primary py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
          >
            → See all writing
          </Link>
        </section>

        {/* Connect */}
        <footer className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
          {socialLinks.map((link, index) => (
            <span key={link.name} className="flex items-center gap-3">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
              >
                {link.name}
              </a>
              {index < socialLinks.length - 1 && (
                <span className="text-border">·</span>
              )}
            </span>
          ))}
        </footer>

      </main>
    </div>
  );
}

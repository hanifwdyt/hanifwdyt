import Link from 'next/link';
import { experience } from '../data';

export const metadata = {
  title: "Developer Experience - Hanif Tri Widiyanto",
  description: "My experience as a developer",
};

export default function Experience() {
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
            Developer experience
          </h1>
          <p className="text-xs text-text-secondary">
            Technologies and contexts I work with
          </p>
        </header>

        <div className="space-y-2">
          {experience.map((item, i) => (
            <div key={i} className="flex gap-4 text-xs py-1">
              <span className="text-text-primary w-32 shrink-0">{item.tech}</span>
              <span className="text-text-secondary">{item.context}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

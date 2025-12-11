import Link from 'next/link';
import { getAllProjects } from '@/lib/content';

export const metadata = {
  title: "Projects - Hanif Tri Widiyanto",
  description: "My projects",
};

export default function Projects() {
  const projects = getAllProjects();

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
            Projects
          </h1>
          <p className="text-xs text-text-secondary">
            Things I've built
          </p>
        </header>

        <div className="space-y-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block px-3 py-2 rounded-md hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-sm text-text-primary">
                  {project.title}
                </h3>
                <span className="text-xs text-text-tertiary ml-4 shrink-0 tabular-nums">
                  {project.year}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

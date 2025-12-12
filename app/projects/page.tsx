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
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary mb-10 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-xl font-medium text-text-primary mb-4">
            Projects
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Things I've built
          </p>
        </header>

        <div className="space-y-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block px-4 py-3 rounded-md hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-base text-text-primary font-medium">
                  {project.title}
                </h3>
                <span className="text-sm text-text-tertiary ml-4 shrink-0 tabular-nums">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

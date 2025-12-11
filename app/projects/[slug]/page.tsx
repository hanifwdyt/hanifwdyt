import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownComponents } from '@/app/components/MarkdownComponents';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${project.title} - Hanif Tri Widiyanto`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
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
            {project.title}
          </h1>
          <p className="text-xs text-text-secondary mb-4" style={{ lineHeight: '1.7' }}>
            {project.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-text-tertiary tabular-nums">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>

          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary mt-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-tertiary focus-visible:ring-offset-2 rounded-sm"
            >
              <span>View Project</span>
              <span>→</span>
            </a>
          )}
        </header>

        <div className="max-w-none prose prose-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

import Link from 'next/link';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block px-3 py-2 rounded-md hover:bg-bg-secondary transition-colors"
    >
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-sm text-text-primary group-hover:text-text-secondary transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-text-tertiary ml-4 shrink-0">
          {project.year}
        </span>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed">
        {project.description}
      </p>
    </Link>
  );
}

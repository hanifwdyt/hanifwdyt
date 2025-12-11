import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WritingPost, Project } from '@/app/types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllWriting(): WritingPost[] {
  const writingDir = path.join(contentDirectory, 'writing');
  const files = fs.readdirSync(writingDir);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(writingDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getWritingBySlug(slug: string): WritingPost | null {
  try {
    const fullPath = path.join(contentDirectory, 'writing', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, 'projects');
  const files = fs.readdirSync(projectsDir);

  const projects = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        year: data.year,
        tech: data.tech || [],
        link: data.link,
        content,
      };
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      year: data.year,
      tech: data.tech || [],
      link: data.link,
      content,
    };
  } catch {
    return null;
  }
}

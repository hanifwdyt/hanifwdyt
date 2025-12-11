# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The site serves as a digital space for sharing writing, projects, beliefs, and professional experience. It follows a minimalist design philosophy with a focus on readability and simplicity.

## Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Content Management System

The site uses a file-based content management system:

- **Content Location**: All content lives in markdown files under `content/`
  - `content/writing/` - Blog posts and articles
  - `content/projects/` - Project descriptions

- **Content Processing**: The `lib/content.ts` module provides utility functions:
  - `getAllWriting()` - Fetches all writing posts, sorted by date (newest first)
  - `getWritingBySlug(slug)` - Fetches a single writing post
  - `getAllProjects()` - Fetches all projects, sorted by year (newest first)
  - `getProjectBySlug(slug)` - Fetches a single project
  - Uses `gray-matter` to parse frontmatter from markdown files
  - Automatically converts filename to URL slug (e.g., `my-post.md` → `/writing/my-post`)

- **Frontmatter Schema**:
  - **Writing posts**: `title`, `date`, `category` ("thoughts" | "poetry" | "engineering"), `excerpt`
  - **Projects**: `title`, `description`, `category` ("tools" | "experimental" | "personal"), `year`, `tech` (array), `link` (optional)

### Routing Structure

The site uses Next.js App Router with the following page structure:

- `/` - Homepage (app/page.tsx)
- `/writing` - Writing list page
- `/writing/[slug]` - Individual writing post pages (uses `generateStaticParams` for SSG)
- `/projects` - Projects list page
- `/projects/[slug]` - Individual project pages (uses `generateStaticParams` for SSG)
- `/journey` - Timeline of career and life events
- `/beliefs` - Personal beliefs and principles
- `/experience` - Technical experience and skills
- `/reading` - Reading list with books by year

### Data Management

- **Static Data**: Personal data like bio, beliefs, journey, experience, social links lives in `app/data.ts`
- **Type Definitions**: All TypeScript interfaces are defined in `app/types.ts` (WritingPost, Project, SocialLink)
- **Data Flow**: Homepage fetches writing posts via `getAllWriting()` and displays the 5 most recent posts

### Styling System

- Uses Tailwind CSS 4 with PostCSS
- Design tokens: Custom font variables (Geist Sans, Geist Mono) configured in `app/layout.tsx`
- Color scheme: Zinc-based palette with dark mode support
- Typography: Extremely small text sizes (text-xs is the norm) for a refined, understated aesthetic
- Consistent spacing and minimal design throughout

### Markdown Rendering

- Uses `react-markdown` with `remark-gfm` for GitHub-flavored markdown
- Custom styled components defined in `app/components/MarkdownComponents.tsx`
- Handles headings, paragraphs, lists, links, images (Next.js optimized), code blocks, blockquotes
- Images are automatically optimized using Next.js Image component

## Key Conventions

1. **All text sizes use text-xs or smaller** - This is intentional design choice for minimalism
2. **Dark mode is built-in** - Use zinc color variants with dark: prefix
3. **Accessibility**: All interactive elements have proper focus states with focus-visible rings
4. **Static Generation**: Writing and project pages are statically generated at build time
5. **TypeScript strict mode** is enabled
6. **Import aliases**: Use `@/` prefix to import from project root (configured in tsconfig.json)

## Adding Content

### New Writing Post
Create `content/writing/my-post.md`:
```markdown
---
title: "Post Title"
date: "2025-01-15"
category: "thoughts"
excerpt: "Brief description"
---

Content here...
```

### New Project
Create `content/projects/my-project.md`:
```markdown
---
title: "Project Name"
description: "Brief description"
category: "tools"
year: "2025"
tech: ["TypeScript", "React"]
link: "https://example.com"
---

Detailed project content...
```

## Development Notes

- The site uses React 19 and Next.js 16 (latest versions)
- Server Components are used by default (App Router)
- Dynamic routes use async params (Next.js 16 requirement)
- No client-side JavaScript needed for content pages (fully static)
- Markdown content is processed at build time for optimal performance

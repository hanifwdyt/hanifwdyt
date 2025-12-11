# Content Management

All content for the website is managed through markdown files in this directory.

## Directory Structure

```
content/
├── writing/       # Blog posts and articles
└── projects/      # Project descriptions
```

## Adding New Writing Posts

Create a new `.md` file in `content/writing/` with the following format:

```markdown
---
title: "Your Post Title"
date: "2024-12-25"
category: "thoughts" | "poetry" | "engineering"
excerpt: "A brief description of the post"
---

Your content here in markdown format...
```

## Adding New Projects

Create a new `.md` file in `content/projects/` with the following format:

```markdown
---
title: "Project Name"
description: "Brief project description"
category: "tools" | "experimental" | "personal"
year: "2024"
tech: ["TypeScript", "React", "etc"]
link: "https://project-url.com" (optional)
---

Your detailed project content here...

## Section Headers

You can use markdown headers and formatting.
```

## Tips

- The filename becomes the URL slug (e.g., `my-post.md` → `/writing/my-post`)
- Use frontmatter (content between `---`) for metadata
- Use markdown for content formatting
- Posts are automatically sorted by date (newest first)
- Projects are automatically sorted by year (newest first)

## Updating Existing Content

Simply edit the corresponding `.md` file. Changes will be reflected after rebuilding the site.

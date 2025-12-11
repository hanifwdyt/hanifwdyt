# Markdown Guide

Your website now supports full markdown syntax with automatic Next.js Image optimization!

## Basic Syntax

### Headings
```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~ (with remark-gfm)
```

### Links
```markdown
[Link text](https://example.com)
```

### Lists
```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

### Code
Inline: \`code\`

Block:
\`\`\`javascript
const hello = "world";
\`\`\`

### Blockquotes
```markdown
> This is a quote
```

### Horizontal Rule
```markdown
---
```

## Images

### Adding Images

1. **Place your image** in the appropriate folder:
   - Writing: `/public/images/writing/`
   - Projects: `/public/images/projects/`

2. **Reference in markdown:**
```markdown
![Alt text description](/images/writing/my-image.jpg)
```

### Features:
- ✅ Automatic Next.js Image optimization
- ✅ Lazy loading
- ✅ Responsive sizing
- ✅ WebP format support
- ✅ Alt text for accessibility
- ✅ Caption from alt text

### Best Practices:
- Use descriptive alt text
- Optimize images before upload (max width: 1200px)
- Use WebP format when possible
- Keep file sizes under 500KB

## Example Post with Image

\`\`\`markdown
---
title: "My Post"
date: "2024-12-25"
category: "engineering"
excerpt: "A brief description"
---

This is my introduction paragraph.

![Screenshot of the app](/images/writing/app-screenshot.png)

## Section Heading

More content here with **bold** and *italic* text.

- Feature 1
- Feature 2
- Feature 3
\`\`\`

## Supported Features

✅ Headings (H1-H6)
✅ Bold, italic, strikethrough
✅ Links (internal & external)
✅ Ordered & unordered lists
✅ Code blocks with syntax
✅ Blockquotes
✅ Images (optimized)
✅ Horizontal rules
✅ Tables (GitHub flavored)
✅ Task lists (GitHub flavored)

## GitHub Flavored Markdown (GFM)

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Task Lists
```markdown
- [x] Completed task
- [ ] Incomplete task
```

---

Happy writing! 🚀

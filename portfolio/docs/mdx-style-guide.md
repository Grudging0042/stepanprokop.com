# MDX Style Guide

Conventions for writing content in `content/{blog,projects,components}` using MDX.

## Table of Contents
- [Common Pitfalls](#common-pitfalls)
- [Frontmatter Templates](#frontmatter-templates)
- [Formatting Rules](#formatting-rules)
- [Code Blocks](#code-blocks)
- [Special Formatting](#special-formatting)
- [Pre-commit Checklist](#pre-commit-checklist)
- [Tooling Tips](#tooling-tips)
- [Resources](#resources)

## Common Pitfalls
- **`<` followed by a number** — MDX treats `<3` or `<24h` as JSX. Use `&lt;` or wrap in backticks.
- **Raw HTML in prose** — wrap HTML tags in backticks (`"Use the `<div>` element"`).
- **Misplaced frontmatter** — frontmatter must be the very first block with no blank lines before `---`.
- **Missing alt text** — every image needs meaningful alt text for accessibility.

## Frontmatter Templates
### Blog Post
```yaml
---
title: "Post Title"
description: "Short SEO-friendly summary"
date: "2024-12-01"
tags:
  - Design Systems
  - UX
author: "Štěpán Prokop"
thumbnail: "/images/blog/example-cover.jpg"
published: true
---
```

### Project Case Study
```yaml
---
title: "Project Name"
description: "One-sentence overview"
client: "Client Name"
year: 2024
role: "Lead Product Designer"
tools:
  - Figma
  - React
industry: "Fintech"
featured: true
carousel:
  - type: "image"
    url: "/images/projects/project/hero.jpg"
    alt: "Hero shot"
  - type: "video"
    url: "/videos/projects/project/demo.mp4"
    poster: "/images/projects/project/poster.jpg"
    alt: "Demo walkthrough"
---
```

### Component Documentation
```yaml
---
title: "Component Name"
description: "What the component does"
type: "react"
previewType: "interactive"
complexity: "intermediate"
tags:
  - UI Components
previewImage: "/images/components/example.jpg"
previewAlt: "Component preview"
---
```

## Formatting Rules
- Use `##` for top-level headings within the document (the MDX renderer supplies `<h1>`).
- Bold `**text**`, italic `*text*`, and inline code `` `code` ``.
- Ordered/unordered lists follow standard Markdown.
- Internal links use relative URLs (`[Projects](/projects)`); external links get Markdown syntax (`[Next.js](https://nextjs.org)`).
- Images use absolute paths from `public/` and always include `alt` text: `![Analytics dashboard](/images/projects/example/overview.jpg)`.

## Code Blocks
- Inline code for short snippets: ``Use `const` instead of `var`.``
- Fenced blocks specify a language: 
  ````md
  ```tsx
  export function Example() {
    return <Component />;
  }
  ```
  ````
- Feel free to annotate good/bad examples with comments.

## Special Formatting
- Blockquotes: `> “Design is how it works.” — Steve Jobs`
- Horizontal rule: `---` (blank line before and after).
- Tables and checklists follow GitHub-flavoured Markdown.

## Pre-commit Checklist
- Frontmatter appears first (no blank line before `---`).
- Replace `<` + number with `&lt;`.
- No raw HTML in body text.
- Every image/video includes alt/poster metadata.
- Code fences declare a language.
- External links don’t rely on raw HTML anchors.

## Tooling Tips
- Format with Prettier: `npx prettier --write "content/**/*.mdx"`.
- Lint with Remark: `npx remark content/ --ext .mdx`.
- VS Code/Cursor: enable format-on-save for MDX and use an MDX syntax plugin.

## Resources
- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [HTML Entity Reference](https://html.spec.whatwg.org/multipage/named-characters.html)

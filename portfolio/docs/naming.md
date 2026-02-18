# Naming Conventions

File and directory naming guidelines in the portfolio codebase. The current tree roughly follows these conventions; treat this document as both reference and desired standard.

## Table of Contents
- [Global Principles](#global-principles)
- [Directory Naming](#directory-naming)
- [React & Next.js Modules](#react--nextjs-modules)
- [Utilities & Types](#utilities--types)
- [Content & Assets](#content--assets)
- [Tests, Stories, Scripts](#tests-stories-scripts)
- [Allowed Abbreviations](#allowed-abbreviations)
- [Enforcement](#enforcement)

## Global Principles
1. Stay consistent within each category.
2. Use meaningful dictionary words; avoid slang or jokes.
3. Prefer full words. Keep abbreviations to well-known forms (UI, SEO, MDX).
4. Keep filenames concise (3–5 words, max 8).
5. Match filename to the primary export when possible.

## Directory Naming
| Location | Style | Notes |
| --- | --- | --- |
| Feature folders (`app/projects`, `components/showcase`) | lower-kebab-case | Avoid spaces and underscores. |
| Dynamic routes (`app/blog/[slug]`) | `[param]` | Use descriptive parameter names. |
| Asset buckets (`public/images/blog`) | lower-kebab-case | Mirror URL structure. |

Avoid prefixes tied to team names or legacy systems.

## React & Next.js Modules
- Route files follow Next.js defaults: `page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`, `route.ts`.
- Component files use **PascalCase**: `ProjectGallery.tsx`, `ThemeToggle.tsx`, `Button.tsx` (including shared primitives in `components/ui/`).
- Hooks use **camelCase** with `use` prefix: `useTransitionRouter.ts`.
- Barrel files are allowed as `index.ts(x)` inside descriptive folders.
- Do not encode runtime (“client/server”) in filenames—rely on `'use client'` directives.

## Utilities & Types
- Utilities favour **kebab-case**: `content-utils.ts`, `metadata.ts`.
- Types are singular nouns: `types/content.ts`.
- Keep domain-specific helpers near their usage when practical.

## Content & Assets
- MDX files in `content/` follow URL slugs (`fintech-app.mdx`, `esp32-1bit-oled.mdx`).
- Public assets use lowercase kebab-case (`placeholder.webp`, `blog/test.avif`).
- Video poster/thumbnail pairs retain shared stems (`demo.mp4`, `demo-poster.jpg`).

## Tests, Stories, Scripts
- Tests: `ComponentName.test.tsx`.
- Storybook/demos (if added): `ComponentName.stories.tsx`.
- Scripts: kebab-case (`scripts/create-sitemap.ts`).

## Allowed Abbreviations
| Abbreviation | Meaning | Example |
| --- | --- | --- |
| `MDX` | Markdown + JSX | `docs/mdx-style-guide.md` |
| `SEO` | Search Engine Optimisation | `components/seo/JsonLd.tsx` |
| `UI` | User Interface | `components/ui/Button.tsx` |
| `URL`, `JSON`, `HTTP` | Standard protocol names | `parseURL.ts` |

Introduce additional abbreviations only after documenting them here.

## Enforcement
- Apply these conventions to new files immediately.
- When touching existing files that drift from the standard, rename opportunistically and update imports in the same changeset.
- Add a review checklist item (“Filenames match docs/naming.md”). Tooling such as `eslint-plugin-filenames` can help if drift becomes frequent.

# Task List: Portfolio Website

## Current State Assessment

**Existing Infrastructure:** None - This is a fresh project with no existing codebase.

**Starting Point:** We'll be building from scratch using:
- Next.js 14+ with App Router
- Tailwind CSS + Shadcn UI for styling
- MDX/Contentlayer for content management
- Umami for analytics

**Architecture Decisions:**
- Use Next.js App Router for modern React patterns and optimal SEO
- Implement MDX files for content (simplest approach, Git-based, can migrate to headless CMS later)
- Static generation (SSG) for optimal performance
- Narrow, centered grid layout as specified

## Relevant Files

### Configuration Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration with narrow grid and theme colors
- `next.config.js` - Next.js configuration for MDX, images, and optimization
- `postcss.config.js` - PostCSS configuration for Tailwind
- `.env.local` - Environment variables (Umami credentials, etc.)
- `contentlayer.config.ts` - Contentlayer configuration for MDX content

### Core Layout Components
- `app/layout.tsx` - Root layout with theme provider and global styles
- `app/globals.css` - Global styles and Tailwind directives
- `components/layout/Header.tsx` - Global header with navigation and theme toggle
- `components/layout/Footer.tsx` - Global footer with contact info and links
- `components/theme/ThemeProvider.tsx` - Dark/light mode theme provider
- `components/theme/ThemeToggle.tsx` - Theme toggle button component

### Shared Components
- `components/ui/Card.tsx` - Reusable card component (Shadcn)
- `components/ui/Button.tsx` - Button component (Shadcn)
- `components/ui/Badge.tsx` - Badge component for tags (Shadcn)
- `components/carousel/Carousel.tsx` - Carousel component with dot navigation
- `components/carousel/VideoPlayer.tsx` - Auto-play video component
- `components/code/CodeBlock.tsx` - Syntax-highlighted code block component
- `components/filters/FilterBar.tsx` - Reusable filter/sort component

### Projects Section
- `app/projects/page.tsx` - Projects listing page
- `app/projects/[slug]/page.tsx` - Individual project detail page
- `components/projects/ProjectCard.tsx` - Project card with carousel
- `components/projects/ProjectGallery.tsx` - Extended gallery for project pages
- `components/projects/ProjectMeta.tsx` - Project metadata display
- `content/projects/*.mdx` - Individual project MDX files

### Components Section
- `app/components/page.tsx` - Components listing page
- `app/components/[slug]/page.tsx` - Individual component detail page
- `components/showcase/ComponentCard.tsx` - Component card with preview
- `components/showcase/ComponentPreview.tsx` - Interactive component preview wrapper
- `content/components/*.mdx` - Individual component MDX files

### Blog Section
- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Individual blog article page
- `components/blog/BlogCard.tsx` - Blog article card
- `components/blog/ArticleContent.tsx` - Styled article content wrapper
- `content/blog/*.mdx` - Individual blog article MDX files

### Utilities & Helpers
- `lib/content.ts` - Content fetching and filtering utilities
- `lib/analytics.ts` - Umami tracking helper functions
- `lib/utils.ts` - General utility functions (from Shadcn)
- `types/content.ts` - TypeScript types for content schemas

### SEO & Metadata
- `app/sitemap.ts` - Sitemap generation
- `app/robots.ts` - Robots.txt generation
- `lib/metadata.ts` - Helper functions for generating page metadata

### Public Assets
- `public/cv.pdf` - Downloadable CV file
- `public/images/projects/*` - Project images
- `public/images/blog/*` - Blog thumbnails
- `public/videos/projects/*` - Project videos (or external URLs)

### Notes

- All components should be created as client components (`'use client'`) only when needed (for interactivity, theme toggle, etc.)
- Server components should be the default for pages and static content
- MDX content should be validated against schemas to ensure required fields are present
- Use Next.js Image component for all images to ensure optimization
- Follow Shadcn UI patterns for consistent styling across all components

## Tasks

- [x] 1.0 Project Setup & Configuration
  - [x] 1.1 Initialize Next.js 14+ project with TypeScript and App Router using `npx create-next-app@latest`
  - [x] 1.2 Install and configure Tailwind CSS (should be included in create-next-app setup)
  - [x] 1.3 Set up ESLint and Prettier for code quality
  - [x] 1.4 Install core dependencies: `contentlayer`, `next-contentlayer`, `react-intersection-observer`, `embla-carousel-react`
  - [x] 1.5 Create project directory structure: `components/`, `lib/`, `types/`, `content/` (with subdirs: projects, components, blog)
  - [x] 1.6 Initialize Git repository and create initial commit (if not already done)
  - [x] 1.7 Create `.env.local` file with placeholder for Umami credentials

- [x] 2.0 Design System & Core Layout Components
  - [x] 2.1 Install Shadcn UI using `npx shadcn-ui@latest init`
  - [x] 2.2 Install Shadcn components: Button, Card, Badge, Switch (for theme toggle)
  - [x] 2.3 Configure Tailwind for narrow grid system in `tailwind.config.ts` (add custom max-width utilities)
  - [x] 2.4 Create `ThemeProvider.tsx` using `next-themes` for dark/light mode support
  - [x] 2.5 Create `ThemeToggle.tsx` component with sun/moon icons
  - [x] 2.6 Build `Header.tsx` component with logo/name, navigation links (Projects, Components, Blog), "Book a call" CTA button, and theme toggle
  - [x] 2.7 Build `Footer.tsx` component with contact information, external links section (LinkedIn, Layers.to, Rive, Figma, X), Downloads section (CV), and copyright
  - [x] 2.8 Update `app/layout.tsx` to include Header, Footer, and ThemeProvider
  - [x] 2.9 Configure responsive breakpoints and test on mobile, tablet, desktop
  - [x] 2.10 Create base `Card.tsx` component with consistent styling for reuse across sections

- [x] 3.0 Content Infrastructure & MDX Setup
  - [x] 3.1 Install Contentlayer dependencies: `contentlayer`, `next-contentlayer`, and rehype/remark plugins for code highlighting
  - [x] 3.2 Create `contentlayer.config.ts` with document type definitions for Project, Component, and BlogPost
  - [x] 3.3 Configure Next.js to use Contentlayer in `next.config.js` (wrap with `withContentlayer`)
  - [x] 3.4 Define content schemas with required fields: projects (title, description, client, year, role, tools, carousel, images), components (title, description, type, previewType, code), blog (title, description, date, tags, thumbnail)
  - [x] 3.5 Install and configure syntax highlighting: `rehype-pretty-code` or `rehype-prism-plus`
  - [x] 3.6 Create `lib/content.ts` with utility functions for fetching and filtering content
  - [x] 3.7 Set up TypeScript types in `types/content.ts` for type-safe content access
  - [x] 3.8 Create example MDX files (1-2 per content type) to test the setup

- [x] 4.0 Projects Section Implementation
  - [x] 4.1 Create `app/projects/page.tsx` for projects listing with grid layout
  - [x] 4.2 Build `Carousel.tsx` component with dot navigation using `embla-carousel-react`
  - [x] 4.3 Create `VideoPlayer.tsx` component with auto-play when visible using `react-intersection-observer`
  - [x] 4.4 Build `ProjectCard.tsx` component integrating Carousel, video player, headline, and description
  - [x] 4.5 Implement click handler to navigate to individual project pages
  - [x] 4.6 Create `app/projects/[slug]/page.tsx` for dynamic project detail pages
  - [x] 4.7 Build `ProjectMeta.tsx` component to display client, year, role, and tools metadata
  - [x] 4.8 Create `ProjectGallery.tsx` component for extended image/video gallery on detail pages
  - [x] 4.9 Implement `FilterBar.tsx` component for project filtering (by role, tools, industry)
  - [x] 4.10 Add sorting options to FilterBar (newest, oldest, alphabetical)
  - [x] 4.11 Connect filtering/sorting logic to project listing display
  - [x] 4.12 Ensure videos are muted and loop continuously in carousels

- [x] 5.0 Components Section Implementation
  - [x] 5.1 Create `app/components/page.tsx` for components listing with grid layout
  - [x] 5.2 Build `ComponentCard.tsx` with conditional preview rendering (interactive vs static image)
  - [x] 5.3 Create `ComponentPreview.tsx` wrapper that can embed interactive React components
  - [x] 5.4 Implement preview size detection to determine if component should be fully interactive on card
  - [x] 5.5 Create `app/components/[slug]/page.tsx` for dynamic component detail pages
  - [x] 5.6 Build `CodeBlock.tsx` component with syntax highlighting for code snippets
  - [x] 5.7 Add copy-to-clipboard functionality to code blocks
  - [x] 5.8 Implement FilterBar for component filtering (by type, framework, complexity)
  - [x] 5.9 Add sorting options (newest, most popular, alphabetical)
  - [x] 5.10 Configure Umami event tracking in `lib/analytics.ts` with helper function `trackEvent()`
  - [x] 5.11 Add event tracking to interactive component previews (on mount, on interaction)

- [x] 6.0 Blog Section Implementation
  - [x] 6.1 Create `app/blog/page.tsx` for blog listing with grid layout
  - [x] 6.2 Build `BlogCard.tsx` component with thumbnail, headline, excerpt, and tags
  - [x] 6.3 Implement tag filtering UI with clickable tag badges
  - [x] 6.4 Create filter state management for selected tags
  - [x] 6.5 Create `app/blog/[slug]/page.tsx` for dynamic blog article pages
  - [x] 6.6 Build `ArticleContent.tsx` wrapper with styled MDX components (headings, paragraphs, lists, code blocks, images)
  - [x] 6.7 Ensure proper typography and spacing for 500-1000 word articles
  - [x] 6.8 Display article tags at top or bottom of article
  - [x] 6.9 Verify that no comments, social sharing, or related articles are included

- [x] 7.0 Analytics, SEO & Performance Optimization
  - [x] 7.1 Install Umami tracking script by adding script tag to `app/layout.tsx`
  - [x] 7.2 Create `lib/analytics.ts` with wrapper functions for custom event tracking
  - [x] 7.3 Implement page view tracking for project detail pages
  - [x] 7.4 Add custom event tracking for component interactions
  - [x] 7.5 Create `lib/metadata.ts` with helper functions to generate page metadata (title, description, Open Graph)
  - [x] 7.6 Add metadata to all page.tsx files (projects, components, blog, and dynamic routes)
  - [x] 7.7 Create `app/sitemap.ts` to generate XML sitemap dynamically from content
  - [x] 7.8 Create `app/robots.ts` for robots.txt
  - [x] 7.9 Add structured data (JSON-LD) for Person schema to homepage and about
  - [x] 7.10 Configure Next.js Image component optimization in `next.config.js`
  - [x] 7.11 Implement lazy loading for images and videos below the fold
  - [x] 7.12 Ensure proper heading hierarchy (single h1 per page, proper h2/h3 nesting)
  - [x] 7.13 Add alt text validation to content schema
  - [x] 7.14 Run Lighthouse audit and address any performance issues

- [ ] 8.0 Testing & Deployment Setup
  - [x] 8.1 Create example content: 3 projects, 3 components, 3 blog articles with realistic data
  - [x] 8.2 Add placeholder images and videos (or use example URLs)
  - [x] 8.3 Test responsive design on mobile (320px), tablet (768px), and desktop (1024px+) - Testing guide created
  - [x] 8.4 Verify theme switching persists across page navigation and browser sessions - Testing guide created
  - [x] 8.5 Test all internal navigation links (header, footer, cards) - Testing guide created
  - [x] 8.6 Test external links open in new tab with proper security attributes - Testing guide created
  - [x] 8.7 Add CV file (`cv.pdf`) to `public/` directory - Placeholder added, needs actual CV
  - [x] 8.8 Configure deployment on Vercel (or preferred platform) - Deployed to Coolify at portfolio.ui-lab.cz
  - [x] 8.9 Set up environment variables in deployment platform (Umami URL and Site ID) - Already configured
  - [ ] 8.10 Verify analytics tracking works in production - Needs manual verification
  - [ ] 8.11 Test filtering and sorting on all sections - Needs manual testing
  - [ ] 8.12 Run accessibility audit using axe DevTools or Lighthouse (ensure WCAG 2.1 AA compliance) - LIGHTHOUSE.md created
  - [ ] 8.13 Perform final QA pass on all pages and functionality - Use TESTING.md checklist

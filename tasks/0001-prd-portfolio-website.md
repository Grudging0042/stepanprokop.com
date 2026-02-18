# Portfolio Website PRD

## 1. Introduction/Overview

This PRD outlines the requirements for building a modern, professional portfolio website for Štěpán Prokop, a product designer. The portfolio will showcase design projects, interactive components, and blog articles to attract potential clients and recruiters. The website aims to demonstrate design expertise, technical capabilities, and thought leadership while maintaining a clean, performant user experience.

**Problem it solves:** Creates a centralized, professional platform to showcase work, attract opportunities, and establish credibility in the design community.

**Goal:** Build a complete portfolio website with three main content sections (Projects, Components, Blog), optimized for SEO and visitor engagement.

## 2. Goals

1. **Generate Opportunities:** Attract freelance clients and full-time job opportunities through compelling project showcases
2. **Demonstrate Expertise:** Showcase design skills through projects, interactive components, and thought-leadership articles
3. **Optimize for Discovery:** Achieve high search engine rankings to increase visibility
4. **Track Engagement:** Monitor visitor behavior through Umami analytics to understand what resonates
5. **Maintain Quality:** Create a polished, professional presentation that reflects design standards

## 3. User Stories

### Primary Audience: Recruiters/Hiring Managers
- As a recruiter, I want to quickly browse project thumbnails so I can assess the designer's style and quality
- As a hiring manager, I want to read full case studies so I can understand the designer's problem-solving approach
- As a recruiter, I want to see role and tools information so I can verify relevant skills
- As a hiring manager, I want to easily contact the designer so I can schedule an interview

### Primary Audience: Potential Clients
- As a potential client, I want to view previous work so I can evaluate if the designer fits my needs
- As a client, I want to see interactive components so I can understand technical capabilities
- As a client, I want to find contact information easily so I can inquire about availability
- As a business owner, I want to book a call directly so I can discuss my project

### Secondary Audience: Design Community
- As a fellow designer, I want to read blog articles so I can learn from shared experiences
- As a designer, I want to interact with live prototypes so I can understand implementation approaches
- As a developer, I want to see code snippets so I can understand how components work

## 4. Functional Requirements

### 4.1 Global Navigation & Layout

#### Header
1. The header must display "Štěpán Prokop" as the site name/logo
2. The header must include navigation links: Projects, Components, Blog
3. The header must include a "Book a call" CTA button
4. The header must include a dark/light mode theme toggle
5. The header must remain accessible on all pages
6. The header must be responsive on mobile devices

#### Footer
7. The footer must display contact information:
   - Email: me@stepanprokop.com
   - Phone: +420 731 077 769
   - Location: "Prague, Czechia ↗" (with external link indicator)
8. The footer must include external links section titled "Links" with:
   - LinkedIn ↗
   - Layers.to ↗
   - Rive ↗
   - Figma ↗
   - X ↗
9. The footer must include "Downloads" section with:
   - CV ↗ (downloadable file)
10. The footer must display "Copyright © 2025"
11. The footer must be responsive on mobile devices

### 4.2 Projects Section

#### Projects Listing Page
12. The system must display all projects as a grid of cards on the main Projects page
13. Each project card must include:
    - Carousel with 4 pictures/videos
    - Project headline
    - Project description (brief summary)
14. The carousel must use dot navigation for manual control
15. Video items in the carousel must auto-play when visible in the viewport
16. Videos must be muted and loop continuously
17. The system must support filtering projects (filter criteria to be determined during implementation)
18. The system must support sorting projects (sort options to be determined during implementation)
19. Each project card must be clickable and navigate to the individual project page

#### Individual Project Pages
20. Each project must have a dedicated page with a unique URL
21. The project page must display:
    - Full project case study including problem, solution, and outcome
    - Extended image and video gallery (more than the 4 carousel items)
    - Project metadata: client name, year, role, tools used
22. The project page content must be stored in a simple CMS or markdown format
23. The project page must maintain consistent styling with the global design system

### 4.3 Components Section

#### Components Listing Page
24. The system must display all components as a grid of cards on the main Components page
25. Each component card must include:
    - Live prototype preview OR static image (configurable per component)
    - Component headline
    - Component description
26. For interactive React components, the preview must be fully interactive on the listing page IF the component fits within the card frame
27. For larger components, the card should show a limited preview with full interaction on the component's dedicated page
28. The system must support filtering components (filter criteria to be determined during implementation)
29. The system must support sorting components (sort options to be determined during implementation)
30. Each component card must be clickable and navigate to the individual component page (if applicable)

#### Individual Component Pages
31. Components that require more space or detailed explanation must have dedicated pages with unique URLs
32. The component page must display:
    - Full-size, fully interactive prototype
    - Component headline and detailed description
    - Code snippets showing implementation
33. Interactive prototypes must support Umami event tracking for user interactions
34. Code snippets must use syntax highlighting
35. The component page content must be stored in a simple CMS or markdown format

### 4.4 Blog Section

#### Blog Listing Page
36. The system must display all blog articles as a grid of cards on the main Blog page
37. Each blog article card must include:
    - Article thumbnail image
    - Article headline
    - Brief summary/excerpt
38. The system must support filtering articles by tags/categories
39. Tags/categories must be visible on each article card
40. Each article card must be clickable and navigate to the full article page

#### Individual Blog Article Pages
41. Each article must have a dedicated page with a unique URL
42. Article content must support rich text formatting (headings, bold, italic, lists, images, code blocks)
43. Articles should target 500-1000 words in length
44. The article page must display relevant tags/categories
45. The article page must NOT include comments, social sharing buttons, or related articles
46. Article content must be stored in a simple CMS or markdown format

### 4.5 Content Management

47. The system must integrate a simple CMS for content updates
48. The CMS must allow editing of:
    - Project content (case studies, images, metadata)
    - Component content (descriptions, code snippets)
    - Blog articles (full text, tags, thumbnails)
49. The CMS must support markdown or rich text editing
50. The CMS must allow image uploads and management
51. Content updates must be deployable without requiring code changes

### 4.6 Design System

52. The system must use Shadcn UI component library
53. The system must implement a narrow grid layout system
54. The system must support dark and light theme modes
55. Theme preference must persist across sessions
56. All components must be styled consistently using the design system
57. The design must be fully responsive across desktop, tablet, and mobile devices

### 4.7 Analytics & Tracking

58. The system must integrate Umami analytics
59. Umami must track:
    - Overall site traffic
    - Time spent on individual project pages
    - Individual project view counts
    - Component interaction events (custom events)
60. Analytics implementation must be ready for deployment with Umami credentials
61. Analytics must not require cookie consent (privacy-friendly)

### 4.8 Performance & SEO

62. The system must be optimized for search engines with:
    - Semantic HTML structure
    - Meta tags for each page (title, description, Open Graph)
    - Proper heading hierarchy (h1, h2, h3)
    - Alt text for all images
    - XML sitemap
63. The system must achieve good Core Web Vitals scores
64. Images must be optimized and served in modern formats (WebP, AVIF)
65. The system must support lazy loading for images and videos

## 5. Non-Goals (Out of Scope)

1. **Social Features:** No social media sharing buttons, like buttons, or social feeds
2. **User Comments:** No commenting system on blog articles or projects
3. **Related Content:** No "related articles" or "related projects" sections
4. **Newsletter:** No newsletter signup or email list management
5. **Contact Forms:** No contact form (users will use provided email/phone or "Book a call" CTA)
6. **Reading Estimates:** No reading time calculations for blog articles
7. **Multi-language Support:** English only (no internationalization)
8. **User Accounts:** No user registration, login, or profiles
9. **Real-time Features:** No live chat, real-time notifications, or collaborative features
10. **Search Functionality:** No on-site search (rely on browser find and SEO)

## 6. Design Considerations

### UI/UX Requirements
- **Design System:** Use Shadcn UI for consistent, accessible components
- **Grid System:** Implement a narrow, centered grid for content (not full-width)
- **Typography:** Clean, readable typography suitable for professional portfolio
- **Color Scheme:** Support both light and dark themes with smooth transitions
- **Spacing:** Generous whitespace for a clean, uncluttered appearance
- **Interactions:** Subtle animations and transitions for professional polish
- **Accessibility:** WCAG 2.1 AA compliance for colors, keyboard navigation, screen readers

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Visual Hierarchy
- Clear distinction between different content sections
- Prominent CTAs ("Book a call" in header)
- Easy-to-scan project and component grids
- Consistent card designs across all sections

## 7. Technical Considerations

### Recommended Tech Stack
- **Framework:** Next.js 14+ (App Router) - Excellent for SEO, performance, and developer experience
- **Styling:** Tailwind CSS + Shadcn UI
- **Content Management:** Recommend one of:
  - **Contentlayer** - Type-safe markdown/MDX with excellent Next.js integration
  - **Sanity** - Flexible headless CMS with real-time preview
  - **Tina CMS** - Git-based CMS with visual editing
  - **Simple MDX files** - For maximum simplicity and Git-based workflow
- **Analytics:** Umami (self-hosted or cloud)
- **Hosting:** Vercel (recommended) or similar serverless platform
- **Image Optimization:** Next.js Image component with proper sizing
- **Video Hosting:** Consider external hosting (Vimeo, YouTube) or CDN for large files

### Architecture Considerations
- Static generation (SSG) for blog articles and project pages for optimal performance
- Incremental Static Regeneration (ISR) if using a headless CMS
- Server-side rendering (SSR) only where dynamic content is required
- Code splitting and lazy loading for interactive components
- API routes for any server-side logic (e.g., CMS webhooks)

### Dependencies
- React 18+
- Next.js 14+
- Tailwind CSS 3+
- Shadcn UI components
- Umami tracking script
- Syntax highlighter for code snippets (e.g., Prism.js or Shiki)
- Video player component with autoplay capabilities

## 8. Success Metrics

### Primary Metrics (Tracked via Umami)
1. **SEO Performance:**
   - Organic search traffic growth month-over-month
   - Ranking for target keywords (designer portfolio, product designer Prague, etc.)
   - Click-through rate from search results

2. **Engagement Metrics:**
   - Average time spent on project pages (target: >2 minutes)
   - Individual project view counts
   - Pages per session (target: >3 pages)

3. **Conversion Metrics:**
   - "Book a call" CTA click-through rate
   - Email/phone contact link clicks
   - CV download count

4. **Technical Metrics:**
   - Core Web Vitals scores (LCP, FID, CLS)
   - Page load time (target: <2 seconds)
   - Mobile vs. desktop traffic ratio

### Component-Specific Metrics
5. **Prototype Interactions:**
   - Custom events tracked for each interactive component
   - Engagement rate per component type
   - Most popular components by interaction count

### Secondary Metrics
6. **Content Performance:**
   - Most viewed projects
   - Most read blog articles
   - Blog tag popularity

### Success Targets (3 months post-launch)
- 500+ monthly visitors
- 3+ minutes average time on project pages
- 10+ "Book a call" CTA clicks per month
- Top 3 Google ranking for "[name] product designer"

## 9. Open Questions

### CMS Selection
**Q:** Which CMS should we implement?
**Options:**
- A. Contentlayer (simplest, Git-based, type-safe)
- B. Sanity (most flexible, requires external service)
- C. Tina CMS (visual editing, Git-based)
- D. Plain MDX files (maximum simplicity)

**Recommendation:** Start with Contentlayer or plain MDX files for simplicity. Can migrate to Sanity later if more advanced features are needed.

### Component Implementation
**Q:** Should we build interactive components from scratch or import existing ones?
**Decision:** To be determined during implementation based on complexity and reusability

### Filtering Criteria
**Q:** What specific filter options should be available for Projects and Components?
**Suggestions:**
- Projects: Industry (e.g., SaaS, E-commerce, Healthcare), Role (UX, UI, Full Design), Tools Used
- Components: Type (Button, Form, Navigation, etc.), Framework (React, Vue, etc.), Complexity (Simple, Medium, Complex)

### Video Hosting
**Q:** Should videos be self-hosted or use external services?
**Recommendation:** Use external hosting (Vimeo or CDN) for better performance and bandwidth management

### Theme Default
**Q:** Should the site default to light or dark mode?
**Recommendation:** Detect system preference and remember user choice

### Book a Call Integration
**Q:** What service should "Book a call" use?
**Recommendation:** Calendly, Cal.com, or similar scheduling tool integration

---

**Document Version:** 1.0
**Last Updated:** 2025-10-29
**Status:** Ready for Task Generation

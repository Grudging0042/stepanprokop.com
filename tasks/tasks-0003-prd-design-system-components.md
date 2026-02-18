# Task List: Design System Components & Homepage Redesign

**Based on PRD**: `0003-prd-design-system-components.md`  
**Created**: February 17, 2026  
**Status**: Not Started

---

## Relevant Files

### New Components to Create
- `portfolio/components/cards/PortfolioCard.tsx` - New card component for portfolio projects (Work variant from Figma)
- `portfolio/components/cards/ComponentCard.tsx` - New card component for UI components showcase (Components variant)
- `portfolio/components/cards/BlogCard.tsx` - New card component for blog post previews (Variantblog)
- `portfolio/components/hero/Hero.tsx` - Hero section component with avatar, headline, and introduction
- `portfolio/components/hero/HeroQuickLinks.tsx` - Quick action buttons (Book a Call, Download CV, Say Hi)
- `portfolio/components/ui/Avatar.tsx` - Avatar component for profile image display
- `portfolio/components/ui/Skeleton.tsx` - Skeleton loader component for loading states (already exists, may need updates)
- `portfolio/components/mdx/MDXComponents.tsx` - MDX component styling for blog typography

### Components to Update
- `portfolio/components/layout/Footer.tsx` - Update with newsletter subscription section and email validation
- `portfolio/components/layout/Header.tsx` - Update navigation (remove subpage links, keep theme toggle)
- `portfolio/components/ui/Button.tsx` - Verify all variants exist (text, outline, icon, icon-transparent), add loading/disabled states if missing

### Pages to Update/Create
- `portfolio/app/page.tsx` - Complete homepage redesign with all sections (Hero, Portfolio, Components, Blog, Footer)
- `portfolio/app/projects/page.tsx` - Remove or redirect to homepage (keep detail pages)
- `portfolio/app/components/page.tsx` - Remove or redirect to homepage (keep detail pages)
- `portfolio/app/blog/page.tsx` - Remove or redirect to homepage (keep detail pages)

### Type Definitions to Update
- `portfolio/types/content.ts` - Simplify interfaces to match new card requirements (thumbnail, icon, headline, date only)

### Data/Content Files
- `portfolio/lib/data/projects.ts` - Create static data array for portfolio projects (NEW)
- `portfolio/lib/data/components.ts` - Create static data array for components showcase (NEW)
- `portfolio/lib/data/blog.ts` - Create static data array for blog posts (NEW)

### Styling Files
- `portfolio/app/globals.css` - Add MDX typography styles for blog content
- `portfolio/styles/mdx.css` - Create dedicated MDX styles file (NEW, optional)

### Notes
- All existing detail pages (`/projects/[slug]`, `/components/[slug]`, `/blog/[slug]`) remain unchanged
- Design tokens from `styles/tokens.css` and `DESIGN_TOKENS.md` should be used throughout
- Content structure in `content/` directory remains but frontmatter may need updates to match simplified card data
- Skeleton component already exists but may need updates for card-specific skeletons

---

## Tasks

- [x] 1.0 Update Content Type Definitions and Create Data Files
  - [x] 1.1 Update `portfolio/types/content.ts` to add simplified card data interfaces (PortfolioCard, ComponentCard, BlogCard with thumbnail, icon, headline, date fields)
  - [x] 1.2 Create `portfolio/lib/data/projects.ts` with static array of portfolio projects matching the PortfolioCard interface
  - [x] 1.3 Create `portfolio/lib/data/components.ts` with static array of components matching the ComponentCard interface
  - [x] 1.4 Create `portfolio/lib/data/blog.ts` with static array of blog posts matching the BlogCard interface
  - [x] 1.5 Add sample data for at least 3 projects, 2 components, and 2 blog posts based on reference site content
  - [x] 1.6 Export helper functions to get all items and get item by slug from each data file

- [x] 2.0 Build Core Card Components
  - [x] 2.1 Create `portfolio/components/cards/PortfolioCard.tsx` component
    - [x] 2.1.1 Accept props: thumbnail, icon, headline, date, slug, className
    - [x] 2.1.2 Implement 210x210px thumbnail with border and rounded corners using `--radius-xxl` token
    - [x] 2.1.3 Add icon overlay (24x24px) positioned on thumbnail
    - [x] 2.1.4 Display headline using `text-body-2` typography class
    - [x] 2.1.5 Display date using `text-body-code-4` typography class with Fira Code font
    - [x] 2.1.6 Make card clickable with Next.js Link to `/projects/[slug]`
    - [x] 2.1.7 Implement hover effects (scale 1.02x, enhanced shadow using design tokens)
    - [x] 2.1.8 Use Next.js Image component with `priority={false}` and `loading="lazy"`
    - [x] 2.1.9 Add proper TypeScript types and JSDoc comments
  - [x] 2.2 Create `portfolio/components/cards/ComponentCard.tsx` component
    - [x] 2.2.1 Accept props: thumbnail, headline, description, date, slug, className
    - [x] 2.2.2 Implement 320x240px thumbnail (aspect ratio 4:3) with border and rounded corners
    - [x] 2.2.3 Add icon button overlay in top-right corner (36x36px, icon-transparent variant)
    - [x] 2.2.4 Display headline using `text-body-2` typography
    - [x] 2.2.5 Display description using `text-body-2` with secondary color (`--text-positive-secondary`)
    - [x] 2.2.6 Display date using `text-body-code-4` typography
    - [x] 2.2.7 Make card clickable with Link to `/components/[slug]`
    - [x] 2.2.8 Implement same hover effects as PortfolioCard
    - [x] 2.2.9 Add TypeScript types and JSDoc comments
  - [x] 2.3 Create `portfolio/components/cards/BlogCard.tsx` component
    - [x] 2.3.1 Accept props: thumbnail, headline, description, date, slug, className
    - [x] 2.3.2 Implement 250x140px thumbnail (aspect ratio ~16:9) with border and rounded corners
    - [x] 2.3.3 Display headline using `text-body-2` typography
    - [x] 2.3.4 Display description using `text-body-2` with secondary color
    - [x] 2.3.5 Display date using `text-body-code-4` typography
    - [x] 2.3.6 Make card clickable with Link to `/blog/[slug]`
    - [x] 2.3.7 Implement same hover effects
    - [x] 2.3.8 Add TypeScript types and JSDoc comments
  - [x] 2.4 Test all three card components render correctly in both day and night themes
  - [x] 2.5 Verify hover effects work and transitions are smooth (200ms)
  - [x] 2.6 Ensure images load properly with Next.js Image optimization

- [x] 3.0 Build Hero Section and Supporting Components
  - [x] 3.1 Create `portfolio/components/ui/Avatar.tsx` component
    - [x] 3.1.1 Accept props: src, alt, size (default 100px), className
    - [x] 3.1.2 Render circular image with 1000px border-radius
    - [x] 3.1.3 Add border outline using `--avatar-outline` token (10% opacity)
    - [x] 3.1.4 Use Next.js Image component with proper sizing
    - [x] 3.1.5 Add TypeScript types and JSDoc comments
  - [x] 3.2 Create `portfolio/components/hero/HeroQuickLinks.tsx` component
    - [x] 3.2.1 Create "Book a Call" button that opens a modal (placeholder implementation)
    - [x] 3.2.2 Create "Download CV" button that links to `https://cloud.stepanprokop.com/s/stepanprokop-cv` (opens in new tab)
    - [x] 3.2.3 Create "Say Hi" button that opens email client with `mailto:me@stepanprokop.com`
    - [x] 3.2.4 Use Button component with appropriate variants
    - [x] 3.2.5 Arrange buttons in horizontal layout (stack on mobile)
    - [x] 3.2.6 Add TypeScript types
  - [x] 3.3 Create `portfolio/components/hero/Hero.tsx` component
    - [x] 3.3.1 Accept props: avatar, name, role, introduction, className
    - [x] 3.3.2 Display Avatar component (large size, e.g., 100px-120px)
    - [x] 3.3.3 Display name using `text-headline-1` typography
    - [x] 3.3.4 Display role/title using `text-headline-2` or `text-body-1`
    - [x] 3.3.5 Display introduction paragraph using `text-body-2`
    - [x] 3.3.6 Include HeroQuickLinks component
    - [x] 3.3.7 Center content with max-width constraint (692px)
    - [x] 3.3.8 Implement responsive layout (vertical stack on mobile, adjust spacing)
    - [x] 3.3.9 NO animations or transitions (static content only)
    - [x] 3.3.10 Add TypeScript types and JSDoc comments
  - [x] 3.4 Create basic modal placeholder for "Book a Call" (can be simple alert for now)
  - [x] 3.5 Test Hero section renders correctly with all elements
  - [x] 3.6 Verify quick links work (email opens, CV link opens in new tab, modal triggers)

- [x] 4.0 Update Layout Components (Footer, Header, Button)
  - [x] 4.1 Update `portfolio/components/ui/Button.tsx`
    - [x] 4.1.1 Verify all variants exist: text (default), outline, icon, icon-transparent
    - [x] 4.1.2 Add loading state with spinner icon if missing
    - [x] 4.1.3 Add disabled state with reduced opacity and no pointer events
    - [x] 4.1.4 Ensure icon positioning works (left, right, icon-only)
    - [x] 4.1.5 Verify all design tokens are used correctly
    - [x] 4.1.6 Test all variants in both themes
  - [x] 4.2 Update `portfolio/components/layout/Footer.tsx`
    - [x] 4.2.1 Replace existing content with newsletter subscription section
    - [x] 4.2.2 Add heading "Get the Latest Updates" using `text-headline-3`
    - [x] 4.2.3 Add description text using `text-body-2` with secondary color
    - [x] 4.2.4 Create email input field with placeholder "Enter your email"
    - [x] 4.2.5 Add Subscribe button with icon using Button component
    - [x] 4.2.6 Implement email validation (required, valid format RFC 5322)
    - [x] 4.2.7 Add visual error states with aria-invalid/data-invalid attributes
    - [x] 4.2.8 Style with negative theme colors (dark bg in light mode)
    - [x] 4.2.9 Set max-width to 732px, full width container
    - [x] 4.2.10 Add spacing between input and button (`--spacing-md`)
    - [x] 4.2.11 MVP: No backend connection, just validation and UI feedback
  - [x] 4.3 Update `portfolio/components/layout/Header.tsx`
    - [x] 4.3.1 Remove navigation links to subpages (/projects, /components, /blog)
    - [x] 4.3.2 Keep logo/name that links to homepage top
    - [x] 4.3.3 Keep theme toggle button
    - [x] 4.3.4 Optionally add "Book a Call" CTA button
    - [x] 4.3.5 Verify sticky positioning and backdrop blur still work
    - [x] 4.3.6 Test responsive behavior
  - [x] 4.4 Test all layout components in both themes
  - [x] 4.5 Verify email validation works with proper error messages

- [x] 5.0 Implement MDX Typography Styling
  - [x] 5.1 Create `portfolio/components/mdx/MDXComponents.tsx`
    - [x] 5.1.1 Define styles for H1 (headline-1), H2 (headline-2), H3 (headline-3), H4-H6
    - [x] 5.1.2 Define styles for paragraphs (body-2)
    - [x] 5.1.3 Define styles for lists (ul, ol, li)
    - [x] 5.1.4 Define styles for blockquotes with left border and padding
    - [x] 5.1.5 Define styles for code blocks using body-code-4 and Fira Code font
    - [x] 5.1.6 Define styles for inline code with background and padding
    - [x] 5.1.7 Define styles for links with hover states
    - [x] 5.1.8 Define styles for images (responsive, with optional captions)
    - [x] 5.1.9 Define styles for tables if needed
    - [x] 5.1.10 Apply proper spacing between elements using design tokens
  - [x] 5.2 Alternatively, add MDX styles to `portfolio/app/globals.css` under `.mdx-content` class
  - [x] 5.3 Apply syntax highlighting for code blocks (use existing CodeBlock component if available)
  - [x] 5.4 Test MDX rendering with sample blog post content
  - [x] 5.5 Verify typography hierarchy matches Figma design
  - [x] 5.6 Test in both day and night themes

- [x] 6.0 Build New Homepage with All Sections
  - [x] 6.1 Update `portfolio/app/page.tsx` - Clear existing placeholder content
  - [x] 6.2 Implement Hero section
    - [x] 6.2.1 Import and render Hero component at top
    - [x] 6.2.2 Pass static content (name, role, introduction text)
    - [x] 6.2.3 Use actual avatar image from `/public`
  - [x] 6.3 Implement Portfolio Projects section
    - [x] 6.3.1 Add section heading "Projects" using `text-headline-2`
    - [x] 6.3.2 Import project data from `lib/data/projects.ts`
    - [x] 6.3.3 Create responsive grid: 2 columns desktop, 1 column mobile
    - [x] 6.3.4 Map through projects and render PortfolioCard for each
    - [x] 6.3.5 Set grid gap to `--spacing-xl` (24px desktop, 16px mobile)
  - [x] 6.4 Implement Components section
    - [x] 6.4.1 Add section heading "Components" using `text-headline-2`
    - [x] 6.4.2 Import component data from `lib/data/components.ts`
    - [x] 6.4.3 Create responsive grid: 3 columns desktop, 2 columns tablet, 1 column mobile
    - [x] 6.4.4 Map through components and render ComponentCard for each
    - [x] 6.4.5 Set grid gap to `--spacing-xl`
  - [x] 6.5 Implement Blog Posts section
    - [x] 6.5.1 Add section heading "Blog" using `text-headline-2`
    - [x] 6.5.2 Import blog data from `lib/data/blog.ts`
    - [x] 6.5.3 Create responsive grid: 2 columns desktop, 1 column mobile
    - [x] 6.5.4 Map through blog posts and render BlogCard for each
    - [x] 6.5.5 Set grid gap to `--spacing-xl`
  - [x] 6.6 Add Footer component at bottom
  - [x] 6.7 Add proper spacing between sections (Hero, Portfolio, Components, Blog, Footer)
  - [x] 6.8 Implement container with max-width constraint (692px) for content
  - [x] 6.9 Add horizontal padding (16px) for mobile
  - [x] 6.10 Update page metadata (title, description)
  - [x] 6.11 Test full homepage layout on desktop and mobile
  - [x] 6.12 Verify all sections render with correct spacing

- [x] 7.0 Add Loading States and Performance Optimizations
  - [x] 7.1 Update or create skeleton loaders for each card type
    - [x] 7.1.1 Create PortfolioCardSkeleton matching PortfolioCard dimensions
    - [x] 7.1.2 Create ComponentCardSkeleton matching ComponentCard dimensions
    - [x] 7.1.3 Create BlogCardSkeleton matching BlogCard dimensions
    - [x] 7.1.4 Use existing Skeleton component from `components/ui/Skeleton.tsx`
  - [x] 7.2 Add React Suspense boundaries around each content section
  - [x] 7.3 Configure Next.js Image component properly
    - [x] 7.3.1 Add `priority={true}` for hero avatar image (above fold)
    - [x] 7.3.2 Add `loading="lazy"` for all card images (below fold)
    - [x] 7.3.3 Add proper `sizes` attribute for responsive images
    - [x] 7.3.4 Verify images are in `/public` directory or using external URLs
  - [x] 7.4 Add skeleton loaders to homepage while data loads (if using async data fetching)
  - [x] 7.5 Test loading states display correctly
  - [x] 7.6 Run Lighthouse performance audit (target: Performance > 90)
  - [x] 7.7 Verify no layout shifts during loading (CLS < 0.1)

- [ ] 8.0 Testing, Accessibility, and Visual QA
  - [ ] 8.1 Component Testing
    - [ ] 8.1.1 Test PortfolioCard in both themes, verify hover effects
    - [ ] 8.1.2 Test ComponentCard in both themes, verify button overlay works
    - [ ] 8.1.3 Test BlogCard in both themes, verify all content displays
    - [ ] 8.1.4 Test Avatar component with different sizes
    - [ ] 8.1.5 Test Hero section with all quick links
    - [ ] 8.1.6 Test Footer newsletter validation (empty, invalid email)
    - [ ] 8.1.7 Test Header navigation (logo link, theme toggle)
    - [ ] 8.1.8 Test Button component all variants and states
  - [ ] 8.2 Responsive Testing
    - [ ] 8.2.1 Test homepage at 375px width (iPhone SE)
    - [ ] 8.2.2 Test homepage at 768px width (iPad)
    - [ ] 8.2.3 Test homepage at 1024px width (desktop)
    - [ ] 8.2.4 Test homepage at 1440px width (large desktop)
    - [ ] 8.2.5 Verify grid columns collapse correctly on each breakpoint
    - [ ] 8.2.6 Verify typography scales correctly (headline-1, headline-2)
    - [ ] 8.2.7 Verify spacing adjusts correctly (spacing-xl)
    - [ ] 8.2.8 Verify no horizontal scrolling at any breakpoint
  - [ ] 8.3 Theme Testing
    - [ ] 8.3.1 Toggle theme multiple times, verify smooth transitions
    - [ ] 8.3.2 Verify all components adapt colors correctly
    - [ ] 8.3.3 Test in Chrome, Safari, Firefox
    - [ ] 8.3.4 Verify theme preference persists after reload
  - [ ] 8.4 Accessibility Testing
    - [ ] 8.4.1 Run axe DevTools audit (target: 0 violations)
    - [ ] 8.4.2 Run Lighthouse Accessibility audit (target: score 100)
    - [ ] 8.4.3 Test keyboard navigation (Tab through all interactive elements)
    - [ ] 8.4.4 Test card links with Enter key
    - [ ] 8.4.5 Test form validation with keyboard only
    - [ ] 8.4.6 Verify focus indicators visible on all interactive elements
    - [ ] 8.4.7 Check color contrast ratios with WebAIM tool (target: 4.5:1)
    - [ ] 8.4.8 Verify all images have proper alt text
    - [ ] 8.4.9 Verify form errors have aria-invalid and associated labels
    - [ ] 8.4.10 Test with screen reader (VoiceOver or NVDA)
  - [ ] 8.5 Visual QA against Figma
    - [ ] 8.5.1 Compare PortfolioCard with Figma Work variant (node 5:326)
    - [ ] 8.5.2 Compare ComponentCard with Figma Components variant (node 5:326)
    - [ ] 8.5.3 Compare BlogCard with Figma Variantblog (node 5:326)
    - [ ] 8.5.4 Compare Footer with Figma design (node 70:6454)
    - [ ] 8.5.5 Compare Avatar with Figma design (node 5:234)
    - [ ] 8.5.6 Compare Hero with Figma design (node 0:4)
    - [ ] 8.5.7 Compare desktop homepage layout with Figma (node 0:4)
    - [ ] 8.5.8 Compare mobile homepage layout with Figma (node 5:15)
    - [ ] 8.5.9 Verify all spacing, typography, colors match design tokens
    - [ ] 8.5.10 Document any intentional deviations
  - [ ] 8.6 Cross-browser Testing
    - [ ] 8.6.1 Test in Chrome (latest)
    - [ ] 8.6.2 Test in Safari (latest)
    - [ ] 8.6.3 Test in Firefox (latest)
    - [ ] 8.6.4 Test in Edge (latest)
    - [ ] 8.6.5 Test in Mobile Safari (iOS)
    - [ ] 8.6.6 Test in Chrome Android
  - [ ] 8.7 Performance Testing
    - [ ] 8.7.1 Run Lighthouse Performance audit
    - [ ] 8.7.2 Verify FCP < 1.5s, LCP < 2.5s, TTI < 3.5s, CLS < 0.1
    - [ ] 8.7.3 Test on throttled 4G connection
    - [ ] 8.7.4 Verify images lazy load below fold
    - [ ] 8.7.5 Check network tab for optimized images
  - [ ] 8.8 Final Review
    - [ ] 8.8.1 All functional requirements from PRD completed
    - [ ] 8.8.2 All components use design tokens consistently
    - [ ] 8.8.3 No console errors in browser
    - [ ] 8.8.4 TypeScript compilation succeeds with no errors
    - [ ] 8.8.5 Documentation updated (if needed)
    - [ ] 8.8.6 Ready for deployment

---

## Implementation Notes

### Key Dependencies
- Existing design token system (`styles/tokens.css`)
- Existing typography utilities (`lib/utils/typography.ts`)
- Existing theme provider (`next-themes`)
- Existing content infrastructure (`lib/content.ts`)
- Next.js Image component for optimization

### Architecture Decisions
1. **Content Strategy**: Create simplified data files (`lib/data/*.ts`) for card display, keeping existing MDX content for detail pages
2. **Component Organization**: New `cards/` and `hero/` directories for better organization
3. **Responsive Approach**: Use Tailwind responsive classes with design token CSS variables
4. **Theme Support**: All components use CSS variables that switch via `.dark` class
5. **Performance**: Lazy loading images below fold, skeleton loaders during load, Next.js Image optimization

### Breaking Changes
- Subpages (`/projects`, `/components`, `/blog`) will be removed/redirected to homepage
- Content type interfaces simplified (breaking change for existing card components)
- Navigation structure changes in Header

---

## Current State Assessment

### Existing Infrastructure ✅
- Design token system fully implemented
- Typography system with 8 text styles
- Theme switching (day/night mode)
- Content management (MDX files + frontmatter)
- Existing Button, Card, Badge components
- Skeleton component exists

### Components Needing Complete Rewrite 🔄
- ProjectCard (currently uses carousel, needs simplified Work variant)
- ComponentCard (needs Components variant with button overlay)
- BlogCard (needs Variantblog with thumbnail-headline-description)
- Footer (needs newsletter section)

### Components to Create from Scratch 🆕
- Avatar
- Hero
- HeroQuickLinks
- MDXComponents (typography styling)

### Pages Needing Complete Redesign 🎨
- Homepage (`app/page.tsx`) - currently placeholder
- Subpages need removal/redirection

---

**Ready for Sub-task Generation**: Yes  
**Estimated Complexity**: High (8 parent tasks, ~40-50 sub-tasks expected)  
**Estimated Implementation Time**: Multiple sessions


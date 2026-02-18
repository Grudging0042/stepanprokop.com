# Product Requirements Document: Design System Components & Homepage Redesign

**Project**: stepanprokop.com Portfolio Website  
**PRD Number**: 0003  
**Feature**: Design System Components & Homepage Redesign  
**Date**: February 17, 2026  
**Version**: 1.0

---

## 1. Introduction/Overview

This feature involves building a complete set of design system components based on the Figma design system and restructuring the website to focus on a single, comprehensive homepage. The implementation will replace the existing multi-page structure with a unified scrollable homepage that showcases portfolio projects, components, and blog posts.

### Problem Statement

The current website has basic components and multiple subpages. The Figma design system provides refined components with proper day/night mode support and comprehensive token integration. The goal is to:

1. Build production-ready components that match the Figma designs exactly
2. Consolidate all content into a single, engaging homepage
3. Ensure all components use design tokens for consistent theming
4. Create a better user experience with proper loading states and interactions

---

## 2. Goals

1. **Design System Implementation**: Build all specified components using design tokens from the Figma source of truth
2. **Homepage Consolidation**: Remove subpages and create a single, comprehensive homepage
3. **Visual Consistency**: Ensure pixel-perfect implementation matching Figma designs
4. **Theme Support**: All components must support day/night mode seamlessly
5. **Accessibility**: Meet WCAG 2.1 AA standards across all components
6. **Performance**: Implement lazy loading, image optimization, and skeleton loaders

---

## 3. User Stories

### As a visitor, I want to:
- **US-01**: View a beautiful, cohesive homepage that showcases all content without navigating multiple pages
- **US-02**: See portfolio projects, components, and blog posts in an organized layout
- **US-03**: Click on cards to view detailed content on dedicated pages
- **US-04**: Experience smooth theme transitions between day and night modes
- **US-05**: Subscribe to newsletter updates via the footer
- **US-06**: Access quick actions in the hero section (book a call, download CV, send email)
- **US-07**: Navigate the site efficiently with proper loading states

### As a developer, I want to:
- **US-08**: Use reusable, well-documented components built with design tokens
- **US-09**: Easily maintain components with clear token references
- **US-10**: Extend components without breaking the design system

---

## 4. Functional Requirements

### 4.1 Component Development

#### 4.1.1 Card Components

**Portfolio Card** (Work variant)
- FR-01: Create a `PortfolioCard` component that displays project information
- FR-02: Card must include exactly: thumbnail image, icon, headline (label), and date
- FR-03: Thumbnail image displays as cover with border and rounded corners
- FR-04: Icon overlays on the thumbnail (24x24px, positioned in content area)
- FR-05: Headline uses body-2 typography (16px, 400 weight)
- FR-06: Date uses body-code-4 typography (12px, 500 weight, Fira Code font)
- FR-07: Card must be clickable and navigate to project detail page (e.g., `/projects/example-project`)
- FR-08: Implement hover effects as shown in Figma (scale, shadow enhancement)
- FR-09: Support both day and night mode themes
- FR-10: Use Next.js Image component for optimized image loading
- FR-11: Card dimensions: 210x210px cover image, responsive layout
- FR-12: Use design tokens for all styling (colors, spacing, typography, radius)

**Component Card** (Components variant)
- FR-13: Create a `ComponentCard` component for showcasing UI components
- FR-14: Card must include exactly: thumbnail, button (top-right overlay), headline (label), description, and date
- FR-15: Thumbnail displays as 320x240px (aspect ratio 4:3) with border and rounded corners
- FR-16: Icon button overlays in top-right corner (36x36px, icon-transparent variant)
- FR-17: Headline uses body-2 typography (16px, 400 weight)
- FR-18: Description uses body-2 typography (16px, 400 weight, secondary color)
- FR-19: Date uses body-code-4 typography (12px, 500 weight, Fira Code font)
- FR-20: Card must be clickable and navigate to component detail page (e.g., `/components/data-table`)
- FR-21: Implement same hover effects as Portfolio Card
- FR-22: Support both day and night mode themes
- FR-23: Use design tokens for all styling

**Blog Card** (Variantblog)
- FR-24: Create a `BlogCard` component for blog post previews
- FR-25: Card must include exactly: thumbnail, headline, description, and date
- FR-26: Thumbnail displays as 250x140px (aspect ratio ~16:9) with border and rounded corners
- FR-27: Headline uses body-2 typography (16px, 400 weight)
- FR-28: Description uses body-2 typography (16px, 400 weight, secondary color)
- FR-29: Date uses body-code-4 typography (12px, 500 weight, Fira Code font)
- FR-30: Card must be clickable and navigate to blog post page (e.g., `/blog/esp32-1bit-oled`)
- FR-31: Implement same hover effects as Portfolio Card
- FR-32: Support both day and night mode themes
- FR-33: Use design tokens for all styling

#### 4.1.2 Footer Component

- FR-23: Create a `Footer` component with newsletter subscription section
- FR-24: Include heading: "Get the Latest Updates"
- FR-25: Include description text explaining the newsletter
- FR-26: Email input field with placeholder "Enter your email"
- FR-27: Subscribe button with icon and text
- FR-28: Implement email validation with visual feedback (aria-invalid/data-invalid states)
- FR-29: Validation rules:
  - Required field (cannot be empty)
  - Valid email format (RFC 5322 compliant)
  - Visual error states for invalid input
- FR-30: Footer must use negative theme colors (dark background in light mode, light background in dark mode)
- FR-31: Newsletter functionality is MVP - no backend connection yet, just validation and UI
- FR-32: Footer spans full width with content constrained to 732px max-width

#### 4.1.3 Avatar Component

- FR-33: Create an `Avatar` component for profile image display
- FR-34: Component must be a simple image container with circular mask
- FR-35: Include subtle border outline using `--avatar/outline` token
- FR-36: Support different sizes via props (default: 100px)
- FR-37: Use Next.js Image component for optimization
- FR-38: No fallback states, status indicators, or initials - just display the image

#### 4.1.4 Blog Typography Component

- FR-39: Create MDX styling integration for blog post content
- FR-40: Define styles for all standard markdown elements:
  - H1, H2, H3, H4, H5, H6 (using headline tokens)
  - Paragraphs (using body-2 token)
  - Lists (ordered and unordered)
  - Blockquotes
  - Code blocks (using body-code-4 token and Fira Code font)
  - Inline code
  - Images (responsive, with captions)
  - Links (with hover states)
  - Tables (if needed)
- FR-41: Apply Figma typography hierarchy to MDX content
- FR-42: Ensure proper spacing between elements using design tokens
- FR-43: Support both day and night mode themes
- FR-44: Implement syntax highlighting for code blocks

#### 4.1.5 Hero Section

- FR-45: Create a `Hero` component for homepage introduction
- FR-46: Include large avatar (using Avatar component)
- FR-47: Display headline with name and role
- FR-48: Include introduction paragraph
- FR-49: Static content (not dynamic)
- FR-50: Implement hero quick links section with three actions:
  - **Book a Call**: Opens modal (design not ready - implement basic modal placeholder)
  - **Download CV**: Links to `https://cloud.stepanprokop.com/s/stepanprokop-cv` (opens in new tab)
  - **Say Hi**: Opens email client with prefilled address `me@stepanprokop.com`
- FR-51: Quick links styled as buttons using Button component
- FR-52: Hero section centered with max-width constraint (692px)
- FR-53: Responsive layout: stack vertically on mobile, horizontal on desktop
- FR-54: NO animations or transitions on load (static presentation)

#### 4.1.6 Button Component Enhancements

- FR-55: Review existing Button component and ensure all Figma variants are implemented
- FR-56: Variants needed: `text` (default), `outline`, `icon`, `icon-transparent`
- FR-57: States: `default`, `hover`, `pressed`, `focus`, `disabled`, `loading` (if needed)
- FR-58: Support for left icon, right icon, or icon-only configurations
- FR-59: Loading state should display spinner icon
- FR-60: Disabled state should have reduced opacity and no pointer events
- FR-61: Use design tokens for all styling properties

### 4.2 Homepage Restructure

#### 4.2.1 Content Migration

- FR-62: Remove all subpages: `/projects`, `/components`, `/blog` (pages no longer accessible)
- FR-63: Create new homepage structure with sections in this order:
  1. Hero Section
  2. Portfolio Projects Section
  3. Components Section
  4. Blog Posts Section
  5. Footer
- FR-64: Each content section should have a heading (e.g., "Projects", "Components", "Blog")
- FR-65: Portfolio section displays content from current `/projects` page
- FR-66: Components section displays content from current `/components` page
- FR-67: Blog section displays content from current `/blog` page

#### 4.2.2 Content Layout

- FR-68: Portfolio cards displayed in responsive grid:
  - Desktop: 2 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- FR-69: Component cards displayed in responsive grid:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- FR-70: Blog cards displayed in responsive grid:
  - Desktop: 2 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- FR-71: All grids use consistent gap spacing (`--spacing-xl` = 24px desktop, 16px mobile)
- FR-72: Section spacing between hero, portfolio, components, and blog sections

#### 4.2.3 Navigation Updates

- FR-73: Update Header navigation to remove links to subpages
- FR-74: Header should include:
  - Logo/Name (links to homepage top)
  - Theme toggle button
  - "Book a Call" CTA button (optional)
- FR-75: Implement smooth scroll to sections if anchor links are used
- FR-76: Header remains sticky at top with backdrop blur effect

### 4.3 Loading & Performance

- FR-77: Implement skeleton loaders for all card types
- FR-78: Skeleton loaders should match card dimensions and layout
- FR-79: Use React Suspense boundaries for section loading
- FR-80: Lazy load images below the fold
- FR-81: Use Next.js Image component with proper `sizes` attribute for responsive images
- FR-82: Implement priority loading for hero section images
- FR-83: Add loading="lazy" for all images below the fold
- FR-84: Show skeleton loaders while content is fetching/loading

### 4.4 Accessibility

- FR-85: All interactive elements must have proper ARIA labels
- FR-86: Keyboard navigation support for all clickable cards and buttons
- FR-87: Focus indicators visible on all interactive elements
- FR-88: Color contrast must meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
- FR-89: Semantic HTML structure (proper heading hierarchy)
- FR-90: Alt text for all images
- FR-91: Email input must have associated label (visible or aria-label)
- FR-92: Error messages must be announced to screen readers
- FR-93: Form validation errors must be programmatically associated with inputs

### 4.5 Responsive Design

- FR-94: All components must be fully responsive
- FR-95: Breakpoints:
  - Mobile: < 768px
  - Desktop: ≥ 768px
- FR-96: Typography scales down on mobile (headline-1: 24px → 20px, headline-2: 18px → 16px)
- FR-97: Spacing adjusts on mobile (spacing-xl: 24px → 16px)
- FR-98: Container max-width: 692px on desktop, full width with 16px padding on mobile
- FR-99: Cards adjust aspect ratios and dimensions based on viewport
- FR-100: Grid columns collapse appropriately on smaller screens

---

## 5. Non-Goals (Out of Scope)

1. **Backend Integration**: Newsletter subscription will not connect to backend services (Supabase integration deferred)
2. **User Authentication**: No login/signup functionality
3. **Content Management**: Content remains hardcoded or in static files (no CMS integration)
4. **Search Functionality**: No search bar or filtering on homepage
5. **Pagination**: All content displayed at once (no load more or pagination)
6. **Comments System**: No comment functionality on blog posts
7. **Social Sharing**: No social media share buttons
8. **Analytics Dashboard**: No admin panel or analytics tracking UI
9. **Multi-language Support**: English only
10. **Advanced Animations**: No complex animations in hero or cards (beyond hover effects)
11. **Book a Call Modal Design**: Modal functionality placeholder only (full design deferred)

---

## 6. Design Considerations

### 6.1 Figma References

All components must match these Figma designs exactly:

- **Portfolio Card**: [Node 5:326](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=5-326&t=SucWwGyRXLfu0jCk-11)
- **Prototype Card**: [Node 5:326](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=5-326&t=SucWwGyRXLfu0jCk-11)
- **Blog Card**: [Node 5:326](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=5-326&t=SucWwGyRXLfu0jCk-11)
- **Footer**: [Node 70:6454](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=70-6454&t=SucWwGyRXLfu0jCk-11)
- **Avatar**: [Node 5:234](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=5-234&t=SucWwGyRXLfu0jCk-11)
- **Blog Typography**: [Node 70:859](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=70-859&t=SucWwGyRXLfu0jCk-11)
- **Hero**: [Node 0:4](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=0-4&t=SucWwGyRXLfu0jCk-11)
- **Buttons**: [Node 19:306](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=19-306&t=SucWwGyRXLfu0jCk-11)
- **Desktop Homepage**: [Node 0:4](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=0-4&t=SucWwGyRXLfu0jCk-11) (Day version)
- **Mobile Homepage**: [Node 5:15](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025?node-id=5-15&t=SucWwGyRXLfu0jCk-11)

### 6.2 Design Tokens

All components must use design tokens documented in:
- `portfolio/DESIGN_TOKENS.md`
- `portfolio/DESIGN_SYSTEM_CHANGELOG.md`

**Key Token Categories:**
- Colors: `--background-primary`, `--text-primary`, `--theme-surface-fill`, etc.
- Typography: `text-headline-1` through `text-body-code-4`
- Spacing: `--spacing-xs` (6px) through `--spacing-xl` (24px)
- Radius: `--radius-l` (6px), `--radius-xxl` (16px)
- Shadows: `--button-shadow`, component shadows

### 6.3 Component File Structure

```
portfolio/
├── components/
│   ├── cards/
│   │   ├── PortfolioCard.tsx
│   │   ├── ComponentCard.tsx
│   │   └── BlogCard.tsx
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── HeroQuickLinks.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx (update)
│   ├── ui/
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx (enhance)
│   │   ├── Badge.tsx (existing)
│   │   └── Skeleton.tsx (new)
│   └── mdx/
│       └── MDXComponents.tsx
├── app/
│   ├── page.tsx (new homepage)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx (keep detail pages)
│   ├── components/
│   │   └── [slug]/
│   │       └── page.tsx (keep detail pages)
│   └── blog/
│       └── [slug]/
│           └── page.tsx (keep detail pages)
```

### 6.4 Theme Support

- All components must support `.dark` class for night mode
- Use CSS variables for all theme-aware properties
- Transitions: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Respect `prefers-reduced-motion` for accessibility

---

## 7. Technical Considerations

### 7.1 Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables (design tokens)
- **Images**: Next.js Image component
- **Content**: MDX for blog posts
- **Validation**: Built-in HTML5 validation + ARIA attributes

### 7.2 Data Structure

**Portfolio Project:**
```typescript
interface PortfolioProject {
  id: string;
  slug: string;
  thumbnail: string;      // Cover image
  icon: string;           // 24x24px icon
  headline: string;       // Label/title
  date: string;           // Display date (e.g., "Oct 2025")
}
```

**Component:**
```typescript
interface Component {
  id: string;
  slug: string;
  thumbnail: string;      // Preview image (320x240px aspect)
  headline: string;       // Label/title
  description: string;    // Short description
  date: string;           // Display date (e.g., "Oct 2025")
}
```

**Blog Post:**
```typescript
interface BlogPost {
  id: string;
  slug: string;
  thumbnail: string;      // Featured image (250x140px aspect)
  headline: string;       // Article title
  description: string;    // Excerpt/description
  date: string;           // Display date (e.g., "Nov 8, 2025")
}
```

### 7.3 Content Storage

For MVP phase:
- Store content in TypeScript files as static data arrays
- Example: `lib/data/projects.ts`, `lib/data/components.ts`, `lib/data/blog.ts`
- Keep detail page content in MDX files
- Structure: `/content/projects/[slug].mdx`, `/content/blog/[slug].mdx`

### 7.4 Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### 7.5 Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android

---

## 8. Success Metrics

### 8.1 Development Success

- ✅ All components built and match Figma designs (visual QA passed)
- ✅ Design tokens properly implemented across all components
- ✅ TypeScript compilation succeeds with no errors
- ✅ All components have proper TypeScript types
- ✅ Responsive behavior works across all breakpoints

### 8.2 Quality Metrics

- ✅ WCAG 2.1 AA compliance (contrast ratios, keyboard navigation, ARIA labels)
- ✅ No console errors in browser
- ✅ Lighthouse score: Performance > 90, Accessibility = 100
- ✅ All images optimized and use Next.js Image component
- ✅ Theme switching works seamlessly in all components

### 8.3 User Experience Metrics

- ✅ Page loads in under 2 seconds on 4G connection
- ✅ Smooth scrolling and interactions (60fps)
- ✅ Cards have proper hover states and feedback
- ✅ Email validation provides clear feedback
- ✅ Skeleton loaders display while content loads

---

## 9. Testing & Validation Checklist

### 9.1 Component Testing

**Portfolio Card:**
- [ ] Displays thumbnail image (210x210px cover)
- [ ] Icon displays correctly on thumbnail (24x24px)
- [ ] Headline displays with body-2 typography
- [ ] Date displays with body-code-4 typography (Fira Code)
- [ ] Clickable and navigates to correct project detail page
- [ ] Hover effects work (scale, shadow)
- [ ] Responsive sizing on mobile vs desktop
- [ ] Day/night theme support
- [ ] Image loads with Next.js Image optimization

**Component Card:**
- [ ] Displays thumbnail (320x240px aspect ratio)
- [ ] Icon button overlay visible in top-right (36x36px)
- [ ] Headline displays with body-2 typography
- [ ] Description displays with body-2 secondary color
- [ ] Date displays with body-code-4 typography (Fira Code)
- [ ] Clickable and navigates to component detail page
- [ ] Hover effects work
- [ ] Responsive behavior
- [ ] Day/night theme support

**Blog Card:**
- [ ] Displays thumbnail (250x140px aspect ratio)
- [ ] Headline displays with body-2 typography
- [ ] Description displays with body-2 secondary color
- [ ] Date displays with body-code-4 typography (Fira Code)
- [ ] Clickable and navigates to blog post page
- [ ] Hover effects work
- [ ] Responsive behavior
- [ ] Day/night theme support

**Footer:**
- [ ] Newsletter section displays correctly
- [ ] Email input accepts text
- [ ] Validation works (empty, invalid format)
- [ ] Visual error states display (aria-invalid)
- [ ] Subscribe button clickable (placeholder action)
- [ ] Negative theme colors applied correctly
- [ ] Responsive on mobile

**Avatar:**
- [ ] Image displays correctly
- [ ] Circular mask applied
- [ ] Border outline visible
- [ ] Next.js Image optimization active
- [ ] Different sizes work via props

**Hero Section:**
- [ ] Avatar displays large and centered
- [ ] Static content displays correctly
- [ ] Quick links render properly
- [ ] "Book a Call" opens modal placeholder
- [ ] "Download CV" links to cloud URL (new tab)
- [ ] "Say Hi" opens email client with prefilled address
- [ ] Responsive layout (stack on mobile)
- [ ] NO animations on load

**Button Component:**
- [ ] All variants render (text, outline, icon, icon-transparent)
- [ ] All states work (default, hover, pressed, focus, disabled, loading)
- [ ] Icons display correctly (left, right, icon-only)
- [ ] Loading state shows spinner
- [ ] Disabled state non-interactive
- [ ] Design tokens applied

### 9.2 Homepage Testing

- [ ] All sections render in correct order (Hero → Portfolio → Components → Blog → Footer)
- [ ] Section headings display correctly
- [ ] Grids layout correctly on desktop (2/3/2 columns)
- [ ] Grids collapse to 1 column on mobile
- [ ] Spacing between sections consistent
- [ ] Content matches original subpages
- [ ] Smooth scroll works (if implemented)
- [ ] Header navigation updated (no subpage links)

### 9.3 Responsive Testing

- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 768px width (iPad)
- [ ] Test at 1024px width (desktop)
- [ ] Test at 1440px width (large desktop)
- [ ] Typography scales correctly
- [ ] Spacing adjusts as expected
- [ ] No horizontal scrolling
- [ ] Images scale properly

### 9.4 Theme Testing

- [ ] Toggle between day and night mode multiple times
- [ ] All components adapt colors correctly
- [ ] Transitions smooth (200ms)
- [ ] No flashing or layout shifts
- [ ] Preference persists after reload
- [ ] Test in Chrome, Safari, Firefox

### 9.5 Accessibility Testing

- [ ] Run axe DevTools (0 violations)
- [ ] Run Lighthouse Accessibility audit (score = 100)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader (VoiceOver or NVDA)
- [ ] Verify focus indicators visible
- [ ] Check color contrast ratios (WebAIM tool)
- [ ] Verify semantic HTML structure
- [ ] Test form validation announcements

### 9.6 Performance Testing

- [ ] Run Lighthouse Performance audit (score > 90)
- [ ] Check FCP, LCP, TTI, CLS metrics
- [ ] Verify images lazy load below fold
- [ ] Check network tab for optimized images
- [ ] Test on throttled 4G connection
- [ ] Verify skeleton loaders display

### 9.7 Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari iOS
- [ ] Chrome Android

---

## 10. Open Questions

### For Developer:
1. Should the "Book a Call" modal have any specific functionality placeholder (e.g., form fields, calendar widget)?
2. What should happen when user clicks "Subscribe" button in MVP phase? (Show success message, clear input, or just validation feedback?)
3. Should section headings ("Projects", "Components", "Blog") be clickable/anchor links?
4. Do we need a "View All" or "Load More" button for each section, or display all content at once?
5. Should there be any filtering/sorting controls on the homepage sections?

### For Designer:
6. What is the final design for the "Book a Call" modal?
7. Are there any micro-interactions or animations needed beyond hover effects?
8. Should there be a visual separator between homepage sections (e.g., horizontal line, extra spacing)?

### For Content:
9. What is the exact content for the hero section (headline, introduction text)?
10. How many portfolio projects, components, and blog posts should be included in the initial launch?

---

## 11. Implementation Notes

### Phase 1: Component Development (Priority)
1. Avatar component (simplest, no dependencies)
2. Button enhancements (needed by other components)
3. Skeleton loader component (needed for loading states)
4. Card components (Portfolio, Component, Blog)
5. Hero component and quick links
6. Footer component
7. MDX typography styles

### Phase 2: Homepage Restructure
1. Update Header navigation
2. Create new homepage layout
3. Migrate content from subpages
4. Implement grid layouts for each section
5. Add section headings
6. Integrate all components

### Phase 3: Polish & Optimization
1. Implement lazy loading
2. Add skeleton loaders
3. Optimize images
4. Test responsive behavior
5. Test theme switching
6. Accessibility audit
7. Performance optimization

### Phase 4: Testing & Deployment
1. Visual QA against Figma
2. Cross-browser testing
3. Accessibility testing
4. Performance testing
5. Deploy to staging
6. Final review and approval
7. Deploy to production

---

## 12. Dependencies

### Required Files/Components:
- Existing Button component (`components/ui/Button.tsx`)
- Existing Badge component (`components/ui/Badge.tsx`)
- Existing Card component (`components/ui/Card.tsx`)
- Design tokens (`styles/tokens.css`)
- Typography utilities (`lib/utils/typography.ts`)
- Theme provider (`next-themes`)

### New Dependencies:
None - all functionality can be achieved with existing dependencies

---

## 13. Reference Documents

- **Design System Tokens**: `portfolio/DESIGN_TOKENS.md`
- **Design System Changelog**: `portfolio/DESIGN_SYSTEM_CHANGELOG.md`
- **Project README**: `README.md`
- **Figma Design System**: [stepanprokop.com-2025](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025)
- **Reference Implementation**: 
  - https://portfolio.ui-lab.cz/projects
  - https://portfolio.ui-lab.cz/components
  - https://portfolio.ui-lab.cz/blog

---

**Document Status**: Ready for Task Generation  
**Approved By**: [Pending]  
**Implementation Start Date**: [TBD]

---

## Appendix A: Content Structure Reference

### Portfolio Projects Content
Reference: https://portfolio.ui-lab.cz/projects

Current content shows:
- 3 portfolio projects
- Each with client, year, role, industry, tools
- Varying project types (E-commerce, Fintech, SaaS)

### Components Content
Reference: https://portfolio.ui-lab.cz/components

Current content shows:
- Multiple components
- Framework tags (react)
- Complexity levels (advanced, intermediate)
- Tags for categorization

### Blog Posts Content
Reference: https://portfolio.ui-lab.cz/blog

Current content shows:
- 2 blog articles
- Featured images
- Tags (ESP32, Figma, OLED, DIY, Automotive Design, HMI, UX Design, Product Design)
- Date, read time, author

---

## Appendix B: Design Token Quick Reference

### Colors (Day Mode → Night Mode)
- `--background-primary`: #ffffff → #0d0d0d
- `--text-primary`: #0d0d0d → #f5f5f5
- `--theme-surface-fill`: #f5f5f5 → #1a1a1a
- `--theme-surface-stroke`: #e6e6e6 → #262626
- `--button-fill`: #0d0d0d → #f5f5f5
- `--button-content`: #ffffff → #0d0d0d

### Typography
- `headline-1`: 24px/20px mobile, 600 weight
- `headline-2`: 18px/16px mobile, 600 weight
- `headline-3`: 16px, 600 weight
- `body-1`: 18px, 400 weight
- `body-2`: 16px, 400 weight
- `body-3`: 14px, 600 weight
- `body-4`: 12px, 500 weight
- `body-code-4`: 12px, 500 weight, Fira Code

### Spacing
- `--spacing-xs`: 6px
- `--spacing-s`: 10px
- `--spacing-m`: 12px
- `--spacing-l`: 16px
- `--spacing-xl`: 24px (16px mobile)

### Radius
- `--radius-l`: 6px
- `--radius-xxl`: 16px

### Layout
- `--max-width-narrow`: 692px

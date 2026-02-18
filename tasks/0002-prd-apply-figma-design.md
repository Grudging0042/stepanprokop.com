# Apply Figma Design System to Portfolio Website PRD

## 1. Introduction/Overview

This PRD outlines the requirements for applying the Figma design system (stepanprokop.com 2025) to the existing portfolio website. The design system includes a comprehensive token structure covering colors, typography, spacing, and component styles across both day and night modes. This implementation will create a complete visual redesign of the portfolio while maintaining the existing functionality and content architecture.

**Problem it solves:** Ensures visual consistency between the Figma design mockups and the live website, establishes a scalable design system for future updates, and provides a polished, professional appearance that matches the designer's specifications.

**Goal:** Complete visual overhaul of the portfolio website by implementing Figma design tokens through Style Dictionary, updating all components to match the design system, and establishing a maintainable theming system for day/night modes.

## 2. Goals

1. **Design Fidelity:** Achieve pixel-perfect implementation matching the Figma design specifications
2. **Systematic Implementation:** Use Style Dictionary to automate token transformation from Figma JSON to CSS
3. **Theme Consistency:** Implement day mode and night mode with seamless switching using Figma's exact color tokens
4. **Component Integrity:** Update all Shadcn UI components to reflect Figma design tokens while preserving functionality
5. **Developer Experience:** Create a maintainable, scalable design system that's easy to update from Figma exports
6. **Performance:** Maintain or improve current website performance despite visual changes

## 3. User Stories

### Primary Audience: Website Visitors
- As a visitor, I want to see a visually consistent design so I can focus on content without distraction
- As a user, I want to switch between light and dark modes so I can view the site comfortably in any environment
- As a mobile user, I want the design to adapt seamlessly to my device size
- As a visitor with accessibility needs, I want sufficient color contrast and readable typography

### Primary Audience: Developer (Implementation)
- As a developer, I want automated token transformation so I don't manually convert Figma values
- As a developer, I want clear design token structure so I can quickly identify which token to use
- As a developer, I want type-safe tokens so I catch errors at build time
- As a maintainer, I want to easily update designs by re-exporting from Figma and running a build command

### Secondary Audience: Designer
- As a designer, I want my Figma designs accurately reflected in production
- As a designer, I want to update token values in Figma and see them propagate to the website
- As a designer, I want to test design variations without requiring code changes

## 4. Functional Requirements

### 4.1 Design Token System

#### Token Files Structure
1. The system must process the following Figma token exports:
   - `00--color-tokens.mode.tokens.json` - Base color palette (10 shades)
   - `00--number-tokens.mode.tokens.json` - Size scale, typography weights, screen constraints
   - `01--comp-colors.day_mode.tokens.json` - Day mode semantic color assignments
   - `01--comp-colors.night_mode.tokens.json` - Night mode semantic color assignments
   - `01--comp-sizes.desktop.tokens.json` - Desktop component sizing and spacing
   - `01--comp-sizes.mobile.tokens.json` - Mobile component sizing and spacing

#### Style Dictionary Configuration
2. The system must use Style Dictionary to transform Figma tokens into:
   - CSS custom properties for runtime theming
   - Tailwind theme configuration for utility classes
   - TypeScript type definitions for type safety
3. Token transformation must resolve nested references (e.g., `{--color-1}` → `#f5f5f5`)
4. Token transformation must create semantic naming (e.g., `background.primary` → `--background-primary`)
5. The system must generate separate token sets for:
   - `:root` (base tokens + day mode)
   - `.dark` (night mode overrides)
   - Responsive variants (desktop/mobile breakpoint-specific tokens)

### 4.2 Typography System

#### Font Loading
6. The system must load Google Fonts:
   - Inter (weights: 400, 500, 600) - primary typeface
   - Fira Code (weight: 500) - code blocks and technical content
7. Fonts must be optimized with:
   - Font subsetting for used characters
   - Font display: swap for performance
   - Preconnect to Google Fonts CDN

#### Text Styles
8. The system must implement these text style utilities:
   - `headline-1`: 24px, Semi Bold (600), -1% letter-spacing, 28px line-height
   - `headline-2`: 18px, Semi Bold (600), -1% letter-spacing, 24px line-height
   - `headline-3`: 16px, Semi Bold (600), -1% letter-spacing, 24px line-height
   - `body-1`: 18px, Regular (400), -1% letter-spacing, 24px line-height
   - `body-2`: 16px, Regular (400), -1% letter-spacing, 24px line-height
   - `body-3`: 14px, Semi Bold (600), -1% letter-spacing, 18px line-height
   - `body-4`: 12px, Medium (500), -1% letter-spacing, 24px line-height
   - `body-code-4`: 12px Fira Code, Medium (500), -1% letter-spacing
9. Each text style must be available as:
   - Tailwind utility class (e.g., `.text-headline-1`)
   - React component (e.g., `<Headline1>`)
   - CSS custom property set for manual application

### 4.3 Color System

#### Base Color Palette
10. The system must define 10 base color tokens:
    - `--color-1`: #f5f5f5 (lightest)
    - `--color-2`: #e6e6e6
    - `--color-3`: #d4d4d4
    - `--color-4`: #d1d1d1
    - `--color-5`: #b8b8b8
    - `--color-6`: #8f8f8f
    - `--color-7`: #6b6b6b
    - `--color-8`: #4d4d4d
    - `--color-9`: #2a2a2a (darkest)
    - `--color-10_trans-10`: rgba(42, 42, 42, 0.05)
    - `--color-1_trans-10`: rgba(245, 245, 245, 0.05)

#### Semantic Color Tokens - Day Mode
11. Day mode must define these semantic color mappings:
    - Background: `--background-primary` → `--color-1`
    - Text primary: `--text-primary` → `--color-8`
    - Text secondary: `--text-secondary` → `--color-7`
    - Text tertiary: `--text-tertiary` → `--color-6`
    - Avatar outline: `--avatar-outline` → `--color-9`
    - Component fill: `--component-fill` → `--color-2`
    - Component stroke: `--component-stroke` → `--color-4`
    - Button fill: `--button-fill` → `--color-1`
    - Button border: `--button-border` → `--color-2`
    - Button content: `--button-content` → `--color-9`
    - Button shadow: `--button-shadow` → `--color-10_trans-10`
    - Button hover fill: `--button-fill-hover` → `--color-2`
    - Button pressed fill: `--button-fill-pressed` → `--color-3`
    - Button focus border: `--button-border-focus` → `--color-6`

#### Semantic Color Tokens - Night Mode
12. Night mode (`.dark`) must define these semantic color mappings:
    - Background: `--background-primary` → `--color-9`
    - Text primary: `--text-primary` → `--color-2`
    - Text secondary: `--text-secondary` → `--color-3`
    - Text tertiary: `--text-tertiary` → `--color-4`
    - Avatar outline: `--avatar-outline` → `--color-1`
    - Component fill: `--component-fill` → `--color-8`
    - Component stroke: `--component-stroke` → `--color-7`
    - Button fill: `--button-fill` → `--color-9`
    - Button border: `--button-border` → `--color-8`
    - Button content: `--button-content` → `--color-1`
    - Button shadow: `--button-shadow` → `--color-10_trans-10`
    - Button hover fill: `--button-fill-hover` → `--color-8`
    - Button pressed fill: `--button-fill-pressed` → `--color-7`
    - Button focus border: `--button-border-focus` → `--color-4`

#### Legacy Theme Compatibility
13. The system must maintain compatibility with existing Shadcn color variables by mapping:
    - `--background` → `--background-primary`
    - `--foreground` → `--text-primary`
    - `--card` → `--component-fill`
    - `--card-foreground` → `--text-primary`
    - `--primary` → `--button-fill`
    - `--primary-foreground` → `--button-content`
    - `--secondary` → `--component-fill`
    - `--secondary-foreground` → `--text-secondary`
    - `--muted` → `--component-fill`
    - `--muted-foreground` → `--text-secondary`
    - `--accent` → `--button-fill-hover`
    - `--border` → `--component-stroke`
    - `--input` → `--component-stroke`
    - `--ring` → `--button-border-focus`

### 4.4 Spacing & Sizing System

#### Size Scale
14. The system must define a size scale:
    - `size-1`: 6px
    - `size-2`: 12px
    - `size-3`: 14px
    - `size-4`: 16px
    - `size-5`: 18px
    - `size-6`: 24px
    - `size-7`: 28px
    - `size-8`: 36px
    - `size-9`: 42px

#### Spacing Tokens
15. The system must define semantic spacing tokens:
    - `spacing-xs`: 6px (size-1)
    - `spacing-sm`: 12px (size-2)
    - `spacing-md`: 16px (size-4)
    - `spacing-lg`: 18px (size-5)
    - `spacing-xl`: 24px (size-6)

#### Border Radius
16. The system must define border radius tokens:
    - `radius-L`: 6px (size-1)
    - `radius-XL`: 16px (size-4)

#### Layout Constraints
17. The system must define layout width constraints:
    - Desktop max width: 692px
    - Mobile max width: 100% (fluid)
    - Grid columns: 12
    - Grid column width: 39px (calculated from max-width)
    - Grid gutter: 16px

### 4.5 Component Updates

#### Button Component
18. The Button component must implement:
    - Height: 36px (size-8)
    - Horizontal padding: 16px (size-4)
    - Vertical padding: 12px (size-2)
    - Gap between icon and text: 6px (size-1)
    - Icon size: 16px (size-4)
    - Border radius: 6px (radius-L)
19. Button variants must include:
    - Default: Uses `--button-fill`, `--button-border`, `--button-content`
    - Outline: Uses transparent fill, `--button-outline-border`, `--button-outline-content`
20. Button states must include:
    - Hover: Apply `--button-fill-hover`
    - Pressed/Active: Apply `--button-fill-pressed`
    - Focus: Apply `--button-border-focus` with 2px outline
    - Disabled: Reduce opacity to 50%
21. Button shadow must be: `0 1px 2px 0 var(--button-shadow)`

#### Card Component
22. The Card component must implement:
    - Background: `--component-fill`
    - Border: 1px solid `--component-stroke`
    - Border radius: 16px (radius-XL)
    - Padding: 16px (spacing-md) or 24px (spacing-xl) based on size variant
23. Card hover state must include:
    - Smooth scale transform: `scale(1.02)`
    - Transition: `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
    - Shadow: `0 4px 8px 0 var(--button-shadow)`

#### Header Component
24. The Header component must implement:
    - Background: `--background-primary`
    - Border bottom: 1px solid `--component-stroke`
    - Padding: 16px (spacing-md) vertical, 24px (spacing-xl) horizontal
    - Max width: 692px container
25. Navigation links must use:
    - Font: body-2 (16px Regular)
    - Color: `--text-secondary`
    - Hover color: `--text-primary`
    - Active indicator: 2px bottom border in `--text-primary`
26. "Book a call" CTA button must use Button component with default variant

#### Footer Component
27. The Footer component must implement:
    - Background: `--background-primary`
    - Border top: 1px solid `--component-stroke`
    - Padding: 48px (custom) vertical, 24px (spacing-xl) horizontal
    - Max width: 692px container
28. Footer text must use:
    - Headings: body-3 (14px Semi Bold)
    - Links: body-4 (12px Medium)
    - Color: `--text-secondary`
    - Link hover: `--text-primary`

#### Badge Component
29. The Badge component must implement:
    - Height: 24px
    - Horizontal padding: 12px (spacing-sm)
    - Background: `--component-fill`
    - Border: 1px solid `--component-stroke`
    - Border radius: 6px (radius-L)
    - Font: body-4 (12px Medium)
    - Color: `--text-secondary`

#### Project/Component/Blog Cards
30. All card variants must implement:
    - Border radius: 16px (radius-XL)
    - Gap between elements: 16px (spacing-md)
    - Headline: headline-3 (16px Semi Bold)
    - Description: body-2 (16px Regular)
    - Metadata: body-4 (12px Medium) in `--text-secondary`

### 4.6 Responsive Design

#### Breakpoint System
31. The system must define breakpoints:
    - Mobile: 0px - 767px
    - Desktop: 768px and above (matches Figma's desktop tokens)
32. The mobile breakpoint must load size tokens from `01--comp-sizes.mobile.tokens.json`
33. The desktop breakpoint must load size tokens from `01--comp-sizes.desktop.tokens.json`

#### Container Behavior
34. The container must behave as:
    - Desktop (≥768px): Fixed 692px centered with side margins
    - Mobile (<768px): Full width with 16px horizontal padding

#### Component Responsiveness
35. Typography must scale on mobile:
    - headline-1: 20px (down from 24px)
    - headline-2: 16px (down from 18px)
    - All other sizes remain same
36. Spacing must scale on mobile:
    - Large gaps (24px) reduce to 16px
    - Medium gaps (16px) remain same
    - Small gaps (6px, 12px) remain same

### 4.7 Theme Switching

#### Theme Toggle Component
37. The theme toggle must:
    - Display sun icon for day mode, moon icon for night mode
    - Toggle `.dark` class on `<html>` element
    - Persist selection to localStorage as `theme` key
    - Respect system preference on first visit (`prefers-color-scheme`)
38. Theme transitions must:
    - Apply to color properties only
    - Use duration: 200ms
    - Use timing: `cubic-bezier(0.4, 0, 0.2, 1)`

#### Theme Detection on Load
39. On page load, the system must:
    - Check localStorage for saved `theme` preference
    - If no saved preference, check `prefers-color-scheme: dark`
    - Apply theme before first paint to prevent flash

### 4.8 Build & Development Workflow

#### Style Dictionary Pipeline
40. The project must include a Style Dictionary configuration that:
    - Reads all Figma token JSON files from `/design-tokens/`
    - Transforms tokens into CSS custom properties
    - Generates Tailwind config extensions
    - Outputs TypeScript type definitions
41. The build command must be: `npm run build:tokens`
42. Token build must run automatically before main Next.js build
43. The system must generate these output files:
    - `/styles/tokens.css` - CSS custom properties
    - `/config/tokens.tailwind.js` - Tailwind theme extension
    - `/types/tokens.d.ts` - TypeScript token types

#### Development Mode
44. In development, token changes must trigger:
    - Automatic rebuild of token outputs
    - Hot reload of styles without full page refresh
45. Token validation must occur at build time:
    - Check for undefined token references
    - Validate color formats
    - Warn about missing mobile/desktop variants

### 4.9 Quality Assurance & Testing

#### Visual Regression Testing
46. The system must support visual comparison via:
    - Figma screenshots exported at exact component sizes
    - Automated screenshot capture using Playwright
    - Pixel-diff comparison using Pixelmatch library
47. Visual tests must cover:
    - All component variants (default, hover, pressed, focus, disabled)
    - Both day and night modes
    - Desktop and mobile viewports

#### Manual Review Process
48. Before marking complete, each component must:
    - Be reviewed side-by-side with Figma design
    - Have color values verified with browser DevTools
    - Have spacing measured using browser inspect tools
    - Be tested in both themes
49. Significant visual changes must be:
    - Documented with before/after screenshots
    - Reviewed and approved before deployment
    - Listed in a changelog for tracking

#### Accessibility Validation
50. All color combinations must meet WCAG 2.1 AA standards:
    - Text contrast ratio ≥ 4.5:1 for body text
    - Text contrast ratio ≥ 3:1 for large text (18px+)
51. The system must validate contrast ratios automatically during token build
52. Failed contrast checks must generate build warnings (not errors, but must be addressed)

### 4.10 Documentation

#### Design Token Documentation
53. The project must include `DESIGN_TOKENS.md` documenting:
    - How to export tokens from Figma
    - How to add new tokens
    - Token naming conventions
    - How to update tokens across the project
54. Each token category must include:
    - Visual examples (color swatches, size scales)
    - Usage guidelines (when to use which token)
    - Do's and don'ts

#### Component Documentation
55. Each updated component must document:
    - Which Figma tokens it uses
    - Any deviations from Figma design (with rationale)
    - Responsive behavior
    - Theme-specific considerations

## 5. Non-Goals (Out of Scope)

1. **Figma Plugin Development:** No custom Figma plugin for token export (use existing plugins like Tokens Studio)
2. **Component Library Refactoring:** No architectural changes to component structure, only styling updates
3. **Animation System:** No new animation system beyond existing transitions (design tokens don't include animation specs)
4. **New Component Creation:** No new components not already in the portfolio or Shadcn library
5. **Content Changes:** No content updates, copy editing, or image replacements
6. **Feature Additions:** No new functionality, interactive features, or page sections
7. **Performance Optimization:** No performance work beyond maintaining current benchmarks
8. **Internationalization:** No multi-language support for token values or component text
9. **A/B Testing:** No variant testing or analytics for design preference
10. **Legacy Browser Support:** No special handling for IE11 or other outdated browsers

## 6. Design Considerations

### Design System Structure
- **Atomic Design Principles:** Base tokens (colors, sizes) → Semantic tokens (button-fill, text-primary) → Components
- **Token Hierarchy:** Three-tier system ensures flexibility and maintainability
- **Theme Architecture:** Day/night modes share base palette but differ in semantic mappings

### Visual Language
- **Minimalist Aesthetic:** Neutral grayscale palette emphasizes content over decoration
- **Subtle Depth:** Minimal shadows and borders create hierarchy without distraction
- **Typography Focus:** Strong type scale and clear hierarchy make text primary focus
- **Generous Spacing:** 16px base grid creates clean, breathable layouts

### Consistency Patterns
- **Predictable Hover States:** All interactive elements use consistent hover feedback
- **Focus Indicators:** Clear, accessible focus rings on all focusable elements
- **Component Repetition:** Cards, buttons, and badges follow identical patterns across sections
- **Responsive Scaling:** Components shrink gracefully rather than reflow drastically

## 7. Technical Considerations

### Recommended Tools & Dependencies

#### Style Dictionary Setup
```bash
npm install --save-dev style-dictionary
```

**Configuration approach:**
- Create `style-dictionary.config.js` in project root
- Define custom transforms for Figma token format
- Set up platforms: css, tailwind, typescript
- Configure file paths for token inputs and outputs

#### Token Processing
- **Token Studio Plugin** (Figma): Export tokens in JSON format compatible with Style Dictionary
- **Custom Transforms:** Write transforms to handle Figma's `$value` and `$type` format
- **Reference Resolution:** Use Style Dictionary's built-in reference resolver for nested tokens

### Technical Architecture

#### CSS Custom Properties Strategy
```css
/* Base tokens in :root */
:root {
  --color-1: #f5f5f5;
  /* ... all base colors */
}

/* Semantic tokens in :root (day mode) */
:root {
  --background-primary: var(--color-1);
  --text-primary: var(--color-8);
}

/* Semantic overrides in .dark (night mode) */
.dark {
  --background-primary: var(--color-9);
  --text-primary: var(--color-2);
}
```

#### Tailwind Integration
Extend Tailwind theme with token-based colors:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'text-primary': 'var(--text-primary)',
        // ... all semantic tokens
      }
    }
  }
}
```

### Migration Strategy

#### Phase 1: Token Infrastructure (Week 1)
1. Install and configure Style Dictionary
2. Set up token file structure
3. Create build pipeline
4. Generate CSS custom properties
5. Test token resolution

#### Phase 2: Global Styles (Week 1)
1. Update `globals.css` with new tokens
2. Test theme switching functionality
3. Verify responsive breakpoints
4. Check syntax highlighting colors

#### Phase 3: Component Migration (Week 2-3)
1. Update components in order of dependencies:
   - Typography components
   - Button, Badge (primitives)
   - Card (used by all content types)
   - Header, Footer (layout)
   - ProjectCard, ComponentCard, BlogCard
   - Page layouts
2. Test each component in isolation
3. Verify theme switching per component
4. Check responsive behavior

#### Phase 4: Visual QA (Week 3-4)
1. Set up visual regression testing
2. Compare all pages against Figma
3. Document deviations
4. Get approval for significant changes
5. Make final adjustments

### Dependencies
- **style-dictionary** (^3.9.0): Token transformation
- **chroma-js** (^2.4.0): Color manipulation and contrast checking
- **playwright** (^1.40.0): Visual regression testing
- **pixelmatch** (^5.3.0): Image comparison

### Performance Considerations
- CSS custom properties have minimal performance impact
- Token transformation happens at build time (zero runtime cost)
- Theme switching only updates CSS variables (fast DOM operation)
- Maintain current Next.js bundle size by not adding heavy dependencies

## 8. Success Metrics

### Implementation Accuracy
1. **Token Coverage:** 100% of Figma tokens successfully converted and applied
2. **Component Parity:** All 42+ React components updated to use design tokens
3. **Visual Accuracy:** <5% pixel difference in visual regression tests
4. **Color Contrast:** 100% WCAG AA compliance for text/background combinations

### Development Quality
5. **Build Success:** Token build completes without errors or warnings
6. **Type Safety:** Zero TypeScript errors related to token usage
7. **Theme Completeness:** Both day and night modes render correctly across all pages
8. **Responsive Integrity:** Desktop and mobile views match Figma specifications

### User Experience
9. **Theme Switching:** <100ms to apply theme change (perceived as instant)
10. **Page Load:** Maintain current Lighthouse performance score (±5 points)
11. **Visual Consistency:** Zero FOUC (flash of unstyled content) on page load
12. **Accessibility:** Maintain or improve current accessibility score

### Maintainability
13. **Token Update Time:** <5 minutes from Figma export to deployed update
14. **Documentation Coverage:** 100% of tokens and components documented
15. **Developer Onboarding:** New developer can add token-based component in <1 hour
16. **Design Sync:** Figma and code match within 24 hours of design updates

## 9. Open Questions

### Token Export Process
**Q:** What tool should be used to export tokens from Figma?
**Options:**
- A. Tokens Studio (Figma Tokens) plugin - most popular, well-maintained
- B. Figma API script - custom solution, full control
- C. Design Tokens Plugin - simpler, less features
- D. Manual export - time-consuming but foolproof

**Recommendation:** Use Tokens Studio plugin (Option A). It has the best Style Dictionary compatibility and active community support.

### Mobile Breakpoint
**Q:** The tokens include mobile sizes, but what's the exact breakpoint?
**Decision needed:** Should we use 768px (standard tablet breakpoint) or a different value based on Figma frame width?

**Recommendation:** Use 768px as the breakpoint, matching common device sizes. Mobile tokens apply <768px, desktop tokens apply ≥768px.

### Component Approval Workflow
**Q:** How should "need approval for each significant change" work in practice?
**Options:**
- A. Create Figma-vs-Web comparison document for review before implementation
- B. Implement first, then review in staging with revert ability
- C. Incremental reviews (approve primitives, then compounds)
- D. Full implementation, then comprehensive review

**Recommendation:** Option C (Incremental reviews). Approve Button, Card, Badge first. Once primitives are approved, compound components follow naturally.

### Deviation Documentation
**Q:** What constitutes a "significant change" requiring approval?
**Criteria:**
- Layout shifts that affect user workflow
- Color changes that alter brand perception
- Typography changes that impact readability
- Spacing changes that affect information density

**Decision:** Any change visible without zooming in counts as significant. Token-exact matches don't require approval.

### Visual Regression Test Setup
**Q:** Should visual regression tests run in CI/CD or manually?
**Options:**
- A. CI/CD on every PR (slower builds, catches issues early)
- B. Manual run before major releases (faster iteration, risk of missing issues)
- C. CI/CD for main branches only (balanced approach)

**Recommendation:** Option C. Run automated visual tests on commits to main/staging branches, not on every feature branch PR.

### Typography Loading
**Q:** Should Inter and Fira Code be self-hosted or use Google Fonts?
**Options:**
- A. Google Fonts CDN - easier, maintained, fast
- B. Self-hosted - more control, privacy-friendly, no external requests
- C. Next.js font optimization - best of both worlds

**Recommendation:** Option C. Use Next.js `next/font/google` for automatic optimization, subsetting, and self-hosting.

### Token Version Control
**Q:** How should we version design tokens?
**Options:**
- A. Semantic versioning (v1.0.0, v1.1.0) - tracks breaking changes
- B. Date-based (2025-02-17) - matches Figma file updates
- C. No versioning - always use latest

**Recommendation:** Option A (Semantic versioning). Breaking changes (renaming tokens) = major version. New tokens = minor version. Value changes = patch version.

---

**Document Version:** 1.0  
**Created:** 2025-02-17  
**Status:** Ready for Review & Implementation  
**Estimated Implementation Time:** 3-4 weeks  
**Dependencies:** Figma design tokens (already exported), existing portfolio codebase

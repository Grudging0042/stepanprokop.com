# Design Tokens Documentation

## Overview

This project uses a **token-based design system** to maintain visual consistency and enable efficient design updates. Design tokens are the atomic values (colors, typography, spacing, sizing) that define the visual language of our portfolio website.

### Architecture

```
Figma Design System
    ↓ (export JSON)
design-tokens/*.json
    ↓ (Style Dictionary build)
styles/tokens.css (CSS variables)
types/tokens.d.ts (TypeScript types)
    ↓ (consumed by)
Components & Styles
```

### Technology Stack

- **Style Dictionary**: Transforms design tokens from Figma JSON into platform-specific formats
- **CSS Custom Properties**: Runtime-accessible design tokens via CSS variables
- **TypeScript Declarations**: Type-safe token access in TypeScript files
- **Figma Tokens Studio**: Source of truth for design values

---

## Exporting from Figma

### Step-by-Step Token Export Process

1. **Open Figma Design File**
   - Navigate to `stepanprokop.com-2025` design file
   - Ensure you have edit access

2. **Access Figma Tokens Studio Plugin**
   - Open Figma Tokens Studio plugin (if available)
   - Or manually export variable collections as JSON

3. **Export Token Files**
   - Export the following collections:
     - `00--color-tokens.mode.tokens.json` (base color palette)
     - `00--number-tokens.mode.tokens.json` (sizes, weights, constraints)
     - `01--comp-colors.day_mode.tokens.json` (semantic colors for light mode)
     - `01--comp-colors.night_mode.tokens.json` (semantic colors for dark mode)
     - `01--comp-sizes.desktop.tokens.json` (component sizing for desktop)
     - `01--comp-sizes.mobile.tokens.json` (component sizing for mobile)

4. **Save to Project**
   - Place exported JSON files in `/portfolio/design-tokens/`
   - Preserve the naming convention (prefix numbers determine merge order)

5. **Rebuild Tokens**
   ```bash
   npm run build:tokens
   ```

6. **Verify Output**
   - Check `/portfolio/styles/tokens.css` for updated CSS variables
   - Check `/portfolio/types/tokens.d.ts` for TypeScript declarations

---

## Token Categories

### 1. Color Tokens

#### Base Palette (`00--color-tokens`)
A 10-step grayscale system providing the foundation for all semantic colors:

- `--color-1` through `--color-10`: Grayscale from lightest to darkest
- Used as reference values for semantic tokens

#### Semantic Colors (`01--comp-colors`)
Purpose-driven color tokens that adapt to theme:

**Day Mode (Light Theme)**
- Background: `--background-primary`, `--background-secondary`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Surfaces: `--theme-surface-fill`, `--theme-surface-stroke`
- Interactive: `--button-fill`, `--button-content`, `--button-border`

**Night Mode (Dark Theme)**
- Automatically switches via `.dark` class
- Same token names, different values
- Defined in `01--comp-colors.night_mode.tokens.json`

### 2. Typography Tokens

#### Font Families
- `--font-inter`: Primary sans-serif font (Inter, weights: 400, 500, 600)
- `--font-fira-code`: Monospace font for code (Fira Code, weight: 500)

#### Text Styles
Eight predefined text styles with complete typography specifications:

| Style | Size | Line Height | Weight | Letter Spacing | Use Case |
|-------|------|-------------|--------|----------------|----------|
| `headline-1` | 24px (20px mobile) | 28px | 600 | -0.01em | Page titles, hero text |
| `headline-2` | 18px (16px mobile) | 24px | 600 | -0.01em | Section headings |
| `headline-3` | 16px | 24px | 600 | -0.01em | Card titles, sub-headings |
| `body-1` | 18px | 24px | 400 | -0.01em | Large body text, intro paragraphs |
| `body-2` | 16px | 24px | 400 | -0.01em | Standard body text |
| `body-3` | 14px | 18px | 600 | -0.01em | Small emphasized text, labels |
| `body-4` | 12px | 24px | 500 | -0.01em | Metadata, captions |
| `body-code-4` | 12px | 24px | 500 | -0.01em | Inline code, technical labels |

**CSS Usage:**
```css
.text-headline-1 { /* Defined in globals.css */ }
.text-body-2 { /* Defined in globals.css */ }
```

**TypeScript/React Usage:**
```tsx
import { getTextStyleClass, getTextStyleInline } from '@/lib/utils/typography';

// As className
<h1 className={getTextStyleClass('headline-1')}>Title</h1>

// As inline style
<p style={getTextStyleInline('body-2')}>Text</p>
```

### 3. Spacing Tokens

A 5-step spacing scale for consistent layout rhythm:

| Token | Desktop | Mobile | Use Case |
|-------|---------|--------|----------|
| `--spacing-xs` | 6px | 6px | Icon gaps, tight spacing |
| `--spacing-s` | 10px | 10px | Button padding vertical |
| `--spacing-m` | 12px | 12px | Button padding horizontal, badge padding |
| `--spacing-l` | 16px | 16px | Card padding, component gaps |
| `--spacing-xl` | 24px | 16px | Section spacing, large gaps |

**Tailwind Usage:**
```tsx
<div className="gap-4">  {/* 16px = --spacing-l */}
<div className="gap-6">  {/* 24px = --spacing-xl */}
<div className="p-4">    {/* 16px padding */}
```

### 4. Sizing Tokens

#### Border Radius
- `--radius-l`: 6px (buttons, badges, small components)
- `--radius-xxl`: 16px (cards, large containers)

**Tailwind Usage:**
```tsx
<button className="rounded-md">   {/* 6px = --radius-l */}
<div className="rounded-2xl">     {/* 16px = --radius-xxl */}
```

#### Component Sizes
- `--size-size-6`: 24px (badge height)
- `--size-size-9`: 36px (button height)

#### Layout Constraints
- `--screen-max-w`: 692px (maximum content width)
- `--max-width-narrow`: 692px (container constraint)

---

## Updating Tokens

### Process for Design Changes

1. **Update in Figma**
   - Make changes in the Figma design system
   - Update variable collections or token sets

2. **Export New Tokens**
   - Follow the "Exporting from Figma" process above
   - Replace existing JSON files in `/portfolio/design-tokens/`

3. **Rebuild**
   ```bash
   npm run build:tokens
   ```
   This runs Style Dictionary to regenerate CSS and TypeScript files.

4. **Review Changes**
   - Check git diff for `styles/tokens.css` and `types/tokens.d.ts`
   - Verify expected changes are present

5. **Test Locally**
   ```bash
   npm run dev
   ```
   - Test in both light and dark themes
   - Check responsive behavior (mobile/desktop)
   - Verify no visual regressions

6. **Production Build**
   ```bash
   npm run build
   ```
   - Ensure build succeeds
   - No TypeScript or build errors

### Automatic Token Building

Tokens are automatically rebuilt before:
- Development: `npm run dev` (via `predev` script)
- Production: `npm run build` (via `prebuild` script)

You can also rebuild manually:
```bash
npm run build:tokens
```

---

## Token Reference

### Complete Semantic Token List

#### Background Tokens
| Token | Day Mode | Night Mode | Usage |
|-------|----------|------------|-------|
| `--background-primary` | `#ffffff` (color-10) | `#0d0d0d` (color-9) | Page background |
| `--background-secondary` | `#f5f5f5` (color-1) | `#1a1a1a` (color-8) | Alternate surfaces |

#### Text Tokens
| Token | Day Mode | Night Mode | Usage |
|-------|----------|------------|-------|
| `--text-primary` | `#0d0d0d` (color-9) | `#f5f5f5` (color-1) | Primary text, headings |
| `--text-secondary` | `#666666` (color-6) | `#999999` (color-5) | Secondary text, descriptions |
| `--text-tertiary` | `#999999` (color-5) | `#666666` (color-6) | Metadata, captions |

#### Surface Tokens (Cards, Containers)
| Token | Day Mode | Night Mode | Usage |
|-------|----------|------------|-------|
| `--theme-surface-fill` | `#f5f5f5` (color-1) | `#1a1a1a` (color-8) | Card backgrounds |
| `--theme-surface-stroke` | `#e6e6e6` (color-2) | `#262626` (color-7) | Card borders |

#### Button Tokens
| Token | Day Mode | Night Mode | Usage |
|-------|----------|------------|-------|
| `--button-fill` | `#0d0d0d` (color-9) | `#f5f5f5` (color-1) | Button background (default) |
| `--button-content` | `#ffffff` (color-10) | `#0d0d0d` (color-9) | Button text (default) |
| `--button-border` | `#0d0d0d` (color-9) | `#f5f5f5` (color-1) | Button border (outline) |

#### Header/Footer Tokens
| Token | Day Mode | Night Mode | Usage |
|-------|----------|------------|-------|
| `--header-background` | `#ffffff` (color-10) | `#0d0d0d` (color-9) | Header/footer background |
| `--header-border` | `#e6e6e6` (color-2) | `#262626` (color-7) | Header/footer border |

---

## Usage Guidelines

### When to Use Semantic Tokens vs. Direct Values

**✅ DO: Use Semantic Tokens**
```tsx
// Good: Uses theme-aware semantic token
<div className="bg-[var(--theme-surface-fill)]">

// Good: Typography token
<h1 className="text-headline-1">

// Good: Spacing token
<div className="gap-4"> {/* Maps to --spacing-l */}
```

**❌ DON'T: Hardcode Values**
```tsx
// Bad: Hardcoded color that won't adapt to theme
<div className="bg-gray-100">

// Bad: Magic number
<div style={{ fontSize: '18px' }}>

// Bad: Random spacing
<div className="gap-[17px]">
```

### Component-Level Token Usage

#### Buttons
- Dimensions: `h-9` (36px height), `py-3` (12px vertical padding)
- Spacing: `gap-1.5` (6px icon-text gap)
- Radius: `rounded-md` (6px)
- Colors: `--button-fill`, `--button-content`, `--button-border`

#### Cards
- Padding: `p-4` (16px)
- Radius: `rounded-2xl` (16px)
- Spacing: `gap-4` (16px between children)
- Colors: `--theme-surface-fill`, `--theme-surface-stroke`

#### Badges
- Height: `h-6` (24px)
- Padding: `px-3` (12px horizontal)
- Radius: `rounded-md` (6px)
- Typography: `text-xs font-medium` (12px, weight 500)

### Responsive Considerations

**Desktop (≥768px)**
- Use standard token values
- Container max-width: 692px
- Full typography scale

**Mobile (<768px)**
- Typography scales down:
  - `headline-1`: 24px → 20px
  - `headline-2`: 18px → 16px
- Spacing reduces:
  - `spacing-xl`: 24px → 16px
- Container: Full width with 16px padding

### Theme Switching

All semantic tokens automatically update when theme changes:

```tsx
// Component automatically adapts
<div className="bg-[var(--background-primary)] text-[var(--text-primary)]">
  Content adapts to light/dark theme
</div>
```

Transitions are handled globally in `globals.css`:
- Duration: 200ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Properties: background-color, color, border-color

---

## Troubleshooting

### Tokens Not Updating
1. Verify JSON files are in `/portfolio/design-tokens/`
2. Run `npm run build:tokens` manually
3. Check for errors in Style Dictionary output
4. Restart dev server: `npm run dev`

### Build Errors
- Ensure `style-dictionary` and `chroma-js` are installed
- Verify `style-dictionary.config.js` is present
- Check JSON syntax in token files

### Theme Not Switching
- Verify `ThemeProvider` wraps app in `layout.tsx`
- Check `.dark` class is applied to `<html>` element
- Ensure semantic tokens use `var()` references

---

## Additional Resources

- **Figma File**: [stepanprokop.com-2025](https://www.figma.com/design/v1wvTz5efKmCBKsKMfHWUU/stepanprokop.com-2025)
- **Style Dictionary**: [style-dictionary.config.js](/portfolio/style-dictionary.config.js)
- **Typography Utilities**: [lib/utils/typography.ts](/portfolio/lib/utils/typography.ts)
- **Global Styles**: [app/globals.css](/portfolio/app/globals.css)

---

**Last Updated**: February 2026
**Token Version**: 1.0.0
**Design System**: stepanprokop.com 2025

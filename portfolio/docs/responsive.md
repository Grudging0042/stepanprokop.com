# Responsive Design Guide

Overview of the layout behaviour implemented across `app/` and `components/`.

## Table of Contents
- [Breakpoints](#breakpoints)
- [Key Components](#key-components)
- [Utility Classes](#utility-classes)
- [Testing Viewports](#testing-viewports)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)

## Breakpoints
The project relies on Tailwind CSS defaults:

| Viewport | Range | Prefix |
| --- | --- | --- |
| Mobile | 320px – 767px | default (no prefix) |
| Tablet | 768px – 1023px | `md:` |
| Desktop | ≥ 1024px | `lg:` |

## Key Components
### Header (`components/layout/Header.tsx`)
- Mobile: logo plus actions on first row, navigation revealed on second row (`md:hidden`).
- Tablet/Desktop: inline navigation (`hidden md:flex`), CTA + theme toggle on the right.

### Footer (`components/layout/Footer.tsx`)
- Mobile: single-column stack.
- Desktop: four-column grid (`grid-cols-1 md:grid-cols-4`) with contact, links, downloads, copyright.

### Container Helpers
`app/globals.css` defines:
- `.container-narrow` — 644px max width with responsive padding (1rem on small screens).
- `.grid-narrow` — 12-column layout with 16px gutters for inner grids.

## Utility Classes
Common responsive utilities across the app include:
- Display: `hidden md:flex`, `md:hidden`, `flex md:grid`
- Typography: `text-sm md:text-base`, `text-lg md:text-xl`
- Spacing: `md:px-6`, `lg:px-8`, `gap-6 md:gap-8`
- Layout helpers for cards and grids (`grid md:grid-cols-2`, etc.)

## Testing Viewports
1. Run `npm run dev`.
2. Open http://localhost:3000.
3. Use DevTools responsive mode and test:
   - 320–375px (small phones)
   - 768px (iPad portrait)
   - 1024px, 1280px, 1440px (desktops)
4. Confirm:
   - No horizontal scrolling
   - Navigation works at each breakpoint
   - Cards stack and unwrap as expected
   - Footer columns collapse gracefully

## Browser Support
- Chrome / Edge (last two versions)
- Firefox (last two versions)
- Safari (macOS + iOS)
- Chrome Android, Samsung Internet

## Accessibility
- Touch targets ≥ 44px on mobile (verified on CTA buttons and nav items).
- Theme toggle (`components/theme/ThemeToggle.tsx`) persists using `next-themes` local storage.
- Layout changes do not hide keyboard focus indicators.
- Copy ensures sufficient contrast in both light and dark themes.

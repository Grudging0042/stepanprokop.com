# Testing Checklist

Manual verification steps before deploying changes to production.

## Table of Contents
- [Responsive Checks](#responsive-checks)
- [Theme Persistence](#theme-persistence)
- [Navigation](#navigation)
- [External Links](#external-links)
- [Supported Browsers](#supported-browsers)
- [Performance Spot Checks](#performance-spot-checks)
- [Automation Helpers](#automation-helpers)
- [Bug Report Template](#bug-report-template)

## Responsive Checks
Test at 320–375px (small phones), 768px (tablet), and ≥1024px (desktop):
- Text remains readable without zoom.
- Touch targets and buttons meet 44px minimum.
- No horizontal scroll bars.
- Cards stack on mobile and form two-plus columns on tablet/desktop.
- Footer collapses from four columns to one column.

## Theme Persistence
`components/theme/ThemeToggle.tsx` uses `next-themes`.
1. Load the site in a fresh session; default theme matches system preference.
2. Toggle to dark mode. Navigate between pages and refresh — theme should persist.
3. Open a new tab/window — theme persists.
4. Repeat with light mode.
5. Optional: run `localStorage.getItem('theme')` in DevTools to confirm stored value.

## Navigation
### Header
- Logo/title routes to `/`.
- “Projects”, “Components”, “Blog” links hit their respective routes.
- “Book a call” external link opens in a new tab.

### Footer
- Email (`mailto:`) and phone (`tel:`) links function.
- External profiles (LinkedIn, Layers, Rive, Figma, X) open in new tabs with safe `rel` attributes.
- CV download works (`public/cv.pdf.txt` placeholder should become a real PDF before launch).

### Cards & Detail Pages
- Project, component, and blog cards navigate to their detail pages.
- Back buttons on detail screens return to listings.
- Component code blocks render and copy buttons work (`components/code/CodeBlock.tsx`).

## External Links
Run in DevTools console to confirm `rel="noopener noreferrer"`:
```javascript
Array.from(document.querySelectorAll('a[target="_blank"]')).filter(
  (link) => !link.rel.includes('noopener')
);
```
Expect an empty array.

## Supported Browsers
- Desktop: Chrome, Safari, Firefox, Edge
- Mobile: Safari iOS, Chrome Android, Samsung Internet
Test keyboard navigation (Tab/Shift+Tab/Enter/Space) on at least one desktop browser.

## Performance Spot Checks
- `npm run lighthouse` (or DevTools Lighthouse tab) should score ≥90 in all categories.
- Observe for layout shift during navigation (View Transitions handled in CSS).
- Confirm analytics events arrive in Umami dashboard.

## Automation Helpers
```bash
npm run lint   # ESLint
npm run build  # TypeScript + Next.js build
# To add Lighthouse locally, see docs/lighthouse.md for optional scripts.
```

## Bug Report Template
```
### Bug: <summary>
Page: /example
Browser & Device: Chrome 120 on iPhone 14 Pro

Steps to Reproduce:
1. ...
2. ...
3. ...

Expected:
Actual:
Screenshots / Logs:
```

# View Transitions API

The project enables native View Transitions for smoother page navigation. This document matches the current implementation in `components/transitions/` and `app/globals.css`.

## Table of Contents
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Styling](#styling)
- [Support & Fallbacks](#support--fallbacks)
- [Troubleshooting](#troubleshooting)
- [Further Ideas](#further-ideas)

## How It Works
- `ViewTransitionsProvider` (client component) detects support and flags `window.__VIEW_TRANSITIONS_SUPPORTED__`.
- `TransitionLink` wraps `next/link`, intercepts clicks, and calls `document.startViewTransition` when available.
- `useTransitionRouter` exposes `router.push` / `router.replace` with the same transition behaviour.
- Global CSS in `app/globals.css` assigns `view-transition-name: main-content` to `<main>` and defines fade animations.

## Usage
### Links
```tsx
import { TransitionLink } from "@/components/transitions/TransitionLink";

<TransitionLink href="/projects">Projects</TransitionLink>
```
Automatically respects modifier keys, external URLs, and falls back to standard navigation when unsupported.

### Programmatic Routing
```tsx
"use client";
import { useTransitionRouter } from "@/components/transitions/useTransitionRouter";

const router = useTransitionRouter();
router.push("/components");
```

### Provider
`app/layout.tsx` wraps the app with `ViewTransitionsProvider`, so no extra setup is required when adding new pages.

## Styling
`app/globals.css` contains the default fade transition:
```css
@supports (view-transition-name: none) {
  main { view-transition-name: main-content; }

  ::view-transition-old(main-content),
  ::view-transition-new(main-content) {
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  ::view-transition-old(main-content) { animation-name: fade-out; }
  ::view-transition-new(main-content) { animation-name: fade-in; }
}
```
You can extend this with additional transition names (e.g. for headers) or different keyframes.

## Support & Fallbacks
- Fully supported: Chrome 111+, Edge 111+, Opera 97+
- Safari and Firefox currently fall back to instant navigation.
- Users with reduced motion preferences get near-instant transitions (`prefers-reduced-motion: reduce`).

## Troubleshooting
- **No transition:** ensure `<main>` retains `view-transition-name` and the provider runs only on the client.
- **External links opening weirdly:** `TransitionLink` ignores URLs starting with `http`.
- **Animations feel sluggish:** shorten `animation-duration` or stick to transform/opacity keyframes.
- **Need to disable for a component:** apply `view-transition-name: none` to the element or use a regular `Link`.

## Further Ideas
- Vary transitions by route (`document.documentElement.dataset.transition = "slide"`).
- Add progress indicators during long transitions.
- Explore shared-element transitions once the API stabilises across browsers.

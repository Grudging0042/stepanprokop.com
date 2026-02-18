# Lighthouse Performance Audits

Guidelines for running and interpreting Lighthouse audits for the portfolio.

## Table of Contents
- [Running Lighthouse](#running-lighthouse)
- [What to Watch](#what-to-watch)
- [Accessibility & SEO](#accessibility--seo)
- [Best Practices](#best-practices)
- [Automation](#automation)
- [Continuous Monitoring](#continuous-monitoring)
- [Resources](#resources)

## Running Lighthouse
### Chrome DevTools (Recommended)
1. Open the site in Chrome.
2. DevTools → Lighthouse tab.
3. Audit categories: Performance, Accessibility, Best Practices, SEO.
4. Test both Mobile and Desktop modes.

### Command Line
```bash
npm install -g lighthouse
lighthouse https://portfolio.stepanprokop.com \
  --output html --output-path ./lighthouse-report.html
```
Repeat for core routes (`/projects`, `/components`, `/blog`).

### PageSpeed Insights
Visit https://pagespeed.web.dev/ for quick remote runs.

## What to Watch
- **First Contentful Paint (FCP):** target < 1.8s — check fonts and critical CSS.
- **Largest Contentful Paint (LCP):** target < 2.5s — optimize hero images.
- **Cumulative Layout Shift (CLS):** target < 0.1 — ensure image dimensions and view transitions avoid layout jumps.
- **Total Blocking Time (TBT):** target < 200ms — watch long JS tasks.

Image optimisation uses the Next.js `<Image>` component with AVIF/WebP enabled in `next.config.ts`, so major regressions often stem from oversized source assets.

## Accessibility & SEO
- Single `<h1>` per page (layouts enforce this).
- Provide descriptive `alt` text in MDX frontmatter.
- Metadata helpers in `lib/metadata.ts` populate Open Graph/Twitter tags.
- `app/sitemap.ts` & `app/robots.ts` generate essentials.

## Best Practices
- HTTPS enforced via Cloudflare.
- No console errors during navigation.
- External links use `rel="noopener noreferrer"` (see docs/testing.md).
- View Transitions use transform/opacity animations for GPU-friendly fades.

## Automation
Optional helper scripts you can add to `package.json`:
```json
{
  "scripts": {
    "lighthouse": "lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html --view",
    "lighthouse:ci": "lighthouse http://localhost:3000 --output json --output-path ./lighthouse-report.json"
  }
}
```
Run locally after `npm run build && npm start`.

## Continuous Monitoring
- Consider Lighthouse CI or production Web Vitals if regressions become frequent.
- Use Umami analytics to correlate real user performance trends.

## Resources
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

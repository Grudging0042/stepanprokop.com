# Placeholder Assets

Current asset layout and guidance for supplying production-ready images and videos.

## Table of Contents
- [Current Structure](#current-structure)
- [Recommended Sources](#recommended-sources)
- [Specifications](#specifications)
- [Videos](#videos)
- [Setup Script](#setup-script)
- [Copyright](#copyright)
- [Accessibility](#accessibility)

## Current Structure
```
public/
  images/
    blog/
      esp32/
        esp32_c6_super_mini.png
        GY-BMI160.png
        SSD1306.png
      test.avif
    placeholder.webp
    projects/            # ready for future project screenshots
  videos/
    projects/            # ready for project demo clips
```
Content in `content/` references the `blog/test.avif` placeholder and project carousel entries, so update those paths if you add new media.

## Recommended Sources
- **Unsplash / Pexels** for high-quality, production-ready screenshots.
- **Placeholder.com** or `https://via.placeholder.com/` for quick development stubs.
- **Figma exports** for custom UI mockups.

## Specifications
| Asset | Suggested Resolution | Format | Notes |
| --- | --- | --- | --- |
| Project hero images | ≥ 1600×1000 | JPG/PNG | Optimise to < 500 KB. |
| Blog thumbnails | 1200×630 | JPG | Matches Open Graph requirements. |
| Component previews | 800×600 | PNG | Keeps UI crisp. |

Next.js image optimisation (`next.config.ts`) automatically converts to WebP/AVIF at runtime.

## Videos
- Format: MP4 (H.264)
- Resolution: 1920×1080 (or smaller if appropriate)
- Duration: 15–30 seconds loop
- Size: < 5 MB (use `ffmpeg` with `-crf 22 -preset slow`)
- Always provide a poster image for `<video>` tags.

## Setup Script
```bash
mkdir -p public/images/{projects,components,blog} public/videos/projects
# Example download
# curl -o public/images/projects/fintech-app/hero.jpg "https://via.placeholder.com/1600x1000"
```

## Copyright
Ensure you have rights to publish every asset:
- ✅ Your own work or client work with permission
- ✅ Licences that allow commercial use (Unsplash, Pexels)
- ❌ Random Google Images or Dribbble shots without consent

## Accessibility
- Every MDX carousel entry includes an `alt` description.
- Keep descriptions concise (≤150 characters) but meaningful for screen reader users.

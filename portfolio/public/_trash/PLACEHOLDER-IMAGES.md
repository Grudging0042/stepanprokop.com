# Placeholder Images Guide

This document explains the image structure needed for the portfolio content.

## Required Images

### Projects

#### Example Project (E-commerce Platform)
- `/images/projects/example-project/hero.jpg` - Homepage redesign
- `/images/projects/example-project/mobile.jpg` - Mobile checkout flow
- `/images/projects/example-project/dashboard.jpg` - User dashboard interface
- `/images/projects/example-project/video-poster.jpg` - Video poster frame
- `/videos/projects/example-project/demo.mp4` - Interactive prototype demo

#### Fintech App
- `/images/projects/fintech-app/hero.jpg` - Dashboard overview
- `/images/projects/fintech-app/onboarding.jpg` - Onboarding flow
- `/images/projects/fintech-app/investment-details.jpg` - Investment screen

#### SaaS Dashboard
- `/images/projects/saas-dashboard/overview.jpg` - Dashboard overview
- `/images/projects/saas-dashboard/filters.jpg` - Filtering interface
- `/images/projects/saas-dashboard/reports.jpg` - Report builder

### Components

#### Data Table
- `/images/components/data-table-preview.jpg` - Table with sorting/filtering

### Blog

- `/images/blog/design-systems-evolution.jpg` - Design systems article thumbnail
- `/images/blog/figma-to-code.jpg` - Figma to code article thumbnail
- `/images/blog/mobile-first.jpg` - Mobile-first design article thumbnail

## Using Placeholder Services

### Option 1: Unsplash (Recommended for Production)

Use high-quality, free images from Unsplash:

```
https://images.unsplash.com/photo-[id]?w=1200&q=80
```

Suggested searches:
- "dashboard ui" - For SaaS/Analytics projects
- "mobile app" - For app mockups
- "ecommerce website" - For online store designs
- "design system" - For design-related content

### Option 2: placeholder.com (Quick Testing)

For quick development testing:

```
https://via.placeholder.com/1200x800/3B82F6/FFFFFF?text=Project+Hero
```

### Option 3: Local Screenshots

Take screenshots from:
- Your own projects (if you have rights)
- Dribbble/Behance (for inspiration, not production)
- Create mockups in Figma

## Image Specifications

### Project Images
- **Resolution**: 1200x800px minimum (1920x1280px recommended)
- **Format**: JPG (for photos), PNG (for UI screenshots)
- **Quality**: 80-90%
- **File size**: <500KB per image (use compression)

### Blog Thumbnails
- **Resolution**: 1200x630px (Open Graph standard)
- **Format**: JPG
- **Quality**: 85%
- **File size**: <200KB

### Component Previews
- **Resolution**: 800x600px
- **Format**: PNG (preserves UI sharpness)
- **Quality**: 90%
- **File size**: <300KB

## Videos

### Project Videos
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080px (Full HD)
- **Duration**: 15-30 seconds (short loops work best)
- **File size**: <5MB (use compression)
- **Poster image**: Always include a poster frame

### Encoding Videos

Use FFmpeg to optimize:

```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 22 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  output.mp4
```

## Quick Setup Script

Run this to create placeholder structure:

```bash
# Create directories
mkdir -p public/images/{projects/{example-project,fintech-app,saas-dashboard},components,blog}
mkdir -p public/videos/projects/example-project

# Download placeholders (example)
# curl -o public/images/projects/example-project/hero.jpg "https://via.placeholder.com/1200x800"
```

## Next.js Image Optimization

All images will be automatically optimized by Next.js:
- Converted to WebP/AVIF
- Resized for different screen sizes
- Lazy-loaded by default

No need to manually create multiple sizes!

## Copyright Notice

**Important**: Ensure you have rights to use all images. For portfolio work:
- ✅ Your own project screenshots (with client permission)
- ✅ Mockups created by you
- ✅ Unsplash/Pexels (free license)
- ❌ Google Images (often copyrighted)
- ❌ Dribbble shots (without permission)
- ❌ Client work (without NDA clearance)

## Accessibility

All images MUST have descriptive alt text. This is already defined in the MDX frontmatter:

```yaml
carousel:
  - type: "image"
    url: "/images/projects/example-project/hero.jpg"
    alt: "E-commerce homepage redesign showing product grid and navigation"
```

Make alt text:
- **Descriptive** - Explain what's shown
- **Concise** - 100-150 characters max
- **Informative** - Help screen reader users understand content
- **Not redundant** - Don't start with "Image of..."




# Portfolio

Next.js 16 (App Router) portfolio for Štěpán Prokop with MDX-driven content, dark/light theming, and native View Transitions.

## Tech Stack
- Next.js 16 with React 19 and TypeScript
- MDX content pipeline (`content/` + custom components in `mdx-components.tsx`)
- Tailwind CSS v4 utilities with custom CSS tokens in `app/globals.css`
- next-themes for colour mode persistence
- Embla carousel & custom analytics helpers

## Design Tokens & Theming
- Base colours mirror the Figma `export.json` file. They live as `--color-*` custom properties in `app/globals.css` and are the only source of truth for colour values.
- Day/Night semantics (`--theme-text-*`, `--theme-button-*`, etc.) translate the Figma component tokens into `:root` and `.dark` scopes. Tailwind utilities (e.g. `bg-background`, `text-foreground`, `bg-[color:var(--color-button-fill)]`) resolve back to these semantics via the `@theme inline` block.
- UI components and MDX examples must never introduce raw hex values or Tailwind palette colours—always use the provided tokens (`bg-background`, `text-muted-foreground`, `border`, `text-primary`, etc.) or the exported semantic helpers like `--color-button-*`.
- When adding a new component, map any missing semantic token in `app/globals.css` first, then consume it via Tailwind utilities so light/dark themes stay in sync.
- Typography is standardised on Inter for sans-serif and Fira Code for mono. Both are loaded through `next/font` in `app/layout.tsx` and exposed via `--font-sans` / `--font-mono`.

## Project Structure
```
app/             # Routes, layouts, and loading/error boundaries
components/      # UI building blocks (cards, navigation, transitions, etc.)
content/         # MDX sources for blog posts, projects, component docs
docs/            # Detailed documentation (deployment, testing, styling, ...)
lib/             # Metadata, content loading, analytics helpers
public/          # Static assets (images, videos, CV placeholder)
```

## Development
```bash
npm install      # install dependencies
npm run dev      # start local dev server on http://localhost:3000
npm run build    # production build (also runs type checks)
npm start        # serve the production build (respects PORT, defaults to 3000 locally)
```

## Deployment
The production container runs on port **3300** (see `nixpacks.toml`). For Coolify/Cloudflare details and troubleshooting tips, read:
- [docs/deployment.md](docs/deployment.md)
- [docs/deployment-fix.md](docs/deployment-fix.md)

## Documentation
Additional guides live under `/docs`:
- [docs/responsive.md](docs/responsive.md)
- [docs/testing.md](docs/testing.md)
- [docs/lighthouse.md](docs/lighthouse.md)
- [docs/view-transitions.md](docs/view-transitions.md)
- [docs/mdx-style-guide.md](docs/mdx-style-guide.md)
- [docs/naming.md](docs/naming.md)
- [docs/placeholder-assets.md](docs/placeholder-assets.md)

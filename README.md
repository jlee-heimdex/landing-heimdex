# HEIMDEX Landing Page

Production-grade, fully containerized Next.js landing page for HEIMDEX with bilingual support (Korean/English) and Docker-first development workflow.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling following groundtruth-ui.md design spec
- **Bilingual i18n** (Korean/English) with path-based routing (`/ko/*`, `/en/*`)
- **Fully Dockerized** development and production workflows
- **SEO Optimized** with metadata, sitemap, robots.txt, and OG images
- **Vercel-Ready** deployment (no Docker required for deployment)

## Content Structure

All page content is sourced from markdown files in the root directory:

- `landing-main-content.md` / `landing-main-content.en.md` - Home page content
- `landing-company-content.md` / `landing-company-content.en.md` - Company page
- `landing-product-entertainment-content.md` / `landing-product-entertainment-content.en.md` - Product page
- `groundtruth-ui.md` - Design system specification

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- (Optional) Node.js 20+ for local development

### Docker Development (Recommended)

```bash
# Start development server with hot reload
make dev

# Or using docker compose directly
docker compose up web-dev
```

Visit http://localhost:3000

The development server will automatically reload when you edit files.

### Local Development (Without Docker)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

## Available Commands

### Via Makefile (Docker)

```bash
make help          # Show all available commands
make dev           # Start development server (http://localhost:3000)
make lint          # Run ESLint
make typecheck     # Run TypeScript type checking
make build         # Build the Next.js app
make prod          # Build and run production server (http://localhost:3001)
make stop          # Stop all containers
make clean         # Remove containers, volumes, and build artifacts
```

### Via npm (Local)

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
npm test           # Run Jest tests
npm run test:watch # Run tests in watch mode
```

## Pages and Routes

All routes are prefixed with locale (`/ko` or `/en`):

- `/` → redirects to `/ko` (default locale)
- `/ko` - Korean home page
- `/en` - English home page
- `/ko/company` - Company page (Korean)
- `/en/company` - Company page (English)
- `/ko/product/entertainment` - Product page (Korean)
- `/en/product/entertainment` - Product page (English)
- `/ko/pricing` - **NEW: Single-plan pricing page** (Korean)
- `/en/pricing` - **NEW: Single-plan pricing page** (English)
- `/ko/contact` - Contact page (Korean)
- `/en/contact` - Contact page (English)

Language switcher in navigation preserves the current route.

### Pricing Page Features

The pricing page presents a single "HEIMDEX Access" plan with:
- Workflow-based custom quote positioning (no numeric price)
- Complete feature list (automated processing, hybrid search, exports, analytics)
- Collapsible pricing factors accordion (volume, search usage, deployment)
- Trust section (privacy, customization, transparency)
- Primary CTA: "Arrange a call with Heimdex" → `/contact`

## Project Structure

```
.
├── app/
│   ├── [locale]/              # Locale-based routes
│   │   ├── layout.tsx         # Locale layout with nav/footer
│   │   ├── page.tsx           # Home page
│   │   ├── company/
│   │   ├── product/entertainment/
│   │   ├── pricing/
│   │   └── contact/
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles + design system
│   ├── sitemap.ts             # Dynamic sitemap
│   └── robots.ts              # Robots.txt
├── components/
│   ├── Navigation.tsx         # Top navigation with language switcher
│   ├── Footer.tsx             # Footer
│   └── sections/              # Reusable section components
├── lib/
│   ├── types.ts               # Locale types
│   └── i18n.ts                # i18n utilities
├── content/
│   ├── schema.ts              # Content type definitions
│   ├── loaders.ts             # Content loading logic
│   └── map.ts                 # Route-to-content mapping
├── public/                    # Static assets
├── landing-heimdex/           # Markdown content files (source of truth)
├── Dockerfile                 # Production multi-stage build
├── Dockerfile.dev             # Development with hot reload
├── docker-compose.yml         # Docker services configuration
├── Makefile                   # Command shortcuts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Docker Workflows

### Development

```bash
# Start dev server with hot reload
docker compose up web-dev

# Run in background
docker compose up -d web-dev

# View logs
docker compose logs -f web-dev

# Stop
docker compose down
```

### Production

```bash
# Build and run production image
docker compose up --build web-prod

# Runs on http://localhost:3001 (different port so dev + prod can coexist)
```

### Running Commands

```bash
# Lint
docker compose run --rm web-dev npm run lint

# Type check
docker compose run --rm web-dev npm run typecheck

# Build
docker compose run --rm web-dev npm run build

# Install new dependency
docker compose run --rm web-dev npm install <package-name>
```

## Deployment to Vercel

This project is Vercel-ready and requires no Docker for deployment:

1. Push code to GitHub
2. Connect repo to Vercel
3. Deploy (Vercel will auto-detect Next.js and build)

No environment variables are required.

## Design System

The UI follows the design spec in `groundtruth-ui.md`:

- **Colors**: Dark theme with cyan/violet/pink gradient accents
- **Typography**: Outfit font family (Google Fonts)
- **Components**: Button variants (primary, secondary, gradient), cards with hover states, gradient text
- **Animations**: Slide-up, fade-in, float (for background orbs)

See `app/globals.css` for the complete design system implementation.

## Content Management

To update page content:

1. Edit the relevant markdown file in the root directory
2. For Korean: `landing-main-content.md`, `landing-company-content.md`, etc.
3. For English: `landing-main-content.en.md`, `landing-company-content.en.md`, etc.
4. Content is loaded at build time (no rebuild needed for dev server with hot reload)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox

## Performance

- Server Components by default (no unnecessary client JS)
- Optimized font loading via Google Fonts
- Tailwind CSS purging for minimal CSS bundle
- Static generation for all pages

## License

© 2025 HEIMDEX. All rights reserved.

## Support

Email: heimdex@heimdex.co
Website: heimdex.co

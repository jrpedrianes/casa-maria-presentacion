# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page multilingual website for "Casa María Presentación", a rural house rental in Garafía, La Palma. Built as a sibling project to [Casitas Rosheli](https://casitasrosheli.com) — same owner, shared email (info@casitasrosheli.com).

## Commands

```bash
pnpm dev            # Start dev server (Turbopack)
pnpm build          # Production build
pnpm clean          # Remove .next cache
pnpm lint           # ESLint check
pnpm lint:write     # Auto-fix ESLint
pnpm format         # Prettier check
pnpm format:write   # Auto-format
pnpm check          # lint + format
```

Node 24.13.1 and pnpm 10.29.2 are managed via `mise.toml`.

## Architecture

**Stack:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4 + next-intl + Embla Carousel + Lucide Icons

**i18n:** Three locales (es/en/de), Spanish default. `localePrefix: 'always'` means all URLs include locale (`/es`, `/en`, `/de`). Translations live in `messages/{locale}.json` organized by namespace. The `proxy.ts` middleware handles locale detection and routing.

**Routing:**

- `/[locale]/` — Home (single-page scroll: Hero → Gallery → Features × 2 → Amenities → Promo → Contact)
- `/[locale]/legal` — Legal notice & privacy policy

**Component conventions:**

- `'use client'` only on interactive components (Header, Gallery, Lightbox, LanguageSwitcher, Amenities)
- Server components for everything else
- `Features.tsx` exports two components: `FeatureGarafia` + `FeatureCasa`
- Testimonials section exists but is commented out in `page.tsx` until real reviews are available

**Styling:** Custom green/amber color palette defined in `app/globals.css` via Tailwind v4 `@theme` directive. Primary = forest green (#16a34a), Accent = warm amber (#eab308).

**SEO:** Per-locale metadata with canonical URLs and alternates generated in `app/[locale]/layout.tsx`. Sitemap at `app/sitemap.ts`. Domain: `casamariapresentacion.com`.

**Gallery:** 26 images in `public/img/gallery/` (gallery-1.jpg to gallery-26.jpg). Hero uses gallery-7.jpg. Garafía feature section uses an Unsplash image (`garafia-starlight.jpg`) with photo credit.

## Key Patterns

- Booking buttons link to `#contact` (no external booking portal)
- Cross-promotion to Casitas Rosheli via `PromoRosheli` component
- Language preference stored in `NEXT_LOCALE` cookie (1 year expiry)
- `LegalContent.tsx` contains all legal text inline (not from translation files) since it's long-form legal content per locale
- `pnpm-workspace.yaml` with `onlyBuiltDependencies` is required for Vercel deployment (sharp, @swc/core)

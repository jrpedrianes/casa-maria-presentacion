# AGENTS.md

## Commands

```bash
pnpm dev               # Dev server (Turbopack)
pnpm build             # Production build
pnpm lint              # ESLint (flat config, simple-import-sort)
pnpm lint:write        # ESLint --fix
pnpm format            # Prettier check (semi:false, singleQuote, printWidth:100)
pnpm format:write      # Prettier --write
pnpm check             # lint + format (must pass before commit)
pnpm clean             # rm -rf .next
```

No test framework or typecheck script exists. `pnpm check` is the only pre-commit gate.

## Architecture

- **Stack:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript 6 + Tailwind v4 + next-intl + Embla Carousel + Lucide
- **i18n:** 3 locales (es/en/de), Spanish default. `localePrefix: 'always'` — all URLs include locale prefix.
- **Routes:** `/[locale]/` (single-page: Hero → Gallery → Features × 2 → Amenities → Promo → Contact) and `/[locale]/legal`
- **Middleware:** `proxy.ts` at root — next-intl middleware for locale routing
- **Locale layout** is `app/[locale]/layout.tsx` (root `app/layout.tsx` is a pass-through)
- **`'use client'`** only on: Header, Gallery, Lightbox, LanguageSwitcher, Amenities. Everything else is a server component.

## Key Conventions

- **Tailwind v4:** CSS-first config — `@theme` directive in `app/globals.css`, **no** `tailwind.config.ts`. Custom colors: `primary-*` (green/#16a34a) and `accent-*` (amber/#eab308).
- **Import ordering:** Enforced by `eslint-plugin-simple-import-sort` — grouped: external libs → internal `@/*` → relative. Let `lint:write` auto-fix.
- **Path alias:** `@/*` maps to project root (e.g. `@/components/Hero`, `@/i18n/routing`)
- **Translations:** `messages/{locale}.json` organized by namespace. Loaded dynamically in `i18n/request.ts`.
- **Legal content:** `LegalContent.tsx` has inline locale-specific JSX (not in translation files).
- **Gallery:** 26 images in `public/img/gallery/gallery-{1..26}.jpg`. Hero uses `gallery-7.jpg`.
- **Testimonials section** is commented out in `page.tsx` — not in use.
- **Cross-promotion:** `PromoRosheli` component links to casitasrosheli.com (same owner, shared email info@casitasrosheli.com)
- **Locale cookie:** `NEXT_LOCALE` (1 year expiry), set by `LanguageSwitcher`
- **pnpm-workspace.yaml** is a single-package workspace — `allowBuilds: false` prevents Vercel build failures for sharp/@swc/core

## Operational Notes

- `pnpm dev` uses Turbopack — no webpack config. Dev server at `http://localhost:3000`.
- Static export is **not possible** — next-intl middleware requires a server.
- Deployed on Vercel. Push to `main` auto-deploys. Domain: `casamariapresentacion.com`.
- Node 24.16.0 + pnpm 11.4.0 managed via `mise.toml` (`mise install`).
- `eslint.config.mjs` uses flat config (not `.eslintrc`).

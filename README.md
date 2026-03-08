# Casa María Presentación

Vacation rental website for Casa María Presentación in La Palma, Canary Islands.

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **UI**: React 19
- **Styling**: Tailwind CSS v4 (CSS-first)
- **i18n**: next-intl v4 (es, en, de)
- **TypeScript**: v5.9 (strict mode)
- **Icons**: Lucide React
- **Carousel**: Embla Carousel v8

## Getting Started

```bash
mise install          # Node 24.13.1 + pnpm 10.29.2
pnpm install          # Install dependencies
pnpm run dev          # http://localhost:3000
```

## Scripts

```bash
pnpm run dev          # Development server
pnpm run build        # Production build
pnpm start            # Production server
pnpm run lint         # ESLint
pnpm run lint:write   # ESLint auto-fix
pnpm run format       # Prettier check
pnpm run format:write # Prettier auto-fix
pnpm run check        # Lint + format
pnpm run clean        # Delete .next cache
```

## Deploy on Vercel

Deployed on Vercel. Every push to `main` triggers automatic deployment.

Domain: [casamariapresentacion.com](https://casamariapresentacion.com)

### Custom Domain Setup

1. Go to your project settings in Vercel > Domains
2. Add your domain — it will show "Invalid configuration"
3. In your domain registrar (e.g. GoDaddy), change the nameservers to:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

4. Once the nameservers propagate, click "Refresh" in Vercel to verify

## Static Export (CDN)

Next.js supports static export via `output: 'export'` in `next.config.ts`, but this project currently
cannot use it because the next-intl middleware (`proxy.ts`) requires a server. To enable static export
you would need to remove the middleware and handle locale detection/redirection on the client side.

## License

All rights reserved - Casa María Presentación

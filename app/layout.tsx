import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casa María Presentación - Casa Rural en Garafía, La Palma',
  description:
    'Casa rural centenaria de piedra volcánica en El Castillo, Garafía, La Palma. Más de 100 años de historia familiar rodeada de naturaleza.',
  keywords:
    'La Palma, casa rural, Garafía, El Castillo, piedra volcánica, Casa María Presentación, Canarias',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#16a34a' }],
  },
  openGraph: {
    title: 'Casa María Presentación - Garafía, La Palma',
    description: 'Casa rural centenaria de piedra volcánica en El Castillo, Garafía, La Palma',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#16a34a',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}

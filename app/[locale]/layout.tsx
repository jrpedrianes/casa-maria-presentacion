import '../globals.css'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { routing } from '@/i18n/routing'

const baseUrl = 'https://casamariapresentacion.com'

const metadata: Record<string, { title: string; description: string; keywords: string }> = {
  es: {
    title: 'Casa María Presentación - Casa Rural en Garafía, La Palma',
    description:
      'Casa rural centenaria de piedra volcánica en El Castillo, Garafía, La Palma. Más de 100 años de historia familiar rodeada de naturaleza.',
    keywords:
      'La Palma, casa rural, Garafía, El Castillo, piedra volcánica, Casa María Presentación, Canarias',
  },
  en: {
    title: 'Casa María Presentación - Rural House in Garafía, La Palma',
    description:
      'Centenary volcanic stone rural house in El Castillo, Garafía, La Palma. Over 100 years of family history surrounded by nature.',
    keywords:
      'La Palma, rural house, Garafía, El Castillo, volcanic stone, Casa María Presentación, Canary Islands',
  },
  de: {
    title: 'Casa María Presentación - Landhaus in Garafía, La Palma',
    description:
      'Hundertjähriges Landhaus aus Vulkanstein in El Castillo, Garafía, La Palma. Über 100 Jahre Familiengeschichte umgeben von Natur.',
    keywords:
      'La Palma, Landhaus, Garafía, El Castillo, Vulkanstein, Casa María Presentación, Kanarische Inseln',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { title, description, keywords } = metadata[locale] ?? metadata.es

  return {
    title,
    description,
    keywords,
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
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${baseUrl}/${l}`])),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${baseUrl}/${locale}`,
    },
    other: {
      'msapplication-TileColor': '#16a34a',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

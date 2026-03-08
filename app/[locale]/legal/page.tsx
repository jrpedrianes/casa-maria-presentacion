import { setRequestLocale } from 'next-intl/server'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LegalContent } from '@/components/LegalContent'

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main className="pt-20">
        <LegalContent />
      </main>
      <Footer />
    </>
  )
}

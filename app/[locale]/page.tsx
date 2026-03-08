import { setRequestLocale } from 'next-intl/server'

import { Amenities } from '@/components/Amenities'
import { Contact } from '@/components/Contact'
import { FeatureCasa, FeatureGarafia } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PromoRosheli } from '@/components/PromoRosheli'
import { Testimonials } from '@/components/Testimonials'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <FeatureGarafia />
        <FeatureCasa />
        <Amenities />
        <Testimonials />
        <PromoRosheli />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

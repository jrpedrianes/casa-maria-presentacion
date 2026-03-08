import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FeatureGarafia() {
  const t = useTranslations('features.garafia')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/img/gallery/gallery-1.jpg"
              alt="Garafía, La Palma"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('title')}</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>{t('description1')}</p>
              <p>{t('description2')}</p>
              <p>{t('description3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FeatureCasa() {
  const t = useTranslations('features.casa')

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('title')}</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>{t('description1')}</p>
              <p>{t('description2')}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/img/gallery/gallery-10.jpg"
              alt="Casa María Presentación"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

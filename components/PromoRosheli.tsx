import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function PromoRosheli() {
  const t = useTranslations('promo')

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <a
            href="https://casitasrosheli.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group lg:col-span-2"
          >
            <Image
              src="/img/rosheli-preview.jpg"
              alt="Casitas Rosheli"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
            <p className="text-lg text-gray-700">{t('description')}</p>
            <a
              href="https://casitasrosheli.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              {t('button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

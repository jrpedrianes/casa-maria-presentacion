import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/gallery/gallery-7.jpg"
          alt="Casa María Presentación"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn">
          {t('title')}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 animate-fadeIn drop-shadow-lg">
          {t('subtitle')}
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-12 animate-fadeIn drop-shadow-lg">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            {t('bookButton')}
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border-2 border-white/30 font-semibold text-lg"
          >
            {t('viewGallery')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  )
}

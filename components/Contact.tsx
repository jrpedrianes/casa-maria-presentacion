import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { WhatsAppIcon } from './icons/WhatsAppIcon'

export function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">{t('description')}</p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600" aria-label={t('email')} size={24} />
                </div>
                <div>
                  <a
                    href="mailto:info@casitasrosheli.com"
                    className="text-lg font-medium text-primary-600 hover:text-primary-700"
                  >
                    info@casitasrosheli.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('managedBy')}{' '}
                    <a
                      href="https://casitasrosheli.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      Casitas Rosheli
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-600" aria-label={t('phone')} size={24} />
                </div>
                <a href="tel:+34686738087" className="text-lg font-medium text-primary-600 hover:text-primary-700">
                  +34 686 73 80 87
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/34686738087?text=${encodeURIComponent(t('whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {t('cta')}
            </a>
          </div>

          {/* Map Link */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-lg">
            <a
              href="https://maps.app.goo.gl/42PTdLP8sgbiwXnZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full group relative"
            >
              <Image
                src="/img/map-preview.png"
                alt="Mapa de ubicación - Casa María Presentación"
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <MapPin className="text-primary-600" size={32} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

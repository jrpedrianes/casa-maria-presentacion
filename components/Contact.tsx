import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

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
            <p className="text-lg text-gray-700">{t('description')}</p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('address')}</h3>
                  <p className="text-gray-700">
                    {t('addressLine1')}
                    <br />
                    {t('addressLine2')}
                    <br />
                    {t('addressLine3')}
                    <br />
                    {t('addressLine4')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('email')}</h3>
                  <a
                    href="mailto:info@casitasrosheli.com"
                    className="text-primary-600 hover:text-primary-700"
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

              {/* Phone 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('phone')}</h3>
                  <a href="tel:+34922463340" className="text-primary-600 hover:text-primary-700">
                    +34 922 46 33 40
                  </a>
                  <br />
                  <a href="tel:+34686738087" className="text-primary-600 hover:text-primary-700">
                    +34 686 73 80 87
                  </a>
                </div>
              </div>
            </div>
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

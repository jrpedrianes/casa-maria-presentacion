import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Casa María Presentación</h3>
            <p className="text-gray-400">Garafía, La Palma, Islas Canarias</p>
            <p className="text-gray-500 text-sm mt-2">
              {t('partOf')}{' '}
              <a
                href="https://casitasrosheli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Casitas Rosheli
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <div className="space-y-2">
              <Link
                href="/legal"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('legal')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <a
                href="mailto:info@casitasrosheli.com"
                className="block hover:text-white transition-colors"
              >
                info@casitasrosheli.com
              </a>
              <a href="tel:+34922463340" className="block hover:text-white transition-colors">
                +34 922 46 33 40
              </a>
              <a href="tel:+34686738087" className="block hover:text-white transition-colors">
                +34 686 73 80 87
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Casa María Presentación. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}

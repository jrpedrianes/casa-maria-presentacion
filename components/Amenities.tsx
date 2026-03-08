import { Car, CookingPot, Flame, Mountain, PawPrint, ShieldCheck, Trees, Wifi } from 'lucide-react'
import { useTranslations } from 'next-intl'

const iconMap = {
  wifi: Wifi,
  fireplace: Flame,
  kitchen: CookingPot,
  garden: Trees,
  terrace: Mountain,
  parking: Car,
  pets: PawPrint,
  tranquility: ShieldCheck,
}

export function Amenities() {
  const t = useTranslations('amenities')

  const amenities = [
    { key: 'wifi', icon: iconMap.wifi },
    { key: 'fireplace', icon: iconMap.fireplace },
    { key: 'kitchen', icon: iconMap.kitchen },
    { key: 'garden', icon: iconMap.garden },
    { key: 'terrace', icon: iconMap.terrace },
    { key: 'parking', icon: iconMap.parking },
    { key: 'pets', icon: iconMap.pets },
    { key: 'tranquility', icon: iconMap.tranquility },
  ]

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <Icon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{t(key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

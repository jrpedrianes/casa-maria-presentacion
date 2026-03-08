import { Quote } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import testimonialsData from '@/data/testimonials.json'

type Locale = 'es' | 'en' | 'de'

export function Testimonials() {
  const t = useTranslations('testimonials')
  const locale = useLocale() as Locale

  const reviews = testimonialsData.reviews.map((review) => ({
    id: review.id,
    text: review.text[locale],
    author: review.author,
    location: review.location[locale],
    rating: review.rating,
    date: review.date,
  }))

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <Quote className="text-primary-600 mb-4 flex-shrink-0" size={40} />
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{review.text}</p>
              <div className="border-t border-gray-200 pt-4 flex-shrink-0">
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

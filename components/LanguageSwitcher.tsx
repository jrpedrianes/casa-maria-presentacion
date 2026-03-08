'use client'

import { Globe } from 'lucide-react'
import { useParams } from 'next/navigation'

import { usePathname, useRouter } from '@/i18n/routing'

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

function setLocaleCookie(locale: string) {
  const expiryDate = new Date()
  expiryDate.setFullYear(expiryDate.getFullYear() + 1)
  document.cookie = `NEXT_LOCALE=${locale}; expires=${expiryDate.toUTCString()}; path=/`
}

export function LanguageSwitcher() {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = params.locale as string

  const handleLanguageChange = (newLocale: string) => {
    setLocaleCookie(newLocale)
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      <Globe size={16} className="text-gray-600 ml-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-sm font-medium rounded transition-all cursor-pointer ${
            currentLocale === lang.code
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

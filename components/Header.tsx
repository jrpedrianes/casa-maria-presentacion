'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Link } from '@/i18n/routing'

import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/#gallery', label: t('gallery') },
    { href: '/#amenities', label: t('amenities') },
    { href: '/#contact', label: t('contact') },
    { href: '/legal', label: t('legal') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-20 gap-2 lg:gap-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-1.5 lg:space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/img/logo/logo.svg"
              alt="Casa María Presentación Logo"
              width={48}
              height={48}
              className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
            />
            <span className="text-base lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
              Casa María Presentación
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
            >
              {t('manageBooking')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile: booking button + menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="px-3 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-xs"
            >
              {t('manageBooking')}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

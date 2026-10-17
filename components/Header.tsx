'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigationLinks = [
    { href: '/about', label: t('aboutUs') },
    { href: '/work', label: t('ourWork') },
    { href: '/community', label: t('globalCommunity') },
    { href: '/involved', label: t('getInvolved') },
    { href: '/news', label: t('newsImpact') },
    { href: '/contact', label: t('contactUs') },
  ]

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png.png"
              alt="Josour Al Khair Logo"
              width={380}
              height={120}
              className="h-12 w-auto sm:h-16 lg:h-28"
              priority
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-200 transition">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 hover:text-gray-200 transition text-sm"
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 py-2.5 rounded font-bold transition shadow-md hover:shadow-lg text-sm"
            >
              {t('donate')}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden rounded p-2 hover:bg-blue-700 transition"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-blue-700 py-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded px-3 py-3 text-sm font-medium hover:bg-blue-700 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

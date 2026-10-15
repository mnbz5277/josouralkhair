'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-0.5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png.png"
            alt="Josour Al Khair Logo"
            width={380}
            height={120}
            className="h-28 w-auto"
            priority
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-gray-200 transition">
            {t('aboutUs')}
          </Link>
          <Link href="/work" className="hover:text-gray-200 transition">
            {t('ourWork')}
          </Link>
          <Link href="/community" className="hover:text-gray-200 transition">
            {t('globalCommunity')}
          </Link>
          <Link href="/involved" className="hover:text-gray-200 transition">
            {t('getInvolved')}
          </Link>
          <Link href="/news" className="hover:text-gray-200 transition">
            {t('newsImpact')}
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            {t('contactUs')}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 hover:text-gray-200 transition text-sm"
            aria-label="Switch Language"
          >
            <Globe className="w-5 h-5" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <Link 
            href="/donate" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded font-bold transition shadow-md hover:shadow-lg text-sm"
          >
            {t('donate')}
          </Link>
        </div>
      </div>
    </header>
  )
}

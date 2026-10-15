'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text */}
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {t('stayInformed')}
            </h3>
            <p className="text-gray-300">
              {t('newsletterText')}
            </p>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="px-6 py-3 rounded-full text-gray-900 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition whitespace-nowrap"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DonationPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const content = language === 'en' ? {
    title: 'URGENT GAZA RELIEF',
    text: 'Gaza is facing an unprecedented humanitarian crisis—families are struggling to survive amid destruction, severe shortages of medical care, food, and clean water, and a collapsed healthcare system.',
    org: 'Josour Al-Khair',
    services: 'is on the ground, providing urgent medical aid, food, and life-saving treatment to those in desperate need, including orphans and amputees.',
    button: 'Donate Today'
  } : {
    title: 'إغاثة غزة العاجلة',
    text: 'تواجه غزة أزمة إنسانية غير مسبوقة - حيث تكافح العائلات من أجل البقاء وسط الدمار، والنقص الحاد في الرعاية الطبية والغذاء والماء النظيف، وانهيار النظام الصحي.',
    org: 'جسور الخير',
    services: 'موجودة على الأرض، لتقديم المساعدات الطبية العاجلة والغذاء والعلاج المنقذ للحياة لمن هم في أمس الحاجة، بما في ذلك الأيتام والمبتورين.',
    button: 'تبرع اليوم'
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition shadow-lg"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Content */}
          <div className="relative">
            {/* Image Only */}
            <div className="relative h-96">
              <Image
                src="/images/popup-image.jpg"
                alt="Gaza Relief"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* All Text Content Below Image */}
            <div className="bg-gradient-to-b from-gray-900 to-black p-6 md:p-8 text-white">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-400">
                {content.title}
              </h2>
              
              <p className="text-base md:text-lg mb-4 leading-relaxed text-gray-100">
                {content.text}
              </p>
              
              <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-100">
                <strong className="text-yellow-400">{content.org}</strong> {content.services}
              </p>

              {/* Donate Button */}
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-lg font-bold text-xl transition shadow-lg hover:shadow-xl"
              >
                {content.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

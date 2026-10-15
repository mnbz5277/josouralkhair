'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function EfficiencySection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content with Badges */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              {t('efficiencyTitle')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {t('efficiencyText')}
            </p>
            
            {/* Badges Section */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Best America Badge */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/badge1.png"
                  alt="Best America Certified"
                  width={80}
                  height={95}
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              
              {/* GuideStar 2022 Top-Rated Badge */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/badge2.png"
                  alt="GuideStar 2022 Top-Rated Nonprofit"
                  width={95}
                  height={95}
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              
              {/* BBB Accredited Charity Badge */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/badge3.png"
                  alt="BBB Accredited Charity"
                  width={130}
                  height={65}
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Rating Card */}
          <div className="flex justify-center">
            <div className="bg-white border-4 border-blue-600 rounded-lg p-8 text-center shadow-xl max-w-sm w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('integrityTitle')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('integritySubtitle')}
              </p>
              
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <div key={star} className="bg-blue-600 rounded p-2">
                    <Star className="w-8 h-8 text-white fill-white" />
                  </div>
                ))}
              </div>
              
              <div className="text-lg font-bold text-gray-900">
                ★ {t('fourStarRating')} ★
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

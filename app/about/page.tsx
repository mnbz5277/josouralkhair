'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Heart, Target, Eye, Award } from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { icon: Heart, title: t('compassion'), text: t('compassionText') },
    { icon: Award, title: t('integrity'), text: t('integrityText') },
    { icon: Target, title: t('excellence'), text: t('excellenceText') },
    { icon: Heart, title: t('respect'), text: t('respectText') },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0">
            <Image
              src="/images/gaza-hero.jpg"
              alt="About Us"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{t('aboutUsHero')}</h1>
              <p className="text-xl leading-relaxed">{t('aboutUsIntro')}</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-blue-900">{t('ourMission')}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('missionText')}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-green-900">{t('ourVision')}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('ourValues')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold mb-2">12+</div>
                <div className="text-xl">Years of Service</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-xl">Lives Impacted</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$2M+</div>
                <div className="text-xl">Aid Delivered</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

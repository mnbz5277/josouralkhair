'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Heart, Package, Home, BookOpen, Droplet, Users, Target, Shield, Handshake } from 'lucide-react'

export default function WorkPage() {
  const { t } = useLanguage()

  const programs = [
    {
      icon: Heart,
      title: t('medicalReliefTitle'),
      desc: t('medicalReliefDesc'),
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Package,
      title: t('emergencyAidTitle'),
      desc: t('emergencyAidDesc'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Home,
      title: t('shelterProgramTitle'),
      desc: t('shelterProgramDesc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: BookOpen,
      title: t('educationTitle'),
      desc: t('educationDesc'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Droplet,
      title: t('waterTitle'),
      desc: t('waterDesc'),
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Users,
      title: t('psychosocialTitle'),
      desc: t('psychosocialDesc'),
      color: 'bg-green-100 text-green-600'
    }
  ]

  const approach = [
    {
      icon: Target,
      title: t('directImpact'),
      desc: t('directImpactDesc')
    },
    {
      icon: Shield,
      title: t('transparency'),
      desc: t('transparencyDesc')
    },
    {
      icon: Handshake,
      title: t('localPartners'),
      desc: t('localPartnersDesc')
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-green-700">
          <div className="absolute inset-0">
            <Image
              src="/images/gaza-hero 2.jpg"
              alt="Our Work"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{t('ourWorkTitle')}</h1>
              <p className="text-xl leading-relaxed">{t('ourWorkIntro')}</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('programsTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${program.color} rounded-full mb-4`}>
                    <program.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('howWeWork')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {approach.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-md">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <item.icon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t('donateFormSubtitle')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('campaignsSubtitle')}
            </p>
            <Link
              href="/donate"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              {t('donateNow')}
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Calendar, ArrowRight, TrendingUp, Users, Package, Home } from 'lucide-react'

export default function NewsPage() {
  const { t } = useLanguage()

  const newsArticles = [
    {
      image: '/images/gaza-hero.jpg',
      title: t('news1Title'),
      date: t('news1Date'),
      excerpt: t('news1Excerpt')
    },
    {
      image: '/images/don.jpeg',
      title: t('news2Title'),
      date: t('news2Date'),
      excerpt: t('news2Excerpt')
    },
    {
      image: '/images/Relief.jpg',
      title: t('news3Title'),
      date: t('news3Date'),
      excerpt: t('news3Excerpt')
    },
    {
      image: '/images/gaza-hero 2.jpg',
      title: t('news4Title'),
      date: t('news4Date'),
      excerpt: t('news4Excerpt')
    },
    {
      image: '/images/gaza-hero 3.jpg',
      title: t('news5Title'),
      date: t('news5Date'),
      excerpt: t('news5Excerpt')
    },
    {
      image: '/images/popup.png.webp',
      title: t('news6Title'),
      date: t('news6Date'),
      excerpt: t('news6Excerpt')
    }
  ]

  const impactStats = [
    {
      icon: Users,
      number: '50,000+',
      label: t('totalBeneficiaries'),
      color: 'bg-blue-600'
    },
    {
      icon: Package,
      number: '8,500+',
      label: t('medicalAidDelivered'),
      color: 'bg-red-600'
    },
    {
      icon: Package,
      number: '25,000+',
      label: t('foodPackages'),
      color: 'bg-green-600'
    },
    {
      icon: Home,
      number: '3,200+',
      label: t('shelterProvided'),
      color: 'bg-purple-600'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-indigo-900 to-indigo-700">
          <div className="absolute inset-0">
            <Image
              src="/images/don.jpeg"
              alt="News & Impact"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{t('newsImpactTitle')}</h1>
              <p className="text-xl leading-relaxed">{t('newsImpactIntro')}</p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('impactByNumbers')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.color} rounded-full mb-4`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                {t('latestNews')}
              </h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                {t('viewAllNews')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {newsArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="relative h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                      {t('readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Report CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              {t('impactReport')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('supportersDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                {t('donateNow')}
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-900 transition shadow-lg border-2 border-white"
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

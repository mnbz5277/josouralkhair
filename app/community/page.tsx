'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Users, Heart, Handshake, Globe } from 'lucide-react'

export default function CommunityPage() {
  const { t } = useLanguage()

  const supporters = [
    {
      icon: Users,
      title: t('volunteersTitle'),
      desc: t('volunteersDesc'),
      stat: t('volunteersCount'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Handshake,
      title: t('partnersTitle'),
      desc: t('partnersDesc'),
      stat: t('partnersCount'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Heart,
      title: t('donorsTitle'),
      desc: t('donorsDesc'),
      stat: t('donorsCount'),
      color: 'bg-red-100 text-red-600'
    }
  ]

  const stories = [
    {
      image: '/images/gaza-hero.jpg',
      title: t('story1Title'),
      text: t('story1Text')
    },
    {
      image: '/images/gaza-hero 2.jpg',
      title: t('story2Title'),
      text: t('story2Text')
    },
    {
      image: '/images/gaza-hero 3.jpg',
      title: t('story3Title'),
      text: t('story3Text')
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-purple-900 to-purple-700">
          <div className="absolute inset-0">
            <Image
              src="/images/gaza-hero 3.jpg"
              alt="Our Global Community"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{t('communityTitle')}</h1>
              <p className="text-xl leading-relaxed">{t('communityIntro')}</p>
            </div>
          </div>
        </section>

        {/* Supporters Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              {t('ourSupportersTitle')}
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('supportersDesc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supporters.map((supporter, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${supporter.color} rounded-full mb-4`}>
                    <supporter.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {supporter.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {supporter.desc}
                  </p>
                  <div className="text-3xl font-bold text-blue-600">
                    {supporter.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('impactStoriesTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600">
                      {story.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Our Community in Action
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Moments captured from our work with communities around the world
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src="/images/Relief.jpg"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src="/images/don.jpeg"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src="/images/gaza-hero.jpg"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src="/images/gaza-hero 2.jpg"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition md:col-span-2">
                <Image
                  src="/images/gaza-hero 3.jpg"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition md:col-span-2">
                <Image
                  src="/images/popup.png.webp"
                  alt="Community work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <Globe className="w-20 h-20 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              {t('joinCommunityTitle')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('joinCommunityText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                {t('donateNow')}
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-900 transition shadow-lg border-2 border-white"
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

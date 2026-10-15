'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Heart, Users, Calendar, Share2, Briefcase, Gift, HandHeart } from 'lucide-react'

export default function InvolvedPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    why: ''
  })

  const ways = [
    {
      icon: Heart,
      title: t('donateRegularly'),
      desc: t('donateRegularlyDesc'),
      color: 'bg-red-100 text-red-600',
      link: '/donate'
    },
    {
      icon: Users,
      title: t('becomeVolunteer'),
      desc: t('becomeVolunteerDesc'),
      color: 'bg-blue-100 text-blue-600',
      link: '#volunteer-form'
    },
    {
      icon: Calendar,
      title: t('organizeEvent'),
      desc: t('organizeEventDesc'),
      color: 'bg-green-100 text-green-600',
      link: '/contact'
    },
    {
      icon: Share2,
      title: t('spreadWord'),
      desc: t('spreadWordDesc'),
      color: 'bg-purple-100 text-purple-600',
      link: '#'
    },
    {
      icon: Briefcase,
      title: t('corporatePartner'),
      desc: t('corporatePartnerDesc'),
      color: 'bg-orange-100 text-orange-600',
      link: '/contact'
    },
    {
      icon: Gift,
      title: t('legacyGiving'),
      desc: t('legacyGivingDesc'),
      color: 'bg-cyan-100 text-cyan-600',
      link: '/contact'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Volunteer form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', interest: '', availability: '', why: '' })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-orange-900 to-orange-700">
          <div className="absolute inset-0">
            <Image
              src="/images/Relief.jpg"
              alt="Get Involved"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">{t('getInvolvedTitle')}</h1>
              <p className="text-xl leading-relaxed">{t('getInvolvedIntro')}</p>
            </div>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('waysToHelp')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ways.map((way, index) => (
                <Link 
                  key={index} 
                  href={way.link}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${way.color} rounded-full mb-4 group-hover:scale-110 transition`}>
                    <way.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {way.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section id="volunteer-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <HandHeart className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('volunteerFormTitle')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('volunteerFormDesc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('yourName')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('yourEmail')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('areaOfInterest')}
                    </label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="medical">Medical Relief</option>
                      <option value="education">Education Support</option>
                      <option value="fundraising">Fundraising</option>
                      <option value="social-media">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('availability')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.availability}
                      onChange={(e) => setFormData({...formData, availability: e.target.value})}
                      placeholder="e.g., Weekends, 10 hours/week"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('whyVolunteer')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.why}
                      onChange={(e) => setFormData({...formData, why: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
                  >
                    {t('submitApplication')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t('makeImpactToday')}
            </h2>
            <p className="text-xl mb-8">
              {t('startJourney')}
            </p>
            <Link
              href="/donate"
              className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              {t('donateNow')}
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

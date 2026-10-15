'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import DonationForm from '@/components/DonationForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GazaReliefPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Campaign Details */}
            <div>
              {/* Hero Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/popup.png.webp"
                  alt={t('campaignTitle')}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Campaign Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('campaignTitle')}
                </h1>
                
                <p className="text-gray-600 mb-6 italic">
                  {t('campaignSubtitle')}<br />
                  {t('campaignOrg')}
                </p>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('campaignText1')}
                  </p>

                  <p className="mb-4">
                    {t('campaignText2')}
                  </p>

                  <p className="mb-4">
                    {t('campaignText3')}
                  </p>

                  <p className="mb-6">
                    {t('campaignText4')}
                  </p>

                  {/* Statistics Table */}
                  <div className="grid grid-cols-3 gap-4 my-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-700">15,000</div>
                      <div className="text-sm text-gray-600">{t('beneficiaries')}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-700">3,500</div>
                      <div className="text-sm text-gray-600">{t('packagesDistributed')}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-700">8,200</div>
                      <div className="text-sm text-gray-600">{t('medicalServices')}</div>
                    </div>
                  </div>

                  {/* Images Gallery */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/images/gaza-hero.jpg"
                        alt="Relief work 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/images/gaza-hero 2.jpg"
                        alt="Relief work 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/images/gaza-hero 3.jpg"
                        alt="Relief work 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form Sidebar */}
            <div className="lg:sticky lg:top-24 self-start">
              <DonationForm 
                campaignId="gaza-relief"
                campaignTitle={t('campaignTitle')}
                targetAmount={500000}
                raisedAmount={442039}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

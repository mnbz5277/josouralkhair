'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import type { Campaign } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const { t } = useLanguage()
  const progress = (campaign.raised_amount / campaign.target_amount) * 100
  const progressClamped = Math.min(progress, 100)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        {campaign.image_url ? (
          <Image
            src={campaign.image_url}
            alt={campaign.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100"></div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {campaign.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {campaign.description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-700 font-semibold">
              ${campaign.raised_amount.toLocaleString('en-US')}
            </span>
            <span className="text-gray-500">
              {t('of')} ${campaign.target_amount.toLocaleString('en-US')}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressClamped}%` }}
            />
          </div>

          <div className="mt-2 text-sm font-semibold text-green-600">
            {progressClamped.toFixed(0)}% {t('completed')}
          </div>
        </div>

        <Link 
          href="/donate"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 group/btn"
        >
          <span>{t('donateNowBtn')}</span>
          <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

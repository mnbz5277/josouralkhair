'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, type Campaign } from '@/lib/supabase'
import CampaignCard from './CampaignCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CampaignsGrid() {
  const { t } = useLanguage()
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCampaigns()
  }, [t])

  async function fetchCampaigns() {
    // Demo data
    const demoCampaigns: Campaign[] = [
      {
        id: '1',
        title: t('medicalAid'),
        description: t('medicalAidDesc'),
        target_amount: 50000,
        raised_amount: 32500,
        image_url: '/images/Relief.jpg',
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: '2',
        title: t('foodBaskets'),
        description: t('foodBasketsDesc'),
        target_amount: 30000,
        raised_amount: 18750,
        image_url: '/images/don.jpeg',
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: '3',
        title: t('shelter'),
        description: t('shelterDesc'),
        target_amount: 75000,
        raised_amount: 45000,
        image_url: '/images/gaza-hero 2.jpg',
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ]

    // If Supabase is configured, try fetching real data
    if (isSupabaseConfigured()) {
      try {
        const { data } = await supabase
          .from('campaigns')
          .select('*')
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(6)
        
        if (data && data.length > 0) {
          setCampaigns(data)
          setLoading(false)
          return
        }
      } catch (error) {
        console.log('Using demo data - Supabase not configured')
      }
    }
    
    // Use demo data
    setCampaigns(demoCampaigns)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('campaignsTitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('campaignsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  )
}

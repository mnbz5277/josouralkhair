'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, type ImpactStats } from '@/lib/supabase'
import { Users, Package, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ImpactCounter() {
  const [stats, setStats] = useState<ImpactStats | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    const defaultStats = {
      id: '1',
      beneficiaries_count: 15000,
      packages_distributed: 3500,
      medical_services: 8200,
      updated_at: new Date().toISOString()
    }

    if (isSupabaseConfigured()) {
      try {
        const { data } = await supabase
          .from('impact_stats')
          .select('*')
          .single()
        
        if (data) {
          setStats(data)
          return
        }
      } catch (error) {
        console.log('Using demo data')
      }
    }
    
    setStats(defaultStats)
  }

  if (!stats) return null

  const counters = [
    {
      icon: Users,
      label: t('beneficiaries'),
      value: stats.beneficiaries_count.toLocaleString('en-US'),
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Package,
      label: t('packagesDistributed'),
      value: stats.packages_distributed.toLocaleString('en-US'),
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Heart,
      label: t('medicalServices'),
      value: stats.medical_services.toLocaleString('en-US'),
      color: 'text-red-600',
      bg: 'bg-red-50'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('impactTitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('impactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {counters.map((counter, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`${counter.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <counter.icon className={`w-8 h-8 ${counter.color}`} />
              </div>
              <div className={`text-4xl font-bold ${counter.color} mb-2`}>
                {counter.value}
              </div>
              <div className="text-gray-600 font-medium">
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { createClient } from '@supabase/supabase-js'

// قيم صالحة لـ Supabase (Demo mode)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xyzcompany.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emNvbXBhbnkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTc2OTIwMCwiZXhwIjoxOTU3MzQ1MjAwfQ.demo-key-placeholder'

let supabaseClient: any

try {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
} catch (e) {
  // Fallback mock client
  supabaseClient = {
    from: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
        eq: () => ({
          order: () => ({
            limit: () => Promise.resolve({ data: null, error: null })
          })
        })
      })
    })
  }
}

export const supabase = supabaseClient

// التحقق من اتصال Supabase
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
         process.env.NEXT_PUBLIC_SUPABASE_URL.includes('.supabase.co') &&
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://xyzcompany.supabase.co'
}

export type Campaign = {
  id: string
  title: string
  description: string
  target_amount: number
  raised_amount: number
  image_url: string | null
  status: 'active' | 'completed' | 'paused'
  created_at: string
  updated_at: string
}

export type Donation = {
  id: string
  campaign_id: string
  donor_email: string
  donor_name: string | null
  amount: number
  currency: string
  payment_status: 'pending' | 'succeeded' | 'failed' | 'refunded'
  payment_type: 'one-time' | 'monthly'
  stripe_payment_id: string | null
  stripe_subscription_id: string | null
  created_at: string
}

export type ImpactStats = {
  id: string
  beneficiaries_count: number
  packages_distributed: number
  medical_services: number
  updated_at: string
}

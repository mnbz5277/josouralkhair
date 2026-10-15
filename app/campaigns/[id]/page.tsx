import { notFound } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import DonationForm from '@/components/DonationForm'
import { supabase } from '@/lib/supabase'

export default async function CampaignDetailPage({ params }: { params: { id: string } }) {
  const { data: campaign } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!campaign) {
    notFound()
  }

  const progress = (campaign.raised_amount / campaign.target_amount) * 100

  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* تفاصيل الحملة */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                  {campaign.image_url ? (
                    <div className="relative h-96">
                      <Image
                        src={campaign.image_url}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-96 bg-gradient-to-br from-primary-100 to-secondary-100"></div>
                  )}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {campaign.title}
                  </h1>

                  <div className="mb-6">
                    <div className="flex justify-between text-lg mb-3">
                      <span className="text-gray-900 font-bold">
                        ${campaign.raised_amount.toLocaleString('en-US')}
                      </span>
                      <span className="text-gray-600">
                        من ${campaign.target_amount.toLocaleString('en-US')}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>

                    <div className="mt-3 text-base font-semibold text-primary-600">
                      {progress.toFixed(0)}% مكتمل
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="whitespace-pre-line leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* نموذج التبرع */}
              <div className="lg:sticky lg:top-24 self-start">
                <DonationForm 
                  campaignId={campaign.id} 
                  campaignTitle={campaign.title}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

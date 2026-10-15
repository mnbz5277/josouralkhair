import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ImpactCounter from '@/components/ImpactCounter'
import CampaignsGrid from '@/components/CampaignsGrid'
import EfficiencySection from '@/components/EfficiencySection'
import Newsletter from '@/components/Newsletter'
import DonationPopup from '@/components/DonationPopup'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ImpactCounter />
        <CampaignsGrid />
        <EfficiencySection />
        <Newsletter />
      </main>
      <DonationPopup />
    </>
  )
}

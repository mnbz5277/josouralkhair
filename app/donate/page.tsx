'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import DonationForm from '@/components/DonationForm'

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/don.jpeg"
            alt="Gaza Relief"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Donation Form - Floating on top */}
        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-sm pointer-events-auto">
            <DonationForm 
              targetAmount={500000}
              raisedAmount={442039}
            />
          </div>
        </div>
      </main>
    </>
  )
}

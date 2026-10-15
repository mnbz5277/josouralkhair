'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type DonationType = 'one-time' | 'monthly'

interface DonationFormProps {
  campaignId?: string
  campaignTitle?: string
  targetAmount?: number
  raisedAmount?: number
}

export default function DonationForm({ campaignId, campaignTitle, targetAmount = 500000, raisedAmount = 442039 }: DonationFormProps) {
  const { t } = useLanguage()
  const [amount, setAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [donationType, setDonationType] = useState<DonationType>('one-time')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const predefinedAmounts = [25, 50, 100, 250, 500]
  
  // Calculate progress percentage
  const progressPercentage = Math.min((raisedAmount / targetAmount) * 100, 100)
  
  // Format numbers with commas
  const formatMoney = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const finalAmount = customAmount ? parseFloat(customAmount) : amount

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          name,
          email,
          comment,
          campaignId: campaignId || null,
          donationType,
        }),
      })

      const { url } = await response.json()
      if (url) window.location.href = url
    } catch (error) {
      console.error('Error processing donation:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 max-w-sm mx-auto">
      <div className="text-center mb-3">
        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mb-1">
          <Heart className="w-4 h-4 text-green-600 fill-current" />
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-0.5">
          {campaignTitle || t('donateFormTitle')}
        </h2>
        <p className="text-gray-600 text-xs">
          {t('donateFormSubtitle')}
        </p>
      </div>

      {/* Progress Bar Section */}
      <div className="mb-3 bg-gray-50 rounded-lg p-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-bold text-green-600">
            ${formatMoney(raisedAmount)}
          </span>
          <span className="text-xs text-gray-600">
            ${formatMoney(targetAmount)} {t('goal')}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mb-0.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-1 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-center text-xs text-gray-600">
          {progressPercentage.toFixed(0)}% {t('completed')}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t('donationType')}
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`py-1 px-2 rounded-lg font-semibold text-xs transition ${
                donationType === 'one-time'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('oneTime')}
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`py-1 px-2 rounded-lg font-semibold text-xs transition ${
                donationType === 'monthly'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('monthly')}
            </button>
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t('selectAmount')}
          </label>
          <div className="grid grid-cols-3 gap-1">
            {predefinedAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setAmount(amt)
                  setCustomAmount('')
                }}
                className={`py-1 px-1.5 rounded-lg font-semibold text-xs transition ${
                  amount === amt && !customAmount
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t('customAmount')}
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-xs">
              $
            </span>
            <input
              type="number"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-5 pr-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-left text-xs"
            />
          </div>
        </div>

        <div className="mb-1.5">
          <label className="block text-xs font-semibold text-gray-700 mb-0.5">
            {t('fullName')}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-xs"
            placeholder={t('enterName')}
          />
        </div>

        <div className="mb-1.5">
          <label className="block text-xs font-semibold text-gray-700 mb-0.5">
            {t('emailOptional')}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-xs"
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-2">
          <label className="block text-xs font-semibold text-gray-700 mb-0.5">
            {t('comment')}
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={2}
            className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none resize-none text-xs"
            placeholder={t('addYourComment')}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 rounded-lg font-bold text-xs transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t('processing') : `${t('donateWith')}${customAmount || amount}`}
        </button>
      </form>

      <p className="text-center text-xs text-gray-500 mt-2">
        {t('securePayment')}
      </p>
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { amount, email, name, campaignId, donationType } = await req.json()

    // التحقق من البيانات
    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'مبلغ غير صالح' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    // إنشاء جلسة Stripe Checkout
    if (donationType === 'monthly') {
      // تبرع شهري - اشتراك
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `تبرع شهري - جسور الخير`,
                description: campaignId ? `للحملة` : 'تبرع عام',
              },
              unit_amount: Math.round(amount * 100),
              recurring: {
                interval: 'month',
              },
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata: {
          campaignId: campaignId || '',
          donorName: name,
          donationType: 'monthly',
        },
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
      })

      return NextResponse.json({ url: session.url })
    } else {
      // تبرع لمرة واحدة
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `تبرع - جسور الخير`,
                description: campaignId ? `للحملة` : 'تبرع عام',
              },
              unit_amount: Math.round(amount * 100),
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata: {
          campaignId: campaignId || '',
          donorName: name,
          donationType: 'one-time',
        },
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
      })

      return NextResponse.json({ url: session.url })
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'فشل في إنشاء جلسة الدفع' }, { status: 500 })
  }
}

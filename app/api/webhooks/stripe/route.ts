import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // معالجة الأحداث
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      
      const campaignId = session.metadata?.campaignId || null
      const donorName = session.metadata?.donorName || null
      const donationType = session.metadata?.donationType || 'one-time'

      // حفظ التبرع في قاعدة البيانات
      await supabase.from('donations').insert({
        campaign_id: campaignId,
        donor_email: session.customer_email!,
        donor_name: donorName,
        amount: (session.amount_total! / 100),
        currency: session.currency!.toUpperCase(),
        payment_status: 'succeeded',
        payment_type: donationType,
        stripe_payment_id: session.payment_intent as string,
        stripe_subscription_id: session.subscription as string,
      })

      break
    }

    case 'invoice.payment_succeeded': {
      // تبرع شهري متكرر
      const invoice = event.data.object as Stripe.Invoice
      const subscriptionId = invoice.subscription as string

      await supabase.from('donations').insert({
        donor_email: invoice.customer_email!,
        amount: (invoice.amount_paid / 100),
        currency: invoice.currency.toUpperCase(),
        payment_status: 'succeeded',
        payment_type: 'monthly',
        stripe_payment_id: invoice.payment_intent as string,
        stripe_subscription_id: subscriptionId,
      })

      break
    }
  }

  return NextResponse.json({ received: true })
}

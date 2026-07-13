import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tier = searchParams.get('tier') || 'pro'

  const prices: Record<string, string> = {
    pro: process.env.STRIPE_PRICE_PRO_ID!,
    team: process.env.STRIPE_PRICE_TEAM_ID!,
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: prices[tier], quantity: 1 }],
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
    })
    return NextResponse.redirect(session.url!, 303)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

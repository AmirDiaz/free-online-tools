import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'AI Tools — Summarizer, Translator & Code Explainer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

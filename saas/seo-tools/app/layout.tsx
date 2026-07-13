import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Tools',
  description: 'SEO Tools — Keyword Density, Meta Tags & Sitemap Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

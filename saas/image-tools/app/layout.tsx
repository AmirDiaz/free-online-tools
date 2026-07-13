import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Tools',
  description: 'Image Tools — Compress, Resize & Convert Images Online Free',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

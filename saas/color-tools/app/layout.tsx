import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Color Tools',
  description: 'Color Tools — Color Picker, Palette & Gradient Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

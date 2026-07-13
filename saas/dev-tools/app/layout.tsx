import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev Tools',
  description: 'Dev Tools — JSON Formatter, Base64, JWT Decoder & Regex Tester',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

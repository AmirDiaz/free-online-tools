import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Tools',
  description: 'Email Tools — Subject Line Tester & Email Validator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

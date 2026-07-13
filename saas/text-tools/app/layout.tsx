import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Tools',
  description: 'Text Tools — Word Counter, Case Converter & Diff Checker',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

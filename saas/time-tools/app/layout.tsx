import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Tools',
  description: 'Time Tools — Timezone Converter & Meeting Planner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

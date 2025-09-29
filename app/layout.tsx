import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'ADAWAT HUB — Coming Soon',
  description: 'Tech Tools & Solutions — Launching soon',
}

export const viewport: Viewport = {
  themeColor: '#0b1020',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

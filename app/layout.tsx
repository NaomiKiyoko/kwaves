import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KWAVES — K-pop Culture & Entertainment',
  description: 'Your daily home for K-pop culture, music, drama, and everything Hallyu.',
  openGraph: {
    title: 'KWAVES — K-pop Culture & Entertainment',
    description: 'Your daily home for K-pop culture, music, drama, and everything Hallyu.',
    siteName: 'KWAVES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

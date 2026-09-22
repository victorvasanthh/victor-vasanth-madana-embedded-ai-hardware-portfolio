import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Victor Vasanth Madana — Embedded AI, Hardware & RTL',
  description:
    'Portfolio of Victor Vasanth Madana — M.Tech candidate in Embedded and Machine Learning Systems at NIT Warangal. Applied AI, edge/embedded ML, FPGA systems, hardware/CAD, RTL, and AI-agent benchmark evaluation.',
  generator: 'v0.app',
  keywords: [
    'Embedded AI',
    'Machine Learning',
    'FPGA',
    'RTL',
    'Verilog',
    'SystemVerilog',
    'Edge Inference',
    'NIT Warangal',
    'KiCad',
    'Victor Vasanth Madana',
  ],
  authors: [{ name: 'Victor Vasanth Madana' }],
  openGraph: {
    title: 'Victor Vasanth Madana — Embedded AI, Hardware & RTL',
    description:
      'M.Tech candidate in Embedded and Machine Learning Systems. Applied AI, edge/embedded ML, FPGA systems, and AI-agent benchmark evaluation.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1017',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

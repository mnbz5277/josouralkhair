'use client'

import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>Josour Al-Khair - Gaza Relief</title>
        <meta name="description" content="Josour Al-Khair Foundation for Gaza Relief and Support" />
        <link rel="icon" type="image/jpeg" href="/images/site-logo.jpg" />
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

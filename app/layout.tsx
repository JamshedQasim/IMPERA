import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../src/style.css'

export const metadata: Metadata = {
  title: 'Impera | Keep your venture organised',
  description: 'Impera brings your people, projects, sales, and finances together in one intelligent business operating system.',
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f9fbf8',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

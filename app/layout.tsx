import type { Metadata } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Musfira Jamil — Technical Operations Specialist & Researcher',
    template: '%s — Musfira Jamil',
  },
  description:
    'Portfolio of Musfira Jamil: plant biologist, molecular geneticist, and R&D operations specialist working at the intersection of life sciences and data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <div className="shell">
          <Nav />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
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
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
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

import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    default: 'Musfira Jamil, Technical Operations Specialist & Researcher',
    template: '%s, Musfira Jamil',
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
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

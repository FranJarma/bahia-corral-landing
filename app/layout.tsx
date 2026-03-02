import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bahía Corral | Cabañas frente al dique Cabra Corral',
  description:
    'Cabañas totalmente equipadas en un entorno natural único. Descansá frente al dique Cabra Corral y viví la experiencia Bahía Corral.',
  keywords: ['cabañas', 'dique', 'dique cabra corral', 'naturaleza', 'hospedaje', 'turismo', 'Salta'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bahía Corral | Cabañas frente al dique Cabra Corral',
    description:
      'Cabañas totalmente equipadas en un entorno natural único. Descansá frente al dique Cabra Corral y viví la experiencia Bahía Corral.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

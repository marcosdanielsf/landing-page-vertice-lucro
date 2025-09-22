import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vértice do Lucro - Transforme Seu Negócio',
  description: 'Descubra estratégias comprovadas para maximizar seus lucros e transformar seu negócio. Sistema completo de otimização empresarial.',
  keywords: 'negócios, lucro, estratégias, otimização, vendas, marketing',
  authors: [{ name: 'Vértice do Lucro' }],
  creator: 'Vértice do Lucro',
  publisher: 'Vértice do Lucro',
  openGraph: {
    title: 'Vértice do Lucro - Transforme Seu Negócio',
    description: 'Descubra estratégias comprovadas para maximizar seus lucros e transformar seu negócio.',
    url: 'https://vertice-do-lucro.com',
    siteName: 'Vértice do Lucro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vértice do Lucro - Transforme Seu Negócio',
    description: 'Descubra estratégias comprovadas para maximizar seus lucros e transformar seu negócio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
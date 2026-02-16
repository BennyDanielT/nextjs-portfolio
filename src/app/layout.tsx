import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Abitha Jasmine JA | ML, Deep Learning & Generative AI'

const description =
  "Machine Learning and Generative AI enthusiast based in Chennai, India. Skilled in Python, TensorFlow, LangChain, and Azure. Let's build intelligent solutions together!"

// Ensure URL has protocol
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith('http')
  ? process.env.NEXT_PUBLIC_SITE_URL
  : `https://${process.env.NEXT_PUBLIC_SITE_URL}`

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Abitha Jasmine JA Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}

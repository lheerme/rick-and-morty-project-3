import './globals.css'

import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Poppins, Shadows_Into_Light_Two } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const shadowsIntoLight = Shadows_Into_Light_Two({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shadow-into-light',
})

export const metadata: Metadata = {
  title: 'Rick And Morty Project',
  other: {
    google: 'notranslate',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${shadowsIntoLight.variable}`}
    >
      <body className="antialiased min-h-dvh flex flex-col">
        <NextTopLoader color="#fac814" showSpinner={false} height={4} />
        <Header />
        <main className="flex flex-1 size-full px-6 pt-4 pb-12">
          {children}
        </main>
      </body>
    </html>
  )
}

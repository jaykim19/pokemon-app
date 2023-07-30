import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import pocketball from '@/public/poketball.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon App',
  description: 'Pokemon App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}

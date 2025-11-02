import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlturaCyber - End-to-End Cybersecurity Solutions',
  description: 'AlturaCyber helps organizations anticipate, prevent, and respond to cyber threats with precision and confidence',
  keywords: 'cybersecurity, security solutions, threat protection, network security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
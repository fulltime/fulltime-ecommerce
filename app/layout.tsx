import type { Metadata } from 'next'
import { Jost, Poppins } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'FULLTime eCommerce',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className + ' ' + poppins.className}>{children}</body>
    </html>
  )
}

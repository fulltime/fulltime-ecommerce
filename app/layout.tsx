import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })

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
      <body className={jost.className}>{children}</body>
    </html>
  )
}

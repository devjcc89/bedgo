import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bedgo — Tu piso genera ingresos',
  description: 'Servicios Inmobiliarios Madrid. Renta garantizada, mayor rentabilidad y gestión integral para propietarios.',
  icons: {
    icon: '/bedgo.png',
    apple: '/bedgo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-primary`}>
        {children}
      </body>
    </html>
  )
}

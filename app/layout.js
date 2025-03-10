import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rolling Waves - Aprende inglés con fluidez',
  description: 'Plataforma educativa para aprender inglés de manera interactiva y dinámica.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
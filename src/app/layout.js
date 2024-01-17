import './globals.css'
import { Inter } from 'next/font/google'
import StarsCanvas from '@/components/StarBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio Rodrigo',
  description: 'Conoce mis Habilidades',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        
        {children}
      <div className="container">
        <StarsCanvas />
      </div>
        
      </body>
    </html>
  )
}

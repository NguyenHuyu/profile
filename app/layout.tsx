import UIProvider from '@/providers/UIProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbars from '@/components/Layout/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <UIProvider>
          <Navbars />
          {children}
        </UIProvider>
      </body>
    </html>
  )
}

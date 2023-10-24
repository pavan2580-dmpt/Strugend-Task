import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Petty App',
  description: 'An E-commerces store to buy dogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-[100px] pt-[30px] home_background" >
       
      
        {children}
        </body>
    </html>
  )
}

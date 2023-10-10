'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import { ThemeProvider } from '../utils/context'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { ThemeContext } from '../utils/context'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Benjamin Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

function Main({ children }) {
  const { theme } = useContext(ThemeContext)
  return (
    <html lang="en" className={`${theme === 'dark' && 'dark'}`}>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

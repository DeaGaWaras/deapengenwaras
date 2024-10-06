import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Settings } from '@/components/common/Settings'
import { ThemeProvider } from '@/provider/themesProvider'
import Tawk from '@/components/common/Tawk'

export const metadata: Metadata = {
  title: 'Syah Radea | Portfolio',
  description: 'Dea Pengen Waras | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add your favicon here */}
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          {/* <Footer /> */}
          <Settings />
          {/* <Tawk /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}

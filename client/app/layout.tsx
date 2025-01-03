import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import { Providers } from "./providers"
import BackToTop from "./components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Valcheq Technologies",
  description: "Web Development, Data Analytics, and AI Solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}


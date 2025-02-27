import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hastakriti - EPICS Project Team 123",
  description: "Building prosthetic hands for the differently-abled",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'
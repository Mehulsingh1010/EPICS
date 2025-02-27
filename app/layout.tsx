import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hastakriti - EPICS Project Team 092",
  description: "Building innovative prosthetic hands for the differently-abled",
  openGraph: {
    title: "Hastakriti - EPICS Project Team 092",
    description: "Building innovative prosthetic hands for the differently-abled",
    images: [
      {
        url: "/metaimg.png", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Hastakriti Prosthetic Hands Project",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hastakriti - EPICS Project Team 092",
    description: "Building innovative prosthetic hands for the differently-abled",
    images: ["/metaimg.png"], // Same image as above
  },
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
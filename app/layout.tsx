import { Bricolage_Grotesque, Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import { Toaster } from "sonner"

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        bricolage.variable
      )}
    >
      <body className="relative min-h-svh overflow-x-hidden">
        <Navbar />

        {children}
        <Toaster />
      </body>
    </html>
  )
}

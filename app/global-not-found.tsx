// Import global styles and fonts
import "./globals.css"
import { Bricolage_Grotesque, Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlusIcon } from "lucide-react"
import StarIcon from "@iconify-react/noto/star"
import Image from "next/image"
import NotFound from "@/components/not-found"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function GlobalNotFound() {
  return (
    <html lang="en" className="max-h-screen">
      <body
        className={cn(
          "antialiased",
          fontMono.variable,
          "font-sans",
          bricolage.variable,
          "min-h-screen overflow-x-hidden bg-foreground"
        )}
      >
        <NotFound />
      </body>
    </html>
  )
}

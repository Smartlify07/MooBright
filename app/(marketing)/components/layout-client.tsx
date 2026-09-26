"use client"
import Navbar from "@/components/navbar"
import React from "react"
import Footer from "./home/footer"
import { Toaster } from "sonner"
import { usePathname } from "next/navigation"

const LayoutClient = ({
  children,
}: {
  children: Readonly<React.ReactNode>
}) => {
  const pathname = usePathname()
  const shouldBeTransparent = pathname === "/"
  return (
    <>
      <Navbar isTransparent={shouldBeTransparent} />

      {children}
      <Footer />
      <Toaster />
    </>
  )
}

export default LayoutClient

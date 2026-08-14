"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "./ui/button"
import HamburgerMenuBrokenIcon from "@iconify-react/solar/hamburger-menu-broken"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="absolute top-5 left-0 flex w-full items-center px-5 text-background md:px-10">
      <div className="container flex items-center justify-between text-sm">
        <Link href="/" className="z-1000">
          <Image
            width={51}
            height={50}
            alt="MoobrightLogo"
            src="/moobrightlogo.svg"
            className="size-10 lg:size-12.5"
          />
        </Link>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>

        <Button variant="ghost" className="hidden text-sm md:block">
          Get a quote
        </Button>

        <button
          className="z-1000 cursor-pointer md:hidden"
          onClick={() => {
            toggle()
          }}
        >
          <HamburgerMenuBrokenIcon height="1.5rem" width="1.5rem" />
        </button>

        <div
          className={cn(
            isOpen ? "opacity-100" : "opacity-0",
            "fixed top-0 left-0 z-100 h-full min-h-svh w-full bg-black/20 transition-opacity md:hidden"
          )}
        >
          <div
            className={cn(
              "absolute top-30 -right-54 flex h-93.25 w-53.75 flex-col justify-between gap-10 rounded-lg bg-background px-2.5 py-6 transition-transform duration-300 md:hidden",
              isOpen ? "-translate-x-59" : "translate-x-59"
            )}
          >
            <ul className="flex flex-col items-center justify-center gap-6 p-2 text-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="flex h-8 w-full max-w-45 items-center justify-center rounded-[10px] hover:bg-muted"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <Button className="h-10 w-full max-w-45 self-center bg-foreground text-sm hover:bg-foreground">
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

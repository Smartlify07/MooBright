"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useRef, useState } from "react"
import { Button } from "./ui/button"
import HamburgerMenuBrokenIcon from "@iconify-react/solar/hamburger-menu-broken"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

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

  const pathname = usePathname()

  return (
    <nav className="absolute top-10 left-0 flex w-full items-center px-5 text-background lg:px-10">
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

        <ul className="z-1000 hidden items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>

        <Button
          variant="secondary"
          className="group z-1000 hidden h-9 w-31 text-sm lg:flex"
        >
          Get a quote{" "}
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Button>

        <button
          className="z-1000 cursor-pointer lg:hidden"
          onClick={() => {
            toggle()
          }}
        >
          <HamburgerMenuBrokenIcon height="1.5rem" width="1.5rem" />
        </button>

        <div
          onClick={() => setIsOpen(false)}
          className={cn(
            isOpen ? "opacity-100" : "invisible opacity-0",
            "fixed top-0 left-0 z-1000 h-full min-h-svh w-full bg-black/25 transition-opacity transition-discrete duration-300 lg:hidden"
          )}
        />
        <div
          className={cn(
            "absolute top-30 right-0 z-1000 flex h-93.25 w-53.75 flex-col justify-between gap-10 rounded-lg bg-background px-2.5 py-6 transition-transform duration-300 ease-in-out lg:hidden",
            isOpen ? "-translate-x-5" : "translate-x-53.75"
          )}
        >
          <ul className="flex flex-col items-center justify-center gap-6 p-2 text-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={cn(
                  "flex h-8 w-full max-w-45 items-center justify-center rounded-[10px] hover:bg-muted",
                  pathname === link.href && "bg-muted"
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <Button className="h-10 w-full max-w-45 self-center bg-foreground text-sm hover:bg-foreground/90">
            Get a quote
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

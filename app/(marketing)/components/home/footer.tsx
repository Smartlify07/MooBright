"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import BaselineFacebookIcon from "@iconify-react/ic/baseline-facebook"
import BaselineWhatsappIcon from "@iconify-react/ic/baseline-whatsapp"
import BaselineTiktokIcon from "@iconify-react/ic/baseline-tiktok"
import InstagramOutlinedIcon from "@iconify-react/ant-design/instagram-outlined"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About us " },
  { href: "/contact", label: "Contact " },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
]

const socials = [
  { href: "#", icon: BaselineFacebookIcon },
  {
    href: "#",
    icon: InstagramOutlinedIcon,
  },
  { href: "#", icon: BaselineTiktokIcon },
  { href: "#", icon: BaselineWhatsappIcon },
]

const Footer = () => {
  return (
    <footer className="section-spacing relative overflow-hidden bg-[#001A56] lg:pt-30 lg:pb-0!">
      <div className="container flex flex-col gap-9 pb-0 lg:gap-13">
        <div className="grid justify-items-center gap-9 text-center lg:grid-cols-[486px_184px_378px] lg:justify-items-start lg:gap-24 lg:text-start">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 text-background">
              <h3 className="tracking-neg-5 text-center text-3xl font-medium lg:text-start">
                Need a service? We're ready to help
              </h3>
              <p className="text-base">
                Request a service or reach out to our us today.
              </p>
            </div>

            <Button
              variant="outline"
              className="h-11 w-48 self-center lg:self-start"
            >
              Explore services
              <ArrowRight />
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex size-10 items-center justify-center rounded-full bg-[#1E315D] text-background"
              >
                <s.icon height="1.25rem" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-background">
            <h4 className="text-xl font-semibold">Quick links</h4>
            <div className="flex flex-col space-y-2">
              {links.map((link, i) => (
                <Link key={i} className="text-background" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 text-background lg:px-9">
            <h4 className="text-xl font-semibold">Legal links</h4>
            <div className="flex flex-col space-y-2">
              {legalLinks.map((link, i) => (
                <Link key={i} className="text-background" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="hidden items-center gap-4 lg:flex">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex size-10 items-center justify-center rounded-full bg-[#1E315D] text-background"
              >
                <s.icon height="1.25rem" />
              </a>
            ))}
          </div>

          <address className="text-center text-background not-italic lg:text-start">
            &copy; 2026 MooBright Industrials. All rights reserved.
          </address>
        </div>

        <div className="relative h-20 lg:h-47.75">
          <h1 className="tracking-neg-5 absolute -bottom-20 left-1/2 -translate-x-1/2 bg-linear-180 from-background from-0% to-primary to-100% bg-clip-text text-center text-[4.5rem] font-semibold text-transparent uppercase lg:-bottom-32 xl:text-[13rem] 2xl:-bottom-32 2xl:text-[15rem]">
            Moobright
          </h1>
        </div>

        <div className="absolute -bottom-70 left-0 h-105.75 w-full bg-primary blur-[100px]"></div>
      </div>
    </footer>
  )
}

export default Footer

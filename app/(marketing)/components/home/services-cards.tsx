import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

const services = [
  {
    id: "plumbing",
    label: "Plumbing Services",
    imageURL: "/home/Tap.png",
    href: "#",
    description:
      "Plumbing problems can be stressful, so we try to keep things simple. We visit your home, look at the issue, and fix it, whether that means a repair, a replacement, or a new installation.",
    background: "#1183e5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          stroke="var(--color-foreground)"
          strokeWidth={1.5}
          fill="none"
          d="M19 14.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M5 18V9a2 2 0 0 1-2-2a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h8a2 2 0 0 1 2 2v4a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1V9h-6v9h1a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"
        />
      </svg>
    ),
    imageClassName: "w-71.75! h-76.25!",
  },
  {
    id: "fashion",
    label: "Fashion Services",
    imageURL: "/home/Manequinn.png",
    href: "#",
    description:
      "If you need an outfit chosen, altered, or styled for an occasion, our team takes care of it. We look at what you need, offer suggestions, and help you put it together.",
    background: "#A634FD",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path d="M0 0h15v15H0z" fill="none" />
        <path
          d="M4 2L1 4.5V7h3v6h7V7h3V4.5L11 2H9.5l-2 4l-2-4z"
          stroke="var(--color-foreground)"
          strokeWidth={1}
          fill="none"
        />
      </svg>
    ),
    imageClassName: "top-4",
  },
  {
    id: "laundry",
    label: "Laundry Services",
    imageURL: "/home/WashingMachine.png",
    href: "#",
    description:
      "If your clothes need washing, drying, or folding, our team takes care of it. We collect your laundry, clean it properly, sort it with care, and have it ready for you when you need it.",
    background: "#A9085B",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path d="M0 0h15v15H0z" fill="none" />
        <path
          stroke="var(--color-foreground)"
          strokeWidth={1}
          fill="none"
          d="M8 1L6 3H3S2 3 2 4v9c0 1 1 1 1 1h9s1 0 1-1V2c0-1-1-1-1-1zm.5 1h2a.499.499 0 1 1 0 1h-2a.499.499 0 1 1 0-1m-1 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"
        />
      </svg>
    ),

    imageClassName: " w-71.75 h-88",
  },
]

const ServicesCards = () => {
  return (
    <div className="services-cards flex flex-col gap-3 overflow-x-hidden py-3 lg:gap-4 lg:py-0">
      <ServiceCard {...services[0]} />
      <ServiceCard {...services[1]} />
      <ServiceCard {...services[2]} />
    </div>
  )
}

function ServiceCard({
  label,
  description,
  background,
  imageURL,
  href,
  id,
  icon,
  imageClassName,
}) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: background,
      }}
      className="relative min-h-90 w-full overflow-hidden rounded-xl bg-muted px-5 py-8 lg:flex lg:h-124.5 lg:overflow-y-hidden lg:p-7.5"
    >
      <div className="flex h-full justify-between lg:block">
        <div className="flex h-full flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex size-15 items-center justify-center rounded-full bg-background [&>svg]:size-6">
              {icon}
            </div>

            <h3 className="tracking-neg-5 text-[2rem]/[110%] font-semibold text-background lg:max-w-43.75 lg:text-[2.5rem]/[110%]">
              {label}
            </h3>
          </div>

          <p className="shrink-0 text-balance text-background lg:w-77.5 lg:max-w-77.5">
            {description}
          </p>
        </div>

        <button className="arrow right-0 bottom-0 flex size-15 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-background text-background opacity-0 lg:hidden">
          <ArrowRight />
        </button>
      </div>

      <div className="relative flex shrink-0 flex-col justify-between lg:w-140">
        <Image
          className={cn(
            "relative hidden min-w-71.75 shrink-0 self-center lg:inline",
            imageClassName
          )}
          src={imageURL}
          alt={label + " Image"}
          width={200}
          height={400}

          quality={100}
        />
        <button className="arrow absolute right-0 bottom-0 hidden size-15 shrink-0 cursor-pointer items-center justify-center self-end rounded-full border-2 border-background text-background opacity-0 lg:flex">
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ServicesCards

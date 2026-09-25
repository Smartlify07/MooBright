import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

export const services = [
  {
    title: "Plumbing Solutions",
    description:
      "Reliable plumbing solutions, from repairs and installations to everyday plumbing needs, delivered with quality and care.",
    url: "#",
    image: "/about/plumbing.png",
  },
  {
    title: "Fashion solutions",
    description:
      "From custom designs to quality finishing, we create fashion pieces that reflect your style, personality, and occasion.",
    url: "#",
    image: "/about/fashion.png",
  },
  {
    title: "Laundry solutions",
    description:
      "We take the stress out of laundry with reliable cleaning and careful garment care you can count on. From everyday clothes to delicate pieces, we handle every item with attention to detail, helping you keep your wardrobe fresh, clean, and ready to wear.",
    url: "#",
    image: "/about/drycleaning.png",
  },
]

const ServicesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <h1 className="section-header max-w-xl flex-1">
            Our multi-service brand provides
          </h1>
          <p className="max-w-xl text-center text-base/[160%] lg:text-start">
            From everyday essentials to premium styling, we bring modern
            convenience and expert care into one seamless experience.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.slice(0, 2).map((s, i) => (
              <div
                key={i}
                className="relative flex h-77 flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl p-10 lg:h-124.5"
              >
                <div className="absolute inset-0 z-40 h-full w-full bg-black/80"></div>
                <Image
                  src={s.image}
                  alt="Dry Cleaning"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={400}
                  height={400}
                />
                <div className="z-50 flex max-w-114.5 flex-col gap-6 text-center">
                  <h1 className="tracking-neg-5 text-3xl font-semibold text-background lg:text-5xl">
                    {s.title}
                  </h1>
                  <p className="text-background">{s.description}</p>
                </div>
                <button className="group z-50 flex cursor-pointer items-center gap-1 text-sm font-normal text-background transition-transform">
                  Request service{" "}
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-2" />{" "}
                </button>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            {services.slice(2).map((s, i) => (
              <div
                key={i}
                className="relative flex h-102.75 flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl bg-foreground p-10 lg:h-124.5"
              >
                <div className="absolute inset-0 z-40 h-full w-full bg-black/80"></div>
                <Image
                  src={s.image}
                  alt="Dry Cleaning"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={400}
                  height={400}
                />
                <div className="z-50 flex flex-col items-center gap-6 text-center">
                  <h1 className="tracking-neg-5 max-w-114.5 text-4xl font-semibold text-background lg:text-5xl">
                    {s.title}
                  </h1>
                  <p className="max-w-205 text-background">{s.description}</p>
                </div>
                <button className="group z-50 flex cursor-pointer items-center gap-1 text-sm font-normal text-background transition-transform">
                  Request service{" "}
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-2" />{" "}
                </button>
              </div>
            ))}
            <div className="flex flex-col gap-10 rounded-2xl bg-foreground p-10">
              <div className="flex flex-col gap-6">
                <div className="flex size-15 items-center justify-center rounded-full bg-background">
                  <Image
                    src="/home/black-sparkle.svg"
                    alt="black-sparkle"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="tracking-neg-5 text-3xl font-semibold text-background lg:text-5xl">
                    Need a quote? or help?
                  </h1>
                  <p className="text-background/80">
                    Tell us what you need and we'll connect you with the right
                    service, schedule, and care team.
                  </p>
                </div>
              </div>

              <Button
                className="group mt-auto items-center"
                size="lg"
                variant="secondary"
              >
                Get a quote{" "}
                <ArrowRight className="size-3 transition group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

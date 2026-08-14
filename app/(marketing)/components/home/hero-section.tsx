import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative h-115.25 w-full border px-5 py-10 text-primary-foreground lg:h-full lg:px-10 lg:pt-10 lg:pb-30">
      <div className="absolute top-0 left-0 -z-1 h-full w-full">
        <Image
          src="/home/Plumbing-hero.png"
          className="object-cover"
          alt="Pipes"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 1024px) 100vw"
        />
      </div>
      <div className="absolute top-0 left-0 -z-1 h-full w-full bg-[#000002]/50"></div>
      <div className="relative z-2 container mt-28 flex min-h-105.25 flex-col gap-28 lg:mt-38.5 lg:min-h-0 lg:justify-between lg:gap-0">
        <div className="flex max-w-226.75 flex-col gap-6 lg:p-6">
          <header className="flex flex-col gap-6 lg:p-2.5">
            <h1 className="tracking-neg-5 text-center text-3xl leading-[100%] font-semibold md:text-5xl lg:text-start lg:text-7xl">
              Most companies do one thing well. We do three.
            </h1>
            <p className="max-w-146 text-center text-sm lg:text-start lg:text-base">
              Somewhere right now, a pipe is leaking, an outfit needs saving,
              and laundry is piling up. Moobright is already on the way.
            </p>
          </header>

          <Button
            variant="secondary"
            className="group w-48 self-center hover:bg-secondary lg:self-start"
            size={"lg"}
          >
            Explore Services{" "}
            <ArrowRight className="duration300 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

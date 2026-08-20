import { Handshake, Heart, ShieldCheck, Sparkle } from "lucide-react"
import Image from "next/image"
import Testimonials from "./testimonials"

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <header className="flex flex-col items-center gap-6 lg:items-start lg:gap-10">
          <div className="flex items-center gap-3">
            <Image
              className="size-5"
              src="/home/black-sparkle.svg"
              alt="black-sparkle"
              width={20}
              height={20}
            />
            <div className="flex items-center">
              <div className="flex h-7.5 min-w-17 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                What
              </div>
              <div className="flex h-7.5 min-w-13 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                our
              </div>
              <div className="flex h-7.5 min-w-10.75 items-center justify-center rounded-[1.25rem] rounded-l-none border border-foreground p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                Customers
              </div>
              <div className="flex h-7.5 min-w-13.25 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                say
              </div>
            </div>
          </div>

          <div className="2xll:gap-32 flex w-full flex-col items-start gap-6 lg:flex-row lg:justify-between">
            <h1 className="section-header lg:w-124 lg:max-w-124">
              Real words from clients who trust us.{" "}
            </h1>
            <p className="text-center text-base/[160%] lg:max-w-160.75 lg:text-start 2xl:max-w-185.5">
              Hear what our clients have to say about working with us. Real
              experiences, honest feedback, and genuine results. See why they
              continue to choose us.
            </p>
          </div>
        </header>

        <Testimonials />
      </div>
    </section>
  )
}

export default TestimonialsSection

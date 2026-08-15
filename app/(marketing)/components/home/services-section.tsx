import Image from "next/image"
import React from "react"
import ServicesCards from "./services-cards"

const ServicesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-20">
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
              <div className="flex h-7.5 min-w-22 items-center justify-center rounded-[1.25rem] border border-black p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                Services
              </div>
              <div className="flex h-7.5 min-w-19.25 items-center justify-center rounded-[1.25rem] rounded-l-none border border-black p-2.5 align-middle text-base/[160%] font-medium text-foreground">
                For you
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-32">
            <h1 className="section-header flex-1 lg:w-139">
              Explore what <span className="text-primary">MooBright </span>
              offers
            </h1>
            <p className="text-center text-base/[160%] lg:max-w-168.75 lg:text-start">
              Whether it's creating beautiful styles for you to wear, staying on
              top of your laundry, or helping with all your plumbing needs, we
              bring the same standard of care to everything we do.
            </p>
          </div>
        </header>

        <ServicesCards />
      </div>
    </section>
  )
}

export default ServicesSection

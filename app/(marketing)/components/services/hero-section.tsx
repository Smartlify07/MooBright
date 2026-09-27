"use client"
import React from "react"
import WaterPumpIcon from "@iconify-react/mdi/tap"
import ClothingStoreIcon from "@iconify-react/maki/clothing-store"
import LaundryIcon from "@iconify-react/maki/laundry"
const HeroSection = () => {
  return (
    <section className="section-spacing mt-18.25">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <header className="grid gap-6 self-center">
          <h1 className="tracking-neg-5 text-center text-5xl font-semibold">
            Tell us what you need
          </h1>
          <p className="max-w-3xl text-center text-base">
            Choose a service below to get started. Once you make your selection,
            the form will automatically adjust to ask for the information we
            need to better understand your request and assist you efficiently.
          </p>
        </header>
        <div className="grid gap-0 lg:grid-cols-3">
          <div className="flex h-100 flex-col gap-9 rounded-l-2xl bg-[#1183E5] p-7.5">
            <div className="flex max-w-43.75 flex-col gap-4">
              <div className="flex size-15 items-center justify-center rounded-full bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
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
              </div>
              <h3 className="tracking-neg-5 text-[2.5rem]/[110%] font-medium text-background">
                Plumbing Services
              </h3>
            </div>

            <p className="max-w-xs text-balance text-background">
              Plumbing problems can be stressful, so we try to keep things
              simple. We visit your home, look at the issue, and fix it, whether
              that means a repair, a replacement, or a new installation.
            </p>
          </div>
          <div className="flex h-100 flex-col gap-9 bg-[#A634FD] p-7.5">
            <div className="flex max-w-43.75 flex-col gap-4">
              <div className="flex size-15 items-center justify-center rounded-full bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
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
              </div>
              <h3 className="tracking-neg-5 text-[2.5rem]/[110%] font-medium text-background">
                Fashion Services
              </h3>
            </div>

            <p className="max-w-xs text-balance text-background">
              If you need an outfit chosen, altered, or styled for an occasion,
              our team takes care of it. We look at what you need, offer
              suggestions, and help you put it together.
            </p>
          </div>
          <div className="flex h-100 flex-col gap-9 rounded-r-2xl bg-[#A9085B] p-7.5">
            <div className="flex max-w-43.75 flex-col gap-4">
              <div className="flex size-15 items-center justify-center rounded-full bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 15 15"
                >
                  <path d="M0 0h15v15H0z" fill="none" />
                  <path
                    stroke="var(--color-foreground)"
                    strokeWidth={1}
                    fill="none"
                    d="M8 1L6 3H3S2 3 2 4v9c0 1 1 1 1 1h9s1 0 1-1V2c0-1-1-1-1-1zm.5 1h2a.499.499 0 1 1 0 1h-2a.499.499 0 1 1 0-1m-1 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"
                  />
                </svg>{" "}
              </div>
              <h3 className="tracking-neg-5 text-[2.5rem]/[110%] font-medium text-background">
                Laundry Services
              </h3>
            </div>

            <p className="max-w-xs text-balance text-background">
              If your clothes need washing, drying, or folding, our team takes
              care of it. We collect your laundry, clean it properly, sort it
              with care, and have it ready for you when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

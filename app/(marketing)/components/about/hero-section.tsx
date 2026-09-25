import { ArrowDown } from "lucide-react"
import React from "react"
const HeroSection = () => {
  return (
    <section className="section-spacing mt-18.25">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
          <header className="tracking-neg-5 flex items-center text-center text-3xl font-semibold lg:text-start lg:text-5xl">
            <h1 className="text-center">Our Story</h1>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="hidden lg:inline"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 18L6 6m2 12h10V8"
              />
            </svg>
          </header>

          <article className="max-w-2xl text-base lg:text-2xl">
            MooBright began with our founder, Moses Oladele, and his work in
            plumbing. What started as a personal pursuit of providing dependable
            plumbing solutions gradually grew into a bigger vision — to build a
            brand that could serve people in more ways.
            <br />
            <br />
            With time, that vision became MooBright: a growing multi-service
            brand built around practical solutions, quality work, and a
            commitment to serving people well. Today, MooBright has grown beyond
            its beginnings, bringing three services under one brand. While the
            services have expanded, the foundation remains the same: good work,
            dependable service, and a desire to keep growing.
          </article>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

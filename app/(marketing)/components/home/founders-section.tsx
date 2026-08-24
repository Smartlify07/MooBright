import { Handshake, Heart, ShieldCheck, Sparkle } from "lucide-react"
import Image from "next/image"
import TeamCards from "./founders-cards"

const FoundersSection = () => {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <header className="flex flex-col items-center gap-6 lg:items-start lg:gap-10">
          <div className="flex items-center gap-3">
            <Image
              className="size-5"
              src="/home/black-sparkle.svg"
              alt="white-sparkle"
              width={20}
              height={20}
            />
            <div className="flex items-center">
              <div className="flex h-7.5 min-w-15.25 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium">
                Meet
              </div>
              <div className="flex h-7.5 min-w-11.75 items-center justify-center rounded-[1.25rem] rounded-l-none border border-foreground p-2.5 align-middle text-base/[160%] font-medium">
                The
              </div>
              <div className="flex h-7.5 min-w-15.25 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium">
                Team
              </div>
            </div>
          </div>

          <div className="2xll:gap-32 flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="section-header lg:w-139 lg:max-w-139">
              Meet the minds behind{" "}
              <span className="text-primary">MooBright</span>{" "}
            </h1>
            <p className="text-center text-base/[160%] lg:max-w-119.5 lg:text-start">
              Get to know the people whose ideas, expertise, and dedication keep
              MooBright moving forward
            </p>
          </div>
        </header>

        <TeamCards />
      </div>
    </section>
  )
}

export default FoundersSection

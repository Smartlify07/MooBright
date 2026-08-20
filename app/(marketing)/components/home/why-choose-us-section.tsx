import { Handshake, Heart, ShieldCheck, Sparkle } from "lucide-react"
import Image from "next/image"

const whyChooseUs = [
  {
    title: "Trust MooBright always",
    description:
      " You’re in good hands. We believe trust is earned through how wework. From plumbing and laundry to fashion care, you can rely on Moobright to handle every request with professionalism,  efficiency, and the attention it deserves.",
    patternPath: "/home/pattern-1.svg",
    color: "#017CE4",
    icon: ShieldCheck,
  },
  {
    title: "Reliability all the time",
    description:
      "From the first request to the finished job, we follow through and make sure your needs are properly taken care of. We stay attentive, communicate clearly, and work efficiently to ensure every service is handled with the care and professionalism you deserve.",
    patternPath: "/home/pattern-2.svg",
    color: "#D84939",
    icon: Handshake,
  },
  {
    title: "Genuine care",
    description:
      " Because the little things matter. We take the time to understand what you need, handle your belongings with care, and pay attention to every detail so you can feel confident in the service you receive.",
    patternPath: "/home/pattern-3.svg",
    color: "#D39526",
    icon: Heart,
  },
]

const WhyChooseUsSection = () => {
  return (
    <section className="section-spacing bg-[#001A56]">
      <div className="container flex flex-col gap-9 lg:gap-20">
        <header className="flex flex-col items-center gap-6 lg:items-start lg:gap-10">
          <div className="flex items-center gap-3">
            <Image
              className="size-5"
              src="/home/white-sparkle.svg"
              alt="white-sparkle"
              width={20}
              height={20}
            />
            <div className="flex items-center">
              <div className="flex h-7.5 min-w-15.25 items-center justify-center rounded-[1.25rem] border border-background p-2.5 align-middle text-base/[160%] font-medium text-background">
                Why
              </div>
              <div className="flex h-7.5 min-w-21.25 items-center justify-center rounded-[1.25rem] rounded-l-none border border-background p-2.5 align-middle text-base/[160%] font-medium text-background">
                Choose{" "}
              </div>
              <div className="flex h-7.5 min-w-10.75 items-center justify-center rounded-[1.25rem] border border-background p-2.5 align-middle text-base/[160%] font-medium text-background">
                Us{" "}
              </div>
            </div>
          </div>

          <div className="2xll:gap-32 flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <h1 className="section-header text-background! lg:w-124 lg:max-w-124">
              You can always count on us to deliver right
            </h1>
            <p className="text-center text-base/[160%] text-background lg:max-w-160.75 lg:text-start 2xl:max-w-185.5">
              Choosing Moobright means choosing a team you can trust. Whether
              it’s your plumbing, fashion, or laundry needs, we’re committed to
              providing dependable, efficient service and making sure every job
              is handled properly, with the care and attention it deserves.
            </p>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="min-116 flex flex-col gap-6 rounded-lg bg-background px-5 py-7.5 transition-transform duration-300 lg:min-h-111.5 lg:hover:-translate-y-2"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="flex flex-col justify-between space-y-6 lg:min-h-74.25">
                  <div className="space-y-6">
                    <item.icon
                      strokeWidth={1.5}
                      className="size-13"
                      style={{ color: item.color }}
                    />
                    <h1 className="tracking-neg-5 min-h-21.75 max-w-91.5 text-[2rem] font-medium lg:text-4xl/[110%]">
                      {item.title}
                    </h1>
                  </div>

                  <p>{item.description}</p>
                </div>
                <Image
                  src={item.patternPath}
                  width={446}
                  height={64}
                  quality={100}
                  className="mt-auto h-16 w-full rounded-lg object-cover"
                  alt={`${item.title} pattern`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection

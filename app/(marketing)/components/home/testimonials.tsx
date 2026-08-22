"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    message:
      "My husband and I have tried on the cargo pants, and we absolutely love them! He really likes his, and mine fits perfectly. Thank you so much!",
    state: "Lagos",
    background: "#8BFFCD",
    image: "/home/testimonial1.png",
  },
  {
    id: 2,
    message:
      "Thank you so much for the outfit. I’m really pleased with it, and I’m confident we’ll be doing more business together going forward. Looking forward to more!",
    state: "Lagos",
    background: "#6FB6F3",
    image: "/home/testimonial2.png",
  },
  {
    id: 3,
    message:
      "The service was excellent from start to finish. My clothes came back fresh, clean, and neatly handled. I’ll definitely be using their laundry service again.",
    state: "Ibadan",
    background: "#FF7F73",
    image: "/home/testimonial3.png",
  },
]

const cardPositions = [
  {
    x: 0,
    y: 0,
    rotate: 0,
    width: 356,
    height: 412,
    zIndex: 3,
  },
  {
    x: 120,
    y: 40,
    rotate: 20,
    width: 264,
    height: 331,
    zIndex: 2,
  },
  {
    x: 150,
    y: 70,
    rotate: 30,
    width: 256,
    height: 308,
    zIndex: 1,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const currentTestimonial = testimonials[currentIndex]

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-[#001A56] p-4 pb-8 md:p-6 md:pb-10 lg:px-13">
      {/* SERVICE LABEL */}
      <div className="self-end rounded-lg bg-background/12 p-2.5 text-background">
        Fashion Service
      </div>

      <div className="mt-8 flex w-full flex-col items-center gap-10 md:mt-0 md:flex-row md:items-stretch md:justify-between md:gap-40">
        {/* DESKTOP CARD STACK */}
        <div className="relative hidden h-103 w-89 shrink-0 md:block">
          {testimonials.map((testimonial) => {
            const distance =
              (testimonial.id - 1 - currentIndex + testimonials.length) %
              testimonials.length

            const position = cardPositions[distance]
            const isFront = distance === 0

            return (
              <motion.div
                key={testimonial.id}
                animate={{
                  x: position.x,
                  y: position.y,
                  rotate: position.rotate,
                  width: position.width,
                  height: position.height,
                }}
                style={{
                  zIndex: position.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.8,
                }}
                className="absolute top-0 left-0 overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: testimonial.background,
                  }}
                />

                <motion.img
                  src={testimonial.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{
                    opacity: isFront ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: isFront ? 0.12 : 0,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* TESTIMONIAL CONTENT */}
        <div className="flex min-h-0 w-full max-w-[697px] flex-col items-center justify-between text-center md:min-h-[446px] md:items-stretch md:text-left">
          {/* MOBILE IMAGE */}
          <div className="mb-8 flex justify-center md:hidden">
            <div className="size-12.5 overflow-hidden rounded-full border-2 border-background">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentTestimonial.id}
                  src={currentTestimonial.image}
                  alt=""
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction * 30,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction * -30,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="h-full w-full rounded-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={currentTestimonial.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 40,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: direction * -40,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                className="tracking-neg-5 text-3xl/[142%] text-background md:text-4xl/[142%]"
              >
                "{currentTestimonial.message}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex w-full flex-col items-center gap-8 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-0">
            {/* CUSTOMER INFO */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="space-y-1 text-center text-background md:text-left"
              >
                <h3 className="text-2xl font-semibold md:text-[2rem]">
                  Satisfied customer
                </h3>

                <h5 className="text-2xl md:text-[2rem]">
                  {currentTestimonial.state}
                </h5>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION */}
            <div className="flex items-center gap-4 text-background">
              <button
                onClick={previous}
                className="flex size-13 items-center justify-center rounded-full border border-background md:size-15"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-5 md:size-6" />
              </button>

              <button
                onClick={next}
                className="flex size-13 items-center justify-center rounded-full border border-background md:size-15"
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-5 md:size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

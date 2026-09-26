"use client"
import React from "react"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlusIcon } from "lucide-react"
import StarIcon from "@iconify-react/noto/star"
import Arrow from "@iconify-react/maki/arrow"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar isTransparent />
      <div className="from relative flex h-screen items-center justify-center overflow-hidden lg:mt-40 lg:py-20">
        <div className="relative z-50 flex w-full flex-col items-center gap-12 text-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="relative text-[6.25rem] font-medium text-background lg:text-[18.75rem]/[300px]">
                <div className="absolute top-1/5 left-14 flex size-8 rotate-30 items-center justify-center rounded-full bg-background text-[#38F808] lg:-left-5 lg:size-12.5">
                  <Arrow className="size-4 lg:size-7" />
                </div>
                <div className="absolute -top-2 left-[45%] flex size-8 items-center justify-center rounded-full bg-background text-[#38F808] lg:-top-6 lg:size-12.5">
                  <StarIcon className="size-4 lg:size-7" />
                </div>
                <Image
                  src="/icons/cross-pill.svg"
                  className="absolute top-1/2 right-15 flex size-12 items-center justify-center lg:-right-5 lg:size-25"
                  width={100}
                  height={100}
                  alt="cross-pill"
                />
                404
              </h1>
              <div className="flex flex-col gap-6">
                <h3 className="tracking-neg-5 text-3xl font-bold text-background lg:-mt-4 lg:text-[2.5rem]">
                  Ooops...this page took a detour
                </h3>
                <p className="max-w-xl text-background/90">
                  Looks like you’ve reached a page that doesn’t exist. Let’s
                  take you somewhere better.
                </p>
              </div>
            </div>
          </div>

          <Link href="/">
            <Button variant="secondary" size="lg" className="group w-48">
              Go back home{" "}
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="absolute top-50 z-20 h-224.75 w-full bg-[#014594]/28 blur-[500px]"></div>
      </div>
    </div>
  )
}

export default NotFound

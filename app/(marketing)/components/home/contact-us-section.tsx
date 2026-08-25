"use client"
import Image from "next/image"
import BaselineFacebookIcon from "@iconify-react/ic/baseline-facebook"
import InstagramOutlinedIcon from "@iconify-react/ant-design/instagram-outlined"
import WhatsappFillIcon from "@iconify-react/ri/whatsapp-fill"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.email({
    error: "Invalid email address",
  }),
  name: z.string("Name cannot be empty").min(1, "This field cannot be empty"),
  message: z
    .string("Message cannot be empty")
    .min(50, "Cannot be less than 50 characters"),
})
const ContactUsSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast("Your message has been sent to the team", {
      className: "font-sans",
    })
    console.log(data)
  }
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
              <div className="flex h-7.5 min-w-15.25 items-center justify-center rounded-[1.25rem] border border-foreground p-2.5 align-middle text-base/[160%] font-medium">
                Contact
              </div>
              <div className="flex h-7.5 min-w-11.75 items-center justify-center rounded-[1.25rem] rounded-l-none border border-foreground p-2.5 align-middle text-base/[160%] font-medium">
                Us
              </div>
            </div>
          </div>

          <div className="2xll:gap-32 flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="section-header lg:w-139 lg:max-w-139">
              Reach out to us, we’re always at your service{" "}
            </h1>
            <p className="text-center text-base/[160%] lg:max-w-119.5 lg:text-start">
              Whether you’re looking to book a service, make an inquiry, or need
              assistance, we are always ready to help.
            </p>
          </div>
        </header>

        <div className="flex flex-col-reverse gap-9 lg:grid lg:grid-cols-2 lg:gap-0">
          <div className="max-w-129.75">
            <div className="flex flex-col gap-6">
              <ContactItem title="Phone Number">
                <p className="text-muted-foreground">09112457594</p>
              </ContactItem>
              <ContactItem title="Email">
                <p className="text-muted-foreground">09112457594</p>
              </ContactItem>
              <ContactItem title="Connect with us">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <InstagramOutlinedIcon height="1.25rem" />
                  <BaselineFacebookIcon height="1.25rem" />{" "}
                  <WhatsappFillIcon height="1.25rem" />
                </div>
              </ContactItem>
            </div>
          </div>

          <div className="rounded-2xl bg-[url(/home/contact-collage.png)] bg-cover bg-center bg-no-repeat p-4">
            <div className="w-full rounded-2xl bg-[#001A56] px-6 py-10 lg:p-10">
              <h3 className="tracking-neg-5 mb-4 text-3xl font-semibold text-background lg:text-[2.5rem]">
                Send us a message
              </h3>
              <p className="text-center text-base text-background lg:text-start">
                Have a question, need more information or want to make
                inquiries? Fill out the form and we will get back to you as soon
                as possible
              </p>

              <div className="flex flex-col gap-5">
                <form
                  id="contact-form"
                  className="mt-9 lg:mt-10"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FieldGroup className="gap-5">
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="contact-form-name"
                            className="text-background"
                          >
                            Name
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-name"
                            aria-invalid={fieldState.invalid}
                            placeholder="John Doe"
                            autoComplete="off"
                            className="h-12 text-background placeholder:text-background/90 lg:h-12"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="contact-form-email"
                            className="text-background"
                          >
                            Email
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-email"
                            aria-invalid={fieldState.invalid}
                            placeholder="johndoe@email.com"
                            autoComplete="off"
                            className="h-12 text-background placeholder:text-background/90 lg:h-12"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="contact-form-message"
                            className="text-background"
                          >
                            Message
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupTextarea
                              {...field}
                              id="contact-form-message"
                              placeholder="I'm having an issue with the login button on mobile."
                              rows={6}
                              className="max-h-40.5 min-h-40.5 resize-none text-background placeholder:text-background/90"
                              aria-invalid={fieldState.invalid}
                            />
                          </InputGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>

                <Field>
                  <Button
                    type="submit"
                    variant="outline"
                    className="h-9 h-10 rounded-lg lg:h-12"
                    form="contact-form"
                  >
                    Submit
                  </Button>
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col gap-5 border-b pb-6">
      <h3 className="font-semibold lg:text-xl">{title}</h3>
      {children}
    </div>
  )
}

export default ContactUsSection

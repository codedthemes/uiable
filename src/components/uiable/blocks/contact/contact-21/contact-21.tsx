"use client"

import type { ReactNode } from "react"

// next
import Image from "next/image"

// third-party
import { motion, useReducedMotion, type Variants } from "framer-motion"

// assets
import { Mail, MapPin, Phone } from "lucide-react"

interface ContactMethodCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  linkLabel: string
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const

function StaggerItem({ children, className }: StaggerItemProps) {
  const reduce = Boolean(useReducedMotion())
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.3 : 0.5, ease: EASE_ENTRANCE },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

function ContactMethodCard({
  icon,
  title,
  description,
  href,
  linkLabel,
}: ContactMethodCardProps) {
  return (
    <StaggerItem className="flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-muted/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-2 text-muted-foreground">{description}</p>
        <a href={href} className="font-semibold text-primary hover:underline">
          {linkLabel}
        </a>
      </div>
    </StaggerItem>
  )
}

//  ------------------------------ | CONTACT 21 | ------------------------------  //

export default function Contact21() {
  const reduce = Boolean(useReducedMotion())
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0.06 : 0.12,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
          variants={containerVariants}
          className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto_auto_1fr]"
        >
          <ContactMethodCard
            icon={<Mail className="size-5" />}
            title="Email Us"
            description="For general inquiries and support."
            href="mailto:hello@uiable.com"
            linkLabel="hello@uiable.com"
          />

          <ContactMethodCard
            icon={<Phone className="size-5" />}
            title="Call Us"
            description="Mon-Fri from 8am to 6pm EST."
            href="tel:+18001234567"
            linkLabel="+1 (800) 123-4567"
          />

          <StaggerItem className="relative flex min-h-48 items-end overflow-hidden rounded-2xl border border-border/60 bg-muted p-6 sm:col-span-2 md:min-h-64 lg:col-span-1 lg:h-full">
            <Image
              src="https://cdn.uiable.com/img-5.jpg"
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 33vw"
              className="object-cover opacity-60 mix-blend-multiply dark:opacity-50 dark:mix-blend-normal dark:brightness-90 dark:contrast-110 dark:hue-rotate-180 dark:invert"
            />
            <div className="relative z-10 w-full rounded-xl border border-border/60 bg-card/90 p-4 shadow-sm backdrop-blur-sm">
              <div className="mb-1 flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">
                  Headquarters
                </h3>
              </div>
              <p className="ml-8 text-sm text-muted-foreground">
                123 Innovation Drive
                <br />
                Suite 400
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </StaggerItem>
        </motion.div>
      </div>
    </section>
  )
}

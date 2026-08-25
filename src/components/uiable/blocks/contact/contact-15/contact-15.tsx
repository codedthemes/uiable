"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// third-party
import { motion, type Variants } from "framer-motion"

// assets
import { MapPin, MessageCircle, Phone } from "lucide-react"

// types
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.45 },
  },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const formFieldVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
}

const formStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
}

//  ------------------------------ | CONTACT 15 | ------------------------------  //

export default function Contact15() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decorative blobs */}
      <motion.div
        className="absolute inset-x-0 top-0 z-10 h-2/4 bg-blue-500"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Animated floating orb */}
      <motion.div
        className="pointer-events-none absolute top-0 left-1/4 z-10 size-72 rounded-full bg-blue-400/20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-10 right-1/3 z-10 size-48 rounded-full bg-blue-300/15 blur-2xl"
        animate={{
          y: [0, 16, 0],
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="absolute inset-0 z-1 bg-blue-500/5" />

      <div className="relative z-30 mx-auto max-w-300 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center gap-10">
            <motion.div
              variants={fadeLeft}
              className="relative mx-auto flex h-full max-w-140 flex-col items-start justify-between gap-8"
            >
              <div className="flex flex-col items-start gap-8">
                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  custom={0.1}
                  whileHover={{ scale: 1.04 }}
                  className="flex cursor-default items-center gap-2 rounded-full bg-blue-200/20 px-5 py-2 text-blue-50"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="size-2 rounded-full bg-blue-200"
                  />
                  <span className="text-md font-semibold">Contact Us</span>
                </motion.div>

                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <motion.h2
                      variants={fadeUp}
                      custom={0.18}
                      className="text-xl font-medium text-blue-50 sm:text-3xl"
                    >
                      Let&apos;s talk about you
                    </motion.h2>
                    <motion.p
                      variants={fadeUp}
                      custom={0.24}
                      className="max-w-200 text-lg font-semibold text-blue-200"
                    >
                      Your goals. Our expertise.
                    </motion.p>
                  </div>
                  <motion.p
                    variants={fadeUp}
                    custom={0.3}
                    className="max-w-140 text-blue-100"
                  >
                    Whether you have a question, need support, or want to
                    discuss a new project, we&apos;re here to help you succeed.
                  </motion.p>
                </div>
              </div>

              {/* Contact info cards */}
              <div className="flex w-full flex-col gap-6">
                <motion.span
                  variants={fadeUp}
                  custom={0.36}
                  className="text-sm font-semibold text-blue-50"
                >
                  Other info
                </motion.span>

                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {/* Email card */}
                  <motion.div
                    variants={cardVariant}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 30px -6px #4680ff55",
                      transition: { duration: 0.25 },
                    }}
                    className="relative h-full cursor-pointer overflow-hidden rounded-lg bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:p-6 dark:shadow-none"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <MessageCircle className="size-6 text-blue-500" />
                      </motion.div>
                      <div className="flex grow flex-col gap-0.5">
                        <p className="text-md text-slate-900 transition-all dark:text-slate-100">
                          Email
                        </p>
                        <a href="mailto:contact@example.com">
                          <p className="text-base text-slate-400 transition-all hover:text-blue-500">
                            contact@example.com
                          </p>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone card */}
                  <motion.div
                    variants={cardVariant}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 30px -6px #4680ff55",
                      transition: { duration: 0.25 },
                    }}
                    className="relative h-full cursor-pointer overflow-hidden rounded-lg bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:p-6 dark:shadow-none"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Phone className="size-6 text-blue-500" />
                      </motion.div>
                      <div className="flex grow flex-col gap-0.5">
                        <p className="text-md text-slate-900 transition-all dark:text-slate-100">
                          Phone
                        </p>
                        <a href="tel:+15551234567">
                          <p className="text-base text-slate-400 transition-all hover:text-blue-500">
                            +1 (555) 123-4567
                          </p>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Address card */}
                  <motion.div
                    variants={cardVariant}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 30px -6px #4680ff55",
                      transition: { duration: 0.25 },
                    }}
                    className="relative h-full cursor-pointer overflow-hidden rounded-lg bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:p-6 md:col-span-2 dark:shadow-none"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <MapPin className="size-6 text-blue-500" />
                      </motion.div>
                      <div className="flex grow flex-col gap-0.5">
                        <p className="text-md text-slate-900 transition-all dark:text-slate-100">
                          Address
                        </p>
                        <a href="#">
                          <p className="text-base text-slate-400 transition-all hover:text-blue-500">
                            118 E John Carpenter Fwy, Irving, Texas
                          </p>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Right column: form ────────────────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            className="relative overflow-hidden rounded-lg bg-white p-5 shadow-[0_0_40px_-8px_#4680ff38] md:p-8 lg:p-12 dark:bg-slate-800 dark:shadow-none"
          >
            <motion.div
              variants={formStagger}
              className="mx-auto flex w-full max-w-xl flex-col gap-6"
            >
              <motion.h3
                variants={formFieldVariant}
                className="text-lg font-medium text-slate-900 md:text-3xl dark:text-slate-100"
              >
                Send us Message
              </motion.h3>

              <FieldGroup className="gap-5">
                <motion.div variants={formFieldVariant}>
                  <Field>
                    <FieldLabel htmlFor="contact15-name">Full Name</FieldLabel>
                    <Input id="contact15-name" placeholder="Jane Smith" />
                  </Field>
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <Field>
                    <FieldLabel htmlFor="contact15-email">
                      Email Address
                    </FieldLabel>
                    <Input
                      id="contact15-email"
                      type="email"
                      placeholder="testing@gmail.com"
                    />
                  </Field>
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <Field>
                    <FieldLabel htmlFor="contact15-budget">
                      Current monthly social media budget?
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Budget..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">
                          $1,000 - $5,000
                        </SelectItem>
                        <SelectItem value="5000-10000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="10000-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </motion.div>

                <motion.div
                  variants={formFieldVariant}
                  className="flex flex-col gap-3"
                >
                  <span className="text-sm font-medium">
                    What services are you interested in?
                  </span>
                  <RadioGroup
                    defaultValue="content-creation"
                    className="grid grid-cols-1 gap-2 lg:grid-cols-2"
                  >
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <RadioGroupItem value="content-creation" />
                      <span>Content Creation</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <RadioGroupItem value="social-management" />
                      <span>Social Management</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <RadioGroupItem value="paid-media" />
                      <span>Paid Media</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <RadioGroupItem value="brand-strategy" />
                      <span>Brand Strategy</span>
                    </label>
                  </RadioGroup>
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <Field>
                    <FieldLabel htmlFor="contact15-message">Message</FieldLabel>
                    <Textarea
                      id="contact15-message"
                      rows={3}
                      placeholder="Tell us about your business..."
                      className="resize-none"
                    />
                  </Field>
                </motion.div>

                <motion.div
                  variants={formFieldVariant}
                  className="flex flex-wrap items-center justify-center gap-2 md:gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:px-10">
                      Submit
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="rounded-full border-0 border-b-2 border-b-slate-200 bg-slate-50 text-slate-900 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:px-10">
                      Clear
                    </Button>
                  </motion.div>
                </motion.div>
              </FieldGroup>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

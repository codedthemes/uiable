"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// third-party
import { motion, type Variants } from "framer-motion"

//  ------------------------------ | CONTACT 5 | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const sidebarCardVariants: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact5() {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 py-24 sm:py-32">
      <motion.span
        animate={{
          scale: [1, 1.08, 1],
          x: ["-50%", "-48%", "-50%"],
          y: [0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-80 left-2/4 block h-100 w-100 -translate-x-2/4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 lg:top-2/4 lg:-right-120 lg:left-auto lg:-translate-y-2/4"
      ></motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-20 bg-slate-900/10 backdrop-blur-[150px]"
      ></motion.div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center gap-6 lg:flex-row"
        >
          <div className="w-full basis-full text-center lg:basis-5/12">
            <div className="dark mx-auto w-full rounded-xl bg-slate-800 p-5 sm:p-14">
              <div className="flex flex-col gap-8">
                <div className="mx-auto flex max-w-108 flex-col items-center gap-2 text-center sm:gap-4">
                  <motion.h2
                    variants={itemVariants}
                    className="text-lg font-medium text-slate-50 sm:text-3xl"
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="mmax-w-90 text-slate-300"
                  >
                    Get in touch for questions, support, or feedback. We’re here
                    to help and hear from you.
                  </motion.p>
                </div>
                <FieldGroup>
                  <div className="grid grid-cols-12 gap-6 text-left">
                    <div className="col-span-6">
                      <motion.div variants={itemVariants}>
                        <Field>
                          <FieldLabel
                            className="text-slate-100"
                            htmlFor="fieldgroup-name"
                          >
                            First Name
                          </FieldLabel>
                          <Input
                            id="fieldgroup-name"
                            placeholder="Jordan"
                            className="border-slate-600 bg-slate-700 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30"
                          />
                        </Field>
                      </motion.div>
                    </div>
                    <div className="col-span-6">
                      <motion.div variants={itemVariants}>
                        <Field>
                          <FieldLabel
                            className="text-slate-100"
                            htmlFor="fieldgroup-lname"
                          >
                            Last Name
                          </FieldLabel>
                          <Input
                            id="fieldgroup-lname"
                            placeholder="Lee"
                            className="border-slate-600 bg-slate-700 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30"
                          />
                        </Field>
                      </motion.div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6 text-left">
                    <div className="col-span-6">
                      <motion.div variants={itemVariants}>
                        <Field>
                          <FieldLabel
                            className="text-slate-100"
                            htmlFor="fieldgroup-email"
                          >
                            Email
                          </FieldLabel>
                          <Input
                            id="fieldgroup-email"
                            type="email"
                            placeholder="name@example.com"
                            className="border-slate-600 bg-slate-700 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30"
                          />
                        </Field>
                      </motion.div>
                    </div>
                    <div className="col-span-6">
                      <motion.div variants={itemVariants}>
                        <Field>
                          <FieldLabel
                            className="text-slate-100"
                            htmlFor="fieldgroup-subject"
                          >
                            Subject
                          </FieldLabel>
                          <Input
                            id="fieldgroup-subject"
                            placeholder="Marketing"
                            className="border-slate-600 bg-slate-700 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30"
                          />
                        </Field>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div variants={itemVariants} className="text-left">
                    <Field>
                      <FieldLabel
                        className="text-slate-100"
                        htmlFor="textarea-header-footer-12"
                      >
                        Messege
                      </FieldLabel>
                      <Textarea
                        id="textarea-header-footer-12"
                        placeholder="Enter your text here..."
                        className="resize-none border-slate-600 bg-slate-700 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/30"
                      />
                    </Field>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Field orientation="horizontal" className="justify-center">
                      <Button
                        type="reset"
                        size="lg"
                        variant="outline"
                        className="rounded-full text-slate-100 hover:translate-y-1 hover:opacity-90"
                      >
                        Reset
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="rounded-full bg-linear-to-r from-cyan-500 to-blue-500 shadow-[0_4px_6px_-2px_#b6c0dbd9] transition-all hover:translate-y-1 hover:opacity-90 hover:shadow-none dark:shadow-none"
                      >
                        Submit
                      </Button>
                    </Field>
                  </motion.div>
                </FieldGroup>
              </div>
            </div>
          </div>
          <div className="w-full basis-full text-left lg:basis-5/12">
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Email",
                  color:
                    "bg-pink-500/10 text-pink-500 group-hover:bg-white group-hover:text-pink-500",
                  href: "mailto:contact@example.com",
                  value: "contact@example.com",
                  hoverBg: "hover:bg-pink-500",
                  icon: (
                    <svg
                      className="size-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6a.68.68 0 0 1 0 1.36H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.96a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09c.38 0 .68.31.68.68 0 .37-.31.68-.69.68Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5Zm.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Address",
                  color:
                    "bg-sky-500/10 text-sky-500 group-hover:bg-white group-hover:text-sky-500",
                  href: "#",
                  value: "118 E John Carpenter Fwy, Irving, Texas",
                  hoverBg: "hover:bg-sky-500",
                  icon: (
                    <svg
                      className="size-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Zm-8.62 5.01a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Phone",
                  color:
                    "bg-lime-500/10 text-lime-500 group-hover:bg-white group-hover:text-lime-500",
                  href: "tel:+1 (555) 123-4567",
                  value: "+1 (555) 123-4567",
                  hoverBg: "hover:bg-lime-500",
                  icon: (
                    <svg
                      className="size-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
                      />
                    </svg>
                  ),
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={sidebarCardVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`group cursor-pointer rounded-2xl p-6 transition-all ${card.hoverBg}`}
                >
                  <div className="flex flex-row items-center gap-6">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className={`mx-auto inline-flex size-16 shrink-0 items-center justify-center rounded-full transition-all ${card.color}`}
                    >
                      {card.icon}
                    </motion.div>
                    <div className="flex grow flex-col gap-0.5">
                      <p className="text-lg text-slate-100 transition-all group-hover:text-white sm:text-xl">
                        {card.title}
                      </p>
                      <a href={card.href}>
                        <p className="text-md text-slate-400 transition-all group-hover:text-white sm:text-lg">
                          {card.value}
                        </p>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

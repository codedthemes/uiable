"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// third-party
import { motion, type Variants } from "framer-motion"

//  ------------------------------ | CONTACT 7 | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const mapVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact7() {
  return (
    <div className="relative overflow-hidden bg-slate-200 pt-24 sm:pt-32 lg:pb-24 dark:bg-slate-800">
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="w-full basis-full text-center lg:basis-4/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="mx-auto w-full rounded-xl bg-card p-5 sm:p-14"
            >
              <div className="flex flex-col gap-8">
                <div className="mx-auto flex max-w-108 flex-col items-center gap-2 text-center sm:gap-4">
                  <motion.h2
                    variants={itemVariants}
                    className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-100"
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="mmax-w-90 text-slate-600 dark:text-slate-400"
                  >
                    Get in touch for questions, support, or feedback. We’re here
                    to help and hear from you.
                  </motion.p>
                </div>
                <FieldGroup className="text-left">
                  <motion.div variants={itemVariants}>
                    <Field>
                      <FieldLabel htmlFor="fieldgroup-name">
                        First Name
                      </FieldLabel>
                      <Input id="fieldgroup-name" placeholder="Jordan" />
                    </Field>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Field>
                      <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                      <Input
                        id="fieldgroup-email"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Field>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Field>
                      <FieldLabel htmlFor="textarea-header-footer-12">
                        Messege
                      </FieldLabel>
                      <Textarea
                        id="textarea-header-footer-12"
                        placeholder="Enter your text here..."
                        className="resize-none"
                      />
                    </Field>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Field orientation="horizontal" className="justify-center">
                      <Button
                        type="reset"
                        size="lg"
                        variant="outline"
                        className="rounded-full bg-card hover:translate-y-1 hover:opacity-90"
                      >
                        Reset
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="rounded-full shadow-[0_4px_6px_-2px_#b6c0dbd9] transition-all hover:translate-y-1 hover:opacity-90 hover:shadow-none dark:shadow-none"
                      >
                        Send Message
                      </Button>
                    </Field>
                  </motion.div>
                </FieldGroup>
              </div>
            </motion.div>
          </div>
          <div className="w-full basis-full lg:basis-5/12"></div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={mapVariants}
        className="z-20 w-full max-lg:h-76 lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/4"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.987145437051!2d72.86633095391547!3d21.231976027219776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0778f12ea7%3A0xd4bc1f45fa091301!2sSurat%20Digital%20Valley!5e0!3m2!1sen!2sin!4v1779250060915!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  )
}

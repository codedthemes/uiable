"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// third-party
import { motion, type Variants } from "framer-motion"

//  ------------------------------ | CONTACT 3 | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Contact3() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 mx-auto max-w-250">
        <div className="auth-bg absolute inset-0">
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -right-20 block h-62.5 w-62.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
          ></motion.span>
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-37.5 -right-37.5 block h-8 w-8 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
          ></motion.span>
          <motion.span
            animate={{
              scale: [1, 1.15, 1],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-37.5 -left-37.5 block h-8 w-8 rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
          ></motion.span>
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -left-20 block h-62.5 w-62.5 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
          ></motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-20 bg-card/85 backdrop-blur-2xl"
      ></motion.div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="relative mx-auto max-w-250">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mx-auto max-w-250 rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-14"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
              <div className="flex flex-col items-center gap-2 text-center sm:gap-5">
                <motion.h2
                  variants={itemVariants}
                  className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-100"
                >
                  Contact us
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="max-w-165 text-slate-600 dark:text-slate-400"
                >
                  Have questions, feedback, or need assistance? Our support team
                  is always ready to help you with quick and reliable service.
                  Feel free to contact us anytime — we’d love to hear from you.
                </motion.p>
              </div>
              <div className="grid w-full grid-cols-12 gap-6 text-left">
                <div className="col-span-12 md:col-span-6">
                  <div className="flex flex-col gap-4">
                    <motion.div variants={itemVariants}>
                      <Input placeholder="Enter your mail" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Input placeholder="First name" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Input placeholder="Last name" />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Button
                        size="lg"
                        className="rounded-full shadow-lg shadow-blue-500/50 transition-all hover:translate-y-1 hover:opacity-90 hover:shadow-none sm:px-8 dark:shadow-none"
                      >
                        Submit
                      </Button>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="col-span-12 md:col-span-6"
                >
                  <div className="h-full min-h-[220px] w-full overflow-hidden rounded-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.987145437051!2d72.86633095391547!3d21.231976027219776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0778f12ea7%3A0xd4bc1f45fa091301!2sSurat%20Digital%20Valley!5e0!3m2!1sen!2sin!4v1779250060915!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "220px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

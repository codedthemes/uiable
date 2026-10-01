"use client"

// third-party
import { motion, type Variants } from "framer-motion"

// assets
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react"

//  ------------------------------ | CONTACT 8 | ------------------------------  //

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

export default function Contact8() {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
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
      <div className="relative z-30 py-20 sm:py-25">
        <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mx-auto max-w-165 rounded-lg bg-white/5 p-5 shadow-[0_0_20px_-5px_#21212138] backdrop-blur-xl sm:p-14 dark:bg-slate-900/70"
          >
            <div className="flex flex-col items-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center gap-2 text-center sm:gap-5">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-medium text-accent-foreground sm:text-3xl"
                >
                  Get in touch
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-md max-w-135 leading-5 text-slate-500 sm:text-lg sm:leading-6 dark:text-slate-300"
                >
                  Have a question, need more information, or want to get in
                  touch? We’re here to help. Reach out to us through any of the
                  options below.
                </motion.p>
              </div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-3 sm:gap-4"
              >
                {[
                  {
                    ariaLabel: "Email",
                    icon: (
                      <Mail className="h-5 w-5 text-accent-foreground transition-all duration-500 group-hover:scale-110 sm:h-6 sm:w-6 dark:text-white" />
                    ),
                  },
                  {
                    ariaLabel: "Chat",
                    icon: (
                      <MessageCircle className="h-5 w-5 text-accent-foreground transition-all duration-500 group-hover:scale-110 sm:h-6 sm:w-6 dark:text-white" />
                    ),
                  },
                  {
                    ariaLabel: "Call",
                    icon: (
                      <Phone className="h-5 w-5 text-accent-foreground transition-all duration-500 group-hover:scale-110 sm:h-6 sm:w-6 dark:text-white" />
                    ),
                  },
                  {
                    ariaLabel: "Location",
                    icon: (
                      <MapPin className="h-5 w-5 text-accent-foreground transition-all duration-500 group-hover:scale-110 sm:h-6 sm:w-6 dark:text-white" />
                    ),
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/10 text-accent-foreground transition-all duration-300 hover:shadow-lg sm:h-12 sm:w-12 dark:border-white/10 dark:bg-white/10 dark:text-white"
                    href="#"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

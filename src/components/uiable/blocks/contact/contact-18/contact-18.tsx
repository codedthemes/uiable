"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, Variants } from "framer-motion"

// project-imports
import { SeoAnimatedParticles as AnimatedParticles } from "@/components/animation/SeoAnimatedParticles"
import { SeoBackgroundEffects as BackgroundEffects } from "@/components/animation/SeoBackgroundEffects"

//  ------------------------------ | CONTACT 18 | ------------------------------  //

export default function Contact18() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="dark relative flex-1 overflow-hidden bg-[#06040F] pt-32 pb-24 text-white">
      <BackgroundEffects />
      <AnimatedParticles />

      <div className="relative z-10 container mx-auto flex flex-col items-center px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-fuchsia-500 shadow-[0_0_10px_theme(colors.fuchsia.500)]"></span>
            <span>24/7 Support</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-slate-400"
          >
            Have a question or need help? Send us a message and our expert team
            will get back to you within hours.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#06040F]/60 p-8 shadow-2xl shadow-purple-900/30 backdrop-blur-2xl sm:p-12"
        >
          {/* Inner Glow */}
          <div className="absolute -inset-0.5 -z-10 rounded-[24px] bg-gradient-to-b from-purple-500/20 to-transparent opacity-50 blur-sm"></div>

          <form
            className="relative z-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-slate-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all placeholder:text-slate-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-slate-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all placeholder:text-slate-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all placeholder:text-slate-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 text-white transition-all placeholder:text-slate-600 focus:border-fuchsia-500/50 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none"
                placeholder="How can we help you today?"
              />
            </div>

            <Button
              type="submit"
              className="mt-4 h-14 w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-base font-semibold text-white shadow-[0_0_20px_theme(colors.fuchsia.600/40)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_theme(colors.fuchsia.600/60)]"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

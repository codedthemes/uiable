"use client"
import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// third-party
import { AnimatePresence, motion, Variants } from "framer-motion"

// project-imports
import BorderGlow from "@/components/animation/BorderGlow"

const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Lead DevOps Engineer",
    description:
      "This platform has completely transformed how our team manages deployment workflows. The onboarding is incredibly fast and intuitive.",
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Product Manager at TechFlow",
    description:
      "Automating our repetitive tasks has saved us hours of manual coordination. We can now focus on what truly matters.",
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Chief Operations Officer",
    description:
      "Having instant access to detailed insights and performance metrics has empowered our team to make data-driven decisions confidently.",
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Senior UX Designer",
    description:
      "Collaboration is seamless here. Real-time updates and shared workspaces have bridged the gap between our design and dev teams.",
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Director of Security",
    description:
      "Security is paramount for us. The advanced encryption and role-based access controls keep our sensitive client data fully protected.",
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Integration Architect",
    description:
      "The pre-built integrations made it incredibly easy to connect all of our existing tools without breaking any workflows.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

//  ------------------------------ | TESTIMONIAL 16 | ------------------------------  //

export default function Testimonial16() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  const cardMotion = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section className="bg-blue-100 pb-24 sm:pb-32 dark:bg-blue-900">
      <div className="bg-blue-500 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 text-center"
          >
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
              <span className="text-md font-semibold">Testimonial</span>
            </motion.div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <motion.h2
                  variants={fadeUp}
                  custom={0.18}
                  className="text-xl font-medium text-blue-50 sm:text-3xl"
                >
                  Hear from our satisfied users
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={0.24}
                  className="max-w-200 text-lg font-semibold text-blue-200"
                >
                  Tailored to your needs
                </motion.p>
              </div>
              <motion.p
                variants={fadeUp}
                custom={0.3}
                className="max-w-140 text-blue-100"
              >
                Discover why users love our platform and how it's making a
                positive impact on their work and businesses.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative z-30 container mx-auto -mt-12 px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            <AnimatePresence>
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={cardMotion}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.05,
                  }}
                >
                  <BorderGlow
                    className="h-full rounded-lg"
                    fillOpacity={1}
                    backgroundColor="bg-sky-500"
                  >
                    <div className="group relative h-full rounded-lg border-2 border-blue-500/5 bg-white p-5 shadow-[0_0_40px_-8px_#4680ff38] transition-all duration-500 ease-in-out md:p-6 dark:bg-slate-800 dark:shadow-[0_0_40px_-8px_#00000087]">
                      <div className="flex h-full flex-col justify-center gap-6">
                        <div className="flex flex-row gap-4">
                          <Avatar className="size-14! shrink-0 after:border-slate-500/10">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.split(" ")[0].charAt(0) +
                                testimonial.name.split(" ")[1].charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="grow">
                            <div className="flex flex-col gap-0.5">
                              <div className="text-lg font-medium text-slate-800 dark:text-slate-50">
                                {testimonial.name}
                              </div>
                              <p className="text-sm font-normal text-slate-400 dark:text-slate-500">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${activeIdx === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out`}
                        >
                          <motion.p
                            className="text-slate-600 dark:text-slate-100"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                          >
                            <svg
                              className={`-mt-3 inline size-5 ${
                                activeIdx === idx
                                  ? "fill-blue-500"
                                  : "fill-blue-500/10"
                              } transition-all duration-500 ease-in-out`}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                            </svg>
                            {testimonial.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

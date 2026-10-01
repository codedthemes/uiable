"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// third-party
import { motion, type Variants } from "framer-motion"

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

//  ------------------------------ | TESTIMONIAL 6 | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Testimonial6() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center gap-5 sm:gap-12"
        >
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50"
            >
              Success stories unveiled
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-150 text-slate-600 dark:text-slate-100"
            >
              Explore success stories that highlight how our solutions have
              helped businesses overcome challenges, improve efficiency, and
              achieve measurable growth. These real-world examples demonstrate
              the impact of innovation and collaboration.
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-12 gap-4 text-left"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setActiveIdx(idx)}
                className="col-span-12 cursor-pointer md:col-span-6 lg:col-span-4"
              >
                <div
                  className={
                    "group relative h-full rounded-lg p-5 transition-all duration-500 ease-in-out md:p-6 " +
                    (activeIdx === idx
                      ? "-translate-y-3 bg-white shadow-[0_0_40px_-8px_#4680ff38] dark:bg-slate-800 dark:shadow-[0_0_40px_-8px_#00000087]"
                      : "")
                  }
                >
                  <div className="flex flex-col gap-6">
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
                    <p className="text-slate-600 dark:text-slate-100">
                      <svg
                        className={`-mt-3 inline size-5 ${
                          activeIdx === idx
                            ? "fill-violet-500/50"
                            : "fill-violet-500/10"
                        } transition-all duration-500 ease-in-out`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                      </svg>
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// third-party
import { motion, type Variants } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "DevOps Lead",
    description:
      "This platform has completely transformed how our team manages deployment workflows. The onboarding is incredibly fast and intuitive.",
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Product Manager",
    description:
      "Automating our repetitive tasks has saved us hours of manual coordination. We can now focus on what truly matters.",
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "COO",
    description:
      "Having instant access to detailed insights and performance metrics has empowered our team to make data-driven decisions confidently.",
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Senior UX Designer",
    description:
      "Having instant access to detailed insights and performance metrics has empowered our team to make data-driven decisions confidently.",
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Security Director",
    description:
      "Security is paramount for us. The advanced encryption and role-based access controls keep our sensitive client data fully protected.",
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Architect",
    description:
      "The pre-built integrations made it incredibly easy to connect all of our existing tools without breaking any workflows.",
  },
]

// ------------------------------ | TESTIMONIAL 5 | ------------------------------ //

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

export default function Testimonial5() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setActive(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const goTo = (idx: number) => {
    api?.scrollTo(idx)
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-10 bg-linear-to-tr from-amber-500 to-emerald-500"
      ></motion.div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col items-center gap-4 text-center sm:gap-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50"
            >
              Hear from our satisfied users
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-110 text-slate-600 dark:text-slate-100"
            >
              Discover why users love our platform and how it's making a
              positive impact on their work and businesses.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
              className="flex w-full flex-col items-center gap-5 sm:gap-12"
              ref={carouselRef}
            >
              <div className="mx-auto flex w-full max-w-220 items-center justify-center gap-16 rounded-2xl border-l-4 border-lime-500 bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                <CarouselContent className="w-auto">
                  {testimonials.map((testimonial, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <div className="relative h-full px-5 py-10 text-center sm:px-8 sm:py-16">
                        <div className="flex h-full flex-col gap-6">
                          <p className="flex-1 text-center text-lg text-slate-800 md:text-xl xl:text-3xl dark:text-slate-200">
                            <svg
                              className="-mt-4 inline size-6 fill-lime-500/40"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                            </svg>
                            {testimonial.description}
                            <svg
                              className="-mb-3 inline size-6 rotate-180 fill-lime-500/40"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                            </svg>
                          </p>
                          <div className="flex w-full flex-row items-center justify-center gap-3 text-left md:hidden">
                            <Avatar className="size-14!">
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name.split(" ")[0].charAt(0) +
                                  testimonial.name.split(" ")[1].charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-0">
                              <div className="text-lg font-medium text-slate-800 dark:text-slate-50">
                                {testimonial.name}
                              </div>
                              <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <div className="mx-auto flex w-full max-w-220 grid-cols-12 flex-wrap items-center justify-center gap-4 md:grid">
                {testimonials.map((testimonial, idx) => (
                  <Button
                    variant="ghost"
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => goTo(idx)}
                    className={`h-auto rounded-full border-2 bg-card! p-0.5 shadow-[0_0_40px_-8px_#4680ff38] transition-all duration-300 md:col-span-6 md:p-2 lg:col-span-4 ${
                      idx === active ? "border-lime-500" : "border-card"
                    }`}
                    type="button"
                  >
                    <div className="flex w-full flex-row items-center gap-3 text-left">
                      <Avatar className="size-14! shrink-0">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.split(" ")[0].charAt(0) +
                            testimonial.name.split(" ")[1].charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden grow flex-col gap-0 md:flex">
                        <div className="text-lg font-medium text-slate-800 dark:text-slate-50">
                          {testimonial.name}
                        </div>
                        <p className="dark:text-slate-505 text-base font-medium text-slate-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

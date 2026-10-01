"use client"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// third-party
import { motion, type Variants } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Lead DevOps Engineer",
    description: "Deployment has never been this effortless.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Director of Security",
    description: "Security features exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Product Manager at TechFlow",
    description:
      "Automation replaced countless repetitive tasks across our team. What used to require multiple meetings now happens automatically, saving us valuable time every week.",
    rating: 4,
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Chief Operations Officer",
    description:
      "The reporting dashboard gives us clear visibility into every project, making strategic planning much easier.",
    rating: 5,
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Senior UX Designer",
    description:
      "Design reviews are finally organized. Shared workspaces, comments, and version history have made collaboration between design and development completely seamless.",
    rating: 5,
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Integration Architect",
    description:
      "Integrating our existing software stack took less than an afternoon. The documentation was excellent, and every integration worked without disrupting our current workflows.",
    rating: 4,
  },
  {
    name: "Olivia Bennett",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Marketing Director",
    description:
      "Our campaigns launch faster and the team can focus on creativity instead of manual coordination.",
    rating: 4,
  },
  {
    name: "Daniel Carter",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Software Engineering Manager",
    description:
      "The performance improvements were noticeable from day one. Stable releases, excellent support, and frequent updates have made this platform an important part of our engineering workflow.",
    rating: 5,
  },
  {
    name: "Ethan Brooks",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Cloud Solutions Architect",
    description: "Scaling our cloud infrastructure became incredibly simple.",
    rating: 3,
  },
  {
    name: "Isabella Reed",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Customer Success Manager",
    description:
      "Customer satisfaction improved almost immediately after implementation. Faster response times, better collaboration, and real-time updates have helped us build stronger relationships with our clients.",
    rating: 5,
  },
  {
    name: "Noah Parker",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Engineering Team Lead",
    description:
      "The onboarding experience was smooth and our developers became productive much sooner than expected.",
    rating: 4,
  },
  {
    name: "Charlotte Hayes",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Business Operations Manager",
    description:
      "This solution has transformed how our departments collaborate. Better visibility, fewer bottlenecks, and streamlined workflows have made daily operations significantly more efficient across the organization.",
    rating: 5,
  },
]

//  ------------------------------ | TESTIMONIAL 8 | ------------------------------  //

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function Testimonial8() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-10 bg-linear-to-br from-cyan-500 to-purple-500"
      ></motion.div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
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
              Hear from our satisfied users
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-150 text-slate-600 dark:text-slate-100"
            >
              Discover why users love our platform and how it's making a
              positive impact on their work and businesses.
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full columns-1 gap-4 space-y-4 mask-t-from-5% mask-t-to-15% mask-exclude mask-match text-left md:columns-2 lg:columns-3"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="mb-4 w-full break-inside-avoid"
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative rounded-lg bg-white p-5 shadow-[0_0_40px_-8px_#4680ff38] md:p-6 dark:bg-slate-800 dark:shadow-[0_0_40px_-8px_#00000087]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className={`size-4 text-amber-500 ${
                            i <= testimonial.rating
                              ? "fill-amber-500"
                              : "fill-transparent"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-100">
                      <svg
                        className="-mt-3 inline size-5 fill-slate-500/30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                      </svg>
                      {testimonial.description}
                    </p>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar className="size-12! shrink-0 after:border-slate-500/10">
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
                        <div className="flex flex-col gap-1.5">
                          <div className="text-base leading-none font-medium text-slate-800 dark:text-slate-50">
                            {testimonial.name}
                          </div>
                          <p className="text-sm leading-none font-normal text-slate-400 dark:text-slate-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 lg:flex">
              View More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

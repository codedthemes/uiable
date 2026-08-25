"use client"

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
      "Deployment has never been this effortless. Our team now ships updates faster with a smooth, reliable workflow every single time.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Director of Security",
    description:
      "Security features exceeded our expectations. Advanced protection and continuous monitoring give our organization complete confidence.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    position: "Product Manager at TechFlow",
    description:
      "Automation eliminated repetitive work across our team, allowing us to focus on meaningful tasks while improving productivity every week.",
    rating: 4,
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    position: "Chief Operations Officer",
    description:
      "The reporting dashboard provides clear project visibility with actionable insights, making strategic planning faster more effective.",
    rating: 5,
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Senior UX Designer",
    description:
      "Design collaboration is finally seamless with shared workspaces, organized feedback, and version history that keeps everyone aligned.",
    rating: 5,
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Integration Architect",
    description:
      "Connecting our existing software stack was quick and painless. Excellent documentation made every integration simple and dependable.",
    rating: 4,
  },
  {
    name: "Olivia Bennett",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Marketing Director",
    description:
      "Campaigns launch much faster while our team spends more time creating impactful strategies instead of managing repetitive coordination tasks.",
    rating: 4,
  },
  {
    name: "Daniel Carter",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Software Engineering Manager",
    description:
      "Performance improvements were immediate, with stable releases, dependable support, and regular updates that strengthened our engineering workflow.",
    rating: 5,
  },
  {
    name: "Ethan Brooks",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Cloud Solutions Architect",
    description:
      "Scaling our cloud infrastructure became incredibly simple. Reliable performance and effortless management reduced operational complexity significantly.",
    rating: 3,
  },
]

//  ------------------------------ | TESTIMONIAL 9 | ------------------------------  //

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

export default function Testimonial9() {
  return (
    <section className="bg-slate-100 pb-24 sm:pb-32 dark:bg-slate-900">
      <div className="bg-amber-500 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-white sm:text-3xl">
              Success stories unveiled
            </h2>
            <p className="max-w-150 text-white/85">
              Explore success stories that highlight how our solutions have
              helped businesses overcome challenges, improve efficiency, and
              achieve measurable growth. These real-world examples demonstrate
              the impact of innovation and collaboration.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-30 container mx-auto -mt-12 px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-12 gap-4 text-left"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative rounded-lg bg-white p-2 shadow-[0_0_40px_-8px_#4680ff38] dark:bg-slate-800 dark:shadow-none">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 p-3 md:p-4">
                    <div className="flex flex-row justify-end gap-1.5">
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
                    <div className="flex flex-row items-center gap-4">
                      <div className="grow">
                        <div className="flex flex-col gap-1.5 text-right">
                          <div className="text-base leading-none font-medium text-slate-800 dark:text-slate-50">
                            {testimonial.name}
                          </div>
                          <p className="text-sm leading-none font-normal text-slate-400 dark:text-slate-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
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
                    </div>
                  </div>
                  <div className="relative rounded-lg bg-slate-100 p-0.5 dark:bg-slate-900">
                    <div className="absolute top-0 left-4 z-10 flex size-10 -translate-y-4/6 items-center justify-center rounded-full bg-card dark:bg-slate-800">
                      <div className="absolute inset-1 rounded-full bg-slate-100 dark:bg-slate-900"></div>
                      <svg
                        className="relative z-10 size-4 fill-slate-400"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                      </svg>
                    </div>
                    <div className="relative rounded-md bg-white p-5 dark:bg-slate-800 dark:shadow-none">
                      <p className="text-slate-800 dark:text-slate-200">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

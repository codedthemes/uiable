"use client"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// third-party
import { cn } from "cn"
import { motion, type Variants } from "framer-motion"

// project-imports
import SectionHeader from "@/components/uiable/blocks/landing/components/SectionHeader"

// types
interface Testimonial {
  name: string
  avatar: string
  description: string
  rating: number
  x: string
}

// data
const testimonials: Testimonial[] = [
  {
    name: "Ali",
    avatar: "https://cdn.uiable.com/block/ali.png",
    description: "That's awesome Rakesh, all the best! 🔥",
    rating: 5,
    x: "https://x.com/alicalimli_dev/status/2091410948506398971",
  },
  {
    name: "Shefali",
    avatar: "https://cdn.uiable.com/block/shefali.png",
    description:
      "I came across UIAble and honestly, it looks super useful. components are clean, easy to use, and the overall setup feels very developer-friendly.",
    rating: 5,
    x: "https://x.com/Shefali__J",
  },
  {
    name: "Mujeeb Ahmed",
    avatar: "https://cdn.uiable.com/block/mujeeb.png",
    description: "UIAble looks like a handy resource for React developers.",
    rating: 5,
    x: "https://x.com/hey_mujeebahmed/status/2089670798516842737",
  },
  {
    name: "Ajay Yadav",
    avatar: "https://cdn.uiable.com/block/ajay_yadav.png",
    description: "wow loooks nice to me",
    rating: 5,
    x: "https://x.com/ATechAjay/status/2089672073107161338",
  },
  {
    name: "Tech Fusionist | Kushal Gangil",
    avatar: "https://cdn.uiable.com/block/tech_fusionist.png",
    description: "it's UI is very much clean....easy to follow",
    rating: 5,
    x: "https://x.com/techyoutbe/status/2089815119325020628",
  },
  {
    name: "Adarsh Chetan",
    avatar: "https://cdn.uiable.com/block/adarsh_chetan.png",
    description: "Amazing",
    rating: 5,
    x: "https://x.com/AdarshChetan/status/2089924261662314731",
  },
  {
    name: "H A J R A",
    avatar: "https://cdn.uiable.com/block/hajra.png",
    description: "This looks really useful for React developers.",
    rating: 5,
    x: "https://x.com/codewithhajra/status/2089660761983320351",
  },
  {
    name: "Dhanian",
    avatar: "https://cdn.uiable.com/block/dhanaim.png",
    description: "This is amazing",
    rating: 5,
    x: "https://x.com/e_opore/status/2090100428297867365",
  },
  {
    name: "Solomon Neas",
    avatar: "https://cdn.uiable.com/block/solomon_neas.png",
    description: "love this, the greyscale gets old, fast",
    rating: 5,
    x: "https://x.com/solomonneas/status/2073021710236819877",
  },
  {
    name: "Paweł L",
    avatar: "https://cdn.uiable.com/block/pawel.png",
    description:
      "Clean code and very good docs. It saves quite a lot of dev time so definitely worth the money",
    rating: 5,
    x: "",
  },
  {
    name: "Josef B.",
    avatar: "",
    description:
      "right choice for my project. Love the design, structure is what i expected, and its easily scalable for my need. Highly recommended!",
    rating: 5,
    x: "",
  },
  {
    name: "Luke Martinez",
    avatar: "",
    description:
      "The code quality and structure are excellent it's also very clear and easy to customize.",
    rating: 5,
    x: "",
  },
]

//  ------------------------------ | CONSTANTS | ------------------------------  //

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

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "size-3 text-amber-500",
        filled ? "fill-amber-500" : "fill-transparent"
      )}
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
  )
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")

  return (
    <motion.div
      className="w-full break-inside-avoid"
      variants={itemVariants}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
    >
      <div className="group relative rounded-lg border border-border bg-card p-5 md:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-4">
              <Avatar className="size-12! shrink-0 after:border-border/10">
                {testimonial.avatar ? (
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                ) : null}
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <div className="text-base leading-none font-medium text-foreground">
                  {testimonial.name}
                </div>
                <div
                  className="flex flex-row gap-1"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={i <= testimonial.rating} />
                  ))}
                </div>
              </div>
            </div>
            {testimonial.x ? (
              <a
                href={testimonial.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${testimonial.name} on X`}
                className="-m-2 shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <XIcon />
              </a>
            ) : null}
          </div>
          <p className="text-muted-foreground">{testimonial.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

//  ------------------------------ | TESTIMONIALS | ------------------------------  //

export default function Testimonials() {
  return (
    <section className="mx-auto flex w-full flex-col gap-8 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="The buzz about us"
        subtitle="Real talk from designers and developers."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full columns-1 gap-4 space-y-4 mask-b-from-80% mask-b-to-100% md:columns-2 lg:columns-3"
      >
        {testimonials
          .filter((testimonial) => testimonial.description.trim() !== "")
          .map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
      </motion.div>
    </section>
  )
}

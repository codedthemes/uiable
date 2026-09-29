"use client"

// react
import type { ComponentType } from "react"

// next
import Link from "next/link"

// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

// project-imports
import AbleProLogo from "@/images/svg/landing/able-pro-logo"
import BerryLogo from "@/images/svg/landing/berry-logo"
import MantisLogo from "@/images/svg/landing/mantis-logo"

// assets
import { ArrowRight } from "lucide-react"

// types
interface Stat {
  id: string
  value: string
  label: string
}

interface StatItemProps {
  stat: Stat
  index: number
  isLast: boolean
}

interface Brand {
  name: string
  href: string
  Logo: ComponentType<{ className?: string }>
}

interface BrandLogoLinkProps {
  name: string
  href: string
  Logo: ComponentType<{ className?: string }>
  isFirst: boolean
}

interface TeamMember {
  name: string
  src: string
}

// data
const stats: Stat[] = [
  { id: "1", value: "700K+", label: "Developers shipping with our products" },
  { id: "2", value: "950K+", label: "Downloads across all products" },
  { id: "3", value: "4.9/5", label: "Rated by developers, not reviewers" },
]

const teamAvatars: TeamMember[] = [
  {
    name: "Shefali",
    src: "https://cdn.uiable.com/block/shefali.png",
  },
  {
    name: "Mujeeb Ahmed",
    src: "https://cdn.uiable.com/block/mujeeb.png",
  },
  {
    name: "Ajay Yadav",
    src: "https://cdn.uiable.com/block/ajay_yadav.png",
  },
]

// ------------------------------ | BRAND LOGOS | ------------------------------ //

const brands: Brand[] = [
  { name: "Able Pro", href: "https://ableproadmin.com", Logo: AbleProLogo },
  { name: "Berry", href: "https://berrydashboard.com/", Logo: BerryLogo },
  { name: "Mantis", href: "https://mantisdashboard.com/", Logo: MantisLogo },
]

// ------------------------------ | CONSTANTS | ------------------------------ //

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut" as const,
    },
  }),
}

function TenPlusOutline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 354 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="about-10plus-outline"
        maskUnits="userSpaceOnUse"
        x="-0.860107"
        y="-0.720215"
        width="355"
        height="165"
        fill="black"
      >
        <rect
          fill="white"
          x="-0.860107"
          y="-0.720215"
          width="355"
          height="165"
        />
        <path d="M30.2599 160.28V3.63978H73.8199V160.28H30.2599ZM0.999893 39.7198V3.63978H71.6199V39.7198H0.999893ZM161.021 162.92C147.527 162.92 135.501 159.473 124.941 152.58C114.527 145.54 106.314 135.933 100.301 123.76C94.2873 111.44 91.2807 97.4331 91.2807 81.7398C91.2807 66.0464 94.214 52.1131 100.081 39.9398C106.094 27.7664 114.307 18.2331 124.721 11.3398C135.134 4.44644 147.087 0.999777 160.581 0.999777C174.221 0.999777 186.247 4.44644 196.661 11.3398C207.221 18.2331 215.434 27.7664 221.301 39.9398C227.314 52.1131 230.321 66.1198 230.321 81.9598C230.321 97.7998 227.314 111.806 221.301 123.98C215.434 136.153 207.294 145.686 196.881 152.58C186.467 159.473 174.514 162.92 161.021 162.92ZM160.801 125.52C166.227 125.52 170.847 123.833 174.661 120.46C178.474 117.086 181.334 112.173 183.241 105.72C185.294 99.1198 186.321 91.1998 186.321 81.9598C186.321 72.7198 185.294 64.8731 183.241 58.4198C181.334 51.9664 178.474 47.0531 174.661 43.6798C170.847 40.1598 166.154 38.3998 160.581 38.3998C155.301 38.3998 150.754 40.0864 146.941 43.4598C143.127 46.8331 140.194 51.7464 138.141 58.1998C136.234 64.6531 135.281 72.4998 135.281 81.7398C135.281 90.9798 136.234 98.8998 138.141 105.5C140.194 111.953 143.127 116.94 146.941 120.46C150.754 123.833 155.374 125.52 160.801 125.52ZM245.013 103.74V69.8598H352.593V103.74H245.013ZM281.533 30.0398H316.293V143.12H281.533V30.0398Z" />
      </mask>
      <path
        d="M30.2599 160.28H29.2599V161.28H30.2599V160.28ZM30.2599 3.63979V2.63979H29.2599V3.63979H30.2599ZM73.8199 3.63979H74.8199V2.63979H73.8199V3.63979ZM73.8199 160.28V161.28H74.8199V160.28H73.8199ZM0.999893 39.7198H-0.000107408V40.7198H0.999893V39.7198ZM0.999893 3.63979V2.63979H-0.000107408V3.63979H0.999893ZM71.6199 3.63979H72.6199V2.63979H71.6199V3.63979ZM71.6199 39.7198V40.7198H72.6199V39.7198H71.6199ZM30.2599 160.28H31.2599V3.63979H30.2599H29.2599V160.28H30.2599ZM30.2599 3.63979V4.63979H73.8199V3.63979V2.63979H30.2599V3.63979ZM73.8199 3.63979H72.8199V160.28H73.8199H74.8199V3.63979H73.8199ZM73.8199 160.28V159.28H30.2599V160.28V161.28H73.8199V160.28ZM0.999893 39.7198H1.99989V3.63979H0.999893H-0.000107408V39.7198H0.999893ZM0.999893 3.63979V4.63979H71.6199V3.63979V2.63979H0.999893V3.63979ZM71.6199 3.63979H70.6199V39.7198H71.6199H72.6199V3.63979H71.6199ZM71.6199 39.7198V38.7198H0.999893V39.7198V40.7198H71.6199V39.7198ZM124.941 152.58L124.381 153.408L124.387 153.413L124.394 153.417L124.941 152.58ZM100.301 123.76L99.402 124.198L99.4041 124.203L100.301 123.76ZM100.081 39.9398L99.1841 39.4969L99.1798 39.5056L100.081 39.9398ZM124.721 11.3398L125.273 12.1736V12.1736L124.721 11.3398ZM196.661 11.3398L196.109 12.1736L196.114 12.1772L196.661 11.3398ZM221.301 39.9398L220.4 40.3739L220.404 40.3827L221.301 39.9398ZM221.301 123.98L220.404 123.537L220.4 123.546L221.301 123.98ZM196.881 152.58L197.433 153.414V153.414L196.881 152.58ZM183.241 105.72L182.286 105.423L182.284 105.43L182.282 105.436L183.241 105.72ZM183.241 58.4198L182.282 58.7031L182.285 58.7131L182.288 58.723L183.241 58.4198ZM174.661 43.6798L173.982 44.4146L173.99 44.4218L173.998 44.4288L174.661 43.6798ZM146.941 43.4598L146.278 42.7108V42.7108L146.941 43.4598ZM138.141 58.1998L137.188 57.8966L137.185 57.9065L137.182 57.9164L138.141 58.1998ZM138.141 105.5L137.18 105.777L137.184 105.79L137.188 105.803L138.141 105.5ZM146.941 120.46L146.262 121.195L146.27 121.202L146.278 121.209L146.941 120.46ZM161.021 162.92V161.92C147.707 161.92 135.873 158.522 125.487 151.742L124.941 152.58L124.394 153.417C135.128 160.424 147.347 163.92 161.021 163.92V162.92ZM124.941 152.58L125.501 151.751C115.243 144.816 107.14 135.348 101.197 123.317L100.301 123.76L99.4041 124.203C105.488 136.519 113.812 146.263 124.381 153.408L124.941 152.58ZM100.301 123.76L101.199 123.321C95.2617 111.156 92.2807 97.3032 92.2807 81.7398H91.2807H90.2807C90.2807 97.5631 93.313 111.723 99.402 124.198L100.301 123.76ZM91.2807 81.7398H92.2807C92.2807 66.1726 95.1899 52.3916 100.982 40.3739L100.081 39.9398L99.1798 39.5056C93.2382 51.8346 90.2807 65.9203 90.2807 81.7398H91.2807ZM100.081 39.9398L100.977 40.3827C106.919 28.3536 115.019 18.961 125.273 12.1736L124.721 11.3398L124.169 10.5059C113.595 17.5052 105.269 27.1793 99.1841 39.4969L100.081 39.9398ZM124.721 11.3398L125.273 12.1736C135.509 5.39743 147.267 1.99977 160.581 1.99977V0.999771V-0.000228882C146.908 -0.000228882 134.759 3.49545 124.169 10.5059L124.721 11.3398ZM160.581 0.999771V1.99977C174.043 1.99977 185.874 5.39864 196.109 12.1736L196.661 11.3398L197.213 10.5059C186.621 3.49425 174.398 -0.000228882 160.581 -0.000228882V0.999771ZM196.661 11.3398L196.114 12.1772C206.51 18.9637 214.606 28.3526 220.4 40.3739L221.301 39.9398L222.202 39.5056C216.262 27.1803 207.931 17.5025 197.207 10.5024L196.661 11.3398ZM221.301 39.9398L220.404 40.3827C226.339 52.3971 229.321 66.2479 229.321 81.9598H230.321H231.321C231.321 65.9917 228.289 51.8291 222.197 39.4969L221.301 39.9398ZM230.321 81.9598H229.321C229.321 97.6717 226.339 111.522 220.404 123.537L221.301 123.98L222.197 124.423C228.289 112.09 231.321 97.9279 231.321 81.9598H230.321ZM221.301 123.98L220.4 123.546C214.605 135.571 206.58 144.96 196.329 151.746L196.881 152.58L197.433 153.414C208.008 146.413 216.263 136.736 222.202 124.414L221.301 123.98ZM196.881 152.58L196.329 151.746C186.092 158.522 174.334 161.92 161.021 161.92V162.92V163.92C174.694 163.92 186.842 160.424 197.433 153.414L196.881 152.58ZM160.801 125.52V126.52C166.454 126.52 171.314 124.755 175.323 121.209L174.661 120.46L173.998 119.711C170.38 122.911 166.001 124.52 160.801 124.52V125.52ZM174.661 120.46L175.323 121.209C179.316 117.677 182.257 112.58 184.2 106.003L183.241 105.72L182.282 105.436C180.411 111.766 177.632 116.496 173.998 119.711L174.661 120.46ZM183.241 105.72L184.196 106.017C186.287 99.2945 187.321 91.2689 187.321 81.9598H186.321H185.321C185.321 91.1307 184.301 98.9451 182.286 105.423L183.241 105.72ZM186.321 81.9598H187.321C187.321 72.6517 186.287 64.6963 184.194 58.1166L183.241 58.4198L182.288 58.723C184.301 65.0499 185.321 72.7879 185.321 81.9598H186.321ZM183.241 58.4198L184.2 58.1364C182.257 51.5597 179.316 46.4625 175.323 42.9308L174.661 43.6798L173.998 44.4288C177.632 47.6438 180.411 52.3732 182.282 58.7031L183.241 58.4198ZM174.661 43.6798L175.339 42.945C171.327 39.2412 166.385 37.3998 160.581 37.3998V38.3998V39.3998C165.923 39.3998 170.368 41.0784 173.982 44.4146L174.661 43.6798ZM160.581 38.3998V37.3998C155.066 37.3998 150.282 39.1693 146.278 42.7108L146.941 43.4598L147.603 44.2088C151.226 41.0036 155.535 39.3998 160.581 39.3998V38.3998ZM146.941 43.4598L146.278 42.7108C142.292 46.237 139.278 51.3263 137.188 57.8966L138.141 58.1998L139.094 58.503C141.11 52.1666 143.963 47.4292 147.603 44.2088L146.941 43.4598ZM138.141 58.1998L137.182 57.9164C135.24 64.4888 134.281 72.4369 134.281 81.7398H135.281H136.281C136.281 72.5627 137.228 64.8174 139.1 58.4831L138.141 58.1998ZM135.281 81.7398H134.281C134.281 91.0436 135.24 99.0622 137.18 105.777L138.141 105.5L139.101 105.222C137.228 98.7374 136.281 90.916 136.281 81.7398H135.281ZM138.141 105.5L137.188 105.803C139.278 112.373 142.289 117.526 146.262 121.195L146.941 120.46L147.619 119.725C143.966 116.353 141.11 111.534 139.094 105.197L138.141 105.5ZM146.941 120.46L146.278 121.209C150.287 124.755 155.147 126.52 160.801 126.52V125.52V124.52C155.601 124.52 151.221 122.911 147.603 119.711L146.941 120.46ZM245.013 103.74H244.013V104.74H245.013V103.74ZM245.013 69.8598V68.8598H244.013V69.8598H245.013ZM352.593 69.8598H353.593V68.8598H352.593V69.8598ZM352.593 103.74V104.74H353.593V103.74H352.593ZM281.533 30.0398V29.0398H280.533V30.0398H281.533ZM316.293 30.0398H317.293V29.0398H316.293V30.0398ZM316.293 143.12V144.12H317.293V143.12H316.293ZM281.533 143.12H280.533V144.12H281.533V143.12ZM245.013 103.74H246.013V69.8598H245.013H244.013V103.74H245.013ZM245.013 69.8598V70.8598H352.593V69.8598V68.8598H245.013V69.8598ZM352.593 69.8598H351.593V103.74H352.593H353.593V69.8598H352.593ZM352.593 103.74V102.74H245.013V103.74V104.74H352.593V103.74ZM281.533 30.0398V31.0398H316.293V30.0398V29.0398H281.533V30.0398ZM316.293 30.0398H315.293V143.12H316.293H317.293V30.0398H316.293ZM316.293 143.12V142.12H281.533V143.12V144.12H316.293V143.12ZM281.533 143.12H282.533V30.0398H281.533H280.533V143.12H281.533Z"
        fill="currentColor"
        mask="url(#about-10plus-outline)"
      />
    </svg>
  )
}

function StatItem({ stat, index, isLast }: StatItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index + 1}
      className={cn(
        "flex items-center gap-5 border-t border-border py-5",
        isLast && "border-b"
      )}
    >
      <span className="text-3xl font-bold tracking-tight text-foreground">
        {stat.value}
      </span>
      <span className="text-xs font-light text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  )
}

function BrandLogoLink({ name, href, Logo, isFirst }: BrandLogoLinkProps) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      {!isFirst && <span aria-hidden className="h-[26px] w-px bg-border" />}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-foreground transition-opacity hover:opacity-70"
      >
        <Logo className="h-9 w-auto" />
      </Link>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[minmax(0,755fr)_minmax(0,429fr)] lg:items-stretch lg:gap-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-8 lg:pr-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex flex-col gap-7 opacity-40"
          >
            <TenPlusOutline className="h-auto w-[min(60%,354px)] text-foreground/50" />
            <span className="text-xs font-medium tracking-[0.17em] text-foreground uppercase">
              Years in production since 2017
            </span>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl leading-[1.2] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              The team behind
              <br />
              multiple flagship
              <br />
              <span className="text-primary">products</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="max-w-[420px] text-sm leading-[1.7] font-normal text-muted-foreground"
            >
              We don&apos;t just launch products. We build structured, scalable
              products, refined by years of hands-on design and engineering, so
              devs ship 50% faster.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={3}>
            <Link
              href="https://codedthemes.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              Meet our Team
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col justify-between gap-16 lg:border-l lg:border-border lg:pl-14"
        >
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-[10px] font-normal tracking-[0.2em] text-foreground/40 uppercase"
            >
              By the numbers
            </motion.span>

            <div className="flex flex-col">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.id}
                  stat={stat}
                  index={index}
                  isLast={index === stats.length - 1}
                />
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={stats.length + 1}
            className="flex flex-col gap-6 rounded-lg border border-border bg-muted/40 p-7"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-normal tracking-[0.2em] text-foreground/40 uppercase">
                The stuff we&apos;re known for
              </span>
              <div className="flex flex-nowrap items-center gap-x-3">
                {brands.map(({ name, href, Logo }, index) => (
                  <BrandLogoLink
                    key={name}
                    name={name}
                    href={href}
                    Logo={Logo}
                    isFirst={index === 0}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <AvatarGroup>
                {teamAvatars.map((member) => (
                  <Avatar key={member.name} size="sm">
                    <AvatarImage src={member.src} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <span className="text-[10px] text-muted-foreground">
                700K+ devs already building with us.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

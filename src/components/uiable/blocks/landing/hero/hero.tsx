// next
import Link from "next/link"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// third-party
import { div as MotionDiv } from "framer-motion/client"

// project-imports
import branding from "@/branding.json"
import HoverBg from "@/components/animation/HoverBg"
import BaseUi from "@/images/svg/icons/baseui"
import Motion from "@/images/svg/icons/motion"
import Shadcn from "@/images/svg/icons/shadcn"
import Tailwind from "@/images/svg/icons/tailwind"
import CodedThemeFabIcon from "@/images/svg/landing/ct-fab-logo"

// assets
import {
  IconArrowUpRight,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconChevronRight,
} from "@tabler/icons-react"

//  ------------------------------ | CONSTANTS | ------------------------------  //

const techIcons = [
  { name: "React", Icon: IconBrandReact },
  { name: "Next.js", Icon: IconBrandNextjs },
  { name: "Shadcn", Icon: Shadcn },
  { name: "Base UI", Icon: BaseUi },
  { name: "Tailwind CSS", Icon: Tailwind },
  { name: "Motion", Icon: Motion },
  { name: "TypeScript", Icon: IconBrandTypescript },
]

const delays = [0, 150, 300]

//  ------------------------------ | SUB-COMPONENTS | ------------------------------  //

function PingDot() {
  return (
    <div className="relative flex h-3 w-3 items-center justify-center">
      <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-950 opacity-75 dark:bg-slate-50" />
      <div className="relative h-2 w-2 rounded-full bg-slate-950 dark:bg-slate-50" />
    </div>
  )
}

function ChangelogLink() {
  return (
    <Link
      href="/doc/changelog"
      className="group flex items-center gap-0.5 rounded-full bg-primary/10 py-0.5 pr-1 pl-2.5 text-xs font-semibold text-[#6b9bff] transition-colors hover:bg-primary/20"
    >
      Changelog
      <div className="flex -space-x-1.5">
        {delays.map((delay) => (
          <MotionDiv
            key={delay}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: delay / 1000,
              ease: "linear",
            }}
          >
            <IconChevronRight className="h-3.5 w-3.5" />
          </MotionDiv>
        ))}
      </div>
    </Link>
  )
}

//  ------------------------------ | HERO | ------------------------------  //

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto flex w-full flex-col items-center gap-9 overflow-hidden px-4 pt-20 pb-12.5 sm:px-8 lg:px-24"
    >
      <div
        className="pointer-events-none absolute -top-30 left-1/2 z-0 h-sidebar-collapsed-active-width w-226 -translate-x-1/2 opacity-30 dark:opacity-60"
        style={{
          background:
            "linear-gradient(90deg, var(--color-violet-500) 0%, var(--primary) 50%, var(--color-teal-500) 100%)",
          filter: "blur(260px)",
        }}
      />

      <HoverBg className="opacity-60 dark:opacity-60" />

      <div className="relative z-10 flex items-center justify-center">
        <Badge
          variant="outline"
          className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-secondary-foreground"
        >
          <PingDot />
          <span className="flex items-center gap-2">
            <span className="text-muted-foreground">
              New Release September 30, 2026
            </span>
            <ChangelogLink />
          </span>
        </Badge>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-7">
        <h1
          id="hero-heading"
          className="text-center text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:leading-none lg:text-7xl"
        >
          {branding.title.startsWith("Components to") ? (
            <>
              Components to{" "}
              <span className="block whitespace-nowrap text-primary">
                {branding.title.replace("Components to", "").trim()}
              </span>
            </>
          ) : (
            branding.title
          )}
        </h1>

        <p className="max-w-182 text-center text-base font-normal text-foreground md:text-lg md:leading-7">
          {branding.brandName} is a structured, shadcn-based UI system designed
          to help developers build scalable, production-ready applications
          faster.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          size="lg"
          id="cta-start-building"
          nativeButton={false}
          render={<Link href="/doc/introduction" />}
          className="h-11 rounded-lg bg-foreground px-6 font-medium text-background hover:bg-foreground/90"
        >
          Start Building
        </Button>
        <Button
          variant="outline"
          size="lg"
          id="cta-view-components"
          nativeButton={false}
          render={<Link href="/components" />}
          className="h-11 gap-2 rounded-lg border-border bg-card px-6 font-medium text-foreground hover:bg-accent dark:border-border dark:bg-card dark:hover:bg-accent/10"
        >
          View Components
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-4">
        {techIcons.map((item) => {
          const IconComponent = item.Icon
          return (
            <Button
              key={item.name}
              size="icon-lg"
              className="h-11 w-11 border-0 bg-transparent text-foreground shadow-none hover:bg-transparent"
              title={item.name}
              aria-label={item.name}
            >
              <IconComponent
                className="size-6"
                stroke="1.5"
                aria-hidden="true"
              />
            </Button>
          )
        })}
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <Link
          href="https://codedthemes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 [&>svg]:size-5!"
          >
            <span className="text-xs font-normal text-foreground">
              {" "}
              Product by{" "}
            </span>
            <CodedThemeFabIcon className="mx-1 size-5!" />
            <span className="text-base font-medium text-secondary-foreground">
              {" "}
              CodedThemes
            </span>
          </Badge>
        </Link>
      </div>
    </section>
  )
}

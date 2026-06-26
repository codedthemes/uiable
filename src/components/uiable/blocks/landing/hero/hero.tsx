import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// project imports
import branding from "@/branding.json"
import { HoverBg } from "@/components/animation"

// assets
import {
  IconArrowUpRight,
  IconBrandNextjs,
  IconBrandReact,
} from "@tabler/icons-react"
import { Shadcn, BaseUi, Tailwind } from "@/images/svg/icons"

//  ------------------------------ | CONSTANTS | ------------------------------  //

const tech_icons = [
  { name: "React", Icon: IconBrandReact },
  { name: "Next.js", Icon: IconBrandNextjs },
  { name: "Shadcn", Icon: Shadcn },
  { name: "Base UI", Icon: BaseUi },
  { name: "Tailwind CSS", Icon: Tailwind },
]

const features = [
  "Production Ready",
  "Open Source",
  "Accessible",
  "AI Ready Structure",
]

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

      <HoverBg className="opacity-60 dark:opacity-45" />

      <div className="relative z-10 flex items-center justify-center">
        <Badge
          variant="outline"
          className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-secondary-foreground"
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-950 opacity-75 dark:bg-slate-50" />
            <div className="relative h-2 w-2 rounded-full bg-slate-950 dark:bg-slate-50" />
          </div>
          Shadcn based UI system
        </Badge>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-7">
        <h1
          id="hero-heading"
          className="text-center text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:leading-[1.1] lg:text-7xl"
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

        <p className="text-md max-w-182 text-center font-normal text-foreground md:text-lg md:leading-7">
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
        {tech_icons.map((item) => {
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

      {/* 6. Feature Pills */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {features.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2.5 text-xs font-medium text-secondary-foreground"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

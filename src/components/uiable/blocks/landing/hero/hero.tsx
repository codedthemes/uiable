import Link from "next/link";

// shadcn
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// project imports
import branding from "@/branding.json";
import { HoverBg } from "@/components/animation";

// assets
import {
  IconArrowUpRight,
  IconBrandNextjs,
  IconBrandReact
} from "@tabler/icons-react";
import { Shadcn, BaseUi, Tailwind } from "@/images/svg/icons";

//  ------------------------------ | CONSTANTS | ------------------------------  //

const tech_icons = [
  { name: "React", Icon: IconBrandReact },
  { name: "Next.js", Icon: IconBrandNextjs },
  { name: "Shadcn", Icon: Shadcn },
  { name: "Base UI", Icon: BaseUi },
  { name: "Tailwind CSS", Icon: Tailwind }
];

const features = [
  "Production Ready",
  "Open Source",
  "Accessible",
  "AI Ready Structure"
];

//  ------------------------------ | HERO | ------------------------------  //

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden w-full px-4 lg:px-24 sm:px-8 mx-auto pt-20 pb-12.5 flex flex-col items-center gap-9"
    >
      <div
        className="absolute -top-30 left-1/2 -translate-x-1/2 w-226 h-sidebar-collapsed-active-width pointer-events-none z-0 opacity-30 dark:opacity-60"
        style={{
          background:
            "linear-gradient(90deg, var(--color-violet-500) 0%, var(--primary) 50%, var(--color-teal-500) 100%)",
          filter: "blur(534px)"
        }}
      />

      <HoverBg className="opacity-60 dark:opacity-45" />

      <div className="relative z-10 flex justify-center items-center">
        <Badge
          variant="outline"
          className="inline-flex items-center gap-3 rounded-full py-2.5 px-5 text-secondary-foreground text-sm font-medium bg-card border border-border"
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-slate-950 dark:bg-slate-50 opacity-75 animate-ping pointer-events-none" />
            <div className="relative h-2 w-2 rounded-full bg-slate-950 dark:bg-slate-50" />
          </div>
          Shadcn based UI system
        </Badge>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7 w-full">
        <h1
          id="hero-heading"
          className="font-extrabold text-foreground text-4xl sm:text-6xl lg:text-7xl md:leading-[1.1] text-center tracking-tight"
        >
          {branding.title.startsWith("Components to") ? (
            <>
              Components to{" "}
              <span className="block text-primary whitespace-nowrap">
                {branding.title.replace("Components to", "").trim()}
              </span>
            </>
          ) : (
            branding.title
          )}
        </h1>

        <p className="max-w-182 text-center text-foreground font-normal md:text-lg md:leading-7 text-md">
          {branding.brandName} is a structured, shadcn-based UI system designed to help
          developers build scalable, production-ready applications faster.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          size="lg"
          id="cta-start-building"
          nativeButton={false}
          render={<Link href="/doc/introduction" />}
          className="h-11 px-6 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-lg"
        >
          Start Building
        </Button>
        <Button
          variant="outline"
          size="lg"
          id="cta-view-components"
          nativeButton={false}
          render={<Link href="/components" />}
          className="h-11 px-6 gap-2 border-border text-foreground bg-card hover:bg-accent dark:bg-card dark:border-border dark:hover:bg-accent/10 font-medium rounded-lg"
        >
          View Components
          <IconArrowUpRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-4">
        {tech_icons.map((item) => {
          const IconComponent = item.Icon;
          return (
            <Button
              key={item.name}
              size="icon-lg"
              className="h-11 w-11 bg-transparent hover:bg-transparent shadow-none border-0 text-foreground "
              title={item.name}
              aria-label={item.name}
            >
              <IconComponent
                className="size-6"
                stroke="1.5"
                aria-hidden="true"
              />
            </Button>
          );
        })}
      </div>

      {/* 6. Feature Pills */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex gap-2.5 items-center flex-wrap justify-center">
          {features.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="inline-flex items-center px-4 py-2.5 rounded-full text-xs font-medium bg-primary/10 text-secondary-foreground"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

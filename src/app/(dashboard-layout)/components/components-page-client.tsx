"use client"

import { ComponentType, ReactNode, useState } from "react"

// next
import Link from "next/link"

// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// third-party
import { cn } from "cn"
import { ArrowRight2 } from "iconsax-reactjs"

// project-imports
import { OTHER_DEMOS } from "./demos"
import {
  clickState,
  cursorState,
  isActiveAt,
  pressScale,
  HOVER_TIMELINE,
} from "./timeline"
// project
import branding from "@/branding.json"
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_COMPONENTS } from "@/components-grid"
import { DynamicSVG } from "@/components/category-dynamic-svg"
import { useCycleClock } from "@/hooks/use-cycle-clock"

// assets
import { MousePointer2 } from "lucide-react"

//  ------------------------------ | SHARED CURSOR/RIPPLE PIECES | ------------------------------  //

interface DemoCursorProps {
  x: number
  y: number
  opacity: number
  scale: number
  anchorClassName?: string
}

export function DemoCursor({
  x,
  y,
  opacity,
  scale,
  anchorClassName = "top-1/2 left-1/2",
}: DemoCursorProps) {
  return (
    <MousePointer2
      className={cn(
        "pointer-events-none absolute size-5 fill-foreground text-foreground",
        anchorClassName
      )}
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
        opacity,
      }}
    />
  )
}

interface DemoRippleProps {
  opacity: number
  scale: number
  anchorClassName?: string
}

export function DemoRipple({
  opacity,
  scale,
  anchorClassName = "top-1/2 left-1/2",
}: DemoRippleProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute size-10 rounded-full bg-primary/40",
        anchorClassName
      )}
      style={{ transform: `translate(-50%, -50%) scale(${scale})`, opacity }}
    />
  )
}

//  ------------------------------ | DEMO PREVIEWS | ------------------------------  //

function ButtonDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 46, y: -34 },
    HOVER_TIMELINE
  )

  return (
    <div className="relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <Button
        size="sm"
        className="pointer-events-none relative"
        style={{ transform: `scale(${press})` }}
      >
        Click me
      </Button>
      <DemoCursor {...cursor} />
    </div>
  )
}

function SwitchDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const checked = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 46, y: -32 },
    HOVER_TIMELINE
  )

  return (
    <div className="relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <Field
        orientation="horizontal"
        className="pointer-events-none w-fit"
        style={{ transform: `scale(${press})` }}
      >
        <Switch
          checked={checked}
          onCheckedChange={() => {}}
          id="lottie-switch"
        />
        <FieldLabel htmlFor="lottie-switch" className="font-normal">
          Notifications
        </FieldLabel>
      </Field>
      <DemoCursor {...cursor} />
    </div>
  )
}

function CheckboxDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const checked = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 44, y: -30 },
    HOVER_TIMELINE
  )

  return (
    <div className="relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <Field
        orientation="horizontal"
        className="pointer-events-none w-fit"
        style={{ transform: `scale(${press})` }}
      >
        <Checkbox
          checked={checked}
          onCheckedChange={() => {}}
          id="lottie-checkbox"
        />
        <FieldLabel htmlFor="lottie-checkbox" className="font-normal">
          Accept terms
        </FieldLabel>
      </Field>
      <DemoCursor {...cursor} />
    </div>
  )
}

function AccordionDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const cursor = cursorState(t, { x: 42, y: -36 }, HOVER_TIMELINE)

  return (
    <div className="relative size-full">
      <Accordion
        value={open ? ["item-1"] : []}
        onValueChange={() => {}}
        className="w-full"
      >
        <AccordionItem
          value="item-1"
          className="pointer-events-none rounded-md border-border bg-background px-3"
        >
          <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="pb-2 text-xs text-muted-foreground">
            Yes, it adheres to the WAI-ARIA pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <DemoCursor {...cursor} anchorClassName="top-4 left-[78%]" />
    </div>
  )
}

function TabsDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const active = isActiveAt(t, HOVER_TIMELINE) ? "profile" : "home"
  const cursor = cursorState(t, { x: 30, y: -30 }, HOVER_TIMELINE)

  return (
    <div className="relative flex size-full items-center justify-center">
      <Tabs
        value={active}
        onValueChange={() => {}}
        className="pointer-events-none w-52"
      >
        <TabsList className="w-full">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent
          value="home"
          className="mt-2 text-xs text-muted-foreground"
        >
          Home content preview.
        </TabsContent>
        <TabsContent
          value="profile"
          className="mt-2 text-xs text-muted-foreground"
        >
          Profile content.
        </TabsContent>
      </Tabs>
      <DemoCursor {...cursor} anchorClassName="top-[26%] left-[74%]" />
    </div>
  )
}

//  ------------------------------ | SVG FALLBACK | ------------------------------  //

/**
 * For the structural categories with no compact live preview (navbar,
 * sidebar, and anything without a registered demo) — fall back to the
 * existing decorative illustration. Always visible at rest (never blank);
 * hovering adds a brief attention pulse via the shared click-bounce curve.
 */
interface SvgFallbackDemoProps {
  slug: string
  hovered: boolean
}

function SvgFallbackDemo({ slug, hovered }: SvgFallbackDemoProps) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const press = pressScale(t, HOVER_TIMELINE)
  const scale = 2 - press

  return (
    <div
      className="pointer-events-none flex size-full items-center justify-center"
      style={{ transform: `scale(${scale})` }}
    >
      <DynamicSVG slug={slug} />
    </div>
  )
}

//  ------------------------------ | CARD SHELL | ------------------------------  //

interface DemoCardProps {
  slug: string
  title: string
  children: ReactNode | ((hovered: boolean) => ReactNode)
  badgeLabel?: string
}

function DemoCard({ slug, title, children, badgeLabel }: DemoCardProps) {
  const count = CATEGORY_COUNTS[slug as keyof typeof CATEGORY_COUNTS] || 0
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/components/${slug}`}
      className="group block h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="mb-0 flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
        <CardContent className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h5>{title}</h5>
              {badgeLabel && (
                <Badge className="border-transparent bg-red-500/15 text-red-500">
                  {badgeLabel}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>
                {count} {count === 1 ? "variant" : "variants"}
              </span>
              <ArrowRight2 className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
            </div>
          </div>

          <div className="relative h-40 flex-1 overflow-hidden rounded-md border border-dashed border-border/70 bg-muted/30 p-8 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-muted/50">
            {typeof children === "function" ? children(hovered) : children}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

//  ------------------------------ | DEMOS LOOKUP | ------------------------------  //

const DEMOS: Record<string, ComponentType<{ hovered: boolean }>> = {
  button: ButtonDemo,
  switch: SwitchDemo,
  checkbox: CheckboxDemo,
  accordion: AccordionDemo,
  tabs: TabsDemo,
  ...OTHER_DEMOS,
}

//  ------------------------------ | PAGE - COMPONENTS | ------------------------------  //

export default function ComponentsPageClient() {
  return (
    <div className="max-full mx-auto flex flex-col gap-8 pb-20">
      <div className="flex flex-col gap-2">
        <h2>UI Components - {branding.brandName}</h2>
        <p>
          450+ production-ready React UI components built with Tailwind CSS,
          powered by shadcn/ui and Base UI. Hover any card below for a live
          interactive preview.
        </p>
      </div>

      <div className="mt-4 grid gap-12">
        {NAV_COMPONENTS.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <h5 className="tracking-[0.1em] uppercase opacity-60">
                {section.title}
              </h5>
              <div className="h-[1px] flex-1 bg-border/70" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => {
                const Demo = DEMOS[item.slug]
                return (
                  <DemoCard
                    key={item.slug}
                    slug={item.slug}
                    title={item.title}
                    badgeLabel={item.badge?.label}
                  >
                    {(hovered) =>
                      Demo ? (
                        <Demo hovered={hovered} />
                      ) : (
                        <SvgFallbackDemo slug={item.slug} hovered={hovered} />
                      )
                    }
                  </DemoCard>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

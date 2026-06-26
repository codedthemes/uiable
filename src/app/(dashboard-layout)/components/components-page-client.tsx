"use client"

import { ComponentType, useEffect, useState } from "react"
import Link from "next/link"
// project
import branding from "@/branding.json"
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_CATEGORIES } from "@/components-grid"
import Intro from "@/images/svg/Intro"
// assets
import { Link1 } from "iconsax-reactjs"

// shadcn
import { Card, CardContent } from "@/components/ui/card"

/**
 * SVG Mapping for categories whose slug doesn't match the filename directly
 */
const SVG_MAPPING: Record<string, string> = {
  "date-picker": "datepicker",
  "dropdown-menu": "dropdown",
}

type SvgIconComponent = ComponentType<{ className?: string }>
type SvgIconModule = { default: SvgIconComponent }

/**
 * Dynamic SVG importers map.
 * Paths remain explicit so Turbopack can include the chunks.
 */
const SVG_IMPORTERS: Record<string, () => Promise<SvgIconModule>> = {
  accordion: () => import("@/images/svg/accordion"),
  alert: () => import("@/images/svg/alert"),
  "alert-dialog": () => import("@/images/svg/AlertDialog"),
  "aspect-ratio": () => import("@/images/svg/AspectRatio"),
  avatar: () => import("@/images/svg/avatar"),
  badge: () => import("@/images/svg/badge"),
  breadcrumb: () => import("@/images/svg/breadcrumb"),
  button: () => import("@/images/svg/button"),
  "button-group": () => import("@/images/svg/ButtonGroup"),
  calendar: () => import("@/images/svg/calendar"),
  card: () => import("@/images/svg/card"),
  carousel: () => import("@/images/svg/carousel"),
  chart: () => import("@/images/svg/chart"),
  checkbox: () => import("@/images/svg/checkbox"),
  collapsible: () => import("@/images/svg/collapsible"),
  combobox: () => import("@/images/svg/combobox"),
  command: () => import("@/images/svg/command"),
  "context-menu": () => import("@/images/svg/ContextMenu"),
  "data-table": () => import("@/images/svg/DataTable"),
  datepicker: () => import("@/images/svg/datepicker"),
  dialog: () => import("@/images/svg/dialog"),
  drawer: () => import("@/images/svg/drawer"),
  dropdown: () => import("@/images/svg/dropdown"),
  empty: () => import("@/images/svg/empty"),
  field: () => import("@/images/svg/field"),
  "hover-card": () => import("@/images/svg/HoverCard"),
  input: () => import("@/images/svg/input"),
  "input-group": () => import("@/images/svg/InputGroup"),
  "input-otp": () => import("@/images/svg/InputOtp"),
  item: () => import("@/images/svg/item"),
  kbd: () => import("@/images/svg/kbd"),
  label: () => import("@/images/svg/label"),
  "list-group": () => import("@/images/svg/ListGroup"),
  menubar: () => import("@/images/svg/menubar"),
  "native-select": () => import("@/images/svg/NativeSelect"),
  "navigation-menu": () => import("@/images/svg/NavigationMenu"),
  pagination: () => import("@/images/svg/pagination"),
  popover: () => import("@/images/svg/popover"),
  progress: () => import("@/images/svg/progress"),
  radio: () => import("@/images/svg/radio"),
  "radio-group": () => import("@/images/svg/RadioGroup"),
  resizable: () => import("@/images/svg/resizable"),
  "scroll-area": () => import("@/images/svg/ScrollArea"),
  select: () => import("@/images/svg/select"),
  separator: () => import("@/images/svg/separator"),
  sheet: () => import("@/images/svg/sheet"),
  sidebar: () => import("@/images/svg/sidebar"),
  skeleton: () => import("@/images/svg/skeleton"),
  slider: () => import("@/images/svg/slider"),
  sonner: () => import("@/images/svg/sonner"),
  spinner: () => import("@/images/svg/spinner"),
  switch: () => import("@/images/svg/switch"),
  table: () => import("@/images/svg/table"),
  tabs: () => import("@/images/svg/tabs"),
  textarea: () => import("@/images/svg/textarea"),
  toggle: () => import("@/images/svg/toggle"),
  "toggle-group": () => import("@/images/svg/ToggleGroup"),
  tooltip: () => import("@/images/svg/tooltip"),
  typography: () => import("@/images/svg/typography"),
  navbar: () => import("@/images/svg/ComponentSoon"),
}

/**
 * DynamicSVG Component
 * Loads category-specific SVG illustrations with dynamic imports
 */
function DynamicSVG({ slug }: { slug: string }) {
  const [SVGComp, setSVGComp] = useState<SvgIconComponent>(() => Intro)

  useEffect(() => {
    let mounted = true
    const mappedName = SVG_MAPPING[slug] || slug
    const importer = SVG_IMPORTERS[mappedName]

    if (!importer) {
      setTimeout(() => setSVGComp(() => Intro), 0)
      return () => {
        mounted = false
      }
    }

    importer()
      .then((mod) => {
        if (mounted) setSVGComp(() => mod.default)
      })
      .catch((err) => {
        console.error(`Failed to load SVG for ${slug} (${mappedName}):`, err)
        if (mounted) setSVGComp(() => Intro)
      })

    return () => {
      mounted = false
    }
  }, [slug])

  return <SVGComp className="h-auto w-full" />
}

//  ------------------------------ | PAGE - COMPONENTS | ------------------------------  //

export default function ComponentsPageClient() {
  return (
    <div className="max-full mx-auto flex flex-col gap-8 pb-20">
      <div className="flex flex-col gap-2">
        <h2>UI Components - {branding.brandName}</h2>
        <p>
          450+ production-ready React UI components built with Tailwind CSS,
          powered by shadcn/ui and Base UI. Designed for modern Next.js
          applications with accessibility, customization, and developer
          experience in mind.
        </p>
      </div>

      <div className="mt-4 grid gap-12">
        {NAV_CATEGORIES.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <h5 className="tracking-[0.1em] uppercase opacity-60">
                {section.title}
              </h5>
              <div className="h-[1px] flex-1 bg-border/70" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => {
                const count =
                  CATEGORY_COUNTS[item.slug as keyof typeof CATEGORY_COUNTS] ||
                  0
                return (
                  <Link
                    key={item.slug}
                    href={`/components/${item.slug}`}
                    className="group block"
                  >
                    <Card className="an1imate-wiggle mb-0 overflow-hidden transition-all duration-300 animate-alternate animate-infinite">
                      <CardContent>
                        <div className="mb-1 flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <h5>{item.title}</h5>
                            <p className="text-sm text-primary">
                              {count} {count === 1 ? "variant" : "variants"}
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-2 group-hover:text-primary">
                            View all
                            <Link1 className="size-5 opacity-20 transition-all group-hover:text-primary group-hover:opacity-100 dark:opacity-50" />
                          </div>
                        </div>
                        <div className="my-4 h-px flex-1 bg-border/70" />
                        <CardContent className="flex min-h-20 items-center justify-center p-0">
                          <DynamicSVG slug={item.slug} />
                        </CardContent>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { ComponentType, useEffect, useState } from "react"

// project-imports
import Intro from "@/images/svg/Intro"

/**
 * SVG Mapping for categories whose slug doesn't match the filename directly.
 * Covers both component and block category slugs (no overlap between them).
 */
const SVG_MAPPING: Record<string, string> = {
  "date-picker": "datepicker",
  "dropdown-menu": "dropdown",
  cta: "CallToAction",
  "e-commerce": "ECommerce",
  hero: "Intro",
  "auth-layout": "ComponentSoon",
  "dashboard-layout": "ComponentSoon",
  "component-layout": "ComponentSoon",
  "doc-layout": "ComponentSoon",
  landing: "ComponentSoon",
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
  timeline: () => import("@/images/svg/timeline"),
  "tree-view": () => import("@/images/svg/tree-view"),
  toggle: () => import("@/images/svg/toggle"),
  "toggle-group": () => import("@/images/svg/ToggleGroup"),
  tooltip: () => import("@/images/svg/tooltip"),
  typography: () => import("@/images/svg/typography"),
  navbar: () => import("@/images/svg/ComponentSoon"),

  // Blocks
  CallToAction: () => import("@/images/svg/CallToAction"),
  ComponentSoon: () => import("@/images/svg/ComponentSoon"),
  contact: () => import("@/images/svg/contact"),
  content: () => import("@/images/svg/content"),
  ECommerce: () => import("@/images/svg/ECommerce"),
  faq: () => import("@/images/svg/faq"),
  footer: () => import("@/images/svg/footer"),
  gallery: () => import("@/images/svg/gallery"),
  feature: () => import("@/images/svg/feature"),
  Intro: () => import("@/images/svg/Intro"),
  portfolio: () => import("@/images/svg/portfolio"),
  pricing: () => import("@/images/svg/pricing"),
  process: () => import("@/images/svg/process"),
  team: () => import("@/images/svg/team"),
  testimonial: () => import("@/images/svg/testimonial"),
}

/**
 * DynamicSVG Component
 * Loads category-specific SVG illustrations with dynamic imports.
 * Used as a fallback for categories that don't have a live mini preview
 * (structural/full-page-ish components that can't fit a small preview box).
 */
export function DynamicSVG({ slug }: { slug: string }) {
  const [SVGComp, setSVGComp] = useState<SvgIconComponent>(() => Intro)

  useEffect(() => {
    let mounted = true
    const mappedName = SVG_MAPPING[slug] || slug
    const importer = SVG_IMPORTERS[mappedName]

    if (!importer) {
      const id = setTimeout(() => {
        if (mounted) setSVGComp(() => Intro)
      }, 0)
      return () => {
        mounted = false
        clearTimeout(id)
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

"use client"

import { ComponentType, useEffect, useState } from "react"
import Link from "next/link"
// project
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_BLOCKS } from "@/components-grid"
// assets
import Intro from "@/images/svg/Intro"
import { Link1 } from "iconsax-reactjs"

// shadcn
import { Card, CardContent } from "@/components/ui/card"

/**
 * SVG Mapping for categories whose slug doesn't match the filename directly
 */
const SVG_MAPPING: Record<string, string> = {
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
 * Loads category-specific SVG illustrations dynamically
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

//  ------------------------------ | PAGE - BLOCKS | ------------------------------  //

export default function BlocksPageClient() {
  return (
    <div className="container mx-auto flex flex-1 items-start px-4 sm:px-8">
      <div className="flex w-full flex-col gap-8 pb-20">
        <div className="flex flex-col gap-2">
          <h2>All Blocks</h2>
          <p>
            Browse through our comprehensive library of UI blocks and their
            variants.
          </p>
        </div>
        <div className="mt-4 grid gap-12">
          {NAV_BLOCKS.map((section) => (
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
                    CATEGORY_COUNTS[
                      item.slug as keyof typeof CATEGORY_COUNTS
                    ] || 0
                  return (
                    <Link
                      key={item.slug}
                      href={`/blocks/${item.slug}`}
                      className="group block"
                    >
                      <Card className="mb-0 overflow-hidden transition-all duration-300">
                        <CardContent>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                              <h5>{item.title}</h5>
                              <p className="text-sm text-primary">
                                {count} {count === 1 ? "block" : "blocks"}
                              </p>
                            </div>
                            <div className="flex flex-row items-center gap-2 group-hover:text-primary">
                              View all
                              <Link1 className="size-5 opacity-20 transition-all group-hover:text-primary group-hover:opacity-100" />
                            </div>
                          </div>
                          <div className="my-4 h-px flex-1 bg-border/70" />
                          <CardContent className="flex min-h-35 items-center justify-center">
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
    </div>
  )
}

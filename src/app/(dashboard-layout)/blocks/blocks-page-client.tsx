"use client"

// next
import Link from "next/link"

// shadcn
import { Card, CardContent } from "@/components/ui/card"

// third-party
import { Link1 } from "iconsax-reactjs"

// project-imports
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_BLOCKS } from "@/components-grid"
import { DynamicSVG } from "@/components/category-dynamic-svg"

//  ------------------------------ | PAGE - BLOCKS | ------------------------------  //

export default function BlocksPageClient() {
  return (
    <div className="flex flex-1 items-start">
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

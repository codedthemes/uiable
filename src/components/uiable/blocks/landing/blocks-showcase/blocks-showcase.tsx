// next
import Link from "next/link"

// shadcn
import { Badge } from "@/components/ui/badge"

// third-party
import { cn } from "cn"

// project-imports
import categoryCounts from "@/category-counts.json"
import AutoScrollPreview from "@/components/animation/AutoScrollPreview"
import CrossfadeImages from "@/components/animation/CrossfadeImages"
import MarqueeImages from "@/components/animation/MarqueeImages"
import TestimonialsMarquee from "@/components/animation/TestimonialsMarquee"
import SectionHeader from "@/components/uiable/blocks/landing/components/SectionHeader"

// assets
import {
  IconArrowUpRight,
  IconChartBar,
  IconLayoutBoardSplit,
  IconLayoutGrid,
  IconShoppingCart,
  IconUsersGroup,
  type Icon as TablerIcon,
} from "@tabler/icons-react"

// ------------------------------ | CONSTANTS | ------------------------------ //

const bentoPreviews = [
  {
    src: "https://cdn.uiable.com/block/img-bento-1.png",
    darkSrc: "https://cdn.uiable.com/block/img-bento-1-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/img-bento-2.png",
  },
  {
    src: "https://cdn.uiable.com/block/img-bento-3.png",
    darkSrc: "https://cdn.uiable.com/block/img-bento-3-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/img-bento-4.png",
    darkSrc: "https://cdn.uiable.com/block/img-bento-4-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/img-bento-5.png",
    darkSrc: "https://cdn.uiable.com/block/img-bento-5-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/img-bento-6.png",
    darkSrc: "https://cdn.uiable.com/block/img-bento-6-dark.png",
  },
]

const heroPreviews = [
  "https://cdn.uiable.com/block/hero-1.gif",
  "https://cdn.uiable.com/block/hero-2.gif",
  "https://cdn.uiable.com/block/hero-3.png",
  "https://cdn.uiable.com/block/hero-5.png",
  "https://cdn.uiable.com/block/hero-4.png",
]

const ecommercePreviews = [
  {
    src: "https://cdn.uiable.com/block/e-commerce-1-light.png",
    darkSrc: "https://cdn.uiable.com/block/e-commerce-1-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/e-commerce-2-light.png",
    darkSrc: "https://cdn.uiable.com/block/e-commerce-2-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/e-commerce-3-light.png",
    darkSrc: "https://cdn.uiable.com/block/e-commerce-3-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/e-commerce-4-light.png",
    darkSrc: "https://cdn.uiable.com/block/e-commerce-4-dark.png",
  },
  {
    src: "https://cdn.uiable.com/block/e-commerce-5-light.png",
    darkSrc: "https://cdn.uiable.com/block/e-commerce-5-dark.png",
  },
]

const teamPreview = {
  src: "https://cdn.uiable.com/block/team-light-1.png",
  darkSrc: "https://cdn.uiable.com/block/team-dark-1.png",
}

const testimonialPreview = {
  src: "https://cdn.uiable.com/block/testimonial-light-1.png",
  darkSrc: "https://cdn.uiable.com/block/testimonial-dark-1.png",
}

type Preview =
  | { kind: "static"; src: string; darkSrc?: string }
  | { kind: "scroll"; src: string }
  | {
      kind: "crossfade"
      images: (string | { src: string; darkSrc?: string })[]
    }
  | { kind: "marquee"; images: (string | { src: string; darkSrc?: string })[] }
  | {
      kind: "vscroll"
      images: (string | { src: string; darkSrc?: string })[]
    }

interface ShowcaseBlock {
  slug: string
  title: string
  description: string
  icon: TablerIcon
  className: string
  preview: Preview
}

const blocks: ShowcaseBlock[] = [
  // ---- Left column: two equal-size cards ----
  {
    slug: "bento",
    title: "Bento grids",
    description: "Asymmetric feature mosaics for product pages.",
    icon: IconLayoutBoardSplit,
    className: "lg:col-start-1 lg:row-start-1 lg:row-span-3",
    // Animated: screenshots cross-fade on a gentle loop.
    preview: { kind: "crossfade", images: bentoPreviews },
  },
  {
    slug: "hero",
    title: "Hero sections",
    description:
      "Opening bands with headline, supporting copy, and primary actions.",
    icon: IconLayoutGrid,
    className: "lg:col-start-1 lg:row-start-4 lg:row-span-6",
    // Animated: a strip of screenshots scrolls up forever (light/dark pair per screenshot).
    preview: { kind: "vscroll", images: heroPreviews },
  },
  // ---- Right column: three equal-size cards ----
  {
    slug: "team",
    title: "Team blocks",
    description: "Team grids and member cards with roles, bios, and socials.",
    icon: IconUsersGroup,
    className: "lg:col-start-2 lg:row-start-1 lg:row-span-3",
    preview: { kind: "static", ...teamPreview },
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description: "Product grids, cards, and cart layouts.",
    icon: IconShoppingCart,
    className: "lg:col-start-2 lg:row-start-4 lg:row-span-3",
    // Animated: a strip of screenshots scrolls left forever.
    preview: { kind: "marquee", images: ecommercePreviews },
  },
  {
    slug: "statistics",
    title: "Statistics",
    description:
      "Key metrics, stat cards, and numerical displays to showcase impact.",
    icon: IconChartBar,
    className: "lg:col-start-2 lg:row-start-7 lg:row-span-3",
    preview: { kind: "static", ...testimonialPreview },
  },
]

const counts = categoryCounts as Record<string, number>

// ------------------------------ | PREVIEW | ------------------------------ //

function BlockPreview({ preview, title }: { preview: Preview; title: string }) {
  const alt = `${title} preview`

  switch (preview.kind) {
    case "crossfade":
      return <CrossfadeImages images={preview.images} alt={alt} />
    case "scroll":
      return <AutoScrollPreview src={preview.src} alt={alt} className="m-2" />
    case "marquee":
      return (
        <MarqueeImages images={preview.images} alt={alt} className="pb-2" />
      )
    case "vscroll":
      return <TestimonialsMarquee images={preview.images} alt={alt} />
    case "static":
      return (
        <div className="flex h-full min-h-[150px] w-full items-start justify-center bg-white px-3 pb-3 dark:bg-card">
          <img
            src={preview.src}
            alt={alt}
            loading="lazy"
            className={cn(
              "h-auto max-h-full w-auto max-w-full rounded-lg object-contain",
              preview.darkSrc && "dark:hidden"
            )}
          />
          {preview.darkSrc && (
            <img
              src={preview.darkSrc}
              alt={alt}
              loading="lazy"
              className="hidden h-auto max-h-full w-auto max-w-full rounded-lg object-contain dark:block"
            />
          )}
        </div>
      )
  }
}

// ------------------------------ | BLOCKS SHOWCASE | ------------------------------ //

function BlockCard({ block }: { block: ShowcaseBlock }) {
  const Icon = block.icon
  const count = counts[block.slug] ?? 0

  return (
    <Link
      href={`/blocks/${block.slug}`}
      aria-label={`Browse ${block.title} blocks`}
      className={cn(
        "group relative flex min-h-[180px] flex-col gap-2 overflow-hidden rounded-xl border bg-card transition-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        block.className
      )}
    >
      <div className="flex items-center gap-2 px-3 pt-2.5">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
          <Icon className="size-3.5" aria-hidden="true" />
        </div>
        <div className="flex flex-1 items-center justify-between gap-2">
          <h3 className="text-sm leading-none font-medium text-foreground">
            {block.title}
          </h3>
          <span className="relative flex min-w-5 shrink-0 items-center justify-center">
            {count > 0 && (
              <Badge
                variant="outline"
                className="rounded-full px-1.5 py-0 text-[11px] transition-opacity group-hover:opacity-0"
              >
                {count}
              </Badge>
            )}
            <IconArrowUpRight
              className="absolute size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      <div className="mt-auto flex w-full min-w-0 flex-1 flex-col lg:min-h-0">
        <BlockPreview preview={block.preview} title={block.title} />
      </div>
    </Link>
  )
}

export default function BlocksShowcase() {
  return (
    <section className="mx-auto flex w-full flex-col gap-12.5 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Every section, ready as a block"
        titleClassName="tracking-tight"
        subtitle="Drop in full-width bands — heroes, pricing, dashboards, bento grids — and rearrange the page without leaving your editor."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-[repeat(9,7rem)]">
        {blocks.map((block) => (
          <BlockCard key={block.slug} block={block} />
        ))}
      </div>
    </section>
  )
}

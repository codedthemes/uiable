import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// project
import categoryCounts from "@/category-counts.json"
import BorderGlow from "@/components/animation/BorderGlow"
import { SectionHeader } from "@/components/uiable/blocks/landing/components"
import ButtonSvg from "@/images/svg/button"
import ButtonGroupSvg from "@/images/svg/ButtonGroup"
import InputOtpSvg from "@/images/svg/InputOtp"
import ItemSvg from "@/images/svg/item"
import SwitchSvg from "@/images/svg/switch"
import ToggleGroupSvg from "@/images/svg/ToggleGroup"

// assets
import { IconArrowUpRight } from "@tabler/icons-react"

// constants
const components_data = [
  {
    title: "Button",
    slug: "button",
    count: `${categoryCounts["button"] || 0} variants`,
    Svg: ButtonSvg,
  },
  {
    title: "Button Group",
    slug: "button-group",
    count: `${categoryCounts["button-group"] || 0} variants`,
    Svg: ButtonGroupSvg,
  },
  {
    title: "Input OTP",
    slug: "input-otp",
    count: `${categoryCounts["input-otp"] || 0} variants`,
    Svg: InputOtpSvg,
  },
  {
    title: "Item",
    slug: "item",
    count: `${categoryCounts["item"] || 0} variants`,
    Svg: ItemSvg,
  },
  {
    title: "Switch",
    slug: "switch",
    count: `${categoryCounts["switch"] || 0} variants`,
    Svg: SwitchSvg,
  },
  {
    title: "Toggle Group",
    slug: "toggle-group",
    count: `${categoryCounts["toggle-group"] || 0} variants`,
    Svg: ToggleGroupSvg,
  },
]

//  ------------------------------ | COMPONENT 1 | ------------------------------  //

export default function Component1() {
  return (
    <section className="mx-auto flex w-full flex-col gap-12.5 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Components designed for real applications"
        subtitle="Carefully crafted components built with accessibility, consistency, and developer experience in mind."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {components_data.map(({ title, slug, count, Svg }) => (
          <BorderGlow key={title} className="rounded-lg">
            <Link
              href={`/components/${slug}`}
              className="group block cursor-pointer"
            >
              <Card className="mb-0 overflow-hidden border-0 transition-all duration-300">
                <CardContent>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-sans text-base leading-none font-medium tracking-normal text-secondary-foreground capitalize">
                        {title}
                      </p>

                      <Separator orientation="vertical" />
                      <p className="text-sm font-medium text-muted-foreground">
                        {count}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2 group-hover:text-primary">
                      <IconArrowUpRight className="size-5 text-foreground" />
                    </div>
                  </div>
                  <div className="my-4 h-px flex-1 bg-border/70" />
                  <div className="flex min-h-40 items-center justify-center p-0">
                    <Svg className="h-full max-h-45 w-full max-w-7xl" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </BorderGlow>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<Link href="/components" />}
          className="h-11 gap-2 rounded-lg border-border bg-card px-6 font-medium text-foreground hover:bg-accent dark:border-border dark:bg-card dark:hover:bg-accent/10"
        >
          View Components
          <IconArrowUpRight className="size-5" />
        </Button>
      </div>
    </section>
  )
}

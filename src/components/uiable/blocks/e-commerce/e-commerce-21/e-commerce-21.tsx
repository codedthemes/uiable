"use client"

import { Fragment } from "react"

// shadcn
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

// third-party
import { cn } from "cn"

// assets
import { CreditCard, Gift, MessageCircleMore, Truck } from "lucide-react"

const features = [
  {
    id: "1",
    title: "Packaging",
    subtitle: "97% positive",
    icon: <Gift className="size-7 text-slate-900 dark:text-slate-100" />,
    circleBorderClass: "border-2 border-slate-200 dark:border-slate-800",
  },
  {
    id: "2",
    title: "Fast Delivery",
    subtitle: "Start From $10",
    icon: <Truck className="size-7 text-slate-900 dark:text-slate-100" />,
    circleBorderClass: "border-2 border-slate-200 dark:border-slate-800",
  },
  {
    id: "3",
    title: "Great Feedback",
    subtitle: "97% positive",
    icon: (
      <MessageCircleMore className="size-7 text-slate-900 dark:text-slate-100" />
    ),
    circleBorderClass: "border-2 border-slate-200 dark:border-slate-800",
  },
  {
    id: "4",
    title: "Secure Payment",
    subtitle: "100% secured",
    icon: <CreditCard className="size-7 text-slate-900 dark:text-slate-100" />,
    circleBorderClass: "border-2 border-slate-200 dark:border-slate-800",
  },
]

//  ------------------------------ | E - COMMERCE 21 | ------------------------------  //

export default function Ecommerce21() {
  return (
    <section className="bg-white py-10 text-slate-900 sm:py-14 lg:py-20 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:gap-0">
            {features.map((feature, index) => (
              <Fragment key={feature.id}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="hidden h-12 shrink-0 self-center! bg-slate-200/80 lg:block dark:bg-slate-800"
                  />
                )}
                <Item
                  className={cn(
                    "flex-row gap-4.5 rounded-none border-0 bg-transparent p-0 lg:flex-1 lg:justify-center",
                    index !== 0 && "lg:pl-8",
                    index !== features.length - 1 && "lg:pr-8"
                  )}
                >
                  <ItemMedia
                    className={cn(
                      "size-14 rounded-full transition-transform duration-300 group-hover/item:scale-105 sm:size-16",
                      feature.circleBorderClass
                    )}
                  >
                    {feature.icon}
                  </ItemMedia>
                  <ItemContent className="gap-0.5">
                    <ItemTitle className="text-base font-bold tracking-tight text-slate-900 sm:text-lg dark:text-slate-100">
                      {feature.title}
                    </ItemTitle>
                    <ItemDescription className="text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
                      {feature.subtitle}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

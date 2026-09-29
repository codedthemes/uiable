"use client"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"

// project-imports
import ActionButtonGroupBadge from "@/components/uiable/blocks/landing/components/ActionButtonGroupBadge"
import AskMeAnything from "@/components/uiable/blocks/landing/components/AskMeAnything"
import CurrencySwapCard from "@/components/uiable/blocks/landing/components/CurrencySwapCard"
import DeploymentEnvironmentCard from "@/components/uiable/blocks/landing/components/DeploymentEnvironmentCard"
import EventAlertCard from "@/components/uiable/blocks/landing/components/EventAlertCard"
import OneTimePasswordCard from "@/components/uiable/blocks/landing/components/OneTimePasswordCard"
import PowerUsageCard from "@/components/uiable/blocks/landing/components/PowerUsageCard"
import PrivacyVisibilityCard from "@/components/uiable/blocks/landing/components/PrivacyVisibilityCard"
import ProfileCard from "@/components/uiable/blocks/landing/components/ProfileCard"
import RevenueChartCard from "@/components/uiable/blocks/landing/components/RevenueChartCard"
import RevenueGrowthSlider from "@/components/uiable/blocks/landing/components/RevenueGrowthSlider"
import SectionHeader from "@/components/uiable/blocks/landing/components/SectionHeader"
import UploadFilesCard from "@/components/uiable/blocks/landing/components/UploadFilesCard"
import VerificationBannerCard from "@/components/uiable/blocks/landing/components/VerificationBannerCard"

// assets
import { IconArrowUpRight } from "@tabler/icons-react"

//  ------------------------------ | COMPONENT 2 | ------------------------------  //

export default function Component2() {
  return (
    <section className="mx-auto flex w-full flex-col gap-12.5 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Components designed for real applications"
        titleClassName="tracking-tight"
        subtitle="Carefully crafted components built with accessibility, consistency, and developer experience in mind."
      />

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-6">
            <ProfileCard />
            <AskMeAnything />
            <RevenueGrowthSlider />
            <OneTimePasswordCard />
          </div>

          <div className="flex flex-col gap-6">
            <ActionButtonGroupBadge />
            <RevenueChartCard />
            <PrivacyVisibilityCard />
          </div>

          <div className="flex flex-col gap-6">
            <UploadFilesCard />
            <DeploymentEnvironmentCard />
          </div>

          <div className="flex flex-col gap-6">
            <EventAlertCard />
            <VerificationBannerCard />
            <CurrencySwapCard />
            <PowerUsageCard />
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-70 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="flex items-center justify-center">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/components" />}
          className="h-11 gap-2 rounded-lg bg-foreground px-6 font-medium text-background hover:bg-foreground/90"
        >
          View all Components
          <IconArrowUpRight aria-hidden="true" className="size-5" />
        </Button>
      </div>
    </section>
  )
}

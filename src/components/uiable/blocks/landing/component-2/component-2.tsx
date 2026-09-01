"use client"

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

//  ------------------------------ | COMPONENT 2 | ------------------------------  //

export default function Component2() {
  return (
    <section className="mx-auto flex w-full flex-col gap-12.5 px-4 py-12.5 sm:px-8">
      <SectionHeader
        title="Build complete experiences, not just interfaces"
        subtitle="Pre-built application patterns designed to help you move from idea to production faster."
      />

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            <ProfileCard />
            <AskMeAnything />
            <RevenueGrowthSlider />
            <OneTimePasswordCard />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            <ActionButtonGroupBadge />
            <RevenueChartCard />
            <PrivacyVisibilityCard />
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            <UploadFilesCard />
            <DeploymentEnvironmentCard />
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-6">
            <EventAlertCard />
            <VerificationBannerCard />
            <CurrencySwapCard />
            <PowerUsageCard />
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-70 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
    </section>
  )
}

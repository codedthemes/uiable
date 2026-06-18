"use client";

// project imports
import ProfileCard from "@/components/uiable/blocks/landing/components/ProfileCard";
import AskMeAnything from "@/components/uiable/blocks/landing/components/AskMeAnything";
import RevenueGrowthSlider from "@/components/uiable/blocks/landing/components/RevenueGrowthSlider";
import OneTimePasswordCard from "@/components/uiable/blocks/landing/components/OneTimePasswordCard";
import ActionButtonGroupBadge from "@/components/uiable/blocks/landing/components/ActionButtonGroupBadge";
import RevenueChartCard from "@/components/uiable/blocks/landing/components/RevenueChartCard";
import PrivacyVisibilityCard from "@/components/uiable/blocks/landing/components/PrivacyVisibilityCard";
import UploadFilesCard from "@/components/uiable/blocks/landing/components/UploadFilesCard";
import DeploymentEnvironmentCard from "@/components/uiable/blocks/landing/components/DeploymentEnvironmentCard";
import EventAlertCard from "@/components/uiable/blocks/landing/components/EventAlertCard";
import VerificationBannerCard from "@/components/uiable/blocks/landing/components/VerificationBannerCard";
import CurrencySwapCard from "@/components/uiable/blocks/landing/components/CurrencySwapCard";
import PowerUsageCard from "@/components/uiable/blocks/landing/components/PowerUsageCard";

//  ------------------------------ | COMPONENT 2 | ------------------------------  //

export default function Component2() {
  return (
    <section className="w-full mx-auto py-12.5 px-4 sm:px-8 flex flex-col gap-12.5">
      <div className="flex flex-col gap-2.5 sm:gap-3.5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-[0.1px] text-foreground">
          Build complete experiences, not just interfaces
        </h2>
        <p className="font-normal text-base sm:text-base md:text-lg leading-6 sm:leading-6 text-muted-foreground">
          Pre-built application patterns designed to help you move from idea to
          production faster.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

        <div
          className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none z-20"
        />
      </div>
    </section>
  );
}

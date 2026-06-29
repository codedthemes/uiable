"use client"

// shadcn
// project
import branding from "@/branding.json"
// assets
import { Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

//  ------------------------------ | BLOCK - WELCOME BANNER | ------------------------------  //

export default function WelcomeBanner() {
  return (
    <Card className="welcome-banner relative overflow-hidden border-none bg-chart-4">
      <div
        className="absolute inset-0 z-10 bg-[length:100%] bg-right-bottom bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(https://cdn.uiable.com/widget/img-dropbox-bg.svg)`,
        }}
      ></div>
      <CardContent className="relative z-20 p-6 md:p-10">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 sm:col-span-7">
            <div className="space-y-6">
              <h2 className="text-2xl leading-tight font-bold text-white md:text-3xl">
                Explore Redesigned {branding.brandName}
              </h2>
              <p className="text-lg leading-relaxed text-white/80">
                The Brand new User Interface with power of Shadcn Components.
                Explore the Endless possibilities with {branding.brandName}.
              </p>
              <a
                href="https://1.envato.market/zNkqj6"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-xl border-white bg-transparent px-8 font-bold text-white hover:bg-white hover:text-primary"
                )}
              >
                Download
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 flex justify-center sm:col-span-5">
            <img
              src="https://cdn.uiable.com/og/components-to-complete-interfaces.png"
              alt="Welcome Banner"
              className="w-full max-w-[200px] animate-in drop-shadow-2xl duration-700 fade-in zoom-in"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

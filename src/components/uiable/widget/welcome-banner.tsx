"use client";

// shadcn
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// project
import branding from "@/branding.json";
import { cn } from "@/lib/utils";

// assets
import { Download } from "lucide-react";

//  ------------------------------ | BLOCK - WELCOME BANNER | ------------------------------  //

export default function WelcomeBanner() {
  return (
    <Card className="welcome-banner bg-chart-4 border-none relative overflow-hidden">
      <div
        className="absolute opacity-50 inset-0 z-10 bg-right-bottom bg-[length:100%] bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.uiable.com/widget/img-dropbox-bg.svg)`,
        }}
      ></div>
      <CardContent className="relative z-20 p-6 md:p-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 sm:col-span-7">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Explore Redesigned {branding.brandName}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                The Brand new User Interface with power of Shadcn Components.
                Explore the Endless possibilities with {branding.brandName}.
              </p>
              <a
                href="https://1.envato.market/zNkqj6"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold px-8 h-12 rounded-xl",
                )}
              >
                Download
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 flex justify-center">
            <img
              src="https://cdn.uiable.com/og/components-to-complete-interfaces.png"
              alt="Welcome Banner"
              className="w-full max-w-[200px] drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

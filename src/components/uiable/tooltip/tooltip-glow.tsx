// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { Sparkles, Zap } from "lucide-react"

//  ------------------------------ | TOOLTIP - GLOW | ------------------------------  //

export function TooltipGlow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button className="via-info-500 relative overflow-hidden bg-gradient-to-r from-primary to-yellow-500 text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg hover:shadow-primary/25" />
          }
        >
          <Sparkles className="size-4 animate-pulse" />
          <span>AI Assistant</span>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-72 border border-background/20 p-3.5 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-background">
                <Sparkles className="size-3.5 text-yellow-500" /> Smart Refactor
              </span>
              <Badge className="border-background/20 bg-background/15 px-1.5 py-0 text-[9px] text-background hover:bg-background/25">
                PRO
              </Badge>
            </div>
            <p className="text-xs leading-relaxed text-background/90">
              Automatically analyzes syntax trees and refactors complex blocks
              into clean, modular components instantly.
            </p>
            <div className="flex items-center justify-between border-t border-background/20 pt-2 text-[10px] text-background/80">
              <span>Quick Trigger</span>
              <Kbd className="border-background/30 bg-background/20 text-background">
                Alt + R
              </Kbd>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              className="border-cyan-500/40 bg-cyan-500/10 text-cyan-600 transition-all hover:bg-cyan-500/20 hover:shadow-sm dark:border-cyan-500/40 dark:text-cyan-300"
            />
          }
        >
          <Zap className="size-3.5 text-cyan-500" />
          <span>Turbo Mode</span>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="max-w-64 border border-background/20 p-3 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
        >
          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-background">
              <Zap className="size-3 text-cyan-500" /> Accelerated Builds
            </span>
            <p className="text-[11px] leading-relaxed text-background/90">
              Skips unnecessary cache checks and parallelizes asset compilation
              for 4x faster hot reloads.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

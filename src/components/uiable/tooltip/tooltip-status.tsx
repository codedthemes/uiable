// shadcn
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react"

//  ------------------------------ | TOOLTIP - STATUS | ------------------------------  //

export function TooltipStatus() {
  const statusItems = [
    {
      label: "Operational",
      icon: CheckCircle2,
      title: "All systems online",
      description: "Database and CDN nodes reporting 99.99% uptime today.",
      triggerClass:
        "border-green-500/30 bg-green-500/10 dark:border-green-500/30 dark:bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:text-green-400",
      iconClass: "text-green-500",
    },
    {
      label: "Warning",
      icon: AlertTriangle,
      title: "High Memory Usage",
      description: "Node cluster US-East is operating at 88% capacity.",
      triggerClass:
        "border-yellow-500/30 bg-yellow-500/10 dark:border-yellow-500/30 dark:bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 dark:text-yellow-400",
      iconClass: "text-yellow-500",
    },
    {
      label: "Error",
      icon: XCircle,
      title: "Sync Failed",
      description: "Could not push build logs to external S3 storage bucket.",
      triggerClass:
        "border-rose-500/30 bg-rose-500/10 dark:border-rose-500/30 dark:bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 dark:text-rose-400",
      iconClass: "text-rose-500",
    },
    {
      label: "Notice",
      icon: Info,
      title: "Maintenance Scheduled",
      description:
        "System upgrade planned for Sunday at 02:00 UTC (15m window).",
      triggerClass:
        "border-cyan-500/30 bg-cyan-500/10 dark:border-cyan-500/30 dark:bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20 dark:text-cyan-400",
      iconClass: "text-cyan-500",
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {statusItems.map((item) => {
        const Icon = item.icon
        return (
          <Tooltip key={item.label}>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  className={`h-8 gap-1.5 px-3 text-xs font-medium transition-all ${item.triggerClass}`}
                />
              }
            >
              <Icon className="size-3.5 shrink-0" />
              {item.label}
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-64 p-3 shadow-md">
              <div className="flex items-start gap-2.5">
                <Icon className={`mt-0.5 size-4 shrink-0 ${item.iconClass}`} />
                <div className="flex flex-col gap-1">
                  <h6 className="text-xs leading-tight font-semibold text-background">
                    {item.title}
                  </h6>
                  <p className="text-[11px] leading-relaxed text-background/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}

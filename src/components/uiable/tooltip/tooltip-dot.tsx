// shadcn
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

//  ------------------------------ | TOOLTIP - DOT | ------------------------------  //

export function TooltipDot() {
  const dotItems = [
    {
      label: "Collapsible",
      tooltip: "Collapsible updated with 3 new variants",
      dotClass: "bg-green-500",
    },
    {
      label: "Calendar",
      tooltip: "2 upcoming meetings in Calendar",
      dotClass: "bg-yellow-500",
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-4">
      {dotItems.map((item) => (
        <Button
          key={item.label}
          variant="link"
          className="gap-1 px-0 text-foreground"
        >
          <span>{item.label}</span>
          <Tooltip>
            <TooltipTrigger render={<span className="flex items-center p-1" />}>
              <span
                className={`block size-1.5 rounded-full ${item.dotClass}`}
              />
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="rounded-lg px-3 py-2 text-xs font-medium shadow-xl"
            >
              {item.tooltip}
            </TooltipContent>
          </Tooltip>
        </Button>
      ))}
    </div>
  )
}

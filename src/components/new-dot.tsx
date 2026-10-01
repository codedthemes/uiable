"use client"

// shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface NewDotProps {
  side?: "top" | "right" | "bottom" | "left"
}

//  ------------------------------ | LAYOUT - NEW DOT | ------------------------------  //

export default function NewDot({ side = "right" }: NewDotProps) {
  return (
    <TooltipProvider delay={0}>
      <Tooltip>
        <TooltipTrigger
          render={
            <span className="relative ml-2 flex size-1.5 cursor-default">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex size-1.5 rounded-full bg-red-500"></span>
            </span>
          }
        />
        <TooltipContent side={side} sideOffset={8}>
          <p>New Added</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

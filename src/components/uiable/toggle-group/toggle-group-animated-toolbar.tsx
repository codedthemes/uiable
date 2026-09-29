"use client"

import { useState } from "react"

// shadcn
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// third-party
import { cn } from "cn"
import { AnimatePresence, motion } from "framer-motion"

// assets
import { Eraser, Hand, MousePointer, PenTool, Square, Type } from "lucide-react"

interface ToolbarItem {
  id: string
  label: string
  shortcut: string
  icon: React.ComponentType<{ className?: string }>
}

const TOOLS: ToolbarItem[] = [
  { id: "select", label: "Select", shortcut: "V", icon: MousePointer },
  { id: "pan", label: "Hand Tool", shortcut: "H", icon: Hand },
  { id: "draw", label: "Pen Tool", shortcut: "P", icon: PenTool },
  { id: "shapes", label: "Shapes", shortcut: "R", icon: Square },
  { id: "text", label: "Text", shortcut: "T", icon: Type },
  { id: "erase", label: "Eraser", shortcut: "E", icon: Eraser },
]

//  ------------------------------ | TOGGLE GROUP - ANIMATED TOOLBAR | ------------------------------  //

export function ToggleGroupAnimatedToolbar() {
  const [activeTool, setActiveTool] = useState<string>("select")
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  const currentToolObj = TOOLS.find((tool) => tool.id === activeTool)

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-border/60 bg-gradient-to-b from-card/90 to-card/50 p-2">
      {/* Animated Toolbar Container */}
      <div
        className="relative flex items-center rounded-lg border border-border/70 bg-muted/40 p-1.5 shadow-inner"
        onMouseLeave={() => setHoveredTool(null)}
      >
        <ToggleGroup
          value={[activeTool]}
          onValueChange={(val) => {
            if (val[0]) setActiveTool(val[0])
          }}
          variant="default"
          spacing={1}
          className="relative z-10 flex items-center gap-1"
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon
            const isActive = activeTool === tool.id
            const isHovered = hoveredTool === tool.id

            return (
              <ToggleGroupItem
                key={tool.id}
                value={tool.id}
                aria-label={tool.label}
                onMouseEnter={() => setHoveredTool(tool.id)}
                className={cn(
                  "group relative flex size-10 items-center justify-center rounded-lg transition-colors duration-200 focus-visible:z-20",
                  isActive
                    ? "text-white aria-pressed:bg-transparent aria-pressed:text-white data-[state=on]:bg-transparent data-[state=on]:text-white dark:text-white dark:aria-pressed:text-white dark:data-[state=on]:text-white"
                    : "text-muted-foreground hover:bg-transparent hover:text-foreground"
                )}
              >
                {/* Active Sliding Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="toolbar-active-indicator"
                    className="absolute inset-0 rounded-lg bg-primary shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover Sliding Indicator */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="toolbar-hover-indicator"
                    className="absolute inset-0 rounded-lg bg-muted/80"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={cn(
                    "relative z-10 flex items-center justify-center transition-colors duration-200",
                    isActive
                      ? "text-white dark:text-white"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  <Icon className="size-4.5" />
                </span>
              </ToggleGroupItem>
            )
          })}
        </ToggleGroup>
      </div>

      {/* Tool Info Status Bar */}
      <div className="flex h-7 items-center justify-center">
        <AnimatePresence mode="wait">
          {currentToolObj && (
            <motion.div
              key={currentToolObj.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/80 px-3.5 py-1 text-xs font-medium text-foreground shadow-2xs"
            >
              <span>{currentToolObj.label}</span>
              <span className="rounded-lg bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {currentToolObj.shortcut}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

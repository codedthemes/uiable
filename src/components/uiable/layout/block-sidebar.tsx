"use client"

import { useState } from "react"

// shadcn
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// third-party
import { cn } from "cn"

// project-imports
import BlockList from "./block-list"
import ComponentSearch from "./shared/component-search"

//  ------------------------------ | LAYOUT - BLOCK SIDEBAR | ------------------------------  //

interface BlockSidebarProps {
  isMobile?: boolean
  onSelect?: () => void
}

export default function BlockSidebar({
  isMobile,
  onSelect,
}: BlockSidebarProps) {
  const [search, setSearch] = useState("")

  return (
    <aside
      className={cn(
        "sticky top-24 w-72 shrink-0 flex-col",
        isMobile ? "static flex h-full w-full px-0" : "hidden lg:flex"
      )}
    >
      <Card
        className={cn(
          "mb-0",
          isMobile ? "border-none bg-transparent shadow-none" : ""
        )}
      >
        <CardHeader className={cn(isMobile ? "px-0 pt-1 pb-4" : "")}>
          <ComponentSearch value={search} onChange={setSearch} />
        </CardHeader>
        <ScrollArea
          className={cn(
            "h-[calc(100vh-230px)]",
            isMobile ? "h-[calc(100vh-120px)]" : ""
          )}
        >
          <CardContent className={cn("flex-1", isMobile ? "px-0" : "")}>
            <BlockList search={search} onSelect={onSelect} />
          </CardContent>
        </ScrollArea>
      </Card>
    </aside>
  )
}

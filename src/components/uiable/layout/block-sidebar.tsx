"use client";

import { useState } from "react";

// shadcn
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// project
import BlockList from "./block-list";
import ComponentSearch from "./shared/component-search";
import { cn } from "@/lib/utils";

//  ------------------------------ | LAYOUT - BLOCK SIDEBAR | ------------------------------  //

export default function BlockSidebar({
  isMobile,
  onSelect
}: {
  isMobile?: boolean;
  onSelect?: () => void;
}) {
  const [search, setSearch] = useState("");

  return (
    <aside
      className={cn(
        "w-72 flex-col shrink-0 sticky top-24",
        isMobile ? "flex w-full static h-full px-0" : "hidden lg:flex"
      )}
    >
      <Card
        className={cn(
          "mb-0",
          isMobile ? "border-none shadow-none bg-transparent" : ""
        )}
      >
        <CardHeader className={cn(isMobile ? "px-0 pb-4 pt-1" : "")}>
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
  );
}

"use client";

import { useState } from "react";

// shadcn
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// project
import ComponentList from "./component-list";
import ComponentSearch from "./shared/component-search";

//  ------------------------------ | COMPONENT - SIDEBAR | ------------------------------  //

export default function ComponentSidebar() {
  const [search, setSearch] = useState("");

  return (
    <aside className="hidden lg:flex w-72 flex-col shrink-0 sticky top-24">
      <Card className="mb-0">
        <CardHeader>
          <ComponentSearch value={search} onChange={setSearch} />
        </CardHeader>
        <ScrollArea className="h-[calc(100vh-230px)]">
          <CardContent className="flex-1">
            <ComponentList search={search} />
          </CardContent>
        </ScrollArea>
      </Card>
    </aside>
  );
}

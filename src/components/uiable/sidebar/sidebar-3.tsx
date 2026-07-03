"use client";

import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

// project
import Logo from "@/components/uiable/layout/shared/logo";

// assets
import { ArrowLeft, ChevronDown } from "lucide-react";

// ── Dummy data ────────────────────────────────────────────────────────────── //

const DUMMY_DOC_LINKS = [
  { title: "Introduction", active: true },
  { title: "Installation", active: false },
  { title: "Components", active: false },
  { title: "Blocks", active: false },
  { title: "Figma", active: false },
  { title: "License", active: false },
];

const DUMMY_BLOCKS = [
  { title: "Hero", count: 12 },
  { title: "Feature", count: 8 },
  { title: "CTA", count: 5 },
  { title: "Footer", count: 10 },
];

const DUMMY_COMPONENTS = [
  { title: "Accordion", count: 3 },
  { title: "Button", count: 15 },
  { title: "Dialog", count: 7 },
  { title: "Tabs", count: 4 },
];

//  ------------------------------ | COMPONENT - SIDEBAR 3 (Documentation) | ------------------------------  //

export default function Sidebar3() {
  const [activeItem, setActiveItem] = useState("Introduction");

  return (
    <SidebarProvider className="min-h-0! w-full relative overflow-hidden rounded-lg border bg-background">
      <div
        className="group peer text-sidebar-foreground"
        data-state="expanded"
        data-collapsible=""
        data-variant="inset"
        data-side="left"
      >
        <div
          className="z-10 flex flex-col w-(--sidebar-width) border-r border-dashed border-border bg-sidebar"
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
        >
          <SidebarHeader className="pt-4 px-4 pb-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <Logo />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent className="px-2 gap-0 *:py-0 overflow-visible flex-none">
            {/* Documentation Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                Documentation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {DUMMY_DOC_LINKS.map((doc) => (
                    <SidebarMenuItem key={doc.title}>
                      <SidebarMenuButton
                        isActive={activeItem === doc.title}
                        onClick={() => setActiveItem(doc.title)}
                        tooltip={doc.title}
                        className="rounded-lg px-4 py-2 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                      >
                        <span className="font-medium">{doc.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Block Collapsible Section */}
            <SidebarGroup className="flex flex-col gap-1">
              <Collapsible
                className="data-open:bg-background rounded-lg"
                defaultOpen
              >
                <CollapsibleTrigger
                  render={
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-background aria-expanded:bg-background p-0 pt-6 pb-2"
                    />
                  }
                >
                  <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    Block
                  </SidebarGroupLabel>
                  <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start">
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {DUMMY_BLOCKS.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            isActive={activeItem === item.title}
                            onClick={() => setActiveItem(item.title)}
                            className="rounded-lg px-4 py-2 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="size-5.5 inline-flex items-center justify-center text-[11px] transition-colors opacity-80 ml-auto bg-primary/10 text-primary">
                              {item.count}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>

            {/* UI Components Collapsible Section */}
            <SidebarGroup className="flex flex-col gap-1">
              <Collapsible className="data-open:bg-background rounded-lg">
                <CollapsibleTrigger
                  render={
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-background aria-expanded:bg-background p-0 pt-6 pb-2"
                    />
                  }
                >
                  <SidebarGroupLabel className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    UI Components
                  </SidebarGroupLabel>
                  <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start">
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {DUMMY_COMPONENTS.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            isActive={activeItem === item.title}
                            onClick={() => setActiveItem(item.title)}
                            className="rounded-lg px-4 py-2 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="size-5.5 inline-flex items-center justify-center text-[11px] transition-colors opacity-80 ml-auto bg-primary/10 text-primary">
                              {item.count}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>

            {/* Navigation Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="rounded-lg px-4 py-2 mb-4 data-[active=true]:bg-primary/10 data-[active=true]:text-primary">
                      <ArrowLeft className="size-4!" />
                      <span className="font-medium">Back to Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </div>
    </SidebarProvider>
  );
}

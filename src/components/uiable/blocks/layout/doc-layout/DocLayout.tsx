"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// project-imports
import NotificationDropdown from "@/components/uiable/layout/notification-dropdown"
import SearchBar from "@/components/uiable/layout/search-bar"
import Logo from "@/components/uiable/layout/shared/logo"
import UserProfile from "@/components/uiable/layout/user-profile"

// assets
import { ArrowLeft, ChevronDown, Settings } from "lucide-react"

// ── Dummy data ────────────────────────────────────────────────────────────── //

const DUMMY_DOC_LINKS = [
  { title: "Introduction" },
  { title: "Installation" },
  { title: "Components" },
  { title: "Blocks" },
  { title: "Figma" },
  { title: "License" },
]

const DUMMY_BLOCKS = [
  { title: "Hero", count: 12 },
  { title: "Feature", count: 8 },
  { title: "CTA", count: 5 },
  { title: "Footer", count: 10 },
]

const DUMMY_COMPONENTS = [
  { title: "Accordion", count: 3 },
  { title: "Button", count: 15 },
  { title: "Dialog", count: 7 },
  { title: "Tabs", count: 4 },
]

//  ------------------------------ | BLOCK - DOC LAYOUT | ------------------------------  //

export default function DocLayout() {
  const [activeItem, setActiveItem] = useState("Introduction")

  return (
    <SidebarProvider className="relative h-[600px] min-h-0! w-full overflow-hidden bg-background">
      {/* ── Sidebar ── */}
      <Sidebar
        collapsible="offcanvas"
        variant="inset"
        className="absolute z-10 h-full border-r border-dashed"
      >
        <SidebarHeader className="px-4 pt-4 pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="gap-0 px-2 *:py-0">
          {/* Documentation Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
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

          {/* Blocks Collapsible Section */}
          <SidebarGroup className="flex flex-col gap-1">
            <Collapsible
              className="rounded-[20px] data-open:bg-background"
              defaultOpen
            >
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    className="w-full p-0 pt-6 pb-2 hover:bg-background aria-expanded:bg-background"
                  />
                }
              >
                <SidebarGroupLabel className="text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
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
                          <span className="ml-auto inline-flex size-5.5 items-center justify-center rounded-sm bg-primary/10 text-[11px] text-primary opacity-80">
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
            <Collapsible className="rounded-[20px] data-open:bg-background">
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    className="w-full p-0 pt-6 pb-2 hover:bg-background aria-expanded:bg-background"
                  />
                }
              >
                <SidebarGroupLabel className="text-[11px] font-bold tracking-widest text-muted-foreground/70 uppercase">
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
                          <span className="ml-auto inline-flex size-5.5 items-center justify-center rounded-sm bg-primary/10 text-[11px] text-primary opacity-80">
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
            <SidebarGroupLabel className="pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="rounded-lg px-4 py-2 data-[active=true]:bg-primary/10 data-[active=true]:text-primary">
                    <ArrowLeft className="size-4!" />
                    <span className="font-medium">Back to Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>

      {/* ── Main content with Navbar ── */}
      <SidebarInset className="flex flex-col overflow-hidden">
        {/* ── Navbar ── */}
        <header className="flex h-16 w-full shrink-0 items-center gap-1 border-b border-border/50 bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <SidebarTrigger className="relative mx-1 -ml-1 flex h-11 w-11 items-center justify-center rounded-lg" />
          <SearchBar />
          <div className="flex-1" />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              <Settings className="size-5" />
            </Button>
            <div className="mx-1 h-4 w-px bg-border" />
            <NotificationDropdown />
            <div className="mx-1 h-4 w-px bg-border" />
            <UserProfile />
          </div>
        </header>

        {/* ── Page content ── */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
            </div>
            <div className="min-h-40 rounded-xl bg-card" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

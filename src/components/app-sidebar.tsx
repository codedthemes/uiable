"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, ComponentProps } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar"

// project
import Logo from "./uiable/layout/shared/logo"
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_BLOCKS, NAV_CATEGORIES } from "@/components-grid"
import BlockList from "@/components/uiable/layout/block-list"
import ComponentList from "@/components/uiable/layout/component-list"
import ComponentSearch from "@/components/uiable/layout/shared/component-search"

// assets
import {
  Component,
  FileText,
  ChevronDownIcon,
  LayoutDashboard,
} from "lucide-react"

//  ------------------------------ | COMPONENT - APP SIDEBAR | ------------------------------  //

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const [search, setSearch] = useState("")

  const filteredSections = NAV_CATEGORIES.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  const filteredBlock = NAV_BLOCKS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  const docs = [
    { title: "Introduction", href: "/doc/introduction" },
    { title: "Installation", href: "/doc/installation" },
    { title: "Shadcn CLI", href: "/doc/cli" },
    { title: "Components", href: "/doc/components" },
    { title: "Changelog", href: "/doc/changelog" },
  ]

  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader className="px-4 pt-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0 px-2">
        <div className="sticky top-0 z-30 block bg-sidebar p-2">
          <ComponentSearch value={search} onChange={setSearch} />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname.startsWith("/components")}
                  render={<Link href="/components" />}
                  tooltip="View All Components"
                >
                  <Component className="size-5!" />
                  <span>Components</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname.startsWith("/blocks")}
                  render={<Link href="/blocks" />}
                  tooltip="View All Blocks"
                >
                  <LayoutDashboard className="size-5!" />
                  <span>Blocks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname.startsWith("/doc")}
                  render={<Link href="/doc" />}
                  tooltip="Documentation"
                >
                  <FileText className="size-5!" />
                  <span>Documentation</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {pathname.startsWith("/blocks") && <BlockList search={search} />}
        {pathname.startsWith("/components") && (
          <ComponentList search={search} />
        )}
        {pathname.startsWith("/doc") && (
          <>
            {filteredDocs.length > 0 && (
              <SidebarGroup>
                <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                  Documentation
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredDocs.map((doc) => (
                      <SidebarMenuItem key={doc.href}>
                        <SidebarMenuButton
                          isActive={pathname === doc.href}
                          render={<Link href={doc.href} />}
                          tooltip={doc.title}
                        >
                          <span className="font-medium">{doc.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}

            <SidebarGroup className="flex flex-col gap-1">
              <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                Block
              </SidebarGroupLabel>
              {filteredBlock.map((section) => (
                <Collapsible key={section.title} className="p-0">
                  <CollapsibleTrigger
                    render={
                      <Button
                        variant="ghost"
                        className="mb-1 w-full border-0 p-2 text-sidebar-foreground hover:bg-muted-foreground/6 aria-expanded:bg-muted-foreground/6"
                      />
                    }
                  >
                    <SidebarGroupLabel className="px-0 text-sm font-medium text-sidebar-foreground">
                      {section.title}
                    </SidebarGroupLabel>
                    <ChevronDownIcon className="ml-auto size-4 -rotate-90 transition-all group-data-panel-open/button:rotate-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-start">
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items.map((item) => {
                          const href = `/blocks/${item.slug}`
                          return (
                            <SidebarMenuItem key={item.slug}>
                              <SidebarMenuButton
                                isActive={pathname === href}
                                render={<Link href={href} />}
                                tooltip="License"
                                className="rounded-lg p-2"
                              >
                                <span className="font-medium">
                                  {item.title}
                                </span>
                                <span className="ml-auto inline-flex size-5 items-center justify-center text-xs text-sidebar-ring">
                                  {CATEGORY_COUNTS[
                                    item.slug as keyof typeof CATEGORY_COUNTS
                                  ] || 0}
                                </span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarGroup>

            <SidebarGroup className="flex flex-col gap-1">
              <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                Components
              </SidebarGroupLabel>
              {filteredSections.map((section) => (
                <Collapsible key={section.title} className="p-0">
                  <CollapsibleTrigger
                    render={
                      <Button
                        variant="ghost"
                        className="mb-1 w-full border-0 p-2 text-sidebar-foreground hover:bg-muted-foreground/6 aria-expanded:bg-muted-foreground/6"
                      />
                    }
                  >
                    <SidebarGroupLabel className="px-0 text-sm font-medium text-sidebar-foreground">
                      {section.title}
                    </SidebarGroupLabel>
                    <ChevronDownIcon className="ml-auto size-4 -rotate-90 transition-all group-data-panel-open/button:rotate-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-start">
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items.map((item) => {
                          const href = `/components/${item.slug}`
                          return (
                            <SidebarMenuItem key={item.slug}>
                              <SidebarMenuButton
                                isActive={pathname === href}
                                render={<Link href={href} />}
                                tooltip="License"
                                className="rounded-lg p-2"
                              >
                                <span className="font-medium">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <Badge className="ml-2 border-transparent bg-red-500/15 text-red-500">
                                    {item.badge.label}
                                  </Badge>
                                )}
                                <span className="ml-auto inline-flex size-5 items-center justify-center text-xs text-sidebar-ring">
                                  {CATEGORY_COUNTS[
                                    item.slug as keyof typeof CATEGORY_COUNTS
                                  ] || 0}
                                </span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

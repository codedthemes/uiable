"use client"

import { ComponentProps, MouseEvent, useEffect, useState } from "react"

// next
import Link from "next/link"
import { usePathname } from "next/navigation"

// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

// project-imports
import Logo from "./uiable/layout/shared/logo"
import CATEGORY_COUNTS from "@/category-counts.json"
import { NAV_BLOCKS, NAV_COMPONENTS } from "@/components-grid"
import BlockList from "@/components/uiable/layout/block-list"
import ComponentList from "@/components/uiable/layout/component-list"
import ComponentSearch from "@/components/uiable/layout/shared/component-search"

// assets
import {
  ChevronDownIcon,
  ChevronRight,
  Component,
  FileText,
  Gem,
  LayoutDashboard,
  LogIn,
  Rocket,
  SquareStack,
  UserRoundPen,
} from "lucide-react"

const MAIN_NAV_ITEMS = [
  {
    title: "Components",
    href: "/components",
    icon: Component,
    tooltip: "View All Components",
    isActive: (pathname: string) => pathname.startsWith("/components"),
  },
  {
    title: "Blocks",
    href: "/blocks",
    icon: LayoutDashboard,
    tooltip: "View All Blocks",
    isActive: (pathname: string) => pathname.startsWith("/blocks"),
  },
  {
    title: "Documentation",
    href: "/doc",
    icon: FileText,
    tooltip: "Documentation",
    isActive: (pathname: string) => pathname.startsWith("/doc"),
  },
]

//  ------------------------------ | COMPONENT - APP SIDEBAR | ------------------------------  //

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  const [search, setSearch] = useState("")

  // Close the mobile temporary drawer whenever the route changes
  // (e.g. after clicking a menu-item on tablet / below the lg breakpoint).
  useEffect(() => {
    setOpenMobile(false)
  }, [pathname, setOpenMobile])

  // Also close on any link click inside the sidebar. This covers cases the
  // route-change effect can't: links that open in a new tab (target="_blank")
  // and clicks on the already-active item, where the pathname never changes.
  // Collapsible triggers are plain buttons (not <a>), so they stay open.
  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isMobile) return
    if ((event.target as HTMLElement).closest("a[href]")) {
      setOpenMobile(false)
    }
  }

  const filteredSections = NAV_COMPONENTS.map((section) => ({
    ...section,
  })).filter((section) => section.items.length > 0)

  const filteredBlock = NAV_BLOCKS.map((section) => ({
    ...section,
  })).filter((section) => section.items.length > 0)

  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader className="px-4 pt-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo className="h-7 w-auto" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0 px-2" onClick={handleContentClick}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="block columns-2 gap-1.5 rounded-lg border border-background bg-background/40 px-1.5 pt-1.5">
              {MAIN_NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const isActive = item.isActive ? item.isActive(pathname) : false
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="mb-1.5 h-full flex-col gap-1 py-2.5 hover:bg-card data-active:bg-card data-active:shadow-[0_0_3px_0_var(--border)]"
                      isActive={isActive}
                      render={<Link href={item.href} />}
                      tooltip={item.tooltip}
                    >
                      <Icon
                        className={`size-5! ${
                          isActive ? "text-primary opacity-100" : "opacity-50"
                        }`}
                      />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="sticky top-0 z-30 block bg-sidebar p-2">
          <ComponentSearch value={search} onChange={setSearch} />
        </div>
        {pathname.startsWith("/blocks") && <BlockList search={search} />}
        {pathname.startsWith("/components") && (
          <ComponentList search={search} />
        )}
        {pathname.startsWith("/doc") && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                Documentation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/introduction"}
                      render={<Link href="/doc/introduction" />}
                      tooltip="Introduction"
                    >
                      <span className="font-medium">Introduction</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/installation"}
                      render={<Link href="/doc/installation" />}
                      tooltip="Installation"
                    >
                      <span className="font-medium">Installation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/cli"}
                      render={<Link href="/doc/cli" />}
                      tooltip="Shadcn CLI"
                    >
                      <span className="font-medium">Shadcn CLI</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/components"}
                      render={<Link href="/doc/components" />}
                      tooltip="Components"
                    >
                      <span className="font-medium">Components</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/blocks"}
                      render={<Link href="/doc/blocks" />}
                      tooltip="Blocks"
                    >
                      <span className="font-medium">Blocks</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/mcp"}
                      render={<Link href="/doc/mcp" />}
                      tooltip="MCP"
                    >
                      <span className="font-medium">MCP</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/doc/changelog"}
                      render={<Link href="/doc/changelog" />}
                      tooltip="Changelog"
                    >
                      <span className="font-medium">Changelog</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
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
                                tooltip={item.title}
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
                                tooltip={item.title}
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
          </>
        )}
        {!["/blocks", "/components", "/doc"].some((path) =>
          pathname.startsWith(path)
        ) && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                Authentication
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      render={<Link href="/auth/login" target="_blank" />}
                      isActive={pathname === "/auth/login"}
                      tooltip="Login"
                    >
                      <LogIn className="size-5!" />
                      <span className="font-medium">Login</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      render={<Link href="/auth/register" target="_blank" />}
                      isActive={pathname === "/auth/register"}
                      tooltip="Login"
                    >
                      <UserRoundPen className="size-5!" />
                      <span className="font-medium">Register</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel className="p-2 text-xs font-medium tracking-normal text-sidebar-ring capitalize">
                Extra
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        render={
                          <SidebarMenuButton
                            tooltip="Menu levels"
                            className="rounded-lg p-2"
                          />
                        }
                      >
                        <SquareStack className="size-5!" />
                        <span>Menu levels</span>
                        <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Level 2.1</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <Collapsible className="group/collapsible">
                            <SidebarMenuSubItem>
                              <CollapsibleTrigger
                                nativeButton={false}
                                render={
                                  <SidebarMenuSubButton className="rounded-lg pr-4 pl-5" />
                                }
                              >
                                <span className="font-medium">Level 2.2</span>
                                <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>
                                      <span>Level 3.1</span>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                  <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>
                                      <span>Level 3.2</span>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                  <Collapsible className="group/collapsible">
                                    <SidebarMenuSubItem>
                                      <CollapsibleTrigger
                                        nativeButton={false}
                                        render={
                                          <SidebarMenuSubButton className="rounded-lg pr-4 pl-5" />
                                        }
                                      >
                                        <span className="font-medium">
                                          Level 3.3
                                        </span>
                                        <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub>
                                          <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                              <span>Level 4.1</span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                          <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                              <span>Level 4.2</span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                      </CollapsibleContent>
                                    </SidebarMenuSubItem>
                                  </Collapsible>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </SidebarMenuSubItem>
                          </Collapsible>
                          <Collapsible className="group/collapsible">
                            <SidebarMenuSubItem>
                              <CollapsibleTrigger
                                nativeButton={false}
                                render={
                                  <SidebarMenuSubButton className="rounded-lg pr-4 pl-5" />
                                }
                              >
                                <span className="font-medium">Level 2.3</span>
                                <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>
                                      <span>Level 3.1</span>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                  <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>
                                      <span>Level 3.2</span>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                  <Collapsible className="group/collapsible">
                                    <SidebarMenuSubItem>
                                      <CollapsibleTrigger
                                        nativeButton={false}
                                        render={
                                          <SidebarMenuSubButton className="rounded-lg pr-4 pl-5" />
                                        }
                                      >
                                        <span className="font-medium">
                                          Level 3.3
                                        </span>
                                        <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub>
                                          <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                              <span>Level 4.1</span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                          <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                              <span>Level 4.2</span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                      </CollapsibleContent>
                                    </SidebarMenuSubItem>
                                  </Collapsible>
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </SidebarMenuSubItem>
                          </Collapsible>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname === "/sample-page"}
                      render={<Link href="/sample-page" />}
                      tooltip="Default Dashboard"
                    >
                      <Rocket className="size-5!" />
                      <span>Sample Page</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <Card className="mx-4 my-3.75 shadow-none">
              <CardContent className="text-center">
                <img
                  src="https://cdn.uiable.com/application/img-coupon.png"
                  alt="Coupon"
                  className="mx-auto w-18 max-w-full"
                />
                <h5 className="mt-1 mb-0">Uiable</h5>
                <p className="mb-4">Checkout pro features</p>
                <Button className="gap-2 rounded-full border-0 border-b-2 border-b-rose-700 bg-rose-500 shadow-lg hover:bg-rose-600">
                  <Gem />
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

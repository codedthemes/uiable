"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// third-party
import {
  AddSquare,
  Box1,
  Crown,
  Setting2,
  ShieldTick,
  Speedometer,
  TaskSquare,
  UserSquare,
} from "iconsax-reactjs"

// project-imports
import Logo from "@/components/uiable/layout/shared/logo"

// assets
import { Bell, Search } from "lucide-react"

//  ------------------------------ | COMPONENT - SIDEBAR 5 (Pro) | ------------------------------  //

const mainNav = [
  { icon: Speedometer, label: "Dashboard", id: "dashboard", badge: null },
  { icon: TaskSquare, label: "Projects", id: "projects", badge: "12" },
  { icon: Box1, label: "Integrations", id: "integrations", badge: null },
]

const settingsNav = [
  { icon: UserSquare, label: "Profile", id: "profile" },
  { icon: ShieldTick, label: "Security", id: "security" },
  { icon: Setting2, label: "Preferences", id: "preferences" },
]

export default function Sidebar5() {
  const [activeItem, setActiveItem] = useState("dashboard")

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "18rem" } as React.CSSProperties}
      className="relative h-[600px] w-full overflow-hidden rounded-lg border bg-background shadow-sm"
    >
      <Sidebar className="absolute z-10 h-full border-r border-border bg-sidebar/50 backdrop-blur-md">
        <SidebarHeader className="border-b border-border/50 px-6 py-5">
          <div className="flex items-center justify-between">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Bell className="size-4" />
            </Button>
          </div>
          <div className="relative mt-4 w-full">
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="h-9 bg-background/50 pl-9 shadow-none hover:bg-background focus:bg-background"
            />
          </div>
        </SidebarHeader>

        <SidebarContent className="px-4 py-4">
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu className="gap-1.5">
                {mainNav.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeItem === item.id}
                      onClick={() => setActiveItem(item.id)}
                      className="group flex h-10 w-full items-center justify-between rounded-lg px-3 transition-all hover:bg-primary/5 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/90"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className="size-5 transition-transform group-hover:scale-110"
                          variant={activeItem === item.id ? "Bulk" : "Linear"}
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge className="ml-auto h-5 px-1.5 text-[10px]">
                          {item.badge}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="px-2 text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
              Settings
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu className="gap-1.5">
                {settingsNav.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeItem === item.id}
                      onClick={() => setActiveItem(item.id)}
                      className="group flex h-10 w-full items-center gap-3 rounded-lg px-3 transition-all hover:bg-primary/5 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/90"
                    >
                      <item.icon
                        className="size-5 transition-transform group-hover:scale-110"
                        variant={activeItem === item.id ? "Bulk" : "Linear"}
                      />
                      <span className="font-medium">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <div className="px-4">
          {/* Pro Upgrade Card */}
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-primary/10 p-4 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20">
            <div className="mb-2 flex items-center gap-2">
              <Crown className="size-5 text-primary" variant="Bulk" />
              <h5 className="text-sm font-semibold text-foreground">
                Pro Workspace
              </h5>
            </div>
            <p className="mb-4 text-xs text-muted-foreground">
              Unlock premium features and advanced analytics.
            </p>
            <Button variant="default" className="w-full gap-2">
              <AddSquare className="size-4" variant="Bold" />
              Upgrade Now
            </Button>
          </div>
        </div>

        <SidebarFooter className="mt-4 border-t border-border/50 p-4">
          <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50">
            <Avatar className="h-9 w-9 after:border-none">
              <AvatarImage
                src="https://cdn.uiable.com/user/avatar-2.jpg"
                alt="User"
              />
              <AvatarFallback className="bg-primary/10 font-bold text-primary">
                AD
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col overflow-hidden">
              <span className="truncate text-sm font-semibold">Alex Doe</span>
              <span className="truncate text-xs text-muted-foreground">
                alex@example.com
              </span>
            </div>
            <Setting2 className="size-4 text-muted-foreground" />
          </div>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 overflow-auto bg-muted/20">
        <header className="flex h-14 items-center border-b border-border/50 bg-background/50 px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1" />
        </header>
      </main>
    </SidebarProvider>
  )
}

"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// third-party
import {
  ArrowRight2,
  DocumentText,
  Level,
  Logout,
  NotificationStatus,
  PasswordCheck,
  Shield,
  Sort,
  StatusUp,
} from "iconsax-reactjs"

// project-imports
import branding from "@/branding.json"
import NotificationDropdown from "@/components/uiable/layout/notification-dropdown"
import SearchBar from "@/components/uiable/layout/search-bar"
import Logo from "@/components/uiable/layout/shared/logo"
import UserProfile from "@/components/uiable/layout/user-profile"

// assets
import { LockKeyhole, Power, Settings, User } from "lucide-react"

const imgCoupon = {
  src: "https://cdn.uiable.com/application/img-coupon.png",
}
const uImg1 = {
  src: "https://cdn.uiable.com/user/avatar-1.jpg",
}

//  ------------------------------ | BLOCK - DASHBOARD LAYOUT | ------------------------------  //

export default function Dashboard() {
  const [isUserOpen, setIsUserOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")

  return (
    <SidebarProvider className="relative h-[600px] min-h-0! w-full overflow-hidden bg-background has-[data-slot='sidebar-inset']:shadow-none">
      <Sidebar
        collapsible="offcanvas"
        variant="inset"
        className="absolute z-10 h-full border-r border-dashed"
      >
        <SidebarHeader className="px-4 pt-4 pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo link={false} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="gap-0 px-2 *:py-0">
          {/* User Profile Card */}
          <Card className="m-1.75 bg-muted shadow-none">
            <CardContent className="p-5!">
              <Collapsible
                open={isUserOpen}
                onOpenChange={setIsUserOpen}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-background">
                    <AvatarImage src={uImg1.src} alt="User" />
                    <AvatarFallback className="bg-primary/10 font-bold text-primary">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col">
                    <h6 className="mb-0">John Smith</h6>
                    <small className="text-muted-foreground">
                      Administrator
                    </small>
                  </div>
                  <CollapsibleTrigger
                    render={
                      <Button variant="ghost" size="icon">
                        <Sort className="size-5.5" />
                      </Button>
                    }
                  />
                </div>
                <CollapsibleContent>
                  <div className="pt-3 *:flex *:items-center *:gap-2.5 *:py-2 *:last:pb-0 *:hover:text-primary">
                    <a href="#!">
                      <User className="size-4" />
                      <span>My Account</span>
                    </a>
                    <a href="#!">
                      <Settings className="size-4" />
                      <span>Settings</span>
                    </a>
                    <a href="#!">
                      <LockKeyhole className="size-4" />
                      <span>Lock Screen</span>
                    </a>
                    <a href="#!">
                      <Power className="size-4" />
                      <span>Logout</span>
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Dashboard */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-5.5 pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
              Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "dashboard"}
                    onClick={() => setActiveItem("dashboard")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <StatusUp className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Default</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Authentication */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-5.5 pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
              Authentication
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "login"}
                    onClick={() => setActiveItem("login")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <Shield className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Login</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "register"}
                    onClick={() => setActiveItem("register")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <PasswordCheck className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Register</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Extra */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-5.5 pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
              Extra
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "docs"}
                    onClick={() => setActiveItem("docs")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <DocumentText className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Documentation</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenu>
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        render={
                          <SidebarMenuButton
                            tooltip="Menu levels"
                            className="rounded-lg px-5 py-3.5"
                          />
                        }
                      >
                        <Level className="size-5.5!" variant="Bulk" />
                        <span className="font-medium">Menu levels</span>
                        <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {/* Level 2.1 */}
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Level 2.1</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>

                          {/* Level 2.2 with 3.1, 3.2, 3.3 (with 4.1, 4.2) */}
                          <Collapsible className="group/collapsible-2">
                            <SidebarMenuSubItem>
                              <CollapsibleTrigger
                                nativeButton={false}
                                render={
                                  <SidebarMenuSubButton className="flex w-full justify-between" />
                                }
                              >
                                <span>Level 2.2</span>
                                <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible-2:rotate-90" />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="mt-1 ml-2 border-l border-border/50 pl-2">
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
                                  <Collapsible className="group/collapsible-3">
                                    <SidebarMenuSubItem>
                                      <CollapsibleTrigger
                                        nativeButton={false}
                                        render={
                                          <SidebarMenuSubButton className="flex w-full justify-between" />
                                        }
                                      >
                                        <span>Level 3.3</span>
                                        <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible-3:rotate-90" />
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub className="mt-1 ml-2 border-l border-border/50 pl-2">
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

                          {/* Level 2.3 with 3.1, 3.2, 3.3 (with 4.1, 4.2) */}
                          <Collapsible className="group/collapsible-4">
                            <SidebarMenuSubItem>
                              <CollapsibleTrigger
                                nativeButton={false}
                                render={
                                  <SidebarMenuSubButton className="flex w-full justify-between" />
                                }
                              >
                                <span>Level 2.3</span>
                                <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible-4:rotate-90" />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub className="mt-1 ml-2 border-l border-border/50 pl-2">
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
                                  <Collapsible className="group/collapsible-5">
                                    <SidebarMenuSubItem>
                                      <CollapsibleTrigger
                                        nativeButton={false}
                                        render={
                                          <SidebarMenuSubButton className="flex w-full justify-between" />
                                        }
                                      >
                                        <span>Level 3.3</span>
                                        <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible-5:rotate-90" />
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub className="mt-1 ml-2 border-l border-border/50 pl-2">
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
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "sample"}
                    onClick={() => setActiveItem("sample")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <NotificationStatus className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Sample Page</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Upgrade Card */}
          <Card className="mx-1.75 my-3.75 shadow-none">
            <CardContent className="text-center">
              <img
                src={imgCoupon.src}
                alt="Coupon"
                className="mx-auto w-2/4 max-w-full"
              />
              <h5 className="mt-1 mb-0">{branding.brandName}</h5>
              <p className="mb-4">Checkout pro features</p>
              <Button className="gap-2 bg-yellow-500 hover:bg-yellow-600">
                <Logout />
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

      {/* Main content area with navbar */}
      <SidebarInset className="flex flex-col overflow-hidden">
        <header className="flex h-16 w-full shrink-0 items-center gap-1 bg-background/80 px-4 backdrop-blur-md">
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

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
              <div className="aspect-video rounded-xl bg-card" />
            </div>
            <div className="min-h-64 rounded-xl bg-card" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

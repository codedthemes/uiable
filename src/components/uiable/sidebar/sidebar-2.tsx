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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

// project
import Logo from "@/components/uiable/layout/shared/logo"

// assets
import {
  ArrowRight2,
  Clipboard,
  Designtools,
  DocumentText,
  Level,
  Logout,
  NotificationStatus,
  PasswordCheck,
  Shield,
  Sort,
  StatusUp,
} from "iconsax-reactjs"
import { LockKeyhole, Power, Settings, User } from "lucide-react"

const imgCoupon = {
  src: "https://cdn.uiable.com/application/img-coupon.png",
}
const uImg1 = {
  src: "https://cdn.uiable.com/user/avatar-1.jpg",
}

// ── Dummy data ────────────────────────────────────────────────────────────── //

//  ------------------------------ | COMPONENT - SIDEBAR 2 | ------------------------------  //

export default function Sidebar2() {
  const [isUserOpen, setIsUserOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")

  return (
    <SidebarProvider className="relative h-[600px] w-full overflow-hidden rounded-lg border bg-background">
      <Sidebar
        collapsible="icon"
        variant="inset"
        className="absolute z-10 h-full border-r border-dashed border-border"
      >
        <SidebarHeader className="px-4 pt-4 pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="gap-0 px-2 *:py-0">
          {/* User Profile Card */}
          <Card className="m-1.75 bg-[#f3f5f7] shadow-none dark:bg-[#1b232d]">
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

          {/* Components */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-5.5 pt-6 pb-2 text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
              Components
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "components"}
                    onClick={() => setActiveItem("components")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <Clipboard className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Components</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={activeItem === "blocks"}
                    onClick={() => setActiveItem("blocks")}
                    className="rounded-lg px-5 py-3.5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <Designtools className="size-5.5!" variant="Bulk" />
                    <span className="font-medium">Blocks</span>
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
              </SidebarMenu>
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
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <span>Level 2.1</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
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
                                <Collapsible className="group/collapsible-3">
                                  <SidebarMenuSubItem>
                                    <CollapsibleTrigger
                                      nativeButton={false}
                                      render={
                                        <SidebarMenuSubButton className="flex w-full justify-between" />
                                      }
                                    >
                                      <span>Level 3.2</span>
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
                                        <SidebarMenuSubItem>
                                          <SidebarMenuSubButton>
                                            <span>Level 4.3</span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      </SidebarMenuSub>
                                    </CollapsibleContent>
                                  </SidebarMenuSubItem>
                                </Collapsible>
                                <Collapsible className="group/collapsible-4">
                                  <SidebarMenuSubItem>
                                    <CollapsibleTrigger
                                      nativeButton={false}
                                      render={
                                        <SidebarMenuSubButton className="flex w-full justify-between" />
                                      }
                                    >
                                      <span>Level 3.3</span>
                                      <ArrowRight2 className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible-4:rotate-90" />
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
                                        <SidebarMenuSubItem>
                                          <SidebarMenuSubButton>
                                            <span>Level 4.3</span>
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
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <span>Level 2.3</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
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
                alt="coupon"
                className="mx-auto w-2/4 max-w-full"
              />
              <h5 className="mt-1 mb-0">UIAble</h5>
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
    </SidebarProvider>
  )
}

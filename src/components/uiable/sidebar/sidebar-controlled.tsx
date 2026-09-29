"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar"

// assets
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: FrameIcon,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
  },
  {
    name: "Travel",
    url: "#",
    icon: MapIcon,
  },
  {
    name: "Support",
    url: "#",
    icon: LifeBuoyIcon,
  },
  {
    name: "Feedback",
    url: "#",
    icon: SendIcon,
  },
]

function CustomTrigger() {
  const { toggleSidebar, state, isMobile, openMobile } = useSidebar()
  const isOpen = isMobile ? openMobile : state === "expanded"

  return (
    <Button onClick={toggleSidebar} size="sm" variant="ghost" className="gap-2">
      {isOpen ? <PanelLeftCloseIcon /> : <PanelLeftOpenIcon />}
      <span>{isOpen ? "Close" : "Open"} Sidebar</span>
    </Button>
  )
}

//  ------------------------------ | SIDEBAR - CONTROLLED | ------------------------------  //

export default function AppSidebar() {
  const [open, setOpen] = useState(true)

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className="relative min-h-[450px]"
    >
      <Sidebar className="absolute h-[450px]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="py-3">Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton render={<a href={project.url} />}>
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <CustomTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}

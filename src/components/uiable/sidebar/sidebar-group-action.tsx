// shadcn

// assets
import { FrameIcon, MapIcon, PieChartIcon, PlusIcon } from "lucide-react"
// third party
import { toast, Toaster } from "sonner"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

//  ------------------------------ | SIDEBAR - GROUP ACTION | ------------------------------  //

export default function AppSidebar() {
  return (
    <SidebarProvider className="relative min-h-[450px]">
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: "ml-[160px]",
        }}
      />
      <Sidebar className="absolute h-[450px]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="py-3">Projects</SidebarGroupLabel>
            <SidebarGroupAction
              title="Add Project"
              onClick={() => toast("You clicked the group action!")}
            >
              <PlusIcon /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#" />}>
                    <FrameIcon />
                    <span>Design Engineering</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#" />}>
                    <PieChartIcon />
                    <span>Sales & Marketing</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#" />}>
                    <MapIcon />
                    <span>Travel</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

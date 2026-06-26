// shadcn

// assets
import { ChevronDownIcon, LifeBuoyIcon, SendIcon } from "lucide-react"

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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

//  ------------------------------ | SIDEBAR - GROUP COLLAPSIBLE | ------------------------------  //

export default function AppSidebar() {
  return (
    <SidebarProvider className="relative min-h-[450px]">
      <Sidebar className="absolute h-[450px]">
        <SidebarContent>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                render={<CollapsibleTrigger />}
                className="py-3 text-base hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                Help
                <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LifeBuoyIcon />
                        Support
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SendIcon />
                        Feedback
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

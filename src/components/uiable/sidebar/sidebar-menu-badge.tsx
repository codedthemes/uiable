// shadcn
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// assets
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: FrameIcon,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: MapIcon,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LifeBuoyIcon,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: SendIcon,
    badge: "8",
  },
]

//  ------------------------------ | SIDEBAR - MENU BADGE | ------------------------------  //

export default function AppSidebar() {
  return (
    <SidebarProvider className="relative min-h-[450px]">
      <Sidebar className="absolute h-[450px]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="py-3">Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      render={<a href={project.url} />}
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 overflow-auto bg-muted/20">
        <header className="flex h-14 items-center border-b border-border/50 bg-background/50 px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1" />
        </header>
      </main>
    </SidebarProvider>
  )
}

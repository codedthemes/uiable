import { Suspense } from "react"
// assets
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

// shadcn
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/components/ui/sidebar"

// constants
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

// Dummy fetch function.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return projects
}

//  ------------------------------ | SIDEBAR - RSC | ------------------------------  //

export default function AppSidebar() {
  return (
    <SidebarProvider className="relative min-h-[450px]">
      <Sidebar className="absolute h-[450px]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="my-3">Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

function NavProjects() {
  return (
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
  )
}

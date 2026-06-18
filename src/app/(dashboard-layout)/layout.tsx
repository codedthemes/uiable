import { ReactNode } from "react"

// shadcn
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// third party
import { Toaster } from "sonner"

// project
import { ThemeToggle } from "@/components/customizer"
import { AppSidebar } from "@/components/app-sidebar"

// import SearchBar from "@/components/uiable/layout/search-bar";

//  ------------------------------ | LAYOUT - DASHBOARD | ------------------------------  //

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" collapsible="offcanvas" />
      <SidebarInset>
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-1 bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <SidebarTrigger className="relative mx-1 -ml-1 flex h-11 w-11 items-center justify-center rounded-lg" />
          {/* <SearchBar /> */}
          <div className="flex-1" />
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            {/* <div className="h-4 w-px bg-border mx-1" /> */}
            {/* <NotificationDropdown /> */}
            {/* <div className="h-4 w-px bg-border mx-1" /> */}
            {/* <UserProfile /> */}
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">
          {children}
          <Toaster />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

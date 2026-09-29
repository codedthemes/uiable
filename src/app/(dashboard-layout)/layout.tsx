import { ReactNode } from "react"

// shadcn
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// project-imports
import { AppSidebar } from "@/components/app-sidebar"
import DashboardHeader from "@/components/dashboard-header"
import Footer from "@/components/uiable/blocks/landing/footer/footer"

//  ------------------------------ | LAYOUT - DASHBOARD | ------------------------------  //

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <SidebarProvider className="min-h-0 flex-1">
        <AppSidebar variant="sidebar" collapsible="offcanvas" />
        <SidebarInset
          id="main-scroll-area"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto"
        >
          <DashboardHeader />
          <main className="flex-1 p-4 sm:p-6">{children}</main>
          <Separator />
          <Footer showGradient={false} />
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

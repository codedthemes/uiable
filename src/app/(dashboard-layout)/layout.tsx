import { ReactNode } from "react"
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// third party
import { Toaster } from "sonner"

// project
import branding from "@/branding.json"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "@/components/customizer"
import Footer from "@/components/uiable/blocks/landing/footer/footer"

// assets
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react"

// import SearchBar from "@/components/uiable/layout/search-bar";

function Divider() {
  return <Separator orientation="vertical" className="my-1.5" />
}

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
          <div className="flex items-center gap-2.5">
            <Button
              variant="ghost"
              size="icon-lg"
              aria-label="Twitter"
              nativeButton={false}
              render={
                <Link
                  href={branding.company.socialLink.x}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
            >
              <IconBrandX className="size-4.5" />
            </Button>
            <Divider />

            <Button
              variant="ghost"
              size="icon-lg"
              aria-label="Discord"
              nativeButton={false}
              render={
                <Link
                  href={branding.company.socialLink.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
            >
              <IconBrandDiscord className="size-4.5" />
            </Button>
            <Divider />

            <Button
              nativeButton={false}
              variant="ghost"
              render={
                <Link
                  href={branding.company.socialLink.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
            >
              <IconBrandGithub className="size-4.5" />
            </Button>
            <Divider />
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
          <Footer />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

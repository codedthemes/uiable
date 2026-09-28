// shadcn
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// project-imports
import NotificationDropdown from "@/components/uiable/layout/notification-dropdown"
import SearchBar from "@/components/uiable/layout/search-bar"
import UserProfile from "@/components/uiable/layout/user-profile"

// assets
import { Settings } from "lucide-react"

//  ------------------------------ | LAYOUT - DASHBOARD | ------------------------------  //

export default function Navbar2() {
  return (
    <SidebarProvider className="min-h-fit w-full">
      <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center gap-1 bg-background/80 px-4 backdrop-blur-md sm:px-6">
        <SidebarTrigger className="relative mx-1 -ml-1 flex h-11 w-11 items-center justify-center rounded-lg" />
        <SearchBar />
        <div className="flex-1" />
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
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
    </SidebarProvider>
  )
}

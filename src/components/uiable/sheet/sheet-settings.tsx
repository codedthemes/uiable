// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

// assets
import { Settings } from "lucide-react"

//  ------------------------------ | SHEET - SETTINGS | ------------------------------  //

export default function SheetSettings() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" className="dark:border-border" />}
      >
        <Settings className="mr-2 h-4 w-4" />
        Open Settings
      </SheetTrigger>
      <SheetContent className="flex !w-full flex-col sm:!max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl">Settings</SheetTitle>
        </SheetHeader>

        <div className="no-scrollbar flex-1 space-y-8 overflow-y-auto px-4 py-6">
          <div>
            <h3 className="text-lg font-medium">Profile</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Update your profile details and public information.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium">Preferences</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Manage your application preferences and settings.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products, features, and more.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Security alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about your account security.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className="mt-auto pt-4">
          <SheetClose
            render={<Button variant="outline" className="dark:border-border" />}
          >
            Cancel
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

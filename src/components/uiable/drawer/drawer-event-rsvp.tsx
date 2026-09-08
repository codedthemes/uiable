// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// assets
import { Calendar, Clock, MapPin } from "lucide-react"

//  ------------------------------ | DRAWER - EVENT RSVP | ------------------------------  //

export function DrawerEventRsvp() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>View Event Details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Design System Workshop</DrawerTitle>
            <DrawerDescription>
              Learn how to build scalable design systems.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4">
            <div className="flex items-center gap-3 text-sm">
              <Avatar className="h-10 w-10 after:border-none">
                <AvatarFallback>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Saturday, October 25</p>
                <p className="text-muted-foreground">Add to Calendar</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Avatar className="h-10 w-10 after:border-none">
                <AvatarFallback>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">10:00 AM - 2:00 PM PST</p>
                <p className="text-muted-foreground">4 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Avatar className="h-10 w-10 after:border-none">
                <AvatarFallback>
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Tech Hub SF</p>
                <p className="text-muted-foreground">
                  123 Innovation Dr, San Francisco
                </p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Confirm RSVP</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="dark:border-border">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// shadcn
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

// assets
import {
  Document,
  Layer,
  Notification,
  SecuritySafe,
  Sms,
  User
} from "iconsax-reactjs";

//  ------------------------------ | LAYOUT - NOTIFICATION DROPDOWN | ------------------------------  //

export default function NotificationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative h-11 w-11 rounded-lg hover:bg-muted/50 transition-colors inline-flex items-center justify-center">
        <Notification variant="Bulk" className="size-6 text-muted-foreground" />
        <Badge className="absolute right-0 top-0 h-5 w-5 justify-center p-0 text-[9px] bg-green-500 hover:bg-green-500 border-2 border-background font-bold">
          3
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[calc(100vw-8px)] sm:min-w-[450px] p-2 shadow-xl border-border/40 overflow-hidden rounded-xl"
      >
        <DropdownMenuGroup className="p-5 flex items-center justify-between">
          <DropdownMenuLabel className="p-0">
            <h5>Notifications</h5>
          </DropdownMenuLabel>
          <Button
            variant="link"
            size="sm"
            className="h-auto p-0 text-primary hover:no-underline"
          >
            Mark all read
          </Button>
        </DropdownMenuGroup>
        <ScrollArea className="h-[calc(100vh-220px)] max-h-[calc(100vh-220px)] p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="mb-2">Today</span>
            <Card className="hover:bg-background mb-0">
              <CardContent>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Layer
                      variant="Bold"
                      className="h-5.5 w-5.5 text-primary"
                    />
                  </div>
                  <div className="grow">
                    <span className="float-end text-sm text-muted-foreground">
                      2 min ago
                    </span>
                    <h5 className="text-body mb-2">UI/UX Design</h5>
                    <p className="mb-0">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:bg-background mb-0">
              <CardContent>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Sms variant="Bold" className="h-5.5 w-5.5 text-primary" />
                  </div>
                  <div className="grow">
                    <span className="float-end text-sm text-muted-foreground">
                      1 hour ago
                    </span>
                    <h5 className="text-body mb-2">Message</h5>
                    <p className="mb-0">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-2 mt-4">Yesterday</span>
            <Card className="hover:bg-background mb-0">
              <CardContent>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Document
                      variant="Bold"
                      className="h-5.5 w-5.5 text-primary"
                    />
                  </div>
                  <div className="grow">
                    <span className="float-end text-sm text-muted-foreground">
                      2 hour ago
                    </span>
                    <h5 className="text-body mb-2">Forms</h5>
                    <p className="mb-0">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:bg-background mb-0">
              <CardContent>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <User variant="Bold" className="h-5.5 w-5.5 text-primary" />
                  </div>
                  <div className="grow">
                    <span className="float-end text-sm text-muted-foreground">
                      12 hour ago
                    </span>
                    <h5 className="text-body mb-2">Challenge invitation</h5>
                    <p className="mb-2">
                      Jonny aber invites to join the challenge
                    </p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Decline
                      </Button>
                      <Button variant="default" size="sm">
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:bg-background mb-0">
              <CardContent>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <SecuritySafe
                      variant="Bold"
                      className="h-5.5 w-5.5 text-primary"
                    />
                  </div>
                  <div className="grow">
                    <span className="float-end text-sm text-muted-foreground">
                      5 hour ago
                    </span>
                    <h5 className="text-body mb-2">Security</h5>
                    <p className="mb-0">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <DropdownMenuSeparator className="m-0 bg-border/40" />
        <div className="p-4 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-destructive hover:text-destructive hover:bg-destructive/5 font-semibold text-[14px]"
          >
            Clear all Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

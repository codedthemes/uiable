// shadcn
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// assets
import {
  BellIcon,
  HeartIcon,
  MessageCircleIcon,
  UserPlusIcon,
} from "lucide-react"

const notifications = [
  {
    id: 1,
    icon: <HeartIcon className="text-rose-500" />,
    title: "Jane liked your post",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    icon: <MessageCircleIcon className="text-blue-500" />,
    title: "Alex commented on your photo",
    time: "4 hours ago",
    unread: true,
  },
  {
    id: 3,
    icon: <UserPlusIcon className="text-green-500" />,
    title: "Mike started following you",
    time: "Yesterday",
    unread: false,
  },
]

//  ------------------------------ | DROPDOWN MENU - NOTIFICATIONS | ------------------------------  //

export function DropdownMenuNotifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="relative dark:border-border"
          />
        }
      >
        <BellIcon />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[320px]">
        <div className="flex items-center justify-between px-2 py-2">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-md p-0">
              Notifications
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto px-2 py-1 text-xs"
          >
            Mark all read
          </Button>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="items-start gap-4 p-3"
            >
              <div className="mt-0.5 shrink-0 [&_svg]:size-4">
                {notification.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm leading-none font-medium">
                  {notification.title}
                </h6>
                <p className="text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
              {notification.unread && (
                <span className="mt-1 ml-auto flex h-2 w-2 rounded-full bg-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center text-sm font-medium text-muted-foreground">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

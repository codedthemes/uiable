// assets
import { Activity, CreditCard, Mail, Users } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

//  ------------------------------ | ITEM - SEPARATOR | ------------------------------  //

const notifications = [
  {
    id: "mail",
    icon: Mail,
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-950",
    title: "New Message",
    description: "Sarah left a comment on your latest post.",
    badge: "2m ago",
    badgeVariant: "secondary" as const,
  },
  {
    id: "users",
    icon: Users,
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950",
    title: "Team Invite",
    description: "You've been added to the Design Systems team.",
    badge: "1h ago",
    badgeVariant: "secondary" as const,
  },
  {
    id: "activity",
    icon: Activity,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    title: "Usage Alert",
    description: "API usage reached 90% of the monthly quota.",
    badge: "Critical",
    badgeVariant: "destructive" as const,
  },
  {
    id: "billing",
    icon: CreditCard,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    title: "Payment Received",
    description: "Invoice #1042 has been paid successfully.",
    badge: "Paid",
    badgeVariant: "outline" as const,
  },
]

//  ------------------------------ | ITEM - SEPARATOR | ------------------------------  //

export function ItemSeparatorDemo() {
  return (
    <div className="w-full max-w-md">
      <ItemGroup className="gap-0 p-2">
        {notifications.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={item.id}>
              <Item className="cursor-pointer border-0 px-2 transition-colors hover:bg-muted/30">
                <ItemMedia>
                  <Avatar
                    className={`size-9 rounded-lg after:border-none ${item.bgColor}`}
                  >
                    <AvatarFallback
                      className={`rounded-lg bg-transparent ${item.iconColor}`}
                    >
                      <Icon className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-sm">{item.title}</ItemTitle>
                  <ItemDescription className="text-xs">
                    {item.description}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant={item.badgeVariant} className="text-xs">
                    {item.badge}
                  </Badge>
                </ItemActions>
              </Item>
              {index < notifications.length - 1 && (
                <ItemSeparator className="my-1" />
              )}
            </div>
          )
        })}
      </ItemGroup>
    </div>
  )
}

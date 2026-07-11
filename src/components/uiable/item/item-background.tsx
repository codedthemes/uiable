// assets
import { ArrowRight, Cpu, Database, Layers, Zap } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const plans = [
  {
    id: "starter",
    icon: Zap,
    title: "Starter",
    description: "Perfect for side projects and small teams.",
    gradient:
      "from-sky-500/10 to-blue-500/10 dark:from-sky-900/40 dark:to-blue-900/40",
    border: "border-sky-200 dark:border-sky-800",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-600 dark:text-sky-400",
    badge: "Free",
    badgeClass: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
  },
  {
    id: "pro",
    icon: Layers,
    title: "Pro",
    description: "Scaled resources for growing products.",
    gradient:
      "from-violet-500/10 to-purple-500/10 dark:from-violet-900/40 dark:to-purple-900/40",
    border: "border-violet-200 dark:border-violet-800",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
    badge: "$29/mo",
    badgeClass:
      "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
  },
  {
    id: "team",
    icon: Database,
    title: "Team",
    description: "Collaboration tools for engineering squads.",
    gradient:
      "from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/40 dark:to-teal-900/40",
    border: "border-emerald-200 dark:border-emerald-800",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badge: "$79/mo",
    badgeClass:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  },
  {
    id: "enterprise",
    icon: Cpu,
    title: "Enterprise",
    description: "Dedicated infra, SLA, and priority support.",
    gradient:
      "from-orange-500/10 to-rose-500/10 dark:from-orange-900/40 dark:to-rose-900/40",
    border: "border-orange-200 dark:border-orange-800",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-600 dark:text-orange-400",
    badge: "Custom",
    badgeClass:
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  },
]

//  ------------------------------ | ITEM - BACKGROUND | ------------------------------  //

export function ItemBackground() {
  return (
    <ItemGroup className="w-full max-w-md">
      {plans.map((plan) => {
        const Icon = plan.icon
        return (
          <Item
            key={plan.id}
            className={`bg-gradient-to-r ${plan.gradient} border ${plan.border} transition-all duration-200 hover:shadow-sm`}
          >
            <ItemMedia>
              <Avatar
                className={`size-10 rounded-lg after:border-none ${plan.iconBg}`}
              >
                <AvatarFallback
                  className={`rounded-lg bg-transparent ${plan.iconColor}`}
                >
                  <Icon className="size-5" />
                </AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="flex items-center gap-2">
                {plan.title}
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${plan.badgeClass}`}
                >
                  {plan.badge}
                </span>
              </ItemTitle>
              <ItemDescription>{plan.description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-full opacity-60 hover:opacity-100"
                aria-label={`Select ${plan.title}`}
              >
                <ArrowRight className="size-4" />
              </Button>
            </ItemActions>
          </Item>
        )
      })}
    </ItemGroup>
  )
}

"use client"

import { useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// assets
import {
  Bell,
  ChevronDown,
  Lock,
  Mail,
  Shield,
  Smartphone,
  User,
} from "lucide-react"

const SETTINGS_DATA = [
  {
    id: "account",
    icon: User,
    title: "Account Details",
    description: "Update your personal information and profile picture.",
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Notifications",
    description: "Choose what updates you want to receive.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Privacy",
    description: "Manage passwords, 2FA, and connected devices.",
  },
]

// Create a child component for each setting item to manage its own open state
interface SettingItemProps {
  data: (typeof SETTINGS_DATA)[0]
  isLast: boolean
}

function SettingItem({ data, isLast }: SettingItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`group px-4 py-4 transition-colors hover:bg-muted/30 md:px-6 ${!isLast ? "border-b border-border/50" : ""}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3 md:gap-4">
          <Avatar className="mt-0.5 h-9 w-9 shrink-0 bg-primary/10 after:border-none">
            <AvatarFallback className="bg-transparent text-primary">
              <data.icon className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col gap-0.5">
            <h4 className="truncate text-sm font-semibold">{data.title}</h4>
            <p className="text-xs leading-relaxed text-muted-foreground md:leading-normal">
              {data.description}
            </p>
          </div>
        </div>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full transition-transform duration-200"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          }
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Toggle {data.title}</span>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="mt-4 ml-0 flex flex-col gap-4 pb-2 md:ml-[3.25rem]">
          {/* Custom Content Based on ID */}
          {data.id === "account" && (
            <>
              <div className="grid w-full gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="alex@example.com"
                  className="h-8 text-sm"
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  defaultValue="@alexc"
                  className="h-8 text-sm"
                />
              </div>
            </>
          )}

          {data.id === "notifications" && (
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 space-y-0.5">
                    <Label className="block truncate text-sm font-medium">
                      Email Alerts
                    </Label>
                    <p className="truncate text-[11px] text-muted-foreground">
                      Weekly activity reports
                    </p>
                  </div>
                </div>
                <Switch defaultChecked className="ml-2 shrink-0" />
              </div>
              <div className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Smartphone className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 space-y-0.5">
                    <Label className="block truncate text-sm font-medium">
                      Push Notifications
                    </Label>
                    <p className="truncate text-[11px] text-muted-foreground">
                      Instant mentions & replies
                    </p>
                  </div>
                </div>
                <Switch defaultChecked={false} className="ml-2 shrink-0" />
              </div>
            </div>
          )}

          {data.id === "security" && (
            <div className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3">
              <div className="flex min-w-0 items-center gap-3">
                <Lock className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0 space-y-0.5">
                  <Label className="block truncate text-sm font-medium">
                    Two-Factor Auth
                  </Label>
                  <p className="truncate text-[11px] text-muted-foreground">
                    Secure your account
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 h-7 shrink-0 text-xs dark:border-border"
              >
                Enable
              </Button>
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

//  ------------------------------ | COLLAPSIBLE - SETTING MENU LIST | ------------------------------  //

export function CollapsibleSettingMenuList() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border/60 bg-card">
      <div className="border-b border-border/60 bg-muted/20 px-6 py-4">
        <h3 className="font-semibold tracking-tight text-foreground">
          Preferences
        </h3>
        <p className="text-sm text-muted-foreground">
          Manage your application settings and options.
        </p>
      </div>
      <div className="flex flex-col">
        {SETTINGS_DATA.map((setting, index) => (
          <SettingItem
            key={setting.id}
            data={setting}
            isLast={index === SETTINGS_DATA.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
// assets
import {
  Activity,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//  ------------------------------ | CARD - TABS | ------------------------------  //

export default function CardTabs() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-xl overflow-hidden border bg-card">
      <Tabs defaultValue="overview" className="w-full">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 pb-4">
          <div>
            <CardTitle className="text-lg font-bold">
              Project Dashboard
            </CardTitle>
          </div>

          <TabsList className="grid h-9 w-full grid-cols-3 rounded-lg sm:w-64">
            <TabsTrigger
              value="overview"
              className="truncate rounded-lg px-1 text-[11px] font-medium sm:text-xs"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="truncate rounded-lg px-1 text-[11px] font-medium sm:text-xs"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="truncate rounded-lg px-1 text-[11px] font-medium sm:text-xs"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </CardHeader>

        <CardContent>
          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="mt-0 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-muted/40 p-3.5">
              <div className="flex flex-1 items-center gap-3">
                <Avatar className="size-9 shrink-0 rounded-lg after:rounded-lg after:border-none">
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                    <Activity className="size-4.5" />
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">System Status</p>
                  <p className="text-xs text-muted-foreground">
                    All services operational
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 border-green-500 bg-green-500/10 text-green-500"
              >
                99.9% Uptime
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Sprint Completion</span>
                <span className="text-foreground">78%</span>
              </div>
              <Progress
                value={78}
                className="w-full *:data-[slot=progress-track]:h-1.5"
              />
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 sm:gap-3">
              <Card className="mb-0 overflow-hidden shadow-none">
                <CardContent className="p-3">
                  <p className="text-xs text-muted-foreground">
                    Active Members
                  </p>
                  <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xl font-bold">1,248</span>
                    <span className="flex shrink-0 items-center text-[11px] font-medium text-emerald-500">
                      +12% <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-0 overflow-hidden shadow-none">
                <CardContent className="p-3">
                  <p className="text-xs text-muted-foreground">Pending Tasks</p>
                  <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xl font-bold">34</span>
                    <span className="shrink-0 text-[11px] font-medium text-muted-foreground">
                      On track
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ANALYTICS TAB */}
          <TabsContent value="analytics" className="mt-0 space-y-4">
            <Card className="overflow-hidden rounded-lg border-primary/10 bg-primary/5 shadow-none">
              <CardContent className="flex flex-wrap items-center justify-between gap-2 p-4">
                <div className="flex flex-1 items-center gap-3">
                  <Avatar className="size-10 shrink-0 rounded-lg after:rounded-lg">
                    <AvatarFallback className="rounded-lg bg-primary text-white shadow-sm">
                      <TrendingUp className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Total Revenue
                    </p>
                    <h3 className="text-xl font-black text-foreground sm:text-2xl">
                      $48,290.00
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 sm:text-right">
                  <Badge className="shrink-0 bg-green-500/10 text-green-500">
                    +18.4%
                  </Badge>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    vs last month
                  </p>
                </div>
              </CardContent>
            </Card>

            <ul className="divide-y divide-border">
              <li className="flex items-center justify-between py-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="size-4" />
                  <span>Unique Visitors</span>
                </div>
                <span className="font-semibold text-foreground">24,512</span>
              </li>
              <li className="flex items-center justify-between py-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-4" />
                  <span>Conversion Rate</span>
                </div>
                <span className="font-semibold text-foreground">3.85%</span>
              </li>
            </ul>
          </TabsContent>

          {/* SETTINGS TAB */}
          <TabsContent value="settings" className="mt-0 space-y-4">
            <Item variant="outline" className="rounded-lg p-3.5">
              <ItemMedia variant="icon">
                <Bell className="size-4 text-muted-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-sm font-medium">
                  Email Notifications
                </ItemTitle>
                <ItemDescription className="text-xs text-muted-foreground">
                  Receive daily performance summary
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Switch
                  checked={emailAlerts}
                  onCheckedChange={setEmailAlerts}
                />
              </ItemActions>
            </Item>

            <Item variant="outline" className="rounded-lg p-3.5">
              <ItemMedia variant="icon">
                <Lock className="size-4 text-muted-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-sm font-medium">
                  Two-Factor Authentication
                </ItemTitle>
                <ItemDescription className="text-xs text-muted-foreground">
                  Require security code on login
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
              </ItemActions>
            </Item>
          </TabsContent>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <Button variant="ghost" className="text-xs sm:text-sm">
            Cancel
          </Button>
          <Button className="text-xs sm:text-sm">Save Preferences</Button>
        </CardFooter>
      </Tabs>
    </Card>
  )
}

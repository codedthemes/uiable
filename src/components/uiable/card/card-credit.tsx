"use client"

import { useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// assets
import {
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  MoreVertical,
  ShieldCheck,
  Unlock,
  Wifi,
} from "lucide-react"

//  ------------------------------ | CARD - CREDIT | ------------------------------  //

export default function CardCredit() {
  const [isFrozen, setIsFrozen] = useState(false)
  const [showNumber, setShowNumber] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-[16px] pb-0 sm:p-[25px]">
        <div
          className={`relative overflow-hidden rounded-lg p-5 text-white shadow-xl transition-all duration-500 ${
            isFrozen
              ? "bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 opacity-80 ring-2 ring-blue-400/50"
              : "bg-gradient-to-br from-slate-900 via-indigo-950 to-zinc-900 ring-1 ring-white/10"
          }`}
        >
          {/* Background decorative glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-indigo-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 size-36 rounded-full bg-blue-500/20 blur-2xl" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md">
                <CreditCard className="size-4 text-white" />
              </div>
              <h6 className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                UIable Platinum
              </h6>
            </div>
            <Wifi className="size-5 rotate-90 text-white/70" />
          </div>

          <div className="relative z-10 mt-6 flex items-center gap-3">
            <div className="h-7 w-9 rounded bg-gradient-to-br from-amber-200 to-amber-500 p-0.5 shadow-inner">
              <div className="grid h-full w-full grid-cols-3 grid-rows-2 rounded-[3px] border border-amber-800/40 opacity-80" />
            </div>
            {isFrozen && (
              <Badge className="border border-green-500 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-500">
                FROZEN
              </Badge>
            )}
          </div>

          <p className="relative z-10 mt-5 truncate font-mono text-base tracking-[0.14em] text-white sm:tracking-[0.22em]">
            {showNumber ? "4829 5102 9384 4829" : "•••• •••• •••• 4829"}
          </p>

          <div className="relative z-10 mt-5 flex items-end justify-between text-xs text-white/80">
            <div className="min-w-0 pr-2">
              <p className="text-[10px] text-white/50 uppercase">Card Holder</p>
              <p className="truncate font-medium tracking-wide text-white">
                ALEXANDER WRIGHT
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] text-white/50 uppercase">Expires</p>
              <p className="font-mono font-medium text-white">08/28</p>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-3.5 sm:p-4">
        <Card className="rounded-lg bg-muted/40 shadow-none">
          <CardContent className="flex flex-wrap items-center justify-between gap-2 p-3.5">
            <div>
              <p className="text-xs text-muted-foreground">Available Credit</p>
              <h4 className="text-xl font-bold text-foreground">$14,250.00</h4>
            </div>
            <div className="shrink-0 text-right">
              <Badge
                variant="outline"
                className="shrink-0 border-green-500 bg-green-500/10 text-green-500"
              >
                <ShieldCheck className="mr-1 size-3 shrink-0" />
                Active
              </Badge>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Limit: $20,000
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
          <Button
            variant={isFrozen ? "default" : "outline"}
            onClick={() => setIsFrozen(!isFrozen)}
            className="w-full gap-1.5 px-2 text-[11px] font-medium sm:text-xs dark:border-border"
          >
            {isFrozen ? (
              <>
                <Unlock className="size-3.5 shrink-0" />
                <span className="truncate">Unfreeze Card</span>
              </>
            ) : (
              <>
                <Lock className="size-3.5 shrink-0" />
                <span className="truncate">Freeze Card</span>
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={() => setShowNumber(!showNumber)}
            className="w-full gap-1.5 px-2 text-[11px] font-medium sm:text-xs dark:border-border"
          >
            {showNumber ? (
              <>
                <EyeOff className="size-3.5 shrink-0" />
                <span className="truncate">Hide Details</span>
              </>
            ) : (
              <>
                <Eye className="size-3.5 shrink-0" />
                <span className="truncate">Show Details</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Billing cycle ends in 14 days
        </span>
        <Button variant="ghost" size="icon" className="size-8">
          <MoreVertical className="size-4 text-muted-foreground" />
          <span className="sr-only">More options</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

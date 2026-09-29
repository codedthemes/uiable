"use client"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// third-party
import { motion } from "framer-motion"

// assets
import { Activity, Radio, Terminal, Zap } from "lucide-react"

//  ------------------------------ | CARD - ANIMATED BORDER | ------------------------------  //

export default function CardAnimatedBorder() {
  const bars = [35, 60, 45, 80, 50, 95, 40, 70, 85, 45, 65, 90, 55, 75, 40, 60]

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg p-[2px]"
    >
      {/* Animated Rotating Gradient Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1 z-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40 opacity-80 blur-xs"
      />

      {/* Card Content Surface */}
      <Card className="relative z-10 mb-0 flex flex-col justify-between overflow-hidden rounded-lg border-none bg-zinc-950 p-1 text-white shadow-xl dark:bg-zinc-950">
        <CardHeader className="border-b-0 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold text-primary">
                LIVE WEBHOOKS
              </span>
            </div>
            <Badge className="shrink-0 bg-white/10 text-[10px] text-zinc-300">
              <Zap className="mr-1 size-3 text-amber-400" />
              &lt; 12ms Latency
            </Badge>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <Avatar className="size-9 shrink-0 rounded-lg after:rounded-lg after:border-none">
              <AvatarFallback className="rounded-lg bg-gradient-to-br from-primary to-primary/70 text-white shadow-md shadow-primary/20">
                <Terminal className="size-4.5" />
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate text-lg font-bold text-white">
                Realtime Event Stream
              </CardTitle>
              <CardDescription className="truncate text-xs text-zinc-400">
                Encrypted production gateway endpoint
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-2 pb-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <span className="flex min-w-0 items-center gap-1.5 truncate font-medium text-zinc-300">
                <Activity className="size-3.5 shrink-0 text-primary" />
                <span className="truncate">Live Throughput Velocity</span>
              </span>
              <span className="shrink-0 font-mono text-[11px] font-bold text-green-500">
                99.98% UPTIME
              </span>
            </div>

            {/* Animated Waveform Visualizer */}
            <div className="flex h-20 items-end justify-between gap-1 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              {bars.map((height, idx) => (
                <div
                  key={idx}
                  className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-lg bg-white/5"
                >
                  <motion.div
                    initial={{ height: `${height}%` }}
                    animate={{
                      height: [
                        `${height}%`,
                        `${Math.max(20, (height + 35) % 100)}%`,
                        `${Math.max(30, (height * 1.4) % 100)}%`,
                        `${height}%`,
                      ],
                    }}
                    transition={{
                      duration: 1.8 + (idx % 3) * 0.4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: idx * 0.08,
                    }}
                    className="w-full rounded-lg bg-gradient-to-t from-primary via-primary/80 to-primary/40"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-white/[0.02] pt-3 pb-3 text-xs text-zinc-400">
          <span className="flex min-w-0 items-center gap-1.5 truncate font-medium">
            <Radio className="size-3.5 shrink-0 animate-pulse text-primary" />
            <span className="truncate">Streaming Active (10k req/m)</span>
          </span>
          <Button
            variant="link"
            className="h-auto shrink-0 p-0 text-xs font-semibold text-primary hover:text-primary/80"
          >
            View Live Logs &rarr;
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

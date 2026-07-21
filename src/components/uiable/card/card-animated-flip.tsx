"use client"

import { useState } from "react"
// third party
import { motion } from "framer-motion"
// assets
import {
  ArrowLeft,
  BarChart3,
  CheckCircle,
  RotateCw,
  Sparkles,
  Users,
} from "lucide-react"

// shadcn
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
import { Progress } from "@/components/ui/progress"

const pods = [
  {
    label: "Core Infrastructure Pod",
    score: 98,
    color: "bg-green-500",
    progressClass: "[&_[data-slot=progress-indicator]]:bg-green-500",
  },
  {
    label: "AI & Data Pipeline Squad",
    score: 94,
    color: "bg-cyan-500",
    progressClass: "[&_[data-slot=progress-indicator]]:bg-cyan-500",
  },
  {
    label: "Frontend & Design Pod",
    score: 91,
    color: "bg-yellow-500",
    progressClass: "[&_[data-slot=progress-indicator]]:bg-yellow-500",
  },
]

//  ------------------------------ | CARD - ANIMATED FLIP | ------------------------------  //

export default function CardAnimatedFlip() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="perspective-1000 mx-auto w-full max-w-sm py-4">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 80,
          damping: 14,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative min-h-[420px] w-full"
      >
        {/* ================= FRONT SIDE ================= */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full"
        >
          <Card className="flex h-full flex-col justify-between overflow-hidden border bg-card shadow-md">
            <CardHeader className="border-b-0 pb-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  <Sparkles className="mr-1 size-3" />
                  Overview
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFlipped(true)}
                  className="size-8 rounded-full hover:bg-muted"
                  title="Flip card"
                >
                  <RotateCw className="size-4 text-muted-foreground transition-transform hover:rotate-90" />
                </Button>
              </div>

              <CardTitle className="mt-4 text-xl font-bold">
                Team Performance Index
              </CardTitle>
              <CardDescription className="text-sm">
                Q3 quarterly velocity & KPI summary report across core
                engineering pods.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-2 pb-6">
              <Card className="rounded-lg bg-muted/40 p-4 text-center">
                <CardContent className="p-0">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Overall Efficiency Score
                  </span>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <h2 className="text-4xl font-black text-primary">94.2</h2>
                    <span className="text-sm font-bold text-muted-foreground">
                      /100
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-green-500">
                    +6.4% higher than target benchmark
                  </p>
                </CardContent>
              </Card>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="flex min-w-0 items-center gap-1.5 truncate">
                  <Users className="size-3.5 shrink-0" />{" "}
                  <span className="truncate">24 Engineers</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <CheckCircle className="size-3.5 shrink-0 text-green-500" />{" "}
                  142 Sprints
                </span>
              </div>
            </CardContent>

            <CardFooter className="border-t-0 pt-0">
              <Button
                onClick={() => setIsFlipped(true)}
                className="w-full justify-between gap-2 font-medium"
              >
                <span className="truncate">View Breakdown Metrics</span>
                <RotateCw className="size-4 shrink-0" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full"
        >
          <Card className="flex h-full flex-col justify-between overflow-hidden border border-primary/20 bg-card shadow-md">
            <CardHeader className="border-b-0 pb-2">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="shrink-0 border-primary/30 text-primary"
                >
                  <BarChart3 className="mr-1 size-3" />
                  Deep Dive
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFlipped(false)}
                  className="size-8 shrink-0 rounded-full hover:bg-muted"
                >
                  <ArrowLeft className="size-4 text-muted-foreground" />
                </Button>
              </div>

              <CardTitle className="mt-4 text-lg font-bold">
                Pod Breakdown
              </CardTitle>
              <CardDescription className="text-xs">
                Detailed metric distribution per engineering squad.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3.5 pt-2 pb-6 text-xs">
              {pods.map((pod, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 font-medium">
                    <span className="min-w-0 truncate text-foreground">
                      {pod.label}
                    </span>
                    <span className="shrink-0 font-bold text-foreground">
                      {pod.score}%
                    </span>
                  </div>
                  <Progress
                    value={pod.score}
                    className={`w-full *:data-[slot=progress-track]:h-2 *:data-[slot=progress-track]:rounded-full [&_[data-slot=progress-indicator]]:rounded-full ${pod.progressClass}`}
                  />
                </div>
              ))}
            </CardContent>

            <CardFooter className="border-t-0 pt-0">
              <Button
                variant="outline"
                onClick={() => setIsFlipped(false)}
                className="w-full gap-2 font-medium"
              >
                <ArrowLeft className="size-4" />
                Back to Summary
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

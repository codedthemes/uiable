"use client"

import { type MouseEvent } from "react"
// third party
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
// assets
import { Crown, Shield, Sparkles, Star } from "lucide-react"

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
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const benefits = [
  {
    icon: Shield,
    text: "Unlimited API usage & dedicated nodes",
  },
  {
    icon: Star,
    text: "Direct 1-on-1 engineering advisory channel",
  },
]

//  ------------------------------ | CARD - ANIMATED TILT | ------------------------------  //

export default function CardAnimatedTilt() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics for fluid 3D tilting
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const sheenOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0.1, 0.4])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="perspective-1000 flex w-full items-center justify-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto w-full max-w-sm cursor-pointer rounded-lg"
      >
        <Card className="relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-white shadow-2xl ring-1 ring-white/10 dark:from-zinc-900 dark:to-black">
          <motion.div
            style={{
              opacity: sheenOpacity,
              background: useMotionTemplate`linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)`,
            }}
            className="pointer-events-none absolute inset-0 z-20"
          />

          <div className="absolute -top-24 -right-24 size-48 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-purple-500/20 blur-3xl" />

          <CardHeader className="relative z-10 border-b-0 pb-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex shrink-0 items-center gap-2">
                <Avatar className="size-9 shrink-0 rounded-lg after:rounded-lg after:border-none">
                  <AvatarFallback className="rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 text-black shadow-md shadow-amber-500/20">
                    <Crown className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-bold tracking-wider text-yellow-500 uppercase">
                  VIP PASS
                </span>
              </div>
              <Badge className="shrink-0 border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
                <Sparkles className="mr-1 size-3" />
                TIER 1
              </Badge>
            </div>

            <CardTitle className="mt-6 text-2xl font-black tracking-tight text-white">
              Founding Pro Member
            </CardTitle>
            <p className="mt-1 text-xs text-zinc-400">
              Exclusive lifetime access to premium tools, priority support, and
              private insider betas.
            </p>
          </CardHeader>

          <CardContent className="relative z-10 pt-6 pb-4">
            <ItemGroup className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <Item
                    key={idx}
                    size="sm"
                    className="border-none bg-transparent p-0"
                  >
                    <ItemMedia variant="icon">
                      <Icon className="size-4 text-amber-400" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="text-xs font-normal text-zinc-200">
                        {benefit.text}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                )
              })}
            </ItemGroup>
          </CardContent>

          <CardFooter className="relative z-10 border-t-0 pt-0">
            <Button
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-300 hover:to-amber-400"
              size="lg"
            >
              Claim VIP Access
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

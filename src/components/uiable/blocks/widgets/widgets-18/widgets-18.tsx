// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// assets
import { Crown, Check } from "lucide-react"

const planFeatures = [
  "Access to all AI models",
  "Higher usage limits",
  "Priority support",
  "Advanced integrations",
]

//  ------------------------------ | WIDGETS 18 | ------------------------------  //

export default function Widgets18() {
  return (
    <section className="flex h-full w-full items-stretch justify-center">
      <Card className="mb-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border-blue-900/30 bg-slate-950 p-6 text-white shadow-2xl">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[90px]" />
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[80px]" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between gap-4">
          <CardHeader className="space-y-3.5 border-none p-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-purple-500/30 text-purple-400 shadow-md shadow-purple-500/20">
                  <Crown className="size-4.5" />
                </div>
                <CardTitle className="text-lg font-bold tracking-tight text-white sm:text-xl">
                  Your Plan
                </CardTitle>
              </div>

              <Badge
                variant="outline"
                className="rounded-full border-purple-500 bg-purple-600/25 font-semibold text-purple-300 backdrop-blur-sm"
              >
                <Crown className="size-3 fill-purple-400 text-purple-400" />
                Pro Plan
              </Badge>
            </div>

            <CardDescription className="text-xs leading-relaxed font-normal text-slate-300/80 sm:text-sm">
              You&apos;re on the Pro plan with full access to all features.
            </CardDescription>

            <Button className="h-10 w-full bg-linear-to-r from-purple-500 via-indigo-500 to-purple-600 text-xs font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-600 hover:to-indigo-600 hover:shadow-purple-500/40 active:scale-[0.99] sm:text-sm">
              Manage Plan
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col gap-2.5 p-0">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="flex size-4.5 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400">
                  <Check className="size-3 stroke-3" />
                </div>
                <span className="text-xs font-medium text-slate-200 sm:text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </CardContent>
        </div>
      </Card>
    </section>
  )
}

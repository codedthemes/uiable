"use client"

// react
import { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// assets
import { Bell } from "lucide-react"

// types
interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimerBoxProps {
  count: number
  label: string
}

function TimerBox({ count, label }: TimerBoxProps) {
  return (
    <Card className="flex min-w-16 flex-col items-center justify-center p-3 text-center sm:min-w-20 sm:p-4">
      <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {String(count).padStart(2, "0")}
      </span>
      <span className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </span>
    </Card>
  )
}

//  ------------------------------ | COMING SOON 2 | ------------------------------  //

export default function ComingSoon2() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)
    targetDate.setHours(targetDate.getHours() + 12)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate.getTime() - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-16 lg:px-8">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex justify-center lg:col-span-6">
          <img
            src="https://cdn.uiable.com/block/img-soon-2.svg"
            alt="Coming Soon Illustration"
            className="h-auto max-h-[380px] w-full max-w-[420px] object-contain select-none"
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center lg:col-span-6 lg:items-start lg:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl tracking-tight text-foreground">
              Coming Soon
            </h1>
            <p className="text-base text-muted-foreground">
              Something new is on its way!
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <TimerBox count={timeLeft.days} label="Days" />
            <TimerBox count={timeLeft.hours} label="Hours" />
            <TimerBox count={timeLeft.minutes} label="Mins" />
            <TimerBox count={timeLeft.seconds} label="Secs" />
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Email Address"
              className="h-10 flex-1"
            />
            <Button className="h-10 gap-2">
              <Bell className="size-4" />
              Notify Me
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Facebook">
              <img
                src="https://cdn.uiable.com/authentication/facebook.svg"
                alt=""
              />
            </Button>
            <Button variant="outline" size="icon" aria-label="Google">
              <img
                src="https://cdn.uiable.com/authentication/google.svg"
                alt=""
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

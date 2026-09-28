"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// third-party
import { motion } from "framer-motion"

// assets
import { Bell } from "lucide-react"

//  ------------------------------ | COMING SOON 1 | ------------------------------  //

export default function ComingSoon1() {
  return (
    <section className="relative flex h-[100vh] min-h-150 items-center justify-center overflow-hidden bg-[url('https://cdn.uiable.com/authentication/img-auth-bg.jpg')] bg-cover bg-center px-4 py-16 lg:px-8 dark:bg-[url('https://cdn.uiable.com/authentication/img-auth-bg-dark.jpg')]">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-center gap-6 text-center lg:col-span-6 lg:items-start lg:text-left">
          <p className="text-xl font-semibold text-muted-foreground">
            Coming Soon
          </p>

          <h1 className="text-3xl tracking-tight text-foreground">
            <span className="text-primary">UI Able</span> - Modern UI Component
            Library
          </h1>

          <p className="max-w-lg text-base text-muted-foreground">
            Presenting modern React component library built with Tailwind CSS
            and Shadcn primitives to build performance-centric websites and
            applications.
          </p>

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

        <div className="flex justify-center lg:col-span-6">
          <div className="flex h-[100vh] items-center gap-4 overflow-hidden sm:gap-6">
            <div className="relative h-full w-40 overflow-hidden sm:w-56">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                }}
                className="flex flex-col gap-4"
              >
                <img
                  src="https://cdn.uiable.com/block/img-soon-1-1.png"
                  alt="Template preview 1"
                  className="w-full rounded-xl object-cover shadow-md"
                />
                <img
                  src="https://cdn.uiable.com/block/img-soon-1-1.png"
                  alt="Template preview 1 loop"
                  className="w-full rounded-xl object-cover shadow-md"
                />
              </motion.div>
            </div>

            <div className="relative h-full w-40 overflow-hidden sm:w-56">
              <motion.div
                animate={{ y: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                }}
                className="flex flex-col gap-4"
              >
                <img
                  src="https://cdn.uiable.com/block/img-soon-1-2.png"
                  alt="Template preview 2"
                  className="w-full rounded-xl shadow-md"
                />
                <img
                  src="https://cdn.uiable.com/block/img-soon-1-2.png"
                  alt="Template preview 2 loop"
                  className="w-full rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

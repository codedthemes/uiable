"use client"

// third-party
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import QRCode from "react-qr-code"

// project-imports
import Particles from "@/components/animation/Particles"

// Spotlight wrapper for each bento card
function BentoCard({
  children,
  className,
  colSpan,
}: {
  children: React.ReactNode
  className?: string
  colSpan: string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className={`group relative ${colSpan} flex flex-col justify-between overflow-hidden rounded-3xl border border-teal-800/60 bg-teal-900/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-teal-400/50 hover:shadow-teal-400/10 md:p-8 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        {children}
      </div>
    </motion.div>
  )
}

//  ------------------------------ | BENTO 7 | ------------------------------  //

export default function Bento7() {
  return (
    <section className="dark relative overflow-hidden bg-[#041a16] px-4 py-16 text-white md:px-8 md:py-32">
      <div className="absolute inset-0 z-10">
        <Particles
          particleCount={400}
          particleSpread={10}
          speed={0.26}
          particleColors={["#96f7e4"]}
          moveParticlesOnHover
          particleHoverFactor={0.8}
          alphaParticles={false}
          particleBaseSize={120}
          sizeRandomness={0.7}
          cameraDistance={15}
          disableRotation={false}
        />
      </div>
      <div className="pointer-events-none absolute top-[-20%] left-[-20%] h-[800px] w-[800px] rounded-full bg-teal-800/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-20%] bottom-[-20%] h-[800px] w-[800px] rounded-full bg-emerald-950/40 blur-[150px]" />
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-20">
          <span className="mb-6 inline-block rounded-full border border-teal-800/50 bg-teal-900/50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-400 uppercase shadow-sm">
            Startup Boost
          </span>
          <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Boost Your Startup to the{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            A command center for billing. Experience unmatched control over
            subscriptions, direct payouts, and sales charts.
          </p>
        </div>

        <div className="grid gap-5 md:gap-8 lg:grid-cols-12">
          <BentoCard colSpan="lg:col-span-7">
            <div>
              <span className="mb-2 block text-xs font-semibold tracking-wider text-teal-400 uppercase">
                Company Ledger
              </span>
              <h3 className="mb-4 text-2xl font-bold">Manage your company</h3>
              <p className="mb-8 max-w-md text-sm text-white/70">
                Synchronize internal ledger records and categorize expense types
                in real-time. Keep a clean treasury ledger without overhead.
              </p>
            </div>

            <div className="rounded-2xl border border-teal-800/50 bg-teal-950/80 p-5 shadow-inner backdrop-blur-sm transition-colors group-hover:bg-teal-950/90">
              <div className="mb-4 flex items-center justify-between border-b border-teal-800/50 pb-3">
                <span className="text-xs font-bold text-teal-400">
                  Transactions
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-teal-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  Live feed
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Monthly Revenue (Stripe)",
                    amount: "+$14,250.00",
                    type: "income",
                    color: "text-emerald-400",
                  },
                  {
                    name: "SaaS Subscriptions",
                    amount: "-$840.00",
                    type: "expense",
                    color: "text-rose-400",
                  },
                ].map((tx, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${tx.type === "income" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]"}`}
                      />
                      <span className="font-medium text-teal-50">
                        {tx.name}
                      </span>
                    </div>
                    <span className={`font-bold ${tx.color}`}>{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan="lg:col-span-5">
            <div>
              <span className="mb-2 block text-xs font-semibold tracking-wider text-teal-400 uppercase">
                Instant Payouts
              </span>
              <h3 className="mb-4 text-2xl font-bold">Withdraw your funds</h3>
              <p className="mb-8 text-sm text-white/70">
                Unlock immediate liquidity. Withdraw funds direct to bank rails
                or settle on crypto cards via scan.
              </p>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-teal-800/50 bg-teal-950/80 p-5 shadow-inner transition-colors group-hover:bg-teal-950/90">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-lg shadow-white/10 transition-shadow group-hover:shadow-teal-400/20">
                <div className="flex h-full w-full items-center justify-center bg-white p-0.5">
                  <QRCode
                    value="https://uiable.com/"
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    fgColor="#042f2e"
                  />
                </div>
              </div>
              <div>
                <span className="mb-1 block text-sm font-bold text-teal-50">
                  Settle via QR Code
                </span>
                <span className="block text-[11px] leading-relaxed text-teal-300">
                  Scan to instantly authorize local payout on card.
                </span>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan="lg:col-span-5">
            <div>
              <span className="mb-2 block text-xs font-semibold tracking-wider text-teal-400 uppercase">
                Checkout
              </span>
              <h3 className="mb-4 text-2xl font-bold">
                Sell products & services
              </h3>
              <p className="mb-8 text-sm text-white/70">
                Turn every checkout into a seamless buying experience.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-teal-800/50 bg-teal-950/80 p-5 shadow-inner transition-colors group-hover:bg-teal-950/90">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-teal-500 uppercase">
                  Email Address
                </label>
                <div className="rounded-xl border border-teal-800/80 bg-teal-900/60 px-4 py-2.5 text-sm text-teal-100 shadow-inner">
                  customer@example.com
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-teal-500 uppercase">
                  Card Number
                </label>
                <div className="flex items-center justify-between rounded-xl border border-teal-800/80 bg-teal-900/60 px-4 py-2.5 text-sm text-teal-100 shadow-inner">
                  <span className="tracking-widest">•••• •••• •••• 4242</span>
                  <span className="rounded bg-teal-800/80 px-2 py-1 text-[9px] font-bold text-teal-300 uppercase">
                    Visa
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan="lg:col-span-7">
            <div>
              <span className="mb-2 block text-xs font-semibold tracking-wider text-teal-400 uppercase">
                Recurring Engine
              </span>
              <h3 className="mb-4 text-2xl font-bold">
                Launch a recurring model
              </h3>
            </div>

            <div className="rounded-2xl border border-teal-800/50 bg-teal-950/80 p-5 shadow-inner transition-colors group-hover:bg-teal-950/90">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="mb-1 block text-[10px] font-bold tracking-wider text-teal-400 uppercase">
                    Monthly Recurring Revenue
                  </span>
                  <span className="text-2xl font-extrabold text-white">
                    $158,400
                  </span>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  +28% this Mo
                </span>
              </div>
              <div className="relative mt-auto h-32 w-full">
                <svg
                  viewBox="0 0 400 120"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,100 C 40,80 80,110 120,70 C 160,30 200,80 240,40 C 280,0 320,50 360,20 C 380,5 390,15 400,10 L 400,120 L 0,120 Z"
                    fill="url(#chart-glow)"
                    className="transition-opacity group-hover:opacity-80"
                  />
                  <path
                    d="M 0,100 C 40,80 80,110 120,70 C 160,30 200,80 240,40 C 280,0 320,50 360,20 C 380,5 390,15 400,10"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  />
                  <line
                    x1="0"
                    y1="30"
                    x2="400"
                    y2="30"
                    stroke="#0d9488"
                    strokeWidth="1"
                    strokeDasharray="4,6"
                    opacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="70"
                    x2="400"
                    y2="70"
                    stroke="#0d9488"
                    strokeWidth="1"
                    strokeDasharray="4,6"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

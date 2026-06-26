"use client"

import { useState } from "react"

// project imports
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// ------------------------------ | DEPLOYMENT ENVIRONMENT CARD | ------------------------------ //

export default function DeploymentEnvironmentCard() {
  const [env, setEnv] = useState("production")

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-col gap-2.5">
        <p className="text-base leading-5 font-medium tracking-normal text-card-foreground">
          Deployment Environment
        </p>
        <p className="text-xs leading-4 font-medium tracking-normal text-muted-foreground">
          Choose the appropriate environment for deploying your cluster.
        </p>
      </div>

      <RadioGroup
        value={env}
        onValueChange={setEnv}
        className="flex flex-col gap-3"
      >
        {/* Option 1: Production */}
        <label
          className={`flex cursor-pointer items-start justify-between rounded-lg border p-4 transition-colors ${
            env === "production"
              ? "border-primary bg-primary/5"
              : "border-border bg-card hover:bg-accent/30"
          }`}
        >
          <div className="flex max-w-[85%] flex-col gap-1.5">
            <p className="text-sm leading-4 font-medium tracking-normal text-accent-foreground">
              Production
            </p>
            <p className="text-xs leading-4 font-normal tracking-normal text-muted-foreground">
              Customer live environment with monitoring and backups.
            </p>
          </div>
          <RadioGroupItem value="production" />
        </label>

        {/* Option 2: Staging */}
        <label
          className={`flex cursor-pointer items-start justify-between rounded-lg border p-4 transition-colors ${
            env === "staging"
              ? "border-primary bg-primary/5"
              : "border-border bg-card hover:bg-accent/30"
          }`}
        >
          <div className="flex max-w-[85%] flex-col gap-1.5">
            <p className="text-sm leading-4 font-medium tracking-normal text-accent-foreground">
              Staging
            </p>
            <p className="text-xs leading-4 font-normal tracking-normal text-muted-foreground">
              Preview features before launch. Reflects production settings.
            </p>
          </div>
          <RadioGroupItem value="staging" />
        </label>
      </RadioGroup>
    </div>
  )
}

"use client"

import { useState } from "react"

// shadcn
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// third-party
import { cn } from "cn"

// types
interface Environment {
  value: string
  title: string
  description: string
}

interface EnvironmentOptionProps {
  value: string
  title: string
  description: string
  isSelected: boolean
}

const environments: Environment[] = [
  {
    value: "production",
    title: "Production",
    description: "Customer live environment with monitoring and backups.",
  },
  {
    value: "staging",
    title: "Staging",
    description:
      "Preview features before launch. Reflects production settings.",
  },
]

// ------------------------------ | DEPLOYMENT ENVIRONMENT CARD | ------------------------------ //

function EnvironmentOption({
  value,
  title,
  description,
  isSelected,
}: EnvironmentOptionProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start justify-between rounded-lg border p-4 transition-colors",
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border bg-card hover:bg-accent/30"
      )}
    >
      <div className="flex flex-1 flex-col gap-1.5 pr-4">
        <p className="text-sm leading-4 font-medium tracking-normal text-accent-foreground">
          {title}
        </p>
        <p className="text-xs leading-4 font-normal tracking-normal text-muted-foreground">
          {description}
        </p>
      </div>
      <RadioGroupItem value={value} />
    </label>
  )
}

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
        {environments.map((environment) => (
          <EnvironmentOption
            key={environment.value}
            {...environment}
            isSelected={env === environment.value}
          />
        ))}
      </RadioGroup>
    </div>
  )
}

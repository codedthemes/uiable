"use client";

import { useState } from "react";

// project imports
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// ------------------------------ | DEPLOYMENT ENVIRONMENT CARD | ------------------------------ //

export default function DeploymentEnvironmentCard() {
  const [env, setEnv] = useState("production");

  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-5 bg-card">
      <div className="flex flex-col gap-2.5">
        <p className="text-base font-medium leading-5 tracking-normal text-card-foreground">
          Deployment Environment
        </p>
        <p className="text-xs font-medium leading-4 tracking-normal text-muted-foreground">
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
          className={`border rounded-lg p-4 flex items-start justify-between cursor-pointer transition-colors ${env === "production"
            ? "border-primary bg-primary/5"
            : "border-border bg-card hover:bg-accent/30"
            }`}
        >
          <div className="flex flex-col gap-1.5 max-w-[85%]">
            <p className="text-sm font-medium leading-4 tracking-normal text-accent-foreground">Production</p>
            <p className="text-xs font-normal leading-4 tracking-normal text-muted-foreground">
              Customer live environment with monitoring and backups.
            </p>
          </div>
          <RadioGroupItem value="production" />
        </label>

        {/* Option 2: Staging */}
        <label
          className={`border rounded-lg p-4 flex items-start justify-between cursor-pointer transition-colors ${env === "staging"
            ? "border-primary bg-primary/5"
            : "border-border bg-card hover:bg-accent/30"
            }`}
        >
          <div className="flex flex-col gap-1.5 max-w-[85%]">
            <p className="text-sm font-medium leading-4 tracking-normal text-accent-foreground">Staging</p>
            <p className="text-xs font-normal leading-4 tracking-normal text-muted-foreground">
              Preview features before launch. Reflects production settings.
            </p>
          </div>
          <RadioGroupItem value="staging" />
        </label>
      </RadioGroup>
    </div>
  );
}

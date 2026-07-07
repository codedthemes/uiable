"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// assets
import { Grid, Grid2X2, Menu } from "lucide-react"

//  ------------------------------ | BUTTON GROUP - ICON | ------------------------------  //

export default function ButtonGroupIcon() {
  const [active, setActive] = useState<"grid" | "menu" | "grid2x2">("grid")

  return (
    <ButtonGroup className="rounded-lg border border-border/50 p-0.5">
      <Button
        variant="ghost"
        size="icon-lg"
        className={
          active === "grid"
            ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
            : ""
        }
        onClick={() => setActive("grid")}
      >
        <Grid />
      </Button>
      <Button
        variant="ghost"
        size="icon-lg"
        className={
          active === "menu"
            ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
            : ""
        }
        onClick={() => setActive("menu")}
      >
        <Menu />
      </Button>
      <Button
        variant="ghost"
        size="icon-lg"
        className={
          active === "grid2x2"
            ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
            : ""
        }
        onClick={() => setActive("grid2x2")}
      >
        <Grid2X2 />
      </Button>
    </ButtonGroup>
  )
}

import { useState, ChangeEvent } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

// assets
import { Minus, Plus } from "lucide-react"

//  ------------------------------ | BUTTON GROUP - QUANTITY SELECTOR | ------------------------------  //

export function ButtonGroupQtySelect() {
  const [qty, setQty] = useState<string>("1")

  const updateQty = (offset: number) => {
    setQty((prev) => String(Math.max(1, (parseInt(prev, 10) || 1) + offset)))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(e.target.value)) setQty(e.target.value)
  }

  const handleBlur = () => {
    setQty((prev) => String(Math.max(1, parseInt(prev, 10) || 1)))
  }

  return (
    <ButtonGroup className="py-1 [&>button[data-slot]:first-child]:rounded-l-2xl [&>button[data-slot]:last-child]:rounded-r-2xl!">
      <Button
        variant="outline"
        aria-label="minus"
        size="icon-lg"
        onClick={() => updateQty(-1)}
        className="bg-transparent hover:bg-gray-200 dark:border-border/50"
      >
        <Minus />
      </Button>
      <Input
        type="number"
        value={qty}
        onChange={handleChange}
        onBlur={handleBlur}
        min={1}
        className="z-10 max-w-18 [appearance:textfield] py-1 text-center dark:border-border/50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        variant="outline"
        aria-label="plus"
        size="icon-lg"
        onClick={() => updateQty(1)}
        className="bg-transparent hover:bg-gray-200 dark:border-border/50"
      >
        <Plus />
      </Button>
    </ButtonGroup>
  )
}

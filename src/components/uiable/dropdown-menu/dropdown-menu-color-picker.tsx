// shadcn
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// assets
import { PaletteIcon } from "lucide-react"

const colors = [
  { name: "Zinc", value: "bg-zinc-500" },
  { name: "Red", value: "bg-red-500" },
  { name: "Orange", value: "bg-orange-500" },
  { name: "Amber", value: "bg-amber-500" },
  { name: "Yellow", value: "bg-yellow-500" },
  { name: "Green", value: "bg-green-500" },
  { name: "Emerald", value: "bg-emerald-500" },
  { name: "Teal", value: "bg-teal-500" },
  { name: "Cyan", value: "bg-cyan-500" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Indigo", value: "bg-indigo-500" },
  { name: "Violet", value: "bg-violet-500" },
  { name: "Purple", value: "bg-purple-500" },
  { name: "Fuchsia", value: "bg-fuchsia-500" },
  { name: "Pink", value: "bg-pink-500" },
  { name: "Rose", value: "bg-rose-500" },
]

//  ------------------------------ | DROPDOWN MENU - COLOR PICKER | ------------------------------  //

export function DropdownMenuColorPicker() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="dark:border-border" />}
      >
        <PaletteIcon className="mr-1" />
        Theme Color
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px]">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Choose Color</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="grid grid-cols-4 gap-1 p-1">
          {colors.map((color) => (
            <DropdownMenuItem
              key={color.name}
              className="flex h-10 w-10 items-center justify-center rounded-lg p-0"
              title={color.name}
            >
              <div className={`h-6 w-6 rounded-full ${color.value}`} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

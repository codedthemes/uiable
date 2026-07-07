"use client"

import { Fragment } from "react"

// third party
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

// shadcn
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

// project
import { cn } from "@/lib/utils"

// assets
import { CheckIcon } from "lucide-react"

// constants
const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "group/combobox-item relative flex w-full cursor-default items-center gap-2 rounded-lg py-2 pr-4 pl-10 text-base outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  )
}

//  ------------------------------ | COMBOBOX - WITH CHECKBOX | ------------------------------  //

export default function ComboboxWithCheckbox() {
  const anchor = useComboboxAnchor()

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-1.5 p-4">
      <Combobox
        multiple
        autoHighlight
        items={frameworks}
        defaultValue={[frameworks[0]]}
      >
        <ComboboxChips ref={anchor} className="w-full">
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Select frameworks..." />
              </Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                <span className="absolute left-3 flex size-[17.5px] shrink-0 items-center justify-center rounded-[4px] border border-border bg-card transition-colors group-data-[selected]/combobox-item:border-primary group-data-[selected]/combobox-item:bg-primary group-data-[selected]/combobox-item:text-primary-foreground">
                  <ComboboxPrimitive.ItemIndicator
                    render={
                      <span className="grid place-content-center text-current transition-none [&>svg]:size-3 [&>svg]:stroke-3" />
                    }
                  >
                    <CheckIcon />
                  </ComboboxPrimitive.ItemIndicator>
                </span>
                <span>{item}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

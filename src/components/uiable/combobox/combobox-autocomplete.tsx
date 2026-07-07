"use client"

import { KeyboardEvent, useMemo, useState } from "react"

// shadcn
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldDescription } from "@/components/ui/field"
import { Kbd } from "@/components/ui/kbd"

// constants
const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "Tailwind CSS",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
] as const

//  ------------------------------ | COMBOBOX - AUTOCOMPLETE | ------------------------------  //

export default function ComboboxAutocomplete() {
  const [value, setValue] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Find suggestion based on current input value
  const suggestion = useMemo(() => {
    if (!inputValue || isDeleting) return null
    return (
      frameworks.find((fw) =>
        fw.toLowerCase().startsWith(inputValue.toLowerCase())
      ) || null
    )
  }, [inputValue, isDeleting])

  // Compute the suffix to show as typeahead ghost text
  const suggestionSuffix = useMemo(() => {
    if (!suggestion || !inputValue) return ""
    return suggestion.slice(inputValue.length)
  }, [suggestion, inputValue])

  // Handler for Tab and ArrowRight keys to perform inline autocomplete completion
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Detect if user is backspacing or deleting
    if (e.key === "Backspace" || e.key === "Delete") {
      setIsDeleting(true)
    } else {
      setIsDeleting(false)
    }

    if (suggestion && suggestion.toLowerCase() !== inputValue.toLowerCase()) {
      if (e.key === "Tab") {
        e.preventDefault()
        setInputValue(suggestion)
      } else if (e.key === "ArrowRight") {
        const target = e.target as HTMLInputElement
        // Complete suggestion only if cursor is at the end of input
        if (target.selectionStart === inputValue.length) {
          e.preventDefault()
          setInputValue(suggestion)
        }
      }
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-1.5 p-4">
      <Field>
        <Combobox
          value={value}
          onValueChange={(val) => {
            setValue(val)
            if (val) {
              setInputValue(val)
            }
          }}
          inputValue={inputValue}
          onInputValueChange={(newVal) => {
            setInputValue(newVal)
            setIsDeleting(false)
          }}
          items={frameworks}
          autoHighlight
        >
          <ComboboxInput
            id="framework-autocomplete"
            placeholder="Type a framework..."
            onKeyDown={handleKeyDown}
            className="relative"
            showClear
          >
            {/* Ghost text suggestion overlay */}
            {inputValue && suggestion && (
              <div className="pointer-events-none absolute inset-y-0 left-0 z-0 flex items-center pl-3 text-base select-none">
                <span className="whitespace-pre text-transparent">
                  {inputValue}
                </span>
                <span className="whitespace-pre text-muted-foreground/35">
                  {suggestionSuffix}
                </span>
              </div>
            )}

            {/* Tab keycap hint inside input group */}
            {inputValue &&
              suggestion &&
              suggestion.toLowerCase() !== inputValue.toLowerCase() && (
                <div className="pointer-events-none absolute top-0 right-9 bottom-0 z-10 flex items-center select-none">
                  <Kbd className="h-4.5 border-muted/50 bg-muted/40 px-1 text-[9px] text-muted-foreground transition-opacity duration-150">
                    Tab
                  </Kbd>
                </div>
              )}
          </ComboboxInput>
          <ComboboxContent>
            <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldDescription>
          Type to filter. Press{" "}
          <Kbd className="px-1 py-0.5 text-[10px]">Tab</Kbd> or{" "}
          <Kbd className="px-1 py-0.5 text-[10px]">→</Kbd> to autocomplete.
        </FieldDescription>
      </Field>
    </div>
  )
}

"use client"

import { useState } from "react"

// third party
import { AnimatePresence, motion } from "framer-motion"

// fruit options
const fruits = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "blueberry", label: "Blueberry" },
  { id: "grapes", label: "Grapes" },
  { id: "pineapple", label: "Pineapple" },
]

//  ------------------------------ | CHECKBOX - LIST | ------------------------------  //

export function CheckboxList() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([
    "blueberry",
    "apple",
  ])

  const toggleFruit = (id: string) => {
    setSelectedFruits((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="w-full max-w-[240px] rounded-lg border border-border bg-popover p-1.5">
      <div className="flex flex-col gap-0.5">
        {fruits.map((fruit) => {
          const isChecked = selectedFruits.includes(fruit.id)
          return (
            <div
              key={fruit.id}
              onClick={() => toggleFruit(fruit.id)}
              className="group flex min-h-[38px] cursor-pointer items-center justify-between rounded-md px-3.25 py-2 transition-colors select-none hover:bg-background"
            >
              <span className="text-base font-normal text-foreground group-hover:text-accent-foreground">
                {fruit.label}
              </span>
              <AnimatePresence initial={false}>
                {isChecked && (
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none size-4 text-green-500"
                  >
                    <motion.path
                      d="M4 12L9 17L20 6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

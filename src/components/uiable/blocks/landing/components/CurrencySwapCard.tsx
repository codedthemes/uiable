"use client"

import { useState } from "react"
import { Bitcoin, Ethereum } from "@/images/svg/icons"
// assets
import { ArrowUpDown, ChevronDown } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = ["swap", "trade", "buy", "sell"]

// ------------------------------ | CURRENCY SWAP CARD | ------------------------------ //

export default function CurrencySwapCard() {
  const [activeTab, setActiveTab] = useState("swap")
  const [isBtcToEth, setIsBtcToEth] = useState(true)
  const [inputValue, setInputValue] = useState("0.12")

  const getOutputValue = () => {
    const val = parseFloat(inputValue)
    if (isNaN(val)) return ""
    const num = isBtcToEth ? val * 42.5 : val / 42.5
    if (isBtcToEth) {
      return num.toFixed(2)
    } else {
      return Number(num.toFixed(6)).toString()
    }
  }

  const handleSwapDirection = () => {
    const outputVal = getOutputValue()
    setIsBtcToEth(!isBtcToEth)
    setInputValue(outputVal)
  }

  const currentOutput = getOutputValue()

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
      <p className="text-center text-base leading-5 font-medium tracking-normal text-card-foreground">
        Transactions
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="h-auto w-full rounded-lg bg-muted p-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-1 rounded-md px-3.5 py-1.5 text-sm leading-5 font-medium tracking-normal text-muted-foreground capitalize data-active:bg-card data-active:text-foreground data-active:shadow-sm data-active:hover:text-foreground dark:data-active:bg-card dark:data-active:text-foreground"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-1.5">
        {/* TOP Input Block (Amount / Send) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-sm leading-4 font-medium tracking-normal text-foreground">
              Amount
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-ring">
            <div className="flex min-w-0 flex-1 items-center gap-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  const val = e.target.value
                  if (/^\d*\.?\d*$/.test(val)) {
                    setInputValue(val)
                  }
                }}
                className="h-auto w-full border-none bg-transparent p-0 text-left text-base font-semibold text-foreground focus:ring-0 focus:outline-none"
              />
              <span className="pr-2 text-base font-semibold text-foreground select-none">
                {isBtcToEth ? "BTC" : "ETH"}
              </span>
            </div>

            <div
              onClick={handleSwapDirection}
              className="flex cursor-pointer items-center gap-2 pl-2 transition-opacity select-none hover:opacity-80"
            >
              {isBtcToEth ? <Bitcoin /> : <Ethereum />}
              <span className="text-xs leading-3 font-medium tracking-normal text-muted-foreground">
                {isBtcToEth ? "BTC" : "ETH"}
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>
          <span className="px-0.5 text-xs leading-3 font-normal tracking-normal text-muted-foreground">
            Balance: {isBtcToEth ? "0.20 BTC" : "8.50 ETH"}
          </span>
        </div>

        {/* Swap Direction Button */}
        <div className="relative z-10 -my-2.5 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSwapDirection}
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-card shadow-md transition-all hover:bg-muted active:scale-95"
          >
            <ArrowUpDown className="size-4 text-foreground" />
          </Button>
        </div>

        {/* BOTTOM Input Block (Receive) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-sm leading-4 font-medium tracking-normal text-foreground">
              {activeTab === "sell" ? "Receive (Est.)" : "Receive"}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-ring">
            <div className="flex min-w-0 flex-1 items-center gap-1">
              <input
                type="text"
                readOnly
                value={currentOutput}
                className="h-auto w-full border-none bg-transparent p-0 text-left text-base font-semibold text-foreground focus:ring-0 focus:outline-none"
              />
              <span className="pr-2 text-base font-semibold text-foreground select-none">
                {isBtcToEth ? "ETH" : "BTC"}
              </span>
            </div>

            <div
              onClick={handleSwapDirection}
              className="flex cursor-pointer items-center gap-2 pl-2 transition-opacity select-none hover:opacity-80"
            >
              {isBtcToEth ? <Ethereum /> : <Bitcoin />}
              <span className="text-xs leading-3 font-medium tracking-normal text-muted-foreground">
                {isBtcToEth ? "ETH" : "BTC"}
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>
          <span className="px-0.5 text-xs leading-3 font-normal tracking-normal text-muted-foreground">
            Balance: {isBtcToEth ? "8.50 ETH" : "0.20 BTC"}
          </span>
        </div>
      </div>

      <Button
        onClick={handleSwapDirection}
        className="mt-1 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground capitalize hover:bg-primary/90"
      >
        {activeTab}
      </Button>
    </div>
  )
}

"use client";

import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// assets
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { Bitcoin, Ethereum } from "@/images/svg/icons";

const tabs = ["swap", "trade", "buy", "sell"];

// ------------------------------ | CURRENCY SWAP CARD | ------------------------------ //

export default function CurrencySwapCard() {
  const [activeTab, setActiveTab] = useState("swap");
  const [isBtcToEth, setIsBtcToEth] = useState(true);
  const [inputValue, setInputValue] = useState("0.12");

  const getOutputValue = () => {
    const val = parseFloat(inputValue);
    if (isNaN(val)) return "";
    const num = isBtcToEth ? val * 42.5 : val / 42.5;
    if (isBtcToEth) {
      return num.toFixed(2);
    } else {
      return Number(num.toFixed(6)).toString();
    }
  };

  const handleSwapDirection = () => {
    const outputVal = getOutputValue();
    setIsBtcToEth(!isBtcToEth);
    setInputValue(outputVal);
  };

  const currentOutput = getOutputValue();

  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-4 bg-card">
      <p className="text-base font-medium leading-5 tracking-normal text-center text-card-foreground">Transactions</p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full bg-muted p-1 rounded-lg h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-1 text-sm font-medium leading-5 tracking-normal capitalize py-1.5 px-3.5 rounded-md text-muted-foreground data-active:bg-card dark:data-active:bg-card data-active:text-foreground data-active:hover:text-foreground dark:data-active:text-foreground data-active:shadow-sm"
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
            <span className="text-sm font-medium leading-4 tracking-normal text-foreground">
              Amount
            </span>
          </div>
          <div className="border border-border rounded-xl px-4 py-2.5 bg-card flex items-center justify-between focus-within:ring-1 focus-within:ring-ring focus-within:border-primary transition-all">
            <div className="flex items-center gap-1 flex-1 min-w-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*\.?\d*$/.test(val)) {
                    setInputValue(val);
                  }
                }}
                className="text-base font-semibold text-foreground bg-transparent border-none p-0 h-auto focus:outline-none focus:ring-0 w-full text-left"
              />
              <span className="text-base font-semibold text-foreground select-none pr-2">
                {isBtcToEth ? "BTC" : "ETH"}
              </span>
            </div>

            <div
              onClick={handleSwapDirection}
              className="flex items-center gap-2 cursor-pointer select-none pl-2 hover:opacity-80 transition-opacity"
            >
              {isBtcToEth ? <Bitcoin /> : <Ethereum />}
              <span className="text-xs font-medium leading-3 tracking-normal text-muted-foreground">
                {isBtcToEth ? "BTC" : "ETH"}
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>
          <span className="text-xs font-normal leading-3 tracking-normal text-muted-foreground px-0.5">
            Balance: {isBtcToEth ? "0.20 BTC" : "8.50 ETH"}
          </span>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center -my-2.5 relative z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSwapDirection}
            className="size-8 rounded-full shadow-md hover:bg-muted active:scale-95 transition-all bg-card border border-border flex items-center justify-center cursor-pointer"
          >
            <ArrowUpDown className="size-4 text-foreground" />
          </Button>
        </div>

        {/* BOTTOM Input Block (Receive) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-sm font-medium leading-4 tracking-normal text-foreground">
              {activeTab === "sell" ? "Receive (Est.)" : "Receive"}
            </span>
          </div>
          <div className="border border-border rounded-xl px-4 py-2.5 bg-card flex items-center justify-between focus-within:ring-1 focus-within:ring-ring focus-within:border-primary transition-all">
            <div className="flex items-center gap-1 flex-1 min-w-0">
              <input
                type="text"
                readOnly
                value={currentOutput}
                className="text-base font-semibold text-foreground bg-transparent border-none p-0 h-auto focus:outline-none focus:ring-0 w-full text-left"
              />
              <span className="text-base font-semibold text-foreground select-none pr-2">
                {isBtcToEth ? "ETH" : "BTC"}
              </span>
            </div>

            <div
              onClick={handleSwapDirection}
              className="flex items-center gap-2 cursor-pointer select-none pl-2 hover:opacity-80 transition-opacity"
            >
              {isBtcToEth ? <Ethereum /> : <Bitcoin />}
              <span className="text-xs font-medium leading-3 tracking-normal text-muted-foreground">
                {isBtcToEth ? "ETH" : "BTC"}
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          </div>
          <span className="text-xs font-normal leading-3 tracking-normal text-muted-foreground px-0.5">
            Balance: {isBtcToEth ? "8.50 ETH" : "0.20 BTC"}
          </span>
        </div>
      </div>

      <Button
        onClick={handleSwapDirection}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg text-sm mt-1 capitalize"
      >
        {activeTab}
      </Button>
    </div>
  );
}

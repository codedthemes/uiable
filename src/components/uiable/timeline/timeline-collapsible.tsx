"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline"

// third-party
import { AnimatePresence, motion } from "framer-motion"

// assets
import { Activity, ChevronDown, Cpu, Database } from "lucide-react"

//  ------------------------------ | TIMELINE - COLLAPSIBLE | ------------------------------  //

export function TimelineCollapsible() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    step1: true,
    step2: false,
    step3: false,
  })

  return (
    <div className="w-full max-w-lg p-2">
      <Timeline size="default">
        {/* Item 1 */}
        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="subtle">
              <Database className="size-3.5 text-primary" />
            </TimelineIndicator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Collapsible
              open={openItems.step1}
              onOpenChange={(isOpen) =>
                setOpenItems((prev) => ({ ...prev, step1: isOpen }))
              }
            >
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-between gap-2 p-0 text-left font-normal whitespace-normal hover:bg-transparent aria-expanded:bg-transparent"
                  />
                }
              >
                <TimelineTitle className="text-left font-medium">
                  Cache Warmup & Schema Sync
                </TimelineTitle>
                <div className="flex shrink-0 items-center gap-2">
                  <TimelineTime>08:30 AM</TimelineTime>
                  <div className="flex size-5 items-center justify-center rounded-sm text-muted-foreground">
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${
                        openItems.step1 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </CollapsibleTrigger>
              <TimelineDescription>
                Synchronized 24,000 document records to Redis cluster with TTL
                tags.
              </TimelineDescription>
              <AnimatePresence initial={false}>
                {openItems.step1 && (
                  <CollapsibleContent
                    render={
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      />
                    }
                  >
                    <div className="mt-2.5 space-y-1.5 rounded-lg border bg-muted/50 p-3 font-mono text-xs">
                      <div className="text-muted-foreground">
                        &gt; REDIS_HOST: 10.0.4.12:6379
                      </div>
                      <div className="text-muted-foreground">
                        &gt; KEYS_INDEXED: 24,192 [100%]
                      </div>
                      <div className="text-green-600">
                        &gt; CACHE_HIT_RATIO: 99.4%
                      </div>
                    </div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem status="completed">
          <TimelineSeparator>
            <TimelineIndicator variant="subtle">
              <Cpu className="size-3.5 text-primary" />
            </TimelineIndicator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Collapsible
              open={openItems.step2}
              onOpenChange={(isOpen) =>
                setOpenItems((prev) => ({ ...prev, step2: isOpen }))
              }
            >
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-between gap-2 p-0 text-left font-normal whitespace-normal hover:bg-transparent aria-expanded:bg-transparent"
                  />
                }
              >
                <TimelineTitle className="text-left font-medium">
                  Worker Thread Pool Allocation
                </TimelineTitle>
                <div className="flex shrink-0 items-center gap-2">
                  <TimelineTime>08:32 AM</TimelineTime>
                  <div className="flex size-5 items-center justify-center rounded-sm text-muted-foreground">
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${
                        openItems.step2 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </CollapsibleTrigger>
              <TimelineDescription>
                Spawned 8 Node.js worker threads to handle batch background
                indexing.
              </TimelineDescription>
              <AnimatePresence initial={false}>
                {openItems.step2 && (
                  <CollapsibleContent
                    render={
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      />
                    }
                  >
                    <div className="mt-2.5 space-y-1.5 rounded-lg border bg-muted/50 p-3 font-mono text-xs">
                      <div className="text-muted-foreground">
                        &gt; MAX_CONCURRENCY: 8
                      </div>
                      <div className="text-muted-foreground">
                        &gt; MEMORY_PER_THREAD: 128MB
                      </div>
                      <div className="text-green-600">&gt; STATUS: READY</div>
                    </div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem status="in-progress">
          <TimelineSeparator>
            <TimelineIndicator variant="in-progress">
              <Activity className="size-3.5" />
            </TimelineIndicator>
          </TimelineSeparator>
          <TimelineContent>
            <Collapsible
              open={openItems.step3}
              onOpenChange={(isOpen) =>
                setOpenItems((prev) => ({ ...prev, step3: isOpen }))
              }
            >
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-between gap-2 p-0 text-left font-normal whitespace-normal hover:bg-transparent aria-expanded:bg-transparent"
                  />
                }
              >
                <TimelineTitle className="text-left font-medium text-primary">
                  Live Stream Ingestion
                </TimelineTitle>
                <div className="flex shrink-0 items-center gap-2">
                  <TimelineTime>Running</TimelineTime>
                  <div className="flex size-5 items-center justify-center rounded-sm text-muted-foreground">
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${
                        openItems.step3 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </CollapsibleTrigger>
              <TimelineDescription>
                Streaming telemetry metrics and event payloads in real-time.
              </TimelineDescription>
              <AnimatePresence initial={false}>
                {openItems.step3 && (
                  <CollapsibleContent
                    render={
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      />
                    }
                  >
                    <div className="mt-2.5 space-y-1.5 rounded-lg border bg-muted/50 p-3 font-mono text-xs">
                      <div className="text-muted-foreground">
                        &gt; INGESTION_RATE: 1.4 MB/s
                      </div>
                      <div className="text-muted-foreground">
                        &gt; LATENCY: 18ms
                      </div>
                    </div>
                  </CollapsibleContent>
                )}
              </AnimatePresence>
            </Collapsible>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

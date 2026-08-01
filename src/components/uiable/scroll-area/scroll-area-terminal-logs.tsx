import { useState } from "react"
// assets
import { CheckCircle2, RefreshCw, Terminal, Trash2 } from "lucide-react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LogEntry {
  line: number
  timestamp: string
  level: "INFO" | "WARN" | "ERROR" | "SUCCESS"
  message: string
}

const buildLogs: LogEntry[] = [
  {
    line: 1,
    timestamp: "08:18:59.214",
    level: "INFO",
    message: "Initializing UIAble build pipeline (v1.1.0-next)...",
  },
  {
    line: 2,
    timestamp: "08:18:59.230",
    level: "INFO",
    message: "Loading configuration from C:\\Users\\ADMIN\\.gemini\\config...",
  },
  {
    line: 3,
    timestamp: "08:18:59.341",
    level: "INFO",
    message: "Scanning 67 component categories and 212 block templates.",
  },
  {
    line: 4,
    timestamp: "08:18:59.502",
    level: "INFO",
    message: "Resolving Base UI (@base-ui/react v1.6.0) primitive definitions.",
  },
  {
    line: 5,
    timestamp: "08:18:59.610",
    level: "WARN",
    message:
      "Deprecated prop 'scrollHideDelay' ignored on custom scroll-area viewport.",
  },
  {
    line: 6,
    timestamp: "08:18:59.720",
    level: "INFO",
    message: "Building Tailwind CSS v4.3.2 stylesheet and theme tokens...",
  },
  {
    line: 7,
    timestamp: "08:18:59.890",
    level: "SUCCESS",
    message: "✓ Generated registry indexes: components/uiable/registry.json.",
  },
  {
    line: 8,
    timestamp: "08:19:00.120",
    level: "INFO",
    message: "Compiling TSX components for server/client boundaries...",
  },
  {
    line: 9,
    timestamp: "08:19:00.440",
    level: "INFO",
    message:
      "Checking cross-browser overlay scrollbar compatibility (macOS / Win).",
  },
  {
    line: 10,
    timestamp: "08:19:00.812",
    level: "INFO",
    message: "Transforming dynamic imports for /docs/components/scroll-area.",
  },
  {
    line: 11,
    timestamp: "08:19:01.050",
    level: "WARN",
    message:
      "Bundle optimization: chunk 'shiki' size is 1.42 MB (pre-gzipped).",
  },
  {
    line: 12,
    timestamp: "08:19:01.300",
    level: "INFO",
    message:
      "Running pre-flight accessibility checks on interactive ARIA nodes.",
  },
  {
    line: 13,
    timestamp: "08:19:01.650",
    level: "SUCCESS",
    message:
      "✓ ARIA validation passed: 0 critical contrast or focus ring warnings.",
  },
  {
    line: 14,
    timestamp: "08:19:02.110",
    level: "INFO",
    message:
      "Assembling component demos: Horizontal, Image Scroll, Bidirectional, Chat.",
  },
  {
    line: 15,
    timestamp: "08:19:02.480",
    level: "INFO",
    message: "Optimizing SVG assets and custom ScrollArea thumb styling.",
  },
  {
    line: 16,
    timestamp: "08:19:02.910",
    level: "ERROR",
    message:
      "Simulated latency check on node-prd-ap-south-02 (310ms threshold exceeded).",
  },
  {
    line: 17,
    timestamp: "08:19:03.020",
    level: "INFO",
    message:
      "Retrying connection to edge telemetry pipeline... (Attempt 1 of 3).",
  },
  {
    line: 18,
    timestamp: "08:19:03.340",
    level: "SUCCESS",
    message:
      "✓ Telemetry re-established. All edge workers responding normally.",
  },
  {
    line: 19,
    timestamp: "08:19:03.780",
    level: "INFO",
    message: "Generating static parameters for 67 component routes.",
  },
  {
    line: 20,
    timestamp: "08:19:04.120",
    level: "SUCCESS",
    message: "✓ Static generation finished. 149 modules bundled cleanly.",
  },
  {
    line: 21,
    timestamp: "08:19:04.560",
    level: "INFO",
    message: "Finalizing production build manifest and sourcemaps.",
  },
  {
    line: 22,
    timestamp: "08:19:04.890",
    level: "SUCCESS",
    message: "✨ BUILD COMPLETED successfully in 4.28s. Ready for deployment.",
  },
]

//  ------------------------------ | SCROLL AREA - TERMINAL LOGS | ------------------------------  //

export default function ScrollAreaTerminalLogs() {
  const [logs, setLogs] = useState<LogEntry[]>(buildLogs)

  const clearLogs = () => setLogs([])
  const restoreLogs = () => setLogs(buildLogs)

  return (
    <Card className="w-full max-w-[650px] overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl dark:border-slate-800">
      {/* Mac-style Window Controls & Header */}
      <div className="flex flex-col gap-2.5 border-b border-slate-800 bg-slate-900/90 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-500/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-1 flex min-w-0 items-center gap-1.5 font-mono text-xs font-semibold text-slate-300 sm:ml-2">
            <Terminal className="size-3.5 shrink-0 text-emerald-400" />
            <span className="truncate">bash - npm run registry:build</span>
          </div>
        </div>
        <div className="flex w-full shrink-0 items-center justify-between gap-2 self-end sm:w-auto sm:justify-end sm:self-auto">
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/10 font-mono text-[10px] text-emerald-400"
          >
            <CheckCircle2 className="mr-1 size-3 shrink-0" />
            <span>22 LOGS</span>
          </Badge>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={restoreLogs}
              title="Restore original logs"
              className="size-7 shrink-0 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              <RefreshCw className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearLogs}
              title="Clear terminal"
              className="size-7 shrink-0 text-slate-400 hover:bg-slate-800 hover:text-rose-400"
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Terminal Log Scroller */}
      <ScrollArea className="h-[350px] w-full font-mono text-[11px] leading-relaxed text-slate-300">
        <div className="flex min-w-0 flex-col gap-1 p-3 sm:p-4">
          {logs.length === 0 ? (
            <div className="flex h-60 flex-col items-center justify-center text-center text-slate-500">
              <Terminal className="mb-2 size-8 opacity-40" />
              <p>Terminal output cleared.</p>
              <Button
                size="sm"
                onClick={restoreLogs}
                className="mt-3 bg-emerald-600 text-xs font-semibold text-white shadow-md hover:bg-emerald-700"
              >
                Reload build stream
              </Button>
            </div>
          ) : (
            <>
              {logs.map((item) => (
                <div
                  key={item.line}
                  className="group flex items-start gap-2 rounded-sm px-1.5 py-0.5 transition-colors hover:bg-slate-900/70 sm:gap-3 sm:px-2"
                >
                  <span className="w-5 shrink-0 text-right font-mono text-slate-600 select-none group-hover:text-slate-400">
                    {item.line < 10 ? `0${item.line}` : item.line}
                  </span>
                  <span className="hidden shrink-0 font-mono text-slate-500 select-none sm:inline">
                    {item.timestamp}
                  </span>
                  <span
                    className={`w-14 shrink-0 font-semibold ${
                      item.level === "INFO"
                        ? "text-sky-400"
                        : item.level === "WARN"
                          ? "text-amber-400"
                          : item.level === "SUCCESS"
                            ? "font-bold text-emerald-400"
                            : "font-bold text-rose-400"
                    }`}
                  >
                    [{item.level}]
                  </span>
                  <span
                    className={`min-w-0 flex-1 break-words ${
                      item.level === "SUCCESS"
                        ? "text-emerald-300"
                        : item.level === "ERROR"
                          ? "text-rose-300"
                          : "text-slate-300"
                    }`}
                  >
                    {item.message}
                  </span>
                </div>
              ))}
              {/* Interactive Prompt line at bottom */}
              <div className="mt-2 flex flex-wrap items-center gap-1.5 px-1.5 py-1 font-mono text-emerald-400 sm:gap-2 sm:px-2">
                <span className="font-bold break-all">
                  admin@uiable-build ~/shadcn/internal $
                </span>
                <span className="inline-block h-3.5 w-1.5 shrink-0 animate-pulse bg-emerald-400" />
              </div>
            </>
          )}
        </div>
      </ScrollArea>

      {/* Footer bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 bg-slate-900/60 px-3 py-2 font-mono text-[11px] text-slate-400 sm:px-4">
        <div className="flex min-w-0 items-center gap-1.5 truncate sm:gap-2">
          <span className="shrink-0">Target:</span>
          <span className="truncate text-slate-200">
            win32-x64 / Node v22.1.0
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
          <span className="text-emerald-400">Status: Idle</span>
        </div>
      </div>
    </Card>
  )
}

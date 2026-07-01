"use client"

import {
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

// shadcn
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// third party
import { type BundledLanguage, codeToHtml } from "shiki"

// project
import Loader from "@/components/Loader"
import { cn } from "@/lib/utils"

// assets
import {
  ArrowUpRight,
  Code,
  Copy,
  Loader2,
  Monitor,
  RotateCw,
  Smartphone,
  SquareCheckBig,
  Terminal,
  Tablet,
} from "lucide-react"

export interface Item {
  name: string
  title: string
  description: string
  files: { path: string }[]
  categories: string[]
  rawCode?: string
}

const CodeBlock = memo(
  ({ children, lang }: { children: string; lang: BundledLanguage }) => {
    const [html, setHtml] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [prevProps, setPrevProps] = useState({ children, lang })
    if (prevProps.children !== children || prevProps.lang !== lang) {
      setPrevProps({ children, lang })
      setIsLoading(true)
    }

    useEffect(() => {
      let mounted = true
      setIsLoading(true)
      codeToHtml(children, { lang, theme: "one-dark-pro" }).then((res) => {
        if (mounted) {
          setHtml(res)
          setIsLoading(false)
        }
      })
      return () => {
        mounted = false
      }
    }, [children, lang])

    if (isLoading) {
      return (
        <div className="flex w-full items-center justify-center py-12">
          <Loader2 className="size-6 animate-spin text-white/50" />
        </div>
      )
    }
    return (
      <div
        className="[&_pre]:!m-0 [&_pre]:overflow-visible [&_pre]:!bg-transparent [&_pre]:!p-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
)

CodeBlock.displayName = "CodeBlock"

interface BlockItemProps {
  item: Item
  index: number
  isLast: boolean
  handleCopy: (index: number, code: string) => void
  copiedIndex: number | null
}

//  ------------------------------ | BLOCK ITEM | ------------------------------  //

export default function BlockItem({
  item,
  index,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isLast,
  handleCopy,
  copiedIndex,
}: BlockItemProps) {
  const [viewport, setViewport] = useState("desktop")
  const filePath = item.files[0].path
    .replace(/^src\//, "")
    .replace(/^components\/uiable\//, "")
    .replace(".tsx", "")

  const iframeEl = useRef<HTMLIFrameElement>(null)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [copiedCommand, setCopiedCommand] = useState(false)

  // Set iframe height based on its content
  const setIframeHeight = useCallback(() => {
    const iframe = iframeEl.current
    if (iframe && iframe.contentWindow?.document?.body) {
      const doc = iframe.contentWindow.document
      const height = doc.body.scrollHeight
      if (height > 0) {
        setViewportHeight(height)
      }
    }
  }, [])
  useEffect(() => {
    const iframe = iframeEl.current
    if (!iframe) return

    const handleIframeLoad = () => {
      // Small delay to ensure styles are applied
      setTimeout(setIframeHeight, 150)

      const iframeDoc = iframe.contentWindow?.document?.documentElement
      if (iframeDoc && typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver(() => setIframeHeight())
        resizeObserver.observe(iframeDoc)
        return () => resizeObserver.disconnect()
      }
    }

    iframe.addEventListener("load", handleIframeLoad)
    window.addEventListener("resize", setIframeHeight)

    // Initial check in case it's already loaded
    if (iframe.contentWindow?.document?.readyState === "complete") {
      handleIframeLoad()
    }

    return () => {
      iframe.removeEventListener("load", handleIframeLoad)
      window.removeEventListener("resize", setIframeHeight)
    }
  }, [setIframeHeight])

  // Handle screen size change
  const onScreenChange = () => {
    // Reset height to allow accurate measurement of shrinking content
    setViewportHeight(0)
    // wait for the iframe to reflow then recalculate height
    setTimeout(setIframeHeight, 200)
  }

  // Handle iframe reload
  const handleReload = () => {
    if (iframeEl.current) {
      setIsIframeLoading(true)
      try {
        if (iframeEl.current.contentWindow) {
          iframeEl.current.contentWindow.location.reload()
        } else {
          iframeEl.current.src = iframeEl.current.src
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        iframeEl.current.src = iframeEl.current.src
      }
    }
  }

  // Handle copying shadcn CLI command
  const handleCopyCommand = () => {
    const commandText = `npx shadcn add @uiable/${item.name.replace(/^uiable-/, "")}`
    navigator.clipboard.writeText(commandText)
    setCopiedCommand(true)
    setTimeout(() => setCopiedCommand(false), 2000)
  }

  const handleViewportChange = (value: string[]) => {
    if (value && value.length > 0) {
      setViewport(value[value.length - 1])
      onScreenChange()
    }
  }

  const handleOpenPreview = () => {
    window.open(`/preview/${filePath}`, "_blank")
  }

  const handleCopyClick = () => {
    handleCopy(index, item.rawCode || "")
  }

  const handleIframeLoadEvent = (event: SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.currentTarget
    if (iframe) {
      iframe.removeAttribute("srcdoc")
      setIframeHeight()
      setIsIframeLoading(false)
    }
  }

  return (
    <div className="group/blockshow flex flex-col gap-8">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-8">
        <div className="flex w-full flex-col gap-4">
          <Card className="group/item relative mb-0 overflow-hidden">
            <CardHeader className="py-4">
              <div className="grid grid-cols-3 flex-col items-center justify-between sm:flex-row">
                <div className="flex flex-col gap-1">
                  <h5 className="mb-0 line-clamp-1 text-[18px] font-semibold">
                    {item.title}
                  </h5>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-center">
                  <div className="resize-button-group hidden items-center gap-2 rounded-lg border border-border/50 bg-card p-0.5 lg:inline-flex">
                    <ToggleGroup
                      spacing={1}
                      value={[viewport]}
                      onValueChange={handleViewportChange}
                    >
                      <Tooltip>
                        <TooltipTrigger
                          render={<span className="inline-block w-fit" />}
                        >
                          <ToggleGroupItem
                            value="desktop"
                            aria-label="desktop"
                            className="aria-pressed:bg-primary/10 aria-pressed:text-primary"
                          >
                            <Monitor />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Desktop</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger
                          render={<span className="inline-block w-fit" />}
                        >
                          <ToggleGroupItem
                            value="tablet"
                            aria-label="tablet"
                            className="aria-pressed:bg-primary/10 aria-pressed:text-primary"
                          >
                            <Tablet />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Tablet</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger
                          render={<span className="inline-block w-fit" />}
                        >
                          <ToggleGroupItem
                            value="mobile"
                            aria-label="mobile"
                            className="aria-pressed:bg-primary/10 aria-pressed:text-primary"
                          >
                            <Smartphone />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Mobile</p>
                        </TooltipContent>
                      </Tooltip>
                    </ToggleGroup>
                  </div>
                  <div className="resize-button-group hidden items-center gap-2 rounded-lg border border-border/50 bg-card p-0.5 lg:inline-flex">
                    <Tooltip>
                      <TooltipTrigger
                        render={<span className="inline-block w-fit" />}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-card"
                          onClick={handleOpenPreview}
                        >
                          <ArrowUpRight className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open in new window</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger
                        render={<span className="inline-block w-fit" />}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-card"
                          onClick={handleReload}
                        >
                          <RotateCw className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Reload</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={handleCopyCommand}
                    variant="outline"
                    className="gap-1.5 border-border/80 bg-card"
                  >
                    {copiedCommand ? (
                      <SquareCheckBig className="size-4 text-green-500" />
                    ) : (
                      <Terminal className="size-4" />
                    )}{" "}
                    npx shadcn add @uiable/{item.name.replace(/^uiable-/, "")}
                  </Button>
                  <Tooltip>
                    <TooltipTrigger
                      render={<span className="inline-block w-fit" />}
                    >
                      <Button
                        onClick={handleCopyClick}
                        variant="outline"
                        size="icon-lg"
                        className="size-10 gap-1.5 border-border/80 bg-card"
                      >
                        {copiedIndex === index ? (
                          <SquareCheckBig className="size-4 text-green-500" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy code</p>
                    </TooltipContent>
                  </Tooltip>
                  <Dialog>
                    <Tooltip>
                      <TooltipTrigger
                        render={<span className="inline-block w-fit" />}
                      >
                        <DialogTrigger
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "icon-lg",
                            }),
                            "size-10 border-border/80 bg-card"
                          )}
                        >
                          <Code className="size-4" />
                        </DialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View code</p>
                      </TooltipContent>
                    </Tooltip>
                    <DialogContent className="flex max-h-[95vh] w-full flex-col gap-0 overflow-hidden p-6 sm:max-w-5xl">
                      <DialogHeader className="gap-1 pb-5">
                        <DialogTitle className="text-[16px] font-semibold">
                          {item.title} Code
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#282c34]">
                        <div className="flex w-full flex-none items-center justify-between border-b border-white/10 px-4 py-2">
                          <span className="text-xs font-medium tracking-wider text-white uppercase">
                            TSX
                          </span>
                          <Button
                            variant="ghost"
                            size="icon-lg"
                            className="text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            onClick={handleCopyClick}
                          >
                            {copiedIndex === index ? (
                              <SquareCheckBig className="size-4 text-green-500" />
                            ) : (
                              <Copy className="size-4" />
                            )}
                          </Button>
                        </div>
                        <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                          {item.rawCode ? (
                            <CodeBlock lang="tsx">{item.rawCode}</CodeBlock>
                          ) : (
                            <div className="py-10 text-center text-white/50">
                              No code available.
                            </div>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full overflow-hidden bg-background/80 p-0">
                <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(-45deg,var(--color-border)_0,var(--color-border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] opacity-50"></div>
                <div
                  className={cn(
                    "relative z-20 mx-auto min-h-10 w-full overflow-hidden bg-card shadow-[0_0_24px_0_#1b2e5e17]",
                    viewport === "tablet" && "max-w-212.5",
                    viewport === "mobile" && "max-w-106.25"
                  )}
                >
                  {isIframeLoading && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-card/80 backdrop-blur-sm">
                      <Loader />
                    </div>
                  )}
                  <iframe
                    src={`/preview/${filePath}`}
                    className={cn(
                      "w-full border-0 transition-opacity duration-300",
                      isIframeLoading ? "opacity-0" : "opacity-100"
                    )}
                    id={item.title}
                    ref={iframeEl}
                    title={item.title}
                    onLoad={handleIframeLoadEvent}
                    style={{
                      height: viewportHeight || "100%",
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

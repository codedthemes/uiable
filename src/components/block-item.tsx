"use client"

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"

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

// third-party
import { cn } from "cn"
import { codeToHtml, type BundledLanguage } from "shiki"

// project-imports
import Loader from "@/components/Loader"
import { TreeView, type TreeViewFileItem } from "@/components/tree-view"
import { fetchFileSource } from "@/lib/pro-client"
import { buildFileTree } from "@/lib/tree-view-utils"
import { toPreviewSlug } from "@/utils/preview-slug"

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
  Tablet,
  Terminal,
} from "lucide-react"

// types

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

    useEffect(() => {
      let mounted = true

      queueMicrotask(() => {
        if (mounted) {
          setIsLoading(true)
        }
      })

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
  handleCopy,
  copiedIndex,
}: BlockItemProps) {
  const [viewport, setViewport] = useState("desktop")
  const filePath = item.files[0].path
    .replace(/^src\//, "")
    .replace(/^components\/uiable\//, "")
    .replace(".tsx", "")
  // Collapse the duplicated trailing segment so the preview URL reads
  // `/preview/cta/cta-13` instead of `/preview/cta/cta-13/cta-13`.
  const previewSlug = toPreviewSlug(filePath)

  const iframeEl = useRef<HTMLIFrameElement>(null)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [copiedCommand, setCopiedCommand] = useState(false)

  const defaultFilePath = item.files?.[0]?.path || ""
  const [selectedFilePath, setSelectedFilePath] =
    useState<string>(defaultFilePath)
  const [isLoadingCode, setIsLoadingCode] = useState<boolean>(false)
  const [codeCache, setCodeCache] = useState<Record<string, string>>(() => {
    return item.rawCode && defaultFilePath
      ? { [defaultFilePath]: item.rawCode }
      : {}
  })

  const fileTreeData = useMemo(
    () => buildFileTree(item.files.map((f) => f.path)),
    [item.files]
  )

  const handleFileSelect = async (treeItem: TreeViewFileItem) => {
    const path = treeItem.path || treeItem.name
    setSelectedFilePath(path)

    if (codeCache[path]) return

    setIsLoadingCode(true)
    const code = await fetchFileSource(item.name, path)
    if (code) {
      setCodeCache((prev) => ({ ...prev, [path]: code }))
    }
    setIsLoadingCode(false)
  }

  const sourceCode = codeCache[selectedFilePath] || ""

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

  const syncThemeToIframe = useCallback(() => {
    const iframe = iframeEl.current
    if (!iframe?.contentWindow) return
    iframe.contentWindow.postMessage(
      {
        type: "uiable-theme-sync",
        htmlClass: document.documentElement.className,
        bodyClass: document.body.className,
        bodyStyle: document.body.style.cssText,
      },
      "*"
    )
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

  // Sync parent theme classes into the iframe whenever they change
  useEffect(() => {
    const observer = new MutationObserver(syncThemeToIframe)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })
    return () => observer.disconnect()
  }, [syncThemeToIframe])

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

  const installCommand = `npx shadcn add @uiable/${item.name.replace(/^uiable-/, "")}`

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(installCommand)
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
    window.open(`/preview/${previewSlug}`, "_blank")
  }

  const handleCopyClick = () => {
    handleCopy(index, sourceCode)
  }

  const handleIframeLoadEvent = (
    event: React.SyntheticEvent<HTMLIFrameElement>
  ) => {
    const iframe = event.currentTarget
    if (iframe) {
      iframe.removeAttribute("srcdoc")
      setIframeHeight()
      setIsIframeLoading(false)
      syncThemeToIframe()
    }
  }

  return (
    <div className="group/blockshow flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex w-full flex-col gap-4">
          <Card className="group/item relative mb-0 overflow-hidden">
            <CardHeader className="py-4">
              <div className="grid grid-cols-3 flex-col items-center justify-between sm:flex-row">
                <div className="flex flex-row items-center gap-2">
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
                  <Tooltip>
                    <TooltipTrigger
                      render={<span className="inline-block w-fit" />}
                    >
                      <Button
                        onClick={handleCopyCommand}
                        variant="outline"
                        className="gap-1.5 border-border/80 bg-card max-2xl:size-10"
                      >
                        {copiedCommand ? (
                          <SquareCheckBig className="size-4 text-green-500" />
                        ) : (
                          <Terminal className="size-4" />
                        )}{" "}
                        <span className="max-2xl:hidden">{installCommand}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy CLI Command</p>
                    </TooltipContent>
                  </Tooltip>
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
                    <DialogContent className="flex max-h-[95vh] w-full flex-col gap-0 overflow-hidden p-6 sm:max-w-[calc(100%-2rem)] xl:max-w-5xl">
                      <DialogHeader className="gap-1 pb-5">
                        <DialogTitle className="text-[16px] font-semibold">
                          {item.title} Code
                        </DialogTitle>
                      </DialogHeader>
                      <div className="dark flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[#282c34] md:flex-row">
                        {item.files.length > 1 &&
                          fileTreeData &&
                          fileTreeData.length > 0 && (
                            <div className="flex w-full shrink-0 flex-col border-b border-white/10 md:w-[240px] md:border-r md:border-b-0">
                              <div className="flex w-full flex-none items-center justify-between border-b border-white/10 px-4 py-4.5">
                                <span className="text-xs font-medium tracking-wider text-white uppercase">
                                  Files
                                </span>
                              </div>
                              <div className="max-h-[200px] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-y-auto p-2 md:max-h-none md:flex-1">
                                <TreeView
                                  data={fileTreeData}
                                  selected={selectedFilePath}
                                  onSelect={handleFileSelect}
                                  className="text-white/70 [&_button]:bg-transparent! [&_button]:text-white/70 [&_button:hover]:bg-white/10 [&_button:hover]:text-white"
                                />
                              </div>
                            </div>
                          )}

                        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                          <div className="flex w-full flex-none items-center justify-between border-b border-white/10 px-4 py-2">
                            <span className="text-xs font-medium tracking-wider text-white">
                              {selectedFilePath.split("/").pop()}
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
                          <div className="min-h-[80vh] flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                            {isLoadingCode ? (
                              <div className="flex h-full w-full items-center justify-center py-12">
                                <Loader2 className="size-6 animate-spin text-white/50" />
                              </div>
                            ) : sourceCode ? (
                              <CodeBlock lang="tsx">{sourceCode}</CodeBlock>
                            ) : (
                              <div className="py-10 text-center text-white/50">
                                No code available for{" "}
                                {selectedFilePath.split("/").pop()}.
                              </div>
                            )}
                          </div>
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
                    src={`/preview/${previewSlug}`}
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

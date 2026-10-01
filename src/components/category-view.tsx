"use client"

import { memo, useEffect, useMemo, useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// third-party
import { codeToHtml, type BundledLanguage } from "shiki"

// project-imports
import { categories } from "@/components-grid"
import { cn } from "@/lib/utils"

// assets
import { Code, Copy, Loader2, SquareCheckBig } from "lucide-react"

// types
interface Item {
  name: string
  title: string
  description: string
  files: { path: string }[]
  categories: string[]
  badge?:
    | boolean
    | string
    | {
        label: string
      }
  rawCode?: string
  type?: string
}

interface CategoryViewProps {
  category: string
  items: Item[]
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

interface DynamicItemProps {
  filePath: string
  isBlock: boolean
}

function DynamicItem({ filePath, isBlock }: DynamicItemProps) {
  const [Comp, setComp] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const mod = isBlock
          ? await import(`./uiable/blocks/${filePath}.tsx`)
          : await import(`./uiable/${filePath}.tsx`)
        if (mounted) {
          // Explicitly handle default and named exports
          const component =
            mod.default ||
            mod.Component ||
            Object.values(mod).find((v) => typeof v === "function")
          setComp(() => component)
        }
      } catch (err) {
        console.error("Dynamic import failed for", filePath, err)
        if (mounted) {
          // eslint-disable-next-line react/display-name
          setComp(() => () => (
            <div className="rounded border p-4 text-sm text-destructive">
              Component not found: {filePath}
            </div>
          ))
        }
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [filePath, isBlock])

  if (!Comp) {
    return (
      <div className="h-20 w-full animate-pulse rounded-md bg-background" />
    )
  }

  return <Comp />
}

//  ------------------------------ | COMPONENT - CATEGORY ITEM | ------------------------------  //

interface CategoryItemProps {
  item: Item
  index: number
  category: string
}

function CategoryItem({ item, index, category }: CategoryItemProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedCommandIndex, setCopiedCommandIndex] = useState<number | null>(
    null
  )

  const [code] = useState<string>(item.rawCode || "")

  const filePath = item.files[0].path
    .replace(/^src\//, "")
    .replace(/^components\/uiable\//, "")
    .replace(".tsx", "")

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  const commands = {
    pnpm: {
      cli: "pnpm",
      command: `pnpm dlx shadcn@latest add ${baseUrl}/r/${item.name}.json`,
    },
    npm: {
      cli: "npm",
      command: `npx shadcn@latest add ${baseUrl}/r/${item.name}.json`,
    },
    yarn: {
      cli: "yarn",
      command: `yarn shadcn@latest add ${baseUrl}/r/${item.name}.json`,
    },
    bun: {
      cli: "bun",
      command: `bunx --bun shadcn@latest add ${baseUrl}/r/${item.name}.json`,
    },
  }

  const handleCopy = (idx: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(idx)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleCopyCommand = (idx: number, arg1: string): void => {
    navigator.clipboard.writeText(arg1)
    setCopiedCommandIndex(idx)
    setTimeout(() => setCopiedCommandIndex(null), 2000)
  }

  return (
    <Card
      id={item.name}
      className="group/item mb-0 scroll-mt-24 overflow-hidden"
    >
      <CardHeader className="py-3">
        <div className="flex flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <h5 className="mb-0 line-clamp-1 text-[16px] font-semibold">
              {item.title}
            </h5>
            {item.badge && (
              <Badge className="border-transparent bg-red-500/15 text-red-500">
                {typeof item.badge === "boolean"
                  ? "New"
                  : typeof item.badge === "string"
                    ? item.badge
                    : item.badge.label}
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-end gap-1">
            <div className="flex justify-end gap-2">
              <a
                href={`https://v0.dev/chat/api/open?url=https://uiable.com/r/${item.name}.json`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "gap-1.5 border-none bg-transparent"
                )}
              >
                <svg
                  className="size-4 text-current"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <Button
                onClick={() => handleCopy(index, code)}
                variant="outline"
                size="icon"
                className="gap-1.5 border-none bg-transparent"
              >
                {copiedIndex === index ? (
                  <SquareCheckBig className="size-4 text-green-500" />
                ) : (
                  <Copy className="size-4" />
                )}{" "}
              </Button>
              <Dialog>
                <DialogTrigger
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "gap-1.5 border-none bg-transparent"
                  )}
                >
                  <Code className="size-4" />
                </DialogTrigger>
                <DialogContent className="flex max-h-[95vh] w-full flex-col gap-0 overflow-hidden p-6 sm:max-w-5xl">
                  <div className="mb-3 text-[16px] font-semibold">
                    CLI Command
                  </div>
                  <Tabs
                    defaultValue={Object.keys(commands)[0]}
                    className="w-full"
                  >
                    <TabsList
                      variant="line"
                      className="border-b-border-border h-auto max-h-10! w-full justify-start gap-1 rounded-b-none border-b bg-transparent p-0 *:flex-none"
                    >
                      {Object.entries(commands).map(([key, value]) => (
                        <TabsTrigger
                          key={key}
                          value={key}
                          className="rounded-b-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                        >
                          {value.cli}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <div className="mb-4">
                      {Object.entries(commands).map(([key, value]) => (
                        <TabsContent key={key} value={key}>
                          <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                            <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                              {value.command ? (
                                <div className="flex items-center justify-between">
                                  <CodeBlock lang="bash">
                                    {value.command}
                                  </CodeBlock>
                                  <Button
                                    variant="ghost"
                                    size="icon-lg"
                                    className="text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                    onClick={() =>
                                      handleCopyCommand(
                                        index,
                                        value.command || ""
                                      )
                                    }
                                  >
                                    {copiedCommandIndex === index ? (
                                      <SquareCheckBig className="size-4 text-green-500" />
                                    ) : (
                                      <Copy className="size-4" />
                                    )}
                                  </Button>
                                </div>
                              ) : (
                                <div className="py-10 text-center text-white/50">
                                  No code available.
                                </div>
                              )}
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </div>
                  </Tabs>
                  <div className="mt-4 mb-3 text-[16px] font-semibold">
                    Code
                  </div>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="flex w-full flex-none items-center justify-between border-b border-white/10 px-4 py-2">
                      <span className="text-xs font-medium tracking-wider text-white uppercase">
                        TSX
                      </span>
                      <Button
                        variant="ghost"
                        size="icon-lg"
                        className="text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        onClick={() => handleCopy(index, code)}
                      >
                        {copiedIndex === index ? (
                          <SquareCheckBig className="size-4 text-green-500" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </div>
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      {code ? (
                        <CodeBlock lang="tsx">{code}</CodeBlock>
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
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div
          className={cn(
            "flex min-h-30 items-center justify-center rounded-[12px] p-4",
            category === "sidebar" && "isolate block h-[500px] overflow-auto"
          )}
        >
          <DynamicItem
            filePath={filePath}
            isBlock={item.type === "registry:block"}
          />
        </div>
      </CardContent>
    </Card>
  )
}

//  ------------------------------ | COMPONENT - CATEGORY VIEW | ------------------------------  //

export default function CategoryView({ category, items }: CategoryViewProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 0)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" })
    }, 100)
    return () => clearTimeout(timer)
  }, [mounted])

  const activeCategory = useMemo(
    () => categories.find((c) => c.slug === category),
    [category]
  )
  const breakpoints = activeCategory?.breakpoints || {}
  const { xs = 1, sm, md, lg, xl, xxl } = breakpoints

  const [columns, setColumns] = useState<number>(
    xxl ?? xl ?? lg ?? md ?? sm ?? xs
  )

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setColumns(xxl ?? xl ?? lg ?? md ?? sm ?? xs)
      else if (width >= 1280) setColumns(lg ?? md ?? sm ?? xs)
      else if (width >= 1024) setColumns(lg ?? md ?? sm ?? xs)
      else if (width >= 768) setColumns(md ?? sm ?? xs)
      else if (width >= 640) setColumns(sm ?? xs)
      else setColumns(xs)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints, xs, sm, md, lg, xl])

  if (!mounted) return null

  return (
    <div
      className="mb-0 grid items-start gap-5"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item, index) => (
        <CategoryItem
          key={item.name}
          item={item}
          index={index}
          category={category}
        />
      ))}
    </div>
  )
}

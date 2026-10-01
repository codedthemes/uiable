"use client"

import { memo, useEffect, useState } from "react"

// next
import Link from "next/link"

// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// third-party
import { codeToHtml, type BundledLanguage } from "shiki"

// project-imports
import branding from "@/branding.json"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// assets
import {
  Blocks as BlocksIcon,
  ClipboardCopy,
  Copy,
  Search,
  SquareCheckBig,
  Terminal,
} from "lucide-react"

// constant
const tocItems = [
  { title: "Overview", url: "#overview" },
  { title: "Browsing the Catalog", url: "#browse" },
  { title: "Installing Blocks", url: "#free" },
  { title: "Manual Copy & Paste", url: "#manual" },
]

const CodeBlock = memo(
  ({ children, lang }: { children: string; lang: BundledLanguage }) => {
    const [html, setHtml] = useState<string>("")
    const [copied, setCopied] = useState(false)

    useEffect(() => {
      let mounted = true
      codeToHtml(children, { lang, theme: "slack-dark" }).then((res) => {
        if (mounted) setHtml(res)
      })
      return () => {
        mounted = false
      }
    }, [children, lang])

    const handleCopy = () => {
      navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="group/code relative flex w-full items-center justify-between">
        <div
          className="grow [&_pre]:!m-0 [&_pre]:overflow-visible [&_pre]:!bg-transparent [&_pre]:!p-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-1 right-0 shrink-0 border-none bg-transparent text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? (
            <SquareCheckBig className="size-4 text-green-500" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      </div>
    )
  }
)

CodeBlock.displayName = "CodeBlock"

//  ------------------------------ | PAGE - BLOCKS | ------------------------------  //

export default function BlocksPageClient() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="blocks" className="mb-8 scroll-mt-24 space-y-8">
                <div className="space-y-4" id="overview">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Using Blocks
                  </h4>
                  <p className="text-muted-foreground">
                    {branding.brandName} blocks are ready-made, page-level
                    sections — heroes, pricing tables, footers, sign-up forms,
                    and more — that drop straight into a page. This guide covers
                    browsing the catalog and installing blocks.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <BlocksIcon className="size-5.5 shrink-0" />
                  <AlertTitle>Free and open source</AlertTitle>
                  <AlertDescription>
                    Every block installs instantly with no account or token
                    required.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="browse">
                  <div className="mb-2 flex items-center gap-2">
                    <Search className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Browsing the Catalog
                    </h5>
                  </div>
                  <p>
                    Browse the full set at{" "}
                    <Link
                      href="/blocks"
                      className="text-primary hover:underline"
                    >
                      /blocks
                    </Link>
                    , filterable by category (hero, pricing, footer, forms,
                    e-commerce, and more). Every card has a live, resizable
                    preview, a <b>Copy CLI Command</b> button, and a{" "}
                    <b>View code</b> dialog so you can inspect the source before
                    installing it.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="free">
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Installing Blocks
                    </h5>
                  </div>
                  <p>
                    Every block installs directly — no account or token needed:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="bash">{`npx shadcn add @uiable/hero-15`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="manual">
                  <div className="mb-2 flex items-center gap-2">
                    <ClipboardCopy className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Manual Copy & Paste
                    </h5>
                  </div>
                  <p>
                    Prefer not to use the CLI? Click <b>Copy code</b> or open{" "}
                    <b>View code</b> on any block's card and paste it into your
                    project under{" "}
                    <code className="rounded bg-muted px-1 py-0.5">
                      src/components/uiable/[category]/[block-name].tsx
                    </code>
                    .
                  </p>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Components",
                  url: "/doc/components",
                }}
                nextItem={{
                  name: "MCP",
                  url: "/doc/mcp",
                }}
              />
            </div>
            <Separator orientation="vertical" className="max-xl:hidden" />
            <div className="hidden w-sidebar-width shrink-0 xl:block">
              <div className="sticky top-20">
                <Card className="border-0 bg-transparent">
                  <CardHeader className="px-0 py-3">
                    <h5>On this page</h5>
                  </CardHeader>
                  <CardContent className="px-0 py-3">
                    <TableOfContents items={tocItems} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { memo, useEffect, useState } from "react"
// project
import branding from "@/branding.json"
// assets
import { Book, InfoCircle, Magicpen, Setting2 } from "iconsax-reactjs"
import { Copy, SquareCheckBig } from "lucide-react"
// third party
import { codeToHtml, type BundledLanguage } from "shiki"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// constants
const tocItems = [
  { title: "Prerequisites", url: "#prerequisites" },
  { title: "Dependencies", url: "#dependencies" },
  { title: "Tailwind Config", url: "#config" },
  { title: "Project Structure", url: "#structure" },
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

//  ------------------------------ | PAGE - INSTALLATION | ------------------------------  //

export default function InstallationPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section
                id="installation"
                className="mb-8 scroll-mt-24 space-y-8"
              >
                <div className="space-y-4">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Installation Guide
                  </h4>
                  <p className="text-muted-foreground">
                    {branding.brandName} is built on top of Shadcn UI and Base
                    UI primitives. Follow this guide to set up the foundation
                    for your premium dashboard projects.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <InfoCircle className="size-5.5 shrink-0" variant="Bulk" />
                  <AlertTitle>Requirement</AlertTitle>
                  <AlertDescription>
                    {branding.brandName} is optimized for <b>Next.js 16+</b> or{" "}
                    <b>Vite 6+</b> with <b>React 19</b> and{" "}
                    <b>Tailwind CSS v4</b>.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="prerequisites">
                  <div className="mb-2 flex items-center gap-2">
                    <Setting2
                      className="size-5 text-muted-foreground"
                      variant="Bulk"
                    />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      1. Initial Setup
                    </h5>
                  </div>
                  <p>
                    Start by creating a new Next.js project if you haven't
                    already:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="bash">
                          npx create-next-app@latest my-uiable-app --typescript
                          --tailwind --eslint
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="dependencies">
                  <div className="mb-2 flex items-center gap-2">
                    <Magicpen
                      className="size-5 text-muted-foreground"
                      variant="Bulk"
                    />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      2. Required Dependencies
                    </h5>
                  </div>
                  <p>
                    {branding.brandName} components rely on a small set of
                    highly performant packages for icons, animations, and
                    utility functions:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="bash">
                          npm install iconsax-reactjs framer-motion clsx
                          tailwind-merge lucide-react class-variance-authority
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    We use `iconsax-reactjs` for our premium icon sets and
                    `framer-motion` for complex transitions.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="config">
                  <div className="mb-2 flex items-center gap-2">
                    <Book
                      className="size-5 text-muted-foreground"
                      variant="Bulk"
                    />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      3. Tailwind Configuration (Tailwind CSS v4)
                    </h5>
                  </div>
                  <p>
                    With Tailwind CSS v4, configuration is CSS-first. Update
                    your global CSS file (e.g.,{" "}
                    <code className="rounded bg-muted px-1 py-0.5">
                      src/app/globals.css
                    </code>
                    ) to define design tokens, colors, and keyframes using the{" "}
                    <code className="rounded bg-muted px-1 py-0.5">@theme</code>{" "}
                    directive:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="css">{`@import "tailwindcss";
@theme {
  --color-primary: #4680ff;
  --spacing-sidebar-width: 280px;
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="structure">
                  <h4 className="group relative mb-2 scroll-mt-20 font-semibold tracking-tight">
                    Recommended Structure
                  </h4>
                  <p>
                    To keep your project organized, we suggest following this
                    folder structure for {branding.brandName} integration:
                  </p>
                  <ul className="list-disc space-y-2 ps-8">
                    <li>
                      <code className="rounded bg-muted px-1 py-0.5">
                        components/ui
                      </code>{" "}
                      - Base Shadcn primitives.
                    </li>
                    <li>
                      <code className="rounded bg-muted px-1 py-0.5">
                        components/uiable
                      </code>{" "}
                      - {branding.brandName} specific components and sections.
                    </li>
                    <li>
                      <code className="rounded bg-muted px-1 py-0.5">
                        hooks/uiable
                      </code>{" "}
                      - Custom interaction hooks.
                    </li>
                    <li>
                      <code className="rounded bg-muted px-1 py-0.5">
                        lib/utils.ts
                      </code>{" "}
                      - Standard Tailwind merge utility.
                    </li>
                  </ul>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Introduction",
                  url: "/doc/introduction",
                }}
                nextItem={{
                  name: "Shadcn CLI",
                  url: "/doc/cli",
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

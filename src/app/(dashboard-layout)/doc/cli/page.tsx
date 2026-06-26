"use client"

import { memo, useEffect, useState } from "react"
// project
import branding from "@/branding.json"
// assets
import {
  CheckCircle2,
  Copy,
  Info,
  Settings,
  SquareCheckBig,
  Terminal,
} from "lucide-react"
// third party
import { codeToHtml, type BundledLanguage } from "shiki"

// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// constants
const tocItems = [
  { title: "Overview", url: "#overview" },
  { title: "Configuration", url: "#configuration" },
  { title: "Usage", url: "#usage" },
  { title: "Benefits", url: "#benefits" },
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

//  ------------------------------ | PAGE - SHADCN CLI | ------------------------------  //

export default function ShadcnCliPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="cli" className="mb-8 scroll-mt-24 space-y-8">
                <div className="space-y-4">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Shadcn CLI Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Learn how to configure your project to copy and paste{" "}
                    {branding.brandName}
                    components directly via the command line.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <Terminal className="size-5.5 shrink-0" />
                  <AlertTitle>CLI Support</AlertTitle>
                  <AlertDescription>
                    {branding.brandName} provides a fully compatible Shadcn
                    registry endpoint that integrates natively with the new
                    Shadcn CLI.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="overview">
                  <div className="mb-2 flex items-center gap-2">
                    <Info className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Overview
                    </h5>
                  </div>
                  <p>
                    Rather than manually copying files and installing imports,
                    you can configure the <b>Shadcn CLI</b> to resolve{" "}
                    {branding.brandName}
                    components. Using custom registries allows you to bring
                    {branding.brandName} variants into your project with a
                    single command.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="configuration">
                  <div className="mb-2 flex items-center gap-2">
                    <Settings className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      1. Registry Configuration
                    </h5>
                  </div>
                  <p>
                    To point the Shadcn CLI to the {branding.brandName}{" "}
                    registry, add the <b>@uiable</b> namespace under the{" "}
                    <b>registries</b> field in your <b>components.json</b> file
                    at the root of your project:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="json">{`{
  "registries": {
    "@uiable": "https://uiable.com/r/{name}.json"
  }
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="usage">
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      2. Usage & Installation
                    </h5>
                  </div>
                  <p>
                    Once configured, you can install any {branding.brandName}{" "}
                    component by referencing the <b>@uiable</b> namespace. For
                    example, to add the basic accordion, run:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="bash">{`npx shadcn add @uiable/accordion-basic`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    This command will automatically download the component code,
                    resolve its primitive dependencies, and output the component
                    to your designated {branding.brandName} directory.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="benefits">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Benefits of using the CLI
                    </h5>
                  </div>
                  <ul className="list-disc space-y-3 ps-8">
                    <li>
                      <b>Dependency Auto-Resolution</b>: The CLI automatically
                      detects and installs required packages (like{" "}
                      <b>lucide icon</b> or <b>@base-ui/react</b>) if they are
                      missing.
                    </li>
                    <li>
                      <b>Path Customization</b>: Installs components according
                      to the aliases configured in your local{" "}
                      <b>components.json</b> file.
                    </li>
                    <li>
                      <b>Clean Setup</b>: Automatically pulls in any
                      sub-primitives (e.g., from your own <b>components/ui</b>)
                      if the component requires them.
                    </li>
                  </ul>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Installation",
                  url: "/doc/installation",
                }}
                nextItem={{
                  name: "Components",
                  url: "/doc/components",
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

"use client"

import { memo, useEffect, useState } from "react"
// project
import branding from "@/branding.json"
// assets
import {
  BookOpen,
  ClipboardCopy,
  Code,
  Copy,
  Sparkles,
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
  { title: "CLI Method (Recommended)", url: "#cli-method" },
  { title: "Manual Copy-Paste Method", url: "#manual-method" },
  { title: "Usage Example", url: "#usage" },
  { title: "Customization", url: "#customization" },
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

//  ------------------------------ | PAGE - COMPONENTS | ------------------------------  //

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="components" className="mb-8 scroll-mt-24 space-y-8">
                <div className="space-y-4">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    Using {branding.brandName} Components
                  </h4>
                  <p className="text-muted-foreground">
                    {branding.brandName} components are exported directly into
                    your project's codebase as raw source files. Learn how to
                    install and integrate them.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <Sparkles className="size-5.5 shrink-0" />
                  <AlertTitle>Developer Freedom</AlertTitle>
                  <AlertDescription>
                    Because {branding.brandName} components are not locked
                    inside an NPM package, you have 100% control over the DOM
                    structure, React logic, and styling from day one.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="overview">
                  <div className="mb-2 flex items-center gap-2">
                    <BookOpen className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Overview
                    </h5>
                  </div>
                  <p>
                    There are two main ways to integrate {branding.brandName}{" "}
                    components into your application:
                  </p>
                  <ol className="list-decimal space-y-2 ps-8">
                    <li>
                      <b>Using the Shadcn CLI</b> (Recommended): Installs
                      components and their dependencies automatically with one
                      command.
                    </li>
                    <li>
                      <b>Manual Copy-Paste</b>: Manually creating files and
                      installing dependencies if you prefer full control over
                      the file paths and setups.
                    </li>
                  </ol>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="cli-method">
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Method 1: Shadcn CLI (Recommended)
                    </h5>
                  </div>
                  <p>
                    If you have configured the <b>@uiable</b> namespace in your{" "}
                    <b>components.json</b> file, you can install any component
                    via the Shadcn CLI.
                  </p>
                  <p>
                    For example, to install the borders variant of the
                    accordion, run:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="bash">{`npx shadcn add @uiable/accordion-borders`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    This automatically downloads <b>accordion-borders.tsx</b>,
                    copies the primitive <b>accordion.tsx</b> into your{" "}
                    <b>components/ui/</b> folder (if not already present), and
                    installs any required npm packages.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="manual-method">
                  <div className="mb-2 flex items-center gap-2">
                    <ClipboardCopy className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Method 2: Manual Copy & Paste
                    </h5>
                  </div>
                  <p>
                    If you prefer not to use the CLI, you can add components
                    manually:
                  </p>
                  <ul className="list-disc space-y-2 ps-8 text-sm">
                    <li>
                      <b>Browse</b> to the component in the {branding.brandName}{" "}
                      Catalog.
                    </li>
                    <li>
                      Click the <b>Copy Code</b> button on the variant page.
                    </li>
                    <li>
                      Create a new file in your project under{" "}
                      <b>src/components/uiable/[category]/[variant-name].tsx</b>{" "}
                      and paste the code.
                    </li>
                    <li>
                      Ensure you have installed the required dependencies (such
                      as <b>@base-ui/react</b> or <b>framer-motion</b>) and
                      configured the theme variables as outlined in the{" "}
                      <b>Installation Guide</b>.
                    </li>
                  </ul>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="usage">
                  <div className="mb-2 flex items-center gap-2">
                    <Code className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Importing and Usage
                    </h5>
                  </div>
                  <p>
                    Once a component is placed in your workspace, you can import
                    and use it in your React pages:
                  </p>
                  <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="min-h-0 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overflow-auto p-4 text-[14px] leading-relaxed">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="tsx">{`import AccordionBorders from "@/components/uiable/accordion/accordion-borders";

export default function MyPage() {
  return (
    <div className="p-6">
      <AccordionBorders />
    </div>
  );
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="customization">
                  <h4 className="group relative mb-2 scroll-mt-20 font-semibold tracking-tight">
                    Customization
                  </h4>
                  <p>
                    All component variants are defined directly within each
                    component's file using the{" "}
                    <b>Class Variance Authority (CVA)</b> definition. Following
                    the modular "open code" philosophy, each variant file
                    remains completely portable. This allows you to modify
                    styles, customize states, or adjust DOM structure for any
                    individual component without impacting other parts of the
                    project.
                  </p>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Shadcn CLI",
                  url: "/doc/cli",
                }}
                nextItem={null}
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

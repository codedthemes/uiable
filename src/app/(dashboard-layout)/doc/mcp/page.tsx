// next
import { Metadata } from "next"

// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// project-imports
import branding from "@/branding.json"
import DocsNavigation from "@/components/doc-bottom-nav"
import TableOfContents from "@/components/uiable/layout/table-of-contents"

// assets
import { Bot, Code, Sparkles, Terminal } from "lucide-react"

// constant
export const metadata: Metadata = {
  title: `MCP - ${branding.brandName}`,
  description: `Wire the ${branding.brandName} MCP server into your AI client to browse, search, and install components, blocks, and templates.`,
  alternates: {
    canonical: "/doc/mcp",
  },
}

const tocItems = [
  { title: "Overview", url: "#overview" },
  { title: "Wire into a client", url: "#wire" },
  { title: "Tools", url: "#tools" },
  { title: "Resources and Prompts", url: "#resources" },
  { title: "Pro Items", url: "#pro" },
  { title: "Configuration", url: "#configuration" },
]

//  ------------------------------ | PAGE - MCP | ------------------------------  //

export default function McpPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="mcp" className="mb-8 scroll-mt-24 space-y-8">
                <div className="space-y-4">
                  <h4 className="group relative mb-2 scroll-mt-20">
                    MCP Integration
                  </h4>
                  <p className="text-muted-foreground">
                    {branding.brandName} supports seamless integration with the
                    Model Context Protocol (MCP). We provide a separate package{" "}
                    <code>@codedthemes/uiable-mcp</code> that exposes tools so
                    AI assistants (Claude Code, Cursor, VS Code, etc.) can
                    discover, install, and generate UI from {branding.brandName}{" "}
                    blocks via natural language.
                  </p>
                </div>

                <Alert className="border-blue-500 bg-blue-500/10 text-blue-800">
                  <Sparkles className="size-5.5 shrink-0" />
                  <AlertTitle>Layer 2 Custom Server</AlertTitle>
                  <AlertDescription>
                    This is our "Layer 2" custom server. Layer 1 (the standard 7
                    registry tools) comes for free from{" "}
                    <code>npx shadcn@latest mcp</code> once you have{" "}
                    {branding.brandName} configured.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="overview">
                  <div className="mb-2 flex items-center gap-2">
                    <Bot className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Overview
                    </h5>
                  </div>
                  <p>
                    Published as{" "}
                    <a
                      href="https://www.npmjs.com/package/@codedthemes/uiable-mcp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @codedthemes/uiable-mcp
                    </a>
                    . It speaks MCP 2026-07-28 and every 2025-era revision from
                    the same binary.
                    <code>serveStdio</code> decides the era per connection, so
                    older clients connect exactly as they always did.
                  </p>
                  <p>
                    Most clients don't need a separate install step — the{" "}
                    <code>npx -y</code> config below fetches it on demand. If
                    you'd rather add it as an explicit dependency (for a pinned
                    version, offline use, or a custom script), install the
                    package directly with npm:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm text-foreground">
                    <code>npm i @codedthemes/uiable-mcp</code>
                  </pre>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="wire">
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Wire into a client
                    </h5>
                  </div>
                  <p>
                    To connect the MCP, add the following to your AI assistant's
                    configuration file:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm text-foreground">
                    <code>
                      {`{
  "mcpServers": {
    "uiable": {
      "command": "npx",
      "args": ["-y", "@codedthemes/uiable-mcp"]
    }
  }
}`}
                    </code>
                  </pre>
                  <p className="text-sm">
                    Claude Code (<code>.mcp.json</code>), Cursor (
                    <code>.cursor/mcp.json</code>), and VS Code (
                    <code>.vscode/mcp.json</code>) all take the same shape.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="tools">
                  <div className="mb-2 flex items-center gap-2">
                    <Code className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                      Tools
                    </h5>
                  </div>
                  <p>
                    Every tool declares an <code>outputSchema</code> and returns{" "}
                    <code>structuredContent</code> alongside the serialized
                    text, and is annotated read-only / non-destructive /
                    idempotent.
                  </p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">
                        list_blocks
                      </span>
                      <p>
                        List page-level blocks (hero, pricing, feature,
                        footer…), filter by category.
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        list_components
                      </span>
                      <p>
                        List primitive components (button, input, card…), filter
                        by category.
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        search_blocks
                      </span>
                      <p>
                        Ranked keyword/intent search across all items, with
                        previews + install commands.
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        get_block
                      </span>
                      <p>
                        Full details for one item: metadata, files, add command,
                        and a link to its source. (Pass{" "}
                        <code>includeContent: true</code> when you actually want
                        the file bodies in the result).
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        get_add_command
                      </span>
                      <p>
                        <code>npx shadcn add</code> command(s) for one or more
                        items (validates names).
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">
                        create_ui
                      </span>
                      <p>
                        Compose a page from blocks for an intent: ordered plan +{" "}
                        <code>page.tsx</code> scaffold + add commands.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="resources">
                  <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                    Resources and Prompts
                  </h5>
                  <ul className="list-disc space-y-2 ps-8 text-sm">
                    <li>
                      <b>uiable://catalog</b> - The full registry index.
                    </li>
                    <li>
                      <b>uiable://item/{"{name}"}</b> - One item's metadata and
                      the full source of every file it installs.
                    </li>
                  </ul>
                  <p className="text-sm">
                    The <code>{"{name}"}</code> variable is completable from the
                    live catalog. Two prompts — <code>build-page</code> and{" "}
                    <code>find-block</code> — wrap the common workflows, with
                    completions on their <code>pageType</code> and{" "}
                    <code>category</code> arguments.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="pro">
                  <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                    Pro Items
                  </h5>
                  <p>
                    Pro blocks are listed in the catalog like any other item —
                    only their source is gated. Discovery (
                    <code>list_blocks</code>, <code>search_blocks</code>) needs
                    no credential; installing or reading a pro item does.
                    Generate a token at{" "}
                    <a
                      href="https://uiable.com/account"
                      className="text-primary hover:underline"
                    >
                      uiable.com/account
                    </a>{" "}
                    and pass it through the client's <code>env</code> block:
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm text-foreground">
                    <code>
                      {`{
  "mcpServers": {
    "uiable": {
      "command": "npx",
      "args": ["-y", "@codedthemes/uiable-mcp"],
      "env": {
        "UIABLE_TOKEN": "uia_..."
      }
    }
  }
}`}
                    </code>
                  </pre>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="configuration">
                  <h5 className="mb-0 font-semibold tracking-tight decoration-primary/30 underline-offset-4">
                    Configuration
                  </h5>
                  <ul className="list-disc space-y-2 ps-8 text-sm">
                    <li>
                      <b>UIABLE_TOKEN</b>: Pro registry token. Unlocks pro
                      items; omitted means the public catalog.
                    </li>
                    <li>
                      <b>UIABLE_BASE_URL</b>: Registry host. Defaults to{" "}
                      <code>https://uiable.com</code>.
                    </li>
                    <li>
                      <b>UIABLE_CATALOG</b>: Explicit{" "}
                      <code>registry-index.json</code> URL or local file path.
                      Wins over the above.
                    </li>
                    <li>
                      <b>UIABLE_NAMESPACE</b>: Install namespace (default{" "}
                      <code>@uiable</code>).
                    </li>
                  </ul>
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Blocks",
                  url: "/doc/blocks",
                }}
                nextItem={{
                  name: "Changelog",
                  url: "/doc/changelog",
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

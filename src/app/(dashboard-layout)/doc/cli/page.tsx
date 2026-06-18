"use client";
import { memo, useEffect, useState } from "react";

// shadcn
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// project
import branding from "@/branding.json";
import DocsNavigation from "@/components/doc-bottom-nav";
import TableOfContents from "@/components/uiable/layout/table-of-contents";

// assets
import {
  Terminal,
  Settings,
  CheckCircle2,
  Info,
  Copy,
  SquareCheckBig,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// third party
import { type BundledLanguage, codeToHtml } from "shiki";

// constants
const tocItems = [
  { title: "Overview", url: "#overview" },
  { title: "Configuration", url: "#configuration" },
  { title: "Usage", url: "#usage" },
  { title: "Benefits", url: "#benefits" },
];

const CodeBlock = memo(
  ({ children, lang }: { children: string; lang: BundledLanguage }) => {
    const [html, setHtml] = useState<string>("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      let mounted = true;
      codeToHtml(children, { lang, theme: "slack-dark" }).then((res) => {
        if (mounted) setHtml(res);
      });
      return () => {
        mounted = false;
      };
    }, [children, lang]);

    const handleCopy = () => {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative flex items-center justify-between w-full group/code">
        <div
          className="grow [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_pre]:overflow-visible"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 -top-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0 border-none bg-transparent"
          onClick={handleCopy}
        >
          {copied ? (
            <SquareCheckBig className="size-4 text-green-500" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      </div>
    );
  },
);

CodeBlock.displayName = "CodeBlock";

//  ------------------------------ | PAGE - SHADCN CLI | ------------------------------  //

export default function ShadcnCliPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="grow">
              <section id="cli" className="scroll-mt-24 space-y-8 mb-8">
                <div className="space-y-4">
                  <h4 className="mb-2 relative group scroll-mt-20">
                    Shadcn CLI Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Learn how to configure your project to copy and paste {branding.brandName}
                    components directly via the command line.
                  </p>
                </div>

                <Alert className="border-cyan-500 bg-cyan-500/10 text-cyan-800">
                  <Terminal className="size-5.5 shrink-0" />
                  <AlertTitle>CLI Support</AlertTitle>
                  <AlertDescription>
                    {branding.brandName} provides a fully compatible Shadcn registry endpoint
                    that integrates natively with the new Shadcn CLI.
                  </AlertDescription>
                </Alert>

                <Separator className="mb-6" />

                <div className="space-y-5" id="overview">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 underline-offset-4 decoration-primary/30 font-semibold tracking-tight">
                      Overview
                    </h5>
                  </div>
                  <p>
                    Rather than manually copying files and installing imports,
                    you can configure the <b>Shadcn CLI</b> to resolve {branding.brandName}
                    components. Using custom registries allows you to bring
                    {branding.brandName} variants into your project with a single command.
                  </p>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="configuration">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 underline-offset-4 decoration-primary/30 font-semibold tracking-tight">
                      1. Registry Configuration
                    </h5>
                  </div>
                  <p>
                    To point the Shadcn CLI to the {branding.brandName} registry, add the{" "}
                    <b>@uiable</b> namespace under the <b>registries</b> field
                    in your <b>components.json</b> file at the root of your
                    project:
                  </p>
                  <div className="flex-1 min-h-0 flex flex-col w-full overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="flex-1 min-h-0 overflow-auto p-4 text-[14px] leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                      <div className="flex items-center justify-between">
                        <CodeBlock lang="json">{`{
  "registries": {
    "@uiable": "https://internal.uiable.com/r/{name}.json"
  }
}`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-5" id="usage">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 underline-offset-4 decoration-primary/30 font-semibold tracking-tight">
                      2. Usage & Installation
                    </h5>
                  </div>
                  <p>
                    Once configured, you can install any {branding.brandName} component by
                    referencing the <b>@uiable</b> namespace. For example, to
                    add the basic accordion, run:
                  </p>
                  <div className="flex-1 min-h-0 flex flex-col w-full overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                    <div className="flex-1 min-h-0 overflow-auto p-4 text-[14px] leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
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
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="size-5 text-muted-foreground" />
                    <h5 className="mb-0 underline-offset-4 decoration-primary/30 font-semibold tracking-tight">
                      Benefits of using the CLI
                    </h5>
                  </div>
                  <ul className="list-disc ps-8 space-y-3">
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
            <div className="hidden xl:block shrink-0 w-sidebar-width">
              <div className="sticky top-20">
                <Card className="bg-transparent border-0">
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
  );
}

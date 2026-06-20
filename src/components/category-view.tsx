"use client";

import { memo, useEffect, useMemo, useState } from "react";

// shadcn
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// third party
import { type BundledLanguage, codeToHtml } from "shiki";

// project
import { categories } from "@/components-grid";
import { cn } from "@/lib/utils";

// assets
import { Code, Copy, SquareCheckBig } from "lucide-react";

interface Item {
  name: string;
  title: string;
  description: string;
  files: { path: string }[];
  categories: string[];
  rawCode?: string;
  type?: string;
}

interface CategoryViewProps {
  category: string;
  items: Item[];
}

const CodeBlock = memo(
  ({ children, lang }: { children: string; lang: BundledLanguage }) => {
    const [html, setHtml] = useState<string>("");
    useEffect(() => {
      let mounted = true;
      codeToHtml(children, { lang, theme: "one-dark-pro" }).then((res) => {
        if (mounted) setHtml(res);
      });
      return () => {
        mounted = false;
      };
    }, [children, lang]);
    return (
      <div
        className="[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_pre]:overflow-visible"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
);

CodeBlock.displayName = "CodeBlock";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const componentCache: Record<string, unknown> = {};

function DynamicItem({
  filePath,
  isBlock
}: {
  filePath: string;
  isBlock: boolean;
}) {
  const [Comp, setComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const mod = isBlock
          ? await import(`./uiable/blocks/${filePath}.tsx`)
          : await import(`./uiable/${filePath}.tsx`);
        if (mounted) {
          // Explicitly handle default and named exports
          const component =
            mod.default ||
            mod.Component ||
            Object.values(mod).find((v) => typeof v === "function");
          setComp(() => component);
        }
      } catch (err) {
        console.error("Dynamic import failed for", filePath, err);
        if (mounted) {
          // eslint-disable-next-line react/display-name
          setComp(() => () => (
            <div className="text-destructive text-sm p-4 border rounded">
              Component not found: {filePath}
            </div>
          ));
        }
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [filePath, isBlock]);

  if (!Comp) {
    return (
      <div className="h-20 w-full animate-pulse bg-background rounded-md" />
    );
  }

  return <Comp />;
}

//  ------------------------------ | COMPONENT - CATEGORY VIEW | ------------------------------  //

export default function CategoryView({ category, items }: CategoryViewProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedCommandIndex, setCopiedCommandIndex] = useState<number | null>(
    null
  );
  // Vars

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const activeCategory = useMemo(
    () => categories.find((c) => c.slug === category),
    [category]
  );
  const breakpoints = activeCategory?.breakpoints || {};
  const { xs = 1, sm, md, lg, xl, xxl } = breakpoints;

  const [columns, setColumns] = useState<number>(
    xxl ?? xl ?? lg ?? md ?? sm ?? xs
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) setColumns(xxl ?? xl ?? lg ?? md ?? sm ?? xs);
      else if (width >= 1280) setColumns(lg ?? md ?? sm ?? xs);
      else if (width >= 1024) setColumns(lg ?? md ?? sm ?? xs);
      else if (width >= 768) setColumns(md ?? sm ?? xs);
      else if (width >= 640) setColumns(sm ?? xs);
      else setColumns(xs);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints, xs, sm, md, lg, xl]);

  const handleCopy = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!mounted) return null;

  return (
    <div
      className="grid gap-5 mb-0 items-start"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item, index) => {
        const filePath = item.files[0].path
          .replace(/^src\//, "")
          .replace(/^components\/uiable\//, "")
          .replace(".tsx", "");

        const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
        const commands = {
          pnpm: {
            cli: "pnpm",
            command: `pnpm dlx shadcn@latest add ${baseUrl}/r/${item.name}.json`
          },
          npm: {
            cli: "npm",
            command: `npx shadcn@latest add ${baseUrl}/r/${item.name}.json`
          },
          yarn: {
            cli: "yarn",
            command: `yarn shadcn@latest add ${baseUrl}/r/${item.name}.json`
          },
          bun: {
            cli: "bun",
            command: `bunx --bun shadcn@latest add ${baseUrl}/r/${item.name}.json`
          }
        };
        function handleCopyCommand(index: number, arg1: string): void {
          navigator.clipboard.writeText(arg1);
          setCopiedCommandIndex(index);
          setTimeout(() => setCopiedCommandIndex(null), 2000);
        }

        return (
          <Card key={item.name} className="mb-0 group/item overflow-hidden">
            <CardHeader className="py-3">
              <div className="flex flex-row items-center justify-between gap-1">
                <h5 className="text-[16px] font-semibold mb-0 line-clamp-1">
                  {item.title}
                </h5>
                <div className="flex items-center justify-end gap-1">
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => handleCopy(index, item.rawCode || "")}
                      variant="outline"
                      size="icon"
                      className="bg-transparent border-none gap-1.5"
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
                          "bg-transparent border-none gap-1.5"
                        )}
                      >
                        <Code className="size-4" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-5xl w-full max-h-[95vh] p-6 flex flex-col gap-0 overflow-hidden">
                        <div className="text-[16px] font-semibold mb-3">
                          CLI Command
                        </div>
                        <Tabs
                          defaultValue={Object.keys(commands)[0]}
                          className="w-full"
                        >
                          <TabsList
                            variant="line"
                            className="border-b border-b-border-border rounded-b-none justify-start w-full bg-transparent h-auto p-0 gap-1 max-h-10! *:flex-none"
                          >
                            {Object.entries(commands).map(([key, value]) => (
                              <TabsTrigger
                                key={key}
                                value={key}
                                className="rounded-b-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                              >
                                {value.cli}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          <div className="mb-4">
                            {Object.entries(commands).map(([key, value]) => (
                              <TabsContent key={key} value={key}>
                                <div className="flex-1 min-h-0 flex flex-col w-full overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                                  <div className="flex-1 min-h-0 overflow-auto p-4 text-[14px] leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                    {value.command ? (
                                      <div className="flex items-center justify-between">
                                        <CodeBlock lang="bash">
                                          {value.command}
                                        </CodeBlock>
                                        <Button
                                          variant="ghost"
                                          size="icon-lg"
                                          className="text-white/70 hover:text-white hover:bg-white/10 transition-colors"
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
                                      <div className="text-white/50 py-10 text-center">
                                        No code available.
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </TabsContent>
                            ))}
                          </div>
                        </Tabs>
                        <div className="text-[16px] font-semibold mt-4 mb-3">
                          Code
                        </div>
                        <div className="flex-1 min-h-0 flex flex-col w-full overflow-hidden rounded-[8px] bg-[#222222] dark:bg-background">
                          <div className="flex-none flex items-center w-full justify-between px-4 py-2 border-b border-white/10">
                            <span className="text-xs font-medium text-white uppercase tracking-wider">
                              TSX
                            </span>
                            <Button
                              variant="ghost"
                              size="icon-lg"
                              className="text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                              onClick={() =>
                                handleCopy(index, item.rawCode || "")
                              }
                            >
                              {copiedIndex === index ? (
                                <SquareCheckBig className="size-4 text-green-500" />
                              ) : (
                                <Copy className="size-4" />
                              )}
                            </Button>
                          </div>
                          <div className="flex-1 min-h-0 overflow-auto p-4 text-[14px] leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {item.rawCode ? (
                              <CodeBlock lang="tsx">{item.rawCode}</CodeBlock>
                            ) : (
                              <div className="text-white/50 py-10 text-center">
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
            <CardContent className=" relative">
              <div
                className={cn(
                  "flex items-center justify-center min-h-30 rounded-[12px] p-4",
                  category === "sidebar" &&
                    "h-[500px] overflow-auto isolate block"
                )}
              >
                <DynamicItem
                  filePath={filePath}
                  isBlock={item.type === "registry:block"}
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// next
import { Metadata } from "next"
import { notFound } from "next/navigation"

// third-party
import fs from "fs"
import path from "path"

// project-imports
import branding from "@/branding.json"
import BlockView from "@/components/block-view"
import CategoryDescription from "@/components/category-description"
import { blockCategoryInfoMap } from "@/data/blocks"
import { resolveDisplayPath } from "@/lib/tree-view-utils"

interface BlockCategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlockCategoryPageProps): Promise<Metadata> {
  const { slug: category } = await params
  const data = blockCategoryInfoMap[category]

  if (!data) {
    return {}
  }

  return {
    title: `${data.title} - UI component library built on shadcn and Base UI - ${branding.brandName}`,
    description: data.description[0] || "",
    alternates: {
      canonical: `/blocks/${category}`,
    },
    // openGraph: {
    //   title: `${data.title} - UI component library built on shadcn and Base UI - ${branding.brandName}`,
    //   description: data.description[0] || "",
    //   images: [
    //     {
    //       url: `https://cdn.uiable.com/og/${category}.png`,
    //       width: 1200,
    //       height: 630,
    //       alt: `${data.title} Block - ${branding.brandName}`,
    //     },
    //   ],
    // },
  }
}

//  ------------------------------ | PAGE - BLOCK - CATEGORY | ------------------------------  //

export default async function BlockCategoryPage({
  params,
}: BlockCategoryPageProps) {
  const { slug: category } = await params

  const uiRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/registry.json"
  )
  const blocksRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/blocks/registry.json"
  )
  const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"))
  const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"))
  const registryItems = [
    ...(uiRegistry.items || []),
    ...(blocksRegistry.items || []),
  ]

  const itemsByName = new Map<string, any>(
    registryItems.map((it: any) => [it.name, it])
  )

  const readSource = (displayPath: string) => {
    try {
      return fs.readFileSync(
        path.join(/*turbopackIgnore: true*/ process.cwd(), displayPath),
        "utf8"
      )
    } catch {
      return ""
    }
  }

  // Walk an item's `@uiable/*` registryDependencies (recursively) and collect
  // the source of every component they install, so the code viewer can show
  // the imported components — and the full `src/...` path where each belongs —
  // instead of only the block's own two files.
  const collectDependencyFiles = (
    item: any,
    seenPaths: Set<string>,
    seenItems: Set<string>
  ): { path: string; target?: string; code: string }[] => {
    const out: { path: string; target?: string; code: string }[] = []
    for (const dep of item.registryDependencies || []) {
      if (typeof dep !== "string" || !dep.startsWith("@uiable/")) continue
      const depName = dep.slice("@uiable/".length)
      if (seenItems.has(depName)) continue
      seenItems.add(depName)
      const depItem = itemsByName.get(depName)
      if (!depItem?.files) continue
      for (const file of depItem.files) {
        const displayPath = resolveDisplayPath(file)
        if (seenPaths.has(displayPath)) continue
        seenPaths.add(displayPath)
        out.push({
          path: displayPath,
          target: file.target,
          code: readSource(displayPath),
        })
      }
      out.push(...collectDependencyFiles(depItem, seenPaths, seenItems))
    }
    return out
  }

  const items = registryItems
    .filter((item: any) => item.categories?.includes(category))
    .map((item: any) => {
      // Pro source never enters the (statically generated) page payload —
      // entitled users fetch it per-request from /api/source/[name].
      if (item.pro) {
        return { ...item, pro: true, rawCode: "" }
      }
      const relativePath = item.files[0].path
      const mappedPath =
        item.type === "registry:block"
          ? `src/components/uiable/blocks/${relativePath}`
          : `src/components/uiable/${relativePath}`
      const filePath = path.join(
        /*turbopackIgnore: true*/ process.cwd(),
        mappedPath
      )
      let rawCode = ""
      try {
        rawCode = fs.readFileSync(filePath, "utf8")
      } catch (error) {
        console.error(`Failed to read file: ${filePath}`, error)
      }
      const ownPaths = new Set<string>(
        item.files.map((f: any) => resolveDisplayPath(f))
      )
      const dependencyFiles = collectDependencyFiles(
        item,
        ownPaths,
        new Set<string>()
      )
      return { ...item, rawCode, dependencyFiles }
    })

  if (items.length === 0) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold capitalize">
            {category.replace("-", " ")}
          </h1>
        </div>
      </div>
      <BlockView category={category} items={items} />
      <div className="hidden items-center justify-between">
        <CategoryDescription category={category} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const uiRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/registry.json"
  )
  const blocksRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/blocks/registry.json"
  )
  const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"))
  const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"))
  const registryItems = [
    ...(uiRegistry.items || []),
    ...(blocksRegistry.items || []),
  ]

  const categories = new Set<string>()
  registryItems.forEach((item: any) => {
    item.categories?.forEach((cat: string) => categories.add(cat))
  })

  return Array.from(categories).map((category) => ({
    slug: category,
  }))
}

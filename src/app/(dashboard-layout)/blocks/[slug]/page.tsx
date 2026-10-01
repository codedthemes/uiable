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

interface BlockCategoryPageProps {
  params: Promise<{ slug: string }>
}

function getBlockCategories(): Set<string> {
  const blocksRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/blocks/registry.json"
  )
  const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"))
  const categories = new Set<string>()
  ;(blocksRegistry.items || []).forEach((item: any) => {
    item.categories?.forEach((cat: string) => categories.add(cat))
  })
  return categories
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
    title: `${data.title} section built on shadcn and Base UI - ${branding.brandName}`,
    description: data.description[0] || "",
    alternates: {
      canonical: `/blocks/${category}`,
    },
  }
}

//  ------------------------------ | PAGE - BLOCK - CATEGORY | ------------------------------  //

export default async function BlockCategoryPage({
  params,
}: BlockCategoryPageProps) {
  const { slug: category } = await params

  if (!getBlockCategories().has(category)) {
    notFound()
  }

  const blocksRegistryPath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src/components/uiable/blocks/registry.json"
  )
  const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"))
  const registryItems = [...(blocksRegistry.items || [])]

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
      return { ...item, rawCode }
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
  return Array.from(getBlockCategories()).map((category) => ({
    slug: category,
  }))
}

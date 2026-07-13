// third party
import fs from "fs"
import path from "path"
import { Metadata } from "next"
import { notFound } from "next/navigation"
// project
import branding from "@/branding.json"
import { blockCategoryInfoMap } from "@/data/blocks"

import BlockView from "@/components/block-view"
import CategoryDescription from "@/components/category-description"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
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
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: category } = await params

  const uiRegistryPath = path.join(
    process.cwd(),
    "src/components/uiable/registry.json"
  )
  const blocksRegistryPath = path.join(
    process.cwd(),
    "src/components/uiable/blocks/registry.json"
  )
  const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"))
  const blocksRegistry = JSON.parse(fs.readFileSync(blocksRegistryPath, "utf8"))
  const registryItems = [
    ...(uiRegistry.items || []),
    ...(blocksRegistry.items || []),
  ]

  const items = registryItems
    .filter((item: any) => item.categories?.includes(category))
    .map((item: any) => {
      const relativePath = item.files[0].path
      const mappedPath =
        item.type === "registry:block"
          ? `src/components/uiable/blocks/${relativePath}`
          : `src/components/uiable/${relativePath}`
      const filePath = path.join(process.cwd(), mappedPath)
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
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-8">
        <div>
          <h1 className="text-3xl font-semibold capitalize">
            {category.replace("-", " ")}
          </h1>
        </div>
      </div>
      <BlockView category={category} items={items} />
      <div className="container mx-auto hidden items-center justify-between px-4 sm:px-8">
        <CategoryDescription category={category} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const uiRegistryPath = path.join(
    process.cwd(),
    "src/components/uiable/registry.json"
  )
  const blocksRegistryPath = path.join(
    process.cwd(),
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

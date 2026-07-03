import { notFound } from "next/navigation"
import { Metadata } from "next"

// third party
import fs from "fs"
import path from "path"

// project
import branding from "@/branding.json"
import CategoryDescription from "@/components/category-description"
import CategoryView from "@/components/category-view"
import { categoryInfoMap as componentCategoryInfoMap } from "@/data/components"

const categoryInfoMap = {
  ...componentCategoryInfoMap,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = categoryInfoMap[slug]

  if (!data) {
    return {}
  }

  return {
    title: `${data.title} - UI component library built on shadcn and Base UI - ${branding.brandName}`,
    description: data.description[0] || "",
    alternates: {
      canonical: `/components/${slug}`,
    },
    openGraph: {
      title: `${data.title} - UI component library built on shadcn and Base UI - ${branding.brandName}`,
      description: data.description[0] || "",
      images: [
        {
          url: `https://cdn.uiable.com/og/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${data.title} Component - ${branding.brandName}`,
        },
      ],
    },
  }
}

//  ------------------------------ | PAGE - CATEGORY | ------------------------------  //

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = categoryInfoMap[slug]

  if (!data) {
    notFound()
  }

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
    .filter((item: any) => item.categories?.includes(slug))
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
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold capitalize">
          {data.title.replace("-", " ")}
        </h1>
        <div className="text-base text-muted-foreground">
          {data.description.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <CategoryView category={slug} items={items} />
      <CategoryDescription category={slug} />
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

  return Array.from(categories).map((slug) => ({
    slug,
  }))
}

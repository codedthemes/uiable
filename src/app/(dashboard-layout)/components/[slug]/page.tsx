// next
import { Metadata } from "next"
import { notFound } from "next/navigation"

// third-party
import fs from "fs"
import path from "path"

// project-imports
import branding from "@/branding.json"
import CategoryDescription from "@/components/category-description"
import CategoryView from "@/components/category-view"
import { categoryInfoMap } from "@/data/components"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

function getComponentCategories(): Set<string> {
  const uiRegistryPath = path.join(
    process.cwd(),
    "src/components/uiable/registry.json"
  )
  const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"))
  const categories = new Set<string>()
  ;(uiRegistry.items || []).forEach((item: any) => {
    item.categories?.forEach((cat: string) => categories.add(cat))
  })
  return categories
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params

  if (!getComponentCategories().has(slug)) {
    notFound()
  }

  const data = categoryInfoMap[slug]

  if (!data) {
    notFound()
  }

  const uiRegistryPath = path.join(
    process.cwd(),
    "src/components/uiable/registry.json"
  )
  const uiRegistry = JSON.parse(fs.readFileSync(uiRegistryPath, "utf8"))
  const registryItems = [...(uiRegistry.items || [])]

  const items = registryItems
    .filter((item: any) => item.categories?.includes(slug))
    .map((item: any) => {
      // Pro source never enters the (statically generated) page payload —
      // entitled users fetch it per-request from /api/source/[name].
      if (item.pro) {
        return { ...item, pro: true, rawCode: "" }
      }
      const relativePath = item.files[0].path
      const filePath =
        item.type === "registry:block"
          ? path.join(
              process.cwd(),
              "src/components/uiable/blocks",
              relativePath
            )
          : path.join(process.cwd(), "src/components/uiable", relativePath)
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
  return Array.from(getComponentCategories()).map((slug) => ({
    slug,
  }))
}

import { useState, type MouseEvent } from "react"
// assets
import { Eye, Heart, Tag } from "lucide-react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PhotoItem {
  id: string
  title: string
  photographer: string
  category: "Architecture" | "Nature" | "Cyberpunk" | "Minimal"
  likes: number
  views: string
  resolution: string
  src: string
  aspect: "square" | "tall" | "wide"
}

const photos: PhotoItem[] = [
  {
    id: "img-1",
    title: "Neon Rain over Shinjuku",
    photographer: "Kenji Sato",
    category: "Cyberpunk",
    likes: 1420,
    views: "24.5k",
    resolution: "4K RAW",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-2",
    title: "Minimalist Desert Dune at Sunset",
    photographer: "Sarah Jenkins",
    category: "Nature",
    likes: 892,
    views: "18.2k",
    resolution: "6K HDR",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-3",
    title: "Brutalist Concrete & Glass Facade",
    photographer: "Marco Rossi",
    category: "Architecture",
    likes: 2150,
    views: "42.1k",
    resolution: "8K UHD",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-4",
    title: "Misty Pine Forest Silhouette",
    photographer: "Elena Vance",
    category: "Nature",
    likes: 645,
    views: "12.9k",
    resolution: "4K RAW",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-5",
    title: "Geometric Spiral Staircase",
    photographer: "David Chen",
    category: "Architecture",
    likes: 1840,
    views: "31.0k",
    resolution: "6K HDR",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-6",
    title: "Futuristic Data Terminal Grid",
    photographer: "Alex Rivera",
    category: "Cyberpunk",
    likes: 3290,
    views: "58.4k",
    resolution: "8K UHD",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-7",
    title: "Scandinavian Desk Setup & Light",
    photographer: "Hanna Lind",
    category: "Minimal",
    likes: 1120,
    views: "19.8k",
    resolution: "4K RAW",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "img-8",
    title: "Deep Ocean Bioluminescence",
    photographer: "Marcus Thorne",
    category: "Nature",
    likes: 2780,
    views: "49.3k",
    resolution: "6K HDR",
    aspect: "tall",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
  },
]

//  ------------------------------ | SCROLL AREA - IMAGE SCROLL | ------------------------------  //

export default function ScrollAreaImageScroll() {
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({
    "img-3": true,
    "img-6": true,
  })

  const toggleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation()
    setLikedPhotos((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <ScrollArea className="h-[440px] w-full max-w-[650px] rounded-lg border border-border/40 bg-muted/10 p-3">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {photos.map((photo) => {
          const isLiked = likedPhotos[photo.id]
          const displayLikes = photo.likes + (isLiked ? 1 : 0)

          return (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:shadow-lg ${
                photo.aspect === "wide" ? "sm:col-span-2 sm:h-56" : "h-64"
              }`}
            >
              {/* Photo Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Top Badges */}
              <div className="absolute top-3 right-3 left-3 flex items-center justify-between gap-2">
                <Badge className="border-none bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {photo.resolution}
                </Badge>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => toggleLike(photo.id, e)}
                  className={`h-7 gap-1.5 rounded-full px-2.5 text-xs font-medium transition-all duration-200 ${
                    isLiked
                      ? "scale-105 bg-rose-500 text-white shadow-md hover:bg-rose-600 hover:text-white"
                      : "bg-black/60 text-white/90 backdrop-blur-sm hover:bg-black/80 hover:text-white"
                  }`}
                >
                  <Heart
                    className={`size-3.5 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span>{displayLikes}</span>
                </Button>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                  <Tag className="size-3 text-white/80" />
                  <span>{photo.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="size-3" />
                    {photo.views}
                  </span>
                </div>

                <h5 className="mt-1 line-clamp-1 text-sm font-semibold tracking-tight text-white transition-all group-hover:underline">
                  {photo.title}
                </h5>

                <p className="mt-0.5 text-xs text-white/80">
                  by{" "}
                  <span className="font-medium text-white">
                    {photo.photographer}
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}

import { useState, type MouseEvent } from "react"
// assets
import { Bookmark, Play } from "lucide-react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  id: string
  title: string
  artist: string
  duration: string
  cover: string
  genre: string
  plays: string
  featured?: boolean
}

const albums: Artwork[] = [
  {
    id: "1",
    title: "Cyberpunk Horizon Vol. 4",
    artist: "Aether & Neon",
    duration: "1h 42m",
    genre: "Synthwave",
    plays: "142K plays",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Lofi Coding Sessions",
    artist: "Chillhop Labs",
    duration: "2h 15m",
    genre: "Lofi Beats",
    plays: "890K plays",
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Deep Focus Ambient",
    artist: "Mindful Space",
    duration: "3h 00m",
    genre: "Ambient",
    plays: "520K plays",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Midnight Jazz & Soul",
    artist: "The Blue Notes",
    duration: "58m",
    genre: "Jazz",
    plays: "310K plays",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Electronic Pulse 2026",
    artist: "Vektor Synthesis",
    duration: "1h 24m",
    genre: "Electronic",
    plays: "215K plays",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    title: "Acoustic Sunrise",
    artist: "Elena & Marcus",
    duration: "45m",
    genre: "Indie Folk",
    plays: "98K plays",
    cover:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80",
  },
]

//  ------------------------------ | SCROLL AREA - HORIZONTAL | ------------------------------  //

export default function ScrollAreaHorizontal() {
  const [activePlay, setActivePlay] = useState<string | null>("1")
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({
    "1": true,
  })

  const toggleBookmark = (id: string, e: MouseEvent) => {
    e.stopPropagation()
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <ScrollArea className="w-full max-w-[650px] rounded-lg border border-border/40 bg-muted/20 p-4 whitespace-nowrap">
      <div className="flex w-max space-x-4 pb-3">
        {albums.map((album) => {
          const isPlaying = activePlay === album.id
          const isBookmarked = bookmarked[album.id]

          return (
            <div
              key={album.id}
              onClick={() => setActivePlay(album.id)}
              className={`group relative w-[210px] cursor-pointer overflow-hidden rounded-lg border p-3 transition-all duration-300 hover:shadow-md ${
                isPlaying
                  ? "border-primary/60 bg-primary/5"
                  : "border-border/60 bg-card/80 hover:border-border"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                <div className="absolute top-2 left-2">
                  <Badge className="border-none bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    {album.genre}
                  </Badge>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => toggleBookmark(album.id, e)}
                  className={`absolute top-2 right-2 size-7 rounded-full transition-transform hover:scale-110 ${
                    isBookmarked
                      ? "bg-primary text-white shadow-sm hover:bg-primary/90 hover:text-white"
                      : "bg-black/40 text-white/80 opacity-0 backdrop-blur-sm group-hover:opacity-100 hover:bg-black/60 hover:text-white"
                  }`}
                  aria-label="Bookmark"
                >
                  <Bookmark
                    className={`size-3.5 ${isBookmarked ? "fill-current" : ""}`}
                  />
                </Button>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant={isPlaying ? "default" : "secondary"}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActivePlay(album.id)
                    }}
                    className={`pointer-events-auto size-11 rounded-full shadow-lg transition-all duration-300 ${
                      isPlaying
                        ? "scale-100 bg-primary text-white hover:bg-primary/90"
                        : "scale-75 bg-white/90 text-slate-900 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-slate-950 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                    }`}
                    aria-label="Play album"
                  >
                    <Play className="ml-0.5 size-5 fill-current" />
                  </Button>
                </div>

                <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between text-[11px] font-medium text-white/90">
                  <span className="truncate">{album.plays}</span>
                  <span className="rounded bg-black/50 px-1.5 py-0.5 backdrop-blur-xs">
                    {album.duration}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <div className="mt-3 space-y-1">
                <h5 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {album.title}
                </h5>
                <p className="truncate text-xs text-muted-foreground">
                  {album.artist}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" className="h-2.5" />
    </ScrollArea>
  )
}

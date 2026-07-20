"use client"

import { useState } from "react"
// assets
import { Heart, ShoppingBag, ShoppingCart, Star } from "lucide-react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//  ------------------------------ | CARD - PRODUCT | ------------------------------  //

export default function CardProduct() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedColor, setSelectedColor] = useState("charcoal")

  const colors = [
    {
      id: "charcoal",
      name: "Charcoal Black",
      className: "bg-zinc-800 hover:bg-zinc-800",
    },
    {
      id: "navy",
      name: "Deep Navy",
      className: "bg-blue-900 hover:bg-blue-900",
    },
    {
      id: "sage",
      name: "Sage Green",
      className: "bg-emerald-800 hover:bg-emerald-800",
    },
  ]

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <CardHeader className="relative border-b-0 p-0">
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          <img
            src="https://cdn.uiable.com/component/card-sample.png"
            alt="Wireless Noise-Canceling Headphones"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            -20% OFF
          </Badge>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 size-9 rounded-full bg-background/80 text-foreground backdrop-blur-md hover:bg-background"
            aria-label="Add to favorites"
          >
            <Heart
              className={`size-4 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
              }`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-2 flex items-center justify-between gap-2">
          <h6 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Audio & Tech
          </h6>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="size-3.5 fill-amber-500" />
            <span className="text-xs font-bold text-foreground">4.8</span>
            <span className="text-xs text-muted-foreground">(128)</span>
          </div>
        </div>

        <CardTitle className="line-clamp-1 text-lg font-bold">
          Acoustic Pro Headphones
        </CardTitle>
        <CardDescription className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          Premium studio-grade sound with active noise cancellation and 40-hour
          extended battery life.
        </CardDescription>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-foreground">$149.00</span>
            <span className="text-sm font-medium text-muted-foreground line-through">
              $189.00
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {colors.map((color) => (
              <Button
                key={color.id}
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setSelectedColor(color.id)}
                className={`size-5 min-w-0 rounded-full p-0 ${color.className} transition-transform ${
                  selectedColor === color.id
                    ? "scale-110 ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "opacity-70"
                }`}
                title={color.name}
                aria-label={color.name}
              />
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-2.5">
        <Button
          variant="outline"
          className="min-w-[120px] flex-1 gap-1.5 px-2 text-xs sm:text-sm"
        >
          <ShoppingCart className="size-4 shrink-0" />
          <span className="truncate">Add to Cart</span>
        </Button>
        <Button className="min-w-[120px] flex-1 gap-1.5 px-2 text-xs sm:text-sm">
          <ShoppingBag className="size-4 shrink-0" />
          <span className="truncate">Buy Now</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

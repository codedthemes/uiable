"use client"

import { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

const sectionContent = [
  {
    title: "Premium Wooden Furniture",
    subTitle: "Timeless beauty for every space",
    content:
      "Upgrade your interiors with high-quality wooden furniture designed for durability and sophistication. Perfect for living rooms, bedrooms, and modern office spaces.",
    buttonText: "Shop Now",
    img: "https://cdn.uiable.com/block/img-home-2.jpg",
    alignment: "right",
  },
  {
    title: "Modern Living Room Collection",
    subTitle: "Comfort meets elegant design",
    content:
      "Transform your interiors with beautifully crafted furniture designed for comfort, style, and everyday functionality. Create a welcoming space that perfectly matches your modern lifestyle.",
    buttonText: "Explore Collection",
    img: "https://cdn.uiable.com/block/img-home-1.jpg",
    alignment: "left",
  },
  {
    title: "Minimal & Contemporary",
    subTitle: "Furniture designed for modern homes",
    content:
      "Bring simplicity and elegance into your home with contemporary furniture pieces that blend comfort and modern aesthetics.",
    buttonText: "View Products",
    img: "https://cdn.uiable.com/block/img-home-3.jpg",
    alignment: "center",
  },
]

//  ------------------------------ | E - COMMERCE 3 | ------------------------------  //

export default function Ecommerce3() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sectionContent.length
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      {sectionContent.map((items, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-bottom transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "z-0 opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${items.img}')` }}
        />
      ))}
      <div className="absolute inset-0 z-20 bg-card/40 backdrop-blur-xl"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {sectionContent.map((items, index) => (
            <div
              className={`relative mx-auto max-w-290 overflow-hidden rounded-3xl shadow-lg shadow-slate-500/30 ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
              key={index}
            >
              <div
                className={`relative top-0 z-20 mx-auto flex max-w-130 flex-col gap-8 p-5 sm:p-14 lg:absolute ${items.alignment === "left" ? "left-0 items-start text-left" : items.alignment === "right" ? "right-0 items-end text-right" : "left-2/4 -translate-x-2/4 items-center text-center"}`}
              >
                <div
                  className={`flex flex-col gap-4 ${items.alignment === "left" ? "items-start" : items.alignment === "right" ? "items-end" : "items-center"}`}
                >
                  <div
                    className={`flex flex-col gap-2 ${items.alignment === "left" ? "items-start" : items.alignment === "right" ? "items-end" : "items-center"}`}
                  >
                    <p className="max-w-200 text-lg font-semibold text-teal-800">
                      {items.subTitle}
                    </p>
                    <h2 className="text-xl font-medium text-slate-800 sm:text-3xl">
                      {items.title}
                    </h2>
                  </div>
                  <p className="max-w-100 text-slate-600">{items.content}</p>
                </div>
                <Button
                  size="lg"
                  className="rounded-full bg-teal-700 hover:translate-y-1 hover:opacity-90"
                >
                  {items.buttonText}
                </Button>
              </div>
              <div
                className={`absolute inset-0 z-10 from-white from-0% to-transparent to-50% opacity-60 ${items.alignment === "left" ? "bg-linear-to-br" : items.alignment === "right" ? "bg-linear-to-bl" : "bg-linear-to-b"}`}
              ></div>
              <img
                src={`${items.img}`}
                alt="conference room"
                className="w-full"
              />
            </div>
          ))}
          <div className="mx-auto inline-flex w-fit justify-center gap-1 rounded-full bg-card/20 p-1.5 shadow-sm shadow-slate-500/10 backdrop-blur-xl">
            {sectionContent.map((items, index) => (
              <Button
                className={`h-3 cursor-pointer rounded-full p-0 transition-all duration-300 ${index === currentImageIndex ? "w-6 bg-teal-700" : "w-3 bg-slate-400 opacity-40"}`}
                onClick={() => setCurrentImageIndex(index)}
                key={index}
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

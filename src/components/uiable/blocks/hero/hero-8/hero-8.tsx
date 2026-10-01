"use client"

import React, { useEffect, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// third-party
import { format } from "date-fns"
import Autoplay from "embla-carousel-autoplay"
import { AnimatePresence, motion } from "framer-motion"
// types
import type { DateRange } from "react-day-picker"

// lucide icons
// assets
import {
  Bath,
  Bed,
  Calendar as CalendarIcon,
  Heart,
  Ruler,
  Search,
  Send,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Feature", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]

const Gallery = [
  {
    title: "Hidden Quill Haven",
    location: "New York, USA",
    guests: "4 Guests",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1500 ft²",
    price: "$246",
    rating: "4.9",
    images: "https://cdn.uiable.com/block/img-hero8-1.png",
  },
  {
    title: "Coastal Haven Lodge",
    location: "Andalusia, Spain",
    guests: "5 Guests",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1600 ft²",
    price: "$299",
    rating: "4.8",
    images: "https://cdn.uiable.com/block/img-hero8-2.png",
  },
  {
    title: "Brass Lantern Inn",
    location: "Paris, France",
    guests: "6 Guests",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1500 ft²",
    price: "$325",
    rating: "4.5",
    images: "https://cdn.uiable.com/block/img-hero8-3.png",
  },
  {
    title: "Sunset Breeze Villa",
    location: "Santorini, Greece",
    guests: "4 Guests",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1400 ft²",
    price: "$280",
    rating: "4.7",
    images: "https://cdn.uiable.com/block/img-hero8-4.png",
  },
  {
    title: "Alpine Timber Chalet",
    location: "Zermatt, Switzerland",
    guests: "8 Guests",
    beds: "4 Beds",
    baths: "3 Baths",
    area: "2200 ft²",
    price: "$450",
    rating: "4.9",
    images: "https://cdn.uiable.com/block/img-hero8-5.png",
  },
  {
    title: "Serene Lakefront Cabin",
    location: "Lake Tahoe, USA",
    guests: "6 Guests",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1800 ft²",
    price: "$310",
    rating: "4.6",
    images: "https://cdn.uiable.com/block/img-hero8-6.png",
  },
  {
    title: "Whispering Palms Resort",
    location: "Bali, Indonesia",
    guests: "2 Guests",
    beds: "1 Bed",
    baths: "1 Bath",
    area: "950 ft²",
    price: "$190",
    rating: "4.8",
    images: "https://cdn.uiable.com/block/img-hero8-7.png",
  },
  {
    title: "Majestic Peaks Lodge",
    location: "Banff, Canada",
    guests: "6 Guests",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "2000 ft²",
    price: "$390",
    rating: "4.9",
    images: "https://cdn.uiable.com/block/img-hero8-8.png",
  },
  {
    title: "Urban Loft Suites",
    location: "Tokyo, Japan",
    guests: "3 Guests",
    beds: "2 Beds",
    baths: "1 Bath",
    area: "1100 ft²",
    price: "$260",
    rating: "4.7",
    images: "https://cdn.uiable.com/block/img-hero8-9.png",
  },
  {
    title: "Golden Sands Villa",
    location: "Dubai, UAE",
    guests: "5 Guests",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "1750 ft²",
    price: "$380",
    rating: "4.8",
    images: "https://cdn.uiable.com/block/img-hero8-10.png",
  },
  {
    title: "Eco Canopy Lodge",
    location: "Monteverde, Costa Rica",
    guests: "4 Guests",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1350 ft²",
    price: "$220",
    rating: "4.6",
    images: "https://cdn.uiable.com/block/img-hero8-11.png",
  },
]
//  ------------------------------ | HERO 8 | ------------------------------  //

export default function Hero8() {
  const [isOpen, setIsOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [currentImage, setCurrentImage] = useState(Gallery[0].images)
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({})

  const toggleLike = (idx: number) => {
    setLikedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [adults, setAdults] = useState("2 Adults")
  const [childrenCount, setChildrenCount] = useState("1 Child")

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap()
      const item = Gallery[selectedIndex]
      if (item) {
        setCurrentImage(item.images)
      }
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const plugin = React.useMemo(() => Autoplay({ delay: 2000 }), [])
  const dateText = dateRange?.from
    ? dateRange.to
      ? `${format(dateRange.from, "dd MMM yyyy")} - ${format(
          dateRange.to,
          "dd MMM yyyy"
        )}`
      : format(dateRange.from, "dd MMM yyyy")
    : null
  return (
    <div className="relative min-h-screen overflow-hidden py-12 sm:py-32 md:py-24">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-card/50 to-cyan-200 opacity-60 dark:to-cyan-800"></div>
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url('${currentImage}')` }}
      ></div>
      <div className="relative z-30 flex flex-col gap-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="basis-full lg:basis-6/12">
              <div className="relative flex flex-col gap-6 rounded-lg bg-card/20 p-6 backdrop-blur-2xl sm:gap-10 lg:rounded-3xl lg:p-8">
                <div className="relative rounded-full bg-card/50 p-3 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md">
                  <div className="flex flex-row items-center justify-between gap-10">
                    <div className="flex flex-row items-center gap-3">
                      <svg
                        className="size-8 text-cyan-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          opacity="0.3"
                          d="M21.5315 11.5857L20.75 10.9605V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4143 22.4142 22.75 22 22.75H2.00003C1.58581 22.75 1.25003 22.4143 1.25003 22C1.25003 21.5858 1.58581 21.25 2.00003 21.25H3.25003V10.9605L2.46855 11.5857C2.1451 11.8445 1.67313 11.792 1.41438 11.4686C1.15562 11.1451 1.20806 10.6731 1.53151 10.4144L9.65742 3.91366C11.027 2.818 12.9731 2.818 14.3426 3.91366L22.4685 10.4144C22.792 10.6731 22.8444 11.1451 22.5857 11.4686C22.3269 11.792 21.855 11.8445 21.5315 11.5857ZM12 6.75004C10.4812 6.75004 9.25003 7.98126 9.25003 9.50004C9.25003 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.50004C14.75 7.98126 13.5188 6.75004 12 6.75004ZM13.7459 13.3116C13.2871 13.25 12.7143 13.25 12.0494 13.25H11.9507C11.2858 13.25 10.7129 13.25 10.2542 13.3116C9.76255 13.3777 9.29128 13.5268 8.90904 13.9091C8.52679 14.2913 8.37773 14.7626 8.31163 15.2542C8.24996 15.7129 8.24999 16.2858 8.25003 16.9507L8.25003 21.25H9.75003H14.25H15.75L15.75 16.9507L15.75 16.8271C15.7498 16.2146 15.7462 15.6843 15.6884 15.2542C15.6223 14.7626 15.4733 14.2913 15.091 13.9091C14.7088 13.5268 14.2375 13.3777 13.7459 13.3116Z"
                          fill="currentColor"
                        />
                        <g opacity="0.5">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                            fill="currentColor"
                          />
                        </g>
                        <path
                          d="M12.0494 13.25C12.7142 13.25 13.2871 13.2499 13.7458 13.3116C14.2375 13.3777 14.7087 13.5268 15.091 13.909C15.4732 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827L15.75 21.25H8.25L8.25 16.9506C8.24997 16.2858 8.24993 15.7129 8.31161 15.2542C8.37771 14.7625 8.52677 14.2913 8.90901 13.909C9.29126 13.5268 9.76252 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9506 13.25H12.0494Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16 3H18.5C18.7761 3 19 3.22386 19 3.5L19 7.63955L15.5 4.83955V3.5C15.5 3.22386 15.7239 3 16 3Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-lg font-medium text-slate-900 sm:text-xl dark:text-slate-100">
                        Nestora
                      </span>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 z-20 w-full"
                        >
                          <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-card p-4 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md">
                            {navLinks.map((item) => (
                              <a
                                key={item.name}
                                className="rounded-lg px-3 py-1.5 text-slate-600 hover:bg-cyan-500/10 hover:text-cyan-500 dark:text-slate-300"
                                href={item.href}
                              >
                                {item.name}
                              </a>
                            ))}
                            <Button className="rounded-full border-0 border-b-2 border-b-slate-900 bg-slate-800 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:flex">
                              Buy Now
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="hidden flex-row gap-2 text-slate-600 md:flex dark:text-slate-300">
                      {navLinks.map((item) => (
                        <a
                          key={item.name}
                          className="rounded-full px-3 py-1.5 hover:bg-cyan-500/10 hover:text-cyan-500"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <Button className="hidden rounded-full border-0 border-b-2 border-b-slate-900 bg-slate-800 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 md:flex">
                      Buy Now
                    </Button>
                    <div className="flex md:hidden">
                      <Button
                        size="icon-lg"
                        className="rounded-full bg-cyan-500 shadow-[0_8px_10px_-2px_#8f8f8f6b]"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {isOpen ? (
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 7h18M3 12h18M3 17h18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <div className="-z-10 flex items-center gap-1 rounded-r-lg border-l-2 border-sky-500 bg-sky-500/20 px-3 py-2 text-sky-500 backdrop-blur-md">
                    <Sparkles className="size-5 text-orange-500" />
                    <span className="text-md font-semibold">
                      125.8k Happy Customers
                    </span>
                  </div>
                  <h1 className="text-lg font-normal text-slate-900 sm:text-4xl dark:text-slate-100">
                    Unwind in Stunning Resorts, Stay in Elegant Hotels.
                  </h1>
                  <p className="text-base text-slate-700 dark:text-slate-300">
                    Escape to a world of comfort and luxury with stunning
                    resorts and elegant hotels. Whether you're planning a
                    relaxing vacation or a memorable getaway, enjoy exceptional
                    hospitality, premium amenities, and unforgettable
                    experiences in beautiful destinations.
                  </p>
                  <div className="flex flex-row flex-wrap gap-4">
                    <Button className="rounded-full border-0 border-b-2 border-b-cyan-700 bg-cyan-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90 lg:flex">
                      Explore Deals
                    </Button>
                    <Button className="rounded-full bg-card text-card-foreground hover:translate-y-1 hover:opacity-90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-6/12">
              <div className="relative flex flex-col gap-6 rounded-lg bg-card/20 p-6 backdrop-blur-2xl sm:gap-10 lg:rounded-3xl lg:p-8">
                <div className="flex flex-col gap-6">
                  <Field>
                    <FieldLabel htmlFor="whereto">Where to</FieldLabel>
                    <div className="relative w-120 max-w-full">
                      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-cyan-500">
                          <Send className="size-5 md:size-6" />
                        </div>
                      </div>
                      <Input
                        className="border-0 bg-card/50 py-5 pl-16 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md"
                        id="whereto"
                        type="text"
                        placeholder="Where to"
                      />
                    </div>
                  </Field>
                  <Field>
                    <FieldLabel>Date</FieldLabel>
                    <div className="relative w-120 max-w-full">
                      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-cyan-500">
                          <CalendarIcon className="size-5 md:size-6" />
                        </div>
                      </div>
                      <Popover>
                        <PopoverTrigger className="disabled:bg-secondary-200/10 block w-full rounded-lg border-0 border-border bg-card/50 px-3 py-5 pl-16 text-base shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md placeholder:text-[#bec8d0] focus:border-primary focus:outline-none disabled:pointer-events-none dark:focus:border-primary">
                          <div className="flex w-full flex-col overflow-hidden text-left">
                            <span className="truncate text-sm font-medium">
                              {dateText ? (
                                dateText
                              ) : (
                                <span className="text-[#bec8d0]">
                                  Select date
                                </span>
                              )}
                            </span>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={setDateRange}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </Field>
                  <Field>
                    <FieldLabel>Travelers</FieldLabel>
                    <div className="relative w-120 max-w-full">
                      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-cyan-500">
                          <User className="size-5 md:size-6" />
                        </div>
                      </div>

                      <div className="disabled:bg-secondary-200/10 block w-full rounded-lg border-0 border-border bg-card/50 px-3 py-5 pl-16 text-base shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md placeholder:text-[#bec8d0] focus:border-primary focus:outline-none disabled:pointer-events-none dark:focus:border-primary">
                        <div className="flex w-full flex-col overflow-hidden text-left">
                          <span className="truncate text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Select
                                value={adults}
                                onValueChange={(val) => val && setAdults(val)}
                              >
                                <SelectTrigger className="h-auto border-none bg-transparent p-0 font-medium shadow-none focus:ring-0 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center dark:text-slate-100">
                                  <SelectValue placeholder="Adults" />
                                </SelectTrigger>
                                <SelectContent align="start">
                                  <SelectItem value="1 Adult">
                                    1 Adult
                                  </SelectItem>
                                  <SelectItem value="2 Adults">
                                    2 Adults
                                  </SelectItem>
                                  <SelectItem value="3 Adults">
                                    3 Adults
                                  </SelectItem>
                                  <SelectItem value="4 Adults">
                                    4 Adults
                                  </SelectItem>
                                  <SelectItem value="5+ Adults">
                                    5+ Adults
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <span className="text-xs font-semibold text-slate-500">
                                •
                              </span>
                              <Select
                                value={childrenCount}
                                onValueChange={(val) =>
                                  val && setChildrenCount(val)
                                }
                              >
                                <SelectTrigger className="h-auto border-none bg-transparent p-0 font-medium shadow-none focus:ring-0 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center dark:text-slate-100">
                                  <SelectValue placeholder="Children" />
                                </SelectTrigger>
                                <SelectContent align="start">
                                  <SelectItem value="0 Child">
                                    0 Child
                                  </SelectItem>
                                  <SelectItem value="1 Child">
                                    1 Child
                                  </SelectItem>
                                  <SelectItem value="2 Children">
                                    2 Children
                                  </SelectItem>
                                  <SelectItem value="3 Children">
                                    3 Children
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Field>
                  <Button
                    size="lg"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-0 border-b-2 border-b-cyan-700 bg-cyan-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] hover:translate-y-1 hover:opacity-90"
                  >
                    <Search className="size-5" />
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
            plugins={[plugin]}
            onMouseEnter={() => plugin.stop()}
            onMouseLeave={() => plugin.reset()}
          >
            <CarouselContent>
              {Gallery.map((gallery, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-3/4 pl-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="group relative aspect-[6/5] w-full overflow-hidden rounded-3xl bg-card shadow-lg">
                    <img
                      src={gallery.images}
                      alt={gallery.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <button
                      onClick={() => toggleLike(idx)}
                      className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-md transition-colors hover:bg-slate-100"
                    >
                      <Heart
                        className={`size-5 transition-colors duration-300 ${
                          likedItems[idx]
                            ? "fill-red-500 text-red-500"
                            : "text-slate-800"
                        }`}
                      />
                    </button>

                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                      <div className="flex flex-col gap-2">
                        <div>
                          <h3 className="text-xl leading-tight text-white">
                            {gallery.title}
                          </h3>
                          <p className="mt-0.5 text-base text-white/90">
                            {gallery.location}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/80">
                          <span className="flex items-center gap-1">
                            <Users className="size-3.5" />
                            {gallery.guests}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bed className="size-3.5" />
                            {gallery.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="size-3.5" />
                            {gallery.baths}
                          </span>
                          <span className="flex items-center gap-1">
                            <Ruler className="size-3.5" />
                            {gallery.area}
                          </span>
                        </div>

                        <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-2.5">
                          <span className="text-lg font-bold text-lime-500">
                            {gallery.price}
                            <span className="text-xs font-normal text-white/80">
                              /night
                            </span>
                          </span>
                          <span className="flex items-center gap-1 text-sm font-medium text-white/90">
                            <Star className="size-4 fill-amber-500 text-amber-500" />
                            {gallery.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

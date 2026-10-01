// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type GalleryItem = {
  title: string
  images: string
  description: string
  userName: string
  userImage: string
  buttonText: string
  align?: string
}

const ContentsVehicle: GalleryItem[] = [
  {
    title: "Shelby Mustang GT500",
    images: "https://cdn.uiable.com/block/img-content11-car-1.png",
    description:
      "Experience the raw power and aggressive styling of the iconic Shelby Mustang GT500, engineered for thrilling performance on every drive.",
    userName: "James Carter",
    userImage: "https://cdn.uiable.com/block/profile-1.png",
    buttonText: "View Details",
    align: "left",
  },
  {
    title: "Ford Mustang Shelby",
    images: "https://cdn.uiable.com/block/img-content11-car-2.png",
    description:
      "A bold combination of muscular design, racing heritage, and unmatched road presence built for enthusiasts.",
    userName: "Sophia Miller",
    userImage: "https://cdn.uiable.com/block/profile-2.png",
    buttonText: "Explore Now",
    align: "left",
  },
  {
    title: "BMW M4 Red Edition",
    images: "https://cdn.uiable.com/block/img-content11-car-3.png",
    description:
      "A striking red BMW M4 featuring sporty design, premium comfort, and dynamic performance for every journey.",
    userName: "Emma Johnson",
    userImage: "https://cdn.uiable.com/block/profile-6.png",
    buttonText: "Learn More",
    align: "left",
  },
  {
    title: "Nissan GT-R",
    images: "https://cdn.uiable.com/block/img-content11-car-4.png",
    description:
      "Known as the Godzilla of sports cars, the Nissan GT-R offers incredible speed, advanced technology, and legendary performance.",
    userName: "Olivia Wilson",
    userImage: "https://cdn.uiable.com/block/profile-4.png",
    buttonText: "See More",
    align: "left",
  },
  {
    title: "Maserati GranTurismo",
    images: "https://cdn.uiable.com/block/img-content11-car-5.png",
    description:
      "Italian elegance meets exhilarating performance with the Maserati GranTurismo, crafted for luxury and excitement.",
    userName: "Daniel Harris",
    userImage: "https://cdn.uiable.com/block/profile-5.png",
    buttonText: "Discover",
    align: "left",
  },
  {
    title: "BMW M4 Competition",
    images: "https://cdn.uiable.com/block/img-content11-car-6.png",
    description:
      "Luxury meets high performance with the BMW M4 Competition, delivering precision handling and an unforgettable driving experience.",
    userName: "Ethan Brooks",
    userImage: "https://cdn.uiable.com/block/profile-3.png",
    buttonText: "View Car",
    align: "left",
  },
  {
    title: "BMW 3 Series",
    images: "https://cdn.uiable.com/block/img-content11-car-7.png",
    description:
      "The perfect balance of executive luxury, innovative technology, and everyday driving comfort in the BMW 3 Series.",
    userName: "Michael Scott",
    userImage: "https://cdn.uiable.com/block/profile-7.png",
    buttonText: "View Details",
    align: "left",
  },
  {
    title: "Ford Mustang Dark Horse",
    images: "https://cdn.uiable.com/block/img-content11-car-8.png",
    description:
      "A modern American muscle car designed with track-ready performance, bold styling, and an unmistakable road presence.",
    userName: "Ava Thompson",
    userImage: "https://cdn.uiable.com/block/profile-8.png",
    buttonText: "Explore Now",
    align: "left",
  },
]

const ContentsDestination: GalleryItem[] = [
  {
    title: "Maldives Paradise Beach",
    images: "https://cdn.uiable.com/block/img-content11-destination-1.png",
    description:
      "Relax on crystal-clear turquoise waters, white sandy beaches, and luxurious overwater villas in the breathtaking Maldives.",
    userName: "Emma Wilson",
    userImage: "https://cdn.uiable.com/block/profile-1.png",
    buttonText: "Explore Destination",
    align: "center",
  },
  {
    title: "Bora Bora Lagoon",
    images: "https://cdn.uiable.com/block/img-content11-destination-2.png",
    description:
      "Experience the beauty of Bora Bora with its vibrant blue lagoon, tropical scenery, and unforgettable island adventures.",
    userName: "Daniel Carter",
    userImage: "https://cdn.uiable.com/block/profile-2.png",
    buttonText: "View Details",
    align: "center",
  },
  {
    title: "Canary Islands Coast",
    images: "https://cdn.uiable.com/block/img-content11-destination-3.png",
    description:
      "Discover dramatic volcanic landscapes, scenic coastal roads, and golden beaches perfect for your next getaway.",
    userName: "Sophia Miller",
    userImage: "https://cdn.uiable.com/block/profile-3.png",
    buttonText: "Discover More",
    align: "center",
  },
  {
    title: "Hallstatt, Austria",
    images: "https://cdn.uiable.com/block/img-content11-destination-4.png",
    description:
      "Stroll through the charming lakeside village of Hallstatt, surrounded by majestic mountains and timeless architecture.",
    userName: "James Anderson",
    userImage: "https://cdn.uiable.com/block/profile-4.png",
    buttonText: "Visit Now",
    align: "center",
  },
  {
    title: "Tropical Island Escape",
    images: "https://cdn.uiable.com/block/img-content11-destination-5.png",
    description:
      "Escape to a peaceful island paradise featuring swaying palm trees, pristine beaches, and crystal-clear ocean views.",
    userName: "Olivia Johnson",
    userImage: "https://cdn.uiable.com/block/profile-5.png",
    buttonText: "Book Trip",
    align: "center",
  },
  {
    title: "Monument Valley",
    images: "https://cdn.uiable.com/block/img-content11-destination-6.png",
    description:
      "Witness the iconic sandstone buttes and breathtaking desert landscapes that define the American Southwest.",
    userName: "Michael Brown",
    userImage: "https://cdn.uiable.com/block/profile-6.png",
    buttonText: "Explore",
    align: "center",
  },
  {
    title: "Coastal Lighthouse Drive",
    images: "https://cdn.uiable.com/block/img-content11-destination-7.png",
    description:
      "Enjoy scenic ocean views, winding coastal roads, and picturesque lighthouses on an unforgettable seaside journey.",
    userName: "Ethan Brooks",
    userImage: "https://cdn.uiable.com/block/profile-7.png",
    buttonText: "See More",
    align: "center",
  },
  {
    title: "Tower Bridge, London",
    images: "https://cdn.uiable.com/block/img-content11-destination-8.png",
    description:
      "Visit one of London's most famous landmarks, where historic architecture meets the vibrant atmosphere of the River Thames.",
    userName: "Ava Thompson",
    userImage: "https://cdn.uiable.com/block/profile-8.png",
    buttonText: "Explore City",
    align: "center",
  },
]

const ContentsPeople: GalleryItem[] = [
  {
    title: "Winter Fashion Style",
    images: "https://cdn.uiable.com/block/img-content11-people-1.png",
    description:
      "Stay cozy and stylish with a modern winter look featuring warm layers, soft accessories, and timeless fashion.",
    userName: "Emma Wilson",
    userImage: "https://cdn.uiable.com/block/profile-1.png",
    buttonText: "View Profile",
    align: "center",
  },
  {
    title: "Natural Portrait",
    images: "https://cdn.uiable.com/block/img-content11-people-2.png",
    description:
      "A clean and elegant portrait showcasing natural beauty, confidence, and a calm outdoor atmosphere.",
    userName: "Daniel Carter",
    userImage: "https://cdn.uiable.com/block/profile-2.png",
    buttonText: "Learn More",
    align: "center",
  },
  {
    title: "Golden Hour Beauty",
    images: "https://cdn.uiable.com/block/img-content11-people-3.png",
    description:
      "Captured during sunset, this portrait highlights warm lighting, minimal style, and a peaceful setting.",
    userName: "Sophia Miller",
    userImage: "https://cdn.uiable.com/block/profile-3.png",
    buttonText: "View Story",
    align: "center",
  },
  {
    title: "Creative Summer Vibes",
    images: "https://cdn.uiable.com/block/img-content11-people-4.png",
    description:
      "Express your personality with vibrant colors, trendy outfits, and playful confidence in every moment.",
    userName: "James Anderson",
    userImage: "https://cdn.uiable.com/block/profile-4.png",
    buttonText: "Explore Style",
    align: "center",
  },
  {
    title: "Casual Everyday Look",
    images: "https://cdn.uiable.com/block/img-content11-people-5.png",
    description:
      "A relaxed lifestyle portrait featuring casual fashion, genuine smiles, and effortless everyday charm.",
    userName: "Olivia Johnson",
    userImage: "https://cdn.uiable.com/block/profile-5.png",
    buttonText: "See Profile",
    align: "center",
  },
  {
    title: "Modern Workspace",
    images: "https://cdn.uiable.com/block/img-content11-people-6.png",
    description:
      "A bright and inspiring workspace portrait reflecting creativity, productivity, and a positive mindset.",
    userName: "Michael Brown",
    userImage: "https://cdn.uiable.com/block/profile-6.png",
    buttonText: "Read More",
    align: "center",
  },
  {
    title: "Outdoor Lifestyle",
    images: "https://cdn.uiable.com/block/img-content11-people-7.png",
    description:
      "Enjoy fresh air and natural surroundings while embracing a simple, confident, and modern lifestyle.",
    userName: "Ethan Brooks",
    userImage: "https://cdn.uiable.com/block/profile-7.png",
    buttonText: "Discover",
    align: "center",
  },
  {
    title: "Confident Smile",
    images: "https://cdn.uiable.com/block/img-content11-people-8.png",
    description:
      "A cheerful portrait that captures confidence, positivity, and an approachable personality in a natural setting.",
    userName: "Ava Thompson",
    userImage: "https://cdn.uiable.com/block/profile-8.png",
    buttonText: "Meet Now",
    align: "center",
  },
]

type ContentImageProps = {
  gallery: GalleryItem
}

const ContentImage = ({ gallery }: ContentImageProps) => (
  <div className="h-full w-full bg-card shadow-[0_0_40px_-8px_#4680ff38]">
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 z-10 w-full transition-all duration-500"
        style={{
          backgroundImage: `url(${gallery.images})`,
          backgroundSize: "cover",
          backgroundPosition: gallery.align || "left",
        }}
      ></div>
      <div className="absolute inset-0 z-20 flex justify-center px-8 py-16">
        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-transparent to-20%"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent to-20%"></div>
        <div className="flex h-full flex-col justify-end gap-6">
          <Dialog>
            <DialogTrigger className="z-30">
              <div className="relative z-40 mx-auto flex cursor-pointer flex-col gap-2 rounded-lg p-4 backdrop-blur-md">
                <h2 className="text-lg font-medium text-slate-100 md:text-xl lg:text-2xl">
                  {gallery.title}
                </h2>
              </div>
            </DialogTrigger>

            <DialogContent className="w-300! max-w-full! overflow-hidden border-4! border-solid! border-slate-900 bg-slate-900 p-0 shadow-none [&>button]:rounded-full [&>button]:bg-slate-800 [&>button]:text-slate-100 [&>button:hover]:text-slate-900">
              <div className="flex flex-col items-center xl:flex-row">
                <div className="basis-full xl:basis-6/12">
                  <img
                    src={gallery.images}
                    alt="Team meeting in a conference room"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="basis-full xl:basis-6/12">
                  <div className="flex flex-col items-start gap-4 p-4 md:gap-6 md:p-6">
                    <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
                      {gallery.title}
                    </h2>
                    <p className="max-w-200 text-slate-300">
                      {gallery.description}
                    </p>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar className="size-10! shrink-0 backdrop-blur-md after:border-0">
                        <AvatarImage
                          src={gallery.userImage}
                          alt={gallery.userName}
                        />
                        <AvatarFallback>
                          {gallery.userName.split(" ")[0].charAt(0) +
                            gallery.userName.split(" ")[1].charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grow">
                        <div className="text-base font-medium text-slate-200 sm:text-lg">
                          {gallery.userName}
                        </div>
                      </div>
                    </div>
                    <Button className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 hover:translate-y-1 hover:opacity-90">
                      {gallery.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
)
//  ------------------------------ | CONTENT 11 | ------------------------------  //

export default function Content11() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-full">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-12">
          <Tabs defaultValue="vehicle" className="w-full items-center gap-0">
            <TabsList className="absolute inset-x-auto top-5 z-20 rounded-full bg-slate-900/10 backdrop-blur-lg">
              <TabsTrigger
                className="rounded-full border-0 px-5 py-1 text-lg text-white/80 uppercase hover:text-white dark:text-white/80 dark:hover:text-white data-active:bg-slate-800/50 dark:data-active:bg-slate-800/50"
                value="vehicle"
              >
                Vehicle
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full border-0 px-5 py-1 text-lg text-white/80 uppercase hover:text-white dark:text-white/80 dark:hover:text-white data-active:bg-slate-800/50 dark:data-active:bg-slate-800/50"
                value="destination"
              >
                Destination
              </TabsTrigger>
              <TabsTrigger
                className="rounded-full border-0 px-5 py-1 text-lg text-white/80 uppercase hover:text-white dark:text-white/80 dark:hover:text-white data-active:bg-slate-800/50 dark:data-active:bg-slate-800/50"
                value="people"
              >
                People
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vehicle" className="mt-0 w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {ContentsVehicle.map((gallery, idx) => (
                    <CarouselItem
                      key={idx}
                      className="group h-screen min-h-180 basis-full cursor-move pl-0 md:basis-6/12 lg:basis-3/12"
                    >
                      <ContentImage gallery={gallery} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="destination" className="mt-0 w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {ContentsDestination.map((gallery, idx) => (
                    <CarouselItem
                      key={idx}
                      className="group h-screen min-h-180 basis-full cursor-move pl-0 md:basis-6/12 lg:basis-3/12"
                    >
                      <ContentImage gallery={gallery} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="people" className="mt-0 w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {ContentsPeople.map((gallery, idx) => (
                    <CarouselItem
                      key={idx}
                      className="group h-screen min-h-180 basis-full cursor-move pl-0 md:basis-6/12 lg:basis-3/12"
                    >
                      <ContentImage gallery={gallery} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

"use client";

import { useMemo } from "react";

// shadcn
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// third party
import Autoplay from "embla-carousel-autoplay";

//  ------------------------------ | CAROUSEL - PLUGIN | ------------------------------  //

export default function CarouselPlugin() {
  const plugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  return (
    <Carousel
      plugins={[plugin]}
      className="w-full max-w-[10rem] sm:max-w-xs"
      onMouseEnter={() => plugin.stop()}
      onMouseLeave={() => plugin.reset()}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-primary/10 border-primary">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold text-primary">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

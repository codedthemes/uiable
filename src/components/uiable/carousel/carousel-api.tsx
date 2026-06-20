"use client";

import { useEffect, useState } from "react";

// shadcn
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

//  ------------------------------ | CAROUSEL - API | ------------------------------  //

export default function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => setCount(api.scrollSnapList().length), 0);
    setTimeout(() => setCurrent(api.selectedScrollSnap() + 1), 0);

    api.on("select", () => {
      setTimeout(() => setCurrent(api.selectedScrollSnap() + 1), 0);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-[10rem] sm:max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="m-px bg-primary/10 border-primary">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold text-primary">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
}

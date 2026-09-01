"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | E - COMMERCE 2 | ------------------------------  //

export default function Ecommerce1() {
  const [activeImage, setActiveImage] = useState(6)
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-slate-900 to-slate-800 py-24 sm:py-32">
      <span className="absolute -bottom-80 left-2/4 block h-100 w-100 -translate-x-2/4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 lg:top-2/4 lg:-right-120 lg:left-auto lg:-translate-y-2/4"></span>
      <div className="absolute inset-0 z-20 bg-slate-900/10 backdrop-blur-[150px]"></div>
      <div className="relative z-30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-300 rounded-xl bg-slate-800">
            <div className="flex flex-col gap-0 xl:flex-row xl:items-center">
              <div className="min-w-[1%] basis-full p-4 xl:basis-6/12">
                <div className="flex w-full flex-col gap-2">
                  <div className="group grow rounded-lg bg-slate-700/50 p-1">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={`https://cdn.uiable.com/block/img-prod-${activeImage}.png`}
                        alt="Team meeting in a conference room"
                        className="w-full transition-all duration-300 group-hover:scale-125"
                      />
                      <div className="absolute top-0 right-0 flex flex-col items-center justify-center gap-2 p-4 text-white">
                        <Button
                          className="size-8 rounded-xl bg-white/10 p-0 text-pink-500 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-cyan-500 sm:size-10"
                          aria-label="Button"
                        >
                          <svg
                            className="size-5 fill-pink-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                        <Button
                          className="size-8 rounded-xl bg-white/10 p-0 text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-cyan-500 sm:size-10"
                          aria-label="Button"
                        >
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                      <div className="absolute bottom-0 left-0 flex flex-row items-center gap-2 p-4 text-white">
                        <Button
                          className="size-8 rounded-xl bg-white/10 p-0 text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-cyan-500 sm:size-10"
                          aria-label="Button"
                        >
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9.2 11.7h5M11.7 14.2v-5M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                        <Button
                          className="size-8 rounded-xl bg-white/10 p-0 text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-cyan-500 sm:size-10"
                          aria-label="Button"
                        >
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 11.7h5M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                        <Button
                          className="size-8 rounded-xl bg-white/10 p-0 text-white backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-cyan-500 sm:size-10"
                          aria-label="Button"
                        >
                          <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="shrink-0 overflow-y-auto"
                    style={{ scrollbarWidth: "none" }}
                  >
                    <div className="flex flex-row gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div
                          className={`size-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-slate-700/50 p-0.5 shadow-[0_0_40px_-8px_#4680ff38] transition-all ${
                            activeImage === i
                              ? "scale-95 border-cyan-600 opacity-100"
                              : "border-transparent opacity-50 hover:border-slate-700"
                          }`}
                          key={i}
                          data-active={activeImage === i}
                          onClick={() => setActiveImage(i)}
                        >
                          <img
                            src={`https://cdn.uiable.com/block/img-prod-${i}.png`}
                            alt="Team meeting in a conference room"
                            className="w-full rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-full xl:basis-6/12">
                <div className="relative mx-auto flex flex-col items-start gap-8 p-5 sm:p-10">
                  <div className="flex w-full flex-row items-center gap-6">
                    <div className="flex items-center gap-1 rounded-xl bg-orange-500/10 px-2 py-2 text-orange-500 backdrop-blur-md">
                      <svg
                        className="size-5 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-row gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className={`size-5 text-cyan-500 ${
                            i <= 4 ? "fill-cyan-500" : "fill-transparent"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start gap-2">
                      <p className="max-w-200 text-lg font-semibold text-slate-500 italic">
                        Step Into Comfort & Style
                      </p>
                      <h2 className="text-xl font-light text-slate-300 sm:text-4xl sm:leading-12">
                        HypeSole Modern Street Fashion Footwear
                      </h2>
                    </div>
                    <p className="line-clamp-3 max-w-110 text-slate-500">
                      Discover the perfect pair for every occasion at
                      SoleSprint. From everyday sneakers and running shoes to
                      premium formal wear and street-style essentials, we bring
                      together comfort, performance, and fashion in one place.
                      Shop top-quality footwear designed to keep you moving with
                      confidence.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-slate-300">
                      Size <span className="text-slate-400">(Uk)</span> :
                    </span>
                    <div className="flex flex-row flex-wrap gap-1">
                      {[7, 8, 9, 10, 11, 12].map((i) => (
                        <label
                          key={i}
                          className="min-w-12 cursor-pointer rounded-lg bg-slate-500/5 px-4 py-2 text-center text-slate-400 has-checked:bg-cyan-500 has-checked:text-white"
                        >
                          <input
                            type="radio"
                            name="size"
                            className="appearance-none forced-colors:appearance-auto"
                            defaultChecked={i == 10}
                          />
                          {i}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row items-end gap-2">
                    <span className="text-xl font-semibold text-slate-100 sm:text-5xl">
                      $99
                    </span>
                    <span className="text-lg font-semibold text-slate-500/50 line-through sm:text-xl">
                      $149
                    </span>
                  </div>
                  <div className="grid w-full grid-cols-2 gap-4">
                    <Button
                      size="lg"
                      className="bg-cyan-600 hover:translate-y-1 hover:opacity-90"
                    >
                      Add to cart
                    </Button>
                    <Button
                      size="lg"
                      className="bg-slate-700 hover:translate-y-1 hover:opacity-90"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

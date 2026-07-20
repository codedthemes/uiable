// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | PORTFOLIO 1 | ------------------------------  //

export default function Portfolio1() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:gap-6">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-xl font-medium text-slate-100 sm:text-3xl">
              Featured Projects
            </h2>
            <p className="max-w-150 text-slate-300">
              Explore a selection of projects that showcase my expertise in
              UI/UX design and web development. Each project is crafted with a
              focus on clean design, seamless user experiences, and modern
              development practices.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="basis-full md:basis-6/12">
              <div className="relative">
                <img
                  src="/assets/images/block/img-portfolio-1.png"
                  alt="Portfolio showcase"
                  className="relative z-20 h-auto"
                />
                <div className="absolute top-2/4 left-2/4 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 md:size-80 lg:size-120"></div>
              </div>
            </div>
            <div className="basis-full md:basis-6/12">
              <div className="flex flex-col gap-4 sm:gap-6">
                <svg
                  className="size-20 fill-purple-500"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <path d="M73.87573,111.39355l-.009-.03369L42.51636,148.98047a7.99958,7.99958,0,0,0-1.66358,6.85693l12.3628,55.63281a8,8,0,0,0,12.80713,4.51172L96,192C78.36523,161.44922,72.74268,134.47656,73.87573,111.39355Z" />
                  </g>
                  <g opacity="0.1">
                    <path d="M181.52239,110.6714l.009-.03369,31.35034,37.6206a7.99958,7.99958,0,0,1,1.66358,6.85693l-12.3628,55.63282a8,8,0,0,1-12.80712,4.51172l-29.9773-23.98194C177.03289,160.72706,182.65544,133.75441,181.52239,110.6714Z" />
                  </g>
                  <g>
                    <path d="M144,216H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" />
                    <circle cx="128" cy="96" r="12" />
                    <path d="M219.62891,143.85889l-30.23658-36.28418a124.52267,124.52267,0,0,0-7.98022-34.8833c-11.61719-30.21192-32.15625-49.999-43.36523-59.10547a16.07708,16.07708,0,0,0-20.07813-.0669C106.61328,22.61621,85.81055,42.38867,74.07617,72.605A122.76188,122.76188,0,0,0,65.979,108.32861L36.37109,143.85889A16.10066,16.10066,0,0,0,33.043,157.57275l12.36328,55.63282a15.98523,15.98523,0,0,0,25.61328,9.023L98.80566,200h58.38868l27.78515,22.22852a15.91184,15.91184,0,0,0,9.96485,3.51709,16.0905,16.0905,0,0,0,5.34668-.91944,15.90581,15.90581,0,0,0,10.30273-11.62012L222.957,157.57373A16.102,16.102,0,0,0,219.62891,143.85889ZM127.9668,26.01074C198.25391,83.126,169.43359,157.01074,155.25,184H100.67871C52.6709,96.27734,109.22559,41.02637,127.9668,26.01074ZM61.02539,209.73486l-12.36328-55.6333,17.92651-21.5122q3.40906,28.0371,19.14038,57.38281Zm133.94922,0-24.74976-19.7998q15.53064-29.55175,18.74341-57.87695l18.36963,22.04345Z" />
                  </g>
                </svg>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h2 className="text-lg font-medium text-slate-100 sm:text-2xl">
                    Travel Mobile App
                  </h2>
                  <span className="text-sm font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    UI/UX DESIGN & MOBILE EXPERIENCE
                  </span>
                </div>
                <p className="max-w-150 text-slate-300">
                  A modern travel application designed to inspire exploration
                  and simplify trip planning. The interface emphasizes intuitive
                  navigation, vibrant visuals, and a user-friendly experience
                  that helps travelers discover destinations and organize their
                  journeys effortlessly.
                </p>
                <div>
                  <Button
                    size="lg"
                    className="rounded-full border-0 border-b-2 border-b-purple-700 bg-purple-500 lg:flex"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

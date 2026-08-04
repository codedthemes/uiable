// shadcn
import { Button } from "@/components/ui/button"

// constants
const portfolioItems = [
  {
    image: "/assets/images/block/img-portfolio-5-1.png",
    alt: "Modern corporate workspace",
    title: "Corporate Workspace",
    description:
      "A contemporary office designed to foster collaboration, productivity, and a comfortable working environment.",
  },
  {
    image: "/assets/images/block/img-portfolio-5-2.png",
    alt: "Modern meeting lounge",
    title: "Creative Meeting Lounge",
    description:
      "An elegant lounge space created for client meetings, team discussions, and meaningful collaboration.",
  },
  {
    image: "/assets/images/block/img-portfolio-5-3.png",
    alt: "Open collaboration area",
    title: "Open Collaboration Hub",
    description:
      "A bright and flexible workspace that encourages creativity, teamwork, and innovative thinking.",
  },
]

//  ------------------------------ | PORTFOLIO - 5 | ------------------------------  //

export default function Portfolio5() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-to-b from-red-500 to-orange-500"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mx-auto flex max-w-160 flex-col items-center gap-3 text-center sm:gap-5">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Explore Our Featured Projects
            </h2>
            <p className="max-w-200 text-slate-600 dark:text-slate-100">
              Take a look at some of our recent projects that showcase modern
              design, innovative solutions, and attention to detail. Each
              project reflects our commitment to creating exceptional digital
              experiences.
            </p>
          </div>
          <div className="mx-auto w-330 max-w-full rounded-md border border-card bg-card/20 p-3 md:rounded-3xl md:p-5">
            <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
              {portfolioItems.map((item, index) => (
                <div key={index} className="basis-full lg:basis-4/12">
                  <div className="flex flex-col gap-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full rounded-xl"
                    />
                    <div className="flex flex-row gap-3 px-3">
                      <div className="grow">
                        <div className="flex flex-col gap-2">
                          <p className="line-clamp-1 text-xl text-slate-800 dark:text-slate-100">
                            {item.title}
                          </p>
                          <p className="line-clamp-2 text-base text-slate-600 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Button
                          variant="link"
                          className="text-white-500 flex size-12 items-center justify-center rounded-lg border-0 text-rose-500"
                        >
                          <svg
                            className="size-8 transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-90 md:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
                              className="opacity-0 group-aria-expanded/accordion-trigger:opacity-15"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <Button className="rounded-full bg-rose-500">
              Explore Portfolio
            </Button>
            <Button className="rounded-full bg-card text-card-foreground">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

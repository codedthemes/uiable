// Curve Icons
function CurveIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C22.3858 0 0 22.3858 0 50V0H50Z" fill="currentColor" />
    </svg>
  )
}
//  ------------------------------ | FEATURE - 4 | ------------------------------  //

export default function Feature4() {
  const features = [
    {
      title: "Custom Cabinetry",
      subtitle: "Tailored Storage Solutions",
      colorClass: "bg-pink-500",
      description:
        "Maximize efficiency and style with bespoke cabinets designed to fit your unique layout, cookware, and aesthetic preferences.",
    },
    {
      title: "Smart Appliances",
      subtitle: "Modern Culinary Technology",
      colorClass: "bg-violet-500",
      description:
        "Integrate state-of-the-art refrigerators, ovens, and cooktops that connect seamlessly to your smart home for effortless cooking.",
    },
    {
      title: "Premium Countertops",
      subtitle: "Durable & Elegant Surfaces",
      colorClass: "bg-blue-500",
      description:
        "Choose from exquisite marble, quartz, or granite surfaces that offer both outstanding heat-resistance and a luxurious focal point.",
    },
    {
      title: "Ergonomic Layouts",
      subtitle: "Optimal Kitchen Flow",
      colorClass: "bg-cyan-500",
      description:
        "Optimize the classic work triangle—sink, stove, and refrigerator—to ensure movement between prep and cooking zones is smooth and effortless.",
    },
    {
      title: "Ambient Lighting",
      subtitle: "Warmth & Task Visibility",
      colorClass: "bg-lime-500",
      description:
        "Combine under-cabinet LEDs, statement pendant lights, and dimmable tracks to create the perfect mood for dining and prep work.",
    },
    {
      title: "Multi-Functional Islands",
      subtitle: "Social & Prep Hubs",
      colorClass: "bg-amber-500",
      description:
        "Design central islands featuring built-in sinks, bar seating, and integrated power outlets, transforming your kitchen into a social hub.",
    },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group h-full rounded-lg bg-card">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={`https://cdn.uiable.com/block/img-furniture-3.png`}
              alt="Team meeting in a conference room"
              className="w-full transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 flex flex-col items-start justify-start">
              <div className="relative flex items-center gap-3 bg-card py-1 pr-6 sm:py-2">
                <div className="absolute top-0 right-0 size-4 translate-x-full rotate-0 text-card">
                  <CurveIcon />
                </div>
                <div className="absolute right-0 bottom-0 size-4 translate-x-full -rotate-90 text-card">
                  <CurveIcon />
                </div>
                <svg
                  className="size-6 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 22H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.35 5.52l-4 2.86c-.53.38-1.29.15-1.52-.46l-1.89-5.04c-.32-.87-1.55-.87-1.87 0l-1.9 5.03c-.23.62-.98.85-1.51.46l-4-2.86c-.8-.56-1.86.23-1.53 1.16l4.16 11.65c.14.4.52.66.94.66h9.53c.42 0 .8-.27.94-.66l4.16-11.65c.34-.93-.72-1.72-1.51-1.15Zm-5.85 9.23h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-md font-medium text-orange-400">
                  Exquisite
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-r-2xl bg-card py-2 pr-4">
                <span className="text-base font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                  Heart of the Home:<span className="hidden"></span> Kitchen
                  Design
                </span>
              </div>
              <div className="relative flex items-center gap-1 rounded-br-2xl bg-card py-1 pr-4 sm:py-2">
                <div className="absolute top-0 right-0 size-4 translate-x-full rotate-0 text-card">
                  <CurveIcon />
                </div>
                <div className="absolute bottom-0 left-0 size-4 translate-y-full rotate-0 text-card">
                  <CurveIcon />
                </div>
                <span className="text-base font-medium text-slate-800 sm:text-lg dark:text-slate-50">
                  Sophisticated Culinary Spaces
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto mt-5 grid max-w-270 grid-cols-12 gap-6 lg:-mt-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative h-full overflow-hidden rounded-xl bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8">
                  <div className="relative z-40 flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                        {feature.title}
                      </h2>
                      <div
                        className={
                          "h-0.5 w-full rounded-full " + feature.colorClass
                        }
                      ></div>
                      <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                        {feature.subtitle}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

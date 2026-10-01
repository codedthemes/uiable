const commonWrapperClass = "p-8 md:p-12 lg:p-16"
const commonChildClass = "max-w-[460px] mx-auto"

export const blockWrapperClasses: Record<string, string> = {
  "charts/charts-7": commonWrapperClass,
  "charts/charts-11": commonWrapperClass,
  "widgets/widgets-11": commonWrapperClass,
  "widgets/widgets-17": commonWrapperClass,
  "widgets/widgets-18": commonWrapperClass,
  "widgets/widgets-19": commonWrapperClass,
  "pricing/pricing-19": commonWrapperClass,
  "feature/feature-45": commonWrapperClass,
  "widgets/widgets-22": commonWrapperClass,
}

export const blockChildClasses: Record<string, string> = {
  "charts/charts-11": commonChildClass,
  "widgets/widgets-11": commonChildClass,
  "widgets/widgets-17": commonChildClass,
  "widgets/widgets-18": commonChildClass,
}

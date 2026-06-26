// project imports
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

//  ------------------------------ | BLOCK - SECTION HEADER | ------------------------------  //

export default function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2 md:gap-3", className)}>
      {/* Heading */}
      <h2
        className={cn(
          "text-2xl leading-tight font-medium tracking-normal text-foreground sm:text-3xl sm:leading-8 md:text-4xl md:leading-9",
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className={cn(
          "text-base leading-relaxed font-normal tracking-normal text-muted-foreground sm:text-lg",
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </div>
  )
}

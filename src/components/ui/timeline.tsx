import * as React from "react"

// third-party
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

//  ------------------------------ | TIMELINE PRIMITIVE | ------------------------------  //

const timelineVariants = cva("group/timeline flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-start overflow-x-auto pt-2 pb-4",
    },
    variant: {
      default: "",
      solid: "[--timeline-line-style:solid]",
      dashed: "[--timeline-line-style:dashed]",
      dotted: "[--timeline-line-style:dotted]",
    },
    size: {
      sm: "text-xs [--timeline-dot-size:1.25rem] [--timeline-gap:0.75rem]",
      default: "text-sm [--timeline-dot-size:1.75rem] [--timeline-gap:1rem]",
      lg: "text-base [--timeline-dot-size:2.25rem] [--timeline-gap:1.25rem]",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    variant: "default",
    size: "default",
  },
})

export interface TimelineProps
  extends React.ComponentProps<"div">, VariantProps<typeof timelineVariants> {}

function Timeline({
  className,
  orientation = "vertical",
  variant = "default",
  size = "default",
  ...props
}: TimelineProps) {
  return (
    <div
      data-slot="timeline"
      data-orientation={orientation}
      className={cn(
        timelineVariants({ orientation, variant, size, className })
      )}
      {...props}
    />
  )
}

// Timeline Item
const timelineItemVariants = cva(
  "group/item relative flex min-w-0 group-data-[orientation=horizontal]/timeline:flex-1 group-data-[orientation=horizontal]/timeline:flex-col group-data-[orientation=vertical]/timeline:flex-row",
  {
    variants: {
      status: {
        default: "",
        completed: "is-completed",
        "in-progress": "is-in-progress",
        pending: "is-pending opacity-65",
        error: "is-error",
        warning: "is-warning",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
)

export interface TimelineItemProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof timelineItemVariants> {}

function TimelineItem({
  className,
  status = "default",
  ...props
}: TimelineItemProps) {
  return (
    <div
      data-slot="timeline-item"
      data-status={status}
      className={cn(timelineItemVariants({ status, className }))}
      {...props}
    />
  )
}

// Timeline Separator (Dot + Line container)
function TimelineSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-separator"
      className={cn(
        "relative flex shrink-0 items-center justify-start group-data-[orientation=horizontal]/timeline:w-full group-data-[orientation=horizontal]/timeline:flex-row group-data-[orientation=vertical]/timeline:flex-col group-data-[orientation=vertical]/timeline:self-stretch",
        className
      )}
      {...props}
    />
  )
}

// Timeline Indicator / Dot
const timelineIndicatorVariants = cva(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-all duration-200 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-xs",
        solid: "border-primary bg-primary text-primary-foreground",
        outline: "border-border bg-background text-muted-foreground",
        subtle: "border-border/60 bg-muted/60 text-muted-foreground",
        completed:
          "border-primary/20 bg-primary/10 text-primary dark:bg-primary/20",
        "in-progress":
          "animate-pulse border-primary bg-primary/10 text-primary ring-4 ring-primary/20",
        error:
          "border-destructive/30 bg-destructive/10 text-destructive dark:bg-destructive/20",
        warning: "border-yellow-500 bg-yellow-500/10 text-yellow-500",
      },
      size: {
        sm: "size-5 text-[10px]",
        default: "size-7 text-xs",
        lg: "size-9 text-sm [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TimelineIndicatorProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof timelineIndicatorVariants> {}

function TimelineIndicator({
  className,
  variant,
  size,
  ...props
}: TimelineIndicatorProps) {
  return (
    <div
      data-slot="timeline-indicator"
      className={cn(timelineIndicatorVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Timeline Connector Line
function TimelineConnector({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-connector"
      aria-hidden="true"
      className={cn(
        "bg-border transition-colors duration-200",
        // Vertical connector
        "group-data-[orientation=vertical]/timeline:my-1 group-data-[orientation=vertical]/timeline:w-px group-data-[orientation=vertical]/timeline:flex-1 group-last/item:group-data-[orientation=vertical]/timeline:hidden",
        // Horizontal connector
        "group-data-[orientation=horizontal]/timeline:mx-1 group-data-[orientation=horizontal]/timeline:h-px group-data-[orientation=horizontal]/timeline:flex-1 group-last/item:group-data-[orientation=horizontal]/timeline:hidden",
        className
      )}
      {...props}
    />
  )
}

// Timeline Content Area
function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn(
        "min-w-0 flex-1",
        "group-data-[orientation=vertical]/timeline:pb-8 group-data-[orientation=vertical]/timeline:pl-3 group-last/item:group-data-[orientation=vertical]/timeline:pb-0",
        "group-data-[orientation=horizontal]/timeline:pt-3 group-data-[orientation=horizontal]/timeline:pr-4 group-last/item:group-data-[orientation=horizontal]/timeline:pr-0",
        className
      )}
      {...props}
    />
  )
}

// Timeline Header
function TimelineHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-header"
      className={cn(
        "flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1",
        className
      )}
      {...props}
    />
  )
}

// Timeline Title
function TimelineTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="timeline-title"
      className={cn(
        "text-sm leading-snug font-medium tracking-tight break-words text-foreground group-data-[size=lg]/timeline:text-base group-data-[size=sm]/timeline:text-xs",
        className
      )}
      {...props}
    />
  )
}

// Timeline Description
function TimelineDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-description"
      className={cn(
        "mt-1.5 text-xs leading-relaxed wrap-break-word text-muted-foreground group-data-[size=lg]/timeline:text-sm",
        className
      )}
      {...props}
    />
  )
}

// Timeline Time / Timestamp
function TimelineTime({ className, ...props }: React.ComponentProps<"time">) {
  return (
    <time
      data-slot="timeline-time"
      className={cn(
        "shrink-0 text-xs font-normal text-muted-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

// Timeline Body (for cards, attachments, thoughts, code blocks)
function TimelineBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-body"
      className={cn("mt-2.5 space-y-2", className)}
      {...props}
    />
  )
}

// Timeline Nested Sub-Group
const timelineSubGroupVariants = cva("relative mt-3 mb-6 flex flex-col", {
  variants: {
    variant: {
      default: "space-y-2.5 rounded-lg border bg-muted/50 p-3",
      branch: "ml-1 space-y-2.5 border-l border-border/80 pl-3.5",
      card: "space-y-2.5 rounded-lg border bg-card p-3 shadow-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface TimelineSubGroupProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof timelineSubGroupVariants> {}

function TimelineSubGroup({
  className,
  variant,
  ...props
}: TimelineSubGroupProps) {
  return (
    <div
      data-slot="timeline-sub-group"
      className={cn(timelineSubGroupVariants({ variant, className }))}
      {...props}
    />
  )
}

// Timeline Nested Sub-Item
function TimelineSubItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-sub-item"
      className={cn(
        "relative flex items-start justify-between gap-2.5 text-xs text-muted-foreground transition-colors",
        className
      )}
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIndicator,
  TimelineConnector,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineBody,
  TimelineSubGroup,
  TimelineSubItem,
  timelineVariants,
  timelineItemVariants,
  timelineIndicatorVariants,
}

"use client"

import { ComponentType, ReactNode, useEffect, useRef, useState } from "react"

// shadcn
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Combobox, ComboboxInput } from "@/components/ui/combobox"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Field, FieldContent, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Message, MessageContent, MessageFooter } from "@/components/ui/message"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"

// third-party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

// project-imports
import { DemoCursor, DemoRipple } from "./components-page-client"
import { clickState, cursorState, isActiveAt, HOVER_TIMELINE } from "./timeline"
import { useCycleClock, lerp, progress } from "@/hooks/use-cycle-clock"

// assets
import {
  ArchiveIcon,
  ArrowUpIcon,
  BadgeCheckIcon,
  CopyIcon,
  FileTextIcon,
  Grid2X2Icon,
  GridIcon,
  MenuIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ThumbsUpIcon,
} from "lucide-react"

//  ------------------------------ | SHARED RECIPE HELPERS | ------------------------------  //

/**
 * Static stand-in for a Select/Combobox/DropdownMenu/Menubar/Popover popup —
 * these primitives always render their content through a portal to
 * `document.body`, so driving their real `open` state here would pop a real
 * floating panel over the rest of the page every hover cycle. This renders a
 * plain, non-portaled div positioned relative to its trigger instead, purely
 * for the visual "opened" look.
 */
interface FakePopupProps {
  open: boolean
  className?: string
  children: ReactNode
}

function FakePopup({ open, className, children }: FakePopupProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10 origin-top overflow-hidden rounded-lg border border-border/70 bg-popover text-popover-foreground shadow-lg transition-all duration-200",
        open ? "scale-100 opacity-100" : "scale-95 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Recipe 2: cursor glides in, "clicks" a trigger (press-scale dip + ripple),
 * nothing actually opens. `children` receives the current press scale so the
 * trigger element can apply it inline.
 */
interface ClickPressDemoProps {
  hovered: boolean
  cursorStart: { x: number; y: number }
  cursorAnchorClassName?: string
  rippleAnchorClassName?: string
  children: (press: number) => ReactNode
}

function ClickPressDemo({
  hovered,
  cursorStart,
  cursorAnchorClassName,
  rippleAnchorClassName,
  children,
}: ClickPressDemoProps) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple, press } = clickState(t, cursorStart, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName={rippleAnchorClassName}
      />
      {children(press)}
      <DemoCursor {...cursor} anchorClassName={cursorAnchorClassName} />
    </div>
  )
}

/**
 * How many characters/slots of `text` should be "typed" at time `t` — fills
 * in one step every `stepMs`, starting at `startAt`, capped at `text.length`.
 * Used for the Input/Input Group/Input OTP typing-simulation demos.
 */
function typedLength(
  t: number,
  startAt: number,
  stepMs: number,
  maxLen: number
) {
  if (t < startAt) return 0
  return Math.min(maxLen, Math.floor((t - startAt) / stepMs) + 1)
}

//  ------------------------------ | INPUTS | ------------------------------  //

function ButtonGroupDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const active = isActiveAt(t, HOVER_TIMELINE) ? "menu" : "grid"
  const { cursor, ripple } = clickState(t, { x: 18, y: -22 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <ButtonGroup className="rounded-lg border border-border/50 p-0.5">
        <Button
          variant="ghost"
          size="icon-sm"
          className={
            active === "grid" ? "bg-primary/10 text-primary" : undefined
          }
        >
          <GridIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          className={
            active === "menu" ? "bg-primary/10 text-primary" : undefined
          }
        >
          <MenuIcon />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Grid2X2Icon />
        </Button>
      </ButtonGroup>
      <DemoCursor {...cursor} />
    </div>
  )
}

function ComboboxDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 36, y: -18 },
    HOVER_TIMELINE
  )
  const items = ["Next.js", "SvelteKit", "Nuxt.js"]

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div className="relative" style={{ transform: `scale(${press})` }}>
        <Combobox items={items}>
          <ComboboxInput placeholder="Select framework" className="w-44" />
        </Combobox>
        <FakePopup open={open} className="top-full left-0 mt-1.5 w-44 py-1">
          {items.map((item) => (
            <div key={item} className="px-3 py-1.5 text-sm">
              {item}
            </div>
          ))}
        </FakePopup>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function CommandDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 40, y: -18 }}>
      {(press) => (
        <div style={{ transform: `scale(${press})` }}>
          <Command className="w-56 rounded-md border border-border shadow-none">
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </ClickPressDemo>
  )
}

function DatePickerDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 30, y: -20 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div className="relative" style={{ transform: `scale(${press})` }}>
        <Button size="sm" className="justify-start font-normal">
          Pick a date
        </Button>
        <FakePopup open={open} className="top-full left-0 mt-1.5 p-0">
          <Calendar mode="single" />
        </FakePopup>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function InputDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple } = clickState(t, { x: 44, y: -26 }, HOVER_TIMELINE)
  const fullText = "you@example.com"
  const shown = fullText.slice(
    0,
    typedLength(t, HOVER_TIMELINE.click, 25, fullText.length)
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[62%] left-1/2"
      />
      <div className="flex w-48 flex-col gap-2">
        <Label htmlFor="lottie-input" className="text-xs">
          Email
        </Label>
        <Input
          id="lottie-input"
          value={shown}
          placeholder="you@example.com"
          className="h-8 text-sm"
          readOnly
        />
      </div>
      <DemoCursor {...cursor} anchorClassName="top-[38%] left-1/2" />
    </div>
  )
}

function InputGroupDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple } = clickState(t, { x: 40, y: -20 }, HOVER_TIMELINE)
  const fullText = "components"
  const shown = fullText.slice(
    0,
    typedLength(t, HOVER_TIMELINE.click, 35, fullText.length)
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <InputGroup className="w-48">
        <InputGroupInput value={shown} placeholder="Search..." readOnly />
      </InputGroup>
      <DemoCursor {...cursor} />
    </div>
  )
}

function InputOtpDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple, press } = clickState(
    t,
    { x: -54, y: -8 },
    HOVER_TIMELINE
  )
  const digits = "1234"
  const filled = digits.slice(
    0,
    typedLength(t, HOVER_TIMELINE.click, 90, digits.length)
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[30%]"
      />
      <div style={{ transform: `scale(${press})` }}>
        <InputOTP
          maxLength={4}
          value={filled}
          onChange={() => {}}
          containerClassName="justify-center"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[30%]" />
    </div>
  )
}

function ItemDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const added = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 4, y: 0 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[85%]"
      />
      <Item
        variant="outline"
        className={cn(
          "w-56 transition-colors duration-300",
          added && "border-primary/50 bg-primary/5"
        )}
      >
        <ItemMedia>
          <Avatar className="size-8">
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            className="rounded-full"
            style={{ transform: `scale(${press})` }}
          >
            {added ? <BadgeCheckIcon className="size-4" /> : <PlusIcon />}
          </Button>
        </ItemActions>
      </Item>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[85%]" />
    </div>
  )
}

function NativeSelectDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const value = isActiveAt(t, HOVER_TIMELINE) ? "banana" : "apple"
  const { cursor, ripple } = clickState(t, { x: 30, y: -22 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[78%]"
      />
      <NativeSelect
        className="w-36 [&>select]:w-full"
        value={value}
        onChange={() => {}}
      >
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelect>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[78%]" />
    </div>
  )
}

function RadioDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const isPro = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 40, y: 22 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[64%] left-[38%]"
      />
      <RadioGroup
        value={isPro ? "pro" : "free"}
        onValueChange={() => {}}
        className="w-fit"
      >
        <Field orientation="horizontal">
          <RadioGroupItem value="free" id="lottie-radio-free" />
          <FieldLabel htmlFor="lottie-radio-free" className="font-normal">
            Free
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="pro" id="lottie-radio-pro" />
          <FieldLabel htmlFor="lottie-radio-pro" className="font-normal">
            Pro
          </FieldLabel>
        </Field>
      </RadioGroup>
      <DemoCursor {...cursor} anchorClassName="top-[64%] left-[38%]" />
    </div>
  )
}

function RadioGroupDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const isFree = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 44, y: -20 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[36%] left-[42%]"
      />
      <RadioGroup
        value={isFree ? "free" : "pro"}
        onValueChange={() => {}}
        className="w-fit"
      >
        <Field orientation="horizontal">
          <RadioGroupItem value="free" id="lottie-rg-free" />
          <FieldLabel htmlFor="lottie-rg-free" className="font-normal">
            Free Plan
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="pro" id="lottie-rg-pro" />
          <FieldLabel htmlFor="lottie-rg-pro" className="font-normal">
            Pro Plan
          </FieldLabel>
        </Field>
      </RadioGroup>
      <DemoCursor {...cursor} anchorClassName="top-[36%] left-[42%]" />
    </div>
  )
}

function SelectDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 30, y: -20 }, HOVER_TIMELINE)
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]
  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div className="relative">
        <Select items={items} defaultValue="banana">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
        </Select>
        <FakePopup open={open} className="top-full left-0 mt-1.5 w-40 py-1">
          {items.map((item) => (
            <div
              key={item.value}
              className={cn(
                "px-3 py-1.5 text-sm",
                item.value === "banana" && "bg-accent text-accent-foreground"
              )}
            >
              {item.label}
            </div>
          ))}
        </FakePopup>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function SliderDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { moveIn, leave } = HOVER_TIMELINE
  let value = 30
  if (t < moveIn[0]) value = 30
  else if (t < moveIn[1]) value = lerp(30, 78, progress(t, ...moveIn))
  else if (t < leave[0]) value = 78
  else if (t < leave[1]) value = lerp(78, 30, progress(t, ...leave))

  return (
    <div className="pointer-events-none flex w-48 flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs">Volume</Label>
        <span className="text-xs text-muted-foreground">
          {Math.round(value)}%
        </span>
      </div>
      <Slider value={[value]} onValueChange={() => {}} max={100} step={1} />
    </div>
  )
}

function TextareaDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple } = clickState(t, { x: 40, y: -30 }, HOVER_TIMELINE)
  const fullText = "Looks great, thanks!"
  const shown = fullText.slice(
    0,
    typedLength(t, HOVER_TIMELINE.click, 30, fullText.length)
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[30%] left-1/2"
      />
      <div className="grid w-48 gap-2">
        <Textarea
          value={shown}
          placeholder="Type a message..."
          className="h-16 text-sm"
          readOnly
        />
      </div>
      <DemoCursor {...cursor} anchorClassName="top-[30%] left-1/2" />
    </div>
  )
}

function CalendarDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const selected = isActiveAt(t, HOVER_TIMELINE) ? new Date() : undefined
  const { cursor, ripple } = clickState(t, { x: 16, y: 8 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center overflow-hidden">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div className="scale-[0.55]">
        <Calendar mode="single" selected={selected} onSelect={() => {}} />
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function ToggleDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const pressed = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 30, y: -22 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div
        className="flex items-center gap-2.5"
        style={{ transform: `scale(${press})` }}
      >
        <Toggle
          aria-label="Toggle bold"
          pressed={pressed}
          onPressedChange={() => {}}
        >
          B
        </Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function ToggleGroupDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const active: "center" | "right" = isActiveAt(t, HOVER_TIMELINE)
    ? "right"
    : "center"
  const { cursor, ripple } = clickState(t, { x: 30, y: -22 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <ToggleGroup value={[active]} onValueChange={() => {}}>
        <ToggleGroupItem value="left">L</ToggleGroupItem>
        <ToggleGroupItem value="center">C</ToggleGroupItem>
        <ToggleGroupItem value="right">R</ToggleGroupItem>
      </ToggleGroup>
      <DemoCursor {...cursor} />
    </div>
  )
}

//  ------------------------------ | DATA DISPLAY | ------------------------------  //

function AttachmentDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const selected = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: -30, y: -18 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[30%]"
      />
      <AttachmentGroup className="w-full max-w-xs">
        <Attachment
          size="sm"
          className={cn(
            "max-w-44 min-w-40 shrink-0 transition-colors duration-300",
            selected && "border-primary/60 bg-primary/5"
          )}
        >
          <AttachmentMedia variant="icon">
            <FileTextIcon className="size-4" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle className="text-xs font-semibold">
              report.pdf
            </AttachmentTitle>
            <AttachmentDescription className="text-[10px]">
              2.4 MB
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>
        <Attachment size="sm" className="max-w-44 min-w-40 shrink-0">
          <AttachmentMedia variant="icon">
            <ArchiveIcon className="size-4" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle className="text-xs font-semibold">
              source.zip
            </AttachmentTitle>
            <AttachmentDescription className="text-[10px]">
              14.8 MB
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </AttachmentGroup>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[30%]" />
    </div>
  )
}

function AvatarDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const added = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 6, y: -4 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[78%]"
      />
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
        <Avatar>
          <AvatarFallback
            className={cn(
              "transition-colors duration-300",
              added && "bg-primary text-white"
            )}
          >
            {added ? (
              <BadgeCheckIcon className="size-4" />
            ) : (
              <PlusIcon className="size-4" />
            )}
          </AvatarFallback>
        </Avatar>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[78%]" />
    </div>
  )
}

function BadgeDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const badges: {
    label: string
    variant?: "secondary" | "outline" | "destructive"
  }[] = [
    { label: "Default" },
    { label: "Secondary", variant: "secondary" },
    { label: "Outline", variant: "outline" },
    { label: "Destructive", variant: "destructive" },
  ]

  return (
    <div className="pointer-events-none flex size-full flex-wrap items-center justify-center gap-2">
      {badges.map((b, i) => {
        const p = progress(t, 50 + i * 80, 50 + i * 80 + 140)
        const bounce = p > 0 && p < 1 ? Math.sin(Math.PI * p) : 0
        return (
          <Badge
            key={b.label}
            variant={b.variant}
            style={{ transform: `scale(${1 + 0.16 * bounce})` }}
          >
            {b.label}
          </Badge>
        )
      })}
    </div>
  )
}

function BubbleDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const p1 = progress(t, 50, 190)
  const p2 = progress(t, 230, 370)
  const b1 = p1 > 0 && p1 < 1 ? Math.sin(Math.PI * p1) : 0
  const b2 = p2 > 0 && p2 < 1 ? Math.sin(Math.PI * p2) : 0

  return (
    <div className="pointer-events-none flex size-full items-center justify-center">
      <div className="flex w-full max-w-56 flex-col gap-3">
        <Bubble
          variant="muted"
          style={{ transform: `translateY(${-4 * b1}px)` }}
        >
          <BubbleContent className="text-xs">Hey, got a minute?</BubbleContent>
        </Bubble>
        <Bubble align="end" style={{ transform: `translateY(${-4 * b2}px)` }}>
          <BubbleContent className="text-xs dark:text-white">
            Sure, what&apos;s up?
          </BubbleContent>
        </Bubble>
      </div>
    </div>
  )
}

function CardDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const selected = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 0, y: -34 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <Card
        className={cn(
          "w-full max-w-56 text-center transition-all duration-300",
          selected && "-translate-y-0.5 border-primary/60 shadow-md"
        )}
      >
        <CardContent>
          <h6 className="text-sm font-medium">Card title</h6>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Supporting text goes here.
          </p>
        </CardContent>
      </Card>
      <DemoCursor {...cursor} />
    </div>
  )
}

function CarouselDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const active = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 46, y: 0 }, HOVER_TIMELINE)
  const [api, setApi] = useState<CarouselApi>()

  // Re-synced every render (not edge-triggered) so a missed tick can't
  // leave the carousel stuck mid-animation — always corrects toward the
  // slide the current clock phase calls for.
  useEffect(() => {
    if (!api) return
    const target = active ? 1 : 0
    if (api.selectedScrollSnap() !== target) {
      api.scrollTo(target)
    }
  }, [active, api])

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[86%]"
      />
      <Carousel setApi={setApi} className="w-36">
        <CarouselContent>
          {[1, 2, 3].map((n) => (
            <CarouselItem key={n}>
              <div className="flex h-20 items-center justify-center rounded-md border border-border bg-card text-lg font-semibold">
                {n}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[86%]" />
    </div>
  )
}

function EmptyDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const invited = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 0, y: 30 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[78%] left-1/2"
      />
      <Empty className="w-full max-w-56 p-0">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            {invited ? <BadgeCheckIcon /> : <PlusIcon />}
          </EmptyMedia>
          <EmptyTitle className="text-sm">
            {invited ? "Invite sent" : "No members yet"}
          </EmptyTitle>
          <EmptyDescription className="text-xs">
            {invited
              ? "They'll join shortly."
              : "Invite your team to collaborate."}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
      <DemoCursor {...cursor} anchorClassName="top-[78%] left-1/2" />
    </div>
  )
}

function FieldDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const checked = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 50, y: 0 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[88%]"
      />
      <Field orientation="horizontal" className="w-56">
        <FieldContent>
          <FieldLabel htmlFor="lottie-field-switch">Share focus</FieldLabel>
        </FieldContent>
        <Switch
          id="lottie-field-switch"
          checked={checked}
          onCheckedChange={() => {}}
        />
      </Field>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[88%]" />
    </div>
  )
}

function HoverCardDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 30, y: -26 }}>
      {(press) => (
        <HoverCard>
          <HoverCardTrigger
            render={
              <Button size="sm" style={{ transform: `scale(${press})` }} />
            }
          >
            Hover me
          </HoverCardTrigger>
        </HoverCard>
      )}
    </ClickPressDemo>
  )
}

function KbdDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 30, y: -20 }}>
      {(press) => (
        <Button size="sm" style={{ transform: `scale(${press})` }}>
          Accept
          <Kbd data-icon="inline-end" className="ml-1">
            Enter
          </Kbd>
        </Button>
      )}
    </ClickPressDemo>
  )
}

function LabelDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const checked = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: -50, y: 0 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[18%]"
      />
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
        <Checkbox
          id="lottie-label-cb"
          checked={checked}
          onCheckedChange={() => {}}
        />
        <Label
          htmlFor="lottie-label-cb"
          className="cursor-pointer text-sm font-medium"
        >
          Accept terms
        </Label>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[18%]" />
    </div>
  )
}

function MarkerDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const p1 = progress(t, 50, 190)
  const p2 = progress(t, 220, 360)
  const b1 = p1 > 0 && p1 < 1 ? Math.sin(Math.PI * p1) : 0
  const b2 = p2 > 0 && p2 < 1 ? Math.sin(Math.PI * p2) : 0

  return (
    <div className="pointer-events-none flex size-full items-center justify-center">
      <div className="flex w-full max-w-56 flex-col gap-2">
        <Marker
          variant="border"
          style={{ transform: `translateX(${4 * b1}px)` }}
        >
          <MarkerIcon>
            <FileTextIcon />
          </MarkerIcon>
          <MarkerContent className="text-xs">Opened notes</MarkerContent>
        </Marker>
        <Marker
          variant="border"
          style={{ transform: `translateX(${4 * b2}px)` }}
        >
          <MarkerIcon>
            <BadgeCheckIcon />
          </MarkerIcon>
          <MarkerContent className="text-xs">Reviewed changes</MarkerContent>
        </Marker>
      </div>
    </div>
  )
}

function MessageDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const liked = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 20, y: 30 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[82%] left-[62%]"
      />
      <div className="flex w-full max-w-56 flex-col gap-3">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent className="text-xs">
                The build failed on staging.
              </BubbleContent>
            </Bubble>
            <MessageFooter>
              <Button variant="ghost" size="icon-xs" aria-label="Copy">
                <CopyIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Like"
                className={cn(liked && "text-primary")}
                style={{ transform: `scale(${press})` }}
              >
                <ThumbsUpIcon />
              </Button>
            </MessageFooter>
          </MessageContent>
        </Message>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-[82%] left-[62%]" />
    </div>
  )
}

function MessageScrollerDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const p1 = progress(t, 80, 220)
  const p2 = progress(t, 260, 400)
  const b1 = p1 > 0 && p1 < 1 ? Math.sin(Math.PI * p1) : 0
  const b2 = p2 > 0 && p2 < 1 ? Math.sin(Math.PI * p2) : 0
  const { cursor, ripple, press } = clickState(
    t,
    { x: 0, y: 40 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[88%] left-1/2"
      />
      <div className="flex w-full max-w-56 flex-col gap-2">
        <Bubble
          variant="muted"
          style={{ transform: `translateY(${-4 * b1}px)` }}
        >
          <BubbleContent className="text-xs">Turn 1 message</BubbleContent>
        </Bubble>
        <Bubble align="end" style={{ transform: `translateY(${-4 * b2}px)` }}>
          <BubbleContent className="text-xs dark:text-white">
            Turn 2 reply
          </BubbleContent>
        </Bubble>
        <Button
          variant="outline"
          size="icon-sm"
          className="mx-auto rounded-full"
          style={{ transform: `scale(${press})` }}
        >
          <ArrowUpIcon className="size-3.5" />
        </Button>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-[88%] left-1/2" />
    </div>
  )
}

function ListGroupDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const activeIdx = isActiveAt(t, HOVER_TIMELINE) ? 2 : 1
  const { cursor, ripple } = clickState(t, { x: 40, y: 0 }, HOVER_TIMELINE)
  const items = ["Cras justo odio", "Dapibus ac facilisis", "Morbi leo risus"]

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[83%] left-1/2"
      />
      <ul className="w-full max-w-56 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card text-xs">
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              "px-4 py-2.5 transition-colors duration-300",
              i === activeIdx && "bg-primary text-primary-foreground"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      <DemoCursor {...cursor} anchorClassName="top-[83%] left-1/2" />
    </div>
  )
}

function ScrollAreaDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { moveIn, leave } = HOVER_TIMELINE
  const wrapperRef = useRef<HTMLDivElement>(null)
  let scrollP = 0
  if (t < moveIn[1]) scrollP = 0
  else if (t < leave[0]) scrollP = progress(t, moveIn[1], leave[0])
  else scrollP = lerp(1, 0, progress(t, ...leave))

  useEffect(() => {
    const viewport = wrapperRef.current?.querySelector<HTMLDivElement>(
      '[data-slot="scroll-area-viewport"]'
    )
    if (viewport) {
      viewport.scrollTop =
        scrollP * (viewport.scrollHeight - viewport.clientHeight)
    }
  }, [scrollP])

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none flex size-full items-center justify-center"
    >
      <ScrollArea className="h-28 w-40 rounded-md border border-border">
        <div className="flex flex-col gap-1.5 p-3 text-xs">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>Item {i + 1}</div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

function SeparatorDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const activeSecond = isActiveAt(t, HOVER_TIMELINE)
  const cursor = cursorState(t, { x: 30, y: -18 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <div className="flex w-48 flex-col gap-2 text-xs">
        <div
          className={cn(
            "flex items-center justify-between rounded px-1 transition-colors duration-300",
            !activeSecond && "bg-muted"
          )}
        >
          <span>Item 1</span>
          <span className="text-muted-foreground">Value 1</span>
        </div>
        <Separator />
        <div
          className={cn(
            "flex items-center justify-between rounded px-1 transition-colors duration-300",
            activeSecond && "bg-muted"
          )}
        >
          <span>Item 2</span>
          <span className="text-muted-foreground">Value 2</span>
        </div>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function TableDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const selectedRow = isActiveAt(t, HOVER_TIMELINE) ? 1 : 0
  const cursor = cursorState(t, { x: 40, y: 0 }, HOVER_TIMELINE)
  const rows = [
    ["Mouse", "$29.99"],
    ["Keyboard", "$129.99"],
  ]

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <Table className="w-full max-w-64">
        <TableHeader>
          <TableRow>
            <TableHead className="h-8 text-xs">Product</TableHead>
            <TableHead className="h-8 text-xs">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row[0]}
              className={cn(
                "transition-colors duration-300",
                i === selectedRow && "bg-muted/60"
              )}
            >
              <TableCell className="py-1.5 text-xs font-medium">
                {row[0]}
              </TableCell>
              <TableCell className="py-1.5 text-xs">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DemoCursor {...cursor} anchorClassName="top-[70%] left-[70%]" />
    </div>
  )
}

function TooltipDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 24, y: -24 }}>
      {(press) => (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button size="sm" style={{ transform: `scale(${press})` }} />
            }
          >
            Hover
          </TooltipTrigger>
        </Tooltip>
      )}
    </ClickPressDemo>
  )
}

function TypographyDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const full = "A short paragraph example."
  const shown = full.slice(0, typedLength(t, 120, 30, full.length))

  return (
    <div className="pointer-events-none flex size-full items-center justify-center">
      <div className="flex w-full max-w-56 flex-col gap-1 text-center">
        <h5 className="text-base font-semibold">Heading text</h5>
        <p className="text-xs text-muted-foreground">{shown}</p>
      </div>
    </div>
  )
}

function AspectRatioDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const scale = lerp(1, 1.12, progress(t, 0, HOVER_TIMELINE.cycle))

  return (
    <div className="pointer-events-none flex size-full items-center justify-center">
      <AspectRatio
        ratio={16 / 9}
        className="w-full max-w-40 overflow-hidden rounded-lg bg-muted"
      >
        <div
          className="flex size-full items-center justify-center text-xs text-muted-foreground"
          style={{ transform: `scale(${scale})` }}
        >
          16:9
        </div>
      </AspectRatio>
    </div>
  )
}

function SkeletonDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const loaded = isActiveAt(t, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none flex size-full items-center justify-center">
      {loaded ? (
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <span className="text-sm font-medium">Evil Rabbit</span>
            <span className="text-xs text-muted-foreground">Online now</span>
          </div>
        </div>
      ) : (
        <div className="flex w-fit items-center gap-3">
          <Skeleton className="size-9 shrink-0 rounded-full" />
          <div className="grid gap-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      )}
    </div>
  )
}

//  ------------------------------ | FEEDBACK | ------------------------------  //

function AlertDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const enabled = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 40, y: 22 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[82%] left-[80%]"
      />
      <Alert className="w-full max-w-xs">
        <AlertTitle className="text-sm">
          {enabled ? "Dark mode enabled" : "Dark mode available"}
        </AlertTitle>
        <AlertDescription className="text-xs">
          {enabled ? "You're all set." : "Enable it in settings."}
        </AlertDescription>
        <AlertAction>
          <Button
            size="xs"
            disabled={enabled}
            style={{ transform: `scale(${press})` }}
          >
            {enabled ? <BadgeCheckIcon className="size-3.5" /> : "Enable"}
          </Button>
        </AlertAction>
      </Alert>
      <DemoCursor {...cursor} anchorClassName="top-[82%] left-[80%]" />
    </div>
  )
}

function AlertDialogDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 52, y: -26 }}>
      {(press) => (
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button
                size="sm"
                variant="destructive"
                style={{ transform: `scale(${press})` }}
              />
            }
          >
            Delete account
          </AlertDialogTrigger>
        </AlertDialog>
      )}
    </ClickPressDemo>
  )
}

function DialogDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 44, y: -30 }}>
      {(press) => (
        <Dialog>
          <DialogTrigger
            render={
              <Button size="sm" style={{ transform: `scale(${press})` }} />
            }
          >
            Open dialog
          </DialogTrigger>
        </Dialog>
      )}
    </ClickPressDemo>
  )
}

function DrawerDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 46, y: -28 }}>
      {(press) => (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              style={{ transform: `scale(${press})` }}
            >
              Open drawer
            </Button>
          </DrawerTrigger>
        </Drawer>
      )}
    </ClickPressDemo>
  )
}

function ProgressDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { moveIn, leave } = HOVER_TIMELINE
  let value = 0
  if (t < moveIn[0]) value = 0
  else if (t < moveIn[1]) value = lerp(0, 72, progress(t, ...moveIn))
  else if (t < leave[0]) value = 72
  else if (t < leave[1]) value = lerp(72, 0, progress(t, ...leave))

  return (
    <div className="pointer-events-none w-48">
      <ProgressPrimitive.Root value={value}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  )
}

function SheetDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 44, y: -28 }}>
      {(press) => (
        <Sheet>
          <SheetTrigger
            render={
              <Button size="sm" style={{ transform: `scale(${press})` }} />
            }
          >
            Open sheet
          </SheetTrigger>
        </Sheet>
      )}
    </ClickPressDemo>
  )
}

function SonnerDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 40, y: -26 }}>
      {(press) => (
        <Button
          size="sm"
          className="w-fit"
          style={{ transform: `scale(${press})` }}
        >
          Show toast
        </Button>
      )}
    </ClickPressDemo>
  )
}

function SpinnerDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const synced = isActiveAt(t, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none flex size-full flex-wrap items-center justify-center gap-3">
      <Badge variant={synced ? "secondary" : "default"}>
        {synced ? (
          <BadgeCheckIcon data-icon="inline-start" className="size-3.5" />
        ) : (
          <Spinner data-icon="inline-start" />
        )}
        {synced ? "Synced" : "Syncing"}
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Loading
      </Badge>
    </div>
  )
}

//  ------------------------------ | NAVIGATION | ------------------------------  //

function BreadcrumbDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const onHome = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: -46, y: -18 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[22%]"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {onHome ? (
              <BreadcrumbPage>Home</BreadcrumbPage>
            ) : (
              <BreadcrumbLink render={<span>Home</span>} />
            )}
          </BreadcrumbItem>
          {!onHome && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Library</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[22%]" />
    </div>
  )
}

function DropdownMenuDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 50, y: -26 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <div className="relative">
        <Button
          size="sm"
          variant="outline"
          style={{ transform: `scale(${press})` }}
        >
          Options
          <MoreHorizontalIcon />
        </Button>
        <FakePopup open={open} className="top-full left-0 mt-1.5 w-36 py-1">
          <div className="flex items-center gap-2 px-3 py-1.5 text-sm">
            <BadgeCheckIcon className="size-4" />
            Account
          </div>
          <div className="px-3 py-1.5 text-sm">Settings</div>
        </FakePopup>
      </div>
      <DemoCursor {...cursor} />
    </div>
  )
}

function MenubarDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 20, y: -18 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-[30%] left-[28%]"
      />
      <div className="relative">
        <Menubar className="w-fit">
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Format</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <FakePopup open={open} className="top-full left-0 mt-1.5 w-32 py-1">
          <div className="px-3 py-1.5 text-sm">Reload</div>
          <div className="px-3 py-1.5 text-sm">Zoom In</div>
        </FakePopup>
      </div>
      <DemoCursor {...cursor} anchorClassName="top-[30%] left-[28%]" />
    </div>
  )
}

function NavigationMenuDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const activeSecond = isActiveAt(t, HOVER_TIMELINE)
  const cursor = cursorState(t, { x: 34, y: -20 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                !activeSecond && "bg-accent text-accent-foreground"
              )}
              render={<span>Home</span>}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                activeSecond && "bg-accent text-accent-foreground"
              )}
              render={<span>Docs</span>}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[68%]" />
    </div>
  )
}

function PaginationDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const activeSecond = isActiveAt(t, HOVER_TIMELINE)
  const { cursor, ripple } = clickState(t, { x: 20, y: -28 }, HOVER_TIMELINE)

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple
        opacity={ripple.opacity}
        scale={ripple.scale}
        anchorClassName="top-1/2 left-[58%]"
      />
      <Pagination className="w-fit">
        <PaginationContent>
          <PaginationItem>
            <Button size="icon" variant={activeSecond ? "ghost" : "default"}>
              1
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button size="icon" variant={activeSecond ? "default" : "ghost"}>
              2
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button size="icon" variant="ghost">
              3
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <DemoCursor {...cursor} anchorClassName="top-1/2 left-[58%]" />
    </div>
  )
}

//  ------------------------------ | SURFACES | ------------------------------  //

function CollapsibleDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const open = isActiveAt(t, HOVER_TIMELINE)
  const cursor = cursorState(t, { x: 0, y: -34 }, HOVER_TIMELINE)

  return (
    <div className="relative size-full">
      <Collapsible
        open={open}
        onOpenChange={() => {}}
        className="pointer-events-none w-56 rounded-lg"
      >
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="w-full" />}
        >
          Product details
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 text-xs text-muted-foreground">
          Additional content revealed here.
        </CollapsibleContent>
      </Collapsible>
      <DemoCursor {...cursor} anchorClassName="top-[18%] left-1/2" />
    </div>
  )
}

//  ------------------------------ | UTILS | ------------------------------  //

function ContextMenuDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 0, y: -18 }}>
      {(press) => (
        <ContextMenu>
          <ContextMenuTrigger
            className="flex h-20 w-full max-w-56 items-center justify-center rounded-lg border border-dashed text-xs"
            style={{ transform: `scale(${press})` }}
          >
            Right click here
          </ContextMenuTrigger>
        </ContextMenu>
      )}
    </ClickPressDemo>
  )
}

function PopoverDemo({ hovered }: { hovered: boolean }) {
  return (
    <ClickPressDemo hovered={hovered} cursorStart={{ x: 30, y: -26 }}>
      {(press) => (
        <Popover>
          <PopoverTrigger
            render={
              <Button size="sm" style={{ transform: `scale(${press})` }} />
            }
          >
            Open
          </PopoverTrigger>
        </Popover>
      )}
    </ClickPressDemo>
  )
}

function ResizableDemo({ hovered }: { hovered: boolean }) {
  const t = useCycleClock(HOVER_TIMELINE.cycle, 0, hovered)
  const { cursor, ripple, press } = clickState(
    t,
    { x: 0, y: -30 },
    HOVER_TIMELINE
  )

  return (
    <div className="pointer-events-none relative flex size-full items-center justify-center">
      <DemoRipple opacity={ripple.opacity} scale={ripple.scale} />
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-24 w-full max-w-56 rounded-lg border"
        style={{ transform: `scale(${press})` }}
      >
        <ResizablePanel defaultSize="40%">
          <div className="flex h-full items-center justify-center text-xs font-medium">
            Left
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="60%">
          <div className="flex h-full items-center justify-center text-xs font-medium">
            Right
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <DemoCursor {...cursor} />
    </div>
  )
}

//  ------------------------------ | DEMOS MAP | ------------------------------  //

export const OTHER_DEMOS: Record<
  string,
  ComponentType<{ hovered: boolean }>
> = {
  // Inputs
  "button-group": ButtonGroupDemo,
  calendar: CalendarDemo,
  combobox: ComboboxDemo,
  command: CommandDemo,
  "date-picker": DatePickerDemo,
  input: InputDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOtpDemo,
  item: ItemDemo,
  "native-select": NativeSelectDemo,
  radio: RadioDemo,
  "radio-group": RadioGroupDemo,
  select: SelectDemo,
  slider: SliderDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,

  // Data Display
  attachment: AttachmentDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  bubble: BubbleDemo,
  card: CardDemo,
  carousel: CarouselDemo,
  empty: EmptyDemo,
  field: FieldDemo,
  "hover-card": HoverCardDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  marker: MarkerDemo,
  message: MessageDemo,
  "message-scroller": MessageScrollerDemo,
  "list-group": ListGroupDemo,
  "scroll-area": ScrollAreaDemo,
  separator: SeparatorDemo,
  table: TableDemo,
  tooltip: TooltipDemo,
  typography: TypographyDemo,
  "aspect-ratio": AspectRatioDemo,
  skeleton: SkeletonDemo,

  // Feedback
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  progress: ProgressDemo,
  sheet: SheetDemo,
  sonner: SonnerDemo,
  spinner: SpinnerDemo,

  // Navigation
  breadcrumb: BreadcrumbDemo,
  "dropdown-menu": DropdownMenuDemo,
  menubar: MenubarDemo,
  "navigation-menu": NavigationMenuDemo,
  pagination: PaginationDemo,

  // Surfaces
  collapsible: CollapsibleDemo,

  // Utils
  "context-menu": ContextMenuDemo,
  popover: PopoverDemo,
  resizable: ResizableDemo,
}

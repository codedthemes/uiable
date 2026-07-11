"use client"

// third party
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { AnimatePresence, motion } from "framer-motion"

// projects
import { cn } from "@/lib/utils"
// shadcn
import { Badge } from "@/components/ui/badge"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Animated radio
function AnimatedRadioGroupItem({
  className,
  ...props
}: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-checked:border-primary data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-full items-center justify-center"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            <AnimatePresence>
              {state.checked && (
                <motion.span
                  key="dot"
                  className="absolute top-1/2 left-1/2 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 600, damping: 28 }}
                />
              )}
            </AnimatePresence>
          </span>
        )}
      />
    </RadioPrimitive.Root>
  )
}

//  ------------------------------ | RADIO - FIELDS | ------------------------------  //

export function RadioFields() {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend variant="label">Subscription Plan</FieldLegend>
        <RadioGroup defaultValue="free">
          <Field orientation="horizontal">
            <RadioGroupItem value="free" id="radio-free" />
            <FieldLabel htmlFor="radio-free" className="font-normal">
              Free Plan
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="pro" id="radio-pro" />
            <FieldLabel htmlFor="radio-pro" className="font-normal">
              Pro Plan
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="enterprise" id="radio-enterprise" />
            <FieldLabel htmlFor="radio-enterprise" className="font-normal">
              Enterprise
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Battery Level</FieldLegend>
        <FieldDescription>
          Choose your preferred battery level.
        </FieldDescription>
        <RadioGroup>
          <Field orientation="horizontal">
            <RadioGroupItem value="high" id="battery-high" />
            <FieldLabel htmlFor="battery-high">High</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="medium" id="battery-medium" />
            <FieldLabel htmlFor="battery-medium">Medium</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="low" id="battery-low" />
            <FieldLabel htmlFor="battery-low">Low</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <RadioGroup className="gap-6">
        <Field orientation="horizontal">
          <RadioGroupItem value="option1" id="radio-content-1" />
          <FieldContent>
            <FieldLabel htmlFor="radio-content-1">Enable Touch ID</FieldLabel>
            <FieldDescription>
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="option2" id="radio-content-2" />
          <FieldContent>
            <FieldLabel htmlFor="radio-content-2">
              Enable Touch ID and Face ID to make it even faster to unlock your
              device. This is a long label to test the layout.
            </FieldLabel>
            <FieldDescription>
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <RadioGroup className="gap-3">
        <FieldLabel htmlFor="radio-title-1">
          <Field orientation="horizontal">
            <RadioGroupItem value="title1" id="radio-title-1" />
            <FieldContent>
              <FieldTitle>Enable Touch ID</FieldTitle>
              <FieldDescription>
                Enable Touch ID to quickly unlock your device.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="radio-title-2">
          <Field orientation="horizontal">
            <RadioGroupItem value="title2" id="radio-title-2" />
            <FieldContent>
              <FieldTitle>
                Enable Touch ID and Face ID to make it even faster to unlock
                your device. This is a long label to test the layout.
              </FieldTitle>
              <FieldDescription>
                Enable Touch ID to quickly unlock your device.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
      <FieldSet>
        <FieldLegend variant="label">Invalid Radio Group</FieldLegend>
        <RadioGroup>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem
              value="invalid1"
              id="radio-invalid-1"
              aria-invalid
            />
            <FieldLabel htmlFor="radio-invalid-1">Invalid Option 1</FieldLabel>
          </Field>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem
              value="invalid2"
              id="radio-invalid-2"
              aria-invalid
            />
            <FieldLabel htmlFor="radio-invalid-2">Invalid Option 2</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Disabled Radio Group</FieldLegend>
        <RadioGroup disabled>
          <Field data-disabled orientation="horizontal">
            <RadioGroupItem value="disabled1" id="radio-disabled-1" disabled />
            <FieldLabel htmlFor="radio-disabled-1">
              Disabled Option 1
            </FieldLabel>
          </Field>
          <Field data-disabled orientation="horizontal">
            <RadioGroupItem value="disabled2" id="radio-disabled-2" disabled />
            <FieldLabel htmlFor="radio-disabled-2">
              Disabled Option 2
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">
          Colors Radio Group{" "}
          <Badge className="border-transparent bg-red-500/15 text-red-500">
            New
          </Badge>
        </FieldLegend>
        <RadioGroup defaultValue="green">
          <Field orientation="horizontal">
            <RadioGroupItem
              value="destructive"
              id="color1"
              className="focus-visible:ring-destructive/50 data-checked:border-destructive data-checked:bg-destructive dark:data-checked:border-destructive dark:data-checked:bg-destructive"
            />
            <FieldLabel htmlFor="color1">Destructive</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem
              value="green"
              id="color2"
              className="focus-visible:ring-green-500/50 data-checked:border-green-500 data-checked:bg-green-500 dark:data-checked:border-green-500 dark:data-checked:bg-green-500"
            />
            <FieldLabel htmlFor="color2">Green</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem
              value="amber"
              id="color3"
              className="focus-visible:ring-amber-500/50 data-checked:border-amber-500 data-checked:bg-amber-500 dark:data-checked:border-amber-500 dark:data-checked:bg-amber-500"
            />
            <FieldLabel htmlFor="color3">Amber</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">
          Sizes Radio Group{" "}
          <Badge className="border-transparent bg-red-500/15 text-red-500">
            New
          </Badge>
        </FieldLegend>
        <FieldDescription>
          Radio buttons in different sizes — small, medium, and large.
        </FieldDescription>
        <RadioGroup defaultValue="sm" className="mb-3">
          <Field orientation="horizontal">
            <RadioGroupItem
              value="sm"
              id="size-sm"
              className="size-3 after:-inset-x-3 after:-inset-y-2 [&_span]:size-1.5"
            />
            <FieldLabel htmlFor="size-sm" className="text-sm font-normal">
              Small
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="md" id="size-md" />
            <FieldLabel htmlFor="size-md" className="font-normal">
              Medium
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem
              value="lg"
              id="size-lg"
              className="size-6 after:-inset-x-3 after:-inset-y-2 [&_span]:size-3"
            />
            <FieldLabel htmlFor="size-lg" className="text-base font-normal">
              Large
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">
          Animated Radio Group{" "}
          <Badge className="border-transparent bg-red-500/15 text-red-500">
            New
          </Badge>
        </FieldLegend>
        <RadioGroupPrimitive
          data-slot="radio-group"
          defaultValue="option-a"
          className="grid w-full gap-2"
        >
          <Field orientation="horizontal">
            <AnimatedRadioGroupItem value="option-a" id="anim-radio-a" />
            <FieldLabel htmlFor="anim-radio-a" className="font-normal">
              Option A
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <AnimatedRadioGroupItem value="option-b" id="anim-radio-b" />
            <FieldLabel htmlFor="anim-radio-b" className="font-normal">
              Option B
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <AnimatedRadioGroupItem value="option-c" id="anim-radio-c" />
            <FieldLabel htmlFor="anim-radio-c" className="font-normal">
              Option C
            </FieldLabel>
          </Field>
        </RadioGroupPrimitive>
      </FieldSet>
    </FieldGroup>
  )
}

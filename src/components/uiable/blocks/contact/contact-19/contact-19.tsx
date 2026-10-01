"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// third-party
import { cn } from "cn"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion"

// assets
import { ArrowRight, CheckCircle2, Loader2, Mail, User } from "lucide-react"

interface FormValues {
  name: string
  email: string
  subject: string | null
  message: string
}

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>

interface RequiredLabelProps {
  htmlFor: string
  children: ReactNode
}

interface FieldErrorProps {
  id: string
  message: string
}

interface StaggerGroupProps {
  children: ReactNode
  className?: string
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const
const STAGGER_CHILDREN = 0.08

const subjects = [
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales & Pricing" },
  { value: "feedback", label: "Course Feedback" },
  { value: "other", label: "Other" },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: null,
  message: "",
}

// Same glow/tint treatment for fields that own their own chrome and don't need a wrapper div.
const boundFieldClass =
  "border-border bg-muted/30 focus:border-primary/70 focus:ring-2 focus:ring-primary/10"

const StaggerContext = createContext(false)

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}
  if (!values.name.trim()) errors.name = "Please enter your name."
  if (!values.email.trim()) errors.email = "Please enter your email."
  else if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Enter a valid email address."
  if (!values.message.trim()) errors.message = "Please enter a message."
  return errors
}

// Border/background live on this wrapper (not <Input>) so focus glow and error state apply to the whole field.
function fieldWrapperClass(hasError: boolean) {
  return cn(
    "flex h-14 items-center gap-2 rounded-lg border bg-muted/30 px-4 transition-all duration-200",
    hasError
      ? "border-destructive ring-2 ring-destructive/20"
      : "border-border focus-within:border-primary/70 focus-within:ring-2 focus-within:ring-primary/10"
  )
}

function RequiredLabel({ htmlFor, children }: RequiredLabelProps) {
  return (
    <Label htmlFor={htmlFor}>
      {children} <span className="text-destructive">*</span>
    </Label>
  )
}

function FieldError({ id, message }: FieldErrorProps) {
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  )
}

function SpotlightCard({ children, className }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
    el.style.setProperty("--spot-opacity", "1")
  }

  const onPointerLeave = () => {
    ref.current?.style.setProperty("--spot-opacity", "0")
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ "--spot-size": "320px" } as React.CSSProperties}
      className={cn("group/spotlight relative overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[var(--spot-opacity,0)] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(var(--spot-size) circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

function Magnetic({ children }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { bounce: 0, visualDuration: 0.22 })
  const springY = useSpring(y, { bounce: 0, visualDuration: 0.22 })

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse") return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.3)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.3)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      className="block w-full will-change-transform md:inline-block md:w-auto"
    >
      {children}
    </motion.div>
  )
}

function StaggerGroup({ children, className }: StaggerGroupProps) {
  const reduce = Boolean(useReducedMotion())
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? STAGGER_CHILDREN / 2 : STAGGER_CHILDREN,
      },
    },
  }

  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={REVEAL_VIEWPORT}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  )
}

function StaggerItem({ children, className }: StaggerItemProps) {
  const reduce = Boolean(useReducedMotion())
  const inGroup = useContext(StaggerContext)
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.3 : 0.5, ease: EASE_ENTRANCE },
    },
  }

  if (!inGroup) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

function FadeIn({ children, className }: StaggerGroupProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, x: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: reduce ? 0.3 : 0.6, ease: EASE_ENTRANCE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

//  ------------------------------ | CONTACT 19 | ------------------------------  //

export default function Contact19() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  )
  const submitTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    return () => {
      clearTimeout(submitTimeout.current)
      clearTimeout(resetTimeout.current)
    }
  }, [])

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setValues((prev) => ({ ...prev, [field]: value }))
      if (field in errors) {
        setErrors((prev) => {
          const next = { ...prev }
          delete next[field as keyof FieldErrors]
          return next
        })
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    submitTimeout.current = setTimeout(() => {
      setStatus("success")
      setValues(initialValues)
      resetTimeout.current = setTimeout(() => setStatus("idle"), 2400)
    }, 900)
  }

  const isValidEmail = EMAIL_PATTERN.test(values.email)

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="h-full">
          <SpotlightCard className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 size-16 rounded-bl-full bg-secondary/50 sm:size-20 md:size-24"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 size-48 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                How can we help you succeed?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team typically responds within 24 hours.
              </p>
            </div>
            <StaggerGroup className="relative z-10 flex flex-1 flex-col justify-between">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-1 flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <StaggerItem className="flex flex-col gap-2">
                      <RequiredLabel htmlFor="name">Full Name</RequiredLabel>
                      <div className={fieldWrapperClass(Boolean(errors.name))}>
                        <User className="size-4 shrink-0 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Jane Doe"
                          value={values.name}
                          onChange={handleChange("name")}
                          aria-required="true"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          className="h-auto border-0 bg-transparent p-0 focus:ring-0"
                        />
                      </div>
                      {errors.name && (
                        <FieldError id="name-error" message={errors.name} />
                      )}
                    </StaggerItem>
                    <StaggerItem className="flex flex-col gap-2">
                      <RequiredLabel htmlFor="email">
                        Email Address
                      </RequiredLabel>
                      <div className={fieldWrapperClass(Boolean(errors.email))}>
                        <Mail className="size-4 shrink-0 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={values.email}
                          onChange={handleChange("email")}
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : "email-hint"
                          }
                          className="h-auto border-0 bg-transparent p-0 focus:ring-0"
                        />
                        {isValidEmail && !errors.email && (
                          <CheckCircle2
                            aria-hidden="true"
                            className="size-4 shrink-0 text-emerald-600"
                          />
                        )}
                      </div>
                      {errors.email ? (
                        <FieldError id="email-error" message={errors.email} />
                      ) : (
                        <p
                          id="email-hint"
                          className="text-xs text-muted-foreground"
                        >
                          We&apos;ll never share your email.
                        </p>
                      )}
                    </StaggerItem>
                  </div>
                  <StaggerItem className="flex flex-col gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      name="subject"
                      value={values.subject ?? undefined}
                      onValueChange={(value) =>
                        setValues((prev) => ({ ...prev, subject: value }))
                      }
                    >
                      <SelectTrigger
                        id="subject"
                        className={cn("w-full", boundFieldClass)}
                      >
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value}>
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </StaggerItem>
                  <StaggerItem className="flex flex-col gap-2">
                    <RequiredLabel htmlFor="message">Message</RequiredLabel>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you today?"
                      value={values.message}
                      onChange={handleChange("message")}
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={boundFieldClass}
                    />
                    {errors.message && (
                      <FieldError id="message-error" message={errors.message} />
                    )}
                  </StaggerItem>
                </div>
                <StaggerItem className="pt-2">
                  <Magnetic>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className={cn(
                        "group h-auto w-full rounded-lg py-4 md:w-auto",
                        status === "success" &&
                          "bg-emerald-600 hover:bg-emerald-600"
                      )}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Sending...
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle2 className="size-4" />
                          Message Sent
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>
                  </Magnetic>
                </StaggerItem>
              </form>
            </StaggerGroup>
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  )
}

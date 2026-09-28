"use client"

// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// assets
import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandYoutube,
} from "@tabler/icons-react"

const avatars = [
  {
    src: "https://cdn.uiable.com/user/avatar-5.jpg",
    alt: "Waitlist member 1",
  },
  {
    src: "https://cdn.uiable.com/user/avatar-1.jpg",
    alt: "Waitlist member 2",
  },
  {
    src: "https://cdn.uiable.com/user/avatar-7.jpg",
    alt: "Waitlist member 3",
  },
  {
    src: "https://cdn.uiable.com/user/avatar-8.jpg",
    alt: "Waitlist member 4",
  },
  {
    src: "https://cdn.uiable.com/user/avatar-9.jpg",
    alt: "Waitlist member 5",
  },
  {
    src: "https://cdn.uiable.com/user/avatar-10.jpg",
    alt: "Waitlist member 6",
  },
]

const socialLinks = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
  },
  {
    icon: IconBrandDribbble,
    label: "Dribbble",
  },
  {
    icon: IconBrandYoutube,
    label: "YouTube",
  },
]

//  ------------------------------ | JOIN WAITLIST 1 | ------------------------------  //

export default function JoinWaitlist1() {
  return (
    <section className="relative flex h-[100vh] min-h-[700px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_20%,transparent)_20%,color-mix(in_srgb,white_40%,transparent)_70%,white_100%)] px-4 dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_35%,transparent)_20%,color-mix(in_srgb,var(--background)_40%,transparent)_70%,var(--background)_100%)]">
      <div className="relative -top-12 z-10 flex flex-col items-center justify-center gap-8 text-center sm:-top-20 sm:gap-10">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[52px] md:leading-[1.2]">
            Join Our Waiting List
          </h1>
          <p className="max-w-[508px] text-base text-muted-foreground sm:text-lg lg:text-xl">
            We&apos;re going to be here soon, stay tuned and get regular
            updates!
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-12 w-full max-w-[320px] items-center rounded-lg border border-primary/40 bg-background/50 pl-4 shadow-xs transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary hover:border-primary/80 sm:max-w-[390px] dark:bg-background/40"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-full flex-1 rounded-none border-0 bg-transparent px-0 py-0 pr-2 text-sm text-foreground shadow-none placeholder:text-muted-foreground focus:border-transparent focus:outline-none"
          />
          <Button
            type="submit"
            className="h-12 shrink-0 rounded-l-none rounded-r-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-none hover:bg-primary/90"
          >
            Get Notified
          </Button>
        </form>

        <div className="flex flex-col items-center gap-2.5">
          <AvatarGroup className="-space-x-2">
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                className="size-9 ring-2 ring-background sm:size-10"
              >
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>U{index + 1}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="text-sm text-muted-foreground">
            Join a waitlist of 2000+ members!
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 z-0 h-[100vw] max-h-[1000px] w-[120vw] -translate-x-1/2 rounded-[50%] bg-background opacity-100 sm:bottom-[-570px] md:bottom-[-770px] lg:bottom-[-754px] xl:bottom-[-750px] dark:opacity-70">
        <div
          className="absolute inset-0 rounded-[50%] p-[2px]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, transparent 15%, var(--primary) 50%, transparent 85%, transparent 100%)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-6 sm:bottom-12 sm:gap-8">
        {socialLinks.map(({ icon: Icon, label }) => (
          <a
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground/60 transition-all duration-200 hover:text-foreground hover:opacity-100"
          >
            <Icon className="size-5 sm:size-6" />
          </a>
        ))}
      </div>
    </section>
  )
}

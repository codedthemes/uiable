import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// assets
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconSearch,
} from "@tabler/icons-react"

//  ------------------------------ | BUTTON SOCIAL | ------------------------------  //

export default function ButtonSocial() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Search"
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconSearch className="size-4.5" />
      </Button>
      <Separator orientation="vertical" className="my-1.5" />

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Twitter"
        nativeButton={false}
        render={<Link href="#" target="_blank" rel="noopener noreferrer" />}
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconBrandX className="size-4.5" />
      </Button>
      <Separator orientation="vertical" className="my-1.5" />

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Discord"
        nativeButton={false}
        render={<Link href="#" target="_blank" rel="noopener noreferrer" />}
        className="flex h-10.5 w-10.5 items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconBrandDiscord className="size-4.5" />
      </Button>
      <Separator orientation="vertical" className="my-1.5" />

      <Button
        nativeButton={false}
        render={<Link href="#" target="_blank" rel="noopener noreferrer" />}
        className="text-md flex h-10.5 w-10.5 items-center rounded-full bg-foreground p-0 leading-6 font-medium text-secondary hover:bg-foreground/90"
      >
        <IconBrandGithub className="size-4.5" />
      </Button>
    </div>
  )
}

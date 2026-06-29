// shadcn

// assets
import { ProfileAvatar } from "@/images/svg/landing"
// third party
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BLOCK - PROFILE CARD | ------------------------------  //

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-border bg-card px-4 pt-5 pb-5">
      <div className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-foreground pt-8 dark:bg-muted">
        <ProfileAvatar width={70} height={60} className="text-background" />
      </div>

      <div className="flex flex-col gap-1 text-center">
        <p className="text-center text-lg leading-6 font-medium tracking-normal text-secondary-foreground">
          Morgan James
        </p>

        <p className="text-xs leading-3 font-medium tracking-normal text-muted-foreground">
          Product Designer
        </p>
      </div>

      <div className="flex w-full flex-col gap-2">
        <motion.div
          whileTap={{ scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full"
        >
          <Button className="w-full hover:bg-primary/90">Send Message</Button>
        </motion.div>

        <motion.div
          whileTap={{ scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full border-none bg-muted/60 hover:bg-muted/90 dark:bg-muted dark:hover:bg-muted/80"
          >
            Call
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

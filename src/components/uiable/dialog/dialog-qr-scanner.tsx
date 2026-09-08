// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// third-party
import { motion } from "framer-motion"

// assets
import { QrCode, Share, Link2, XIcon } from "lucide-react"

//  ------------------------------ | DIALOG - QR SCANNER | ------------------------------  //

export function DialogQrScanner() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 dark:border-border"
          />
        }
      >
        <QrCode className="h-4 w-4" />
        <span>QR Code</span>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="border-none bg-transparent p-0 shadow-none sm:max-w-sm data-open:!animate-none data-closed:!animate-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
          className="relative mx-auto grid w-full gap-4 rounded-lg bg-card p-6 shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] ring-0 ring-foreground/10 sm:max-w-sm"
        >
          <DialogClose
            render={
              <Button
                variant="ghost"
                className="absolute top-2 right-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                size="icon-sm"
              />
            }
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <DialogHeader className="mt-2 text-center sm:text-center">
            <DialogTitle>Share Profile</DialogTitle>
            <DialogDescription>
              Let others scan this code to follow you.
            </DialogDescription>
          </DialogHeader>

          <div className="relative mx-auto my-6 flex h-56 w-56 items-center justify-center rounded-lg border bg-white p-4">
            {/* Realistic QR code image */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://github.com/shadcn"
              alt="QR Code"
              className="h-full w-full object-contain"
            />

            {/* Center Avatar overlaying the QR code */}
            <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-sm">
              <Avatar className="h-full w-full border border-border/20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full dark:border-border">
              <Link2 className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Copy Link</span>
            </Button>
            <Button className="w-full">
              <Share className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Share</span>
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

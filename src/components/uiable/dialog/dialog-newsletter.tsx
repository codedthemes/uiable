// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// assets
import { Mail } from "lucide-react"

//  ------------------------------ | DIALOG - NEWSLETTER | ------------------------------  //

export function DialogNewsletter() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="dark:border-border">
            Subscribe Newsletter
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <Avatar className="mb-4 h-16 w-16 bg-primary/10 after:border-none">
            <AvatarFallback className="bg-transparent text-primary">
              <Mail className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
          <DialogTitle className="text-2xl">
            Subscribe to our newsletter
          </DialogTitle>
          <DialogDescription className="text-base">
            Get the latest updates, articles, and resources, sent to your inbox
            weekly.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3">
          <Input
            placeholder="Enter your email address"
            type="email"
            className="h-12"
          />
          <Button size="lg" className="h-12 w-full">
            Subscribe
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  )
}

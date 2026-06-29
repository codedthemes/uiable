// shadcn

// assets
import {
  Add,
  Lock1,
  Logout,
  Notification,
  Profile2User,
  Setting,
  Share,
} from "iconsax-reactjs"

// project
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"

const uImg1 = {
  src: "https://cdn.uiable.com/user/avatar-1.jpg",
}
const uImg2 = {
  src: "https://cdn.uiable.com/user/avatar-2.jpg",
}
const uImg3 = {
  src: "https://cdn.uiable.com/user/avatar-3.jpg",
}
const uImg4 = {
  src: "https://cdn.uiable.com/user/avatar-4.jpg",
}
const uImg5 = {
  src: "https://cdn.uiable.com/user/avatar-5.jpg",
}
const cardBg = {
  src: "https://cdn.uiable.com/layout/img-profile-card.jpg",
}

const ui_design_team = [uImg1, uImg2, uImg3]
const friends_groups = [uImg4, uImg3, uImg2]
const all_followers = [uImg1, uImg2, uImg3, uImg4, uImg5]

//  ------------------------------ | LAYOUT - USER PROFILE | ------------------------------  //

export default function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex h-11 items-center gap-3 rounded-full px-1 hover:bg-muted/50">
        <Avatar className="h-9 w-9 border-2 border-background">
          <AvatarImage src={uImg2.src} alt="User" />
          <AvatarFallback className="bg-primary/10 font-bold text-primary">
            JD
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-88 overflow-hidden rounded-xl border-border/40 bg-background p-0 shadow-2xl"
      >
        <div className="sticky top-0 z-10 bg-background/95 px-6 py-5 backdrop-blur-sm">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="p-0">
              <h5>Profile</h5>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
        </div>

        <ScrollArea className="h-[calc(100vh-180px)] max-h-[calc(100vh-180px)]">
          <DropdownMenuGroup className="px-6 py-5">
            <div className="mb-6 flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src={uImg2.src} alt="User" />
                <AvatarFallback className="bg-primary/10 font-bold text-primary">
                  CD
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h6 className="mb-1">Carson Darrin 🖖</h6>
                </div>
                <span>carson.darrin@company.io</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-border/50 bg-muted/30 p-3.5">
              <div className="flex items-center gap-3">
                <Notification className="h-5 w-5 text-muted-foreground" />
                <span className="text-[14px] font-medium text-foreground">
                  Notification
                </span>
              </div>
              <Switch size="sm" defaultChecked />
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="mx-6 my-0 bg-border/30" />

          <DropdownMenuGroup className="p-2 pt-4">
            <DropdownMenuLabel className="mb-3 px-4 py-2 text-base capitalize">
              Manage
            </DropdownMenuLabel>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 focus:bg-primary/5">
              <Setting className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="text-[14px] font-medium transition-colors group-hover:text-primary">
                Settings
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 focus:bg-primary/5">
              <Share className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="text-[14px] font-medium transition-colors group-hover:text-primary">
                Share
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 focus:bg-primary/5">
              <Lock1 className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="text-[14px] font-medium transition-colors group-hover:text-primary">
                Change Password
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="mx-6 my-2 bg-border/30" />

          <DropdownMenuGroup className="p-2">
            <DropdownMenuLabel className="mb-3 px-4 py-2 text-base capitalize">
              Team
            </DropdownMenuLabel>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 focus:bg-primary/5">
              <Profile2User className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-1 items-center justify-between">
                <span className="text-[14px] font-medium">UI Design team</span>
                <div className="flex -space-x-2">
                  {ui_design_team.map((images, i) => (
                    <Avatar
                      key={i}
                      className="h-6 w-6 border-2 border-background"
                    >
                      <AvatarImage src={images.src} alt="User" />
                      <AvatarFallback
                        className={cn(
                          "bg-primary/10 text-[10px] font-bold",
                          i === 3 ? "bg-green-100 text-green-700" : ""
                        )}
                      >
                        {i === 3 ? "+2" : "U"}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount className="h-6 w-6 border-2 border-primary bg-primary text-[10px] text-white">
                    +3
                  </AvatarGroupCount>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 focus:bg-primary/5">
              <Profile2User className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-1 items-center justify-between">
                <span className="text-[14px] font-medium">Friends Groups</span>
                <div className="flex -space-x-2">
                  {friends_groups.map((images, i) => (
                    <Avatar
                      key={i}
                      className="h-6 w-6 border-2 border-background shadow-sm"
                    >
                      <AvatarImage src={images.src} alt="User" />
                      <AvatarFallback className="bg-primary/10 text-[8px] font-bold">
                        U
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="group cursor-pointer gap-4 rounded-lg px-4 py-2.5 text-primary focus:bg-primary/5 focus:text-primary">
              <Add className="h-5 w-5" />
              <div className="flex flex-1 items-center justify-between">
                <span className="text-[14px] font-medium">Add new</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-colors group-hover:bg-primary/90 group-hover:text-primary-foreground">
                  <Add className="h-3.5 w-3.5" />
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-6 my-0 bg-border/30" />
          <div className="grid p-2 py-4">
            <Button
              variant="ghost"
              className="gap-3 rounded-lg text-[15px] font-semibold text-muted-foreground transition-all hover:bg-destructive/5 hover:text-destructive"
            >
              <Logout className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
          <div className="p-4 pt-0">
            <Card
              className="mb-0 border-0 bg-cover shadow-none"
              style={{
                backgroundImage: `url(${cardBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent>
                <div className="mb-4 flex -space-x-3">
                  {all_followers.map((images, i) => (
                    <Avatar
                      key={i}
                      className="h-9 w-9 border-2 border-background shadow-md transition-transform"
                    >
                      <AvatarImage src={images.src} alt="User" />
                      <AvatarFallback className="bg-primary/10 text-[10px] font-bold">
                        U
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount className="h-9 w-9 border-2 border-primary bg-primary text-base text-white">
                    +20
                  </AvatarGroupCount>
                </div>
                <div className="mb-6">
                  <h3 className="leading-tight text-foreground">
                    245.3k{" "}
                    <small className="ml-1 text-muted-foreground">
                      Followers
                    </small>
                  </h3>
                </div>
                <Button className="gap-2 bg-yellow-500 text-white hover:bg-yellow-600">
                  <Logout className="size-5.5" />
                  <span>Upgrade to Business</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

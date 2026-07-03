// shadcn
import {
  Avatar,
  AvatarFallback,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";

// project
import { cn } from "@/lib/utils";

// assets
import {
  Add,
  Lock1,
  Logout,
  Notification,
  Profile2User,
  Setting,
  Share,
} from "iconsax-reactjs";

const uImg1 = {
  src: "https://cdn.uiable.com/user/avatar-1.jpg",
};
const uImg2 = {
  src: "https://cdn.uiable.com/user/avatar-2.jpg",
};
const uImg3 = {
  src: "https://cdn.uiable.com/user/avatar-3.jpg",
};
const uImg4 = {
  src: "https://cdn.uiable.com/user/avatar-4.jpg",
};
const uImg5 = {
  src: "https://cdn.uiable.com/user/avatar-5.jpg",
};
const cardBg = {
  src: "https://cdn.uiable.com/layout/img-profile-card.jpg",
};

const ui_design_team = [uImg1, uImg2, uImg3];
const friends_groups = [uImg4, uImg3, uImg2];
const all_followers = [uImg1, uImg2, uImg3, uImg4, uImg5];

//  ------------------------------ | LAYOUT - USER PROFILE | ------------------------------  //

export default function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex items-center gap-3 px-1 hover:bg-muted/50 rounded-full h-11">
        <Avatar className="h-9 w-9 border-2 border-background">
          <AvatarImage src={uImg2.src} alt="User" />
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            JD
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-88 p-0 shadow-2xl border-border/40 overflow-hidden rounded-xl bg-background"
      >
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm px-6 py-5">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="p-0">
              <h5>Profile</h5>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
        </div>

        <ScrollArea className="h-[calc(100vh-180px)] max-h-[calc(100vh-180px)]">
          <DropdownMenuGroup className="px-6 py-5">
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src={uImg2.src} alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
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

            <div className="flex items-center justify-between p-3.5 bg-muted/30 rounded-xl border border-border/50">
              <div className="flex items-center gap-3">
                <Notification className="h-5 w-5 text-muted-foreground" />
                <span className="text-[14px] font-medium text-foreground">
                  Notification
                </span>
              </div>
              <Switch size="sm" defaultChecked />
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="my-0 bg-border/30 mx-6" />

          <DropdownMenuGroup className="p-2 pt-4">
            <DropdownMenuLabel className="px-4 py-2 text-base capitalize mb-3">
              Manage
            </DropdownMenuLabel>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 rounded-lg group">
              <Setting className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[14px] font-medium group-hover:text-primary transition-colors">
                Settings
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 rounded-lg group">
              <Share className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[14px] font-medium group-hover:text-primary transition-colors">
                Share
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 rounded-lg group">
              <Lock1 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[14px] font-medium group-hover:text-primary transition-colors">
                Change Password
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="my-2 bg-border/30 mx-6" />

          <DropdownMenuGroup className="p-2">
            <DropdownMenuLabel className="px-4 py-2 text-base capitalize mb-3">
              Team
            </DropdownMenuLabel>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 rounded-lg group">
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
                          "text-[10px] bg-primary/10 font-bold",
                          i === 3 ? "bg-green-100 text-green-700" : "",
                        )}
                      >
                        {i === 3 ? "+2" : "U"}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount className="h-6 w-6 border-2 text-[10px] border-primary bg-primary text-white">
                    +3
                  </AvatarGroupCount>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 rounded-lg group">
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
                      <AvatarFallback className="text-[8px] bg-primary/10 font-bold">
                        U
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-4 px-4 py-2.5 cursor-pointer focus:bg-primary/5 focus:text-primary rounded-lg group text-primary">
              <Add className="h-5 w-5" />
              <div className="flex flex-1 items-center justify-between">
                <span className="text-[14px] font-medium">Add new</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm group-hover:bg-primary/90 group-hover:text-primary-foreground transition-colors">
                  <Add className="h-3.5 w-3.5" />
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-0 bg-border/30 mx-6" />
          <div className="p-2 py-4 grid">
            <Button
              variant="ghost"
              className="gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/5 font-semibold text-[15px] transition-all rounded-lg"
            >
              <Logout className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
          <div className="p-4 pt-0">
            <Card
              className="border-0 shadow-none mb-0 bg-cover"
              style={{
                backgroundImage: `url(${cardBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent>
                <div className="flex -space-x-3 mb-4">
                  {all_followers.map((images, i) => (
                    <Avatar
                      key={i}
                      className="h-9 w-9 border-2 border-background shadow-md transition-transform"
                    >
                      <AvatarImage src={images.src} alt="User" />
                      <AvatarFallback className="text-[10px] bg-primary/10 font-bold">
                        U
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount className="h-9 w-9 border-2 text-base border-primary bg-primary text-white">
                    +20
                  </AvatarGroupCount>
                </div>
                <div className="mb-6">
                  <h3 className="text-foreground leading-tight">
                    245.3k{" "}
                    <small className="text-muted-foreground ml-1">
                      Followers
                    </small>
                  </h3>
                </div>
                <Button className="text-white gap-2 bg-yellow-500 hover:bg-yellow-600">
                  <Logout className="size-5.5" />
                  <span>Upgrade to Business</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

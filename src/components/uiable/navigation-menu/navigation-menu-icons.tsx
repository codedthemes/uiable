"use client"

// next
import Link from "next/link"

// shadcn
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// assets
import { HelpCircleIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-react"

//  ------------------------------ | NAVIGATION MENU - ICONS | ------------------------------  //

export function NavigationMenuIcons() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap justify-center gap-y-2">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="#" className="flex items-center gap-2">
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
            }
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="#" className="flex items-center gap-2">
                <UserIcon className="size-4" />
                <span>Profile</span>
              </Link>
            }
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="#" className="flex items-center gap-2">
                <SettingsIcon className="size-4" />
                <span>Settings</span>
              </Link>
            }
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="#" className="flex items-center gap-2">
                <HelpCircleIcon className="size-4" />
                <span>Help</span>
              </Link>
            }
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

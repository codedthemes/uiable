"use client"

import * as React from "react"

// next
import Link from "next/link"

// shadcn
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// assets
import {
  BarChart3Icon,
  CodeIcon,
  LaptopIcon,
  LayoutDashboardIcon,
  SmartphoneIcon,
} from "lucide-react"

function ListItem({
  children,
  icon,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon?: React.ReactNode
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            {icon && <span className="text-muted-foreground">{icon}</span>}
            {children}
          </Link>
        }
      />
    </li>
  )
}

//  ------------------------------ | NAVIGATION MENU - MEGA | ------------------------------  //

export function NavigationMenuMega() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[calc(100vw-3rem)] flex-col gap-4 p-4 sm:w-[400px] md:w-[750px] md:flex-row md:gap-0 lg:w-[900px]">
              {/* Left Highlight Section */}
              <div className="w-full rounded-lg bg-muted p-6 md:w-1/3 dark:bg-background">
                <LayoutDashboardIcon className="mb-4 size-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">
                  Platform Overview
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Discover how our comprehensive suite of tools can transform
                  your workflow.
                </p>
                <Button variant="outline" className="w-fit bg-background">
                  Explore Platform
                </Button>
              </div>

              {/* Right Links Section */}
              <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-4 md:w-2/3 md:pl-8">
                <div>
                  <h4 className="mb-3 text-sm leading-none font-medium text-muted-foreground">
                    For Developers
                  </h4>
                  <ul className="flex flex-col gap-0.5">
                    <ListItem href="#" icon={<CodeIcon className="size-4" />}>
                      API Reference
                    </ListItem>
                    <ListItem href="#" icon={<LaptopIcon className="size-4" />}>
                      Documentation
                    </ListItem>
                    <ListItem
                      href="#"
                      icon={<SmartphoneIcon className="size-4" />}
                    >
                      Mobile SDKs
                    </ListItem>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm leading-none font-medium text-muted-foreground">
                    For Business
                  </h4>
                  <ul className="flex flex-col gap-0.5">
                    <ListItem
                      href="#"
                      icon={<BarChart3Icon className="size-4" />}
                    >
                      Analytics
                    </ListItem>
                    <ListItem
                      href="#"
                      icon={<LayoutDashboardIcon className="size-4" />}
                    >
                      Enterprise
                    </ListItem>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Templates</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Documentation</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

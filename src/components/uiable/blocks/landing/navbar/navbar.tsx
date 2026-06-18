"use client";

import Link from "next/link";
import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// project imports
import branding from "@/branding.json";
import Logo from "@/components/uiable/layout/shared/logo";

// assets
import { IconBrandDiscord, IconBrandGithub, IconBrandX, IconMenu2, IconSearch, IconX } from "@tabler/icons-react";

// constants
const navlinks = [
  { label: "Components", href: "/components" },
  { label: "Get Started", href: "/doc/introduction" }
];

function Divider() {
  return <Separator orientation="vertical" className="my-1.5" />;
}

function SocialActions({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Search"
        className="w-10.5 h-10.5 flex items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconSearch className="size-4.5" />
      </Button>
      <Divider />

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Twitter"
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.x}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="w-10.5 h-10.5 flex items-center justify-center hover:bg-foreground/10 dark:hover:bg-muted rounded-sm"
      >
        <IconBrandX className="size-4.5" />
      </Button>
      <Divider />

      <Button
        variant="ghost"
        size="icon-lg"
        aria-label="Discord"
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.discord}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="w-10.5 h-10.5 flex items-center justify-center rounded-sm hover:bg-foreground/10 dark:hover:bg-muted"
      >
        <IconBrandDiscord className="size-4.5" />
      </Button>
      <Divider />

      <Button
        nativeButton={false}
        render={
          <Link
            href={branding.company.socialLink.github}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className=" w-10.5 h-10.5 flex items-center text-md leading-6 bg-foreground hover:bg-foreground/90 text-secondary font-medium rounded-full p-0"
      >
        <IconBrandGithub className="size-4.5" />
      </Button>
    </div>
  );
}

//  ------------------------------ | LAYOUT - NAVBAR | ------------------------------  //

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between h-19.5 z-50 w-full px-4 sm:px-8">
        {/* LEFT — Logo + nav links */}
        <div className="flex items-center gap-8">
          <Logo />

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-2">
            {navlinks.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                nativeButton={false}
                render={<Link href={item.href} />}
                className="text-[14px] leading-6 font-medium text-foreground hover:text-primary hover:bg-transparent dark:hover:bg-transparent px-3 py-1.5"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <SocialActions className="hidden md:flex items-center gap-2" />
        <Button
          variant="ghost"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden w-10 h-10 rounded-sm flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IconX className="size-4.5" />
          ) : (
            <IconMenu2 className="size-4.5" />
          )}
        </Button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background container mx-auto px-4 sm:px-8 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navlinks.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                nativeButton={false}
                render={<Link href={item.href} />}
                className="text-[14px] leading-6 font-medium text-foreground hover:text-primary hover:bg-transparent dark:hover:bg-transparent justify-start px-0 py-1.5"
              >
                {item.label}
              </Button>
            ))}
          </nav>
          <SocialActions className="flex items-center gap-2" />
        </div>
      )}
    </header>
  );
}

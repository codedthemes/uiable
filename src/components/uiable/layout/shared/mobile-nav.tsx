"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// project
import { cn } from "@/lib/utils"

interface MobileNavProps {
  onSelect?: () => void
  className?: string
}

//  ------------------------------ | SHARED - MOBILE NAV | ------------------------------  //

export default function MobileNav({ onSelect, className }: MobileNavProps) {
  const pathname = usePathname()

  const links = [
    { label: "Components", href: "/components" },
    { label: "Documentation", href: "/doc" },
  ]

  return (
    <nav className={cn("flex flex-col gap-2", className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onSelect}
          className={cn(
            "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === link.href ||
              (link.href === "/components" &&
                pathname.startsWith("/components"))
              ? "bg-primary/10 text-primary"
              : "hover:bg-muted"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

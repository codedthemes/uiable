"use client"

import { useState } from "react"

// next
import Link from "next/link"
import { usePathname } from "next/navigation"

// shadcn
import { Button } from "@/components/ui/button"

// project-imports
import Logo from "@/images/landings/AiDarkLogo"

// assets
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Resources" },
]

export default function Navbar8() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="dark absolute top-0 right-0 left-0 z-50 w-full border-b border-white/5 bg-slate-950/80 text-white backdrop-blur-2xl lg:fixed">
      <div className="container mx-auto flex items-center justify-between px-8 py-6">
        <div className="dark flex cursor-pointer items-center gap-2">
          <Link href="#">
            <Logo />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 text-sm font-medium lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link href="#">
            <Button className="rounded-full bg-white text-black hover:bg-gray-200">
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container mx-auto flex flex-col gap-4 border-t border-white/5 px-8 pt-4 pb-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Sign In
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full border-none bg-white font-semibold text-black hover:bg-gray-200">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

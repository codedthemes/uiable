"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// project
import CATEGORY_COUNTS from "@/category-counts.json";
import { NAV_CATEGORIES } from "@/components-grid";
import { cn } from "@/lib/utils";

interface ComponentListProps {
  search?: string;
  onSelect?: () => void;
}

//  ------------------------------ | LAYOUT - COMPONENT LIST | ------------------------------  //

export default function ComponentList({
  search = "",
  onSelect
}: ComponentListProps) {
  const pathname = usePathname();

  const filteredSections = NAV_CATEGORIES.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase())
    )
  })).filter((section) => section.items.length > 0);

  const totalComponents = NAV_CATEGORIES.reduce((total, section) => {
    return (
      total +
      section.items.reduce((secTotal, item) => {
        return (
          secTotal +
          (CATEGORY_COUNTS[item.slug as keyof typeof CATEGORY_COUNTS] || 0)
        );
      }, 0)
    );
  }, 0);

  return (
    <div className="flex flex-col gap-1 p-2">
      <Link
        href="/components"
        onClick={onSelect}
        className={cn(
          "flex items-center justify-between p-2 text-sm font-medium rounded-lg transition-all group",
          pathname === "/components"
            ? "bg-primary/10 text-primary"
            : "text-sidebar-foreground hover:bg-background hover:text-foreground"
        )}
      >
        <span className="font-medium">All Component</span>
        <span
          className={cn(
            "text-xs transition-colors ",
            pathname === "/components" ? "text-primary" : "text-sidebar-ring"
          )}
        >
          {totalComponents}
        </span>
      </Link>
      {filteredSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-1">
          <p className="p-2 text-xs font-medium capitalize tracking-normal text-sidebar-ring bg-sidebar sticky top-12 z-10">
            {section.title}
          </p>
          {section.items.map((item) => {
            const href = `/components/${item.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.slug}
                href={href}
                onClick={onSelect}
                className={cn(
                  "flex items-center justify-between p-2 text-sm font-medium rounded-lg transition-all group",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:bg-muted-foreground/6 hover:text-foreground"
                )}
              >
                <span className="capitalize">{item.title}</span>
                <span
                  className={cn(
                    "text-xs transition-colors",
                    isActive ? "text-primary" : "text-sidebar-ring"
                  )}
                >
                  {CATEGORY_COUNTS[item.slug as keyof typeof CATEGORY_COUNTS] ||
                    0}
                </span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

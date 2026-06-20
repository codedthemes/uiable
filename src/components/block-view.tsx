"use client";

import { useEffect, useMemo, useState } from "react";

// project
import { Item } from "./block-item";
import { categories } from "@/components-grid";
import LazySection from "@/components/LazySection";

interface CategoryViewProps {
  category: string;
  items: Item[];
}

//  ------------------------------ | COMPONENT - BLOCK VIEW | ------------------------------  //

export default function CategoryView({ category, items }: CategoryViewProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const activeCategory = useMemo(
    () => categories.find((c) => c.slug === category),
    [category]
  );
  const breakpoints = activeCategory?.breakpoints || {};
  const { xs = 1, sm, md, lg, xl, xxl } = breakpoints;

  const [columns, setColumns] = useState<number>(
    xxl ?? xl ?? lg ?? md ?? sm ?? xs
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) setColumns(xxl ?? xl ?? lg ?? md ?? sm ?? xs);
      else if (width >= 1280) setColumns(lg ?? md ?? sm ?? xs);
      else if (width >= 1024) setColumns(lg ?? md ?? sm ?? xs);
      else if (width >= 768) setColumns(md ?? sm ?? xs);
      else if (width >= 640) setColumns(sm ?? xs);
      else setColumns(xs);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints, xs, sm, md, lg, xl]);

  const handleCopy = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!mounted) return null;

  return (
    <div
      className="grid gap-5 mb-0 items-start"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item, index) => (
        <LazySection
          key={item.name}
          sections={{
            importFunc: () => import("./block-item"),
            props: {
              item,
              index,
              isLast: index === items.length - 1,
              handleCopy,
              copiedIndex
            }
          }}
          offset="200px"
        />
      ))}
    </div>
  );
}

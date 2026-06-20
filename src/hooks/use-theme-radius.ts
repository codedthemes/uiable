"use client";

import { useCallback, useEffect, useState } from "react";

const parseCssRadius = (value: string) => {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return NaN;
  if (normalized.endsWith("rem")) return parseFloat(normalized);
  if (normalized.endsWith("px")) {
    const px = parseFloat(normalized);
    const rootFontSize =
      parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return px / rootFontSize;
  }
  return parseFloat(normalized);
};

const getCssRootRadius = () => {
  if (typeof window === "undefined") return null;
  const cssRadius = getComputedStyle(document.documentElement).getPropertyValue(
    "--radius"
  );
  const parsedRadius = parseCssRadius(cssRadius);
  return Number.isNaN(parsedRadius) ? null : parsedRadius;
};

const THEME_RADIUS_KEY = "theme-radius";

//  ------------------------------ | CUSTOMIZER - USE THEME RADIUS | ------------------------------  //

export function useThemeRadius() {
  const [radius, setRadius] = useState<number>(() => {
    if (typeof window === "undefined") return 0.3;
    // Prefer localStorage value over CSS computed value
    const stored = localStorage.getItem(THEME_RADIUS_KEY);
    if (stored !== null) {
      const parsed = parseFloat(stored);
      if (!Number.isNaN(parsed)) return parsed;
    }
    return getCssRootRadius() ?? 0.3;
  });

  const syncRadiusFromBody = useCallback(() => {
    const body = document.body;
    body.style.removeProperty("--radius");

    const cssRadius = getComputedStyle(body).getPropertyValue("--radius");
    const nextRadius = parseCssRadius(cssRadius);

    if (!Number.isNaN(nextRadius)) {
      setRadius(nextRadius);
    }
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--radius", `${radius}rem`);
    localStorage.setItem(THEME_RADIUS_KEY, String(radius));
  }, [radius]);

  return { radius, setRadius, syncRadiusFromBody };
}

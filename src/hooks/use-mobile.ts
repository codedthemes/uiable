"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

//  ------------------------------ | HOOK - USE MOBILE | ------------------------------  //

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);
    setTimeout(() => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT), 0);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

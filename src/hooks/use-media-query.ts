"use client";

import { useEffect, useState } from "react";

//  ------------------------------ | HOOK - USE MEDIA QUERY | ------------------------------  //

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setTimeout(() => setValue(result.matches), 0);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

"use client";

import { useState } from "react";

//  ------------------------------ | HOOK - USE COPY TO CLIPBOARD | ------------------------------  //

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
      console.warn("Clipboard not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setIsCopied(false);
    }
  };

  return { copyToClipboard, isCopied };
}

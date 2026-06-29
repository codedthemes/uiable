"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"

export function loadMicrosoftClarity(clarityId) {
  if (!clarityId) {
    console.warn("Microsoft Clarity ID is missing.")
    return
  }

  // Check if the script is already added
  if (document.getElementById("microsoft-clarity-script")) return

  // Create the Clarity script
  const script = document.createElement("script")
  script.async = true
  script.id = "microsoft-clarity-script"
  script.innerHTML = `
      (function(c,l,a,r,i,t,y) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "${clarityId}");
    `
  document.body.appendChild(script)
}

export default function MicrosoftClarity({ clarityId }) {
  useEffect(() => {
    if (clarityId) {
      loadMicrosoftClarity(clarityId) // Load the script using the utility function
    }
  }, [clarityId])

  return null // This component doesn't render any visible content
}

MicrosoftClarity.propTypes = { clarityId: PropTypes.string }

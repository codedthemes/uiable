"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"

export function loadGTag(gaId) {
  if (!gaId) {
    console.warn("Google Analytics ID is missing.")
    return
  }

  // Check if the script already exists
  if (document.getElementById("gtag-script")) return

  // Add the Google Analytics script
  const script = document.createElement("script")
  script.id = "gtag-script"
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  script.async = true
  document.head.appendChild(script)

  // Initialize Google Analytics
  script.onload = () => {
    window.dataLayer = window.dataLayer || []

    function gtag(...args) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", gaId)
  }
}

export default function GTag({ gaId }) {
  useEffect(() => {
    // Call the utility function directly
    loadGTag(gaId)
  }, [gaId])

  return null // No visible UI for this component
}

GTag.propTypes = { gaId: PropTypes.string }

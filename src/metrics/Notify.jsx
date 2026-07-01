"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"

function loadNotifyScript(notifyId) {
  if (!notifyId) {
    console.warn("Notify ID is missing.")
    return
  }

  // Check if the script is already loaded
  if (document.getElementById("notify-script")) return

  const script = document.createElement("script")
  script.id = "notify-script"
  script.src = `https://fomo.codedthemes.com/pixel/${notifyId}`
  script.defer = true

  script.onload = () => {
    console.log("Notify script loaded successfully.")
  }

  script.onerror = () => {
    console.error("Error loading Notify script.")
  }

  document.body.appendChild(script)
}

export default function Notify({ notifyId }) {
  useEffect(() => {
    // Call the utility function to load the script
    loadNotifyScript(notifyId)
  }, [notifyId])

  return null // This component doesn't render any visible content
}

Notify.propTypes = { notifyId: PropTypes.string }

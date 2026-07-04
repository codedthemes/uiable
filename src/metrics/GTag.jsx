"use client"

import PropTypes from "prop-types"

import Script from "next/script"

/***************************  METRICS - G-TAG  ***************************/

// No visible UI for this component
export default function GTag({ gaId }) {
  if (!gaId) {
    console.warn("Google Analytics ID is missing.")
    return
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
      </Script>
    </>
  )
}

GTag.propTypes = { gaId: PropTypes.string }

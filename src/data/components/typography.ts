// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const typographyInfo: CategoryInfo = {
  title: "Typography",
  description: [
    "Build consistent content structure using a Typography system built on Tailwind CSS, designed to standardize headings, body text, and prose effortlessly."
  ],
  whatIsHeading: `What is ${branding.brandName} Typography?`,
  whatIsDescription: [
    `Typography in a large web app tends to become an absolute mess in terms of font size, line height, and margin chaos. With ${branding.brandName} Typography, your typography becomes streamlined and consistent with the usage of basic typographic elements (h1, h2, p, blockquote, code), all while maintaining perfect vertical rhythm on all pages.`,
    "The real win here is the lack of abstraction. The styles are not encapsulated in a complex, opaque npm package. Instead, the source code sits right in your repository, allowing you full control to manipulate any HTML tags, spacing calculations, or variant generation as dictated by your new design requirements.",
    "The theme makes use of Tailwind CSS to precisely apply its tracking and leading utilities. With the proper combination of letter spacing, line height, and font sizes from the very beginning, the theme takes the guesswork out of the equation for you, making sure that your text always looks stunning."
  ],
  variantsHeading: "Popular Typography Variants",
  variants: [
    "Headers (H1 - H6) . Strict sizing scales for page titles, section headings, and card titles",
    "Paragraphs (p) . Standardized body text with perfect line-heights for readability",
    "Lead Text . Slightly larger, muted text often used immediately below an H1 to summarize the page",
    "Muted Text . Smaller, lower-contrast text used for timestamps, footnotes, or helper text",
    "Blockquotes . Styled quotation blocks with a distinct left border and italicized font",
    "Inline Code . Monospaced text pills for highlighting variable names or commands"
  ],
  whyUseHeading: `Why ${branding.brandName} Typography?`,
  whyUseDescription: [
    `Relying on raw HTML tags without a rigid system is a fast track to layout debt, where an h2 on your dashboard has entirely different margins than the one on your settings page. ${branding.brandName} Typography solves this by enforcing strict, pre-calculated Tailwind utility classes right out of the box, ensuring your vertical rhythm and text scaling stay flawless from mobile screens up to ultrawide monitors.`,
    "Because these guidelines live completely inside your own repository, you can say goodbye to dependency lock-in. You have total control over the underlying component architecture, making it trivial to swap out font families, tweak global margin-bottom defaults, or tighten up the tracking for massive hero headlines without fighting an external library.",
    "The system is fully aligned with Tailwind CSS, ensuring typography consistently follows design tokens and maintains readability across all screen sizes."
  ],
  featuresHeading: `Features of ${branding.brandName} Typography`,
  features: [
    "Fluid Sizing: Utilizes responsive Tailwind classes to ensure text looks perfect on all devices.",
    "Semantic HTML Tags: Strict adherence to proper heading tags ensures flawless SEO and screen reader interpretation.",
    "Optimized Line Lengths: Utilizes max-w-prose (around 65 characters) to ensure long paragraphs remain easy to read.",
    "Perfect Line Heights: Carefully calibrated leading-tight for headings and leading-7 for paragraphs.",
    "Zero Dependency Lock-in: Direct source access allows for deep typographic customization."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Typography is the absolute foundation of your application's visual design. It defines the brand's voice.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Long-form Blog Posts and Marketing Articles",
    "Software Documentation Portals",
    "Dense Application Settings Panels",
    "Empty States and Dashboard Welcome Screens"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your base font families, primary text colors, or global tracking values in your Tailwind configuration, the Typography system will automatically inherit and reflect those changes instantly.",
  faqs: []
};

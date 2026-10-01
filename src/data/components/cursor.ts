// project-imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const cursorInfo: CategoryInfo = {
  title: "Cursor",
  description: [
    "Upgrade your application's interactivity with smooth, custom animated cursor systems. Replace standard system pointers with responsive, context-aware visual enhancements.",
  ],
  whatIsHeading: `What is ${branding.brandName} Cursor?`,
  whatIsDescription: [
    `${branding.brandName} Cursor is a collection of premium, animated cursor components designed to replace or enhance the default browser pointer. Built with Framer Motion, these cursors provide elegant trailing physics, custom interaction states, and magnetic snapping features.`,
    "These components support both bounded (container-restricted) mode for inline component showcases and global modes for immersive, site-wide interaction designs.",
  ],
  variantsHeading: "Popular Cursor Variants",
  variants: [
    "Magnetic Spotlight . A responsive ring cursor that snaps and stretches around buttons or interactive tags when nearby.",
    "Context-Aware . A smart cursor that changes its size and displays custom icon labels based on the hovered component's data attributes (e.g. View, Play, Drag).",
    "Sparkle Trail . A high-performance canvas-based cursor trailing sparkling particle effects as it glides across the screen.",
  ],
  whyUseHeading: `Why ${branding.brandName} Cursor?`,
  whyUseDescription: [
    "Custom cursors are notoriously difficult to implement smoothly without introducing layout jank, input lag, or high CPU utilization. UIAble solves these challenges by combining CSS optimizations, Framer Motion springs, and HTML5 Canvas drawing routines.",
    "Our cursor components are designed to automatically disable on mobile/touch screen devices, respect global Reduced Motion preferences, and seamlessly inherit your theme's design tokens.",
  ],
  featuresHeading: `Features of ${branding.brandName} Cursor`,
  features: [
    "Spring-based Physics: Smooth trailing lag utilizing Framer Motion's high-performance spring dynamics.",
    "Context Snapping: Automatically changes shape, text, or color when hovering over customizable elements.",
    "Performant Canvas Rendering: Particle trails are handled in a single Canvas element to prevent DOM clutter.",
    "Touch/Mobile Bypass: Gracefully degrades to native cursors on touch screens, avoiding user friction.",
    "Accessible Mode: Automatically falls back to standard cursors if preferred-reduced-motion is active.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Cursor elements can be dropped anywhere in your layout to create highly immersive portfolios, dashboards, or landing page experiences.`,
    "You can customize their look and feel using standard attributes:",
  ],
  integrationList: [
    "Use data-cursor-magnetic to make cursors magnetically snap to buttons or inputs.",
    "Use data-cursor-context='value' to display custom icons or labels like 'View' or 'Play'.",
  ],
  integrationNote:
    "Make sure to hide the default browser cursor in CSS (`cursor-none`) only on elements where your custom cursor is active, and configure proper pointer-events configurations to ensure click/touch accessibility is preserved.",
  faqs: [],
}

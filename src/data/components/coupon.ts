// project-imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const couponInfo: CategoryInfo = {
  title: "Coupon",
  description: [
    "A clean and beautiful way to present promotional codes and discounts. Includes variants for basic layout, scratch-to-reveal interactions, and modern ticket styling.",
  ],
  whatIsHeading: `What is ${branding.brandName} Coupon?`,
  whatIsDescription: [
    `${branding.brandName} Coupon provides ready-to-use components to showcase your discounts and promos effectively, increasing conversion rates.`,
    "All source files are included in your project, giving you full control over structure, styling, and interactions.",
  ],
  variantsHeading: "Popular Coupon Variants",
  variants: [
    "Basic . A standard layout separating discount amount from the code.",
    "Scratch . An interactive scratch-off component revealing the promo code.",
    "Ticket . A modern ticket layout with side cutouts and a dashed tear line.",
  ],
  whyUseHeading: `Why ${branding.brandName} Coupon?`,
  whyUseDescription: [
    "Coupons are essential for e-commerce and SaaS platforms to drive sales. These pre-designed components help you integrate promotional elements instantly.",
    "It works seamlessly with Tailwind CSS, keeping alerts clear, consistent, and easy to customize.",
  ],
  featuresHeading: `Features of ${branding.brandName} Coupon`,
  features: [
    "Copy to clipboard. Includes a built-in copy action for quick code retrieval.",
    "Interactive options. Engage users with scratch-to-reveal variants.",
    "Tailwind integration. Fully customizable using standard Tailwind utility classes.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Coupon acts as a visually appealing way to present offers. It’s perfect for:`,
  ],
  integrationList: [
    "E-commerce product pages and checkout flows",
    "SaaS pricing page promotions",
    "Marketing landing pages",
    "In-app rewards and referrals",
  ],
  integrationNote:
    "It seamlessly integrates with your design system. Any changes to your theme colors and fonts will automatically reflect in the coupon styles.",
  faqs: [],
}

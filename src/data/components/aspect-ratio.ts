// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const aspectRatioInfo: CategoryInfo = {
  title: "Aspect Ratio",
  description: [
    "Get started, copy the component, and keep your images and videos looking just right on every screen.",
  ],
  whatIsHeading: `What is ${branding.brandName} Aspect Ratio?`,
  whatIsDescription: [
    `${branding.brandName} Aspect Ratio is a structural layout component that forces its container and whatever is inside it to conform to a specific mathematical ratio (like 16:9 or 4:3), regardless of its physical width on the screen.`,
    "Unlike traditional UI libraries, this component is not locked inside an npm package. You have the actual source code right in your project, so you can edit, customize and extend the DOM structure any way you want.",
    "It’s styled with Tailwind CSS, fully. It uses the modern CSS aspect-ratio properties to natively handle media scaling without the old, deprecated padding-bottom hacks of the past.",
  ],
  variantsHeading: "Popular Aspect Ratio Variants",
  variants: [
    "16:9 (Widescreen) . The standard ratio for high-definition video players",
    "4:3 (Standard) . Traditional ratio often used for older photography or standard displays",
    "1:1 (Square) . Perfect squares, essential for Instagram-style image grids or user avatars",
    "21:9 (Cinematic) . Ultra-wide ratio used for premium hero banners or cinematic video",
    "3:4 (Portrait) . Vertical ratio used for mobile-first photography or app screenshots",
  ],
  whyUseHeading: `Why ${branding.brandName} Aspect Ratio?`,
  whyUseDescription: [
    `Before modern CSS, forcing an element to maintain its ratio while resizing responsively required complex padding-hack wrappers. ${branding.brandName} Aspect Ratio eliminates complexity just by applying a single component that keeps images scaled and layouts visually consistent across every screen size.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to add custom object-fit utilities, inject placeholder backgrounds, or handle image loading states.",
    "It works smoothly with Tailwind CSS. This guarantees that your media containers automatically maintain a cohesive, mathematically perfect design system globally.",
  ],
  featuresHeading: `Features of ${branding.brandName} Aspect Ratio`,
  features: [
    "Modern CSS Execution. Utilizes the native aspect-ratio property for zero JavaScript layout stability.",
    "Perfect Media Scaling. Ensures child elements (like <img> or <iframe>) stretch perfectly to fill the container using object-cover.",
    "Zero Dependency Lock-in. Direct source access allows for deep structural customization.",
    "Highly Composable. Wraps any element flawlessly not just images.",
    "Prevents Layout Shifts. Reserves the exact vertical height needed before an image loads, improving Core Web Vitals (CLS).",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Aspect Ratio is essential for building media-heavy applications and responsive card layouts.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "YouTube or Vimeo Video Embeds",
    "Responsive Image Galleries and Lightboxes",
    "Blog Post Header Images",
    "E-commerce Product Previews",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your rounded corners or shadow definitions in your Tailwind configuration, the Aspect Ratio container will automatically inherit and reflect those changes instantly.",
  faqs: [],
}

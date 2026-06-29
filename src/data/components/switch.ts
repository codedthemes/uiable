// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const switchInfo: CategoryInfo = {
  title: "Switch",
  description: [
    "Improve user settings interactions with a customizable Switch built on Tailwind CSS and Base UI, offering seamless animations and stable state control.",
  ],
  whatIsHeading: `What is ${branding.brandName} Switch?`,
  whatIsDescription: [
    `Designed as a sleek alternative to the traditional checkbox, the ${branding.brandName} Switch brings a modern, intuitive toggle experience to your user interface. By using the core principles of shadcn/ui and Base UI, this component delivers flawless performance, managing active states, hidden native inputs, and fluid sliding animations right out of the box.`,
    "Unlike traditional UI libraries that force you into a one-size-fits-all npm package, this component gives you direct ownership of the raw source code within your repository. The benefit this provides is that you can easily adjust the DOM structure and customize the physics of animations for better brand representation.",
    "In addition, thanks to the built-in Tailwind CSS integration, complex features such as focus rings and animated backgrounds become easy to implement.",
  ],
  variantsHeading: "Popular Switch Variants",
  variants: [
    "Default . Standard toggle switch for application preferences",
    "With Label . Switch tightly coupled with a clickable text label for better hit targets",
    "Sized Variants . Small, Medium, and Large switches to match varying UI densities",
    "Disabled . Read-only state with muted styling and blocked interactions",
  ],
  whyUseHeading: `Why ${branding.brandName} Switch?`,
  whyUseDescription: [
    `The ${branding.brandName} Switch does a fantastic job of taking the headache out of building smooth, high-performance toggle animations. With its reliance on Base UI components, there is no need to fret over accessibility, as it can easily be used by screen readers, provides seamless functionality for toggling with the spacebar, and automatically manages all needed aria-checked states as if it were a native checkbox.`,
    "Because the code is within the scope of your application and not within an npm package, dependency issues are a thing of the past. Having full control of the structure means that adjusting the animation duration, modifying the size of the thumb, and connecting it to React Hook Form is a breeze.",
    "It will even work seamlessly with Tailwind CSS and CVA (class-variance-authority).",
  ],
  featuresHeading: `Features of ${branding.brandName} Switch`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring perfect screen reader announcements.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization of the track and thumb independently.",
    "Smooth Framer/CSS Animations: Optimized transform and bg-color transitions ensure 60fps sliding without jank.",
    "Accessible Focus Rings: Smart focus management using Tailwind's focus-visible utilities to ensure keyboard users have clear navigation trails.",
    "Type-Safe Composition: Powered by TypeScript and CVA to seamlessly distribute size and color variant properties safely.",
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Switch is designed for highly composable form architectures. It seamlessly acts as a drop-in replacement for any boolean data field.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Application Settings and Feature Flags",
    "Notification Preferences",
    "Dark Mode / Light Mode Toggles",
    "Pricing Plan Annual/Monthly Toggles",
  ],
  integrationNote:
    "It also adapts seamlessly to your global design system. Any updates you make to your Tailwind config whether that’s changing your primary brand colors, tweaking border radiuses, or adjusting focus ring offsets will instantly reflect in the Switch. It inherits your global styles automatically, keeping your UI completely cohesive without any extra effort on your part.",
  faqs: [],
}

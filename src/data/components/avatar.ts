// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const avatarInfo: CategoryInfo = {
  title: "Avatar",
  description: [
    "Create beautiful user profiles with the flexible Avatar component built with Tailwind CSS and Base UI. Check out the demos, copy the code and add seamless image fallbacks to your project in minutes.",
  ],
  whatIsHeading: `What is ${branding.brandName} Avatar?`,
  whatIsDescription: [
    `${branding.brandName} Avatar helps you display users, teams, brands, or any identity element with a clean and flexible profile component. Built with shadcn/ui and inspired by Base UI patterns, it smoothly handles image loading while automatically showing a text or icon fallback whenever an image is unavailable.`,
    `Instead of depending on a locked npm package, ${branding.brandName} gives you direct access to the component source code inside your own project. It makes easy to customize layouts, modify fallback behavior or extend the structure without fighting against restrictive abstractions.`,
    "Styled entirely with Tailwind CSS, the component makes it simple to create perfectly rounded avatars, square variants, grouped profiles, and precise border styling while keeping your design system lightweight and fully customizable.",
  ],
  variantsHeading: "Popular Avatar Variants",
  variants: [
    "Default Image . Standard circular profile picture",
    'Initials Fallback . Displays user initials (e.g., "JD") if the image URL is broken or missing',
    "Icon Fallback . Displays a generic user silhouette icon when no data is available",
    "Square Avatar . Rounded rectangle shape often used for companies or project logos",
    "Avatar Group . Multiple avatars overlapping each other to represent a team or thread",
  ],
  whyUseHeading: `Why ${branding.brandName} Avatar?`,
  whyUseDescription: [
    `${branding.brandName} Avatar abstracts away the frustrating UI glitches associated with broken image URLs. Instead of displaying a broken browser icon, it uses Base UI principles to detect loading errors and instantly swap to a beautiful fallback UI, ensuring your interface remains polished.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You have total control over the component architecture, making it trivial to change the fallback background colors, adjust the font size of initials, or integrate online presence indicators (like a green status dot).",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that whether you are using tiny xs avatars in a table or giant xl avatars on a profile page, the sizing and text scaling automatically maintain a cohesive, type-safe design system.",
  ],
  featuresHeading: `Features of ${branding.brandName} Avatar`,
  features: [
    "Anatomical Base UI Roots. Built on Base UI primitives for reliable image-loading event detection.",
    "Zero Dependency Lock-in. Direct source access allows for deep visual customization of fallback states.",
    "Automatic Fallback Sequencing. Smoothly transitions from <Image> to <Fallback> without layout shifts.",
    "Screen Reader Safe. Ensures alt text is properly managed for accessibility.",
    "Type-Safe Composition. Powered by TypeScript and CVA for predictable size styling permutations.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Avatar is designed for highly composable user interface architectures. It seamlessly supports integration into dense data layouts and navigation menus.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Top Navigation User Menus",
    "Comment and Activity Streams",
    "Data Table User Columns",
    "Team and Project Rosters",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your subtle background colors or typography scales in your Tailwind configuration, the Avatar fallbacks will automatically inherit and reflect those changes instantly.",
  faqs: [],
}

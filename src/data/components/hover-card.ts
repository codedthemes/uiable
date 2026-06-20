// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const hoverCardInfo: CategoryInfo = {
  title: "Hover Card",
  description: [
    "Browse the Tailwind CSS Hover Card examples to create detailed popovers that reveal extra information without cluttering the interface."
  ],
  whatIsHeading: `What is ${branding.brandName} Hover Card?`,
  whatIsDescription: [
    `${branding.brandName} Hover Card is a non-modal dialog that appears on user hover over a trigger element. It’s great for displaying “sneak peeks” or previews of complex information without the user having to navigate away or click a modal.`,
    "This component is not locked inside a npm package, unlike traditional UI libraries. You get the actual source code right inside your project so you can edit, customize, extend the DOM structure and hover delays however you want.",
    'It is built on Base UI and styled with Tailwind CSS. It handles complex "hover intent" logic, safe polygon bridging (so the card does not close when you move your mouse towards it), and collision detection smoothly.'
  ],
  variantsHeading: "Popular Hover Card Variants",
  variants: [
    "Profile Preview: Triggered by a username or avatar, showing a mini bio and follow button",
    "Link Preview: Triggered by a text link, showing an image and excerpt of the destination page",
    "Informational: Displaying rich formatting (lists, bold text) that wouldn't fit in a simple Tooltip",
    "With Delayed Open: Card that waits 500ms before appearing to prevent accidental triggering"
  ],
  whyUseHeading: `Why ${branding.brandName} Hover Card?`,
  whyUseDescription: [
    `It can be tricky to hover to show a large popover because if you move the cursor from the trigger to the card, the popover often closes immediately. ${branding.brandName} Hover Card utilizes Base UI to generate a safe interaction zone between the cursor and the card, facilitating easy transition into the popover and interaction with links or actions within.`,
    "No dependency lock-in, because the code lives directly inside the project. Easy to add custom data fetching, adjust animations or change styles like border radius and spacing with full control over the component structure.",
    "This component is created with Tailwind CSS and it slots nicely into an existing design system. Hover states, spacing, and visual styles are consistent with related elements such as popovers, menus, and other interactive components."
  ],
  featuresHeading: `Features of ${branding.brandName} Hover Card`,
  features: [
    "Hover Intent Timers: Smart logic prevents cards from flashing open and closed if the user's mouse accidentally brushes past.",
    "Safe Polygon Bridging: Allows users to move their cursor into the Hover Card without it closing.",
    "Collision Detection: Ensures cards never clip outside the viewport by automatically flipping their position.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Keyboard Accessible: Users can trigger the hover card using the Tab key and Enter."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Hover Card is a must have when building dense and information rich user interfaces`,
    "It can be easily used in advanced layouts such as the following:"
  ],
  integrationList: [
    "User Profile Mentions (e.g., @username in feeds)",
    "Wikipedia-style Article Link Previews",
    "E-commerce Product Quick-views on Grid Hover",
    "Git Commit Author Details"
  ],
  integrationNote:
    "It also fully follows your global design system. If you change your surface colors, backdrop shadows or typography in your Tailwind config the Hover Card will pick those changes up automatically and reflect them instantly.",
  faqs: []
};

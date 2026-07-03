// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const listGroupInfo: CategoryInfo = {
  title: "List Group",
  description: [
    "Browse the Tailwind CSS List Group UI to manage dense information with better structure and faster implementation"
  ],
  whatIsHeading: `What is ${branding.brandName} List Group?`,
  whatIsDescription: [
    `${branding.brandName} List Group is a structural component used to display a collection of items in a vertical list layout. It works as a flexible alternative to HTML tables when presenting simple datasets, menus, or grouped content blocks.`,
    "Because the source code lives directly inside the project, it is not tied to an external npm package. This thing makes it easy to adjust item layouts, customize hover states or extend each row with custom content as needed.",
    "It is built with Tailwind CSS. It handles layout details like border merging, rounded corners, and vertical spacing without requiring custom CSS selectors."
  ],
  variantsHeading: "Popular List Group Variants",
  variants: [
    "Default (Bordered): Standard vertical list with outer borders and rounded corners",
    "Flush (Edge to edge): Borderless list designed for cards, sidebars, or embedded panels",
    "Actionable: Interactive rows that behave like links or buttons with hover states",
    "With Badges and Icons: Flexible rows with leading icons and trailing status badges",
    "Numbered: Ordered list layout using semantic <ol> structure for auto numbering"
  ],
  whyUseHeading: `Why ${branding.brandName} List Group?`,
  whyUseDescription: [
    `Stacking rows of data with borders often results in "double borders" (where the bottom border of row 1 touches the top border of row 2). ${branding.brandName} List Group utilizes Tailwind\`s powerful divide-y utilities to ensure borders are mathematically perfect.`,
    "It also handles the complex first-of-type and last-of-type CSS required to keep rounded corners looking clean.",
    "Since the implementation stays in codebase, the component remains fully customizable. Border styles, item spacing, padding, and even complex row layouts can be changed without working around package limitations.",
    "Because it is styled with Tailwind CSS, the list automatically stays consistent with the rest of the design system, making large content directories and structured data views easier to maintain."
  ],
  featuresHeading: `Features of ${branding.brandName} List Group`,
  features: [
    "Perfect Border Collapsing: Eliminates ugly double-borders using Tailwind divide utilities.",
    "Actionable Hover States: Easily configurable to accept Link or button tags with premium hover backgrounds.",
    "Semantic HTML: Utilizes <ul> or <ol> and <li> structure for perfect screen reader compatibility.",
    "Zero Dependency Lock-in: Direct source access allows for deep structural customization.",
    "Highly Composable: Accepts any React component inside the list items (Avatars, Typography, Badges)."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} List Group is a highly versatile pattern for presenting simplified collections of data.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Settings Navigation Menus (e.g., Account, Privacy, Security)",
    "Recent Activity or Notification Feeds",
    "Simple Data Directories (User Lists, File Lists)",
    "Multi-select Form Checkbox Groups"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your subtle border colors, hover background shades, or border radii in your Tailwind configuration, the List Group will automatically inherit and reflect those changes instantly.",
  faqs: []
};

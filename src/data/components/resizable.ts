// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const resizableInfo: CategoryInfo = {
  title: "Resizable",
  description: [
    "Create adjustable layouts with a Resizable panel component built on Tailwind CSS and react resizable panels, ensuring seamless resizing so you can browse and copy the code to get started."
  ],
  whatIsHeading: `What is ${branding.brandName} Resizable?`,
  whatIsDescription: [
    `${branding.brandName} Resizable makes it easy to create flexible layouts where users can drag between panels and adjust space exactly how they want.`,
    "Built with react resizable panels, it handles the resizing logic under the hood so you can focus on building dashboards, editors, or split screen interfaces without extra complexity.",
    "What makes it practical is that you are not tied to a prebuilt package structure. The source is yours to edit, so changing the resize handle, panel sizes, or responsive behavior is as easy as updating your own Tailwind classes."
  ],
  variantsHeading: "Popular Resizable Variants",
  variants: [
    "Horizontal Split: Two panels placed side-by-side (Left/Right) with a vertical drag handle",
    "Vertical Split: Two panels placed on top of each other (Top/Bottom) with a horizontal drag handle",
    "Nested Panels: Complex layouts where a horizontal panel contains further vertically resizable panels inside it",
    "Collapsible Panels: Panels that 'snap' shut entirely when dragged past a certain minimum threshold",
    "With Custom Handle: Drag handle featuring custom icons (like double lines or dots) to indicate interactivity"
  ],
  whyUseHeading: `Why ${branding.brandName} Resizable?`,
  whyUseDescription: [
    "Building custom drag physics for panel resizing is incredibly complex. You have to calculate mouse coordinates, convert them to percentages, update React state 60 times a second, and ensure the panels don't break the CSS flexbox.",
    `${branding.brandName} utilizes react-resizable-panels to provide mathematically perfect, buttery-smooth interactions.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in. You also get the actual source code instead of a locked dependency, so the component can be shaped around your own requirements like making it easy to change the drag handle thickness, set strict minSize constraints, or save the panel sizes to LocalStorage so they persist on reload.",
    "With Tailwind CSS styling, it adapts easily to any design language while keeping hover states, spacing, and dark mode consistent."
  ],
  featuresHeading: `Features of ${branding.brandName} Resizable`,
  features: [
    "Fluid Drag Physics: Highly optimized for 60fps dragging without UI jank or lag.",
    "Keyboard Accessible: Users can focus the resize handle and use Arrow keys to resize the panels precisely.",
    "Snap-to-Collapse Support: Natively supports configuring panels to completely collapse if dragged too small.",
    "Zero Dependency Lock-in: Direct source access allows for deep customization of the separator handle.",
    "Flexible State Management: Easily integrates with cookies or LocalStorage to remember user preferences."
  ],
  integrationHeading: "Integration and Compatibility",
  integrationDescription: [
    `${branding.brandName} Resizable is essential for building professional, IDE-like web applications where users need to customize their workspace.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Code Editor Layouts (replicating VS Code's sidebar/terminal/editor split)",
    "Email Clients (List view on the left, Reader view on the right)",
    "Advanced Dashboards and Analytics Tools",
    "Split-screen Documentation Readers"
  ],
  integrationNote:
    "It fully respects your Tailwind CSS configuration, so changing global colors, border styles, or hover states will automatically update the component appearance.",
  faqs: []
};

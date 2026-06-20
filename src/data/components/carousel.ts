// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const carouselInfo: CategoryInfo = {
  title: "Carousel",
  description: [
    "Browse ready-to-use carousel examples, copy the code, and create smooth interactive sliders with a customizable component built on Tailwind CSS and Embla Carousel."
  ],
  whatIsHeading: `What is ${branding.brandName} Carousel?`,
  whatIsDescription: [
    `${branding.brandName} Carousel is a powerful sliding gallery component to show a series of images, cards, data points horizontally (or vertically). Built using Embla Carousel with Tailwind CSS styling, it offers native-feeling swipe physics and powerful API control.`,
    "Unlike traditional UI libraries that are locked up in a npm package, this component is not. You get the real source code right in your project, so you can edit, customize and extend the DOM structure, navigation buttons and indicator dots just the way you need them.",
    "It’s built with Tailwind CSS, making slide size, gap spacing and responsive visibility easy to manage without wrestling stubborn third-party CSS."
  ],
  variantsHeading: "Popular Carousel Variants",
  variants: [
    "Default Gallery . Standard image slider showing one item at a time",
    "Multi-Item Slider . Carousel displaying 3 or 4 items per view, ideal for product showcases",
    "With Indicators . Carousel featuring clickable navigation dots at the bottom",
    "Auto-playing . Carousel that automatically scrolls through items on a timer",
    "Vertical Scroll . Carousel oriented vertically, perfect for sidebars or tight spaces"
  ],
  whyUseHeading: `Why ${branding.brandName} Carousel?`,
  whyUseDescription: [
    `Things like touch gestures, scrolling behavior, and accessibility support make it tricky to build a smooth and responsive carousel from scratch. ${branding.brandName} Carousel makes it easier by using Embla Carousel for the core functionality, and keeping all styling completely customizable with Tailwind CSS.`,
    "Since the entire component code lives inside your project, you get complete control over the layout and behavior. You can easily reposition navigation buttons, change slide alignment, customize spacing, or connect it with features like image lightboxes without fighting against fixed library limitations.",
    "Built with Tailwind CSS, the component keeps slide widths, spacing, and responsive layouts consistent across your design system while avoiding complicated custom CSS or unnecessary styling overrides."
  ],
  featuresHeading: `Features of ${branding.brandName} Carousel`,
  features: [
    "Physics-based Swiping. Provides fluid, native-feeling touch interactions on mobile devices.",
    "Zero Visual Dependency Lock-in. Direct source access allows for deep customization of the navigation controls.",
    "Keyboard & Screen Reader Optimized. Arrow key pagination and ARIA roles for accessibility are fully supported.",
    "Highly Responsive. Easily configure how many slides are visible at sm, md, or lg breakpoints using standard Tailwind classes.",
    "Plugin Ecosystem. Seamlessly supports Embla plugins for Autoplay, ClassNames, and more."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Carousel is built to support highly composable media and data architectures. It’s the perfect wrapper for your ${branding.brandName} Cards or custom image components.`,
    "It is easily integrated into advanced layouts such as:"
  ],
  integrationList: [
    "E-commerce Product Image Galleries",
    "Testimonial and Review Sliders",
    "Featured Article / Blog Highlights",
    "Onboarding Tour Screens"
  ],
  integrationNote:
    "It also fully respects your global design system. If you change your primary accent colors (for indicator dots) or spacing variables in your tailwind config, the Carousel will automatically take on those changes and reflect it instantly.",
  faqs: []
};

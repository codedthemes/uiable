// projects imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const datePickerInfo: CategoryInfo = {
  title: "Date Picker",
  description: [
    "Build a customizable Date Picker with Tailwind CSS, shadcn ui, and Base UI.",
    "Browse the code and add seamless date selection faster.",
  ],
  whatIsHeading: `What is ${branding.brandName} Date Picker?`,
  whatIsDescription: [
    `${branding.brandName} Date Picker is a flexible date selection component that helps handle single dates, date ranges, and time inputs with ease. Built with shadcn ui and Base UI, it manages calendar interactions, popovers, and date handling smoothly.`,
    "Since it provides the full source code, customization becomes much easier. The component can be adjusted to match different layouts, workflows, or custom calendar behavior without depending on fixed package limitations.",
    "Styled with Tailwind CSS, it keeps the interface clean while handling states like disabled dates, active selections, and custom highlights.",
  ],
  variantsHeading: "Popular Date Picker Variants",
  variants: [
    "Default: Standard single-date selector for simple forms",
    "Date Range: Selection of a start and end date for booking or reporting",
    "With Time: Date picker combined with a time selector for precise scheduling",
    "Inline Calendar: Calendar constantly visible on the page without a dropdown",
    'Presets: Picker with quick-select options like "Today", "Tomorrow", or "Next Week"',
    "Disabled: Standard single-date selector in a disabled state",
    "Neutral Time Picker: Pure time selector with hour, minute selections",
  ],
  whyUseHeading: `Why ${branding.brandName} Date Picker?`,
  whyUseDescription: [
    `${branding.brandName} Date Picker shields you from all the complex engineering of creating your own custom calendars. Being in line with Base UI's design guidelines, this makes it completely accessible, taking care of difficult keyboard navigation on grids as well as ARIA attributes.`,
    "With no code running outside of your application, you are totally shielded from any form of dependency lock-in. You are in complete control of how the component is implemented, making it super easy to alter the date format in any way you'd want or even limit what dates can be selected using date-fns or Day.js libraries.",
    "It integrates seamlessly with Tailwind CSS and CVA (class-variance-authority), ensuring type-safe and coherent design for calendar cells and hover states, along with input borders.",
  ],
  featuresHeading: `Features of ${branding.brandName} Date Picker`,
  features: [
    "Anatomical Base UI Roots: Built on Base UI primitives for industry-standard accessibility, ensuring calendar grids are easily navigated by screen readers.",
    "Zero Dependency Lock-in: Direct source access allows for deep visual customization without fighting library-specific CSS selectors.",
    "Smart Positioning: Integrates overlay positioning to ensure the calendar popover never clips outside the viewport.",
    "Accessible Grid Navigation: Full keyboard support for arrow keys to navigate days, weeks, and months seamlessly.",
    "Type-Safe Composition: Powered by TypeScript and CVA to distribute styling safely across complex nested calendar components.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Date Picker is designed for highly composable form architectures. It seamlessly supports integration into complex form layouts.`,
    "You can effortlessly integrate it into advanced layouts such as:",
  ],
  integrationList: [
    "Flight and Hotel Booking Forms",
    "Financial Reporting Filters",
    "Event Scheduling Interfaces",
    "User Registration Birthdate Fields",
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary colors or border radius in your Tailwind configuration, the Date Picker will automatically inherit and reflect those changes instantly.",
  faqs: [],
}

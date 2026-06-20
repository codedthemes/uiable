// projects imports
import branding from "@/branding.json";

// types
import { CategoryInfo } from "./types";

export const calendarInfo: CategoryInfo = {
  title: "Calendar",
  description: [
    "Create clean and interactive calendars with a customizable component powered by Tailwind CSS, shadcn/ui, and React DayPicker. Browse the demos, copy the code, and build seamless date-picking experiences in minutes."
  ],
  whatIsHeading: `What is ${branding.brandName} Calendar?`,
  whatIsDescription: [
    `${branding.brandName} Calendar is a robust date grid component designed for rendering months and facilitating complex date selections. Using React DayPicker and styled with Tailwind CSS, it provides the complex date math and accessibility required for enterprise applications.`,
    "Instead of depending on a fixed npm package, this calendar component gives you full access to the source code directly inside your project. It makes it easy to customize layouts, adjust weekday labels, modify date cells, and fine-tune interactions to match your design needs.",
    "It is styled using Tailwind CSS, taking the pain out of styling complex HTML tables, active date states, and 'outside month' cell visibilities."
  ],
  variantsHeading: "Popular Calendar Variants",
  variants: [
    "Single Month . Standard view displaying one month for single date selection",
    "Multiple Months . Dual-month (or more) view ideal for large date-range picking",
    "Range Selection . Visual logic connecting a start date and end date with a highlighted track",
    "With Fixed Weeks . Calendar grid that always renders 6 rows to prevent layout shifting",
    "Localized . Calendar dynamically translated into different languages/start-of-week rules"
  ],
  whyUseHeading: `Why ${branding.brandName} Calendar?`,
  whyUseDescription: [
    `Building an accessible calendar grid from scratch requires massive amounts of date math, leap-year calculations, and keyboard trapping logic. ${branding.brandName} Calendar leverages React DayPicker to handle the logic, while keeping the UI styling strictly inside your project via Tailwind CSS.`,
    "Since the code lives completely inside your project, there is absolutely zero dependency lock-in regarding the visuals. You have total control over the component architecture, making it trivial to inject custom event dots under dates, change the next/prev icons, or alter the hover states.",
    "It works smoothly with Tailwind CSS and CVA (class-variance-authority). This guarantees that your calendar cells, today indicators, and selected ranges automatically maintain a cohesive, type-safe design that matches the rest of your application perfectly."
  ],
  featuresHeading: `Features of ${branding.brandName} Calendar`,
  features: [
    "React DayPicker Roots. Leverages industry-standard date logic to ensure flawless math and accessibility.",
    "Zero Visual Dependency Lock-in. Total control over the DOM structure of every row, cell, and header.",
    "Keyboard Grid Navigation. Full support for arrow keys to traverse days and weeks seamlessly.",
    "Advanced State Modifiers. Easily apply Tailwind classes to specific dates (e.g., booked days, holidays).",
    "Internationalization Ready. Simple integration with date-fns locales for global applications."
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Calendar is the engine behind highly composable scheduling architectures. It is most commonly wrapped inside the ${branding.brandName} Date Picker popover but can also be rendered fully inline.`,
    "You can effortlessly integrate it into advanced layouts such as:"
  ],
  integrationList: [
    "Inline Event Dashboards",
    "Booking and Reservation Sidebars",
    "Habit Tracking Grids",
    "Financial Reporting Date Ranges"
  ],
  integrationNote:
    "It also fully respects your global design system. If you update your primary accent colors, text sizing, or border radius in your Tailwind configuration, the Calendar will automatically inherit and reflect those changes instantly.",
  faqs: []
};

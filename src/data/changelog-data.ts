interface ChangelogItem {
  text: string
  previewUrl?: string
}

interface ChangelogCategory {
  title: string
  items: (string | ChangelogItem)[]
}

interface ChangelogRelease {
  version: string
  date: string
  title?: string
  anchor: string
  categories: ChangelogCategory[]
}

//  ------------------------------ | DATA - CHANGELOG | ------------------------------  //

export const CHANGELOG_DATA: ChangelogRelease[] = [
  {
    version: "1.8.0",
    date: "August 25, 2026",
    anchor: "v1-8-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "FAQ: FAQ 4",
            previewUrl: "/preview/faq/faq-4",
          },
          {
            text: "Pricing: Pricing 9",
            previewUrl: "/preview/pricing/pricing-9",
          },
          {
            text: "Process: Process 4",
            previewUrl: "/preview/process/process-4",
          },
          {
            text: "Team: Team 3",
            previewUrl: "/preview/team/team-3",
          },
          {
            text: "Testimonial: Testimonial 9",
            previewUrl: "/preview/testimonial/testimonial-9",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert: Outlined Danger, Outlined Dark, Outlined Info, Outlined Primary, Outlined Secondary, Outlined Success, Outlined Warning",
            previewUrl: "/components/alert",
          },
          {
            text: "Alert Dialog: Warning",
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio: Cinematic",
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Breadcrumb: Background",
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Dialog: Destructive",
            previewUrl: "/components/dialog",
          },
          {
            text: "Menubar: Editor",
            previewUrl: "/components/menubar",
          },
          {
            text: "Separator: With Text",
            previewUrl: "/components/separator",
          },
          {
            text: "Sonner: Close Button, Icon",
            previewUrl: "/components/sonner",
          },
          {
            text: "Spinner: Dots Pulse",
            previewUrl: "/components/spinner",
          },
        ],
      },
    ],
  },
  {
    version: "1.7.0",
    date: "August 18, 2026",
    anchor: "v1-7-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Contact: Contact 11",
            previewUrl: "/preview/contact/contact-11",
          },
          {
            text: "Content: Content 5",
            previewUrl: "/preview/content/content-5",
          },
          {
            text: "Footer: Footer 11",
            previewUrl: "/preview/footer/footer-11",
          },
          {
            text: "Gallery: Gallery 10",
            previewUrl: "/preview/gallery/gallery-10",
          },
          {
            text: "Hero: Hero 6",
            previewUrl: "/preview/hero/hero-6",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert: Border Left Danger, Border Left Dark",
            previewUrl: "/components/alert",
          },
          {
            text: "Dialog: Newsletter",
            previewUrl: "/components/dialog",
          },
          {
            text: "Progress: Circular, Gradient, With Value",
            previewUrl: "/components/progress",
          },
          {
            text: "Separator: Stats",
            previewUrl: "/components/separator",
          },
          {
            text: "Sheet: Menu",
            previewUrl: "/components/sheet",
          },
          {
            text: "Skeleton: List",
            previewUrl: "/components/skeleton",
          },
          {
            text: "Sonner: Action",
            previewUrl: "/components/sonner",
          },
          {
            text: "Table: Users",
            previewUrl: "/components/table",
          },
          {
            text: "Tooltip: Status",
            previewUrl: "/components/tooltip",
          },
          {
            text: "Typography: Italic, Link",
            previewUrl: "/components/typography",
          },
        ],
      },
    ],
  },
  {
    version: "1.6.0",
    date: "August 11, 2026",
    anchor: "v1-6-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Gallery: Gallery 3",
            previewUrl: "/preview/gallery/gallery-3",
          },
          {
            text: "Hero: Hero 3",
            previewUrl: "/preview/hero/hero-3",
          },
          {
            text: "Portfolio: Portfolio 3",
            previewUrl: "/preview/portfolio/portfolio-3",
          },
          {
            text: "Pricing: Pricing 3",
            previewUrl: "/preview/pricing/pricing-3",
          },
          {
            text: "Process: Process 3",
            previewUrl: "/preview/process/process-3",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert Dialog: Lock",
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio: Standard",
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Breadcrumb: Stepper",
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Label: Card",
            previewUrl: "/components/label",
          },
          {
            text: "List Group: Nested",
            previewUrl: "/components/list-group",
          },
          {
            text: "Navigation Menu: Mega",
            previewUrl: "/components/navigation-menu",
          },
          {
            text: "Progress: Circular With Label, With Steps",
            previewUrl: "/components/progress",
          },
          {
            text: "Scroll Area: Horizontal",
            previewUrl: "/components/scroll-area",
          },
          {
            text: "Skeleton: Chart, Profile",
            previewUrl: "/components/skeleton",
          },
          {
            text: "Sonner: Custom",
            previewUrl: "/components/sonner",
          },
          {
            text: "Spinner: Bars Scale",
            previewUrl: "/components/spinner",
          },
          {
            text: "Tooltip: Custom Delay",
            previewUrl: "/components/tooltip",
          },
          {
            text: "Circular Progress",
            previewUrl: "/components/progress",
          },
        ],
      },
    ],
  },
  {
    version: "1.5.0",
    date: "August 4, 2026",
    anchor: "v1-5-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Feature: Feature 1",
            previewUrl: "/preview/feature/feature-1",
          },
          {
            text: "Footer: Footer 7",
            previewUrl: "/preview/footer/footer-7",
          },
          {
            text: "Gallery: Gallery 2",
            previewUrl: "/preview/gallery/gallery-2",
          },
          {
            text: "Portfolio: Portfolio 5",
            previewUrl: "/preview/portfolio/portfolio-5",
          },
          {
            text: "Process: Process 6",
            previewUrl: "/preview/process/process-6",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Kbd: Arrow Keys, Function Keys, Shortcut Keys",
            previewUrl: "/components/kbd",
          },
          {
            text: "Label: Card, Disabled, Required",
            previewUrl: "/components/label",
          },
          {
            text: "List Group: Avatar, Badge, Nested",
            previewUrl: "/components/list-group",
          },
          {
            text: "Scroll Area: Chat Scroller, Horizontal, Image Scroll, Terminal Logs",
            previewUrl: "/components/scroll-area",
          },
        ],
      },
    ],
  },
  {
    version: "1.4.0",
    date: "July 28, 2026",
    anchor: "v1-4-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Pricing: Pricing 2",
            previewUrl: "/preview/pricing/pricing-2",
          },
          {
            text: "Process: Process 1",
            previewUrl: "/preview/process/process-1",
          },
          {
            text: "Statistics: Statistics 1",
            previewUrl: "/preview/statistics/statistics-1",
          },
          { text: "Team: Team 1", previewUrl: "/preview/team/team-1" },
          {
            text: "Testimonial: Testimonial 1",
            previewUrl: "/preview/testimonial/testimonial-1",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Chart: Pie, Radial, Area, Line",
            previewUrl: "/components/chart",
          },
          {
            text: "Data Table: Expandable, Pagination, Editable",
            previewUrl: "/components/data-table",
          },
          {
            text: "Empty: No Search Result, With Large Icon",
            previewUrl: "/components/empty",
          },
          {
            text: "Field: One Time Password Form",
            previewUrl: "/components/field",
          },
          {
            text: "Hover Card: Info With Icon Badge, Image Preview, Simple Info Tooltip, Link Preview",
            previewUrl: "/components/hover-card",
          },
        ],
      },
    ],
  },
  {
    version: "1.3.0",
    date: "July 21, 2026",
    anchor: "v1-3-0",
    categories: [
      {
        title: "New Components variants",
        items: [
          {
            text: "Select: With Icons, With Users, With Status, Clearable",
            previewUrl: "/components/select",
          },
          {
            text: "Slider: Color Options",
            previewUrl: "/components/slider",
          },
          {
            text: "Switch: Toggle Theme, Color Options, Outline, Square",
            previewUrl: "/components/switch",
          },
          {
            text: "Textarea: Helper Text, Character Count, Feedback, Readonly",
            previewUrl: "/components/textarea",
          },
          {
            text: "Toggle: Icon, Animated",
            previewUrl: "/components/toggle",
          },
          {
            text: "Toggle Group: Filled Icon",
            previewUrl: "/components/toggle-group",
          },
          {
            text: "Calendar: Right Navigation",
            previewUrl: "/components/calendar",
          },
          {
            text: "Avatar: Fallback, Placeholder Icon, Counter Indicator, Border Radius",
            previewUrl: "/components/avatar",
          },
          {
            text: "Badge: Status, Avatar, Sizes, Gradient",
            previewUrl: "/components/badge",
          },
          {
            text: "Card: Product, Tabs, Animated Tilt, Animated Flip",
            previewUrl: "/components/card",
          },
        ],
      },
      {
        title: "Introduce New UI Blocks",
        items: [
          {
            text: "Hero: Hero 2",
            previewUrl: "/preview/hero/hero-2",
          },
          {
            text: "Feature: Feature 2",
            previewUrl: "/preview/feature/feature-2",
          },
          {
            text: "Footer: Footer 3",
            previewUrl: "/preview/footer/footer-3",
          },
          {
            text: "Gallery: Gallery 4",
            previewUrl: "/preview/gallery/gallery-4",
          },
          {
            text: "Portfolio: Portfolio 4",
            previewUrl: "/preview/portfolio/portfolio-4",
          },
        ],
      },
    ],
  },
  {
    version: "1.2.0",
    date: "July 14, 2026",
    anchor: "v1-2-0",
    categories: [
      {
        title: "New Components variants",
        items: [
          {
            text: "Command: 4 new variants",
            previewUrl: "/components/command",
          },
          {
            text: "Date Picker: 2 new variants (Disabled, Time)",
            previewUrl: "/components/date-picker",
          },
          {
            text: "Input: 3 new variants (Range, Select, Validation)",
            previewUrl: "/components/input",
          },
          {
            text: "Input Group: 1 new variant (Chat Message)",
            previewUrl: "/components/input-group",
          },
          {
            text: "Input OTP: 3 new variants (Animated, Filled, Outlined)",
            previewUrl: "/components/input-otp",
          },
          {
            text: "Item: 4 new variants (Background, Checkbox, Separator, Switch)",
            previewUrl: "/components/item",
          },
          {
            text: "Message Scroller: 3 core variants (Anchoring Turns, Animating, Context Visible)",
            previewUrl: "/components/message-scroller",
          },
          {
            text: "Radio Group: 4 new variants (Box, Colors, List, Sizes)",
            previewUrl: "/components/radio-group",
          },
        ],
      },
      {
        title: "Introduce New UI Blocks",
        items: [
          { text: "Call To Action", previewUrl: "/blocks/call-to-action" },
          { text: "Contact", previewUrl: "/blocks/contact" },
          { text: "Content", previewUrl: "/blocks/content" },
          { text: "FAQ", previewUrl: "/blocks/faq" },
        ],
      },
    ],
  },
  {
    version: "1.1.0",
    date: "July 6, 2026",
    anchor: "v1-1-0",
    categories: [
      {
        title: "New Components",
        items: [
          { text: "Attachment", previewUrl: "/components/attachment" },
          { text: "Bubble", previewUrl: "/components/bubble" },
          { text: "Marker", previewUrl: "/components/marker" },
          { text: "Message", previewUrl: "/components/message" },
          {
            text: "MessageScroller",
            previewUrl: "/components/message-scroller",
          },
        ],
      },
      {
        title: "Enhanced",
        items: [
          "Added new button, button group, checkbox, and combobox variants.",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "July 4, 2026",
    anchor: "v1-0-0",
    categories: [
      {
        title: "Initial Release",
        items: ["Initial Version laying Foundation for library"],
      },
    ],
  },
]

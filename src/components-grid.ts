export interface CategoryItem {
  title: string
  slug: string
  badge?: {
    label: string
  }
  breakpoints?: {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
  }
}

export interface NavSection {
  title: string
  items: CategoryItem[]
}

export interface DocItem {
  title: string
  slug: string
}

export const NAV_DOCS: DocItem[] = [
  { title: "Introduction", slug: "introduction" },
  { title: "Installation", slug: "installation" },
  { title: "Shadcn CLI", slug: "cli" },
  { title: "Components", slug: "components" },
  { title: "Blocks", slug: "blocks" },
  { title: "MCP", slug: "mcp" },
  { title: "Changelog", slug: "changelog" },
]

export const NAV_COMPONENTS: NavSection[] = [
  {
    title: "Inputs",
    items: [
      {
        title: "Button",
        slug: "button",
        badge: { label: "New" },
        breakpoints: { xl: 3, lg: 2, xs: 1 },
      },
      {
        title: "Button Group",
        slug: "button-group",
        breakpoints: { xxl: 3, lg: 2, sm: 1, xs: 1 },
      },
      {
        title: "Checkbox",
        slug: "checkbox",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Combobox",
        slug: "combobox",
        breakpoints: { xl: 3, lg: 2, xs: 1 },
      },
      {
        title: "Command",
        slug: "command",
        breakpoints: { xl: 3, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Date Picker",
        slug: "date-picker",
        breakpoints: { xl: 3, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Input",
        slug: "input",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Input Group",
        slug: "input-group",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      { title: "Input OTP", slug: "input-otp", breakpoints: { md: 2, xs: 1 } },
      { title: "Item", slug: "item", breakpoints: { md: 2, xs: 1 } },
      {
        title: "Native Select",
        slug: "native-select",
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Questionnaire",
        slug: "questionnaire",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      { title: "Radio", slug: "radio", breakpoints: { xs: 1 } },
      {
        title: "Radio Group",
        slug: "radio-group",
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Select",
        slug: "select",
        badge: { label: "New" },
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Slider",
        slug: "slider",
        badge: { label: "New" },
        breakpoints: { xl: 3, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Switch",
        slug: "switch",
        badge: { label: "New" },
        breakpoints: { md: 2, sm: 2, xs: 1 },
      },
      {
        title: "Textarea",
        slug: "textarea",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      { title: "Toggle", slug: "toggle", breakpoints: { sm: 2, xs: 1 } },
      {
        title: "Toggle Group",
        slug: "toggle-group",
        badge: { label: "New" },
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Calendar",
        slug: "calendar",
        badge: { label: "New" },
        breakpoints: { lg: 2, sm: 1, xs: 1 },
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      {
        title: "Coupon",
        slug: "coupon",
        badge: { label: "New" },
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Attachment",
        slug: "attachment",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Avatar",
        slug: "avatar",
        badge: { label: "New" },
        breakpoints: { lg: 3, sm: 2, xs: 1 },
      },
      {
        title: "Badge",
        slug: "badge",
        badge: { label: "New" },
        breakpoints: { lg: 3, sm: 2, xs: 1 },
      },
      {
        title: "Bubble",
        slug: "bubble",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Card",
        slug: "card",
        badge: { label: "New" },
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Carousel",
        slug: "carousel",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Chart",
        slug: "chart",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Data Table",
        slug: "data-table",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Empty",
        slug: "empty",
        breakpoints: { xl: 3, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Field",
        slug: "field",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Hover Card",
        slug: "hover-card",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      { title: "Kbd", slug: "kbd", breakpoints: { md: 2, sm: 2, xs: 1 } },
      { title: "Label", slug: "label", breakpoints: { xs: 1 } },
      {
        title: "Marker",
        slug: "marker",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Message",
        slug: "message",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Message Scroller",
        slug: "message-scroller",
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "List Group",
        slug: "list-group",
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Scroll Area",
        slug: "scroll-area",
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Separator",
        slug: "separator",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Table",
        slug: "table",
        breakpoints: { xl: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Tooltip",
        slug: "tooltip",
        breakpoints: { lg: 3, sm: 2, xs: 1 },
      },
      {
        title: "Typography",
        slug: "typography",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Aspect Ratio",
        slug: "aspect-ratio",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Skeleton",
        slug: "skeleton",
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Timeline",
        slug: "timeline",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Tree View",
        slug: "tree-view",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 1, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
  {
    title: "Feedback",
    items: [
      {
        title: "Alert",
        slug: "alert",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Alert Dialog",
        slug: "alert-dialog",
        breakpoints: { xl: 3, lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Dialog",
        slug: "dialog",
        breakpoints: { xl: 3, lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Drawer",
        slug: "drawer",
        breakpoints: { xl: 3, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Progress",
        slug: "progress",
        breakpoints: { xl: 3, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      { title: "Sheet", slug: "sheet", breakpoints: { md: 2, xs: 1 } },
      { title: "Sonner", slug: "sonner", breakpoints: { md: 2, sm: 1, xs: 1 } },
      {
        title: "Spinner",
        slug: "spinner",
        breakpoints: { lg: 3, sm: 2, xs: 1 },
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        title: "Breadcrumb",
        slug: "breadcrumb",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Dropdown Menu",
        slug: "dropdown-menu",
        badge: { label: "New" },
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Menubar",
        slug: "menubar",
        badge: { label: "New" },
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Navigation Menu",
        slug: "navigation-menu",
        badge: { label: "New" },
        breakpoints: { xs: 1 },
      },
      {
        title: "Pagination",
        slug: "pagination",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Tabs",
        slug: "tabs",
        badge: { label: "New" },
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Sidebar",
        slug: "sidebar",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
  {
    title: "Surfaces",
    items: [
      {
        title: "Accordion",
        slug: "accordion",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Collapsible",
        slug: "collapsible",
        badge: { label: "New" },
        breakpoints: { lg: 2, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
  {
    title: "Utils",
    items: [
      {
        title: "Context Menu",
        slug: "context-menu",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Popover",
        slug: "popover",
        badge: { label: "New" },
        breakpoints: { lg: 3, md: 2, sm: 1 },
      },
      {
        title: "Resizable",
        slug: "resizable",
        badge: { label: "New" },
        breakpoints: { xl: 2, lg: 1, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
]

export const NAV_BLOCKS: NavSection[] = [
  {
    title: "UI",
    items: [
      {
        title: "Bento",
        slug: "bento",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Call To Action",
        slug: "cta",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Contact",
        slug: "contact",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Content",
        slug: "content",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "E-commerce",
        slug: "e-commerce",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "FAQ",
        slug: "faq",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Feature",
        slug: "feature",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Footer",
        slug: "footer",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Gallery",
        slug: "gallery",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Hero",
        slug: "hero",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Small Hero",
        slug: "small-hero",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Portfolio",
        slug: "portfolio",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Pricing",
        slug: "pricing",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Process",
        slug: "process",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Statistics",
        slug: "statistics",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Team",
        slug: "team",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Testimonial",
        slug: "testimonial",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Login",
        slug: "login",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Sign Up",
        slug: "sign-up",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Forgot Password",
        slug: "forgot-password",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Reset Password",
        slug: "reset-password",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Check Mail",
        slug: "check-mail",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Code Verification",
        slug: "code-verification",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Error 404",
        slug: "error-404",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Error 500",
        slug: "error-500",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Coming Soon",
        slug: "coming-soon",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Under Construction",
        slug: "under-construction",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Join Waitlist",
        slug: "join-waitlist",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Widgets",
        slug: "widgets",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Charts",
        slug: "charts",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Navbar",
        slug: "navbar",
        badge: { label: "New" },
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
]

export const categories = [...NAV_COMPONENTS, ...NAV_BLOCKS].flatMap(
  (section) => section.items
)

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

export const NAV_CATEGORIES: NavSection[] = [
  {
    title: "Inputs",
    items: [
      { title: "Button", slug: "button", breakpoints: { xl: 3, lg: 2, xs: 1 } },
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
        breakpoints: { xl: 3, lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Date Picker",
        slug: "date-picker",
        breakpoints: { xl: 3, lg: 3, md: 2, sm: 1, xs: 1 },
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
      { title: "Radio", slug: "radio", breakpoints: { xs: 1 } },
      {
        title: "Radio Group",
        slug: "radio-group",
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Select",
        slug: "select",
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Slider",
        slug: "slider",
        breakpoints: { xl: 3, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      { title: "Switch", slug: "switch", breakpoints: { md: 2, sm: 2, xs: 1 } },
      {
        title: "Textarea",
        slug: "textarea",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      { title: "Toggle", slug: "toggle", breakpoints: { sm: 2, xs: 1 } },
      {
        title: "Toggle Group",
        slug: "toggle-group",
        breakpoints: { md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Calendar",
        slug: "calendar",
        breakpoints: { lg: 2, sm: 1, xs: 1 },
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      {
        title: "Attachment",
        slug: "attachment",
        badge: { label: "New" },
        breakpoints: { lg: 2, xs: 1 },
      },
      { title: "Avatar", slug: "avatar", breakpoints: { md: 3, sm: 2, xs: 1 } },
      { title: "Badge", slug: "badge", breakpoints: { lg: 3, sm: 2, xs: 1 } },
      {
        title: "Bubble",
        slug: "bubble",
        badge: { label: "New" },
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Card",
        slug: "card",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Carousel",
        slug: "carousel",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
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
      { title: "Hover Card", slug: "hover-card", breakpoints: { xs: 1 } },
      { title: "Kbd", slug: "kbd", breakpoints: { md: 2, sm: 2, xs: 1 } },
      { title: "Label", slug: "label", breakpoints: { xs: 1 } },
      {
        title: "Marker",
        slug: "marker",
        badge: { label: "New" },
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Message",
        slug: "message",
        badge: { label: "New" },
        breakpoints: { lg: 2, xs: 1 },
      },
      {
        title: "Message Scroller",
        slug: "message-scroller",
        badge: { label: "New" },
        breakpoints: { md: 2, sm: 2, xs: 1 },
      },
      {
        title: "List Group",
        slug: "list-group",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      { title: "Scroll Area", slug: "scroll-area", breakpoints: { xs: 1 } },
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
        breakpoints: { md: 3, sm: 2, xs: 1 },
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
        breakpoints: { xl: 3, lg: 3, md: 2, sm: 1, xs: 1 },
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
        breakpoints: { md: 3, sm: 2, xs: 1 },
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
        breakpoints: { lg: 3, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Menubar",
        slug: "menubar",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Navbar",
        slug: "navbar",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Navigation Menu",
        slug: "navigation-menu",
        breakpoints: { xs: 1 },
      },
      {
        title: "Pagination",
        slug: "pagination",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Tabs",
        slug: "tabs",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
      },
      {
        title: "Sidebar",
        slug: "sidebar",
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
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
      {
        title: "Collapsible",
        slug: "collapsible",
        breakpoints: { lg: 2, md: 2, sm: 1, xs: 1 },
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
        breakpoints: { lg: 3, md: 2, sm: 1 },
      },
      {
        title: "Resizable",
        slug: "resizable",
        breakpoints: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
]

export const NAV_BLOCKS: NavSection[] = [
  {
    title: "Layout",
    items: [
      {
        title: "Landing",
        slug: "landing",
        breakpoints: { xl: 1, lg: 1, md: 1, sm: 1, xs: 1 },
      },
    ],
  },
]

export const categories = [...NAV_CATEGORIES, ...NAV_BLOCKS].flatMap(
  (section) => section.items
)

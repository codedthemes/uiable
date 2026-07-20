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
            previewUrl: "/blocks/hero",
          },
          {
            text: "Feature: Feature 2",
            previewUrl: "/blocks/feature",
          },
          {
            text: "Footer: Footer 3",
            previewUrl: "/blocks/footer",
          },
          {
            text: "Gallery: Gallery 4",
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Portfolio: Portfolio 4",
            previewUrl: "/blocks/portfolio",
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

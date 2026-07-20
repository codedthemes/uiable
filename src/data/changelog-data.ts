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
    version: "1.2.0",
    date: "July 14, 2026",
    anchor: "v1-2-0",
    categories: [
      {
        title: "New Components variants",
        items: [
          { text: "Command: 4 new variants", previewUrl: "/components/command" },
          { text: "Date Picker: 2 new variants (Disabled, Time)", previewUrl: "/components/date-picker" },
          { text: "Input: 3 new variants (Range, Select, Validation)", previewUrl: "/components/input" },
          { text: "Input Group: 1 new variant (Chat Message)", previewUrl: "/components/input-group" },
          { text: "Input OTP: 3 new variants (Animated, Filled, Outlined)", previewUrl: "/components/input-otp" },
          { text: "Item: 4 new variants (Background, Checkbox, Separator, Switch)", previewUrl: "/components/item" },
          { text: "Message Scroller: 3 core variants (Anchoring Turns, Animating, Context Visible)", previewUrl: "/components/message-scroller" },
          { text: "Radio Group: 4 new variants (Box, Colors, List, Sizes)", previewUrl: "/components/radio-group" },
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
          { text: "MessageScroller", previewUrl: "/components/message-scroller" },
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

interface ChangelogLink {
  label: string
  url: string
}

interface ChangelogItem {
  text: string
  previewUrl?: string
  links?: ChangelogLink[]
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
    version: "1.11.0",
    date: "September 30, 2026",
    anchor: "v1-11-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Bento",
            links: [{ label: "Bento 5", url: "/preview/bento/bento-5" }],
            previewUrl: "/blocks/bento",
          },
          {
            text: "Chart",
            links: [
              { label: "Chart 7", url: "/preview/charts/charts-7" },
              { label: "Chart 11", url: "/preview/charts/charts-11" },
            ],
            previewUrl: "/blocks/charts",
          },
          {
            text: "Check Mail",
            links: [
              {
                label: "Check Mail 2",
                url: "/preview/check-mail/check-mail-2",
              },
            ],
            previewUrl: "/blocks/check-mail",
          },
          {
            text: "Coming Soon",
            links: [
              {
                label: "Coming Soon 1",
                url: "/preview/coming-soon/coming-soon-1",
              },
              {
                label: "Coming Soon 2",
                url: "/preview/coming-soon/coming-soon-2",
              },
            ],
            previewUrl: "/blocks/coming-soon",
          },
          {
            text: "Contact",
            links: [
              { label: "Contact 3", url: "/preview/contact/contact-3" },
              { label: "Contact 5", url: "/preview/contact/contact-5" },
              { label: "Contact 6", url: "/preview/contact/contact-6" },
              { label: "Contact 7", url: "/preview/contact/contact-7" },
              { label: "Contact 8", url: "/preview/contact/contact-8" },
              { label: "Contact 10", url: "/preview/contact/contact-10" },
              { label: "Contact 19", url: "/preview/contact/contact-19" },
              { label: "Contact 20", url: "/preview/contact/contact-20" },
              { label: "Contact 21", url: "/preview/contact/contact-21" },
            ],
            previewUrl: "/blocks/contact",
          },
          {
            text: "Content",
            links: [
              { label: "Content 2", url: "/preview/content/content-2" },
              { label: "Content 9", url: "/preview/content/content-9" },
              { label: "Content 10", url: "/preview/content/content-10" },
              { label: "Content 11", url: "/preview/content/content-11" },
              { label: "Content 15", url: "/preview/content/content-15" },
              { label: "Content 16", url: "/preview/content/content-16" },
            ],
            previewUrl: "/blocks/content",
          },
          {
            text: "Call To Action",
            links: [
              { label: "CTA 6", url: "/preview/cta/cta-6" },
              { label: "CTA 9", url: "/preview/cta/cta-9" },
              { label: "CTA 12", url: "/preview/cta/cta-12" },
              { label: "CTA 14", url: "/preview/cta/cta-14" },
            ],
            previewUrl: "/blocks/cta",
          },
          {
            text: "E-Commerce",
            links: [
              {
                label: "E-Commerce 7",
                url: "/preview/e-commerce/e-commerce-7",
              },
              {
                label: "E-Commerce 8",
                url: "/preview/e-commerce/e-commerce-8",
              },
              {
                label: "E-Commerce 9",
                url: "/preview/e-commerce/e-commerce-9",
              },
              {
                label: "E-Commerce 10",
                url: "/preview/e-commerce/e-commerce-10",
              },
              {
                label: "E-Commerce 19",
                url: "/preview/e-commerce/e-commerce-19",
              },
              {
                label: "E-Commerce 21",
                url: "/preview/e-commerce/e-commerce-21",
              },
            ],
            previewUrl: "/blocks/e-commerce",
          },
          {
            text: "Error 404",
            links: [
              { label: "Error 404 1", url: "/preview/error-404/error404-1" },
              { label: "Error 404 2", url: "/preview/error-404/error404-2" },
            ],
            previewUrl: "/blocks/error-404",
          },
          {
            text: "Error 500",
            links: [
              { label: "Error 500 1", url: "/preview/error-500/error500-1" },
              { label: "Error 500 2", url: "/preview/error-500/error500-2" },
            ],
            previewUrl: "/blocks/error-500",
          },
          {
            text: "FAQ",
            links: [
              { label: "FAQ 6", url: "/preview/faq/faq-6" },
              { label: "FAQ 8", url: "/preview/faq/faq-8" },
              { label: "FAQ 9", url: "/preview/faq/faq-9" },
              { label: "FAQ 10", url: "/preview/faq/faq-10" },
            ],
            previewUrl: "/blocks/faq",
          },
          {
            text: "Feature",
            links: [
              { label: "Feature 3", url: "/preview/feature/feature-3" },
              { label: "Feature 6", url: "/preview/feature/feature-6" },
              { label: "Feature 8", url: "/preview/feature/feature-8" },
              { label: "Feature 9", url: "/preview/feature/feature-9" },
              { label: "Feature 18", url: "/preview/feature/feature-18" },
              { label: "Feature 24", url: "/preview/feature/feature-24" },
              { label: "Feature 27", url: "/preview/feature/feature-27" },
              { label: "Feature 30", url: "/preview/feature/feature-30" },
              { label: "Feature 39", url: "/preview/feature/feature-39" },
              { label: "Feature 42", url: "/preview/feature/feature-42" },
              { label: "Feature 45", url: "/preview/feature/feature-45" },
            ],
            previewUrl: "/blocks/feature",
          },
          {
            text: "Footer",
            links: [
              { label: "Footer 2", url: "/preview/footer/footer-2" },
              { label: "Footer 10", url: "/preview/footer/footer-10" },
              { label: "Footer 19", url: "/preview/footer/footer-19" },
              { label: "Footer 20", url: "/preview/footer/footer-20" },
            ],
            previewUrl: "/blocks/footer",
          },
          {
            text: "Gallery",
            links: [
              { label: "Gallery 1", url: "/preview/gallery/gallery-1" },
              { label: "Gallery 11", url: "/preview/gallery/gallery-11" },
            ],
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Hero",
            links: [
              { label: "Hero 4", url: "/preview/hero/hero-4" },
              { label: "Hero 5", url: "/preview/hero/hero-5" },
              { label: "Hero 8", url: "/preview/hero/hero-8" },
              { label: "Hero 9", url: "/preview/hero/hero-9" },
              { label: "Hero 15", url: "/preview/hero/hero-15" },
            ],
            previewUrl: "/blocks/hero",
          },
          {
            text: "Join Waitlist",
            links: [
              {
                label: "Join Waitlist 1",
                url: "/preview/join-waitlist/join-waitlist-1",
              },
            ],
            previewUrl: "/blocks/join-waitlist",
          },
          {
            text: "Login",
            links: [
              { label: "Login 1", url: "/preview/login/login-1" },
              { label: "Login 2", url: "/preview/login/login-2" },
            ],
            previewUrl: "/blocks/login",
          },
          {
            text: "Navbar",
            links: [
              { label: "Navbar 2", url: "/preview/navbar/navbar-2" },
              { label: "Navbar 6", url: "/preview/navbar/navbar-6" },
            ],
            previewUrl: "/blocks/navbar",
          },
          {
            text: "Portfolio",
            links: [
              { label: "Portfolio 2", url: "/preview/portfolio/portfolio-2" },
              { label: "Portfolio 8", url: "/preview/portfolio/portfolio-8" },
              { label: "Portfolio 9", url: "/preview/portfolio/portfolio-9" },
              { label: "Portfolio 10", url: "/preview/portfolio/portfolio-10" },
            ],
            previewUrl: "/blocks/portfolio",
          },
          {
            text: "Pricing",
            links: [
              { label: "Pricing 10", url: "/preview/pricing/pricing-10" },
              { label: "Pricing 12", url: "/preview/pricing/pricing-12" },
              { label: "Pricing 18", url: "/preview/pricing/pricing-18" },
              { label: "Pricing 19", url: "/preview/pricing/pricing-19" },
            ],
            previewUrl: "/blocks/pricing",
          },
          {
            text: "Process",
            links: [
              { label: "Process 7", url: "/preview/process/process-7" },
              { label: "Process 9", url: "/preview/process/process-9" },
            ],
            previewUrl: "/blocks/process",
          },
          {
            text: "Reset Password",
            links: [
              {
                label: "Reset Password 1",
                url: "/preview/reset-password/reset-password-1",
              },
            ],
            previewUrl: "/blocks/reset-password",
          },
          {
            text: "Small Hero",
            links: [
              {
                label: "Small Hero 6",
                url: "/preview/small-hero/small-hero-6",
              },
            ],
            previewUrl: "/blocks/small-hero",
          },
          {
            text: "Statistics",
            links: [
              {
                label: "Statistics 4",
                url: "/preview/statistics/statistics-4",
              },
              {
                label: "Statistics 11",
                url: "/preview/statistics/statistics-11",
              },
            ],
            previewUrl: "/blocks/statistics",
          },
          {
            text: "Team",
            links: [{ label: "Team 6", url: "/preview/team/team-6" }],
            previewUrl: "/blocks/team",
          },
          {
            text: "Testimonial",
            links: [
              {
                label: "Testimonial 6",
                url: "/preview/testimonial/testimonial-6",
              },
              {
                label: "Testimonial 8",
                url: "/preview/testimonial/testimonial-8",
              },
              {
                label: "Testimonial 16",
                url: "/preview/testimonial/testimonial-16",
              },
              {
                label: "Testimonial 17",
                url: "/preview/testimonial/testimonial-17",
              },
              {
                label: "Testimonial 18",
                url: "/preview/testimonial/testimonial-18",
              },
              {
                label: "Testimonial 20",
                url: "/preview/testimonial/testimonial-20",
              },
              {
                label: "Testimonial 21",
                url: "/preview/testimonial/testimonial-21",
              },
              {
                label: "Testimonial 22",
                url: "/preview/testimonial/testimonial-22",
              },
              {
                label: "Testimonial 24",
                url: "/preview/testimonial/testimonial-24",
              },
              {
                label: "Testimonial 25",
                url: "/preview/testimonial/testimonial-25",
              },
            ],
            previewUrl: "/blocks/testimonial",
          },
          {
            text: "Under Construction",
            links: [
              {
                label: "Under Construction 1",
                url: "/preview/under-construction/under-construction-1",
              },
              {
                label: "Under Construction 2",
                url: "/preview/under-construction/under-construction-2",
              },
            ],
            previewUrl: "/blocks/under-construction",
          },
          {
            text: "Widgets",
            links: [
              { label: "Widgets 11", url: "/preview/widgets/widgets-11" },
              { label: "Widgets 17", url: "/preview/widgets/widgets-17" },
              { label: "Widgets 18", url: "/preview/widgets/widgets-18" },
              { label: "Widgets 19", url: "/preview/widgets/widgets-19" },
              { label: "Widgets 22", url: "/preview/widgets/widgets-22" },
            ],
            previewUrl: "/blocks/widgets",
          },
          {
            text: "Landing",
            links: [
              { label: "About Us", url: "/preview/landing/about/about-us" },
              {
                label: "Blocks Showcase",
                url: "/preview/landing/blocks-showcase/blocks-showcase",
              },
              {
                label: "Testimonials",
                url: "/preview/landing/testimonials/testimonials",
              },
            ],
            previewUrl: "/blocks/landing",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Accordion",
            links: [
              {
                label: "Custom",
                url: "/components/accordion#accordion-custom",
              },
            ],
            previewUrl: "/components/accordion",
          },
          { text: "Animated Beam" },
          {
            text: "Avatar",
            links: [
              {
                label: "Group Tooltip",
                url: "/components/avatar#avatar-group-tooltip",
              },
            ],
            previewUrl: "/components/avatar",
          },
          {
            text: "Badge",
            links: [
              { label: "Closable", url: "/components/badge#badge-closable" },
            ],
            previewUrl: "/components/badge",
          },
          {
            text: "Button",
            links: [
              {
                label: "Contextual Feedback",
                url: "/components/button#button-contextual-feedback",
              },
              { label: "Copy", url: "/components/button#button-copy" },
            ],
            previewUrl: "/components/button",
          },
          {
            text: "Calendar",
            links: [
              { label: "Dialog", url: "/components/calendar#calendar-dialog" },
            ],
            previewUrl: "/components/calendar",
          },
          {
            text: "Card",
            links: [
              {
                label: "Animated Border",
                url: "/components/card#card-animated-border",
              },
              { label: "Credit", url: "/components/card#card-credit" },
            ],
            previewUrl: "/components/card",
          },
          {
            text: "Carousel",
            links: [
              {
                label: "Animated",
                url: "/components/carousel#carousel-animated",
              },
              { label: "Dots", url: "/components/carousel#carousel-dots" },
              {
                label: "Thumbnails",
                url: "/components/carousel#carousel-thumbnails",
              },
            ],
            previewUrl: "/components/carousel",
          },
          {
            text: "Collapsible",
            links: [
              {
                label: "Setting Menu List",
                url: "/components/collapsible#collapsible-setting-menu-list",
              },
            ],
            previewUrl: "/components/collapsible",
          },
          {
            text: "Coupon",
            links: [{ label: "Basic", url: "/components/coupon#coupon-basic" }],
            previewUrl: "/components/coupon",
          },
          {
            text: "Dropdown Menu",
            links: [
              {
                label: "Color Picker",
                url: "/components/dropdown-menu#dropdown-menu-color-picker",
              },
              {
                label: "Notifications",
                url: "/components/dropdown-menu#dropdown-menu-notifications",
              },
            ],
            previewUrl: "/components/dropdown-menu",
          },
          { text: "Liquid Glass" },
          {
            text: "Menubar",
            links: [
              { label: "Profile", url: "/components/menubar#menubar-profile" },
            ],
            previewUrl: "/components/menubar",
          },
          {
            text: "Navigation Menu",
            links: [
              {
                label: "Icons",
                url: "/components/navigation-menu#navigation-menu-icons",
              },
            ],
            previewUrl: "/components/navigation-menu",
          },
          {
            text: "Pagination",
            links: [
              {
                label: "Rounded",
                url: "/components/pagination#pagination-rounded",
              },
            ],
            previewUrl: "/components/pagination",
          },
          {
            text: "Popover",
            links: [
              {
                label: "Notifications",
                url: "/components/popover#popover-notifications",
              },
            ],
            previewUrl: "/components/popover",
          },
          {
            text: "Questionnaire",
            links: [
              {
                label: "Basic",
                url: "/components/questionnaire#questionnaire-basic",
              },
              {
                label: "Dialog",
                url: "/components/questionnaire#questionnaire-dialog",
              },
              {
                label: "Progress",
                url: "/components/questionnaire#questionnaire-progress",
              },
              {
                label: "Resume",
                url: "/components/questionnaire#questionnaire-resume",
              },
              {
                label: "Skippable",
                url: "/components/questionnaire#questionnaire-skippable",
              },
            ],
            previewUrl: "/components/questionnaire",
          },
          {
            text: "Resizable",
            links: [
              {
                label: "Table Column",
                url: "/components/resizable#resizable-table-column",
              },
            ],
            previewUrl: "/components/resizable",
          },
          {
            text: "Select",
            links: [{ label: "Multi", url: "/components/select#select-multi" }],
            previewUrl: "/components/select",
          },
          {
            text: "Sidebar",
            links: [
              { label: "Sidebar 5", url: "/components/sidebar#sidebar-5" },
            ],
            previewUrl: "/components/sidebar",
          },
          {
            text: "Slider",
            links: [
              {
                label: "Emoji Rating",
                url: "/components/slider#slider-emoji-rating",
              },
              {
                label: "Price Range",
                url: "/components/slider#slider-price-range",
              },
            ],
            previewUrl: "/components/slider",
          },
          {
            text: "Switch",
            links: [
              {
                label: "Animated Stretch",
                url: "/components/switch#switch-animated-stretch",
              },
              {
                label: "Animated Theme",
                url: "/components/switch#switch-animated-theme",
              },
            ],
            previewUrl: "/components/switch",
          },
          {
            text: "Tabs",
            links: [
              {
                label: "Pills Badge",
                url: "/components/tabs#tabs-pills-badge",
              },
            ],
            previewUrl: "/components/tabs",
          },
          {
            text: "Timeline",
            links: [
              { label: "Basic", url: "/components/timeline#timeline-basic" },
              {
                label: "Collapsible",
                url: "/components/timeline#timeline-collapsible",
              },
              {
                label: "Horizontal",
                url: "/components/timeline#timeline-horizontal",
              },
              { label: "Status", url: "/components/timeline#timeline-status" },
            ],
            previewUrl: "/components/timeline",
          },
          {
            text: "Toggle Group",
            links: [
              {
                label: "Animated Toolbar",
                url: "/components/toggle-group#toggle-group-animated-toolbar",
              },
            ],
            previewUrl: "/components/toggle-group",
          },
          {
            text: "Tree View",
            links: [
              { label: "Basic", url: "/components/tree-view#tree-view-basic" },
              {
                label: "Checkbox Select",
                url: "/components/tree-view#tree-view-checkbox-select",
              },
              {
                label: "Organization",
                url: "/components/tree-view#tree-view-organization",
              },
              {
                label: "Search Filter",
                url: "/components/tree-view#tree-view-search-filter",
              },
            ],
            previewUrl: "/components/tree-view",
          },
        ],
      },
    ],
  },
  {
    version: "1.10.0",
    date: "September 08, 2026",
    anchor: "v1-10-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "Bento: Bento 4",
            previewUrl: "/preview/bento/bento-4",
          },
          {
            text: "Call To Action: CTA 3",
            previewUrl: "/preview/cta/cta-3",
          },
          {
            text: "E-Commerce: E-Commerce 3",
            previewUrl: "/preview/e-commerce/e-commerce-3",
          },
          {
            text: "E-Commerce: E-Commerce 5",
            previewUrl: "/preview/e-commerce/e-commerce-5",
          },
          {
            text: "Small Hero: Small Hero 5",
            previewUrl: "/preview/small-hero/small-hero-5",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert Dialog: Subscription",
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio: Widescreen",
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Dialog: QR Code Scanner",
            previewUrl: "/components/dialog",
          },
          {
            text: "Drawer: Event RSVP",
            previewUrl: "/components/drawer",
          },
          {
            text: "Sheet: Settings",
            previewUrl: "/components/sheet",
          },
          {
            text: "Spinner: Capsule Track, Segmented Aperture, Wave Helix",
            previewUrl: "/components/spinner",
          },
          {
            text: "Table: Status",
            previewUrl: "/components/table",
          },
          {
            text: "Tooltip: Dot, Glow",
            previewUrl: "/components/tooltip",
          },
          {
            text: "Typography: Typewriter",
            previewUrl: "/components/typography",
          },
        ],
      },
    ],
  },
  {
    version: "1.9.0",
    date: "September 01, 2026",
    anchor: "v1-9-0",
    categories: [
      {
        title: "New Blocks",
        items: [
          {
            text: "E-Commerce: E-Commerce 2",
            previewUrl: "/preview/e-commerce/e-commerce-2",
          },
          {
            text: "Feature: Feature 4",
            previewUrl: "/preview/feature/feature-4",
          },
          {
            text: "Statistics: Statistics 5",
            previewUrl: "/preview/statistics/statistics-5",
          },
          {
            text: "Team: Team 7",
            previewUrl: "/preview/team/team-7",
          },
          {
            text: "Testimonial: Testimonial 5",
            previewUrl: "/preview/testimonial/testimonial-5",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Accordion: With Icons",
            previewUrl: "/components/accordion",
          },
          {
            text: "Breadcrumb: Outline",
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Context Menu: Font & Style Menu, Spell Check Menu",
            previewUrl: "/components/context-menu",
          },
          {
            text: "Dropdown Menu: Profile Detailed",
            previewUrl: "/components/dropdown-menu",
          },
          {
            text: "Menubar: Compact",
            previewUrl: "/components/menubar",
          },
          {
            text: "Pagination: Card",
            previewUrl: "/components/pagination",
          },
          {
            text: "Popover: User Profile",
            previewUrl: "/components/popover",
          },
          {
            text: "Resizable: Main Admin Layout",
            previewUrl: "/components/resizable",
          },
          {
            text: "Tabs: With Badge",
            previewUrl: "/components/tabs",
          },
        ],
      },
    ],
  },
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

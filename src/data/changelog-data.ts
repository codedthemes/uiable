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
            links: [
              { label: "Bento 5", url: "/preview/bento/bento-5" },
              { label: "Bento 7", url: "/preview/bento/bento-7" },
            ],
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
            text: "Code Verification",
            links: [
              {
                label: "Code Verification 4",
                url: "/preview/code-verification/code-verification-4",
              },
              {
                label: "Code Verification 5",
                url: "/preview/code-verification/code-verification-5",
              },
            ],
            previewUrl: "/blocks/code-verification",
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
              { label: "Contact 18", url: "/preview/contact/contact-18" },
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
              { label: "Feature 32", url: "/preview/feature/feature-32" },
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
            text: "Forgot Password",
            links: [
              {
                label: "Forgot Password 3",
                url: "/preview/forgot-password/forgot-password-3",
              },
            ],
            previewUrl: "/blocks/forgot-password",
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
              { label: "Hero 16", url: "/preview/hero/hero-16" },
              { label: "Hero 17", url: "/preview/hero/hero-17" },
              { label: "Hero 19", url: "/preview/hero/hero-19" },
              { label: "Hero 22", url: "/preview/hero/hero-22" },
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
              { label: "Navbar 8", url: "/preview/navbar/navbar-8" },
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
            text: "Sign Up",
            links: [{ label: "Sign Up 6", url: "/preview/sign-up/sign-up-6" }],
            previewUrl: "/blocks/sign-up",
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
                url: "/components/accordion",
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
                url: "/components/avatar",
              },
            ],
            previewUrl: "/components/avatar",
          },
          {
            text: "Badge",
            links: [{ label: "Closable", url: "/components/badge" }],
            previewUrl: "/components/badge",
          },
          {
            text: "Button",
            links: [
              {
                label: "Contextual Feedback",
                url: "/components/button",
              },
              { label: "Copy", url: "/components/button" },
            ],
            previewUrl: "/components/button",
          },
          {
            text: "Calendar",
            links: [{ label: "Dialog", url: "/components/calendar" }],
            previewUrl: "/components/calendar",
          },
          {
            text: "Card",
            links: [
              {
                label: "Animated Border",
                url: "/components/card",
              },
              { label: "Credit", url: "/components/card" },
            ],
            previewUrl: "/components/card",
          },
          {
            text: "Carousel",
            links: [
              {
                label: "Animated",
                url: "/components/carousel",
              },
              { label: "Dots", url: "/components/carousel" },
              {
                label: "Thumbnails",
                url: "/components/carousel",
              },
            ],
            previewUrl: "/components/carousel",
          },
          {
            text: "Collapsible",
            links: [
              {
                label: "Setting Menu List",
                url: "/components/collapsible",
              },
            ],
            previewUrl: "/components/collapsible",
          },
          {
            text: "Coupon",
            links: [{ label: "Basic", url: "/components/coupon" }],
            previewUrl: "/components/coupon",
          },
          {
            text: "Dropdown Menu",
            links: [
              {
                label: "Color Picker",
                url: "/components/dropdown-menu",
              },
              {
                label: "Notifications",
                url: "/components/dropdown-menu",
              },
            ],
            previewUrl: "/components/dropdown-menu",
          },
          { text: "Liquid Glass" },
          {
            text: "Menubar",
            links: [{ label: "Profile", url: "/components/menubar" }],
            previewUrl: "/components/menubar",
          },
          {
            text: "Navigation Menu",
            links: [
              {
                label: "Icons",
                url: "/components/navigation-menu",
              },
            ],
            previewUrl: "/components/navigation-menu",
          },
          {
            text: "Pagination",
            links: [
              {
                label: "Rounded",
                url: "/components/pagination",
              },
            ],
            previewUrl: "/components/pagination",
          },
          {
            text: "Popover",
            links: [
              {
                label: "Notifications",
                url: "/components/popover",
              },
            ],
            previewUrl: "/components/popover",
          },
          {
            text: "Questionnaire",
            links: [
              {
                label: "Basic",
                url: "/components/questionnaire",
              },
              {
                label: "Dialog",
                url: "/components/questionnaire",
              },
              {
                label: "Progress",
                url: "/components/questionnaire",
              },
              {
                label: "Resume",
                url: "/components/questionnaire",
              },
              {
                label: "Skippable",
                url: "/components/questionnaire",
              },
            ],
            previewUrl: "/components/questionnaire",
          },
          {
            text: "Resizable",
            links: [
              {
                label: "Table Column",
                url: "/components/resizable",
              },
            ],
            previewUrl: "/components/resizable",
          },
          {
            text: "Select",
            links: [{ label: "Multi", url: "/components/select" }],
            previewUrl: "/components/select",
          },
          {
            text: "Sidebar",
            links: [{ label: "Sidebar 5", url: "/components/sidebar" }],
            previewUrl: "/components/sidebar",
          },
          {
            text: "Slider",
            links: [
              {
                label: "Emoji Rating",
                url: "/components/slider",
              },
              {
                label: "Price Range",
                url: "/components/slider",
              },
            ],
            previewUrl: "/components/slider",
          },
          {
            text: "Switch",
            links: [
              {
                label: "Animated Stretch",
                url: "/components/switch",
              },
              {
                label: "Animated Theme",
                url: "/components/switch",
              },
            ],
            previewUrl: "/components/switch",
          },
          {
            text: "Tabs",
            links: [
              {
                label: "Pills Badge",
                url: "/components/tabs",
              },
            ],
            previewUrl: "/components/tabs",
          },
          {
            text: "Timeline",
            links: [
              { label: "Basic", url: "/components/timeline" },
              {
                label: "Collapsible",
                url: "/components/timeline",
              },
              {
                label: "Horizontal",
                url: "/components/timeline",
              },
              { label: "Status", url: "/components/timeline" },
            ],
            previewUrl: "/components/timeline",
          },
          {
            text: "Toggle Group",
            links: [
              {
                label: "Animated Toolbar",
                url: "/components/toggle-group",
              },
            ],
            previewUrl: "/components/toggle-group",
          },
          {
            text: "Tree View",
            links: [
              { label: "Basic", url: "/components/tree-view" },
              {
                label: "Checkbox Select",
                url: "/components/tree-view",
              },
              {
                label: "Organization",
                url: "/components/tree-view",
              },
              {
                label: "Search Filter",
                url: "/components/tree-view",
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
            text: "Bento",
            links: [{ label: "Bento 4", url: "/preview/bento/bento-4" }],
            previewUrl: "/blocks/bento",
          },
          {
            text: "Call To Action",
            links: [{ label: "CTA 3", url: "/preview/cta/cta-3" }],
            previewUrl: "/blocks/cta",
          },
          {
            text: "E-Commerce",
            links: [
              {
                label: "E-Commerce 3",
                url: "/preview/e-commerce/e-commerce-3",
              },
            ],
            previewUrl: "/blocks/e-commerce",
          },
          {
            text: "E-Commerce",
            links: [
              {
                label: "E-Commerce 5",
                url: "/preview/e-commerce/e-commerce-5",
              },
            ],
            previewUrl: "/blocks/e-commerce",
          },
          {
            text: "Small Hero",
            links: [
              {
                label: "Small Hero 5",
                url: "/preview/small-hero/small-hero-5",
              },
            ],
            previewUrl: "/blocks/small-hero",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert Dialog",
            links: [
              {
                label: "Subscription",
                url: "/components/alert-dialog",
              },
            ],
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio",
            links: [{ label: "Widescreen", url: "/components/aspect-ratio" }],
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Dialog",
            links: [{ label: "QR Code Scanner", url: "/components/dialog" }],
            previewUrl: "/components/dialog",
          },
          {
            text: "Drawer",
            links: [
              {
                label: "Event RSVP",
                url: "/components/drawer",
              },
            ],
            previewUrl: "/components/drawer",
          },
          {
            text: "Sheet",
            links: [{ label: "Settings", url: "/components/sheet" }],
            previewUrl: "/components/sheet",
          },
          {
            text: "Spinner",
            links: [
              {
                label: "Capsule Track",
                url: "/components/spinner",
              },
              {
                label: "Segmented Aperture",
                url: "/components/spinner",
              },
              {
                label: "Wave Helix",
                url: "/components/spinner",
              },
            ],
            previewUrl: "/components/spinner",
          },
          {
            text: "Table",
            links: [{ label: "Status", url: "/components/table" }],
            previewUrl: "/components/table",
          },
          {
            text: "Tooltip",
            links: [
              { label: "Dot", url: "/components/tooltip" },
              { label: "Glow", url: "/components/tooltip" },
            ],
            previewUrl: "/components/tooltip",
          },
          {
            text: "Typography",
            links: [
              {
                label: "Typewriter",
                url: "/components/typography",
              },
            ],
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
            text: "E-Commerce",
            links: [
              {
                label: "E-Commerce 2",
                url: "/preview/e-commerce/e-commerce-2",
              },
            ],
            previewUrl: "/blocks/e-commerce",
          },
          {
            text: "Feature",
            links: [{ label: "Feature 4", url: "/preview/feature/feature-4" }],
            previewUrl: "/blocks/feature",
          },
          {
            text: "Statistics",
            links: [
              {
                label: "Statistics 5",
                url: "/preview/statistics/statistics-5",
              },
            ],
            previewUrl: "/blocks/statistics",
          },
          {
            text: "Team",
            links: [{ label: "Team 7", url: "/preview/team/team-7" }],
            previewUrl: "/blocks/team",
          },
          {
            text: "Testimonial",
            links: [
              {
                label: "Testimonial 5",
                url: "/preview/testimonial/testimonial-5",
              },
            ],
            previewUrl: "/blocks/testimonial",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Accordion",
            links: [{ label: "With Icons", url: "/components/accordion" }],
            previewUrl: "/components/accordion",
          },
          {
            text: "Breadcrumb",
            links: [
              {
                label: "Outline",
                url: "/components/breadcrumb",
              },
            ],
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Context Menu",
            links: [
              { label: "Font & Style Menu", url: "/components/context-menu" },
              { label: "Spell Check Menu", url: "/components/context-menu" },
            ],
            previewUrl: "/components/context-menu",
          },
          {
            text: "Dropdown Menu",
            links: [
              {
                label: "Profile Detailed",
                url: "/components/dropdown-menu",
              },
            ],
            previewUrl: "/components/dropdown-menu",
          },
          {
            text: "Menubar",
            links: [{ label: "Compact", url: "/components/menubar" }],
            previewUrl: "/components/menubar",
          },
          {
            text: "Pagination",
            links: [{ label: "Card", url: "/components/pagination" }],
            previewUrl: "/components/pagination",
          },
          {
            text: "Popover",
            links: [
              {
                label: "User Profile",
                url: "/components/popover",
              },
            ],
            previewUrl: "/components/popover",
          },
          {
            text: "Resizable",
            links: [
              { label: "Main Admin Layout", url: "/components/resizable" },
            ],
            previewUrl: "/components/resizable",
          },
          {
            text: "Tabs",
            links: [{ label: "With Badge", url: "/components/tabs" }],
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
            text: "FAQ",
            links: [{ label: "FAQ 4", url: "/preview/faq/faq-4" }],
            previewUrl: "/blocks/faq",
          },
          {
            text: "Pricing",
            links: [{ label: "Pricing 9", url: "/preview/pricing/pricing-9" }],
            previewUrl: "/blocks/pricing",
          },
          {
            text: "Process",
            links: [{ label: "Process 4", url: "/preview/process/process-4" }],
            previewUrl: "/blocks/process",
          },
          {
            text: "Team",
            links: [{ label: "Team 3", url: "/preview/team/team-3" }],
            previewUrl: "/blocks/team",
          },
          {
            text: "Testimonial",
            links: [
              {
                label: "Testimonial 9",
                url: "/preview/testimonial/testimonial-9",
              },
            ],
            previewUrl: "/blocks/testimonial",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert",
            links: [
              {
                label: "Outlined Danger",
                url: "/components/alert",
              },
              {
                label: "Outlined Dark",
                url: "/components/alert",
              },
              {
                label: "Outlined Info",
                url: "/components/alert",
              },
              {
                label: "Outlined Primary",
                url: "/components/alert",
              },
              {
                label: "Outlined Secondary",
                url: "/components/alert",
              },
              {
                label: "Outlined Success",
                url: "/components/alert",
              },
              {
                label: "Outlined Warning",
                url: "/components/alert",
              },
            ],
            previewUrl: "/components/alert",
          },
          {
            text: "Alert Dialog",
            links: [
              {
                label: "Warning",
                url: "/components/alert-dialog",
              },
            ],
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio",
            links: [
              {
                label: "Cinematic",
                url: "/components/aspect-ratio",
              },
            ],
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Breadcrumb",
            links: [
              {
                label: "Background",
                url: "/components/breadcrumb",
              },
            ],
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Dialog",
            links: [
              {
                label: "Destructive",
                url: "/components/dialog",
              },
            ],
            previewUrl: "/components/dialog",
          },
          {
            text: "Menubar",
            links: [{ label: "Editor", url: "/components/menubar" }],
            previewUrl: "/components/menubar",
          },
          {
            text: "Separator",
            links: [
              {
                label: "With Text",
                url: "/components/separator",
              },
            ],
            previewUrl: "/components/separator",
          },
          {
            text: "Sonner",
            links: [
              {
                label: "Close Button",
                url: "/components/sonner",
              },
              { label: "Icon", url: "/components/sonner" },
            ],
            previewUrl: "/components/sonner",
          },
          {
            text: "Spinner",
            links: [
              {
                label: "Dots Pulse",
                url: "/components/spinner",
              },
            ],
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
            text: "Contact",
            links: [
              { label: "Contact 11", url: "/preview/contact/contact-11" },
            ],
            previewUrl: "/blocks/contact",
          },
          {
            text: "Content",
            links: [{ label: "Content 5", url: "/blocks/content" }],
            previewUrl: "/blocks/content",
          },
          {
            text: "Footer",
            links: [{ label: "Footer 11", url: "/blocks/footer" }],
            previewUrl: "/blocks/footer",
          },
          {
            text: "Gallery",
            links: [
              { label: "Gallery 10", url: "/preview/gallery/gallery-10" },
            ],
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Hero",
            links: [{ label: "Hero 6", url: "/preview/hero/hero-6" }],
            previewUrl: "/blocks/hero",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert",
            links: [
              {
                label: "Border Left Danger",
                url: "/components/alert",
              },
              {
                label: "Border Left Dark",
                url: "/components/alert",
              },
            ],
            previewUrl: "/components/alert",
          },
          {
            text: "Dialog",
            links: [
              {
                label: "Newsletter",
                url: "/components/dialog",
              },
            ],
            previewUrl: "/components/dialog",
          },
          {
            text: "Progress",
            links: [
              {
                label: "Circular",
                url: "/components/progress",
              },
              {
                label: "Gradient",
                url: "/components/progress",
              },
              {
                label: "With Value",
                url: "/components/progress",
              },
            ],
            previewUrl: "/components/progress",
          },
          {
            text: "Separator",
            links: [{ label: "Stats", url: "/components/separator" }],
            previewUrl: "/components/separator",
          },
          {
            text: "Sheet",
            links: [{ label: "Menu", url: "/components/sheet" }],
            previewUrl: "/components/sheet",
          },
          {
            text: "Skeleton",
            links: [{ label: "List", url: "/components/skeleton" }],
            previewUrl: "/components/skeleton",
          },
          {
            text: "Sonner",
            links: [{ label: "Action", url: "/components/sonner" }],
            previewUrl: "/components/sonner",
          },
          {
            text: "Table",
            links: [{ label: "Users", url: "/components/table" }],
            previewUrl: "/components/table",
          },
          {
            text: "Tooltip",
            links: [{ label: "Status", url: "/components/tooltip" }],
            previewUrl: "/components/tooltip",
          },
          {
            text: "Typography",
            links: [
              {
                label: "Italic",
                url: "/components/typography",
              },
              { label: "Link", url: "/components/typography" },
            ],
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
            text: "Gallery",
            links: [{ label: "Gallery 3", url: "/preview/gallery/gallery-3" }],
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Hero",
            links: [{ label: "Hero 3", url: "/preview/hero/hero-3" }],
            previewUrl: "/blocks/hero",
          },
          {
            text: "Portfolio",
            links: [{ label: "Portfolio 3", url: "/blocks/portfolio" }],
            previewUrl: "/blocks/portfolio",
          },
          {
            text: "Pricing",
            links: [{ label: "Pricing 3", url: "/preview/pricing/pricing-3" }],
            previewUrl: "/blocks/pricing",
          },
          {
            text: "Process",
            links: [{ label: "Process 3", url: "/preview/process/process-3" }],
            previewUrl: "/blocks/process",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Alert Dialog",
            links: [
              {
                label: "Lock",
                url: "/components/alert-dialog",
              },
            ],
            previewUrl: "/components/alert-dialog",
          },
          {
            text: "Aspect Ratio",
            links: [
              {
                label: "Standard",
                url: "/components/aspect-ratio",
              },
            ],
            previewUrl: "/components/aspect-ratio",
          },
          {
            text: "Breadcrumb",
            links: [
              {
                label: "Stepper",
                url: "/components/breadcrumb",
              },
            ],
            previewUrl: "/components/breadcrumb",
          },
          {
            text: "Label",
            links: [{ label: "Card", url: "/components/label" }],
            previewUrl: "/components/label",
          },
          {
            text: "List Group",
            links: [
              {
                label: "Nested",
                url: "/components/list-group",
              },
            ],
            previewUrl: "/components/list-group",
          },
          {
            text: "Navigation Menu",
            links: [
              {
                label: "Mega",
                url: "/components/navigation-menu",
              },
            ],
            previewUrl: "/components/navigation-menu",
          },
          {
            text: "Progress",
            links: [
              {
                label: "Circular With Label",
                url: "/components/progress",
              },
              {
                label: "With Steps",
                url: "/components/progress",
              },
            ],
            previewUrl: "/components/progress",
          },
          {
            text: "Scroll Area",
            links: [
              {
                label: "Horizontal",
                url: "/components/scroll-area",
              },
            ],
            previewUrl: "/components/scroll-area",
          },
          {
            text: "Skeleton",
            links: [
              { label: "Chart", url: "/components/skeleton" },
              {
                label: "Profile",
                url: "/components/skeleton",
              },
            ],
            previewUrl: "/components/skeleton",
          },
          {
            text: "Sonner",
            links: [{ label: "Custom", url: "/components/sonner" }],
            previewUrl: "/components/sonner",
          },
          {
            text: "Spinner",
            links: [
              {
                label: "Bars Scale",
                url: "/components/spinner",
              },
            ],
            previewUrl: "/components/spinner",
          },
          {
            text: "Tooltip",
            links: [
              {
                label: "Custom Delay",
                url: "/components/tooltip",
              },
            ],
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
            text: "Feature",
            links: [{ label: "Feature 1", url: "/preview/feature/feature-1" }],
            previewUrl: "/blocks/feature",
          },
          {
            text: "Footer",
            links: [{ label: "Footer 7", url: "/preview/footer/footer-7" }],
            previewUrl: "/blocks/footer",
          },
          {
            text: "Gallery",
            links: [{ label: "Gallery 2", url: "/preview/gallery/gallery-2" }],
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Portfolio",
            links: [
              { label: "Portfolio 5", url: "/preview/portfolio/portfolio-5" },
            ],
            previewUrl: "/blocks/portfolio",
          },
          {
            text: "Process",
            links: [{ label: "Process 6", url: "/preview/process/process-6" }],
            previewUrl: "/blocks/process",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Kbd",
            links: [
              { label: "Arrow Keys", url: "/components/kbd" },
              {
                label: "Function Keys",
                url: "/components/kbd",
              },
              {
                label: "Shortcut Keys",
                url: "/components/kbd",
              },
            ],
            previewUrl: "/components/kbd",
          },
          {
            text: "Label",
            links: [
              { label: "Card", url: "/components/label" },
              { label: "Disabled", url: "/components/label" },
              { label: "Required", url: "/components/label" },
            ],
            previewUrl: "/components/label",
          },
          {
            text: "List Group",
            links: [
              {
                label: "Avatar",
                url: "/components/list-group",
              },
              {
                label: "Badge",
                url: "/components/list-group",
              },
              {
                label: "Nested",
                url: "/components/list-group",
              },
            ],
            previewUrl: "/components/list-group",
          },
          {
            text: "Scroll Area",
            links: [
              {
                label: "Chat Scroller",
                url: "/components/scroll-area",
              },
              {
                label: "Horizontal",
                url: "/components/scroll-area",
              },
              {
                label: "Image Scroll",
                url: "/components/scroll-area",
              },
              { label: "Terminal Logs", url: "/components/scroll-area" },
            ],
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
            text: "Pricing",
            links: [{ label: "Pricing 2", url: "/preview/pricing/pricing-2" }],
            previewUrl: "/blocks/pricing",
          },
          {
            text: "Process",
            links: [{ label: "Process 1", url: "/preview/process/process-1" }],
            previewUrl: "/blocks/process",
          },
          {
            text: "Statistics",
            links: [
              {
                label: "Statistics 1",
                url: "/preview/statistics/statistics-1",
              },
            ],
            previewUrl: "/blocks/statistics",
          },
          {
            text: "Team",
            links: [{ label: "Team 1", url: "/preview/team/team-1" }],
            previewUrl: "/blocks/team",
          },
          {
            text: "Testimonial",
            links: [
              {
                label: "Testimonial 1",
                url: "/preview/testimonial/testimonial-1",
              },
            ],
            previewUrl: "/blocks/testimonial",
          },
        ],
      },
      {
        title: "New Components variants",
        items: [
          {
            text: "Chart",
            links: [
              { label: "Pie", url: "/components/chart" },
              { label: "Radial", url: "/components/chart" },
              { label: "Area", url: "/components/chart" },
              { label: "Line", url: "/components/chart" },
            ],
            previewUrl: "/components/chart",
          },
          {
            text: "Data Table",
            links: [
              {
                label: "Expandable",
                url: "/components/data-table",
              },
              {
                label: "Pagination",
                url: "/components/data-table",
              },
              {
                label: "Editable",
                url: "/components/data-table",
              },
            ],
            previewUrl: "/components/data-table",
          },
          {
            text: "Empty",
            links: [
              {
                label: "No Search Result",
                url: "/components/empty",
              },
              {
                label: "With Large Icon",
                url: "/components/empty",
              },
            ],
            previewUrl: "/components/empty",
          },
          {
            text: "Field",
            links: [
              {
                label: "One Time Password Form",
                url: "/components/field",
              },
            ],
            previewUrl: "/components/field",
          },
          {
            text: "Hover Card",
            links: [
              {
                label: "Info With Icon Badge",
                url: "/components/hover-card",
              },
              {
                label: "Image Preview",
                url: "/components/hover-card",
              },
              {
                label: "Simple Info Tooltip",
                url: "/components/hover-card",
              },
              {
                label: "Link Preview",
                url: "/components/hover-card",
              },
            ],
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
            text: "Select",
            links: [
              {
                label: "With Icons",
                url: "/components/select",
              },
              {
                label: "With Users",
                url: "/components/select",
              },
              {
                label: "With Status",
                url: "/components/select",
              },
              {
                label: "Clearable",
                url: "/components/select",
              },
            ],
            previewUrl: "/components/select",
          },
          {
            text: "Slider",
            links: [
              {
                label: "Color Options",
                url: "/components/slider",
              },
            ],
            previewUrl: "/components/slider",
          },
          {
            text: "Switch",
            links: [
              {
                label: "Toggle Theme",
                url: "/components/switch",
              },
              {
                label: "Color Options",
                url: "/components/switch",
              },
              { label: "Outline", url: "/components/switch" },
              { label: "Square", url: "/components/switch" },
            ],
            previewUrl: "/components/switch",
          },
          {
            text: "Textarea",
            links: [
              {
                label: "Helper Text",
                url: "/components/textarea",
              },
              {
                label: "Character Count",
                url: "/components/textarea",
              },
              {
                label: "Feedback",
                url: "/components/textarea",
              },
              {
                label: "Readonly",
                url: "/components/textarea",
              },
            ],
            previewUrl: "/components/textarea",
          },
          {
            text: "Toggle",
            links: [
              { label: "Icon", url: "/components/toggle" },
              { label: "Animated", url: "/components/toggle" },
            ],
            previewUrl: "/components/toggle",
          },
          {
            text: "Toggle Group",
            links: [
              {
                label: "Filled Icon",
                url: "/components/toggle-group",
              },
            ],
            previewUrl: "/components/toggle-group",
          },
          {
            text: "Calendar",
            links: [
              {
                label: "Right Navigation",
                url: "/components/calendar",
              },
            ],
            previewUrl: "/components/calendar",
          },
          {
            text: "Avatar",
            links: [
              { label: "Fallback", url: "/components/avatar" },
              {
                label: "Placeholder Icon",
                url: "/components/avatar",
              },
              {
                label: "Counter Indicator",
                url: "/components/avatar",
              },
              {
                label: "Border Radius",
                url: "/components/avatar",
              },
            ],
            previewUrl: "/components/avatar",
          },
          {
            text: "Badge",
            links: [
              { label: "Status", url: "/components/badge" },
              { label: "Avatar", url: "/components/badge" },
              { label: "Sizes", url: "/components/badge" },
              { label: "Gradient", url: "/components/badge" },
            ],
            previewUrl: "/components/badge",
          },
          {
            text: "Card",
            links: [
              { label: "Product", url: "/components/card" },
              { label: "Tabs", url: "/components/card" },
              {
                label: "Animated Tilt",
                url: "/components/card",
              },
              {
                label: "Animated Flip",
                url: "/components/card",
              },
            ],
            previewUrl: "/components/card",
          },
        ],
      },
      {
        title: "Introduce New UI Blocks",
        items: [
          {
            text: "Hero",
            links: [{ label: "Hero 2", url: "/preview/hero/hero-2" }],
            previewUrl: "/blocks/hero",
          },
          {
            text: "Feature",
            links: [{ label: "Feature 2", url: "/preview/feature/feature-2" }],
            previewUrl: "/blocks/feature",
          },
          {
            text: "Footer",
            links: [{ label: "Footer 3", url: "/preview/footer/footer-3" }],
            previewUrl: "/blocks/footer",
          },
          {
            text: "Gallery",
            links: [{ label: "Gallery 4", url: "/preview/gallery/gallery-4" }],
            previewUrl: "/blocks/gallery",
          },
          {
            text: "Portfolio",
            links: [
              { label: "Portfolio 4", url: "/preview/portfolio/portfolio-4" },
            ],
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
            text: "Command",
            links: [{ label: "4 new variants", url: "/components/command" }],
            previewUrl: "/components/command",
          },
          {
            text: "Date Picker",
            links: [
              {
                label: "Disabled",
                url: "/components/date-picker",
              },
              {
                label: "Time",
                url: "/components/date-picker",
              },
            ],
            previewUrl: "/components/date-picker",
          },
          {
            text: "Input",
            links: [
              { label: "Range", url: "/components/input" },
              { label: "Select", url: "/components/input" },
              {
                label: "Validation",
                url: "/components/input",
              },
            ],
            previewUrl: "/components/input",
          },
          {
            text: "Input Group",
            links: [
              {
                label: "Chat Message",
                url: "/components/input-group",
              },
            ],
            previewUrl: "/components/input-group",
          },
          {
            text: "Input OTP",
            links: [
              {
                label: "Animated",
                url: "/components/input-otp",
              },
              {
                label: "Filled",
                url: "/components/input-otp",
              },
              {
                label: "Outlined",
                url: "/components/input-otp",
              },
            ],
            previewUrl: "/components/input-otp",
          },
          {
            text: "Item",
            links: [
              { label: "Background", url: "/components/item" },
              { label: "Checkbox", url: "/components/item" },
              { label: "Separator", url: "/components/item" },
              { label: "Switch", url: "/components/item" },
            ],
            previewUrl: "/components/item",
          },
          {
            text: "Message Scroller",
            links: [
              {
                label: "Anchoring Turns",
                url: "/components/message-scroller",
              },
              { label: "Animating", url: "/components/message-scroller" },
              {
                label: "Context Visible",
                url: "/components/message-scroller",
              },
            ],
            previewUrl: "/components/message-scroller",
          },
          {
            text: "Radio Group",
            links: [
              { label: "Box", url: "/components/radio-group" },
              {
                label: "Colors",
                url: "/components/radio-group",
              },
              {
                label: "List",
                url: "/components/radio-group",
              },
              {
                label: "Sizes",
                url: "/components/radio-group",
              },
            ],
            previewUrl: "/components/radio-group",
          },
        ],
      },
      {
        title: "Introduce New UI Blocks",
        items: [
          { text: "Call To Action", previewUrl: "/blocks/cta" },
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

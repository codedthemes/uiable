// project-imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const timelineInfo: CategoryInfo = {
  title: "Timeline",
  description: [
    "Visualize sequences of events, AI reasoning steps, deployment lifecycles, and chronological activity feeds with the versatile Timeline component.",
  ],
  whatIsHeading: `What is ${branding.brandName} Timeline?`,
  whatIsDescription: [
    `${branding.brandName} Timeline provides an accessible, highly customizable foundation for displaying chronological milestones, AI Chain of Thought reasoning, multi-step workflows, and activity logs. Built on shadcn/ui and Base UI patterns, it provides composable slots for indicators, connecting lines, headers, collapsible traces, and nested sub-tasks.`,
    "Direct source code ownership gives you complete control over animations, step statuses (completed, in-progress, pending, error, warning), orientations (vertical and horizontal), and expandable details.",
    "Whether you're building an AI agent thinking trace, an order tracking stepper, or a developer CI/CD dashboard, Timeline integrates effortlessly with Tailwind CSS and class-variance-authority (CVA).",
  ],
  variantsHeading: "Popular Timeline Variants",
  variants: [
    "Chain of Thought . Visualizes multi-step AI thinking traces with search pills, collapsible reasoning details, and elapsed timers.",
    "Basic Activity Feed . Minimalist vertical stream with status dots and descriptive timestamps.",
    "Status & Pipeline Stepper . Multi-stage lifecycle tracker with pulsing active spinners and retry actions.",
    "Collapsible Deep Traces . Interactive expandable step cards for logs, metrics, and debugging.",
    "Custom Developer Icons . Git commit, merge, security scan, and deployment release markers.",
    "Horizontal Roadmap . Responsive horizontal timeline for product roadmaps and milestone planning.",
    "Nested Sub-Tasks . Agentic workflow decomposition showing parent tasks branching into sub-tasks.",
  ],
  whyUseHeading: `Why ${branding.brandName} Timeline?`,
  whyUseDescription: [
    `${branding.brandName} Timeline solves the complexity of building dynamic, animated, and responsive event streams. Instead of hardcoding lines and dots, its modular slot architecture lets you plug in icons, collapsible sections, badges, and cards effortlessly.`,
    "With first-class support for both vertical feeds and horizontal milestone roadmaps, you can use the same cohesive design tokens across your entire application.",
    "Accessible data attributes (`data-slot`, `data-status`, `data-orientation`) make it easy to style and animate states with standard CSS or Tailwind classes.",
  ],
  featuresHeading: `Features of ${branding.brandName} Timeline`,
  features: [
    "Orientation Flexibility. Seamless switching between vertical activity feeds and horizontal roadmaps.",
    "Rich Status Styling. Out-of-the-box styling for completed, in-progress, pending, warning, and error states.",
    "AI Chain of Thought Ready. Effortlessly embed collapsible thinking traces, search queries, and code outputs.",
    "Nested Sub-Task Support. Built-in `TimelineSubGroup` and `TimelineSubItem` for hierarchical task decomposition.",
    "Fully Composable. Modular indicator dots, connector lines, timestamps, headers, and body cards.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Timeline connects naturally with AI stream handlers (Vercel AI SDK, LangChain), CI/CD pipelines, and realtime state feeds.`,
    "Ideal for applications such as:",
  ],
  integrationList: [
    "AI Agent Reasoning & Chain of Thought Displays",
    "CI/CD Build & Deployment Tracking Dashboards",
    "E-Commerce Order Status & Package Tracking",
    "Audit Trails, Activity Feeds & Git Commit History",
    "Product Milestone & Strategic Roadmaps",
  ],
  integrationNote:
    "The component fully respects global Tailwind styling, automatically adapting to light/dark themes and customizable radii.",
  faqs: [
    {
      question: "How do I make timeline steps collapsible?",
      answer:
        "You can wrap the TimelineContent in a Collapsible component (or use the built-in Collapsible primitive) and connect the trigger to the step header.",
    },
    {
      question: "Can I use custom icons inside the timeline dots?",
      answer:
        "Yes! The TimelineIndicator component accepts any SVG icon or React node, automatically centering and sizing it appropriately.",
    },
    {
      question: "Does the Timeline support horizontal layout?",
      answer:
        'Yes, setting orientation="horizontal" on the Timeline root component automatically arranges steps into a horizontal row with responsive connectors.',
    },
  ],
}

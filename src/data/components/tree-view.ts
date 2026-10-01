// project-imports
import branding from "@/branding.json"

// types
import { CategoryInfo } from "./types"

export const treeViewInfo: CategoryInfo = {
  title: "Tree View",
  description: [
    "Render collapsible hierarchies, nested directory trees, multi-select permission matrices, and organization charts with the versatile Tree View component.",
  ],
  whatIsHeading: `What is ${branding.brandName} Tree View?`,
  whatIsDescription: [
    `${branding.brandName} Tree View provides an accessible, performant foundation for displaying nested hierarchical data structures, file system trees, multi-tier categories, and organization rosters. Built with composable slots, it supports collapsible triggers, guide lines, selection highlights, and custom action buttons.`,
    "Direct source code ownership gives you complete control over keyboard navigation (WAI-ARIA Tree Pattern), expand/collapse states, search filtering, tri-state checkboxes, and custom file/folder icons.",
    "Whether you're developing an IDE code explorer, a complex permission manager, an enterprise taxonomy selector, or a git diff viewer, Tree View integrates seamlessly with Tailwind CSS and Base UI patterns.",
  ],
  variantsHeading: "Popular Tree View Variants",
  variants: [
    "File Explorer . Complete IDE-style workspace browser with file-specific icons, action toolbars, and collapse-all controls.",
    "Tri-State Checkbox Select . Cascading multi-selection tree with indeterminate parent checkboxes for permission assignment.",
    "Search & Filter . Live query filtering with search term highlighting and automatic parent branch expansion.",
    "Connecting Guide Lines . Visual indentation guides with selectable solid, dashed, or dotted styling.",
    "Git Status Changes . Source control file tree with modified, added, and deleted status pills and diff line counters.",
    "Organization Hierarchy . Multi-level team roster with member avatars, online status indicators, and department counts.",
    "Basic Collapsible . Minimalist vertical directory hierarchy with animated folder carets and active state indicators.",
  ],
  whyUseHeading: `Why ${branding.brandName} Tree View?`,
  whyUseDescription: [
    `${branding.brandName} Tree View eliminates the complexity of managing deep nested states, keyboard focus, and accessibility manually. With composable compound primitives, you can build custom trees declaratively without boilerplate.`,
    "Rich features like connecting guide lines, tri-state cascading checkboxes, and live search highlighting give your application a polished, professional developer-grade feel.",
    "Fully styled with standard Tailwind utility classes and CSS variables, automatically respecting your global light/dark theme and border radius.",
  ],
  featuresHeading: `Features of ${branding.brandName} Tree View`,
  features: [
    "Full Keyboard Navigation. Arrow key expansion/collapse, Enter/Space selection, and Home/End navigation.",
    "Guide Line Customization. Built-in indentation guide lines with solid, dashed, or dotted styles.",
    "Tri-State Checkboxes. Cascading checkbox synchronization with automatic indeterminate state computation.",
    "Live Search Highlighting. Built-in match highlighting and automatic ancestor branch expansion.",
    "Composable Slots. Easy composition with TreeItemToggle, TreeItemIcon, TreeItemLabel, TreeItemBadge, and TreeItemActions.",
    "Theme & Variant Support. Subtly highlighted active rows, indicator bars, and seamless dark mode support.",
  ],
  integrationHeading: "Integration & Compatibility",
  integrationDescription: [
    `${branding.brandName} Tree View is designed to work with filesystem APIs, cloud storage buckets, permission engines, and recursive JSON data models.`,
    "Ideal for applications such as:",
  ],
  integrationList: [
    "IDE File Explorers & Cloud Code Workspaces",
    "Role-Based Access Control (RBAC) & Permission Managers",
    "Nested Category & Tag Taxonomies",
    "Git Version Control & Pull Request Diff Explorers",
    "Company Organization Charts & Department Rosters",
  ],
  integrationNote:
    "The component is fully unstyled under the hood and powered by accessible ARIA attributes, ensuring total design flexibility.",
  faqs: [
    {
      question:
        "How do I make the Tree View search filter auto-expand folders?",
      answer:
        "Pass the matching category IDs to the expandedValues prop whenever the search query updates, and pass searchQuery to TreeView for automatic match highlighting.",
    },
    {
      question:
        "How does tri-state checkbox selection work with nested children?",
      answer:
        "The TreeView component provides utility states where checking a parent toggles all descendants, and checking some children sets the parent checkbox to indeterminate.",
    },
    {
      question: "Can I use custom icons for different file extensions?",
      answer:
        "Yes! You can place any custom icon or SVG inside the TreeItemIcon slot based on file extension or node type.",
    },
  ],
}

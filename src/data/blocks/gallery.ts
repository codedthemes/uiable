// types
import { CategoryInfo } from "./types"

export const galleryInfo: CategoryInfo = {
  title: "Gallery",
  description: [
    "Gallery blocks are designed to showcase visual content, such as product photos, portfolio pieces, or team event images, in an organized and attractive layout.",
    "They use responsive grids and aspect-ratio controlled containers to ensure that images look perfect regardless of their original dimensions.",
    "Built for high visual impact, these blocks help you tell a visual story and capture user attention instantly.",
  ],
  whatIsHeading: "What is a Gallery Block?",
  whatIsDescription: [
    "A Gallery block is a structured section of a webpage dedicated to displaying a collection of images or videos. It can range from simple grids to complex masonry layouts.",
    "It often includes interactive features like lightbox previews, filtering options, and hover effects to provide more details about each item.",
  ],
  whyUseHeading: "Why Use our Gallery Blocks?",
  whyUseDescription: [
    "Visual Engagement. Images are processed faster than text. A gallery is the quickest way to convey quality and style to your users.",
    "Optimized Performance. Built with modern web techniques like lazy loading and responsive images to ensure fast load times even with large galleries.",
    "Creative Flexibility. Multiple layout options (Grid, Masonry, Carousel) allow you to choose the best way to present your unique visual content.",
  ],
  featuresHeading: "Key Features of Gallery Blocks",
  features: [
    "Responsive Grids. Automatically adjusts the number of columns based on screen width.",
    "Aspect Ratio Control. Ensures consistent sizing for thumbnails using CSS `aspect-ratio`.",
    "Hover Interactions. Subtle zoom, overlay, or caption effects to enhance the user experience.",
    "Lightbox Ready. Designed for easy integration with image preview and zoom libraries.",
    "Filtering & Sorting. Support for category-based filtering to manage large collections.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Combine <b>Gallery Blocks</b> with <b>Portfolio</b> or <b>Project</b> details for deep dives into your work. Use within <b>Product Detail</b> pages for multiple view angles.",
    "Place inside <b>About Us</b> pages to show off your team culture and office space.",
  ],
  faqs: [
    {
      question: "How many images should I include in a single gallery?",
      answer:
        "For landing pages, 6-12 images are ideal. For dedicated gallery pages, you can include more, but consider using pagination or 'load more' buttons.",
    },
    {
      question: "Will these galleries work with different image sizes?",
      answer:
        "Yes! While we recommend consistent aspect ratios for grids, our masonry layout options handle varying image heights gracefully.",
    },
  ],
}

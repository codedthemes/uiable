// types
import { CategoryInfo } from "./types"

export const faqInfo: CategoryInfo = {
  title: "FAQ",
  description: [
    "FAQ (Frequently Asked Questions) blocks are essential for addressing common user concerns, providing quick answers, and reducing support overhead.",
    "They use structured, easy-to-navigate layouts that allow users to find the information they need without leaving the page.",
    "Built with a focus on clarity and accessibility, these blocks help build trust and improve the overall user experience.",
  ],
  whatIsHeading: "What is an FAQ Block?",
  whatIsDescription: [
    "An FAQ block is a dedicated section that lists common questions and their corresponding answers. It often uses an accordion-style layout to keep the page clean and manageable.",
    "It serves as a self-service knowledge base that answers the most likely questions a new user might have.",
  ],
  whyUseHeading: "Why Use our FAQ Blocks?",
  whyUseDescription: [
    "Reduced Support Load. By answering common questions upfront, you can significantly decrease the number of repetitive support inquiries.",
    "Improved SEO. FAQs are a great way to include relevant keywords and long-tail questions that users are searching for.",
    "User Confidence. Anticipating and answering user questions shows that you understand their needs and have thought through your offering.",
  ],
  featuresHeading: "Key Features of FAQ Blocks",
  features: [
    "Accordion Layout. Keeps the interface clean by showing one answer at a time.",
    "Searchable Content. Designed for easy integration with site-wide search functionality.",
    "Structured Data Support. Uses semantic HTML that helps search engines understand the FAQ format.",
    "Clear Hierarchy. Distinct styling for questions and answers to maintain legibility.",
    "Mobile Optimized. Easy to tap and expand questions on small screens.",
  ],
  integrationHeading: "Works Well With Other Sections",
  integrationDescription: [
    "Place <b>FAQ Blocks</b> near <b>Pricing</b> or <b>Checkout</b> sections to resolve last-minute hesitations. Combine with <b>Contact</b> blocks for users who need more help.",
    "Use within <b>Product</b> pages to address specific feature or compatibility questions.",
  ],
  faqs: [
    {
      question: "How many questions should I include in an FAQ block?",
      answer:
        "Focus on the top 5-10 most frequent questions. If you have many more, consider grouping them into categories or creating a dedicated help center page.",
    },
    {
      question: "Should I use an accordion or a simple list?",
      answer:
        "Accordions are better for saving space when you have more than 3-4 questions. Simple lists are fine for very short FAQs.",
    },
  ],
}

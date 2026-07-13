// project
import { fileUploadInfo } from "../components/file-upload"
import { searchInfo } from "../components/search"
import { contactInfo } from "./contact"
import { contentInfo } from "./content"
import { ctaInfo } from "./cta"
import { faqInfo } from "./faq"

// types
import { CategoryInfo } from "./types"

export const blockCategoryInfoMap: Record<string, CategoryInfo> = {
  cta: ctaInfo,
  contact: contactInfo,
  content: contentInfo,
  faq: faqInfo,
  "file-upload": fileUploadInfo,
  search: searchInfo,
}

// project-imports
import { bentoInfo } from "./bento"
import { chartsInfo } from "./charts"
import { checkMailInfo } from "./check-mail"
import { codeVerificationInfo } from "./code-verification"
import { comingSoonInfo } from "./coming-soon"
import { componentLayoutInfo } from "./component-layout"
import { contactInfo } from "./contact"
import { contentInfo } from "./content"
import { ctaInfo } from "./cta"
import { dashboardLayoutInfo } from "./dashboard-layout"
import { docLayoutInfo } from "./doc-layout"
import { eCommerceInfo } from "./e-commerce"
import { error404Info } from "./error-404"
import { error500Info } from "./error-500"
import { faqInfo } from "./faq"
import { featureInfo } from "./feature"
import { footerInfo } from "./footer"
import { forgotPasswordInfo } from "./forgot-password"
import { formInfo } from "./form"
import { galleryInfo } from "./gallery"
import { headerInfo } from "./header"
import { heroInfo } from "./hero"
import { joinWaitlistInfo } from "./join-waitlist"
import { landingInfo } from "./landing"
import { loginInfo } from "./login"
import { navbarInfo } from "./navbar"
import { portfolioInfo } from "./portfolio"
import { pricingInfo } from "./pricing"
import { processInfo } from "./process"
import { resetPasswordInfo } from "./reset-password"
import { signUpInfo } from "./sign-up"
import { smallHeroInfo } from "./small-hero"
import { statisticsInfo } from "./statistics"
import { tablesInfo } from "./tables"
import { teamInfo } from "./team"
import { testimonialInfo } from "./testimonial"
import { underConstructionInfo } from "./under-construction"
import { widgetsInfo } from "./widgets"

// types
import { CategoryInfo } from "./types"

export const blockCategoryInfoMap: Record<string, CategoryInfo> = {
  bento: bentoInfo,
  charts: chartsInfo,
  "check-mail": checkMailInfo,
  "code-verification": codeVerificationInfo,
  "coming-soon": comingSoonInfo,
  "component-layout": componentLayoutInfo,
  cta: ctaInfo,
  contact: contactInfo,
  content: contentInfo,
  "dashboard-layout": dashboardLayoutInfo,
  "doc-layout": docLayoutInfo,
  "e-commerce": eCommerceInfo,
  "error-404": error404Info,
  "error-500": error500Info,
  faq: faqInfo,
  feature: featureInfo,
  footer: footerInfo,
  "forgot-password": forgotPasswordInfo,
  form: formInfo,
  gallery: galleryInfo,
  header: headerInfo,
  hero: heroInfo,
  "join-waitlist": joinWaitlistInfo,
  landing: landingInfo,
  login: loginInfo,
  navbar: navbarInfo,
  portfolio: portfolioInfo,
  pricing: pricingInfo,
  process: processInfo,
  "reset-password": resetPasswordInfo,
  "sign-up": signUpInfo,
  "small-hero": smallHeroInfo,
  statistics: statisticsInfo,
  tables: tablesInfo,
  team: teamInfo,
  testimonial: testimonialInfo,
  "under-construction": underConstructionInfo,
  widgets: widgetsInfo,
}

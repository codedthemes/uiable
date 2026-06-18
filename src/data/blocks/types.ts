export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategoryInfo {
  title: string;
  description: string[];
  whatIsHeading: string;
  whatIsDescription: string[];
  whyUseHeading: string;
  whyUseDescription: string[];
  featuresHeading: string;
  features: string[];
  integrationHeading: string;
  integrationDescription: string[];
  faqs: FaqItem[];
  variantsHeading?: string;
  variants?: string[];
  integrationList?: string[];
  integrationNote?: string;
}

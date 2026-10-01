const faqs = [
  {
    question: "What Features Does Your Platform Offer?",
    answer:
      "Our platform provides project management, team collaboration, workflow automation, analytics, and integrations with popular tools to help your team work more efficiently.",
    colorClass: "bg-pink-500",
  },
  {
    question: "Is My Data Secure?",
    answer:
      "Yes. We use industry-standard security practices, encrypted connections, and secure cloud infrastructure to keep your data protected at all times.",
    colorClass: "bg-violet-500",
  },
  {
    question: "Can I Upgrade or Downgrade My Plan Later?",
    answer:
      "Absolutely. You can change your subscription plan at any time. Your billing will be adjusted automatically based on the new plan you choose.",
    colorClass: "bg-blue-500",
  },
  {
    question: "Does Your Platform Support Team Collaboration?",
    answer:
      "Yes. Invite team members, assign roles, share projects, leave comments, and collaborate in real time from a single workspace.",
    colorClass: "bg-cyan-500",
  },
  {
    question: "Do You Offer a Free Trial?",
    answer:
      "Yes. You can explore all core features with our free trial before deciding on a paid subscription. No long-term commitment is required.",
    colorClass: "bg-lime-500",
  },
  {
    question: "How Can I Contact Customer Support?",
    answer:
      "Our support team is available through live chat, email, and our help center. We're here to assist you with any questions or technical issues.",
    colorClass: "bg-amber-500",
  },
]
//  ------------------------------ | FAQ - 6 | ------------------------------  //

export default function Faq6() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Frequently Asked Questions
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Find answers to the most common questions about our platform,
              features, pricing, security, and customer support.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                  <div
                    className={
                      "absolute inset-y-0 right-0 w-1 rounded-full " +
                      faq.colorClass
                    }
                  ></div>
                  <div
                    className={
                      "origin-top-right rounded-[45px_0_45px_45px] pt-7 pr-7 pb-5 pl-5 " +
                      faq.colorClass +
                      " absolute -top-2 -right-2 z-10"
                    }
                  >
                    <span className="flex size-6 items-center justify-center text-lg font-semibold text-white md:text-2xl lg:size-8">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="relative z-40 flex flex-col gap-4">
                    <h2 className="pr-10 text-lg font-medium text-slate-800 md:pr-12 md:text-xl dark:text-slate-50">
                      {faq.question}
                    </h2>
                    <div className="h-0.5 w-full rounded-full bg-border/40"></div>
                    <p className="text-slate-600 dark:text-slate-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

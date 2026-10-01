import React from "react"

export default function Footer19() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 pt-24 pb-12 transition-colors dark:border-white/10 dark:bg-[#050814]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-full -translate-x-1/2 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                A
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                able.
              </span>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400">
              The next-generation financial intelligence platform built to
              automate accounting, tracking, and global transactions
              effortlessly.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-200/50 text-slate-600 transition-all hover:scale-110 hover:border-slate-300 hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-200/50 text-slate-600 transition-all hover:scale-110 hover:border-slate-300 hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-200/50 text-slate-600 transition-all hover:scale-110 hover:border-slate-300 hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-slate-900 dark:text-white">
              Product
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#workflows"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-slate-900 dark:text-white">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-slate-900 dark:text-white">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-white/10">
          <p className="text-sm font-medium text-slate-500">
            © 2026 Able Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Designed with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-red-500 text-red-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by UIable</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

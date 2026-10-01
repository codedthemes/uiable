"use client"

// third-party
import { motion } from "framer-motion"

export default function Feature42() {
  const logos = [
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="m12 1.608 12 20.784H0Z" />
        </svg>
      ),
    },
    {
      name: "replit",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z" />
        </svg>
      ),
    },
    {
      name: "Linear",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" />
        </svg>
      ),
    },
    {
      name: "Retool",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M0 2.2A2.2 2.2 0 0 1 2.2 0h8.6A2.2 2.2 0 0 1 13 2.2v1.7A1.1 1.1 0 0 1 11.9 5H1.1A1.1 1.1 0 0 1 0 3.9V2.2zm0 6.9A1.1 1.1 0 0 1 1.1 8h20.7a2.2 2.2 0 0 1 2.2 2.2v5.7a1.1 1.1 0 0 1-1.1 1.1H2.2A2.2 2.2 0 0 1 0 14.8V9.1zm11 12a1.1 1.1 0 0 1 1.1-1.1h10.8a1.1 1.1 0 0 1 1.1 1.1v.7a2.2 2.2 0 0 1-2.2 2.2h-8.6a2.2 2.2 0 0 1-2.2-2.2v-.7z" />
        </svg>
      ),
    },
    {
      name: "supabase",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="dark border-y border-white/5 bg-slate-950 py-10 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-8 text-sm font-medium tracking-wide text-gray-500">
          Trusted by developers and teams at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-24">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-2 font-semibold tracking-wider text-gray-400"
            >
              {logo.icon}
              <span>{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

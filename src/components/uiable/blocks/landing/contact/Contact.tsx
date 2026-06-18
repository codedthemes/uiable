"use client";

import { SyntheticEvent, useState } from "react";
import Link from "next/link";

// shadcn
import { Button } from "@/components/ui/button";

// third party
import { toast } from "sonner";

// assets
import {
  ContactLeftGrid,
  ContactRightGrid,
  DarkLogo,
  LightLogo
} from "@/images/svg/landing";

//  ------------------------------ | CONTACT | ------------------------------  //

export default function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-8 py-24">
      <div className="relative overflow-hidden rounded-lg border border-border bg-slate-950">
        {/* BLUE GLOW */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(95.43deg, var(--primary) 0.51%, transparent 84.32%)"
          }}
        />

        {/* LEFT GRID */}
        <div className="absolute left-[-20px] top-[-20px] sm:left-[-30px] sm:top-[-30px] lg:left-[-50px] lg:top-[-50px] z-20 select-none pointer-events-none">
          <ContactLeftGrid className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[372px] lg:h-[372px]" />
        </div>

        {/* RIGHT GRID */}
        <div className="absolute right-[-20px] bottom-[-20px] sm:right-[-30px] sm:bottom-[-30px] lg:right-[-50px] lg:bottom-[-50px] z-20 select-none pointer-events-none">
          <ContactRightGrid className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[372px] lg:h-[372px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-30 mx-auto flex max-w-3xl flex-col items-center gap-10 py-16 text-center">
          {/* LOGO */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <LightLogo
                width={84}
                height={80}
                className="text-white dark:hidden"
              />
              <DarkLogo
                width={84}
                height={80}
                className="text-white hidden dark:block"
              />
            </Link>
          </div>

          {/* HEADING */}
          <div className="flex flex-col items-center gap-3.5">
            <h2 className="text-4xl font-semibold leading-[100%] tracking-[0.1px] text-white">
              Get product updates and new releases
            </h2>

            {/* SUBTEXT */}
            <p className="max-w-lg text-md font-normal leading-5 tracking-[0.1px] text-white">
              Be the first to know about new components, application blocks,
              templates, and upcoming releases.
            </p>
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl flex-col gap-3 border border-white/10 bg-white/5 p-2 backdrop-blur sm:flex-row sm:items-center sm:rounded-full sm:p-1.5"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12 flex-1 bg-transparent px-5 py-3 text-base leading-5 tracking-[0.1px] text-white outline-none placeholder:text-white/50"
            />

            <Button
              type="submit"
              className="rounded-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Get Started"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { ReactNode } from "react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

// project imports
import branding from "@/branding.json";

// project
import Component1 from "@/components/uiable/blocks/landing/component-1/component-1";
import Component2 from "@/components/uiable/blocks/landing/component-2/component-2";
import Contact from "@/components/uiable/blocks/landing/contact/Contact";
import Featured from "@/components/uiable/blocks/landing/feature/Feature";
import Footer from "@/components/uiable/blocks/landing/footer/footer";
import Hero from "@/components/uiable/blocks/landing/hero/hero";
import Navbar from "@/components/uiable/blocks/landing/navbar/navbar";

// assets
import { Star } from "@/images/svg/icons";

export const metadata: Metadata = {
  title: `${branding.brandName} - Component Library`,
  alternates: {
    canonical: "/"
  }
};

//  ------------------------------ | BLOCK ARCHITECTURE | ------------------------------  //

function BlockArchitecture({ children, fullWidth = false }: { children: ReactNode; fullWidth?: boolean }) {
  return (
    <div
      className={cn(
        "relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-border/60 before:left-[-100vw] after:absolute",
        fullWidth && "w-screen left-1/2 -translate-x-1/2"
      )}
    >
      {fullWidth ? (
        <div className="absolute inset-0 pointer-events-none">
          <div className="container mx-auto h-full relative">
            <div className="text-border/60 absolute top-0 left-0 -translate-2/4">
              <Star />
            </div>
            <div className="text-border/60 absolute top-0 right-0 -translate-y-2/4 translate-x-2/4">
              <Star />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-border/60 absolute top-0 left-0 -translate-2/4">
            <Star />
          </div>
          <div className="text-border/60 absolute top-0 right-0 -translate-y-2/4 translate-x-2/4">
            <Star />
          </div>
        </>
      )}
      {children}
    </div>
  );
}

//  ------------------------------ | LANDING PAGE | ------------------------------  //

export default function LandingPage() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <div className="container border-x border-border/60 mx-auto">
        <Navbar />
        <BlockArchitecture fullWidth>
          <Hero />
        </BlockArchitecture>
        <BlockArchitecture>
          <Component1 />
        </BlockArchitecture>
        <BlockArchitecture>
          <Component2 />
        </BlockArchitecture>
        <BlockArchitecture>
          <Featured />
        </BlockArchitecture>
        <BlockArchitecture>
          <Contact />
        </BlockArchitecture>
      </div>
      <BlockArchitecture fullWidth>
        <Footer />
      </BlockArchitecture>
    </div>
  );
}

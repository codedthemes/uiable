import Link from "next/link";

// project imports
import branding from "@/branding.json";
import { cn } from "@/lib/utils";

// assets
const brandFavLogo = "https://cdn.uiable.com/brand/favicon.svg";
const brandLogoDark = "https://cdn.uiable.com/brand/logo-dark.svg";
const brandLogoLight = "https://cdn.uiable.com/brand/logo-white.svg";

interface LogoProps {
  className?: string;
}

//  ------------------------------ | SHARED - LOGO | ------------------------------  //

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="hidden dark:block">
        <img
          src={brandLogoDark}
          alt={`${branding.brandName} Logo`}
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className,
          )}
        />
      </div>
      <div className="block dark:hidden">
        <img
          src={brandLogoLight}
          alt={`${branding.brandName} Logo`}
          className={cn("group-data-[collapsible=icon]:hidden", className)}
        />
        <img
          src={brandFavLogo}
          alt={`${branding.brandName} Logo`}
          className={cn(
            "hidden group-data-[collapsible=icon]:block",
            className,
          )}
        />
      </div>
    </Link>
  );
}

import { useState } from "react";
import { Plane, Compass } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "color";
}

export function Logo({ className = "h-14 w-auto" }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Vinayak Tours & Travel Logo"
          onError={() => setImgError(true)}
          className={`${className} object-contain rounded-xl shadow-sm border border-border/40`}
        />
        <div className="hidden xl:flex flex-col">
          <span className="font-extrabold text-sm tracking-tight text-foreground uppercase leading-tight font-display">
            Vinayak Tours &amp; Travel
          </span>
          <span className="text-[10px] font-semibold text-accent tracking-widest uppercase">
            Indore &amp; Chandigarh · Est. 2014
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 group">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl brand-gradient text-white shadow-md transition-transform group-hover:scale-105">
        <div className="relative">
          <Compass className="h-6 w-6 opacity-80" />
          <Plane className="h-4 w-4 absolute -top-1 -right-1 text-accent animate-pulse-subtle" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-black text-base tracking-tight text-foreground uppercase leading-none font-display">
          Vinayak <span className="text-accent">Tours</span>
        </span>
        <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
          &amp; Travel · Est. 2014
        </span>
      </div>
    </div>
  );
}

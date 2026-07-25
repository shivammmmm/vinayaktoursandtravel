import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "color";
}

export function Logo({ className = "h-14 w-auto", variant = "color" }: LogoProps) {
  // Render their official logo image
  return (
    <img
      src="/logo.jpg"
      alt="Vinayak Tours & Travel Logo"
      className={`${className} object-contain`}
    />
  );
}

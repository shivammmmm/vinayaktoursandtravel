import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export function FloatingContactBar() {
  const waMsg = encodeURIComponent("Hi Vinayak Tours & Travel, I would like to plan a custom trip!");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 sm:gap-3">
      {/* Phone call pill button */}
      <a
        href={`tel:${brand.phones[0].tel}`}
        aria-label="Call Us"
        className="hidden items-center gap-2 rounded-full border border-white/20 bg-primary/95 px-4 py-2.5 text-xs font-bold text-white shadow-brand backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-primary sm:flex"
      >
        <Phone className="h-3.5 w-3.5 text-accent" />
        <span>Call Expert</span>
      </a>

      {/* Plan Trip CTA pill */}
      <Link
        to="/booking"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-accent px-4 py-2.5 text-xs font-extrabold text-accent-foreground shadow-brand backdrop-blur transition-all duration-300 hover:scale-105 hover:brightness-110"
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span>Plan My Trip</span>
      </Link>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${brand.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand transition-all duration-300 hover:scale-110 hover:shadow-glow"
      >
        <MessageCircle className="h-6 w-6 fill-current stroke-none" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </a>
    </div>
  );
}

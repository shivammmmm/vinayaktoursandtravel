import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Star, ArrowRight } from "lucide-react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=70";

export function DestinationCard({
  name,
  slug,
  image,
  blurb,
  from,
}: {
  name: string;
  slug: string;
  image: string;
  blurb: string;
  from?: string;
}) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <Link
      to="/booking"
      search={{ destination: name }}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl border border-white/20 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand bg-slate-900"
    >
      <img
        src={imgSrc}
        alt={name}
        loading="lazy"
        onError={() => setImgSrc(FALLBACK_IMAGE)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Top badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
          <Star className="h-3 w-3 fill-accent text-accent" /> 4.9
        </span>
        {from && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-extrabold text-accent-foreground shadow-md">
            from {from}
          </span>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" aria-hidden />

      {/* Content */}
      <div className="relative p-5 text-white z-10">
        <div className="flex items-center gap-1.5 text-xs text-accent font-semibold mb-1">
          <MapPin className="h-3.5 w-3.5" />
          <span>Curated Itinerary</span>
        </div>

        <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-accent transition-colors">
          {name}
        </h3>

        <p className="mt-1 text-xs text-white/80 line-clamp-2 leading-relaxed">
          {blurb}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Book Custom Package <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
            Customizable
          </span>
        </div>
      </div>
      <span className="sr-only">{slug}</span>
    </Link>
  );
}

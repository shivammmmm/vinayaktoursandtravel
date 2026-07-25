export function DestinationCard({
  name, slug, image, blurb, from,
}: { name: string; slug: string; image: string; blurb: string; from?: string }) {
  return (
    <a
      href={`/booking?destination=${encodeURIComponent(name)}`}
      className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl shadow-card"
    >

      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" aria-hidden />
      <div className="relative p-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight">{name}</h3>
          {from && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
              from {from}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm opacity-90">{blurb}</p>
        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
          Plan this trip →
        </span>
      </div>
      <span className="sr-only">{slug}</span>
    </a>
  );
}

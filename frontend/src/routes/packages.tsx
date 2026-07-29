import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { PageHero, Section } from "@/components/site/PageHero";
import { packages, packageCategories, type PackageCategory } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Check } from "lucide-react";

const packagesSearchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/packages")({
  validateSearch: (s) => packagesSearchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Tour Packages — India, International, Luxury & Adventure | Vinayak" },
      { name: "description", content: "Handpicked domestic and international tour packages — Kashmir, Kerala, Rajasthan, Dubai, Bali, Switzerland, Maldives and more. Free itineraries, no advance." },
      { name: "keywords", content: "budget tour, budget travel, travel plan, tour package, honeymoon, holiday packages, custom packages, luxury packages, adventure packages, domestic tours, international tours" },
      { property: "og:title", content: "Tour Packages | Vinayak Tours & Travel" },
      { property: "og:description", content: "Browse India, International, Luxury and Adventure holiday packages." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const search = Route.useSearch();
  const initialCat = (search.category as PackageCategory) ?? "all";
  const [cat, setCat] = useState<PackageCategory | "all">(initialCat);

  useEffect(() => {
    if (search.category && ["india", "international", "luxury", "adventure", "all"].includes(search.category)) {
      setCat(search.category as PackageCategory | "all");
    }
  }, [search.category]);
  const list = useMemo(
    () => (cat === "all" ? packages : packages.filter((p) => p.category.includes(cat))),
    [cat],
  );

  return (
    <div>
      <PageHero
        eyebrow="Tour Packages"
        title="Handpicked holidays, ready to personalise"
        subtitle="Curated by our travel designers — every package is fully customisable to your dates, budget and pace."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setCat("all")}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              cat === "all"
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-card hover:border-accent hover:bg-accent/10"
            }`}
          >
            All ({packages.length})
          </button>
          {packageCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                cat === c.key
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card hover:border-accent hover:bg-accent/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow">
                  From {p.from}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.region}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration}</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/booking" search={{ destination: p.title }}>Get free quote</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/contact">Talk to us</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

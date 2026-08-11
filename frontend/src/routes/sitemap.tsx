import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { regions, themes } from "@/lib/site-data";
import { MapPin, Compass, FileText, LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Vinayak Tours & Travel" },
      { name: "description", content: "Complete directory of pages, packages, themes, and destinations on Vinayak Tours & Travel." },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: Sitemap,
});

function Sitemap() {
  return (
    <div>
      <PageHero
        eyebrow="Directory"
        title="Sitemap"
        subtitle="Explore all sections, tour packages, travel themes, and destinations across our website."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Main Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
              <LayoutGrid className="h-5 w-5 text-accent" /> Main Pages
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent font-medium">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent font-medium">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent font-medium">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-accent font-medium">Tour Packages</Link></li>
              <li><Link to="/themes" className="hover:text-accent font-medium">Browse by Theme</Link></li>
              <li><Link to="/destinations" className="hover:text-accent font-medium">Destinations</Link></li>
              <li><Link to="/gallery" className="hover:text-accent font-medium">Media Gallery</Link></li>
              <li><Link to="/booking" className="hover:text-accent font-medium">Plan Your Tour</Link></li>
              <li><Link to="/contact" className="hover:text-accent font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
              <MapPin className="h-5 w-5 text-accent" /> Destinations
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              {regions.map((r) => (
                <div key={r.key}>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1.5">{r.label}</h4>
                  <ul className="space-y-1 pl-2 border-l border-border/80">
                    {r.destinations.map((d) => (
                      <li key={d.slug}>
                        <Link to={`/booking?destination=${encodeURIComponent(d.name)}`} className="hover:text-accent text-xs block py-0.5">{d.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Themes */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
              <Compass className="h-5 w-5 text-accent" /> Themes
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {themes.map((t) => (
                <li key={t}>
                  <Link to={`/booking?destination=${encodeURIComponent(`${t} — India`)}`} className="hover:text-accent font-medium block">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2 text-primary">
              <FileText className="h-5 w-5 text-accent" /> Legal &amp; Policies
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-accent font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent font-medium">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-accent font-medium">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-accent font-medium">Cancellation Policy</Link></li>
              <li><a href="/sitemap.xml" target="_blank" className="hover:text-accent font-medium block">XML Sitemap (SEO)</a></li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

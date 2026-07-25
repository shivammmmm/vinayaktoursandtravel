import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Youtube } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Logo } from "@/components/site/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <Logo className="h-16 w-auto rounded bg-white p-1" />
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Tailor-made domestic and international journeys since {brand.established}. Offices in Indore &amp; Chandigarh.
          </p>
          <a
            href={brand.youtube}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
          >
            <Youtube className="h-4 w-4" /> @vinayaktoursntravel
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/packages" className="hover:underline">Tour Packages</Link></li>
            <li><Link to="/themes" className="hover:underline">Browse by Theme</Link></li>
            <li><Link to="/destinations" className="hover:underline">Prime Destinations</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/booking" className="hover:underline">Get a Free Quote</Link></li>
          </ul>
          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider opacity-90">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund Policy</Link></li>
            <li><Link to="/cancellation-policy" className="hover:underline">Cancellation Policy</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            {brand.phones.map((p) => (
              <li key={p.tel} className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${p.tel}`} className="hover:underline">
                  {p.number}
                  <span className="block text-xs opacity-70">{p.name}</span>
                </a>
              </li>
            ))}
            {brand.emails.map((e) => (
              <li key={e} className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${e}`} className="break-all hover:underline">{e}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider opacity-90">Offices</h4>
          <ul className="mt-4 space-y-4 text-sm opacity-90">
            {brand.offices.map((o) => (
              <li key={o.city} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">{o.city}</div>
                  <div className="opacity-80">{o.address}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs opacity-70 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Vinayak Tours &amp; Travel. All rights reserved.</span>
          <span>Indore (M.P.) &nbsp;·&nbsp; Chandigarh (U.T.)</span>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Youtube, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Logo } from "@/components/site/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      {/* Top Banner */}
      <div className="border-b border-white/10 bg-black/20 py-8">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="font-extrabold text-base text-white">100% Transparency &amp; Trust</div>
              <div className="text-xs text-white/70">No hidden fees · Zero advance required to draft custom itinerary</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-black text-accent-foreground hover:brightness-110 transition-all shadow"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* COL 1 */}
        <div>
          <div className="flex items-center">
            <Logo className="h-16 w-auto rounded-xl bg-white p-2 shadow-md" />
          </div>
          <p className="mt-4 text-xs text-white/80 leading-relaxed max-w-xs">
            Vinayak Tours &amp; Travel — designing custom domestic and international holidays since {brand.established} from offices in Indore &amp; Chandigarh.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={brand.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Channel"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Youtube className="h-4 w-4 text-red-500" /> @vinayaktoursntravel
            </a>
          </div>
        </div>

        {/* COL 2 */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-white/85">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/packages" className="hover:text-accent transition-colors">Tour Packages</Link></li>
            <li><Link to="/themes" className="hover:text-accent transition-colors">Trip Themes</Link></li>
            <li><Link to="/destinations" className="hover:text-accent transition-colors">Prime Destinations</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-accent transition-colors">Get Custom Quote</Link></li>
          </ul>
        </div>

        {/* COL 3 */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Legal &amp; Policy</h4>
          <ul className="space-y-2.5 text-xs text-white/85">
            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
            <li><Link to="/cancellation-policy" className="hover:text-accent transition-colors">Cancellation Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
          </ul>
        </div>

        {/* COL 4 */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Our Offices</h4>
          <ul className="space-y-4 text-xs text-white/85">
            {brand.offices.map((o: { city: string; address: string; contact: string }) => (
              <li key={o.city} className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <div className="font-bold text-white text-sm">{o.city}</div>
                  <div className="text-white/70 leading-relaxed text-[11px]">{o.address}</div>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 border-t border-white/10">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <div className="flex flex-col text-[11px]">
                <a href={`tel:${brand.phones[0].tel}`} className="hover:text-accent">{brand.phones[0].number} (Indore)</a>
                <a href={`tel:${brand.phones[1].tel}`} className="hover:text-accent">{brand.phones[1].number} (Chandigarh)</a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <a href={`mailto:${brand.emails[0]}`} className="hover:text-accent text-[11px]">{brand.emails[0]}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-white/60">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Vinayak Tours &amp; Travel. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span> <Heart className="h-3 w-3 fill-accent text-accent inline" /> <span>for travellers worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

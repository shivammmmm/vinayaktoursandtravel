import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, PhoneCall, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { brand, services, themes, regions } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";

type NavChild = {
  to: string;
  hash?: string;
  search?: Record<string, string>;
  label: string;
  desc?: string;
};

type NavItem = {
  to: string;
  label: string;
  children?: NavChild[];
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", hash: "profile", label: "Company Profile", desc: "Our story since 2014" },
      { to: "/about", hash: "leadership", label: "Leadership", desc: "Meet the team" },
      { to: "/about", hash: "offices", label: "Our Offices", desc: "Indore & Chandigarh" },
    ],
  },
  {
    to: "/services",
    label: "Services",
    children: services.map((s) => ({
      to: "/services",
      hash: s.slug,
      label: s.title,
      desc: s.desc,
    })),
  },
  {
    to: "/packages",
    label: "Packages",
    children: [
      { to: "/packages", search: { category: "india" }, label: "India", desc: "Domestic escapes" },
      { to: "/packages", search: { category: "international" }, label: "International", desc: "50+ countries" },
      { to: "/packages", search: { category: "luxury" }, label: "Luxury", desc: "5-star & bespoke" },
      { to: "/packages", search: { category: "adventure" }, label: "Adventure", desc: "Treks & expeditions" },
    ],
  },
  {
    to: "/themes",
    label: "Themes",
    children: themes.map((t) => ({
      to: "/booking",
      search: { destination: `${t} Package` },
      label: t,
    })),
  },
  {
    to: "/destinations",
    label: "Destinations",
    children: regions.map((r) => ({
      to: "/destinations",
      hash: r.key,
      label: r.label,
      desc: `${r.destinations.length} destinations`,
    })),
  },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      {/* Top Announcement Bar */}
      <div className="hidden bg-primary text-primary-foreground py-1.5 text-xs border-b border-white/10 sm:block">
        <div className="container-page flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[11px] font-medium opacity-90">
            <span className="inline-flex items-center gap-1.5 font-bold">
              Est. {brand.established} — Indore &amp; Chandigarh
            </span>
            <span className="hidden md:inline">• 10+ Years Trust • 50+ Countries</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold">
            <a href={`tel:${brand.phones[0].tel}`} className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="opacity-80">Indore:</span>
              <span className="font-extrabold">{brand.phones[0].number}</span>
            </a>
            <span className="opacity-30 hidden lg:inline">|</span>
            <a href={`tel:${brand.phones[1].tel}`} className="hover:text-accent transition-colors hidden lg:inline-flex items-center gap-1.5">
              <span className="opacity-80">Chandigarh:</span>
              <span className="font-extrabold">{brand.phones[1].number}</span>
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-xs hover:brightness-110 transition-all ml-1"
            >
              <MessageCircle className="h-3 w-3 fill-current stroke-none" />
              <span>WhatsApp 24×7</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-page flex h-20 items-center gap-4">
        <Link to="/" className="flex min-w-0 shrink-0 items-center">
          <Logo className="h-16 w-auto shrink-0" />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const hasChildren = !!n.children?.length;
            if (!hasChildren) {
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {n.label}
                </Link>
              );
            }

            // Mega Menu for Destinations
            if (n.label === "Destinations") {
              return (
                <div key={n.label} className="group relative">
                  <Link
                    to={n.to}
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "bg-secondary text-foreground" }}
                  >
                    {n.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="w-[840px] max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-brand">
                      <div className="grid grid-cols-4 gap-6">
                        {/* Column 1: Within India */}
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Within India</div>
                          <ul className="space-y-1">
                            {regions.find((r) => r.key === "india")?.destinations.map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Column 2: Asia */}
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Asia &amp; ME</div>
                          <ul className="space-y-1">
                            {regions.find((r) => r.key === "asia")?.destinations.slice(0, 8).map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Column 3: Europe & North America */}
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Europe &amp; US</div>
                          <ul className="space-y-1">
                            {regions.find((r) => r.key === "europe")?.destinations.slice(0, 4).map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                            {regions.find((r) => r.key === "north-america")?.destinations.slice(0, 3).map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Column 4: Exotic Gems */}
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Exotic Gems</div>
                          <ul className="space-y-1">
                            {regions.find((r) => r.key === "africa")?.destinations.slice(0, 3).map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                            {regions.find((r) => r.key === "oceania")?.destinations.map((d) => (
                              <li key={d.slug}>
                                <Link
                                  to="/booking"
                                  search={{ destination: d.name }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {d.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/50 text-center">
                        <Link to="/destinations" className="inline-flex items-center text-xs font-bold text-primary hover:text-accent hover:underline">
                          View All Destinations &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Mega Menu for Themes
            if (n.label === "Themes") {
              const column1 = themes.slice(0, 5);
              const column2 = themes.slice(5, 9);
              const column3 = themes.slice(9);
              return (
                <div key={n.label} className="group relative">
                  <Link
                    to={n.to}
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "bg-secondary text-foreground" }}
                  >
                    {n.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="w-[600px] max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-brand">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Leisure &amp; Romance</div>
                          <ul className="space-y-1">
                            {column1.map((t) => (
                              <li key={t}>
                                <Link
                                  to="/booking"
                                  search={{ destination: `${t} Package` }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {t}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Nature &amp; Wild</div>
                          <ul className="space-y-1">
                            {column2.map((t) => (
                              <li key={t}>
                                <Link
                                  to="/booking"
                                  search={{ destination: `${t} Package` }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {t}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-extrabold text-[11px] text-accent mb-3 uppercase tracking-widest border-b pb-1 border-border/80">Spiritual &amp; Group</div>
                          <ul className="space-y-1">
                            {column3.map((t) => (
                              <li key={t}>
                                <Link
                                  to="/booking"
                                  search={{ destination: `${t} Package` }}
                                  className="text-foreground/70 hover:text-primary hover:pl-1 transition-all text-xs font-semibold block py-0.5"
                                >
                                  {t}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isServices = n.label === "Services";
            const wide = isServices || n.children!.length > 8;
            return (
              <div key={n.label} className="group relative">
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                </Link>
                <div
                  className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100`}
                >
                  <div
                    className={`rounded-2xl border border-border bg-background p-3 shadow-brand max-h-[calc(100vh-120px)] overflow-y-auto ${
                      wide ? "w-[560px]" : "w-72"
                    }`}
                  >
                    <ul className={`grid gap-1 ${wide ? "grid-cols-2" : "grid-cols-1"}`}>
                      {n.children!.map((c) => (
                        <li key={c.label}>
                          <Link
                            to={c.to}
                            hash={c.hash}
                            search={c.search}
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors"
                          >
                            <div className="font-semibold text-foreground text-xs">{c.label}</div>
                            {c.desc && <div className="text-[11px] text-muted-foreground line-clamp-1">{c.desc}</div>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button asChild size="sm" className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex font-extrabold shadow-sm">
            <Link to="/booking" className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Plan Your Tour</span>
            </Link>
          </Button>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 hover:bg-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((n) => {
              const hasChildren = !!n.children?.length;
              const isOpen = openMobile === n.label;
              return (
                <div key={n.label} className="border-b border-border/50 last:border-b-0">
                  <div className="flex items-center">
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                    >
                      {n.label}
                    </Link>
                    {hasChildren && (
                      <button
                        aria-label={`Toggle ${n.label} submenu`}
                        onClick={() => setOpenMobile(isOpen ? null : n.label)}
                        className="rounded-md p-3 hover:bg-secondary"
                      >
                        <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {hasChildren && isOpen && (
                    <ul className="pb-2 pl-4">
                      {n.children!.map((c) => (
                        <li key={c.label}>
                          <Link
                            to={c.to}
                            hash={c.hash}
                            search={c.search}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-accent px-3 py-3 text-center text-base font-extrabold text-accent-foreground shadow-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>Plan Your Tour</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront,
  Star, ShieldCheck, Wallet, Globe2, Headphones, MapPin, ArrowRight,
} from "lucide-react";
import { brand, regions, services, whyChooseUs, testimonials, corporateClients, airlines, hotelGroups, themes, durations, faqs, galleryPhotos, packages } from "@/lib/site-data";
import { DestinationCard } from "@/components/site/DestinationCard";
import { Section } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront,
};

const whyIcons = [Star, Wallet, MapPin, Globe2, ShieldCheck, Headphones];

const homeHeroBg =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=70";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { name: "description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh. Get a free trip quote." },
      { name: "keywords", content: "budget tour, budget travel, travel plan, tour package, honeymoon, mauritius, Maldives, africa, usa, uk, London, paris, Europe, germany, japan, china, goa, dubai, bali, Thailand, vietnam, wildlife, safari, expedition, vacation, luxury package, luxury, group tour, cruise, family, travel agent Indore, travel agent Chandigarh" },
      { property: "og:title", content: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { property: "og:description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh. Get a free trip quote." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = regions.slice(0, 3).flatMap((r) => r.destinations.slice(0, 3));

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={homeHeroBg} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/40" aria-hidden />
        <div className="container-page grid gap-10 py-20 text-primary-foreground md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Est. {brand.established} · Indore &amp; Chandigarh
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
              Plan your next<br />
              <span className="text-accent">unforgettable</span> journey
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-90 md:text-xl">
              Tailor-made domestic and international tours — from budget-friendly getaways to
              luxury escapes. Flights, hotels, visas, cruises and cars, all handled end to end.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/booking">Plan My Trip <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <Link to="/destinations">Explore Destinations</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-85">
              <span>✈️ 50+ countries covered</span>
              <span>⭐ 10+ years of trust</span>
              <span>🛎️ 24×7 WhatsApp support</span>
            </div>
          </div>

          {/* Quick booking widget */}
          <div className="rounded-3xl border border-white/15 bg-white/95 p-6 text-foreground shadow-brand backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Booking Request</h2>
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent">Quick quote</span>
            </div>
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const destination = String(fd.get("destination") || "");
                const duration = String(fd.get("duration") || "");
                const travellers = String(fd.get("travellers") || "");
                const url = `/booking?${new URLSearchParams({ destination, duration, travellers }).toString()}`;
                window.location.href = url;
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" name="destination" placeholder="e.g. Bali, Switzerland, Kerala" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label>Duration</Label>
                  <Select name="duration" defaultValue={durations[3]}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {durations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="travellers">Travellers</Label>
                  <Input id="travellers" name="travellers" type="number" min={1} max={200} defaultValue={2} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="date">Travel date</Label>
                  <Input id="date" name="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget / person (₹)</Label>
                  <Input id="budget" name="budget" type="number" min={0} placeholder="50000" />
                </div>
              </div>
              <Button type="submit" className="mt-1 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Trip Request
              </Button>
              <p className="text-center text-xs text-muted-foreground">100% Free Custom Quote · No Advance Payment Required</p>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section eyebrow="Why travel with us" title="A decade of taking care of every detail" subtitle="Ten years. Two offices. Thousands of happy trips across India and beyond.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            return (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SERVICES */}
      <Section eyebrow="Services" title="Everything travel, under one roof">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-card">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline"><Link to="/services">See all services</Link></Button>
        </div>
      </Section>

      {/* POPULAR DESTINATIONS */}
      <Section eyebrow="Popular destinations" title="Where would you like to wake up next?">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => <DestinationCard key={d.slug} {...d} />)}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline"><Link to="/destinations">Browse all destinations</Link></Button>
        </div>
      </Section>

      {/* THEMES TABS */}
      <Section eyebrow="Browse trips by theme" title="Find the trip that matches your vibe">
        <Tabs defaultValue="domestic">
          <TabsList>
            <TabsTrigger value="domestic">Domestic</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>
          {["domestic", "international"].map((k) => (
            <TabsContent key={k} value={k} className="mt-6">
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                  <a
                    key={t}
                    href={`/booking?destination=${encodeURIComponent(`${t} — ${k === "domestic" ? "India" : "International"}`)}`}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-accent hover:bg-accent/10"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-secondary/50">
        <Section eyebrow="Loved by travellers" title="What our guests are saying">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-4">
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      {/* CORPORATE + ALLIANCES */}
      <Section eyebrow="Trusted by" title="Corporates &amp; global partners">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Corporate clients</div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {corporateClients.map((c) => (
              <span key={c} className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-foreground/80">{c}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Airline alliances</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {airlines.map((a) => <span key={a} className="rounded-full border border-border px-3 py-1">{a}</span>)}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hotel partners</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {hotelGroups.map((h) => <span key={h} className="rounded-full border border-border px-3 py-1">{h}</span>)}
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURED PACKAGES */}
      <div className="bg-secondary/40">
        <Section eyebrow="Signature packages" title="Handpicked itineraries, ready to personalise" subtitle="Every package is fully customisable to your dates, budget and pace.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow">From {p.from}</div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-accent">{p.duration}</div>
                  <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.region}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline"><Link to="/packages">Browse all packages</Link></Button>
          </div>
        </Section>
      </div>

      {/* GALLERY PREVIEW */}
      <Section eyebrow="Gallery" title="Moments from the road">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {galleryPhotos.slice(0, 6).map((p) => (
            <Link key={p.src} to="/gallery" className="group relative aspect-square overflow-hidden rounded-xl">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline"><Link to="/gallery">See full gallery <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
      </Section>

      {/* FAQ */}
      <div className="bg-secondary/40">
        <Section eyebrow="FAQ" title="Frequently asked questions" subtitle="Everything you might want to know before you enquire.">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4 shadow-card">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold">Still have questions?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our travel desk in Indore &amp; Chandigarh answers within a few hours — 7 days a week.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/booking">Send enquiry</Link></Button>
                <Button asChild variant="outline"><a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* NEWSLETTER CTA */}

      <Section>
        <div className="brand-gradient overflow-hidden rounded-3xl px-6 py-12 text-primary-foreground shadow-brand md:px-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Ready when you are.</h2>
              <p className="mt-2 max-w-xl text-lg opacity-90">
                Tell us your dates and dream destination — our travel designers get back within a few hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/booking">Get a free quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <Link to="/contact">Visit our offices</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Silence unused import warnings when helpers get trimmed
void z;

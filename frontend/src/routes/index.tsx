import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { z } from "zod";
import {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront,
  Star, ShieldCheck, Wallet, Globe2, Headphones, MapPin, ArrowRight,
  Sparkles, CheckCircle2, Search, Calendar, UserCheck, Clock, Award,
  ChevronLeft, ChevronRight, Building2, PhoneCall, Check, MessageCircle,
  X, HelpCircle, ChevronDown
} from "lucide-react";
import { brand, regions, services, whyChooseUs, testimonials, corporateClients, airlines, hotelGroups, themes, durations, faqs, galleryPhotos, packages, officePhotos } from "@/lib/site-data";
import { DestinationCard } from "@/components/site/DestinationCard";
import { Section } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront,
};

const whyIcons = [Star, Wallet, MapPin, Globe2, ShieldCheck, Headphones];

const heroSlides = [
  {
    image: "/bali.jpeg",
    destination: "Bali — Bedugul & Tanah Lot",
    eyebrow: "Tropical Escapes",
    title: "Rice Terraces & Beach Escapes in Bali",
    tagline: "5 Nights packages from ₹29,999 · Bedugul, Tanah Lot sunset, ATV & Nusa Penida.",
  },
  {
    image: "/chennai cruise.jpeg",
    destination: "Cordelia Cruises — High Seas Voyage",
    eyebrow: "Luxury Ocean Cruise",
    title: "Unforgettable Ocean Sailing on Cordelia Cruises",
    tagline: "Exclusive deals from ₹34,843 · 2 nights ocean sailing, gourmet dining & deck party.",
  },
  {
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=80",
    destination: "Kashmir — Dal Lake & Gulmarg",
    eyebrow: "Paradise on Earth",
    title: "Chasing Snow & Serenity in Kashmir",
    tagline: "Custom packages from ₹21,499 · Shikara rides, Gondola tickets, houseboats & private drivers.",
  },
  {
    image: "/Turkey.jpeg",
    destination: "Turkey — Istanbul & Cappadocia",
    eyebrow: "Grand Discovery",
    title: "Hot Air Balloons & Bosphorus Nights in Turkey",
    tagline: "10 Nights package from ₹98,500 · Cappadocia ballooning, Pamukkale & Istanbul.",
  },
  {
    image: "/chardham-yatra-custom.jpg",
    destination: "Char Dham Yatra — Uttarakhand",
    eyebrow: "Spiritual Yatra",
    title: "Yamunotri, Gangotri, Kedarnath & Badrinath",
    tagline: "Complete Yatra packages from ₹19,999 · Escorted group tours & comfortable stays.",
  },
];

// Today's date for min attribute
const todayStr = new Date().toISOString().split("T")[0];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinayak Tours & Travel — Tailor-made journeys since 2014 | Indore & Chandigarh" },
      { name: "description", content: "Single stop shop for all your travel needs — domestic & international tours, honeymoon, MICE, cruises, flights, visas. From budget to luxury, solo to corporate. Offices in Indore & Chandigarh. Call +91 93006 55686." },
      { name: "keywords", content: "travel agent Indore, travel agent Chandigarh, budget tour, tour package, honeymoon, Maldives, Africa, USA, UK, London, Paris, Europe, Germany, Japan, China, Goa, Dubai, Bali, Thailand, Vietnam, wildlife, safari, cruise, family tour, MICE, Char Dham Yatra, fixed departure, group tour, luxury package" },
      { property: "og:title", content: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { property: "og:description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = useMemo(() => regions.slice(0, 3).flatMap((r) => r.destinations.slice(0, 3)), []);
  const [selectedTheme, setSelectedTheme] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<string>("tours");
  const [showConfidenceModal, setShowConfidenceModal] = useState(false);

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const activeSlideData = heroSlides[currentSlide];

  const filteredPackages = useMemo(() => {
    if (selectedTheme === "All") return packages.filter(p => !p.isFixed).slice(0, 6);
    return packages.filter((p) =>
      !p.isFixed && (
        p.title.toLowerCase().includes(selectedTheme.toLowerCase()) ||
        p.highlights.some((h) => h.toLowerCase().includes(selectedTheme.toLowerCase()))
      )
    ).slice(0, 6);
  }, [selectedTheme]);

  return (
    <div className="overflow-hidden">

      {/* CONFIDENCE MODAL */}
      {showConfidenceModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowConfidenceModal(false)}>
          <div className="relative bg-card rounded-3xl shadow-brand max-w-lg w-full p-8 border border-border" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowConfidenceModal(false)}
              className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full bg-secondary hover:bg-border transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 mb-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground">Why Trust Vinayak Tours?</h3>
                <p className="text-xs text-muted-foreground">10+ years · 2 real offices · 25,000+ travellers</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                "🏢 Two physical offices — Indore (M.P.) & Chandigarh — you can walk in any time",
                "📋 IRCTC authorized rail desk + IATA preferred airline partnerships",
                "💼 21+ years combined industry experience with both founders being global travellers",
                "📞 24×7 WhatsApp support — never feel alone at the airport or abroad",
                "💰 Transparent pricing — no hidden charges, no advance for itinerary",
                "🌍 50+ countries covered · 25,000+ happy travellers served",
                "🏨 Direct contracts with 40+ global hotel chains for best rates",
                "👨‍👩‍👧 Serving families, solo travellers, honeymooners, corporates & spiritual yatras",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                <Link to="/booking" onClick={() => setShowConfidenceModal(false)}>Plan My Tour</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden">

        {/* SLIDER BACKGROUND IMAGES */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.destination}
            className={`absolute inset-0 -z-20 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.destination}
              className="h-full w-full object-cover transition-transform duration-[6000ms] ease-out"
            />
          </div>
        ))}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/25 to-transparent" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-black/20" aria-hidden />

        <div className="container-page py-16 text-primary-foreground md:py-24 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-accent animate-pulse-subtle" />
                <span>{activeSlideData.destination}</span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl text-white">
                {activeSlideData.title.split(" in ")[0]} in <br />
                <span className="text-brand-gradient">{activeSlideData.title.split(" in ")[1] || "Paradise"}</span>
              </h1>

              <p className="mt-5 max-w-xl text-base opacity-90 md:text-xl font-medium leading-relaxed text-white/95">
                {activeSlideData.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brand font-extrabold text-base px-7 rounded-full">
                  <Link to="/booking">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Plan Your Tour
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 font-bold rounded-full">
                  <Link to="/packages">Browse All Packages</Link>
                </Button>
              </div>

              {/* Confused about agency? */}
              <button
                onClick={() => setShowConfidenceModal(true)}
                className="mt-5 inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold underline-offset-2 hover:underline transition-all"
              >
                <HelpCircle className="h-4 w-4" />
                Confused about choosing us? Read why 25,000+ trust us →
              </button>

              {/* Slider Navigation */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button onClick={prevSlide} aria-label="Previous Slide" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-accent hover:text-accent-foreground transition-all shadow">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={nextSlide} aria-label="Next Slide" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-accent hover:text-accent-foreground transition-all shadow">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {heroSlides.map((s, i) => (
                    <button
                      key={s.destination}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "w-8 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SEARCH CONSOLE */}
            <div className="rounded-3xl border border-white/20 bg-white/95 p-6 text-foreground shadow-brand backdrop-blur-xl">
              <div className="mb-4">
                <h2 className="text-base font-extrabold text-foreground">Plan Your Tour</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Your custom itinerary is just one conversation away</p>
              </div>

              {/* Tab Selector */}
              <div className="mb-5 flex rounded-2xl bg-secondary p-1">
                {[
                  { id: "tours", label: "Tours", icon: Compass },
                  { id: "flights", label: "Flights", icon: Plane },
                  { id: "hotels", label: "Stays", icon: Hotel },
                  { id: "visas", label: "Visas", icon: FileCheck2 },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${
                      activeTab === t.id
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <t.icon className="h-3.5 w-3.5" />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>

              <form
                className="grid gap-3.5"
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
                <div className="grid gap-1.5">
                  <Label htmlFor="dest-widget" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Where would you like to go?
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="dest-widget"
                      name="destination"
                      placeholder="e.g. Bali, Kashmir, Dubai, Switzerland"
                      className="pl-9 font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Duration</Label>
                    <Select name="duration" defaultValue={durations[3]}>
                      <SelectTrigger className="font-medium"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {durations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="travellers-widget" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Travellers
                    </Label>
                    <div className="relative">
                      <UserCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="travellers-widget"
                        name="travellers"
                        type="number"
                        min={1}
                        max={200}
                        defaultValue={2}
                        className="pl-9 font-medium"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="date-widget" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Travel Date
                    </Label>
                    <Input id="date-widget" name="date" type="date" min={todayStr} className="font-medium text-xs" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="budget-widget" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Approx Budget (₹)
                    </Label>
                    <Input id="budget-widget" name="budget" type="number" min={0} placeholder="e.g. 50000" className="font-medium" />
                  </div>
                </div>

                <Button type="submit" className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold text-sm py-5 shadow-md rounded-xl">
                  <Search className="mr-2 h-4 w-4" /> Plan My Journey
                </Button>

                <p className="text-center text-[11px] text-muted-foreground font-medium leading-relaxed">
                  Skip the planning stress. Tell us your needs, we'll build the journey.<br />
                  Your custom itinerary is just one conversation away.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY INTRO TICKER / STRIP */}
      <section className="bg-accent text-accent-foreground py-3 overflow-hidden border-b border-accent/20">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-xs font-bold uppercase tracking-widest">
          {[
            "✈️ Single Stop Shop — Train · Bus · Hotels · Flights · Cruises · Visas",
            "🌏 Domestic & International — 50+ Countries",
            "💎 Budget to Premium to Ultra Luxury — All Inventories",
            "👨‍👩‍👧 Solo · Couple · Family · Group · Corporate · MICE",
            "🕌 Char Dham & Do Dham Yatras",
            "🚌 Budget Bus/Train Tours — Short & Long Durations",
            "📅 Fixed Departures — Best & Economical Itineraries",
            "🤝 Trusted Vendors Across the Globe — Travel Hassle-Free",
            "📞 24×7 Dedicated Support — Airport · Abroad · Overnight",
            "🌴 Honeymoon · Weekend Getaways · Adventure · Wildlife Safaris",
          ].concat([
            "✈️ Single Stop Shop — Train · Bus · Hotels · Flights · Cruises · Visas",
            "🌏 Domestic & International — 50+ Countries",
            "💎 Budget to Premium to Ultra Luxury — All Inventories",
            "👨‍👩‍👧 Solo · Couple · Family · Group · Corporate · MICE",
            "🕌 Char Dham & Do Dham Yatras",
          ]).map((text, i) => (
            <span key={i} className="shrink-0">{text}</span>
          ))}
        </div>
      </section>

      {/* STATS & ACCREDITATION BAR */}
      <section className="bg-primary text-primary-foreground py-8 border-b border-white/10">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10+ Years", label: "Registered Travel Desk (Est. 2014)" },
            { value: "50+ Countries", label: "Domestic & Global Circuits" },
            { value: "25,000+", label: "Happy Travellers Served" },
            { value: "2 HQs", label: "Indore & Chandigarh Offices" },
          ].map((s) => (
            <div key={s.label} className="p-3">
              <div className="text-3xl md:text-4xl font-black text-accent">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm font-medium text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL OFFICE & TEAM SHOWCASE */}
      <Section
        eyebrow="Our physical offices"
        title="Real Offices in Indore & Chandigarh"
        subtitle="We aren't a phantom booking portal. Visit our travel desks or talk directly with our founders."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card">
              <img src={officePhotos.building} alt="Vinayak Tours & Travel Indore HQ" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="rounded-full bg-white/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold">Indore HQ Office</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card">
              <img src="/office-modern.png" alt="Vinayak Corporate Showcase" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="rounded-full bg-white/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold">Corporate Showcase</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card">
              <img src={officePhotos.workstations} alt="Chandigarh Branch Workstations" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="rounded-full bg-white/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold">Chandigarh Branch</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card">
              <img src={officePhotos.lounge} alt="Guest Lounge & Support Desk" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="rounded-full bg-white/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold">Guest Lounge</span>
              </div>
            </div>
          </div>

          {/* Details & Founder Cards */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-2xl font-bold text-foreground">Meet Your Travel Designers</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>Qualified, trained & experienced professionals with 21+ years of industry experience</strong> — catering to your personalized travel needs with your budget and preferences in mind. Both are passionate Global Travelers, and with their onsite experiences and keen observations, your journey will certainly be exceptional!
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Founded in 2014, Vinayak Tours & Travel has grown into a trusted two-city travel operation with preferred airline rates, dedicated ground logistics, and 24×7 WhatsApp support.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                  <div className="font-extrabold text-base text-foreground">{brand.phones[0].name}</div>
                  <div className="text-xs text-accent font-semibold mt-0.5">Indore HQ Lead</div>
                  <a href={`tel:${brand.phones[0].tel}`} className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                    <PhoneCall className="h-3.5 w-3.5 text-accent" /> {brand.phones[0].number}
                  </a>
                </div>

                <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                  <div className="font-extrabold text-base text-foreground">{brand.phones[1].name}</div>
                  <div className="text-xs text-accent font-semibold mt-0.5">Chandigarh Lead</div>
                  <a href={`tel:${brand.phones[1].tel}`} className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                    <PhoneCall className="h-3.5 w-3.5 text-accent" /> {brand.phones[1].number}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-accent/10 border border-accent/30 p-6 flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-foreground">100% Authorized & Transparent</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  IRCTC authorized rail ticketing desk, IATA preferred airline partnerships, and direct hotel contract rates across 40+ chains worldwide. 24×7 support — we're always there, at airports, abroad, or at overnight hours.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowConfidenceModal(true)}
              className="w-full rounded-2xl border border-dashed border-accent/50 bg-accent/5 hover:bg-accent/10 p-4 text-left flex items-center gap-3 transition-all"
            >
              <HelpCircle className="h-5 w-5 text-accent shrink-0" />
              <div>
                <div className="text-sm font-bold text-foreground">Confused about packages or doubtful about choosing us?</div>
                <div className="text-xs text-muted-foreground mt-0.5">Click here — we'll build your confidence with facts & proof</div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto shrink-0 -rotate-90" />
            </button>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section
        eyebrow="Why Travel With Us"
        title="A decade of taking care of every detail"
        subtitle="Ten years. Two home offices in Indore & Chandigarh. Thousands of happy guests."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            return (
              <div
                key={w.title}
                className="group card-hover rounded-3xl border border-border bg-card p-7 shadow-card relative overflow-hidden"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{w.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section eyebrow="Our Services" title="Everything travel, under one roof">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group card-hover rounded-3xl border border-border bg-card p-6 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white shadow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center text-xs font-extrabold uppercase text-accent tracking-wider">
                  <span>Explore Service →</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full font-bold">
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </Section>

      {/* POPULAR DESTINATIONS GRID */}
      <Section eyebrow="Prime Destinations" title="Where would you like to wake up next?">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => (
            <DestinationCard key={d.slug} {...d} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 shadow">
            <Link to="/destinations">Browse All 50+ Destinations &rarr;</Link>
          </Button>
        </div>
      </Section>

      {/* SIGNATURE PACKAGES */}
      <div className="bg-secondary/40">
        <Section
          eyebrow="Handpicked Holidays"
          title="Signature Tour Packages"
          subtitle="Filter by theme or explore fully customisable itineraries curated by our travel designers."
        >
          {/* Theme Chips Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Kashmir", "Bali", "Kerala", "Luxury", "Adventure"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTheme(t)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedTheme === t
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((p) => (
              <article key={p.slug} className="group card-hover overflow-hidden rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute left-3 top-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-bold text-white shadow">
                      From {p.from}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{p.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-accent" /> {p.region}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-xs text-foreground/80 border-t border-border pt-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2">
                  <Button asChild size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold">
                    <Link to="/booking" search={{ destination: p.title }}>Plan This Trip</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold">
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                        `Hi Vinayak Tours, I am interested in the package: ${p.title} (${p.from}). Please send details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-1 shrink-0" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full font-bold">
              <Link to="/packages">View All Tour Packages</Link>
            </Button>
          </div>
        </Section>
      </div>

      {/* TESTIMONIALS — condensed */}
      <Section eyebrow="Loved By Travellers" title="What our guests are saying">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="card-hover rounded-3xl border border-border bg-card p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="mb-3 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/90 italic">"{t.quote}"</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full brand-gradient text-xs font-black text-white">
                  {t.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-accent font-semibold">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline" size="sm" className="rounded-full font-semibold">
            <Link to="/about">Read More Reviews →</Link>
          </Button>
        </div>
      </Section>

      {/* CORPORATE & ALLIANCES */}
      <div className="bg-secondary/50">
        <Section eyebrow="Trusted Partners" title="Corporates &amp; Global Alliances">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:col-span-1">
              <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Corporate Clients</div>
              <div className="flex flex-wrap gap-2">
                {corporateClients.map((c) => (
                  <span key={c} className="rounded-xl bg-secondary border border-border px-3 py-1.5 text-xs font-bold text-foreground">{c}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Preferred Airlines</div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {airlines.map((a) => <span key={a} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5">{a}</span>)}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">Hotel Groups</div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {hotelGroups.slice(0, 10).map((h) => <span key={h} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5">{h}</span>)}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* FINAL CTA */}
      <Section>
        <div className="brand-gradient overflow-hidden rounded-3xl px-8 py-14 text-primary-foreground shadow-brand md:px-16 md:py-20 relative">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center relative z-10">
            <div>
              <h2 className="text-3xl font-black md:text-5xl tracking-tight">Ready when you are.</h2>
              <p className="mt-3 max-w-xl text-base md:text-lg opacity-90 leading-relaxed font-normal">
                Skip the planning stress — tell us your dream destination and travel dates. Our experts will send a custom itinerary with transparent pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-black text-base px-8 shadow-md">
                <Link to="/booking">Plan Your Tour</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 font-bold">
                <Link to="/contact">Visit Offices</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

void z;

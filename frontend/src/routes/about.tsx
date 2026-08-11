import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { brand, officePhotos } from "@/lib/site-data";
import { Building2, Users2, Award, Globe2, MapPin, Home, Landmark, GraduationCap, BadgeCheck, Clock3, PhoneCall, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Vinayak Tours & Travel" },
      { name: "description", content: "Vinayak Tours & Travel has been designing tailor-made journeys since 2014 from offices in Indore and Chandigarh. Qualified, trained and experienced travel professionals with 21+ years of industry expertise." },
      { name: "keywords", content: "Vinayak Tours Travel Indore, Vinayak Tours Travel Chandigarh, travel agent Indore, travel agent Chandigarh, about vinayak tours" },
      { property: "og:title", content: "About Vinayak Tours & Travel" },
      { property: "og:description", content: "10+ years of designing budget-to-luxury domestic and international journeys." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: officePhotos.building },
      { name: "twitter:image", content: officePhotos.building },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const groupCompanies = [
  {
    key: "enterprises",
    icon: Building2,
    title: "Vinayak Enterprises",
    tagline: "Interstate Retail & Wholesale Suppliers",
    desc: "Interstate retail and wholesale suppliers of ready-to-eat food items, namkeens, pulses, nuts and allied products. We supply to retailers, distributors and institutions across Central India.",
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    badge: "Food & FMCG",
  },
  {
    key: "realestate",
    icon: Home,
    title: "Vinayak Real Estate",
    tagline: "Properties Buy / Sell & Lease",
    desc: "Comprehensive real estate services covering residential, commercial, agricultural and industrial properties — including lease transactions — in Indore and surrounding areas, as well as the Northern Tricity (Chandigarh, Panchkula, Himachal Pradesh, Mohali).",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    badge: "Real Estate",
  },
  {
    key: "loans",
    icon: Landmark,
    title: "Vinayak Loans DSA",
    tagline: "Your Single Stop Shop for All Loan Needs",
    desc: "Agency alliance with all major government, semi-government, private, and NBFC banks. We offer a comprehensive range of loan products: Personal Loan, Business Loan, Working Capital, Institutional Finance, Car Loans, Gold Loan and Agricultural Loan.",
    color: "bg-green-500/10 text-green-600 border-green-200",
    badge: "Financial Services",
  },
  {
    key: "tutors",
    icon: GraduationCap,
    title: "Vinayak Professional Tutors",
    tagline: "Expert Home Tuition for School & College Students",
    desc: "Professional tutoring services for school students and college graduates across all major boards and streams — CBSE, ICSE, State Board, +1/+2 Commerce, BA, BCom, BBA, MBA. Personalized learning plans with experienced faculty.",
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    badge: "Education",
  },
];

function About() {
  const [activeCompany, setActiveCompany] = useState("enterprises");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeComp = groupCompanies.find(c => c.key === activeCompany)!;
  const ActiveIcon = activeComp.icon;

  return (
    <div>
      <PageHero
        eyebrow={`Established ${brand.established}`}
        title="A decade of designing journeys that feel personal"
        subtitle="From Indore and Chandigarh, our travel designers craft tailor-made experiences — budget to luxury — for families, honeymooners, solo explorers and corporates."
        image={officePhotos.building}
      />

      {/* OUR STORY */}
      <div id="profile" className="scroll-mt-24">
        <Section eyebrow="Our story" title="From a two-desk office to thousands of trips">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Vinayak Tours & Travel was founded in 2014 with a simple belief: a great trip is one where
                every moving part — flight, transfer, hotel, guide, sim card — is quietly handled so the
                traveller can just enjoy. Over ten years we've grown from a single desk in Indore into a
                two-city operation with a dedicated team, corporate contracts and travellers on every continent.
              </p>
              <p>
                We're a full-service travel group covering ticketing, tours and corporate travel. Our partnerships
                with leading airlines and hotel groups let us offer preferred rates and real flexibility — whether
                you're chasing the Northern Lights, planning a corporate offsite for 200, or arranging a
                Char Dham Yatra for your family.
              </p>
              <p>
                From budget bus tours of short and long durations to premium luxury escapes — solo trips,
                couple getaways, family tours, group tours, corporate visits, leisure trips, honeymoon packages,
                Char Dham & Do Dham Yatras, MICE events, and fixed departure group tours — we have an inventory
                for every taste, timeline and pocket. Our trusted vendors are based all over the globe, so you
                can book and travel hassle-free.
              </p>
              <p>
                We don't want to serve you just once. Rather, we want you to give us repeated travel opportunities
                so you can recommend us to your loved ones too. We firmly believe that our rates and service are
                unmatched — try once, and you'll always come back!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Building photo with VINAYAK overlay */}
              <div className="relative col-span-2 h-64 w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src={officePhotos.building}
                  alt="Vinayak Tours & Travel Head Office Building, Indore"
                  className="h-full w-full object-cover"
                />
                {/* Overlay to brand the building */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="inline-block rounded-xl bg-accent px-4 py-1.5 text-sm font-black text-accent-foreground shadow-lg tracking-wide">
                    VINAYAK TOURS & TRAVEL
                  </div>
                  <p className="mt-1 text-xs text-white/80">103, TREASURE VIHAR, Bijalpur, Indore (M.P.)</p>
                </div>
              </div>
              <img src={officePhotos.lounge} alt="Reception lounge" className="h-40 w-full rounded-2xl object-cover shadow-card" />
              <img src={officePhotos.workstations} alt="Chandigarh office workstations" className="h-40 w-full rounded-2xl object-cover shadow-card" />
            </div>
          </div>
        </Section>
      </div>

      {/* LEADERSHIP */}
      <div id="leadership" className="scroll-mt-24 bg-secondary/50">
        <Section eyebrow="Leadership" title="Meet the people behind your itinerary">
          <p className="max-w-2xl text-base text-muted-foreground mb-8">
            Qualified, trained & experienced professionals with 21+ years of industry experience, catering to
            your personalized travel needs keeping in mind your budget and preferences. They both enjoy being
            Global Travelers, and with their onsite tourism experiences and minute observations, your package
            experience will certainly be <span className="font-bold text-accent">Exceptional!!</span>
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Ajay Rajpal", city: "Chandigarh Office", phone: brand.phones[1].number, tel: brand.phones[1].tel, role: "Chandigarh Lead" },
              { name: "Honey Rajpal", city: "Indore HQ", phone: brand.phones[0].number, tel: brand.phones[0].tel, role: "Indore HQ Lead" },
            ].map((p) => (
              <div key={p.name} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full brand-gradient text-2xl font-black text-white">
                  {p.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm font-semibold text-accent">{p.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.city}</p>
                  <a href={`tel:${p.tel}`} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
                    <PhoneCall className="h-3.5 w-3.5" /> {p.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Two Bases & 24x7 Support */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 flex items-start gap-4">
              <MapPin className="h-7 w-7 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-foreground">Two Strategic Bases</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Having 2 bases — one in <strong>Central India (Indore)</strong> and another in <strong>Northern India (Chandigarh)</strong> — with the mindset to serve better and provide the best itineraries to guests with competitive rates.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 flex items-start gap-4">
              <Clock3 className="h-7 w-7 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-foreground">24×7 Dedicated Support</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Don't ever feel alone — wondering who'll be there to assist you at the airport, abroad, or during overnight hours. We have a <strong>dedicated team available 24×7</strong> for your complete support throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* GROUP OF COMPANIES */}
      <div id="group-of-companies" className="scroll-mt-24">
        <Section eyebrow="Group of Companies" title="One family — many ways to serve you">
          <p className="max-w-3xl text-lg text-muted-foreground mb-8">
            The Vinayak family extends beyond travel. Here are our group businesses, each dedicated to
            delivering excellence in their respective domains.
          </p>

          <div className="grid gap-0 lg:grid-cols-[260px_1fr] rounded-3xl border border-border overflow-hidden shadow-card">
            {/* Vertical Tab List */}
            <div className="bg-secondary/60 border-r border-border">
              {groupCompanies.map((c) => {
                const Icon = c.icon;
                const isActive = c.key === activeCompany;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActiveCompany(c.key)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left border-b border-border/50 last:border-b-0 transition-all ${
                      isActive
                        ? "bg-card border-l-4 border-l-accent text-foreground font-bold shadow-sm"
                        : "text-muted-foreground hover:bg-card/60 hover:text-foreground border-l-4 border-l-transparent"
                    }`}
                  >
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${c.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{c.title.replace("Vinayak ", "")}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{c.badge}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-card p-8">
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold border ${activeComp.color} mb-4`}>
                <ActiveIcon className="h-3.5 w-3.5" />
                {activeComp.badge}
              </div>
              <h3 className="text-2xl font-black text-foreground">{activeComp.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{activeComp.tagline}</p>
              <p className="mt-4 text-base text-foreground/80 leading-relaxed">{activeComp.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <BadgeCheck className="h-4 w-4 text-accent" />
                <span>Part of the Vinayak Group — trusted since 2014</span>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* OFFICES */}
      <div id="offices" className="scroll-mt-24 bg-secondary/50">
        <Section eyebrow="Locations" title="Our Offices in Indore & Chandigarh">
          <div className="grid gap-6 md:grid-cols-2">
            {brand.offices.map((office: { city: string; address: string; contact: string }) => (
              <div key={office.city} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{office.city}</h3>
                    <p className="text-xs text-muted-foreground">{office.contact}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* STATS */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Years serving travellers", value: "10+" },
            { label: "Countries covered", value: "50+" },
            { label: "Corporate clients", value: "25+" },
            { label: "Cities we operate in", value: "2 HQs" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-4xl font-black text-brand-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-accent" /> Preferred partner to airlines & global hotel groups.
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" /> IRCTC authorized ticketing & IATA preferred partnerships.
          </div>
        </div>
      </Section>
    </div>
  );
}

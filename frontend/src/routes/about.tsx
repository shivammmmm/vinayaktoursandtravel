import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { brand, officePhotos } from "@/lib/site-data";
import { Building2, Users2, Award, Globe2, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Vinayak Tours & Travel" },
      { name: "description", content: "Vinayak Tours & Travel has been designing tailor-made journeys since 2014 from offices in Indore and Chandigarh." },
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

function About() {
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

  return (
    <div>
      <PageHero
        eyebrow={`Established ${brand.established}`}
        title="A decade of designing journeys that feel personal"
        subtitle="From Indore and Chandigarh, our travel designers craft tailor-made experiences — budget to luxury — for families, honeymooners, solo explorers and corporates."
        image={officePhotos.building}
      />

      <div id="profile" className="scroll-mt-24">
        <Section eyebrow="Our story" title="From a two-desk office to thousands of trips">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                Vinayak Tours &amp; Travel was founded in 2014 with a simple belief: a great trip
                is one where every moving part — flight, transfer, hotel, guide, sim card — is quietly
                handled so the traveller can just enjoy. Over ten years we've grown from a single desk
                in Indore into a two-city operation with a dedicated team, corporate contracts and
                travellers on every continent.
              </p>
              <p>
                We're a full-service travel group covering ticketing, tours and corporate travel. Our
                partnerships with leading airlines and hotel groups let us offer preferred rates and
                real flexibility — whether you're chasing the Northern Lights, planning a corporate
                offsite for 200, or arranging a Char Dham Yatra for your family.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={officePhotos.exterior} alt="Our office building" className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-card" />
              <img src={officePhotos.lounge} alt="Reception lounge" className="h-40 w-full rounded-2xl object-cover shadow-card" />
              <img src={officePhotos.workstations} alt="Workstations" className="h-40 w-full rounded-2xl object-cover shadow-card" />
            </div>
          </div>
        </Section>
      </div>

      <Section eyebrow="Group of Companies" title="One travel group, every service you need">
        <p className="max-w-3xl text-lg text-muted-foreground">
          Vinayak Tours &amp; Travel operates as a broader travel group covering three closely-connected practices:
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: Building2, title: "Ticketing", desc: "Domestic & international air, rail and bus ticketing with 24×7 reissue support." },
            { icon: Globe2, title: "Tours", desc: "Fixed-departure group tours and fully customised leisure itineraries across 50+ countries." },
            { icon: Users2, title: "Corporate Travel", desc: "Managed travel programmes, MICE and interview logistics for enterprise clients." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div id="leadership" className="scroll-mt-24 bg-secondary/50">
        <Section eyebrow="Leadership" title="Meet the people behind your itinerary">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Ajay Rajpal", city: "Chandigarh Office", phone: brand.phones[1].number },
              { name: "Honey Rajpal", city: "Indore Office", phone: brand.phones[0].number },
            ].map((p) => (
              <div key={p.name} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full brand-gradient text-2xl font-black text-white">
                  {p.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.city}</p>
                  <a href={`tel:${p.phone.replace(/[^0-9+]/g, "")}`} className="mt-2 inline-block text-sm font-semibold text-accent">
                    {p.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div id="offices" className="scroll-mt-24">
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
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <Award className="h-4 w-4 text-accent" /> Preferred partner to airlines &amp; global hotel groups.
        </div>
      </Section>
    </div>
  );
}

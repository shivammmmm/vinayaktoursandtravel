import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { services, airlines, hotelGroups } from "@/lib/site-data";
import {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, Plane, Ship, FileCheck2, Hotel, Users, TrainFront,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tours, Flights, Visas, Cruises, MICE | Vinayak" },
      { name: "description", content: "Domestic & international tour packages, flight ticketing, cruises, visa consultation, hotel reservations, MICE, rail & bus booking — under one roof." },
      { property: "og:title", content: "Vinayak Tours & Travel — Services" },
      { property: "og:description", content: "Tour packages, flights, visas, cruises, MICE and more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Everything travel, done end to end"
        subtitle="From visa consultation to VIP airport transfers — one team, one point of contact, seven services."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0 text-accent">
                    <Link to="/booking">Enquire <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="bg-secondary/50">
        <Section eyebrow="Alliances" title="Preferred partners across the sky and on the ground">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Airline alliances</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {airlines.map((a) => <span key={a} className="rounded-full border border-border px-3 py-1">{a}</span>)}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hotel groups</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {hotelGroups.map((h) => <span key={h} className="rounded-full border border-border px-3 py-1">{h}</span>)}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

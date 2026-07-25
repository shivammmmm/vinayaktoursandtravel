import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { regions } from "@/lib/site-data";
import { DestinationCard } from "@/components/site/DestinationCard";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Prime Destinations — India, Asia, Europe, Africa & More | Vinayak" },
      { name: "description", content: "Explore our tour packages across India, Asia, Europe, Africa, Americas, Oceania and even Antarctica. Tailor-made journeys from Vinayak Tours & Travel." },
      { property: "og:title", content: "Prime Destinations | Vinayak Tours & Travel" },
      { property: "og:description", content: "50+ countries, curated destination packages, budget to luxury." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <div>
      <PageHero
        eyebrow="Prime destinations"
        title="Fifty countries. One team of local experts."
        subtitle="From weekend getaways within India to expedition cruises through Antarctica — pick your next chapter."
      />
      <Section>
        <div className="space-y-16">
          {regions.map((r) => (
            <div key={r.key} id={r.key}>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{r.label}</h2>
                <span className="text-sm text-muted-foreground">{r.destinations.length} destinations</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {r.destinations.map((d) => <DestinationCard key={d.slug} {...d} />)}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

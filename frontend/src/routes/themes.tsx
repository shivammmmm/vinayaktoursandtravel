import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { themes } from "@/lib/site-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Church, PawPrint, Mountain, Landmark, Users, Heart, Compass,
  Sparkles, Calendar, Waves, Ship, Fish, Wind,
} from "lucide-react";

const themeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Religious": Church,
  "Wildlife": PawPrint,
  "Climbing Expeditions": Mountain,
  "Cultural & Heritage": Landmark,
  "Family Tour": Users,
  "Group Tours": Users,
  "Solo Trip": Compass,
  "Honeymooners": Heart,
  "Weekend Tours": Calendar,
  "Fixed Departures": Calendar,
  "Beach Tours": Waves,
  "Cruise Tours": Ship,
  "Underwater Expeditions": Fish,
};

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Browse Tours by Theme — Honeymoon, Wildlife, Cruise & More" },
      { name: "description", content: "Find tours by theme — religious, wildlife, honeymoon, weekend, beach, cruise, fixed-departure and more, across domestic and international destinations." },
      { property: "og:title", content: "Browse Tours by Theme | Vinayak Tours & Travel" },
      { property: "og:description", content: "Honeymoon, family, wildlife, cruise, religious and more — domestic & international." },
      { property: "og:url", content: "/themes" },
    ],
    links: [{ rel: "canonical", href: "/themes" }],
  }),
  component: ThemesPage,
});

function ThemesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Trip themes"
        title="Pick the trip that matches your mood"
        subtitle="Two big buckets — domestic and international — and thirteen themes inside each."
      />
      <Section>
        <Tabs defaultValue="domestic">
          <TabsList>
            <TabsTrigger value="domestic">Domestic</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>
          {["domestic", "international"].map((kind) => (
            <TabsContent key={kind} value={kind} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {themes.map((t) => {
                  const Icon = themeIcons[t] ?? Sparkles;
                  const label = `${t} — ${kind === "domestic" ? "India" : "International"}`;
                  return (
                    <a
                      key={t}
                      href={`/booking?destination=${encodeURIComponent(label)}`}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-accent hover:shadow-card"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-bold">{t}</div>
                        <div className="text-sm text-muted-foreground">
                          {kind === "domestic" ? "Across India" : "Across the world"} · Fully customisable
                        </div>
                        <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 transition group-hover:opacity-100">
                          Plan this trip →
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </div>
  );
}

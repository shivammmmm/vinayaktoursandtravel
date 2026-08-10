import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/site/PageHero";
import { galleryPhotos, galleryLocalVideos, galleryDeals } from "@/lib/site-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vinayak Tours & Travel" },
      { name: "description", content: "Photos and videos from Vinayak Tours & Travel trips across India and 50+ countries — beaches, mountains, cityscapes, heritage and expeditions." },
      { property: "og:title", content: "Travel Gallery | Vinayak Tours & Travel" },
      { property: "og:description", content: "A visual journey through our recent tours and destinations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(galleryPhotos.map((p) => p.cat)))], []);
  const [active, setActive] = useState("All");
  const [preview, setPreview] = useState<string | null>(null);
  const photos = active === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.cat === active);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the road"
        subtitle="A visual journey through our recent tours — India, Asia, Europe, Africa and beyond."
        image={galleryPhotos[0].src}
      />

      <Section>
        <Tabs defaultValue="photos">
          <TabsList>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-6">
            <div className="mb-6 flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    active === c
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-card hover:border-accent hover:bg-accent/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((p) => (
                <button
                  key={p.src}
                  onClick={() => setPreview(p.src)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/90">{p.cat}</div>
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryLocalVideos.map((v) => (
                <div key={v.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <div className="aspect-video">
                    <video
                      src={v.src}
                      title={v.title}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <div className="p-4 text-sm font-semibold">{v.title}</div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryDeals.map((d) => (
                <button
                  key={d.src}
                  onClick={() => setPreview(d.src)}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <img
                    src={d.src}
                    alt={d.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto block max-h-[85vh] w-auto max-w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

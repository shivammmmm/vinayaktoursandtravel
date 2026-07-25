import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/PageHero";
import { brand } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vinayak Tours & Travel (Indore & Chandigarh)" },
      { name: "description", content: "Visit our offices in Indore and Chandigarh, or reach us on WhatsApp, phone or email." },
      { property: "og:title", content: "Contact Vinayak Tours & Travel" },
      { property: "og:description", content: "Offices in Indore and Chandigarh. WhatsApp, call or email." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 400));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thanks — we'll get back to you shortly.");
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real travel designer"
        subtitle="Prefer voice? Call directly. Prefer chat? WhatsApp works round the clock."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-6">
            {brand.offices.map((o, i) => (
              <div key={o.city} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold">{o.city}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{o.address}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                      <a
                        href={`tel:${brand.phones[i].tel}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 hover:bg-secondary"
                      >
                        <Phone className="h-3.5 w-3.5 text-accent" /> {brand.phones[i].number}
                      </a>
                      <a
                        href={`https://wa.me/${brand.whatsapp}`}
                        target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 hover:bg-secondary"
                      >
                        <MessageCircle className="h-3.5 w-3.5 text-accent" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5 aspect-[16/9] overflow-hidden rounded-xl border border-border">
                  <iframe
                    title={`Map — ${o.city}`}
                    src={`https://www.google.com/maps?q=${o.mapQuery}&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="grid gap-3 text-sm">
                {brand.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="inline-flex items-center gap-2 hover:text-accent">
                    <Mail className="h-4 w-4 text-accent" /> {e}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We reply within a few working hours.</p>
            <form className="mt-6 grid gap-4" onSubmit={submit}>
              <div className="grid gap-2">
                <Label htmlFor="c-name">Full name</Label>
                <Input id="c-name" name="name" required maxLength={100} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="c-mobile">Mobile</Label>
                  <Input id="c-mobile" name="mobile" required inputMode="tel" pattern="[0-9+ -]{7,15}" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" name="email" required type="email" maxLength={200} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" name="message" required maxLength={1000} rows={5} />
              </div>
              <Button type="submit" disabled={sending} className="bg-accent text-accent-foreground hover:bg-accent/90">
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero, Section } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { allDestinations, durations, brand } from "@/lib/site-data";
import { CheckCircle2, ShieldCheck, Loader2, Send, MessageCircle, MapPin } from "lucide-react";

const searchSchema = z.object({
  destination: z.string().optional(),
  duration: z.string().optional(),
  travellers: z.coerce.number().optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Plan Your Tour — Vinayak Tours & Travel" },
      { name: "description", content: "Your custom itinerary is just one conversation away. Tell us your destination, dates and travellers — our travel designers will craft a personalized plan." },
      { property: "og:title", content: "Plan Your Tour | Vinayak Tours & Travel" },
      { property: "og:description", content: "Skip the planning stress. Tell us your needs, we'll build the journey." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: Booking,
});

// Today's date in YYYY-MM-DD format for min date
const todayStr = new Date().toISOString().split("T")[0];

type Form = {
  destination: string;
  destinationCustom: string;
  duration: string;
  travelDate: string;
  adults: number;
  children: number;
  budget: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
  remarks: string;
  notes: string;
};

function Booking() {
  const search = Route.useSearch();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitting, setSubmitting] = useState(false);
  const [enquiryId, setEnquiryId] = useState<string | null>(null);
  const [form, setForm] = useState<Form>({
    destination: search.destination ?? "",
    destinationCustom: "",
    duration: search.duration ?? durations[3],
    travelDate: "",
    adults: search.travellers ?? 2,
    children: 0,
    budget: "",
    name: "",
    mobile: "",
    email: "",
    city: "",
    remarks: "",
    notes: "",
  });

  useEffect(() => {
    if (search.destination && form.destination !== search.destination) {
      setForm((f) => ({ ...f, destination: search.destination as string }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.destination]);

  const travellers = form.adults + form.children;
  const effectiveDestination = form.destination === "__others__" ? form.destinationCustom : form.destination;

  const update = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  function validateStep(s: 1 | 2 | 3): string | null {
    if (s === 1) {
      if (!effectiveDestination.trim()) return "Please select or enter a destination.";
      if (!form.duration) return "Please pick a trip duration.";
      if (travellers < 1) return "At least one traveller is required.";
    }
    if (s === 2) {
      if (!form.name.trim()) return "Please add your full name.";
      if (!/^[0-9+ -]{7,15}$/.test(form.mobile)) return "Please add a valid mobile number.";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please add a valid email address.";
      if (!form.city.trim()) return "Which city are you travelling from?";
    }
    return null;
  }

  function next() {
    const err = validateStep(step as 1 | 2 | 3);
    if (err) { toast.error(err); return; }
    setStep((s) => (s < 4 ? ((s + 1) as 1 | 2 | 3 | 4) : s));
  }

  async function submitEnquiry() {
    setSubmitting(true);
    console.info("[Vinayak enquiry]", { ...form, destination: effectiveDestination });
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    const id = "VTT" + Math.random().toString(36).slice(2, 8).toUpperCase();

    // Save to localStorage for Admin Panel
    try {
      const existing = JSON.parse(localStorage.getItem("vtt_enquiries") || "[]");
      const newEnquiry = {
        ...form,
        destination: effectiveDestination,
        id,
        date: new Date().toISOString(),
        status: "New",
      };
      localStorage.setItem("vtt_enquiries", JSON.stringify([newEnquiry, ...existing]));
    } catch (e) {
      console.error("Failed to save enquiry", e);
    }

    setEnquiryId(id);
    setStep(4);
    toast.success("Enquiry received — our team will reach out shortly!");
  }

  const destinationOptions = useMemo(
    () => allDestinations.map((d) => d.name).sort(),
    [],
  );

  const waMessage = encodeURIComponent(
    `Hi Vinayak Tours & Travel, I'd like to plan a trip to ${effectiveDestination || "a destination"} (${form.duration}) for ${travellers} traveller(s). Please share a custom itinerary.`,
  );

  return (
    <div>
      <PageHero
        eyebrow="Plan your trip"
        title="Your custom itinerary is just one conversation away"
        subtitle="Skip the planning stress. Tell us your needs, we'll build the journey."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* MAIN CARD */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <Stepper step={step} />

            {step === 1 && (
              <div className="mt-8 grid gap-5">
                <h2 className="text-xl font-bold">Trip details</h2>

                {/* Destination */}
                <div className="grid gap-2">
                  <Label htmlFor="destination">Where would you like to go?</Label>
                  <Select
                    value={form.destination}
                    onValueChange={(v) => update("destination", v)}
                  >
                    <SelectTrigger id="destination">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                        <SelectValue placeholder="Select a destination…" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="max-h-64">
                      {destinationOptions.map((d) => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                      <SelectItem value="__others__">Others (type below)</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.destination === "__others__" && (
                    <Input
                      id="destinationCustom"
                      value={form.destinationCustom}
                      onChange={(e) => update("destinationCustom", e.target.value)}
                      placeholder="Type your destination here…"
                      className="mt-1"
                      autoFocus
                    />
                  )}
                  <p className="text-xs text-muted-foreground">
                    Can't find it? Select "Others" and type any city or country — we'll build a custom package.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label>Duration</Label>
                    <Select value={form.duration} onValueChange={(v) => update("duration", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {durations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="travelDate">Preferred travel date</Label>
                    <Input
                      id="travelDate"
                      type="date"
                      min={todayStr}
                      value={form.travelDate}
                      onChange={(e) => update("travelDate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="adults">Adults</Label>
                    <Input
                      id="adults"
                      type="number"
                      min={1}
                      max={200}
                      value={form.adults}
                      onChange={(e) => update("adults", Math.max(1, Number(e.target.value) || 1))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="children">Children</Label>
                    <Input
                      id="children"
                      type="number"
                      min={0}
                      max={50}
                      value={form.children}
                      onChange={(e) => update("children", Math.max(0, Number(e.target.value) || 0))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="budget">Approx. budget / person (optional)</Label>
                    <Input
                      id="budget"
                      placeholder="e.g. ₹45,000 or flexible"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                    />
                  </div>
                </div>

                {/* Remarks — blank horizontal row between Adults and Continue */}
                <div className="grid gap-2 border-t border-border pt-4">
                  <Label htmlFor="remarks">Special remarks / requirements for your tour package</Label>
                  <Textarea
                    id="remarks"
                    placeholder="e.g. vegetarian meals, wheelchair access, anniversary surprise, specific hotel preferences, any activity you definitely want included…"
                    value={form.remarks}
                    onChange={(e) => update("remarks", e.target.value)}
                    rows={3}
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground">Share anything that'll help us personalise your journey better.</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-8 grid gap-5">
                <h2 className="text-xl font-bold">Your details</h2>
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full name</Label>
                  <Input id="fullname" required maxLength={100} value={form.name} onChange={(e) => update("name", e.target.value)} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="mobile">Mobile</Label>
                    <Input id="mobile" required inputMode="tel" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">City you're travelling from</Label>
                  <Input id="city" required value={form.city} onChange={(e) => update("city", e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Anything else? (dietary needs, occasions, preferences)</Label>
                  <Textarea id="notes" maxLength={1000} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 grid gap-5">
                <h2 className="text-xl font-bold">Review & send enquiry</h2>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm">
                  <ul className="grid gap-2">
                    <Row label="Destination" value={effectiveDestination} />
                    <Row label="Duration" value={form.duration} />
                    {form.travelDate && <Row label="Travel date" value={new Date(form.travelDate).toDateString()} />}
                    <Row label="Travellers" value={`${form.adults} adult${form.adults > 1 ? "s" : ""}${form.children ? ` + ${form.children} child` : ""}`} />
                    {form.budget && <Row label="Budget / person" value={form.budget} />}
                    <Row label="Name" value={form.name} />
                    <Row label="Contact" value={`${form.mobile} · ${form.email}`} />
                    <Row label="From" value={form.city} />
                    {form.remarks && <Row label="Remarks" value={form.remarks} />}
                    {form.notes && <Row label="Notes" value={form.notes} />}
                  </ul>
                </div>

                <div className="flex items-start gap-2 rounded-xl bg-accent/10 p-3 text-xs text-foreground/80">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <strong>No advance payment</strong> is required to receive your itinerary. Once you approve, our team will share transparent payment terms.
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button onClick={submitEnquiry} disabled={submitting} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : <><Send className="mr-2 h-4 w-4" />Send enquiry</>}
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`https://wa.me/${brand.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> Send via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="mt-8 grid gap-4 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h2 className="text-2xl font-black">Enquiry received!</h2>
                <p className="text-muted-foreground">
                  Your reference ID is <span className="font-mono font-bold text-foreground">{enquiryId}</span>. Our travel designer
                  will reach out on <span className="font-semibold">{form.mobile}</span> within a few hours with a tailor-made itinerary.
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-3">
                  <Button asChild variant="outline"><a href="/">Back to home</a></Button>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(`Hi, my enquiry ID is ${enquiryId}`)}`} target="_blank" rel="noreferrer">
                      Message us on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {step < 4 && (
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <Button variant="ghost" onClick={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s))} disabled={step === 1}>
                  Back
                </Button>
                {step < 3 && (
                  <Button onClick={next} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Continue
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* SUMMARY SIDEBAR */}
          <aside className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your enquiry</div>
            <div className="mt-3 text-2xl font-black">{effectiveDestination || "Anywhere you dream"}</div>
            <div className="mt-1 text-sm text-muted-foreground">{form.duration} · {travellers} traveller{travellers > 1 ? "s" : ""}</div>
            {form.travelDate && <div className="mt-1 text-sm text-muted-foreground">From {new Date(form.travelDate).toDateString()}</div>}

            <hr className="my-5 border-border" />
            <div className="rounded-xl bg-accent/10 p-4 text-sm text-foreground/80">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" /> Custom itinerary & quote
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Skip the planning stress — tell us your needs and we'll build the perfect journey. You only pay after you've approved the itinerary.
              </p>
            </div>

            <hr className="my-5 border-border" />
            <div className="text-xs text-muted-foreground">
              Prefer to talk? Call <a href={`tel:${brand.phones[0].tel}`} className="font-semibold text-foreground">{brand.phones[0].number}</a> (Indore)
              or <a href={`tel:${brand.phones[1].tel}`} className="font-semibold text-foreground">{brand.phones[1].number}</a> (Chandigarh).
              Available 24×7 on WhatsApp.
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-start justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-semibold text-foreground">{value}</span>
    </li>
  );
}

function Stepper({ step }: { step: 1 | 2 | 3 | 4 }) {
  const items = ["Trip details", "Your details", "Review", "Sent"];
  return (
    <ol className="grid grid-cols-4 gap-2">
      {items.map((label, i) => {
        const n = (i + 1) as 1 | 2 | 3 | 4;
        const done = step > n;
        const active = step === n;
        return (
          <li key={label} className="flex flex-col items-center gap-2 text-center">
            <div className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition
              ${done ? "bg-accent text-accent-foreground" : active ? "brand-gradient text-white" : "bg-secondary text-muted-foreground"}`}>
              {done ? <CheckCircle2 className="h-5 w-5" /> : n}
            </div>
            <div className={`text-[11px] font-semibold uppercase tracking-widest ${active || done ? "text-foreground" : "text-muted-foreground"}`}>
              {label}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

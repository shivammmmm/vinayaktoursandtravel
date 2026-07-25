import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const KEY = "vtt_enquiry_dismissed_at";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Only trigger on homepage, once every 24h.
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    try {
      const last = Number(localStorage.getItem(KEY) || 0);
      if (Date.now() - last < 24 * 60 * 60 * 1000) return;
    } catch { /* ignore */ }

    const t = window.setTimeout(() => setOpen(true), 6000);
    return () => window.clearTimeout(t);
  }, []);

  function handleClose(next: boolean) {
    setOpen(next);
    if (!next) {
      try { localStorage.setItem(KEY, String(Date.now())); } catch { /* ignore */ }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Lead capture placeholder: swap in CRM/email endpoint later.
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    toast.success("Thanks! Our travel expert will reach out within a few hours.");
    handleClose(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get a free trip quote</DialogTitle>
          <DialogDescription>
            Tell us where you'd like to go — we'll design a tailor-made itinerary within your budget.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="e-name">Name</Label>
            <Input id="e-name" required maxLength={100} name="name" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="e-city">City</Label>
              <Input id="e-city" required maxLength={80} name="city" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="e-mobile">Mobile Number</Label>
              <Input id="e-mobile" required inputMode="tel" pattern="[0-9+ -]{7,15}" name="mobile" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="e-email">Email ID</Label>
            <Input id="e-email" required type="email" maxLength={200} name="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="e-details">Enquiry Details</Label>
            <Textarea id="e-details" required maxLength={1000} name="details" placeholder="Destination, dates, travellers, budget…" />
          </div>
          <Button type="submit" disabled={submitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
            {submitting ? "Sending…" : "Send Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

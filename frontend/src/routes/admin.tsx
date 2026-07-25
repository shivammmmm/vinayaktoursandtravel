import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ShieldAlert, LogOut, Check, Save, Database, Trash2, Edit2, Plus, Users, Landmark, Tag } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — Vinayak Tours & Travel" },
      { name: "robots", content: "noindex, nofollow" }
    ]
  }),
  component: AdminPanel,
});

type Lead = {
  id: string;
  name: string;
  mobile: string;
  email: string;
  destination: string;
  duration: string;
  travelDate?: string;
  budget?: string;
  city: string;
  notes?: string;
  date: string;
  status: "New" | "Contacted" | "Closed" | "Cancelled";
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type Package = {
  slug: string;
  title: string;
  region: string;
  duration: string;
  from: string;
  image: string;
  category: string[];
  highlights: string[];
};

function AdminPanel() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  
  // Site Info State
  const [tagline, setTagline] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

  useEffect(() => {
    if (isAuthed) {
      loadData();
    }
  }, [isAuthed]);

  const loadData = () => {
    try {
      // 1. Leads
      const savedLeads = JSON.parse(localStorage.getItem("vtt_enquiries") || "[]");
      setLeads(savedLeads);

      // 2. Testimonials
      // Fetch default from site-data or load override from localStorage
      import("@/lib/site-data").then((m) => {
        // Since brand, testimonials and packages are evaluated on module load, 
        // we can fetch the underlying structures or overrides.
        // We will read straight from localStorage to avoid compile cycles.
        const tOver = localStorage.getItem("vtt_testimonials");
        if (tOver) {
          setTestimonials(JSON.parse(tOver));
        } else {
          // Default testimonials
          setTestimonials(m.testimonials);
        }

        const pOver = localStorage.getItem("vtt_packages");
        if (pOver) {
          setPackages(JSON.parse(pOver));
        } else {
          setPackages(m.packages);
        }

        const bOver = localStorage.getItem("vtt_brand");
        if (bOver) {
          const b = JSON.parse(bOver);
          setTagline(b.tagline || "");
          setWhatsapp(b.whatsapp || "");
          setEmail1(b.emails?.[0] || "");
          setEmail2(b.emails?.[1] || "");
          setPhone1(b.phones?.[0]?.number || "");
          setPhone2(b.phones?.[1]?.number || "");
        } else {
          setTagline(m.brand.tagline);
          setWhatsapp(m.brand.whatsapp);
          setEmail1(m.brand.emails?.[0] || "");
          setEmail2(m.brand.emails?.[1] || "");
          setPhone1(m.brand.phones?.[0]?.number || "");
          setPhone2(m.brand.phones?.[1]?.number || "");
        }
      });
    } catch (e) {
      console.error(e);
      toast.error("Failed to load dashboard data");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "vinayak2014" || password === "admin") {
      setIsAuthed(true);
      toast.success("Welcome back, Vinayak Admin!");
    } else {
      toast.error("Invalid admin passcode");
    }
  };

  // Lead status updates
  const updateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem("vtt_enquiries", JSON.stringify(updated));
    toast.success(`Enquiry status updated to ${newStatus}`);
  };

  const deleteLead = (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem("vtt_enquiries", JSON.stringify(updated));
    toast.success("Enquiry deleted successfully");
  };

  // Pricing updates
  const handlePriceChange = (slug: string, newPrice: string) => {
    const updated = packages.map(p => p.slug === slug ? { ...p, from: newPrice } : p);
    setPackages(updated);
  };

  const savePackages = () => {
    localStorage.setItem("vtt_packages", JSON.stringify(packages));
    toast.success("Package rates updated successfully! Reloading pages to apply...");
    setTimeout(() => window.location.reload(), 1000);
  };

  // Testimonials updates
  const handleTestimonialChange = (index: number, field: keyof Testimonial, value: string) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setTestimonials(updated);
  };

  const saveTestimonials = () => {
    localStorage.setItem("vtt_testimonials", JSON.stringify(testimonials));
    toast.success("Testimonials updated successfully! Reloading to apply...");
    setTimeout(() => window.location.reload(), 1000);
  };

  // Branding updates
  const saveBranding = () => {
    import("@/lib/site-data").then((m) => {
      const updatedBrand = {
        ...m.brand,
        tagline,
        whatsapp,
        emails: [email1, email2].filter(Boolean),
        phones: [
          { name: "Honey Rajpal (Indore)", number: phone1, tel: phone1.replace(/[^0-9+]/g, "") },
          { name: "Ajay Rajpal (Chandigarh)", number: phone2, tel: phone2.replace(/[^0-9+]/g, "") }
        ]
      };
      localStorage.setItem("vtt_brand", JSON.stringify(updatedBrand));
      toast.success("Branding details updated! Reloading to apply changes...");
      setTimeout(() => window.location.reload(), 1000);
    });
  };

  // Logout
  const handleLogout = () => {
    setIsAuthed(false);
    setPassword("");
    toast.success("Logged out successfully");
  };

  if (!isAuthed) {
    return (
      <div className="min-h-[70vh] grid place-items-center bg-secondary/20 py-10 px-4">
        <Card className="max-w-md w-full p-8 border border-border shadow-brand">
          <div className="text-center mb-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/15 text-accent grid place-items-center mb-3 animate-pulse">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-primary">Vinayak Admin Console</h2>
            <p className="text-sm text-muted-foreground mt-1">Enter your admin passcode for static website updates</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="pass">Admin Passcode</Label>
              <Input
                id="pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passcode (vinayak2014)"
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Access Dashboard
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="Console"
        title="Admin Control Panel"
        subtitle="Manage your leads, update package rates, customize testimonials, and update office phone numbers instantly."
      />

      <Section>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-foreground">Active Static Admin Mode</span>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
            <LogOut className="h-4 w-4 mr-1" /> Logout
          </Button>
        </div>

        <Tabs defaultValue="leads">
          <TabsList className="mb-6 flex flex-wrap h-auto gap-1 bg-secondary/50 p-1.5 rounded-2xl">
            <TabsTrigger value="leads" className="rounded-xl flex items-center gap-1.5 py-2 px-4"><Users className="h-4 w-4" /> Enquiries / Leads ({leads.length})</TabsTrigger>
            <TabsTrigger value="packages" className="rounded-xl flex items-center gap-1.5 py-2 px-4"><Tag className="h-4 w-4" /> Package Rates</TabsTrigger>
            <TabsTrigger value="testimonials" className="rounded-xl flex items-center gap-1.5 py-2 px-4"><Database className="h-4 w-4" /> Testimonials</TabsTrigger>
            <TabsTrigger value="branding" className="rounded-xl flex items-center gap-1.5 py-2 px-4"><Landmark className="h-4 w-4" /> Site Branding</TabsTrigger>
          </TabsList>

          {/* TAB: LEADS & ENQUIRIES */}
          <TabsContent value="leads">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-primary">Customer Queries &amp; Leads</h2>
              <p className="text-sm text-muted-foreground">Every enquiry submitted through the booking request form is saved here in localStorage.</p>

              {leads.length === 0 ? (
                <Card className="p-8 text-center border-dashed">
                  <div className="text-muted-foreground text-sm">No enquiries received yet. Try filling out a query form on the home page!</div>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {leads.map((l) => (
                    <Card key={l.id} className="p-5 border border-border flex flex-col md:flex-row justify-between md:items-start gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs font-bold bg-accent/20 text-accent px-2 py-0.5 rounded-md">{l.id}</span>
                          <h3 className="font-extrabold text-foreground">{l.name}</h3>
                          <span className="text-xs text-muted-foreground">{new Date(l.date).toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted-foreground">
                          <div><strong className="text-foreground">Destination:</strong> {l.destination}</div>
                          <div><strong className="text-foreground">Duration:</strong> {l.duration}</div>
                          <div><strong className="text-foreground">Travellers:</strong> {l.adults} Adults, {l.children} Children</div>
                          <div><strong className="text-foreground">Budget:</strong> {l.budget || "N/A"}</div>
                          <div><strong className="text-foreground">Contact:</strong> {l.mobile} · {l.email}</div>
                          <div><strong className="text-foreground">Origin City:</strong> {l.city}</div>
                        </div>
                        {l.notes && (
                          <div className="text-xs bg-secondary/50 p-2.5 rounded-lg border border-border/80 text-foreground/80">
                            <strong>Note:</strong> {l.notes}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status:</label>
                          <select
                            value={l.status || "New"}
                            onChange={(e) => updateLeadStatus(l.id, e.target.value as Lead["status"])}
                            className="text-xs font-semibold rounded-md border border-border p-1.5 bg-background focus:outline-none"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed / Booked</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                        <Button onClick={() => deleteLead(l.id)} variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4 mr-1" /> Delete Query
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* TAB: PACKAGE PRICING */}
          <TabsContent value="packages">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-primary">Tour Package Pricing</h2>
                  <p className="text-sm text-muted-foreground">Edit starting rates for active tour packages instantly.</p>
                </div>
                <Button onClick={savePackages} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Save className="h-4 w-4 mr-1" /> Save Package Rates
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {packages.map((p) => (
                  <Card key={p.slug} className="p-4 border border-border space-y-3">
                    <div className="font-extrabold text-foreground truncate">{p.title}</div>
                    <div className="text-xs text-muted-foreground">{p.region} ({p.duration})</div>
                    <div>
                      <Label htmlFor={`price-${p.slug}`}>Price tag (₹)</Label>
                      <Input
                        id={`price-${p.slug}`}
                        value={p.from}
                        onChange={(e) => handlePriceChange(p.slug, e.target.value)}
                        className="mt-1 font-bold text-sm"
                        placeholder="e.g. ₹ 21,499"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB: TESTIMONIALS */}
          <TabsContent value="testimonials">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-primary">Testimonials Manager</h2>
                  <p className="text-sm text-muted-foreground">Edit the customer reviews shown on the website homepage.</p>
                </div>
                <Button onClick={saveTestimonials} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Save className="h-4 w-4 mr-1" /> Save Testimonials
                </Button>
              </div>

              <div className="grid gap-5">
                {testimonials.map((t, idx) => (
                  <Card key={idx} className="p-5 border border-border space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`t-name-${idx}`}>Reviewer Name</Label>
                        <Input
                          id={`t-name-${idx}`}
                          value={t.name}
                          onChange={(e) => handleTestimonialChange(idx, "name", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`t-role-${idx}`}>Role / Package Name</Label>
                        <Input
                          id={`t-role-${idx}`}
                          value={t.role}
                          onChange={(e) => handleTestimonialChange(idx, "role", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`t-quote-${idx}`}>Quote Text</Label>
                      <textarea
                        id={`t-quote-${idx}`}
                        value={t.quote}
                        onChange={(e) => handleTestimonialChange(idx, "quote", e.target.value)}
                        className="w-full mt-1 border border-border rounded-lg p-2.5 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                        rows={3}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB: SITE BRANDING */}
          <TabsContent value="branding">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-primary">Branding &amp; Contact Info</h2>
                  <p className="text-sm text-muted-foreground">Update global contact numbers, emails, and address tags.</p>
                </div>
                <Button onClick={saveBranding} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Save className="h-4 w-4 mr-1" /> Save Branding Info
                </Button>
              </div>

              <Card className="p-6 border border-border space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="b-tagline">Brand Tagline</Label>
                    <Input
                      id="b-tagline"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="b-wa">WhatsApp API Phone (e.g. 919039139194)</Label>
                    <Input
                      id="b-wa"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="b-email1">Email Address 1</Label>
                    <Input
                      id="b-email1"
                      value={email1}
                      onChange={(e) => setEmail1(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="b-email2">Email Address 2</Label>
                    <Input
                      id="b-email2"
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="b-phone1">Indore HQ Phone</Label>
                    <Input
                      id="b-phone1"
                      value={phone1}
                      onChange={(e) => setPhone1(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="b-phone2">Chandigarh HQ Phone</Label>
                    <Input
                      id="b-phone2"
                      value={phone2}
                      onChange={(e) => setPhone2(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Section>
    </div>
  );
}

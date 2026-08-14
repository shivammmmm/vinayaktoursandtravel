import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — Vinayak Tours & Travel" },
      { name: "description", content: "Multi-service cancellation and refund policy for flights, cruises, hotels, holiday packages and visas booked through Vinayak Tours & Travel." },
      { property: "og:title", content: "Cancellation & Refund Policy | Vinayak Tours & Travel" },
      { property: "og:description", content: "Read our detailed, service-wise cancellation and refund policy." },
      { property: "og:url", content: "/cancellation-policy" },
    ],
    links: [{ rel: "canonical", href: "/cancellation-policy" }],
  }),
  component: Policy,
});

function Policy() {
  return (
    <div>
      <PageHero eyebrow="Policies" title="Cancellation & Refund Policy" subtitle="Multi-service policy — governed by supplier terms and our agency guidelines." />
      <Section>
        <article className="max-w-3xl space-y-8 text-base leading-relaxed text-foreground/85">

          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
            <h3 className="text-lg font-bold text-foreground mb-2">Vinayak Tours & Travel — Multi-Service Cancellation & Refund Policy</h3>
            <p className="text-sm text-foreground/80">
              Thank you for choosing us as your one-stop travel partner. Because we curate your journey using diverse
              global suppliers (airlines, hotels, cruise lines, and local tour operators), each component of your trip
              is governed by its respective provider's terms.
            </p>
            <p className="text-sm text-foreground/80 mt-2">
              Below is the cancellation structure based on the specific service(s) you have booked:
            </p>
          </div>

          {/* Section 1 — Flights */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              1. Flights (Domestic & International)
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Airline Terms:</strong> Airline tickets are highly regulated. Refunds, changes, or cancellations
                  are strictly subject to the specific fare rules of the airline.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Non-Refundable Fares:</strong> Basic economy and promotional fares are usually 100% non-refundable.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Refundable Fares:</strong> For refundable tickets, the airline's penalty and a small
                  agency processing fee will be deducted before releasing the remaining balance.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 2 — Cruises */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              2. Cruises & Luxury Rail Journeys
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Supplier Dominance:</strong> Cruise lines and luxury trains have rigid, non-negotiable
                  cancellation timelines.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Timeline Penalties:</strong> Cancellations made even 60 to 90 days before departure can result in
                  a total loss of your deposit. The exact policy of your specific cruise/rail liner will be
                  provided at the time of booking.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 3 — Hotels */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              3. Hotels & Accommodations
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Standard Bookings:</strong> Subject to the hotel's specific cancellation window.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Peak Season & Promo Rates:</strong> Bookings made for holiday seasons (Christmas, New Year,
                  festivals) or under special promotional rates are generally <strong>100% non-refundable</strong> from
                  the moment of booking.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 4 — Custom & Fixed Holiday Packages */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              4. Custom & Fixed Holiday Packages
            </h2>
            <p className="text-sm">
              Because holiday packages bundle multiple services together, a varied structural cancellation
              timeline applies to each package's component.
            </p>
          </div>

          {/* Section 5 — Visas */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              5. Visas & Ancillary Services
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Government Fees:</strong> Government embassy visa fees and our agency
                  visa processing fees are <strong>100% non-refundable</strong> once submitted because of the fact that we have
                  already employed our manpower, expertise to carefully and professionally look into your profile
                  and documents and done needful application etc, regardless of whether the visa is approved or
                  rejected by the embassy.
                </div>
              </li>
            </ul>
          </div>

          {/* Supplier Supremacy Clause */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="text-lg font-bold text-foreground mb-2">Supplier Policy Supremacy</h3>
            <p className="text-sm text-foreground/80">
              In all circumstances, the actual cancellation policy of the end-supplier (airline, hotel, cruise operator)
              will supersede this document. As your travel facilitator, <strong>Vinayak Tours & Travel</strong> will
              advocate on your behalf to minimize vendor fees, but we cannot override supplier-imposed penalties
              + our reasonable service charges.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">
              For any cancellation or refund request, please contact us via WhatsApp or email with your
              booking reference number. Our team will guide you through the process within 24 hours.
              {/* NOTE: Replace email below with new domain email once purchased */}
              {" "}Email: <a href="mailto:vinayakindore2000@gmail.com" className="text-accent font-semibold">vinayakindore2000@gmail.com</a>
            </p>
          </div>

        </article>
      </Section>
    </div>
  );
}

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
            <p className="text-sm font-semibold text-foreground">
              Thank you for choosing <strong>Vinayak Tours & Travel</strong> as your one-stop travel partner.
              Because we curate your journey using diverse global suppliers (airlines, hotels, cruise lines,
              and local tour operators), each component of your trip is governed by its respective provider's terms.
              Below is the cancellation structure based on the specific service(s) you have booked.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              1. Flights (Domestic & International)
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Airline Terms:</strong> Airline tickets are highly regulated. Refunds, changes, or cancellations
                  are strictly subject to the specific fare rules of the airline at the time of booking.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Non-Refundable Fares:</strong> Basic economy and promotional fares are usually 100% non-refundable.
                  No refund will be applicable irrespective of cancellation window.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Refundable Fares:</strong> For refundable tickets, the airline's applicable penalty and a small
                  agency processing fee will be deducted before releasing the remaining balance.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              2. Cruises & Luxury Rail Journeys
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Supplier Dominance:</strong> Cruise lines and luxury trains have rigid, non-negotiable
                  cancellation timelines that we, as your travel facilitator, must adhere to strictly.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Timeline Penalties:</strong> Cancellations made even 60 to 90 days before departure can result in
                  a total loss of your deposit. The exact policy of your specific cruise or rail liner will be
                  provided and acknowledged at the time of booking.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              3. Hotels & Accommodations
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Standard Bookings:</strong> Subject to the individual hotel's cancellation window and policy,
                  which varies by property and booking type. Policies will be communicated at time of booking.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Peak Season & Promo Rates:</strong> Bookings made for holiday seasons (Christmas, New Year,
                  Diwali, festivals) or under special promotional rates are generally <strong>100% non-refundable</strong> from
                  the moment of booking.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              4. Custom & Fixed Holiday Packages
            </h2>
            <p className="text-sm mb-3">
              Because holiday packages bundle multiple services (flights, hotels, transfers, sightseeing, guides)
              together, a varied structural cancellation timeline applies to each component:
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div><strong>More than 45 days before departure:</strong> Refund of amounts paid, less non-refundable third-party charges (visa fees, air tickets already issued, etc.).</div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div><strong>30 – 45 days before departure:</strong> 25% of the total tour cost is retained as cancellation charges.</div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div><strong>15 – 29 days before departure:</strong> 50% of the total tour cost is retained.</div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div><strong>Less than 15 days before departure or no-show:</strong> 100% of the total tour cost is retained.</div>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              5. Visas & Ancillary Services
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <strong>Government Fees — 100% Non-Refundable:</strong> Government embassy visa fees and our agency
                  visa processing fees are <strong>100% non-refundable</strong> once submitted. This is because we have already
                  employed our manpower, expertise and professional diligence to carefully review your profile and documents,
                  and submitted the application — regardless of whether the visa is approved or rejected by the embassy.
                </div>
              </li>
            </ul>
          </div>

          {/* Supplier Supremacy Clause */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="text-lg font-bold text-foreground mb-2">Supplier Policy Supremacy</h3>
            <p className="text-sm text-foreground/80">
              In all circumstances, the actual cancellation policy of the end-supplier (airline, hotel, cruise operator,
              rail provider) will supersede this document. As your travel facilitator, <strong>Vinayak Tours & Travel</strong> will
              advocate on your behalf to minimise vendor-imposed fees, but we cannot override supplier-imposed penalties
              + our reasonable service charges.
            </p>
          </div>

          {/* Refund Processing */}
          <div>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2 mb-4">
              Refund Processing
            </h2>
            <p className="text-sm">
              Approved refunds are processed to the original payment method within 7–10 working days.
              International bank timelines may add a few extra business days beyond our control.
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

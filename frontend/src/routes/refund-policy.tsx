import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Vinayak Tours & Travel" },
      { name: "description", content: "Refund timelines and process for cancelled bookings at Vinayak Tours & Travel." },
      { property: "og:title", content: "Refund Policy | Vinayak Tours & Travel" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Refund Policy" />
      <Section>
        <article className="prose prose-slate max-w-3xl">
          <p>
            Refunds against cancelled bookings are processed as per the cancellation policy applicable to your booking,
            after deducting supplier retention charges, service fees and applicable taxes.
          </p>
          <h2>Timelines</h2>
          <ul>
            <li>Domestic bookings: 7–10 working days after cancellation is confirmed.</li>
            <li>International bookings: 15–30 working days, subject to supplier refund cycles.</li>
            <li>Visa fees, courier charges and consular fees are strictly non-refundable.</li>
          </ul>
          <h2>Refund mode</h2>
          <p>
            Refunds are processed to the original payment instrument. For NEFT/RTGS payments, refunds are sent to the
            registered bank account on record.
          </p>
          <h2>Cancellation charges</h2>
          <p>
            Please see our detailed <a href="/cancellation-policy">Cancellation Policy</a> for slab-wise deductions
            applicable to different package types.
          </p>
        </article>
      </Section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — Vinayak Tours & Travel" },
      { name: "description", content: "Cancellation, refund and rescheduling policy for bookings made with Vinayak Tours & Travel." },
      { property: "og:title", content: "Cancellation & Refund Policy" },
      { property: "og:description", content: "Read our cancellation, refund and rescheduling terms." },
      { property: "og:url", content: "/cancellation-policy" },
    ],
    links: [{ rel: "canonical", href: "/cancellation-policy" }],
  }),
  component: Policy,
});

function Policy() {
  return (
    <div>
      <PageHero eyebrow="Policies" title="Cancellation & Refund Policy" />
      <Section>
        <article className="prose prose-slate max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            We understand that plans change. The following policy applies to all bookings made through
            Vinayak Tours &amp; Travel unless a separate written agreement is in place.
          </p>
          <h2 className="text-2xl font-bold">Cancellation windows</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>More than 45 days before departure:</strong> full refund of any amount paid, less non-refundable third-party charges (visa fees, air tickets already issued, etc.).</li>
            <li><strong>30 – 45 days before departure:</strong> 25% of the total tour cost is retained.</li>
            <li><strong>15 – 29 days before departure:</strong> 50% of the total tour cost is retained.</li>
            <li><strong>Less than 15 days before departure or no-show:</strong> 100% of the total tour cost is retained.</li>
          </ul>
          <h2 className="text-2xl font-bold">Refunds</h2>
          <p>
            Approved refunds are processed to the original payment method within 7–10 working days
            via Razorpay's refund API. International bank timelines may add a few extra business days.
          </p>
          <h2 className="text-2xl font-bold">Rescheduling</h2>
          <p>
            One free date-change is offered on most packages if requested at least 30 days before
            departure, subject to supplier availability. Additional change fees passed on by
            airlines/hotels will be shared transparently.
          </p>
          <h2 className="text-2xl font-bold">Force majeure</h2>
          <p>
            Cancellations due to natural disasters, government advisories, visa denial or medical
            emergencies are handled on a case-by-case basis, giving maximum possible credit or refund.
          </p>
          <p className="text-sm text-muted-foreground">
            For any cancellation, please email us at vinayakindore2000@gmail.com with your booking ID.
          </p>
        </article>
      </Section>
    </div>
  );
}

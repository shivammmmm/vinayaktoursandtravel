import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { brand } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Vinayak Tours & Travel" },
      { name: "description", content: "Terms of use, booking terms and conditions for services provided by Vinayak Tours & Travel." },
      { property: "og:title", content: "Terms & Conditions | Vinayak Tours & Travel" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Section>
        <article className="prose prose-slate max-w-3xl">
          <p>
            These terms govern the booking and use of travel services arranged by {brand.name}. By enquiring or booking,
            you accept these terms.
          </p>
          <h2>1. Bookings & confirmations</h2>
          <p>
            A booking is confirmed only after we issue a written confirmation and receive the applicable payment as per the
            invoice. Verbal quotes and draft itineraries are indicative until confirmed.
          </p>
          <h2>2. Pricing</h2>
          <p>
            All prices are quoted in Indian Rupees unless stated otherwise. Prices are dynamic and subject to change until
            payment is received, based on airline fares, hotel availability, taxes and currency fluctuations.
          </p>
          <h2>3. Passports, visas & documentation</h2>
          <p>
            Travellers are responsible for holding valid passports, visas and health certificates required for their trip.
            We provide assistance but cannot guarantee visa issuance, which is at the sole discretion of the concerned
            embassy.
          </p>
          <h2>4. Third-party services</h2>
          <p>
            We act as a booking agent for airlines, hotels, transport operators and other suppliers. Their terms of carriage
            and service apply. We are not liable for changes, delays or lapses in service caused by third parties.
          </p>
          <h2>5. Force majeure</h2>
          <p>
            We are not liable for failure or delay in performing our obligations caused by circumstances beyond our
            reasonable control, including natural disasters, pandemics, war, strikes, or government restrictions.
          </p>
          <h2>6. Complaints</h2>
          <p>
            Any complaint must be raised in writing within 15 days of trip completion so we can investigate with the
            supplier concerned.
          </p>
          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the
            courts at Indore, Madhya Pradesh.
          </p>
        </article>
      </Section>
    </div>
  );
}

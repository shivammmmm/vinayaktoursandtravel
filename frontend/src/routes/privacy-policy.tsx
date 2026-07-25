import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { brand } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vinayak Tours & Travel" },
      { name: "description", content: "How Vinayak Tours & Travel collects, uses and protects your personal information when you enquire or book a trip with us." },
      { property: "og:title", content: "Privacy Policy | Vinayak Tours & Travel" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Effective from January 2024" />
      <Section>
        <article className="prose prose-slate max-w-3xl">
          <p>
            This page is maintained by {brand.name} ("we", "us", "our") to explain what information we collect
            from visitors and travellers, how we use it, and the choices you have.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Contact details you share via enquiry forms, WhatsApp, email or phone (name, phone, email, city).</li>
            <li>Trip preferences you provide — destination, travel dates, number of travellers, budget, special requests.</li>
            <li>Passport, visa and payment details only when needed to fulfil a confirmed booking.</li>
            <li>Basic usage data such as pages viewed and device type, collected via cookies and analytics.</li>
          </ul>
          <h2>How we use your information</h2>
          <ul>
            <li>To prepare quotes and itineraries and respond to your queries.</li>
            <li>To make travel arrangements — bookings with airlines, hotels, transport partners and consulates.</li>
            <li>To send trip updates, invoices and, with consent, occasional promotional offers.</li>
          </ul>
          <h2>Data sharing</h2>
          <p>
            We share personal information only with the airlines, hotels, ground operators, insurers and government
            authorities required to deliver your trip. We do not sell personal information to third parties.
          </p>
          <h2>Data security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your information. Payment collection
            is handled through secure, PCI-compliant gateways; we do not store card details on our servers.
          </p>
          <h2>Your rights</h2>
          <p>
            You may request access, correction or deletion of your personal information at any time by writing to{" "}
            <a href={`mailto:${brand.emails[0]}`}>{brand.emails[0]}</a>. We will respond within a reasonable time frame.
          </p>
          <h2>Cookies</h2>
          <p>
            Our website uses essential cookies for functionality and, optionally, analytics cookies to understand
            traffic. You can disable cookies from your browser settings without losing access to the site.
          </p>
          <h2>Contact</h2>
          <p>
            For any privacy question, contact us at{" "}
            <a href={`mailto:${brand.emails[0]}`}>{brand.emails[0]}</a>.
          </p>
        </article>
      </Section>
    </div>
  );
}

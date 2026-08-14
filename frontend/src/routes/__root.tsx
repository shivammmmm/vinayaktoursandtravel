import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquiryPopup } from "@/components/site/EnquiryPopup";
import { FloatingContactBar } from "@/components/site/FloatingContactBar";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { name: "description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh. Your custom itinerary is just one conversation away." },
      { name: "author", content: "Vinayak Tours & Travel" },
      { property: "og:title", content: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { property: "og:description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh. Your custom itinerary is just one conversation away." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vinayak Tours & Travel" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vinayak Tours & Travel — Tailor-made journeys since 2014" },
      { name: "twitter:description", content: "Custom domestic & international tour packages, honeymoon, MICE, cruises, flights and visas — from Indore and Chandigarh. Your custom itinerary is just one conversation away." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0384312-2aff-4bc8-b5c1-1839a152ca32/id-preview-51ded620--08de3f77-80cd-4df5-80dc-d39110271b06.lovable.app-1783669303025.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0384312-2aff-4bc8-b5c1-1839a152ca32/id-preview-51ded620--08de3f77-80cd-4df5-80dc-d39110271b06.lovable.app-1783669303025.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Vinayak Tours & Travel",
  "url": "https://vinayaktoursandtravel.com",
  "logo": "https://vinayaktoursandtravel.com/logo.png",
  "image": "https://vinayaktoursandtravel.com/office-indore.png",
  "description": "Single stop shop for all your travel needs — domestic & international tours, honeymoon, MICE, cruises, flights, visas. From budget to luxury, solo to corporate. Offices in Indore & Chandigarh.",
  "foundingDate": "2014",
  "areaServed": "Worldwide",
  "telephone": ["+91-93006-55686", "+91-90391-39194"],
  "email": "vinayakindore2000@gmail.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "103, TREASURE VIHAR, Bijalpur",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "238, Airport Road, Manali Highway",
      "addressLocality": "Chandigarh",
      "addressRegion": "Chandigarh",
      "addressCountry": "IN"
    }
  ],
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": ["https://www.youtube.com/@vinayaktoursntravel"]
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebPage">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <EnquiryPopup />
      <FloatingContactBar />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://vinayaktoursandtravel.com";

const paths: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/packages", priority: "0.9", changefreq: "weekly" },
  { path: "/themes", priority: "0.8", changefreq: "monthly" },
  { path: "/destinations", priority: "0.8", changefreq: "weekly" },
  { path: "/gallery", priority: "0.7", changefreq: "weekly" },
  { path: "/booking", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/cancellation-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.4", changefreq: "yearly" },
  { path: "/terms", priority: "0.4", changefreq: "yearly" },
  { path: "/refund-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/sitemap", priority: "0.3", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString().split("T")[0];
        const urls = paths.map(
          ({ path, priority, changefreq }) =>
            `  <url><loc>${BASE_URL}${path}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

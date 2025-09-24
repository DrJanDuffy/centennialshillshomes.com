import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  // Get all routes from the Qwik City plan
  const siteRoutes = routes
    .map(([route]) => route as string)
    .filter(route => route !== "/"); // Exclude the root route

  // Define specific pages with custom priorities and change frequencies
  const specificPages = [
    // Main Pages
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/about", priority: 0.8, changefreq: "monthly" },
    { loc: "/contact", priority: 0.9, changefreq: "monthly" },

    // Service Pages
    { loc: "/luxury-home-sales", priority: 0.8, changefreq: "monthly" },
    { loc: "/california-equity-buyers", priority: 0.8, changefreq: "monthly" },
    { loc: "/corporate-relocations", priority: 0.8, changefreq: "monthly" },
    { loc: "/market-analysis", priority: 0.8, changefreq: "monthly" },
    { loc: "/same-day-showings", priority: 0.8, changefreq: "monthly" },
    { loc: "/investment-properties", priority: 0.8, changefreq: "monthly" },

    // Property Pages
    { loc: "/properties", priority: 0.9, changefreq: "daily" },
    { loc: "/buyers", priority: 0.8, changefreq: "monthly" },
    { loc: "/sellers", priority: 0.8, changefreq: "monthly" },

    // Community Pages
    { loc: "/communities", priority: 0.9, changefreq: "weekly" },
    { loc: "/red-rock-country-club", priority: 0.7, changefreq: "weekly" },
    { loc: "/the-ridges", priority: 0.7, changefreq: "weekly" },
    { loc: "/summerlin-west", priority: 0.7, changefreq: "weekly" },
    { loc: "/centennial-hills", priority: 0.7, changefreq: "weekly" },
    { loc: "/lone-mountain", priority: 0.7, changefreq: "weekly" },
    { loc: "/north-las-vegas", priority: 0.7, changefreq: "weekly" },

    // Additional Pages
    { loc: "/testimonials", priority: 0.6, changefreq: "monthly" },
    { loc: "/services", priority: 0.7, changefreq: "monthly" },
    { loc: "/neighborhoods", priority: 0.6, changefreq: "monthly" },

    // Legal Pages
    { loc: "/privacy", priority: 0.3, changefreq: "yearly" },
    { loc: "/terms", priority: 0.3, changefreq: "yearly" },
  ];

  // Add any additional routes from the city plan that aren't already covered
  const additionalRoutes = siteRoutes
    .filter(route => !specificPages.some(page => page.loc === route))
    .map(route => ({
      loc: route,
      priority: 0.5, // Default priority for uncovered routes
      changefreq: "monthly",
    }));

  const sitemap = createSitemap([...specificPages, ...additionalRoutes]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { 
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
    },
  });

  ev.send(response);
};

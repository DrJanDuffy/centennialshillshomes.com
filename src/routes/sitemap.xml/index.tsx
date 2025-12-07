import type { RequestHandler } from '@builder.io/qwik-city';
import { createSitemap, type SitemapEntry } from './create-sitemap';

/**
 * Google Search Console 2025 Optimized Sitemap Generator
 * 
 * Using official Qwik SSR pattern matching documentation exactly
 * Guarantees <url> tags are always generated inside <urlset>
 */
export const onGet: RequestHandler = (ev) => {
  const currentDate = new Date().toISOString().split('T')[0];

  // All canonical content pages - 75 pages total
  // Using number for priority to match Qwik docs, but keeping changefreq and lastmod for SEO
  const entries: SitemapEntry[] = [
    { loc: '/', priority: 1, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-homes', priority: 1, changefreq: 'daily', lastmod: currentDate },
    { loc: '/contact', priority: 0.9, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/centennial-hills', priority: 0.9, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-homes-for-sale', priority: 0.9, changefreq: 'daily', lastmod: currentDate },
    { loc: '/properties', priority: 0.9, changefreq: 'daily', lastmod: currentDate },
    { loc: '/our-luxury-listings', priority: 0.9, changefreq: 'daily', lastmod: currentDate },
    { loc: '/active-listings', priority: 0.9, changefreq: 'daily', lastmod: currentDate },
    { loc: '/mls-search', priority: 0.9, changefreq: 'daily', lastmod: currentDate },
    { loc: '/buy-a-home', priority: 0.9, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/sell-a-home', priority: 0.9, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/about', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/centennial-hills-luxury-homes', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-new-construction', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-89135', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-89138', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-89144', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/investment-properties', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/virtual-tours', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/recent-sales', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/luxury-estates', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/luxury-home-sales', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/buyers', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/first-time-homebuyers', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/luxury-home-buyers', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/california-equity-buyers', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/home-valuation', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/market-analysis', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/janet-duffy', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/neighborhoods', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/area-explorer', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/the-ridges', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/summerlin-west', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/summerlin', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/corporate-relocation-services', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/market-reports', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-market-report', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/buying-guide', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/selling-guide', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/homes-400k-600k', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/homes-over-1m', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/blog', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/market-insights', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/new-construction', priority: 0.8, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/commute-calculator', priority: 0.8, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/testimonials', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/north-las-vegas', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/northwest-las-vegas', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/aliante', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/sky-canyon', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/providence', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/tule-springs', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/red-rock-country-club', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/lone-mountain', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/centennial-hills-schools', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/best-schools-centennial-hills', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/condos-centennial-hills', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/golf-course-homes', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/homes-under-400k', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/mortgage-calculator', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/affordability-calculator', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/blog/category/buyer-guide', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/blog/category/market-updates', priority: 0.7, changefreq: 'weekly', lastmod: currentDate },
    { loc: '/blog/category/seller-guide', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/search', priority: 0.7, changefreq: 'daily', lastmod: currentDate },
    { loc: '/moving-guide', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/move-up-buyers', priority: 0.7, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/centennial-hills-amenities', priority: 0.6, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/centennial-hills-vs-summerlin', priority: 0.6, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/press-media', priority: 0.6, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/faq', priority: 0.6, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/local-business-optimization', priority: 0.6, changefreq: 'monthly', lastmod: currentDate },
    { loc: '/fair-housing', priority: 0.5, changefreq: 'yearly', lastmod: currentDate },
    { loc: '/accessibility', priority: 0.4, changefreq: 'yearly', lastmod: currentDate },
    { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly', lastmod: currentDate },
    { loc: '/terms-of-service', priority: 0.3, changefreq: 'yearly', lastmod: currentDate },
  ];

  // CRITICAL: Verify entries array has content
  if (!entries || entries.length === 0) {
    // Emergency fallback - create minimal sitemap
    entries = [{ loc: '/', priority: 1, changefreq: 'weekly', lastmod: currentDate }];
  }

  // Generate sitemap using helper function
  const sitemap = createSitemap(entries);

  // CRITICAL: Verify sitemap contains URLs before sending
  if (!sitemap || !sitemap.includes('<loc>')) {
    // Emergency fallback - return minimal valid sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.centennialhillshomesforsale.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
</urlset>`;
    
    const response = new Response(fallbackSitemap, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' },
    });
    ev.send(response);
    return;
  }

  // Use official Qwik SSR pattern: ev.send() with Response object
  const response = new Response(sitemap, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });

  ev.send(response);
};

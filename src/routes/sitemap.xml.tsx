import type { RequestHandler } from '@builder.io/qwik-city';
import { discoverRoutes } from '../../utils/route-discovery';

/**
 * Dynamic SEO-Optimized Sitemap Generator
 * 
 * Automatically discovers all routes from the application and generates
 * a comprehensive XML sitemap with intelligent priority and change frequency
 * assignment based on route patterns.
 * 
 * This sitemap is fully dynamic - when new routes are added to src/routes,
 * they will automatically appear in the sitemap (after updating route-discovery.ts)
 */
export const onGet: RequestHandler = (ev) => {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Dynamically discover all routes
  const pages = discoverRoutes();

  // Build XML sitemap - explicit construction to ensure it works
  const urlEntries: string[] = [];
  
  // Generate URL entries
  pages.forEach((page) => {
    const fullUrl = baseUrl + page.path;
    urlEntries.push('  <url>');
    urlEntries.push(`    <loc>${fullUrl}</loc>`);
    urlEntries.push(`    <lastmod>${currentDate}</lastmod>`);
    urlEntries.push(`    <changefreq>${page.changefreq}</changefreq>`);
    urlEntries.push(`    <priority>${page.priority}</priority>`);
    urlEntries.push('  </url>');
  });

  // Construct final XML
  const xmlContent = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>'
  ].join('\n');

  // Set headers
  ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
  ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  // Return XML
  return ev.text(200, xmlContent);
};

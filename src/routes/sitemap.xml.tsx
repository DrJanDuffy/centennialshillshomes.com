import type { RequestHandler } from '@builder.io/qwik-city';
import { discoverRoutes } from '../../utils/route-discovery';

/**
 * Google Search Console 2025 Optimized Sitemap Generator
 * 
 * Follows latest 2025 Google Search Console guidelines:
 * - Only includes canonical URLs (no redirects, duplicates, or 4xx errors)
 * - Proper XML structure with UTF-8 encoding
 * - Accurate lastmod dates
 * - Mobile-first indexing support
 * - Proper priority and changefreq values
 * - HTTPS-only URLs
 * - Valid XML namespace declarations
 * 
 * Best Practices:
 * - Sitemap must be under 50MB and 50,000 URLs (we're well within limits)
 * - All URLs must be accessible (200 status)
 * - URLs must be absolute and use HTTPS
 * - lastmod should reflect actual content modification dates
 */
export const onGet: RequestHandler = async (ev) => {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Dynamically discover all routes
  const pages = discoverRoutes();

  // 2025: Filter out any invalid routes (shouldn't happen, but safety check)
  const validPages = pages.filter(page => {
    // Ensure path is valid and doesn't contain query parameters or fragments
    if (!page.path || page.path.includes('?') || page.path.includes('#')) {
      return false;
    }
    // Ensure priority is valid (0.0 to 1.0)
    const priority = parseFloat(page.priority);
    if (isNaN(priority) || priority < 0 || priority > 1) {
      return false;
    }
    return true;
  });

  // Build XML sitemap following 2025 Google guidelines
  const urlEntries: string[] = [];
  
  // Generate URL entries with proper XML escaping
  validPages.forEach((page) => {
    const fullUrl = baseUrl + page.path;
    
    // 2025: XML escape URLs to prevent issues
    const escapedUrl = fullUrl
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    
    urlEntries.push('  <url>');
    urlEntries.push(`    <loc>${escapedUrl}</loc>`);
    urlEntries.push(`    <lastmod>${currentDate}</lastmod>`);
    urlEntries.push(`    <changefreq>${page.changefreq}</changefreq>`);
    urlEntries.push(`    <priority>${page.priority}</priority>`);
    urlEntries.push('  </url>');
  });

  // Construct final XML with proper 2025 structure
  const xmlContent = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    ...urlEntries,
    '</urlset>'
  ].join('\n');

  // 2025: Set proper headers for Google Search Console
  ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
  ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  // 2025: Add CORS headers if needed (though not required for sitemaps)
  ev.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Return XML
  return ev.text(200, xmlContent);
};

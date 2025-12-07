import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Google Search Console 2025 Optimized Sitemap Generator
 * 
 * Using file route pattern (like robots.txt.tsx) for maximum compatibility
 * Direct string building - no helper functions, no template literal tricks
 */
export const onGet: RequestHandler = (ev) => {
  // CRITICAL: Set headers FIRST before any processing
  ev.headers.set('Content-Type', 'text/xml; charset=utf-8');
  ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  const baseUrl = 'https://www.centennialhillshomesforsale.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // All canonical content pages - 75 pages total
  // CRITICAL: Ensure array is never empty
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/centennial-hills-homes', priority: '1.0', changefreq: 'daily' },
    { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
    { loc: '/centennial-hills', priority: '0.9', changefreq: 'weekly' },
    { loc: '/centennial-hills-homes-for-sale', priority: '0.9', changefreq: 'daily' },
    { loc: '/properties', priority: '0.9', changefreq: 'daily' },
    { loc: '/our-luxury-listings', priority: '0.9', changefreq: 'daily' },
    { loc: '/active-listings', priority: '0.9', changefreq: 'daily' },
    { loc: '/mls-search', priority: '0.9', changefreq: 'daily' },
    { loc: '/buy-a-home', priority: '0.9', changefreq: 'weekly' },
    { loc: '/sell-a-home', priority: '0.9', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/centennial-hills-luxury-homes', priority: '0.8', changefreq: 'weekly' },
    { loc: '/centennial-hills-new-construction', priority: '0.8', changefreq: 'weekly' },
    { loc: '/centennial-hills-89135', priority: '0.8', changefreq: 'weekly' },
    { loc: '/centennial-hills-89138', priority: '0.8', changefreq: 'weekly' },
    { loc: '/centennial-hills-89144', priority: '0.8', changefreq: 'weekly' },
    { loc: '/investment-properties', priority: '0.8', changefreq: 'weekly' },
    { loc: '/virtual-tours', priority: '0.8', changefreq: 'weekly' },
    { loc: '/recent-sales', priority: '0.8', changefreq: 'weekly' },
    { loc: '/luxury-estates', priority: '0.8', changefreq: 'weekly' },
    { loc: '/luxury-home-sales', priority: '0.8', changefreq: 'monthly' },
    { loc: '/buyers', priority: '0.8', changefreq: 'weekly' },
    { loc: '/first-time-homebuyers', priority: '0.8', changefreq: 'monthly' },
    { loc: '/luxury-home-buyers', priority: '0.8', changefreq: 'monthly' },
    { loc: '/california-equity-buyers', priority: '0.8', changefreq: 'monthly' },
    { loc: '/home-valuation', priority: '0.8', changefreq: 'weekly' },
    { loc: '/market-analysis', priority: '0.8', changefreq: 'weekly' },
    { loc: '/janet-duffy', priority: '0.8', changefreq: 'monthly' },
    { loc: '/neighborhoods', priority: '0.8', changefreq: 'weekly' },
    { loc: '/area-explorer', priority: '0.8', changefreq: 'weekly' },
    { loc: '/the-ridges', priority: '0.8', changefreq: 'weekly' },
    { loc: '/summerlin-west', priority: '0.8', changefreq: 'weekly' },
    { loc: '/summerlin', priority: '0.8', changefreq: 'weekly' },
    { loc: '/corporate-relocation-services', priority: '0.8', changefreq: 'monthly' },
    { loc: '/market-reports', priority: '0.8', changefreq: 'weekly' },
    { loc: '/centennial-hills-market-report', priority: '0.8', changefreq: 'weekly' },
    { loc: '/buying-guide', priority: '0.8', changefreq: 'monthly' },
    { loc: '/selling-guide', priority: '0.8', changefreq: 'monthly' },
    { loc: '/homes-400k-600k', priority: '0.8', changefreq: 'weekly' },
    { loc: '/homes-over-1m', priority: '0.8', changefreq: 'weekly' },
    { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
    { loc: '/market-insights', priority: '0.8', changefreq: 'weekly' },
    { loc: '/new-construction', priority: '0.8', changefreq: 'weekly' },
    { loc: '/commute-calculator', priority: '0.8', changefreq: 'monthly' },
    { loc: '/testimonials', priority: '0.7', changefreq: 'monthly' },
    { loc: '/north-las-vegas', priority: '0.7', changefreq: 'weekly' },
    { loc: '/northwest-las-vegas', priority: '0.7', changefreq: 'weekly' },
    { loc: '/aliante', priority: '0.7', changefreq: 'weekly' },
    { loc: '/sky-canyon', priority: '0.7', changefreq: 'weekly' },
    { loc: '/providence', priority: '0.7', changefreq: 'weekly' },
    { loc: '/tule-springs', priority: '0.7', changefreq: 'weekly' },
    { loc: '/red-rock-country-club', priority: '0.7', changefreq: 'weekly' },
    { loc: '/lone-mountain', priority: '0.7', changefreq: 'weekly' },
    { loc: '/centennial-hills-schools', priority: '0.7', changefreq: 'monthly' },
    { loc: '/best-schools-centennial-hills', priority: '0.7', changefreq: 'monthly' },
    { loc: '/condos-centennial-hills', priority: '0.7', changefreq: 'weekly' },
    { loc: '/golf-course-homes', priority: '0.7', changefreq: 'weekly' },
    { loc: '/homes-under-400k', priority: '0.7', changefreq: 'weekly' },
    { loc: '/mortgage-calculator', priority: '0.7', changefreq: 'monthly' },
    { loc: '/affordability-calculator', priority: '0.7', changefreq: 'monthly' },
    { loc: '/blog/category/buyer-guide', priority: '0.7', changefreq: 'monthly' },
    { loc: '/blog/category/market-updates', priority: '0.7', changefreq: 'weekly' },
    { loc: '/blog/category/seller-guide', priority: '0.7', changefreq: 'monthly' },
    { loc: '/search', priority: '0.7', changefreq: 'daily' },
    { loc: '/moving-guide', priority: '0.7', changefreq: 'monthly' },
    { loc: '/move-up-buyers', priority: '0.7', changefreq: 'monthly' },
    { loc: '/centennial-hills-amenities', priority: '0.6', changefreq: 'monthly' },
    { loc: '/centennial-hills-vs-summerlin', priority: '0.6', changefreq: 'monthly' },
    { loc: '/press-media', priority: '0.6', changefreq: 'monthly' },
    { loc: '/faq', priority: '0.6', changefreq: 'monthly' },
    { loc: '/local-business-optimization', priority: '0.6', changefreq: 'monthly' },
    { loc: '/fair-housing', priority: '0.5', changefreq: 'yearly' },
    { loc: '/accessibility', priority: '0.4', changefreq: 'yearly' },
    { loc: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  ];

  // CRITICAL: Validate pages array
  if (!pages || pages.length === 0) {
    // Emergency fallback - return minimal valid sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    ev.text(200, fallbackSitemap);
    return;
  }

  // Build XML directly - EXACT pattern from robots.txt.tsx
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  
  // Generate each URL entry - guaranteed to execute
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (!page || !page.loc) continue; // Skip invalid entries
    
    const fullUrl = baseUrl + (page.loc.startsWith('/') ? page.loc : '/' + page.loc);
    sitemap += '  <url>\n';
    sitemap += `    <loc>${fullUrl}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  }
  
  sitemap += '</urlset>';

  // CRITICAL: Verify sitemap contains URLs before returning
  if (!sitemap.includes('<loc>')) {
    // Emergency fallback
    sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  }
  
  // Return XML - same pattern as robots.txt
  ev.text(200, sitemap);
};


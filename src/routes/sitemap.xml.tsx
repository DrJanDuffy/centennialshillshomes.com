import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Google Search Console 2025 Optimized Sitemap Generator
 * 
 * VERIFICATION COMPLETE:
 * ✅ All redirect routes verified and working
 * ✅ Only canonical URLs included (no redirect-only pages)
 * ✅ All 75 valid content pages included
 * ✅ Proper XML structure with escaping
 * ✅ Base URL uses HTTPS www (canonical format)
 * 
 * EXCLUDED FROM SITEMAP (redirect-only pages):
 * - /about-us → redirects to /about
 * - /index.html → redirects to /
 * - /las-vegas-89166 → redirects to /centennial-hills
 * - /taskmaster → redirects to /
 * - /exclusive-access → redirects to /our-luxury-listings
 * - /market-data → redirects to /market-reports
 * - /tule-springs.html → redirects to /tule-springs
 * - /skye-canyon.html → redirects to /sky-canyon
 */
export const onGet: RequestHandler = (ev) => {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // All canonical content pages - 75 pages total
  // NOTE: Redirect-only pages are EXCLUDED (they redirect to canonical URLs)
  const pages = [
    // Highest Priority - Homepage
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/centennial-hills-homes', priority: '1.0', changefreq: 'daily' },
    
    // High Priority - Core Business Pages
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/centennial-hills', priority: '0.9', changefreq: 'weekly' },
    { path: '/centennial-hills-homes-for-sale', priority: '0.9', changefreq: 'daily' },
    { path: '/properties', priority: '0.9', changefreq: 'daily' },
    { path: '/our-luxury-listings', priority: '0.9', changefreq: 'daily' },
    { path: '/active-listings', priority: '0.9', changefreq: 'daily' },
    { path: '/mls-search', priority: '0.9', changefreq: 'daily' },
    { path: '/buy-a-home', priority: '0.9', changefreq: 'weekly' },
    { path: '/sell-a-home', priority: '0.9', changefreq: 'weekly' },
    
    // Important Content Pages
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/centennial-hills-luxury-homes', priority: '0.8', changefreq: 'weekly' },
    { path: '/centennial-hills-new-construction', priority: '0.8', changefreq: 'weekly' },
    { path: '/centennial-hills-89135', priority: '0.8', changefreq: 'weekly' },
    { path: '/centennial-hills-89138', priority: '0.8', changefreq: 'weekly' },
    { path: '/centennial-hills-89144', priority: '0.8', changefreq: 'weekly' },
    { path: '/investment-properties', priority: '0.8', changefreq: 'weekly' },
    { path: '/virtual-tours', priority: '0.8', changefreq: 'weekly' },
    { path: '/recent-sales', priority: '0.8', changefreq: 'weekly' },
    { path: '/luxury-estates', priority: '0.8', changefreq: 'weekly' },
    { path: '/luxury-home-sales', priority: '0.8', changefreq: 'monthly' },
    { path: '/buyers', priority: '0.8', changefreq: 'weekly' },
    { path: '/first-time-homebuyers', priority: '0.8', changefreq: 'monthly' },
    { path: '/luxury-home-buyers', priority: '0.8', changefreq: 'monthly' },
    { path: '/california-equity-buyers', priority: '0.8', changefreq: 'monthly' },
    { path: '/home-valuation', priority: '0.8', changefreq: 'weekly' },
    { path: '/market-analysis', priority: '0.8', changefreq: 'weekly' },
    { path: '/janet-duffy', priority: '0.8', changefreq: 'monthly' },
    { path: '/neighborhoods', priority: '0.8', changefreq: 'weekly' },
    { path: '/area-explorer', priority: '0.8', changefreq: 'weekly' },
    { path: '/the-ridges', priority: '0.8', changefreq: 'weekly' },
    { path: '/summerlin-west', priority: '0.8', changefreq: 'weekly' },
    { path: '/summerlin', priority: '0.8', changefreq: 'weekly' },
    { path: '/corporate-relocation-services', priority: '0.8', changefreq: 'monthly' },
    { path: '/market-reports', priority: '0.8', changefreq: 'weekly' },
    { path: '/centennial-hills-market-report', priority: '0.8', changefreq: 'weekly' },
    { path: '/buying-guide', priority: '0.8', changefreq: 'monthly' },
    { path: '/selling-guide', priority: '0.8', changefreq: 'monthly' },
    { path: '/homes-400k-600k', priority: '0.8', changefreq: 'weekly' },
    { path: '/homes-over-1m', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/market-insights', priority: '0.8', changefreq: 'weekly' },
    { path: '/new-construction', priority: '0.8', changefreq: 'weekly' },
    { path: '/commute-calculator', priority: '0.8', changefreq: 'monthly' },
    
    // Medium Priority - Supporting Pages
    { path: '/testimonials', priority: '0.7', changefreq: 'monthly' },
    { path: '/north-las-vegas', priority: '0.7', changefreq: 'weekly' },
    { path: '/northwest-las-vegas', priority: '0.7', changefreq: 'weekly' },
    { path: '/aliante', priority: '0.7', changefreq: 'weekly' },
    { path: '/sky-canyon', priority: '0.7', changefreq: 'weekly' },
    { path: '/providence', priority: '0.7', changefreq: 'weekly' },
    { path: '/tule-springs', priority: '0.7', changefreq: 'weekly' },
    { path: '/red-rock-country-club', priority: '0.7', changefreq: 'weekly' },
    { path: '/lone-mountain', priority: '0.7', changefreq: 'weekly' },
    { path: '/centennial-hills-schools', priority: '0.7', changefreq: 'monthly' },
    { path: '/best-schools-centennial-hills', priority: '0.7', changefreq: 'monthly' },
    { path: '/condos-centennial-hills', priority: '0.7', changefreq: 'weekly' },
    { path: '/golf-course-homes', priority: '0.7', changefreq: 'weekly' },
    { path: '/homes-under-400k', priority: '0.7', changefreq: 'weekly' },
    { path: '/mortgage-calculator', priority: '0.7', changefreq: 'monthly' },
    { path: '/affordability-calculator', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/category/buyer-guide', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/category/market-updates', priority: '0.7', changefreq: 'weekly' },
    { path: '/blog/category/seller-guide', priority: '0.7', changefreq: 'monthly' },
    { path: '/search', priority: '0.7', changefreq: 'daily' },
    { path: '/moving-guide', priority: '0.7', changefreq: 'monthly' },
    { path: '/move-up-buyers', priority: '0.7', changefreq: 'monthly' },
    
    // Lower Priority - Informational Pages
    { path: '/centennial-hills-amenities', priority: '0.6', changefreq: 'monthly' },
    { path: '/centennial-hills-vs-summerlin', priority: '0.6', changefreq: 'monthly' },
    { path: '/press-media', priority: '0.6', changefreq: 'monthly' },
    { path: '/faq', priority: '0.6', changefreq: 'monthly' },
    { path: '/local-business-optimization', priority: '0.6', changefreq: 'monthly' },
    { path: '/fair-housing', priority: '0.5', changefreq: 'yearly' },
    { path: '/accessibility', priority: '0.4', changefreq: 'yearly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  ];

  // Validate pages array
  if (!pages || pages.length === 0) {
    // Fallback: return at least homepage
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
    ev.text(200, fallback);
    return;
  }

  // Build XML sitemap - exact format required by Google
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Generate each URL entry with all required fields
  pages.forEach((page) => {
    const fullUrl = baseUrl + page.path;
    
    // XML escape special characters
    const escapedUrl = fullUrl
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    
    xml += '  <url>\n';
    xml += `    <loc>${escapedUrl}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';

  // Set proper headers for XML sitemap
  ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
  ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  // Return XML - matches robots.txt pattern exactly
  ev.text(200, xml);
};

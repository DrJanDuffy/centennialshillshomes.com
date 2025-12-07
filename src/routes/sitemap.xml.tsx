import type { RequestHandler } from '@builder.io/qwik-city';

/**
 * Google Search Console 2025 Optimized Sitemap Generator
 * 
 * Simple, direct implementation matching robots.txt pattern
 * All 75 canonical pages included
 */
export const onGet: RequestHandler = (ev) => {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // All canonical content pages - 75 pages total
  const allPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/centennial-hills-homes', priority: '1.0', changefreq: 'daily' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/centennial-hills', priority: '0.9', changefreq: 'weekly' },
    { path: '/centennial-hills-homes-for-sale', priority: '0.9', changefreq: 'daily' },
    { path: '/properties', priority: '0.9', changefreq: 'daily' },
    { path: '/our-luxury-listings', priority: '0.9', changefreq: 'daily' },
    { path: '/active-listings', priority: '0.9', changefreq: 'daily' },
    { path: '/mls-search', priority: '0.9', changefreq: 'daily' },
    { path: '/buy-a-home', priority: '0.9', changefreq: 'weekly' },
    { path: '/sell-a-home', priority: '0.9', changefreq: 'weekly' },
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

  // Filter out any invalid entries (defensive programming)
  const pages = allPages.filter(page => 
    page && 
    page.path && 
    typeof page.path === 'string' && 
    page.path.length > 0 &&
    page.priority &&
    page.changefreq
  );

  // Ensure we have at least one page (fallback to homepage)
  if (pages.length === 0) {
    pages.push({ path: '/', priority: '1.0', changefreq: 'weekly' });
  }

  // Build XML sitemap - simple and direct like robots.txt
  const urlEntries: string[] = [];
  
  // Add each URL entry - ensure every entry has proper structure
  for (const page of pages) {
    if (!page || !page.path) continue; // Skip invalid entries
    
    const url = baseUrl + page.path;
    
    // Ensure URL is valid
    if (!url || url.length === 0) continue;
    
    // Build URL entry
    urlEntries.push('  <url>');
    urlEntries.push(`    <loc>${url}</loc>`);
    urlEntries.push(`    <lastmod>${currentDate}</lastmod>`);
    urlEntries.push(`    <changefreq>${page.changefreq || 'weekly'}</changefreq>`);
    urlEntries.push(`    <priority>${page.priority || '0.5'}</priority>`);
    urlEntries.push('  </url>');
  }
  
  // CRITICAL: Ensure we have at least one URL entry
  if (urlEntries.length === 0) {
    // Fallback to homepage only
    urlEntries.push('  <url>');
    urlEntries.push(`    <loc>${baseUrl}/</loc>`);
    urlEntries.push(`    <lastmod>${currentDate}</lastmod>`);
    urlEntries.push('    <changefreq>weekly</changefreq>');
    urlEntries.push('    <priority>1.0</priority>');
    urlEntries.push('  </url>');
  }
  
  // Build final XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>`;

  // Set headers exactly like robots.txt
  ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
  ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  // Return XML
  ev.text(200, xml);
};

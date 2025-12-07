/**
 * Sitemap XML generator function
 * Simplified, bulletproof implementation
 */

export interface SitemapEntry {
  loc: string;
  priority: number | string;
  changefreq?: string;
  lastmod?: string;
}

export function createSitemap(entries: SitemapEntry[]): string {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';

  // CRITICAL: Ensure we always have at least one entry
  if (!entries || entries.length === 0) {
    entries = [{ loc: '/', priority: 1, changefreq: 'weekly', lastmod: new Date().toISOString().split('T')[0] }];
  }

  // Build XML directly - no template literal tricks, just straightforward string building
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  
  // Generate each URL entry - guaranteed to execute
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry || !entry.loc) continue;
    
    const url = baseUrl + (entry.loc.startsWith('/') ? entry.loc : '/' + entry.loc);
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    
    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }
    
    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }
    
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';

  // CRITICAL: Verify XML contains URLs before returning
  if (!xml.includes('<loc>')) {
    // Emergency fallback - add homepage
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>1</priority>\n';
    xml += '  </url>\n';
    xml += '</urlset>';
  }

  return xml;
}

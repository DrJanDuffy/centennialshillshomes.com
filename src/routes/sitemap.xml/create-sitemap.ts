/**
 * Sitemap XML generator function
 * Matches Qwik documentation pattern exactly
 */

export interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

export function createSitemap(entries: SitemapEntry[]) {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';

  // Ensure entries array is not empty
  if (!entries || entries.length === 0) {
    // Fallback: return minimal valid sitemap with homepage
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  }

  // Build XML with proper formatting - fix formatting issue
  const urlEntries = entries.map((entry) => {
    const url = `${baseUrl}${entry.loc.startsWith('/') ? '' : '/'}${entry.loc}`;
    let urlXml = `  <url>
    <loc>${url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    urlXml += `\n    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
    
    return urlXml;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries.join('\n')}
</urlset>`;

  return xml;
}


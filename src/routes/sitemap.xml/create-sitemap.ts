/**
 * Sitemap XML generator function
 * Matches Qwik documentation pattern exactly with additional SEO fields
 */

export interface SitemapEntry {
  loc: string;
  priority: number | string;
  changefreq?: string;
  lastmod?: string;
}

export function createSitemap(entries: SitemapEntry[]) {
  const baseUrl = 'https://www.centennialhillshomesforsale.com';

  // Ensure entries array is not empty - fallback to homepage
  if (!entries || entries.length === 0) {
    return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1</priority>
  </url>
</urlset>`.trim();
  }

  // Build XML matching Qwik docs pattern exactly
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.map(
  (entry) => `
  <url>
    <loc>${baseUrl}${entry.loc.startsWith('/') ? '' : '/'}${entry.loc}</loc>
    ${entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : ''}    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>\n    ` : ''}<priority>${entry.priority}</priority>
  </url>`,
).join('')}
</urlset>`.trim();
}


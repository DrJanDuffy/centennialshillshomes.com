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

  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.map(
  (entry) => `
  <url>
    <loc>${baseUrl}${entry.loc.startsWith('/') ? '' : '/'}${entry.loc}</loc>
    ${entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : ''}    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
).join('')}
</urlset>`.trim();
}


export interface SitemapEntry {
  loc: string;
  priority: number;
  changefreq?: string;
  lastmod?: string;
}

export function createSitemap(entries: SitemapEntry[]) {
  const baseUrl = "https://www.centennialhillshomesforsale.com";

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${baseUrl}${entry.loc.startsWith("/") ? "" : "/"}${entry.loc}</loc>
    <lastmod>${entry.lastmod || new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${entry.changefreq || "monthly"}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`.trim();
}

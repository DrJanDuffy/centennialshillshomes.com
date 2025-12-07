import type { RequestHandler } from '@builder.io/qwik-city';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Serve static sitemap.xml file
 * This ensures the sitemap is always available even if static file serving has issues
 */
export const onGet: RequestHandler = (ev) => {
  try {
    // Read the static sitemap file
    const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
    const sitemap = readFileSync(sitemapPath, 'utf-8');

    ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
    ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    return ev.text(200, sitemap);
  } catch (error) {
    // Fallback: generate minimal sitemap if file read fails
    const baseUrl = 'https://www.centennialhillshomesforsale.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/centennial-hills-homes</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    ev.headers.set('Content-Type', 'application/xml; charset=utf-8');
    ev.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    return ev.text(200, fallbackSitemap);
  }
};


import { component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = (ev) => {
  // 2025: Optimized robots.txt following Google Search Console best practices
  const robotsTxt = `# robots.txt for centennialhillshomesforsale.com
# Generated: 2025-12-07
# Centennial Hills Real Estate - Dr. Jan Duffy

# Allow all search engines
User-agent: *
Allow: /

# Optimize for Google
User-agent: Googlebot
Allow: /

# Optimize for Bing
User-agent: Bingbot
Allow: /

# Disallow test and development pages
Disallow: /map-test/
Disallow: /api-test/
Disallow: /realscout-test/
Disallow: /realscout-simple-test/
Disallow: /test-simple/
Disallow: /minimal/
Disallow: /demo/

# Disallow redirect pages (these redirect to canonical URLs)
Disallow: /tule-springs.html
Disallow: /skye-canyon.html

# Sitemap location (must use HTTPS with www)
Sitemap: https://www.centennialhillshomesforsale.com/sitemap.xml`;

  ev.headers.set('Content-Type', 'text/plain');
  ev.text(200, robotsTxt);
};







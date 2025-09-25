import { component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.centennialhillshomesforsale.com/sitemap.xml

# Disallow test pages
Disallow: /map-test/
Disallow: /api-test/

# Allow important pages
Allow: /
Allow: /centennial-hills/
Allow: /properties/
Allow: /luxury-home-sales/
Allow: /contact/
Allow: /about/

# Crawl delay for better server performance
Crawl-delay: 1`;

  response.headers.set('Content-Type', 'text/plain');
  return robotsTxt;
};






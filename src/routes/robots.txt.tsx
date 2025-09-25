import { component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.centennialhillshomesforsale.com/sitemap.xml

# Disallow test pages and development areas
Disallow: /map-test/
Disallow: /api-test/
Disallow: /realscout-test/
Disallow: /realscout-simple-test/
Disallow: /test-simple/
Disallow: /minimal/
Disallow: /demo/

# Disallow redirect pages
Disallow: /tule-springs.html
Disallow: /skye-canyon.html

# Allow important pages
Allow: /
Allow: /centennial-hills/
Allow: /centennial-hills-homes/
Allow: /centennial-hills-homes-for-sale/
Allow: /centennial-hills-luxury-homes/
Allow: /centennial-hills-new-construction/
Allow: /centennial-hills-89135/
Allow: /centennial-hills-89138/
Allow: /centennial-hills-89144/
Allow: /properties/
Allow: /luxury-home-sales/
Allow: /our-luxury-listings/
Allow: /active-listings/
Allow: /mls-search/
Allow: /contact/
Allow: /about/
Allow: /about-us/
Allow: /buy-a-home/
Allow: /sell-a-home/
Allow: /home-valuation/
Allow: /market-analysis/
Allow: /janet-duffy/
Allow: /testimonials/
Allow: /blog/
Allow: /buyers/
Allow: /neighborhoods/
Allow: /area-explorer/
Allow: /search/

# Crawl delay for better server performance
Crawl-delay: 1`;

  response.headers.set('Content-Type', 'text/plain');
  return robotsTxt;
};







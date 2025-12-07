/**
 * Route Discovery Utility
 * Automatically discovers routes from the file system structure
 * and assigns intelligent priorities and change frequencies
 */

export interface SitemapPage {
  path: string;
  priority: string;
  changefreq: string;
}

/**
 * Routes to exclude from sitemap
 */
const EXCLUDED_ROUTES = [
  '/sitemap.xml',
  '/robots.txt',
  '/service-worker',
  '/api-test',
  '/map-test',
  '/maps-test',
  '/demo',
  '/test-seo-content',
  '/google[verification].html',
  '/tule-springs.html',
  '/skye-canyon.html',
  '/blog/rss-test',
  '/index.tsx.backup',
];

/**
 * Priority rules based on route patterns
 */
const PRIORITY_RULES: Array<{
  pattern: RegExp | string;
  priority: string;
  changefreq: string;
}> = [
  // Highest priority - homepage
  { pattern: '^/$', priority: '1.0', changefreq: 'weekly' },
  
  // High priority - core business pages
  { pattern: '^/(centennial-hills-homes|properties|our-luxury-listings|active-listings|mls-search|contact)$', priority: '0.9', changefreq: 'daily' },
  { pattern: '^/(buy-a-home|sell-a-home|centennial-hills|centennial-hills-homes-for-sale)$', priority: '0.9', changefreq: 'weekly' },
  
  // Important content pages
  { pattern: '^/(centennial-hills-luxury-homes|centennial-hills-new-construction|investment-properties|virtual-tours|recent-sales|luxury-estates)$', priority: '0.8', changefreq: 'weekly' },
  { pattern: '^/centennial-hills-89', priority: '0.8', changefreq: 'weekly' },
  { pattern: '^/(home-valuation|market-analysis|commute-calculator)$', priority: '0.8', changefreq: 'weekly' },
  { pattern: '^/(buyers|neighborhoods|area-explorer|the-ridges|summerlin|new-construction|blog|market-insights)$', priority: '0.8', changefreq: 'weekly' },
  { pattern: '^/(about|about-us|janet-duffy|first-time-homebuyers|luxury-home-buyers|california-equity-buyers|corporate-relocation-services)$', priority: '0.8', changefreq: 'monthly' },
  { pattern: '^/(buying-guide|selling-guide|luxury-home-sales|market-reports|centennial-hills-market-report)$', priority: '0.8', changefreq: 'monthly' },
  { pattern: '^/(homes-400k-600k|homes-over-1m)$', priority: '0.8', changefreq: 'weekly' },
  
  // Medium priority - supporting pages
  { pattern: '^/(north-las-vegas|northwest-las-vegas|aliante|sky-canyon|providence|tule-springs|red-rock-country-club|lone-mountain)$', priority: '0.7', changefreq: 'weekly' },
  { pattern: '^/(centennial-hills-schools|best-schools-centennial-hills|condos-centennial-hills|golf-course-homes|homes-under-400k)$', priority: '0.7', changefreq: 'weekly' },
  { pattern: '^/(mortgage-calculator|affordability-calculator|search|testimonials)$', priority: '0.7', changefreq: 'monthly' },
  { pattern: '^/blog/category/', priority: '0.7', changefreq: 'monthly' },
  { pattern: '^/(moving-guide|move-up-buyers)$', priority: '0.7', changefreq: 'monthly' },
  
  // Lower priority - informational pages
  { pattern: '^/(centennial-hills-amenities|centennial-hills-vs-summerlin|press-media|faq|local-business-optimization)$', priority: '0.6', changefreq: 'monthly' },
  { pattern: '^/fair-housing$', priority: '0.5', changefreq: 'yearly' },
  { pattern: '^/accessibility$', priority: '0.4', changefreq: 'yearly' },
  { pattern: '^/(privacy-policy|terms-of-service)$', priority: '0.3', changefreq: 'yearly' },
  
  // Default for any other routes
  { pattern: '.*', priority: '0.5', changefreq: 'monthly' },
];

/**
 * Get priority and changefreq for a route based on patterns
 */
function getRouteMetadata(path: string): { priority: string; changefreq: string } {
  // Check if route should be excluded
  if (EXCLUDED_ROUTES.some(excluded => path.includes(excluded))) {
    return { priority: '0.0', changefreq: 'never' };
  }
  
  // Find matching rule
  for (const rule of PRIORITY_RULES) {
    if (typeof rule.pattern === 'string') {
      if (path === rule.pattern || path.startsWith(rule.pattern)) {
        return { priority: rule.priority, changefreq: rule.changefreq };
      }
    } else {
      if (rule.pattern.test(path)) {
        return { priority: rule.priority, changefreq: rule.changefreq };
      }
    }
  }
  
  // Default fallback
  return { priority: '0.5', changefreq: 'monthly' };
}

/**
 * Convert file system path to URL path
 */
function pathToRoute(filePath: string): string {
  // Remove src/routes prefix
  let route = filePath.replace(/^src\/routes\//, '');
  
  // Remove /index.tsx suffix
  route = route.replace(/\/index\.tsx$/, '');
  
  // Remove .tsx extension
  route = route.replace(/\.tsx$/, '');
  
  // Handle special files (robots.txt.tsx, sitemap.xml.tsx)
  route = route.replace(/\.txt$/, '');
  route = route.replace(/\.xml$/, '');
  
  // Convert to URL path
  if (!route || route === 'index') {
    return '/';
  }
  
  // Handle bracket notation (e.g., google[verification].html)
  route = route.replace(/\[([^\]]+)\]/g, ':$1');
  
  return '/' + route;
}

/**
 * Discover all routes from the routes directory structure
 * This is a static list that represents all routes in the application
 */
export function discoverRoutes(): SitemapPage[] {
  // Static list of all routes discovered from src/routes directory
  // This gets updated when new routes are added
  const routeFiles = [
    // Root
    'index.tsx',
    
    // Core pages
    'about/index.tsx',
    'about-us/index.tsx',
    'contact/index.tsx',
    'properties/index.tsx',
    'centennial-hills/index.tsx',
    'centennial-hills-homes/index.tsx',
    'centennial-hills-homes-for-sale/index.tsx',
    'centennial-hills-luxury-homes/index.tsx',
    'centennial-hills-new-construction/index.tsx',
    'centennial-hills-89135/index.tsx',
    'centennial-hills-89138/index.tsx',
    'centennial-hills-89144/index.tsx',
    
    // Buy/Sell
    'buy-a-home/index.tsx',
    'sell-a-home/index.tsx',
    'buyers/index.tsx',
    'first-time-homebuyers/index.tsx',
    'luxury-home-buyers/index.tsx',
    'california-equity-buyers/index.tsx',
    'move-up-buyers/index.tsx',
    
    // Listings
    'our-luxury-listings/index.tsx',
    'active-listings/index.tsx',
    'mls-search/index.tsx',
    'investment-properties/index.tsx',
    'virtual-tours/index.tsx',
    'recent-sales/index.tsx',
    'luxury-estates/index.tsx',
    'luxury-home-sales/index.tsx',
    
    // Services
    'home-valuation/index.tsx',
    'market-analysis/index.tsx',
    'market-reports/index.tsx',
    'centennial-hills-market-report/index.tsx',
    'corporate-relocation-services/index.tsx',
    
    // Guides
    'buying-guide/index.tsx',
    'selling-guide/index.tsx',
    'moving-guide/index.tsx',
    
    // Neighborhoods
    'neighborhoods/index.tsx',
    'area-explorer/index.tsx',
    'north-las-vegas/index.tsx',
    'northwest-las-vegas/index.tsx',
    'aliante/index.tsx',
    'sky-canyon/index.tsx',
    'providence/index.tsx',
    'tule-springs/index.tsx',
    'red-rock-country-club/index.tsx',
    'lone-mountain/index.tsx',
    'the-ridges/index.tsx',
    'summerlin/index.tsx',
    'summerlin-west/index.tsx',
    
    // Property types
    'homes-400k-600k/index.tsx',
    'homes-over-1m/index.tsx',
    'homes-under-400k/index.tsx',
    'condos-centennial-hills/index.tsx',
    'golf-course-homes/index.tsx',
    
    // Calculators
    'commute-calculator/index.tsx',
    'mortgage-calculator/index.tsx',
    'affordability-calculator/index.tsx',
    
    // About
    'janet-duffy/index.tsx',
    'testimonials/index.tsx',
    'press-media/index.tsx',
    'market-insights/index.tsx',
    
    // Resources
    'faq/index.tsx',
    'blog/index.tsx',
    'blog/category/buyer-guide/index.tsx',
    'blog/category/market-updates/index.tsx',
    'blog/category/seller-guide/index.tsx',
    'search/index.tsx',
    
    // Community info
    'centennial-hills-schools/index.tsx',
    'best-schools-centennial-hills/index.tsx',
    'centennial-hills-amenities/index.tsx',
    'centennial-hills-vs-summerlin/index.tsx',
    'local-business-optimization/index.tsx',
    
    // New construction
    'new-construction/index.tsx',
    
    // Legal/Info
    'fair-housing/index.tsx',
    'accessibility/index.tsx',
    'privacy-policy/index.tsx',
    'terms-of-service/index.tsx',
  ];
  
  // Convert to sitemap pages with intelligent metadata
  const pages: SitemapPage[] = routeFiles
    .map(file => {
      const path = pathToRoute(file);
      const metadata = getRouteMetadata(path);
      
      // Skip excluded routes
      if (metadata.priority === '0.0') {
        return null;
      }
      
      return {
        path,
        priority: metadata.priority,
        changefreq: metadata.changefreq,
      };
    })
    .filter((page): page is SitemapPage => page !== null);
  
  // Sort by priority (highest first)
  pages.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  
  return pages;
}


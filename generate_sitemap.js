const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const baseUrl = 'https://www.centennialhillshomesforsale.com';
const currentDate = new Date().toISOString().split('T')[0];

// Pages to exclude from the sitemap
const EXCLUDE_PAGES = [
    'layout.tsx',
    'robots.txt.tsx',
    'sitemap.xml.tsx',
    'test-seo-content.tsx',
    'index.html', // Duplicate of /
    'skye-canyon.html', // Duplicate of /sky-canyon
    'tule-springs.html', // Duplicate of /tule-springs
    'google[verification].html', // Verification file
    'demo', // Demo folder
    'map-test', // Test page
    'maps-test', // Test page
    'taskmaster', // Test page
    'market-data', // Test page
    'exclusive-access', // Test page
];

// Map of route segments to their priority and changefreq
const ROUTE_CONFIG = {
    'index': { priority: '1.0', changefreq: 'weekly' },
    'centennial-hills-homes': { priority: '1.0', changefreq: 'daily' },
    'contact': { priority: '0.9', changefreq: 'monthly' },
    'centennial-hills': { priority: '0.9', changefreq: 'weekly' },
    'centennial-hills-homes-for-sale': { priority: '0.9', changefreq: 'daily' },
    'properties': { priority: '0.9', changefreq: 'daily' },
    'our-luxury-listings': { priority: '0.9', changefreq: 'daily' },
    'active-listings': { priority: '0.9', changefreq: 'daily' },
    'mls-search': { priority: '0.9', changefreq: 'daily' },
    'buy-a-home': { priority: '0.9', changefreq: 'weekly' },
    'sell-a-home': { priority: '0.9', changefreq: 'weekly' },
    'about': { priority: '0.8', changefreq: 'monthly' },
    'luxury-estates': { priority: '0.8', changefreq: 'weekly' },
    'home-valuation': { priority: '0.8', changefreq: 'weekly' },
    'market-analysis': { priority: '0.8', changefreq: 'weekly' },
    'janet-duffy': { priority: '0.8', changefreq: 'monthly' },
    'neighborhoods': { priority: '0.8', changefreq: 'weekly' },
    'area-explorer': { priority: '0.8', changefreq: 'weekly' },
    'the-ridges': { priority: '0.8', changefreq: 'weekly' },
    'summerlin-west': { priority: '0.8', changefreq: 'weekly' },
    'summerlin': { priority: '0.8', changefreq: 'weekly' },
    'corporate-relocation-services': { priority: '0.8', changefreq: 'monthly' },
    'market-reports': { priority: '0.8', changefreq: 'weekly' },
    'centennial-hills-market-report': { priority: '0.8', changefreq: 'weekly' },
    'buying-guide': { priority: '0.8', changefreq: 'monthly' },
    'selling-guide': { priority: '0.8', changefreq: 'monthly' },
    'homes-400k-600k': { priority: '0.8', changefreq: 'weekly' },
    'homes-over-1m': { priority: '0.8', changefreq: 'weekly' },
    'blog': { priority: '0.8', changefreq: 'weekly' },
    'market-insights': { priority: '0.8', changefreq: 'weekly' },
    'new-construction': { priority: '0.8', changefreq: 'weekly' },
    'commute-calculator': { priority: '0.8', changefreq: 'monthly' },
    'testimonials': { priority: '0.7', changefreq: 'monthly' },
    'north-las-vegas': { priority: '0.7', changefreq: 'weekly' },
    'northwest-las-vegas': { priority: '0.7', changefreq: 'weekly' },
    'aliante': { priority: '0.7', changefreq: 'weekly' },
    'sky-canyon': { priority: '0.7', changefreq: 'weekly' },
    'providence': { priority: '0.7', changefreq: 'weekly' },
    'tule-springs': { priority: '0.7', changefreq: 'weekly' },
    'red-rock-country-club': { priority: '0.7', changefreq: 'weekly' },
    'lone-mountain': { priority: '0.7', changefreq: 'weekly' },
    'centennial-hills-schools': { priority: '0.7', changefreq: 'monthly' },
    'best-schools-centennial-hills': { priority: '0.7', changefreq: 'monthly' },
    'condos-centennial-hills': { priority: '0.7', changefreq: 'weekly' },
    'golf-course-homes': { priority: '0.7', changefreq: 'weekly' },
    'homes-under-400k': { priority: '0.7', changefreq: 'weekly' },
    'mortgage-calculator': { priority: '0.7', changefreq: 'monthly' },
    'affordability-calculator': { priority: '0.7', changefreq: 'monthly' },
    'search': { priority: '0.7', changefreq: 'daily' },
    'moving-guide': { priority: '0.7', changefreq: 'monthly' },
    'move-up-buyers': { priority: '0.7', changefreq: 'monthly' },
    'centennial-hills-amenities': { priority: '0.6', changefreq: 'monthly' },
    'centennial-hills-vs-summerlin': { priority: '0.6', changefreq: 'monthly' },
    'press-media': { priority: '0.6', changefreq: 'monthly' },
    'faq': { priority: '0.6', changefreq: 'monthly' },
    'local-business-optimization': { priority: '0.6', changefreq: 'monthly' },
    'fair-housing': { priority: '0.5', changefreq: 'yearly' },
    'accessibility': { priority: '0.4', changefreq: 'yearly' },
    'privacy-policy': { priority: '0.3', changefreq: 'yearly' },
    'terms-of-service': { priority: '0.3', changefreq: 'yearly' },
    'buyers': { priority: '0.8', changefreq: 'weekly' },
    'first-time-homebuyers': { priority: '0.8', changefreq: 'monthly' },
    'luxury-home-buyers': { priority: '0.8', changefreq: 'monthly' },
    'california-equity-buyers': { priority: '0.8', changefreq: 'monthly' },
    'centennial-hills-luxury-homes': { priority: '0.8', changefreq: 'weekly' },
    'centennial-hills-new-construction': { priority: '0.8', changefreq: 'weekly' },
    'centennial-hills-89135': { priority: '0.8', changefreq: 'weekly' },
    'centennial-hills-89138': { priority: '0.8', changefreq: 'weekly' },
    'centennial-hills-89144': { priority: '0.8', changefreq: 'weekly' },
    'investment-properties': { priority: '0.8', changefreq: 'weekly' },
    'virtual-tours': { priority: '0.8', changefreq: 'weekly' },
    'recent-sales': { priority: '0.8', changefreq: 'weekly' },
    'luxury-home-sales': { priority: '0.8', changefreq: 'monthly' },
    'blog/category/buyer-guide': { priority: '0.7', changefreq: 'monthly' },
    'blog/category/market-updates': { priority: '0.7', changefreq: 'weekly' },
    'blog/category/seller-guide': { priority: '0.7', changefreq: 'monthly' },
    'las-vegas-89166': { priority: '0.7', changefreq: 'weekly' },
};

function getRoutes(dir) {
    let routes = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Check if the directory is an excluded page
            if (EXCLUDE_PAGES.includes(file)) {
                continue;
            }
            // Recursively get routes from subdirectories
            routes = routes.concat(getRoutes(fullPath));
        } else if (file.endsWith('.tsx') && file !== 'layout.tsx') {
            // Process .tsx files (routes)
            let routeSegment = path.relative(routesDir, fullPath)
                .replace(/\\/g, '/') // Normalize path separators
                .replace(/\.tsx$/, '')
                .replace(/\/index$/, ''); // Remove /index

            // Handle root index.tsx
            if (routeSegment === 'index') {
                routeSegment = '';
            }

            // Check for exclusions
            if (EXCLUDE_PAGES.some(excluded => routeSegment.includes(excluded))) {
                continue;
            }

            // Clean up dynamic route parts like [verification]
            routeSegment = routeSegment.replace(/\[.*?\]/, '');

            // Clean up .html routes
            routeSegment = routeSegment.replace(/\.html$/, '');

            // Skip empty segments that might result from cleaning
            if (routeSegment === '') {
                // Only include the root path once
                if (routes.some(r => r.loc === baseUrl + '/')) {
                    continue;
                }
            }

            // Construct the full URL
            const loc = baseUrl + '/' + routeSegment;
            const configKey = routeSegment === '' ? 'index' : routeSegment;
            const config = ROUTE_CONFIG[configKey] || { priority: '0.5', changefreq: 'monthly' };

            routes.push({
                loc: loc,
                lastmod: currentDate,
                changefreq: config.changefreq,
                priority: config.priority,
                configKey: configKey // For debugging
            });
        }
    }

    // Filter out duplicates based on 'loc'
    const uniqueRoutes = Array.from(new Map(routes.map(item => [item.loc, item])).values());

    return uniqueRoutes;
}

function generateSitemap(routes) {
    let urlEntries = routes.map(route => `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}

</urlset>`;
}

try {
    const routes = getRoutes(routesDir);
    const sitemapContent = generateSitemap(routes);
    
    // Write the new sitemap.xml to the public directory
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

    console.log("Successfully generated sitemap.xml with " + routes.length + " URLs at " + sitemapPath);
    // console.log(sitemapContent); // Print for verification if needed


} catch (error) {
    console.error('Error generating sitemap:', error);
}

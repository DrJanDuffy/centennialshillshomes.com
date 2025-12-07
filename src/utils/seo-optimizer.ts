/**
 * SEO Optimization Utility for Google Search Console 2025
 * Optimizes titles, meta descriptions, and content for top-3 real estate keyword rankings
 */

export interface SEOKeywords {
  primary: string; // Main keyword (e.g., "Centennial Hills Real Estate")
  secondary: string[]; // Supporting keywords
  location: string; // Location keyword (e.g., "Las Vegas")
  service?: string; // Service type (e.g., "Luxury Homes", "New Construction")
}

/**
 * Generate optimized title tag for top-3 rankings
 * Format: Primary Keyword | Service Type | Location | Brand
 * Max 60 characters for optimal display
 */
export function generateOptimizedTitle(keywords: SEOKeywords, brand: string = "Dr. Janet Duffy"): string {
  const parts: string[] = [];
  
  // Primary keyword (most important)
  parts.push(keywords.primary);
  
  // Service type if provided
  if (keywords.service) {
    parts.push(keywords.service);
  }
  
  // Location
  parts.push(keywords.location);
  
  // Brand (shorter version if needed)
  const shortBrand = brand.length > 20 ? "Dr. Jan Duffy" : brand;
  
  // Build title
  let title = parts.join(' | ');
  
  // Add brand if there's room (max 60 chars for optimal display)
  if (title.length + shortBrand.length + 3 <= 60) {
    title = `${title} | ${shortBrand}`;
  }
  
  // Ensure title doesn't exceed 60 characters (Google's optimal length)
  if (title.length > 60) {
    // Prioritize primary keyword and location
    title = `${keywords.primary} | ${keywords.location} | ${shortBrand}`;
  }
  
  return title;
}

/**
 * Generate optimized meta description
 * Format: Compelling description with primary keyword, location, and CTA
 * Max 155-160 characters for optimal display
 */
export function generateOptimizedDescription(
  keywords: SEOKeywords,
  valueProposition: string,
  cta?: string
): string {
  const parts: string[] = [];
  
  // Start with value proposition including primary keyword
  parts.push(valueProposition);
  
  // Add location for local SEO
  if (keywords.location && !valueProposition.includes(keywords.location)) {
    parts.push(`in ${keywords.location}`);
  }
  
  // Add service type if provided
  if (keywords.service && !valueProposition.includes(keywords.service)) {
    parts.push(keywords.service);
  }
  
  // Add CTA if provided
  if (cta) {
    parts.push(cta);
  }
  
  let description = parts.join('. ');
  
  // Ensure description is between 120-160 characters (optimal range)
  if (description.length > 160) {
    // Truncate intelligently
    description = description.substring(0, 157) + '...';
  } else if (description.length < 120) {
    // Add more context if too short
    description += `. Expert real estate services by Top 1% Las Vegas REALTOR®.`;
  }
  
  return description;
}

/**
 * Generate keyword-rich content suggestions
 * Helps ensure content matches user intent for target keywords
 */
export function generateContentSuggestions(keywords: SEOKeywords): {
  h1: string;
  h2s: string[];
  topics: string[];
} {
  const h1 = keywords.primary;
  
  const h2s: string[] = [
    `About ${keywords.primary}`,
    `${keywords.primary} ${keywords.service || 'Properties'}`,
    `Why Choose ${keywords.primary}`,
    `${keywords.location} Real Estate Market`,
    `Find ${keywords.service || 'Homes'} in ${keywords.location}`
  ];
  
  const topics: string[] = [
    `${keywords.primary} overview`,
    `${keywords.location} real estate trends`,
    `${keywords.service || 'Properties'} for sale`,
    `Market analysis for ${keywords.primary}`,
    `Investment opportunities in ${keywords.location}`,
    `Neighborhood features and amenities`,
    `Pricing and market data`,
    `Buying process in ${keywords.location}`,
    `Selling your ${keywords.service || 'home'} in ${keywords.primary}`
  ];
  
  return { h1, h2s, topics };
}

/**
 * Generate internal linking suggestions
 * Creates keyword-rich anchor text for better SEO
 */
export function generateInternalLinks(
  currentPage: string,
  keywords: SEOKeywords
): Array<{ text: string; url: string; keyword: string }> {
  const links: Array<{ text: string; url: string; keyword: string }> = [];
  
  // Location-based links
  if (currentPage !== '/centennial-hills') {
    links.push({
      text: `${keywords.location} real estate`,
      url: '/centennial-hills',
      keyword: `${keywords.location} real estate`
    });
  }
  
  // Service-based links
  if (keywords.service) {
    if (currentPage !== '/properties') {
      links.push({
        text: `${keywords.service} for sale`,
        url: '/properties',
        keyword: `${keywords.service} for sale`
      });
    }
    
    if (currentPage !== '/luxury-estates' && keywords.service.includes('Luxury')) {
      links.push({
        text: `luxury homes in ${keywords.location}`,
        url: '/luxury-estates',
        keyword: `luxury homes ${keywords.location}`
      });
    }
  }
  
  // Related service links
  links.push(
    {
      text: `home valuation in ${keywords.location}`,
      url: '/home-valuation',
      keyword: `home valuation ${keywords.location}`
    },
    {
      text: `market analysis for ${keywords.location}`,
      url: '/market-analysis',
      keyword: `market analysis ${keywords.location}`
    },
    {
      text: `contact ${keywords.location} real estate agent`,
      url: '/contact',
      keyword: `${keywords.location} real estate agent`
    }
  );
  
  return links;
}

/**
 * Real estate keyword sets for common page types
 */
export const realEstateKeywords = {
  homepage: {
    primary: "Centennial Hills Real Estate",
    secondary: ["luxury homes", "new construction", "Las Vegas properties"],
    location: "Las Vegas",
    service: "Luxury Real Estate"
  },
  
  neighborhood: (neighborhood: string) => ({
    primary: `${neighborhood} Real Estate`,
    secondary: [`${neighborhood} homes`, `${neighborhood} properties`, "Las Vegas real estate"],
    location: "Las Vegas",
    service: "Luxury Homes"
  }),
  
  service: (service: string) => ({
    primary: `${service} Services`,
    secondary: [`${service} in Las Vegas`, "real estate services", "property services"],
    location: "Las Vegas",
    service: service
  }),
  
  propertySearch: {
    primary: "Las Vegas Properties for Sale",
    secondary: ["homes for sale", "real estate listings", "property search"],
    location: "Las Vegas",
    service: "Property Search"
  }
};


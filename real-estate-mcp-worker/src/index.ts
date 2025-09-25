import { WorkerEntrypoint } from 'cloudflare:workers';
import { ProxyToSelf } from 'workers-mcp';

// Environment interface for type safety
interface Env {
  AI: any; // Cloudflare AI binding
  GOOGLE_MAPS_API_KEY: string;
  OPENAI_API_KEY: string;
  REAL_ESTATE_API_KEY: string;
  CLOUDFLARE_API_TOKEN: string;
  CLOUDFLARE_ZONE_ID: string;
  DNS_CACHE: KVNamespace; // KV storage for DNS record caching (FREE tier)
}

// DNS Record interface
interface DnsRecord {
  id: string;
  type: string;
  name: string;
  content: string;
  ttl: number;
  proxied: boolean;
  comment?: string;
  created_on: string;
  modified_on: string;
}

export default class RealEstateWorker extends WorkerEntrypoint<Env> {
  /**
   * Analyze Las Vegas real estate market trends for a specific ZIP code
   * @param zipCode {string} ZIP code to analyze (e.g., "89138", "89144", "89135")
   * @param propertyType {string} Type of property ("single-family", "condo", "townhouse")
   * @param timeframe {string} Analysis timeframe ("30days", "90days", "1year")
   * @return {object} Market analysis including price trends, inventory, and insights
   */
  async analyzeMarketTrends(zipCode: string, propertyType: string = "single-family", timeframe: string = "90days") {
    try {
      // Simulate market data analysis (replace with real API calls)
      const marketData = {
        zipCode,
        propertyType,
        timeframe,
        averagePrice: this.generateMockPrice(zipCode),
        priceChange: this.generateMockPriceChange(timeframe),
        inventory: this.generateMockInventory(zipCode),
        daysOnMarket: this.generateMockDaysOnMarket(zipCode),
        marketInsights: this.generateMarketInsights(zipCode, propertyType),
        recommendations: this.generateRecommendations(zipCode, propertyType)
      };

      return {
        success: true,
        data: marketData,
        timestamp: new Date().toISOString(),
        source: "Las Vegas Real Estate Market Analysis"
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Calculate commute times from Las Vegas neighborhoods to key destinations
   * @param fromLocation {string} Starting location (neighborhood or address)
   * @param toLocation {string} Destination (workplace, airport, strip, etc.)
   * @param travelMode {string} Travel mode ("driving", "transit", "walking", "bicycling")
   * @return {object} Commute analysis with times, distances, and recommendations
   */
  async calculateCommuteTime(fromLocation: string, toLocation: string, travelMode: string = "driving") {
    try {
      // Mock commute calculation (replace with Google Maps API integration)
      const commuteData = {
        from: fromLocation,
        to: toLocation,
        travelMode,
        duration: this.generateMockDuration(fromLocation, toLocation, travelMode),
        distance: this.generateMockDistance(fromLocation, toLocation),
        trafficConditions: this.generateMockTrafficConditions(),
        alternativeRoutes: this.generateMockAlternativeRoutes(fromLocation, toLocation),
        recommendations: this.generateCommuteRecommendations(fromLocation, toLocation, travelMode)
      };

      return {
        success: true,
        data: commuteData,
        timestamp: new Date().toISOString(),
        source: "Las Vegas Commute Analysis"
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Generate property descriptions using AI for real estate listings
   * @param propertyType {string} Type of property ("single-family", "condo", "townhouse", "luxury")
   * @param bedrooms {number} Number of bedrooms
   * @param bathrooms {number} Number of bathrooms
   * @param squareFeet {number} Square footage
   * @param neighborhood {string} Neighborhood name
   * @param features {string} Special features or amenities
   * @return {object} AI-generated property description and marketing copy
   */
  async generatePropertyDescription(
    propertyType: string,
    bedrooms: number,
    bathrooms: number,
    squareFeet: number,
    neighborhood: string,
    features: string = ""
  ) {
    try {
      const prompt = `Create a compelling real estate listing description for a ${propertyType} home in ${neighborhood}, Las Vegas. 
      Property details: ${bedrooms} bedrooms, ${bathrooms} bathrooms, ${squareFeet} square feet.
      Special features: ${features}.
      
      Make it professional, engaging, and highlight the Las Vegas lifestyle and location benefits. 
      Include information about nearby amenities, commute times to major destinations, and investment potential.`;

      // Use Cloudflare AI to generate the description
      const response = await this.env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500
      });

      return {
        success: true,
        data: {
          propertyType,
          bedrooms,
          bathrooms,
          squareFeet,
          neighborhood,
          features,
          description: response.response,
          marketingCopy: this.generateMarketingCopy(neighborhood, propertyType),
          seoKeywords: this.generateSEOKeywords(neighborhood, propertyType)
        },
        timestamp: new Date().toISOString(),
        source: "AI Property Description Generator"
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Analyze neighborhood demographics and lifestyle information
   * @param neighborhood {string} Neighborhood name (e.g., "Centennial Hills", "Summerlin", "Red Rock Country Club")
   * @return {object} Demographics, amenities, schools, and lifestyle analysis
   */
  async analyzeNeighborhood(neighborhood: string) {
    try {
      const neighborhoodData = {
        name: neighborhood,
        demographics: this.generateMockDemographics(neighborhood),
        amenities: this.generateMockAmenities(neighborhood),
        schools: this.generateMockSchools(neighborhood),
        lifestyle: this.generateMockLifestyle(neighborhood),
        investmentPotential: this.generateMockInvestmentPotential(neighborhood),
        commuteOptions: this.generateMockCommuteOptions(neighborhood)
      };

      return {
        success: true,
        data: neighborhoodData,
        timestamp: new Date().toISOString(),
        source: "Las Vegas Neighborhood Analysis"
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Generate property valuation estimate using AI and market data
   * @param address {string} Property address
   * @param bedrooms {number} Number of bedrooms
   * @param bathrooms {number} Number of bathrooms
   * @param squareFeet {number} Square footage
   * @param yearBuilt {number} Year built
   * @param lotSize {number} Lot size in square feet
   * @return {object} Property valuation with confidence score and market comparison
   */
  async estimatePropertyValue(
    address: string,
    bedrooms: number,
    bathrooms: number,
    squareFeet: number,
    yearBuilt: number,
    lotSize: number
  ) {
    try {
      const valuationData = {
        address,
        bedrooms,
        bathrooms,
        squareFeet,
        yearBuilt,
        lotSize,
        estimatedValue: this.generateMockValuation(address, squareFeet, bedrooms),
        confidenceScore: this.generateMockConfidenceScore(),
        marketComparison: this.generateMockMarketComparison(address),
        factors: this.generateMockValuationFactors(address, squareFeet, bedrooms),
        recommendations: this.generateMockValuationRecommendations(address)
      };

      return {
        success: true,
        data: valuationData,
        timestamp: new Date().toISOString(),
        source: "AI Property Valuation Engine"
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Generate property images using AI for marketing materials
   * @param propertyDescription {string} Detailed description of the property
   * @param style {string} Image style ("realistic", "luxury", "modern", "traditional")
   * @return {Response} Generated property image
   */
  async generatePropertyImage(propertyDescription: string, style: string = "realistic") {
    try {
      const prompt = `Create a ${style} real estate marketing image of: ${propertyDescription}. 
      Include Las Vegas landscape elements, modern architecture, and professional real estate photography style. 
      High quality, 4K resolution, suitable for property listings.`;

      const response = await this.env.AI.run('@cf/black-forest-labs/flux-1-schnell', {
        prompt,
        steps: 8,
        aspect_ratio: "16:9"
      });

      // Convert from base64 string
      const binaryString = atob(response.image);
      const img = Uint8Array.from(binaryString, (m) => m.codePointAt(0)!);

      return new Response(img, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=3600'
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  /**
   * Pull DNS records from Cloudflare for centennialshillshomes.com
   * Optimized for FREE tier with KV caching and edge performance
   * @param format {string} Output format ("json" or "table")
   * @param useCache {boolean} Whether to use KV cache (default: true)
   * @return {object} DNS records and metadata
   */
  async pullDnsRecords(format: string = "json", useCache: boolean = true) {
    try {
      if (!this.env.CLOUDFLARE_API_TOKEN) {
        throw new Error('CLOUDFLARE_API_TOKEN is required');
      }

      const zoneId = this.env.CLOUDFLARE_ZONE_ID;
      if (!zoneId) {
        throw new Error('CLOUDFLARE_ZONE_ID is required');
      }

      // FREE tier optimization: Check KV cache first (100k reads/day)
      const cacheKey = `dns_records_${zoneId}`;
      let records: DnsRecord[];
      let fromCache = false;

      if (useCache) {
        const cachedData = await this.env.DNS_CACHE.get(cacheKey, 'json');
        if (cachedData) {
          records = cachedData as DnsRecord[];
          fromCache = true;
          console.log('📦 DNS records loaded from KV cache (FREE tier optimization)');
        }
      }

      // If not in cache or cache disabled, fetch from API
      if (!fromCache) {
        const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.env.CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
            'User-Agent': 'CentennialHillsHomes-DNS-Manager/1.0'
          }
        });

        const data = await response.json();
        
        if (!data.success) {
          throw new Error(`Cloudflare API Error: ${data.errors.map((e: any) => e.message).join(', ')}`);
        }

        records = data.result as DnsRecord[];
        
        // FREE tier optimization: Cache for 5 minutes (within 10ms CPU limit)
        if (useCache && records.length > 0) {
          await this.env.DNS_CACHE.put(cacheKey, JSON.stringify(records), {
            expirationTtl: 300 // 5 minutes cache
          });
          console.log('💾 DNS records cached in KV storage (FREE tier)');
        }
      }

      // Format output based on request
      if (format === "table") {
        return this.formatDnsRecordsAsTable(records);
      }

      return {
        success: true,
        domain: "centennialshillshomes.com",
        zoneId: zoneId,
        recordCount: records.length,
        timestamp: new Date().toISOString(),
        fromCache: fromCache,
        freeTierOptimized: true,
        records: records.map(record => ({
          id: record.id,
          type: record.type,
          name: record.name,
          content: record.content,
          ttl: record.ttl,
          proxied: record.proxied,
          comment: record.comment,
          createdOn: record.created_on,
          modifiedOn: record.modified_on
        }))
      };
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
        timestamp: new Date().toISOString(),
        freeTierOptimized: true
      };
    }
  }

  /**
   * Get specific DNS record by ID
   * @param recordId {string} DNS record ID
   * @return {object} DNS record details
   */
  async getDnsRecord(recordId: string) {
    try {
      if (!this.env.CLOUDFLARE_API_TOKEN || !this.env.CLOUDFLARE_ZONE_ID) {
        throw new Error('Cloudflare credentials are required');
      }

      const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${this.env.CLOUDFLARE_ZONE_ID}/dns_records/${recordId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.env.CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(`Cloudflare API Error: ${data.errors.map((e: any) => e.message).join(', ')}`);
      }

      return {
        success: true,
        record: data.result,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Get FREE tier usage statistics and optimization insights
   * @return {object} Usage stats and recommendations
   */
  async getFreeTierStats() {
    try {
      const stats = {
        timestamp: new Date().toISOString(),
        freeTierLimits: {
          dailyRequests: 100000,
          cpuTimePerRequest: '10ms',
          kvReadsPerDay: 100000,
          kvWritesPerDay: 1000,
          kvStorage: '1GB'
        },
        optimizations: [
          '✅ KV caching reduces API calls',
          '✅ 5-minute cache TTL optimizes performance',
          '✅ Edge computing reduces latency',
          '✅ Global CDN included in FREE tier',
          '✅ Basic security features enabled'
        ],
        recommendations: [
          'Monitor daily request usage',
          'Use KV cache to stay within limits',
          'Consider upgrading for higher limits',
          'Enable Cloudflare analytics for insights'
        ]
      };

      return {
        success: true,
        stats,
        freeTierOptimized: true
      };
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Clear DNS cache (useful for testing or forced refresh)
   * @return {object} Cache clearing result
   */
  async clearDnsCache() {
    try {
      const zoneId = this.env.CLOUDFLARE_ZONE_ID;
      if (!zoneId) {
        throw new Error('CLOUDFLARE_ZONE_ID is required');
      }

      const cacheKey = `dns_records_${zoneId}`;
      await this.env.DNS_CACHE.delete(cacheKey);

      return {
        success: true,
        message: 'DNS cache cleared successfully',
        timestamp: new Date().toISOString(),
        freeTierOptimized: true
      };
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Format DNS records as a readable table
   * @param records {DnsRecord[]} Array of DNS records
   * @return {string} Formatted table string
   */
  private formatDnsRecordsAsTable(records: DnsRecord[]): string {
    const headers = ['Type', 'Name', 'Content', 'TTL', 'Proxied', 'Comment'];
    const rows = records.map(record => [
      record.type,
      record.name,
      record.content,
      record.ttl === 1 ? 'Auto' : record.ttl.toString(),
      record.proxied ? 'Yes' : 'No',
      record.comment || '-'
    ]);

    // Calculate column widths
    const widths = headers.map((header, i) => {
      const maxWidth = Math.max(
        header.length,
        ...rows.map(row => String(row[i]).length)
      );
      return Math.min(maxWidth, 50); // Cap at 50 chars
    });

    // Create table
    const separator = widths.map(w => '-'.repeat(w)).join('-+-');
    const headerRow = headers.map((header, i) => header.padEnd(widths[i])).join(' | ');
    
    let table = `${headerRow}\n${separator}\n`;
    
    rows.forEach(row => {
      const dataRow = row.map((cell, i) => String(cell).padEnd(widths[i])).join(' | ');
      table += `${dataRow}\n`;
    });

    return table;
  }

  // Helper methods for mock data generation
  private generateMockPrice(zipCode: string): number {
    const basePrices: Record<string, number> = {
      "89138": 450000,
      "89144": 520000,
      "89135": 480000,
      "89130": 380000,
      "89129": 420000
    };
    return basePrices[zipCode] || 400000;
  }

  private generateMockPriceChange(timeframe: string): number {
    const changes: Record<string, number> = {
      "30days": 0.5,
      "90days": 1.2,
      "1year": 3.8
    };
    return changes[timeframe] || 1.0;
  }

  private generateMockInventory(zipCode: string): number {
    return Math.floor(Math.random() * 50) + 10;
  }

  private generateMockDaysOnMarket(zipCode: string): number {
    return Math.floor(Math.random() * 30) + 15;
  }

  private generateMarketInsights(zipCode: string, propertyType: string): string[] {
    return [
      `${zipCode} shows strong market activity with increasing demand`,
      `${propertyType} properties are trending upward in this area`,
      "Great investment opportunity for California equity buyers",
      "Close proximity to major employers and entertainment"
    ];
  }

  private generateRecommendations(zipCode: string, propertyType: string): string[] {
    return [
      "Consider listing during peak season (March-May)",
      "Highlight proximity to Red Rock Canyon and Summerlin amenities",
      "Emphasize value compared to California markets",
      "Target corporate relocation buyers"
    ];
  }

  private generateMockDuration(from: string, to: string, mode: string): string {
    const durations: Record<string, Record<string, string>> = {
      "driving": { "strip": "25 min", "airport": "35 min", "downtown": "30 min" },
      "transit": { "strip": "45 min", "airport": "60 min", "downtown": "50 min" },
      "walking": { "strip": "2.5 hours", "airport": "4 hours", "downtown": "3 hours" }
    };
    return durations[mode]?.[to.toLowerCase()] || "30 min";
  }

  private generateMockDistance(from: string, to: string): string {
    return `${Math.floor(Math.random() * 20) + 5} miles`;
  }

  private generateMockTrafficConditions(): string {
    const conditions = ["Light traffic", "Moderate traffic", "Heavy traffic", "Clear"];
    return conditions[Math.floor(Math.random() * conditions.length)];
  }

  private generateMockAlternativeRoutes(from: string, to: string): string[] {
    return [
      "Via I-15 North (5 minutes longer)",
      "Via US-95 (scenic route)",
      "Via local streets (avoid highways)"
    ];
  }

  private generateCommuteRecommendations(from: string, to: string, mode: string): string[] {
    return [
      "Avoid rush hour (7-9 AM, 5-7 PM)",
      "Consider carpooling or rideshare",
      "Check real-time traffic before departure",
      "Alternative routes available during peak times"
    ];
  }

  private generateMarketingCopy(neighborhood: string, propertyType: string): string {
    return `Discover luxury ${propertyType} living in ${neighborhood}, Las Vegas. 
    This premier location offers unparalleled access to world-class amenities, 
    entertainment, and business opportunities. Perfect for California equity buyers 
    seeking exceptional value and lifestyle.`;
  }

  private generateSEOKeywords(neighborhood: string, propertyType: string): string[] {
    return [
      `${neighborhood} ${propertyType}`,
      `Las Vegas ${propertyType}`,
      `${neighborhood} real estate`,
      "Las Vegas luxury homes",
      "California equity buyers",
      "Summerlin properties"
    ];
  }

  private generateMockDemographics(neighborhood: string): object {
    return {
      medianAge: 42,
      medianIncome: 85000,
      population: 25000,
      educationLevel: "Bachelor's degree or higher: 65%",
      familySize: "2.3 average"
    };
  }

  private generateMockAmenities(neighborhood: string): string[] {
    return [
      "Shopping centers",
      "Restaurants and dining",
      "Parks and recreation",
      "Golf courses",
      "Entertainment venues",
      "Healthcare facilities"
    ];
  }

  private generateMockSchools(neighborhood: string): object {
    return {
      elementary: "Centennial Hills Elementary (8/10 rating)",
      middle: "Centennial Hills Middle School (7/10 rating)",
      high: "Centennial Hills High School (8/10 rating)"
    };
  }

  private generateMockLifestyle(neighborhood: string): string[] {
    return [
      "Family-friendly community",
      "Active outdoor lifestyle",
      "Close to Red Rock Canyon",
      "Golf course communities",
      "Master-planned development"
    ];
  }

  private generateMockInvestmentPotential(neighborhood: string): object {
    return {
      appreciationRate: "5.2% annually",
      rentalYield: "4.8%",
      marketStability: "High",
      growthProjection: "Strong"
    };
  }

  private generateMockCommuteOptions(neighborhood: string): object {
    return {
      toStrip: "20-30 minutes",
      toAirport: "30-45 minutes",
      toDowntown: "25-35 minutes",
      publicTransit: "Available via RTC"
    };
  }

  private generateMockValuation(address: string, squareFeet: number, bedrooms: number): number {
    const basePrice = squareFeet * 180; // $180 per sq ft base
    const bedroomBonus = bedrooms * 10000;
    return Math.floor(basePrice + bedroomBonus);
  }

  private generateMockConfidenceScore(): number {
    return Math.floor(Math.random() * 20) + 80; // 80-100%
  }

  private generateMockMarketComparison(address: string): object {
    return {
      similarProperties: 12,
      averagePrice: 485000,
      priceRange: "420000 - 550000",
      marketTrend: "Increasing"
    };
  }

  private generateMockValuationFactors(address: string, squareFeet: number, bedrooms: number): string[] {
    return [
      "Recent comparable sales",
      "Neighborhood desirability",
      "Property condition",
      "Market trends",
      "Location advantages"
    ];
  }

  private generateMockValuationRecommendations(address: string): string[] {
    return [
      "Property shows strong value potential",
      "Consider minor updates to maximize value",
      "Market timing is favorable",
      "Great investment opportunity"
    ];
  }

  /**
   * @ignore
   */
  async fetch(request: Request): Promise<Response> {
    return new ProxyToSelf(this).fetch(request);
  }
}


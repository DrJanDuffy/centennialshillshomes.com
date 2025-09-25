# Real Estate MCP Worker

A Cloudflare Worker with Model Context Protocol (MCP) integration specifically designed for Las Vegas real estate services by Dr. Jan Duffy.

## 🏠 Features

### Real Estate Analysis Tools
- **Market Trend Analysis**: Analyze Las Vegas real estate trends by ZIP code
- **Property Valuation**: AI-powered property value estimation
- **Neighborhood Analysis**: Demographics, amenities, schools, and lifestyle insights
- **Commute Calculator**: Travel time analysis from neighborhoods to key destinations

### AI-Powered Services
- **Property Description Generator**: Create compelling listing descriptions using AI
- **Property Image Generation**: Generate marketing images using Cloudflare AI
- **Market Insights**: Automated market analysis and recommendations

### Supported Areas
- **ZIP Codes**: 89138, 89144, 89135, 89130, 89129
- **Neighborhoods**: Centennial Hills, Summerlin, Red Rock Country Club, The Ridges, Lone Mountain, North Las Vegas

## 🚀 Quick Start

### Prerequisites
- Node.js 16.17.0 or higher
- Cloudflare account
- Claude Desktop or Cursor IDE

### Installation

1. **Clone and Install**
   ```bash
   cd real-estate-mcp-worker
   npm install
   ```

2. **Deploy to Cloudflare**
   ```bash
   npm run deploy
   ```

3. **Configure MCP Client**

   **For Claude Desktop:**
   Add to your `claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "real-estate-mcp-worker": {
         "command": "C:\\Users\\geneb\\centennialshillshomes.com-1\\real-estate-mcp-worker\\node_modules\\.bin\\workers-mcp.CMD",
         "args": [
           "run",
           "real-estate-mcp-worker",
           "https://real-estate-mcp-worker.drduffy.workers.dev",
           "C:\\Users\\geneb\\centennialshillshomes.com-1\\real-estate-mcp-worker"
         ],
         "env": {}
       }
     }
   }
   ```

   **For Cursor:**
   Add to your MCP configuration:
   ```json
   {
     "mcpServers": {
       "real-estate-mcp-worker": {
         "command": "C:\\Users\\geneb\\centennialshillshomes.com-1\\real-estate-mcp-worker\\node_modules\\.bin\\workers-mcp.CMD run real-estate-mcp-worker https://real-estate-mcp-worker.drduffy.workers.dev C:\\Users\\geneb\\centennialshillshomes.com-1\\real-estate-mcp-worker",
         "env": {}
       }
     }
   }
   ```

## 🛠 Available MCP Tools

### 1. Market Analysis
```typescript
analyzeMarketTrends(zipCode: string, propertyType: string, timeframe: string)
```
- Analyzes Las Vegas real estate market trends
- Returns price trends, inventory, days on market, and insights
- Supports ZIP codes: 89138, 89144, 89135, 89130, 89129

### 2. Commute Calculator
```typescript
calculateCommuteTime(fromLocation: string, toLocation: string, travelMode: string)
```
- Calculates commute times from Las Vegas neighborhoods
- Supports driving, transit, walking, and bicycling modes
- Includes traffic conditions and alternative routes

### 3. Property Description Generator
```typescript
generatePropertyDescription(propertyType: string, bedrooms: number, bathrooms: number, squareFeet: number, neighborhood: string, features: string)
```
- Creates compelling property descriptions using AI
- Generates marketing copy and SEO keywords
- Tailored for Las Vegas real estate market

### 4. Neighborhood Analysis
```typescript
analyzeNeighborhood(neighborhood: string)
```
- Provides comprehensive neighborhood insights
- Includes demographics, amenities, schools, and lifestyle
- Investment potential and commute options

### 5. Property Valuation
```typescript
estimatePropertyValue(address: string, bedrooms: number, bathrooms: number, squareFeet: number, yearBuilt: number, lotSize: number)
```
- AI-powered property value estimation
- Market comparison and confidence scoring
- Valuation factors and recommendations

### 6. Property Image Generation
```typescript
generatePropertyImage(propertyDescription: string, style: string)
```
- Generates marketing images using Cloudflare AI
- Supports realistic, luxury, modern, and traditional styles
- High-quality 4K resolution images

## 📊 Example Usage

### Market Analysis Example
```typescript
// Analyze Centennial Hills market trends
const marketData = await analyzeMarketTrends("89144", "single-family", "90days");
console.log(marketData);
// Returns: price trends, inventory levels, market insights, recommendations
```

### Commute Analysis Example
```typescript
// Calculate commute from Centennial Hills to Las Vegas Strip
const commuteData = await calculateCommuteTime("Centennial Hills", "Las Vegas Strip", "driving");
console.log(commuteData);
// Returns: duration, distance, traffic conditions, alternative routes
```

### Property Description Example
```typescript
// Generate listing description for luxury home
const description = await generatePropertyDescription(
  "luxury", 
  4, 
  3, 
  2800, 
  "Red Rock Country Club", 
  "golf course views, pool, custom kitchen"
);
console.log(description);
// Returns: AI-generated description, marketing copy, SEO keywords
```

## 🔧 Configuration

### Environment Variables
Set these in your Cloudflare Worker dashboard:
- `GOOGLE_MAPS_API_KEY`: For real commute calculations
- `OPENAI_API_KEY`: For enhanced AI features
- `REAL_ESTATE_API_KEY`: For real market data

### Secrets
Set via Wrangler CLI:
```bash
wrangler secret put GOOGLE_MAPS_API_KEY
wrangler secret put OPENAI_API_KEY
wrangler secret put REAL_ESTATE_API_KEY
```

## 🌐 Deployment

Your worker is deployed at:
**https://real-estate-mcp-worker.drduffy.workers.dev**

## 📈 Business Benefits

### For Dr. Jan Duffy's Real Estate Business
- **AI-Powered Market Analysis**: Instant insights into Las Vegas market trends
- **Automated Property Descriptions**: Save time on listing creation
- **Commute Analysis**: Help clients understand travel times
- **Neighborhood Insights**: Provide comprehensive area information
- **Property Valuation**: Quick estimates for client consultations

### For Clients
- **Market Transparency**: Clear understanding of local market conditions
- **Commute Planning**: Make informed decisions about location
- **Investment Insights**: Understand neighborhood potential
- **Professional Service**: AI-enhanced real estate expertise

## 🔄 Updates

To update your MCP tools:
1. Modify `src/index.ts`
2. Run `npm run deploy`
3. Restart your MCP client (Claude Desktop/Cursor)

## 📞 Support

For questions or support:
- **Dr. Jan Duffy**: (702) 903-1952
- **Email**: janet@centennialhillshomes.com
- **Website**: https://www.centennialhillshomesforsale.com

## 📄 License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

---

**Built with ❤️ for Las Vegas Real Estate by Dr. Jan Duffy, REALTOR®**


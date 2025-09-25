# Testing Real Estate MCP Tools in Cursor

## 🎯 Overview

This guide will help you test all the Real Estate MCP tools in Cursor IDE. The MCP server provides 6 powerful tools specifically designed for Dr. Jan Duffy's Las Vegas real estate business.

## 🚀 Quick Start

### Step 1: Configure MCP in Cursor

1. **Open Cursor Settings**
   - Go to `File` → `Preferences` → `Settings`
   - Search for "MCP" or "Model Context Protocol"

2. **Add MCP Server**
   - Click "Add MCP Server"
   - Use these settings:
     - **Type**: `command`
     - **Command**: `C:\Users\geneb\centennialshillshomes.com-1\real-estate-mcp-worker\node_modules\.bin\workers-mcp.CMD run real-estate-mcp-worker https://real-estate-mcp-worker.drduffy.workers.dev C:\Users\geneb\centennialshillshomes.com-1\real-estate-mcp-worker`

3. **Restart Cursor**
   - Close and reopen Cursor to load the MCP server

### Step 2: Verify MCP Connection

1. **Check MCP Status**
   - Look for MCP server status in Cursor's status bar
   - You should see "real-estate-mcp-worker" as connected

2. **Test Connection**
   - Open the `test-real-estate-tools.ts` file
   - Ask Cursor: "Can you see the real estate MCP tools?"

## 🧪 Testing Each MCP Tool

### 1. 📊 Market Analysis Tool

**Test Command**: "Analyze market trends for Centennial Hills ZIP code 89144"

**Expected Response**: Market data including:
- Average price trends
- Price changes over time
- Inventory levels
- Days on market
- Market insights and recommendations

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the analyzeMarketTrends tool to get market data for ZIP 89144"
const marketData = await analyzeMarketTrends("89144", "single-family", "90days");
console.log(marketData);
```

### 2. 🚗 Commute Calculator Tool

**Test Command**: "Calculate commute time from Centennial Hills to Las Vegas Strip"

**Expected Response**: Commute analysis including:
- Duration and distance
- Traffic conditions
- Alternative routes
- Recommendations

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the calculateCommuteTime tool to check commute from Centennial Hills to the Strip"
const commuteData = await calculateCommuteTime("Centennial Hills", "Las Vegas Strip", "driving");
console.log(commuteData);
```

### 3. 📝 Property Description Generator

**Test Command**: "Generate a property description for a luxury home in Red Rock Country Club"

**Expected Response**: AI-generated content including:
- Compelling property description
- Marketing copy
- SEO keywords

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the generatePropertyDescription tool for a luxury home"
const description = await generatePropertyDescription(
  "luxury", 
  4, 
  3, 
  2800, 
  "Red Rock Country Club", 
  "golf course views, pool, custom kitchen"
);
console.log(description);
```

### 4. 🏘️ Neighborhood Analysis Tool

**Test Command**: "Analyze the neighborhood of Summerlin"

**Expected Response**: Comprehensive neighborhood data including:
- Demographics
- Amenities
- Schools
- Lifestyle information
- Investment potential

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the analyzeNeighborhood tool for Summerlin"
const neighborhoodData = await analyzeNeighborhood("Summerlin");
console.log(neighborhoodData);
```

### 5. 💰 Property Valuation Tool

**Test Command**: "Estimate the value of a property with 4 bedrooms and 2800 square feet"

**Expected Response**: Valuation analysis including:
- Estimated property value
- Confidence score
- Market comparison
- Valuation factors

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the estimatePropertyValue tool for a property"
const valuation = await estimatePropertyValue(
  "123 Main St, Las Vegas, NV 89144",
  4,
  3,
  2800,
  2015,
  8000
);
console.log(valuation);
```

### 6. 🖼️ Property Image Generation Tool

**Test Command**: "Generate a property image for a luxury home with golf course views"

**Expected Response**: High-quality marketing image

**Example Usage in Cursor**:
```typescript
// Ask Cursor: "Use the generatePropertyImage tool to create a marketing image"
const imageResponse = await generatePropertyImage(
  "Luxury home with golf course views, pool, and modern architecture",
  "luxury"
);
// This returns a Response object with the generated image
```

## 🔧 Advanced Testing

### Test All Tools at Once

1. **Open the test file**: `test-real-estate-tools.ts`
2. **Ask Cursor**: "Run all the real estate MCP tool tests"
3. **Review the output**: Each tool will be demonstrated with sample data

### Custom Test Scenarios

**Scenario 1: New Listing Workflow**
```
Ask Cursor: "Help me create a complete listing workflow using the MCP tools:
1. Analyze the neighborhood
2. Generate a property description
3. Create a marketing image
4. Estimate the property value"
```

**Scenario 2: Client Consultation**
```
Ask Cursor: "Help me prepare for a client consultation using the MCP tools:
1. Analyze market trends for their area
2. Calculate commute times to their workplace
3. Provide neighborhood insights
4. Estimate their property value"
```

**Scenario 3: Market Research**
```
Ask Cursor: "Help me research the Las Vegas market using the MCP tools:
1. Compare market trends across different ZIP codes
2. Analyze multiple neighborhoods
3. Generate investment insights
4. Create a market report"
```

## 🐛 Troubleshooting

### MCP Server Not Connecting

1. **Check Worker Status**
   - Visit: https://real-estate-mcp-worker.drduffy.workers.dev
   - Should return "Unauthorized" (this is normal)

2. **Verify Paths**
   - Make sure the command path is correct
   - Check that the worker directory exists

3. **Restart Cursor**
   - Close Cursor completely
   - Reopen and check MCP status

### Tools Not Available

1. **Check MCP Configuration**
   - Verify the MCP server is configured correctly
   - Ensure the server is connected (green status)

2. **Test Connection**
   - Ask Cursor: "What MCP tools are available?"
   - You should see the 6 real estate tools listed

### Worker Errors

1. **Check Deployment**
   - Go back to the worker directory
   - Run `npm run deploy` to redeploy

2. **Check Logs**
   - Use `wrangler tail` to see real-time logs
   - Look for any error messages

## 📊 Expected Results

### Market Analysis Example
```json
{
  "success": true,
  "data": {
    "zipCode": "89144",
    "propertyType": "single-family",
    "timeframe": "90days",
    "averagePrice": 520000,
    "priceChange": 1.2,
    "inventory": 25,
    "daysOnMarket": 18,
    "marketInsights": [
      "89144 shows strong market activity with increasing demand",
      "single-family properties are trending upward in this area"
    ],
    "recommendations": [
      "Consider listing during peak season (March-May)",
      "Highlight proximity to Red Rock Canyon and Summerlin amenities"
    ]
  }
}
```

### Commute Analysis Example
```json
{
  "success": true,
  "data": {
    "from": "Centennial Hills",
    "to": "Las Vegas Strip",
    "travelMode": "driving",
    "duration": "25 min",
    "distance": "12 miles",
    "trafficConditions": "Moderate traffic",
    "alternativeRoutes": [
      "Via I-15 North (5 minutes longer)",
      "Via US-95 (scenic route)"
    ],
    "recommendations": [
      "Avoid rush hour (7-9 AM, 5-7 PM)",
      "Consider carpooling or rideshare"
    ]
  }
}
```

## 🎉 Success Indicators

You'll know the MCP integration is working when:

1. ✅ **MCP Server Connected**: Green status in Cursor
2. ✅ **Tools Available**: All 6 real estate tools visible
3. ✅ **Responses Working**: Tools return data when called
4. ✅ **No Errors**: Clean execution without errors

## 📞 Support

If you encounter issues:

- **Dr. Jan Duffy**: (702) 903-1952
- **Email**: janet@centennialhillshomes.com
- **Worker URL**: https://real-estate-mcp-worker.drduffy.workers.dev

---

**Happy Testing! 🏠✨**








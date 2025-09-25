# Schema Implementation Guide - Centennial Hills Real Estate

## Overview
This guide explains how to implement appropriate schema markup for every page on the Centennial Hills Real Estate website using the updated schema system as of September 2025.

## Updated Business Information
- **Business Name**: Centennial Hills Real Estate | Homes by Dr. Jan Duffy
- **Business Category**: Real estate agent, Real estate agency, Real estate consultant, Property management company
- **Description**: Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients and luxury home investments.
- **Opening Date**: September 1993
- **Phone**: (702) 903-1952
- **Website**: http://centennialhillshomesforsale.com/
- **Address**: 1490 Center Crossing Rd, Las Vegas, NV 89144
- **Business Hours**: Sunday-Saturday 6:00 AM–9:00 PM
- **Special Hours**: Closed July 4, 2025; Closed Labor Day Sep 1, 2025

## Schema Types Available

### 1. RealEstateAgent (Homepage)
```typescript
<SEOStructuredData 
  type="RealEstateAgent" 
  data={janetDuffyStructuredData} 
/>
```

### 2. RealEstateListing (Property Pages)
```typescript
const propertySchema = pageSchemas.propertyListing({
  name: "Property Name",
  description: "Property description",
  url: "property-url",
  price: "500000",
  bedrooms: 4,
  bathrooms: 3,
  squareFeet: "3200",
  yearBuilt: "2020"
});

<SEOStructuredData 
  type="RealEstateListing" 
  data={propertySchema} 
/>
```

### 3. LocalBusiness (Neighborhood/Area Pages)
```typescript
const neighborhoodSchema = pageSchemas.neighborhoodPage({
  name: "Centennial Hills",
  slug: "centennial-hills",
  geo: {
    "@type": "GeoCoordinates",
    "latitude": 36.3047,
    "longitude": -115.3019
  }
});

<SEOStructuredData 
  type="LocalBusiness" 
  data={neighborhoodSchema} 
/>
```

### 4. Service (Service Pages)
```typescript
const serviceSchema = pageSchemas.servicePage({
  name: "Service Name",
  description: "Service description",
  slug: "service-slug",
  serviceType: "Service Type"
});

<SEOStructuredData 
  type="Service" 
  data={serviceSchema} 
/>
```

### 5. Person (About/Contact Pages)
```typescript
const personSchema = pageSchemas.personPage({});

<SEOStructuredData 
  type="Person" 
  data={personSchema} 
/>
```

### 6. Article (Blog Pages)
```typescript
const articleSchema = pageSchemas.articlePage({
  title: "Article Title",
  description: "Article description",
  slug: "article-slug"
});

<SEOStructuredData 
  type="Article" 
  data={articleSchema} 
/>
```

### 7. WebPage (Search Pages)
```typescript
const searchSchema = pageSchemas.searchPage({
  title: "Search Page Title",
  description: "Search page description"
});

<SEOStructuredData 
  type="WebPage" 
  data={searchSchema} 
/>
```

## Page-Specific Implementations

### Homepage (`/`)
- **Schema Type**: RealEstateAgent
- **Implementation**: Uses `janetDuffyStructuredData` with updated business information
- **Status**: ✅ Completed

### Property Pages (`/properties`, `/luxury-home-sales`, etc.)
- **Schema Type**: RealEstateListing
- **Implementation**: Uses `pageSchemas.propertyListing()` with property-specific data
- **Status**: ✅ Completed

### Neighborhood Pages (`/centennial-hills`, `/red-rock-country-club`, etc.)
- **Schema Type**: LocalBusiness
- **Implementation**: Uses `pageSchemas.neighborhoodPage()` with neighborhood-specific data
- **Status**: ✅ Completed

### Service Pages (`/home-valuation`, `/market-analysis`, etc.)
- **Schema Type**: Service
- **Implementation**: Uses `pageSchemas.servicePage()` with service-specific data
- **Status**: ✅ Completed

### About/Contact Pages (`/janet-duffy`, `/contact`, `/about`)
- **Schema Type**: Person
- **Implementation**: Uses `pageSchemas.personPage()` with Dr. Janet Duffy's information
- **Status**: ✅ Completed

### Blog Pages (`/blog`, `/blog/category/seller-guide`)
- **Schema Type**: Article
- **Implementation**: Uses `pageSchemas.articlePage()` with article-specific data
- **Status**: ✅ Completed

### Search Pages (`/search`, `/mls-search`)
- **Schema Type**: WebPage with SearchAction
- **Implementation**: Uses `pageSchemas.searchPage()` with search functionality
- **Status**: ✅ Completed

## Accessibility Features Included

The schema markup includes comprehensive accessibility information:

- **Wheelchair Accessible**: Entrance, parking lot, seating, restroom
- **Gender-Neutral Restroom**: Available
- **LGBTQ+ Friendly**: Inclusive environment
- **Transgender Safespace**: Safe environment for all clients
- **Parking**: Free parking lot, street parking, on-site parking, parking garage
- **Appointment**: Not required, onsite services available, online appointments available

## Language Support

The schema includes support for multiple languages:
- Mandarin
- Korean
- French
- American Sign Language
- Filipino
- Ukrainian
- Russian

## Service Areas Covered

The schema covers all service areas:
- Lone Mountain, NV, USA
- North Las Vegas, NV, USA
- Summerlin South, NV, USA
- Summerlin, Las Vegas, NV, USA
- Providence, Las Vegas, NV, USA
- Kyle Canyon, Las Vegas, NV, USA
- Tule Springs, Las Vegas, NV, USA
- Elkhorn, Las Vegas, NV 89131, USA
- Antelope, Las Vegas, NV 89149, USA
- Summerlin West, Las Vegas, NV, USA
- Summerlin North, Las Vegas, NV, USA
- Centennial Hills, Las Vegas, NV, USA
- Los Prados, Las Vegas, NV 89130, USA
- The Springs, Las Vegas, NV 89130, USA
- Wyeth Ranch, Las Vegas, NV 89131, USA
- La Madre Foothills, Las Vegas, NV, USA
- Carmel Canyon, Las Vegas, NV 89131, USA
- Silverstone Ranch, Las Vegas, NV 89131, USA
- Iron Mountain Ranch, Las Vegas, NV 89131, USA
- Lone Mountain Heights, Las Vegas, NV 89129, USA

## Social Media Profiles

All social media profiles are included in the schema:
- Instagram: https://www.instagram.com/drjanduffy/
- YouTube: https://www.youtube.com/@DrDuffy
- Pinterest: https://www.pinterest.com/DrJanDuffy/
- Facebook: https://www.facebook.com/SummerlinNewHomesBHHS
- LinkedIn: https://www.linkedin.com/company/california-to-vegas-homes

## Implementation Steps for New Pages

1. **Import Required Components**:
   ```typescript
   import SEOStructuredData from '../../components/seo-structured-data';
   import { pageSchemas } from '../../components/seo-structured-data';
   ```

2. **Create Schema Data**:
   ```typescript
   const pageSchema = pageSchemas.[schemaType]({
     // page-specific data
   });
   ```

3. **Add Schema Component**:
   ```typescript
   <SEOStructuredData 
     type="[SchemaType]" 
     data={pageSchema} 
   />
   ```

## Testing Schema Markup

Use Google's Rich Results Test to validate schema markup:
- URL: https://search.google.com/test/rich-results
- Test each page to ensure proper schema implementation

## Benefits of Schema Implementation

1. **Enhanced Search Results**: Rich snippets in Google search results
2. **Better Local SEO**: Improved local search visibility
3. **Structured Data**: Clear data structure for search engines
4. **Accessibility**: Comprehensive accessibility information
5. **Business Information**: Complete business profile for search engines
6. **Service Areas**: Clear service area definitions
7. **Contact Information**: Structured contact and location data

## Maintenance

- Update business information in `janetDuffyStructuredData` when changes occur
- Add new schema types to `pageSchemas` as needed
- Test schema markup regularly with Google's Rich Results Test
- Monitor search console for schema-related errors or warnings

## Files Modified

- `src/components/seo-structured-data.tsx` - Enhanced with new schema types and predefined data
- `src/routes/index.tsx` - Homepage schema implementation
- `src/routes/properties/index.tsx` - Property listing schema
- `src/routes/centennial-hills/index.tsx` - Neighborhood schema
- `src/routes/home-valuation/index.tsx` - Service schema
- `src/routes/janet-duffy/index.tsx` - Person schema
- `src/routes/search/index.tsx` - Search page schema
- `src/routes/blog/index.tsx` - Blog schema
- `src/routes/contact/index.tsx` - Contact page schema

This comprehensive schema implementation ensures optimal SEO performance and search engine visibility for the Centennial Hills Real Estate website.

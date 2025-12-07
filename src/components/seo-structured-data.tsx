import { component$ } from '@builder.io/qwik';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'RealEstateListing' | 'LocalBusiness' | 'Organization' | 'Person' | 'Service' | 'Article' | 'WebPage' | 'WebSite' | 'SearchAction' | 'FAQPage' | 'BreadcrumbList' | 'Review' | 'AggregateRating';
  data: any;
}

export default component$<StructuredDataProps>(({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    switch (type) {
      case 'RealEstateAgent':
        return {
          ...baseData,
          // 2025: Enhanced RealEstateAgent schema with E-E-A-T signals
          "serviceArea": [
            {
              "@type": "City",
              "name": "Las Vegas",
              "containedInPlace": {
                "@type": "State",
                "name": "Nevada"
              }
            },
            {
              "@type": "Place",
              "name": "Centennial Hills"
            },
            {
              "@type": "Place", 
              "name": "Summerlin"
            }
          ],
          "knowsAbout": [
            "Luxury Real Estate",
            "Centennial Hills Properties",
            "Summerlin Homes",
            "Las Vegas Real Estate Market",
            "California Equity Buyers",
            "Corporate Relocations"
          ],
          // 2025: Add credentials for Expertise signal
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Professional License",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Nevada Real Estate Division"
              }
            }
          ],
          // 2025: Add memberOf for Authoritativeness
          "memberOf": {
            "@type": "Organization",
            "name": "Berkshire Hathaway HomeServices"
          },
          // 2025: Add award for Trustworthiness
          "award": "Top 1% REALTOR®",
          // 2025: Add aggregateRating for Trust signals
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "150",
            "bestRating": "5"
          }
        };

      case 'RealEstateListing':
        return {
          ...baseData,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        };

      case 'LocalBusiness':
        return {
          ...baseData,
          // 2025: Enhanced LocalBusiness schema for top rankings
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address?.streetAddress || "1490 Center Crossing Rd",
            "addressLocality": data.address?.addressLocality || "Las Vegas",
            "addressRegion": data.address?.addressRegion || "NV",
            "postalCode": data.address?.postalCode || "89144",
            "addressCountry": "US"
          },
          "geo": data.geo || {
            "@type": "GeoCoordinates",
            "latitude": 36.1699,
            "longitude": -115.1398
          },
          "openingHours": data.openingHours || "Mo-Su 06:00-21:00",
          "priceRange": "$$$",
          "telephone": data.telephone || "+1-702-903-1952",
          // 2025: Add aggregateRating for trust signals
          "aggregateRating": data.aggregateRating || {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "150",
            "bestRating": "5"
          },
          // 2025: Add serviceArea for local SEO
          "serviceArea": data.serviceArea || [
            {
              "@type": "City",
              "name": "Las Vegas"
            },
            {
              "@type": "Place",
              "name": "Centennial Hills"
            },
            {
              "@type": "Place",
              "name": "Summerlin"
            }
          ]
        };

      case 'Person':
        return {
          ...baseData,
          "jobTitle": "Real Estate Agent",
          "worksFor": {
            "@type": "Organization",
            "name": "Centennial Hills Real Estate"
          }
        };

      case 'Service':
        return {
          ...baseData,
          "provider": {
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "telephone": "(702) 903-1952",
            "email": "janet@centennialhillshomesforsale.com"
          },
          "serviceType": data.serviceType || "Real Estate Services",
          // 2025: Add areaServed for local SEO
          "areaServed": data.areaServed || [
            {
              "@type": "City",
              "name": "Las Vegas",
              "containedInPlace": {
                "@type": "State",
                "name": "Nevada"
              }
            }
          ],
          // 2025: Add offers for service pricing
          "offers": data.offers || {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Complimentary consultation"
          }
        };

      case 'Article':
        return {
          ...baseData,
          // 2025: Enhanced Article schema with E-E-A-T
          "author": {
            "@type": "Person",
            "name": "Dr. Jan Duffy",
            "jobTitle": "Top 1% Las Vegas REALTOR®",
            "worksFor": {
              "@type": "Organization",
              "name": "Centennial Hills Real Estate"
            },
            "knowsAbout": [
              "Luxury Real Estate",
              "Las Vegas Real Estate Market",
              "Centennial Hills Properties"
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.centennialhillshomesforsale.com/images/logo.png"
            }
          },
          // 2025: Add mainEntityOfPage
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || `https://www.centennialhillshomesforsale.com/blog/${data.slug}`
          }
        };

      case 'WebPage':
        return {
          ...baseData,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Centennial Hills Real Estate",
            "url": "https://www.centennialhillshomesforsale.com/"
          },
          // 2025: Add author for E-E-A-T signals
          "author": {
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "jobTitle": "Top 1% Las Vegas REALTOR®"
          }
        };

      case 'SearchAction':
        return {
          ...baseData,
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.centennialhillshomesforsale.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        };

      case 'FAQPage':
        return {
          ...baseData,
          "mainEntity": data.mainEntity || []
        };

      case 'BreadcrumbList':
        return {
          ...baseData,
          "itemListElement": data.itemListElement || []
        };

      case 'Review':
        return {
          ...baseData,
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": data.author?.name || "Client"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating || 5,
            "bestRating": 5
          },
          "datePublished": data.datePublished || new Date().toISOString()
        };

      case 'AggregateRating':
        return {
          ...baseData,
          "@type": "AggregateRating",
          "ratingValue": data.ratingValue || 5,
          "reviewCount": data.reviewCount || 150,
          "bestRating": 5,
          "worstRating": 1
        };

      case 'Organization':
        return {
          ...baseData,
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name || "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
          "url": data.url || "https://www.centennialhillshomesforsale.com",
          "logo": data.logo || "https://www.centennialhillshomesforsale.com/images/logo.png",
          // 2025: Enhanced contact point for local SEO
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.telephone || "+1-702-903-1952",
            "contactType": "Customer Service",
            "areaServed": {
              "@type": "State",
              "name": "Nevada"
            },
            "availableLanguage": ["en", "es", "zh", "ko", "fr"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "06:00",
              "closes": "21:00"
            }
          },
          // 2025: Add address for LocalBusiness signals
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1490 Center Crossing Rd",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89144",
            "addressCountry": "US"
          },
          "sameAs": data.sameAs || [
            "https://www.instagram.com/drjanduffy/",
            "https://www.youtube.com/@DrDuffy",
            "https://www.pinterest.com/DrJanDuffy/",
            "https://www.facebook.com/SummerlinNewHomesBHHS",
            "https://www.linkedin.com/company/california-to-vegas-homes"
          ]
        };

      case 'WebSite':
        return {
          ...baseData,
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": data.name || "Centennial Hills Real Estate",
          "url": data.url || "https://www.centennialhillshomesforsale.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.centennialhillshomesforsale.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          // 2025: Add publisher for E-E-A-T
          "publisher": {
            "@type": "Organization",
            "name": "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.centennialhillshomesforsale.com/images/logo.png"
            }
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <script 
      type="application/ld+json"
    >
      {JSON.stringify(getStructuredData())}
    </script>
  );
});

// Predefined structured data for Dr. Janet Duffy - Updated September 2025
export const janetDuffyStructuredData = {
  "name": "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
  "alternateName": "Dr. Jan Duffy Real Estate",
  "description": "Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients and luxury home investments.",
  "url": "https://www.centennialhillshomesforsale.com/",
  "telephone": "(702) 903-1952",
  "email": "janet@centennialhillshomesforsale.com",
  "image": "https://www.centennialhillshomesforsale.com/images/dr-janet-duffy.jpg",
  "logo": "https://www.centennialhillshomesforsale.com/images/logo.png",
  "foundingDate": "1993-09-01",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1490 Center Crossing Rd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89144",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1699,
    "longitude": -115.1398
  },
  "openingHours": "Mo-Su 06:00-21:00",
  "priceRange": "$$$",
  "paymentAccepted": "Cash, Check, Credit Card, Financing",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Lone Mountain, NV, USA"
    },
    {
      "@type": "Place",
      "name": "North Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Summerlin South, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Summerlin, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Providence, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Kyle Canyon, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Tule Springs, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Elkhorn, Las Vegas, NV 89131, USA"
    },
    {
      "@type": "Place",
      "name": "Antelope, Las Vegas, NV 89149, USA"
    },
    {
      "@type": "Place",
      "name": "Summerlin West, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Summerlin North, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Centennial Hills, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Los Prados, Las Vegas, NV 89130, USA"
    },
    {
      "@type": "Place",
      "name": "The Springs, Las Vegas, NV 89130, USA"
    },
    {
      "@type": "Place",
      "name": "Wyeth Ranch, Las Vegas, NV 89131, USA"
    },
    {
      "@type": "Place",
      "name": "La Madre Foothills, Las Vegas, NV, USA"
    },
    {
      "@type": "Place",
      "name": "Carmel Canyon, Las Vegas, NV 89131, USA"
    },
    {
      "@type": "Place",
      "name": "Silverstone Ranch, Las Vegas, NV 89131, USA"
    },
    {
      "@type": "Place",
      "name": "Iron Mountain Ranch, Las Vegas, NV 89131, USA"
    },
    {
      "@type": "Place",
      "name": "Lone Mountain Heights, Las Vegas, NV 89129, USA"
    }
  ],
  "hasMap": "https://www.centennialhillshomesforsale.com#interactive-map",
  "sameAs": [
    "https://www.instagram.com/drjanduffy/",
    "https://www.youtube.com/@DrDuffy",
    "https://www.pinterest.com/DrJanDuffy/",
    "https://www.facebook.com/SummerlinNewHomesBHHS",
    "https://www.linkedin.com/company/california-to-vegas-homes"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Women-owned business",
      "value": true
    },
    {
      "@type": "PropertyValue", 
      "name": "Veteran-owned business",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Wheelchair accessible entrance",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Wheelchair accessible parking lot",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Wheelchair accessible seating",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Wheelchair accessible restroom",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Gender-neutral restroom",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "LGBTQ+ friendly",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Transgender safespace",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Free parking lot",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Free street parking",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "On-site parking",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Free parking garage",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Appointment not required",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Onsite services available",
      "value": true
    },
    {
      "@type": "PropertyValue",
      "name": "Offers online appointments",
      "value": true
    }
  ],
  "knowsLanguage": [
    "Mandarin",
    "Korean", 
    "French",
    "American Sign Language",
    "Filipino",
    "Ukrainian",
    "Russian"
  ]
};

// Predefined schema data for different page types
export const pageSchemas = {
  // Property listing pages
  propertyListing: (propertyData: any) => ({
    "@type": "RealEstateListing",
    "name": propertyData.name || "Luxury Home for Sale",
    "description": propertyData.description || "Beautiful luxury home in Centennial Hills",
    "url": propertyData.url || "https://www.centennialhillshomesforsale.com/properties",
    "image": propertyData.image || "https://www.centennialhillshomesforsale.com/images/property-default.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": propertyData.address?.street || "",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": propertyData.address?.zip || "89144",
      "addressCountry": "US"
    },
    "geo": propertyData.geo || {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    },
    "offers": {
      "@type": "Offer",
      "price": propertyData.price || "500000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": propertyData.squareFeet || "2500",
      "unitCode": "SQF"
    },
    "numberOfRooms": propertyData.bedrooms || 3,
    "numberOfBathroomsTotal": propertyData.bathrooms || 2,
    "yearBuilt": propertyData.yearBuilt || "2020"
  }),

  // Neighborhood/Area pages
  neighborhoodPage: (neighborhoodData: any) => ({
    "@type": "LocalBusiness",
    "name": `${neighborhoodData.name} Real Estate | Dr. Jan Duffy`,
    "description": `Luxury homes and properties in ${neighborhoodData.name}, Las Vegas. Expert real estate services by Dr. Jan Duffy.`,
    "url": `https://www.centennialhillshomesforsale.com/${neighborhoodData.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhoodData.name,
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": neighborhoodData.geo || {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": neighborhoodData.name
      }
    ],
    "serviceType": "Real Estate Services",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy"
    }
  }),

  // Service pages (valuation, analysis, etc.)
  servicePage: (serviceData: any) => ({
    "@type": "Service",
    "name": serviceData.name || "Real Estate Service",
    "description": serviceData.description || "Professional real estate services",
    "url": `https://www.centennialhillshomesforsale.com/${serviceData.slug}`,
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "telephone": "(702) 903-1952",
      "email": "janet@centennialhillshomesforsale.com"
    },
    "serviceType": serviceData.serviceType || "Real Estate Services",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Centennial Hills, Las Vegas, NV"
      },
      {
        "@type": "Place", 
        "name": "Summerlin, Las Vegas, NV"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Complimentary consultation"
    }
  }),

  // Blog/Article pages
  articlePage: (articleData: any) => ({
    "@type": "Article",
    "headline": articleData.title || "Real Estate Insights",
    "description": articleData.description || "Expert real estate advice and market insights",
    "url": `https://www.centennialhillshomesforsale.com/blog/${articleData.slug}`,
    "image": articleData.image || "https://www.centennialhillshomesforsale.com/images/blog-default.jpg",
    "datePublished": articleData.datePublished || new Date().toISOString(),
    "dateModified": articleData.dateModified || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Dr. Jan Duffy",
      "jobTitle": "Real Estate Agent",
      "worksFor": {
        "@type": "Organization",
        "name": "Centennial Hills Real Estate"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Centennial Hills Real Estate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.centennialhillshomesforsale.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.centennialhillshomesforsale.com/blog/${articleData.slug}`
    }
  }),

  // About/Contact pages
  personPage: (_personData: any) => ({
    "@type": "Person",
    "name": "Dr. Jan Duffy",
    "jobTitle": "Real Estate Agent",
    "description": "Top 1% Las Vegas REALTOR® with 30+ years of research expertise in luxury homes",
    "url": "https://www.centennialhillshomesforsale.com/janet-duffy",
    "telephone": "(702) 903-1952",
    "email": "janet@centennialhillshomesforsale.com",
    "image": "https://www.centennialhillshomesforsale.com/images/dr-janet-duffy.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1490 Center Crossing Rd",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89144",
      "addressCountry": "US"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Centennial Hills Real Estate"
    },
    "knowsAbout": [
      "Luxury Real Estate",
      "Centennial Hills Properties", 
      "Summerlin Homes",
      "Las Vegas Real Estate Market",
      "California Equity Buyers",
      "Corporate Relocations"
    ],
    "sameAs": [
      "https://www.instagram.com/drjanduffy/",
      "https://www.youtube.com/@DrDuffy",
      "https://www.pinterest.com/DrJanDuffy/",
      "https://www.facebook.com/SummerlinNewHomesBHHS",
      "https://www.linkedin.com/company/california-to-vegas-homes"
    ]
  }),

  // Search pages
  searchPage: (searchData: any) => ({
    "@type": "WebPage",
    "name": searchData.title || "Property Search",
    "description": searchData.description || "Search for luxury homes in Centennial Hills and Summerlin",
    "url": "https://www.centennialhillshomesforsale.com/search",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.centennialhillshomesforsale.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Centennial Hills Real Estate",
      "url": "https://www.centennialhillshomesforsale.com/"
    }
  }),

  // FAQ pages
  faqPage: (faqData: any) => ({
    "@type": "FAQPage",
    "mainEntity": faqData.faqs?.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) || []
  }),

  // Breadcrumb navigation
  breadcrumbList: (breadcrumbs: any[]) => ({
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  })
};

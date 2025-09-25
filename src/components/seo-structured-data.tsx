import { component$ } from '@builder.io/qwik';

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'RealEstateListing' | 'LocalBusiness' | 'Organization';
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
          ]
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
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$$"
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

// Predefined structured data for Dr. Janet Duffy
export const janetDuffyStructuredData = {
  "name": "Dr. Janet Duffy",
  "description": "Top 1% Las Vegas REALTOR® specializing in luxury real estate with 30+ years of research expertise",
  "url": "https://www.centennialhillshomesforsale.com",
  "telephone": "+1-702-903-1952",
  "email": "janet@centennialhillshomesforsale.com",
  "image": "https://www.centennialhillshomesforsale.com/images/dr-janet-duffy.jpg",
  "logo": "https://www.centennialhillshomesforsale.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1699,
    "longitude": -115.1398
  },
  "areaServed": [
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
    },
    {
      "@type": "Place",
      "name": "Red Rock Country Club"
    },
    {
      "@type": "Place",
      "name": "The Ridges"
    }
  ],
  "hasMap": "https://www.centennialhillshomesforsale.com#interactive-map",
  "sameAs": [
    "https://www.linkedin.com/in/dr-janet-duffy",
    "https://www.facebook.com/centennialhillshomesforsale"
  ]
};

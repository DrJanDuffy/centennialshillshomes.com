import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  type: string;
}

export default component$(() => {
  const searchTerm = useSignal('');

  // Schema data for search page
  const searchSchema = pageSchemas.searchPage({
    title: "Property Search",
    description: "Search for luxury homes in Centennial Hills and Summerlin"
  });
  const searchResults = useSignal<SearchResult[]>([]);
  const isSearching = useSignal(false);
  const hasError = useSignal(false);

  const handleSearch = $(async () => {
    if (!searchTerm.value.trim()) return;
    
    isSearching.value = true;
    hasError.value = false;
    
    try {
      // Simulate search results (replace with actual search logic)
      setTimeout(() => {
        const mockResults: SearchResult[] = [
        {
          title: 'Centennial Hills Homes for Sale',
          url: '/centennial-hills-homes-for-sale',
          description: 'Browse luxury homes and new construction in Centennial Hills, Las Vegas premier community.',
          type: 'Page'
        },
        {
          title: 'Luxury Homes in Centennial Hills',
          url: '/centennial-hills-luxury-homes',
          description: 'Discover exclusive luxury properties with premium amenities and prime locations.',
          type: 'Page'
        },
        {
          title: 'New Construction Homes',
          url: '/centennial-hills-new-construction',
          description: 'Explore brand new homes and custom builds in Northwest Las Vegas.',
          type: 'Page'
        },
        {
          title: 'MLS Property Search',
          url: '/mls-search',
          description: 'Search all available properties in Centennial Hills and surrounding areas.',
          type: 'Search Tool'
        }
      ].filter(result => 
        result.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        result.description.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
      
      searchResults.value = mockResults;
      isSearching.value = false;
    }, 500);
    } catch (error) {
      console.error('Search error:', error);
      hasError.value = true;
      isSearching.value = false;
    }
  });

  return (
    <>
      {/* SEO Structured Data */}
      <SEOStructuredData 
        type="WebPage" 
        data={searchSchema} 
      />

      <div class="container mx-auto px-4 py-8" data-testid="search-page">
        <div class="max-w-4xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Search Centennial Hills Real Estate
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Find properties, neighborhoods, and real estate information in Centennial Hills and Northwest Las Vegas. 
            Our comprehensive search tool helps you discover homes, luxury properties, investment opportunities, and 
            real estate services throughout the Las Vegas area.
          </p>
        </div>

        {/* Search Form */}
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <input
                type="text"
                placeholder="Search for homes, neighborhoods, or topics..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm.value}
                onInput$={(e) => {
                  searchTerm.value = (e.target as HTMLInputElement).value;
                }}
                onKeyDown$={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
            </div>
            <button
              onClick$={handleSearch}
              disabled={isSearching.value}
              class="btn btn-primary px-8 py-3 disabled:opacity-50"
            >
              {isSearching.value ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.value.length > 0 && (
          <div class="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Search Results for "{searchTerm.value}"
            </h2>
            <div class="space-y-4">
              {searchResults.value.map((result, index) => (
                <div key={index} class="border-b border-gray-200 pb-4 last:border-b-0">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <h3 class="text-lg font-semibold text-gray-900 mb-2">
                        <a href={result.url} class="hover:text-blue-600">
                          {result.title}
                        </a>
                      </h3>
                      <p class="text-gray-600 mb-2">{result.description}</p>
                      <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {result.type}
                      </span>
                    </div>
                    <a href={result.url} class="text-blue-600 hover:text-blue-800 ml-4">
                      View →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Content Section */}
        <section class="service-content py-16">
          <div class="container container-center">
            <h2>Comprehensive Real Estate Search</h2>
            <p>
              Our comprehensive real estate search tool helps you discover properties, neighborhoods, and real estate 
              information throughout Centennial Hills and Northwest Las Vegas. Whether you're searching for luxury 
              homes, new construction, investment properties, or real estate services, our search functionality 
              provides convenient access to comprehensive property information and resources.
            </p>
            <p>
              Search functionality enables you to find properties by location, price range, property type, and 
              specific features. Our search tool indexes all available properties, neighborhoods, and real estate 
              information to provide comprehensive search results. This comprehensive search capability helps you 
              efficiently find properties and information that match your specific needs and preferences.
            </p>
            <p>
              Search results include property listings, neighborhood information, real estate services, and related 
              content that helps you make informed decisions. Our search tool provides detailed information about 
              each result, including descriptions, property features, and links to additional resources. This 
              comprehensive search experience helps you efficiently explore real estate options and find properties 
              that match your criteria.
            </p>

            <h3>Property Search Capabilities</h3>
            <p>
              Property search capabilities enable you to find homes by location, price range, property type, and 
              specific features. Our search tool indexes all available properties to provide comprehensive search 
              results. This property search capability helps you efficiently find homes that match your specific 
              needs and preferences.
            </p>
            <p>
              Search features include location-based search, price range filters, property type filters, and feature 
              searches that help you find properties efficiently. Our search tool provides detailed property 
              information including descriptions, features, and links to additional resources. This comprehensive 
              property search experience helps you explore real estate options and find properties that match your 
              criteria.
            </p>

            <h3>Neighborhood Information Search</h3>
            <p>
              Neighborhood information search enables you to find detailed information about Centennial Hills, 
              Summerlin, and other Northwest Las Vegas communities. Our search tool indexes neighborhood information 
              including community features, amenities, schools, and market data. This neighborhood search capability 
              helps you understand community characteristics and make informed location decisions.
            </p>
            <p>
              Search results include neighborhood overviews, community features, amenities, schools, and market 
              information that helps you evaluate locations. Our search tool provides comprehensive neighborhood 
              information that supports informed decision-making. This neighborhood search experience helps you 
              explore communities and find locations that match your preferences.
            </p>

            <h3>Real Estate Services Search</h3>
            <p>
              Real estate services search enables you to find information about home valuation, market analysis, 
              and other real estate services. Our search tool indexes service information including service 
              descriptions, features, and contact information. This services search capability helps you find 
              information about available real estate services and resources.
            </p>
            <p>
              Search results include service descriptions, features, and contact information that helps you 
              understand available services. Our search tool provides comprehensive service information that 
              supports informed decision-making. This services search experience helps you explore available 
              services and find resources that match your needs.
            </p>

            <h2>Search Tips and Best Practices</h2>
            <p>
              Effective search strategies help you find properties and information efficiently. Our search tool 
              supports various search methods including keyword searches, location searches, and category searches. 
              Understanding search best practices helps you maximize search effectiveness and find relevant results 
              quickly.
            </p>
            <p>
              Search tips include using specific keywords, location names, and property features to narrow search 
              results. Our search tool provides suggestions and autocomplete features that help you refine searches. 
              These search tips help you efficiently find properties and information that match your specific needs 
              and preferences.
            </p>
            <p>
              Best practices include using multiple search terms, exploring different search categories, and 
              reviewing search results comprehensively. Our search tool provides various search options and filters 
              that help you refine searches. These best practices help you maximize search effectiveness and find 
              relevant results efficiently.
            </p>

            <h3>Keyword Search Strategies</h3>
            <p>
              Keyword search strategies help you find properties and information using specific terms and phrases. 
              Our search tool supports keyword searches that match terms in property titles, descriptions, and 
              content. Effective keyword strategies include using specific property features, location names, and 
              property types to narrow search results.
            </p>
            <p>
              Search strategies include using multiple keywords, combining location and property type terms, and 
              using specific feature terms. Our search tool provides autocomplete suggestions that help you refine 
              keyword searches. These keyword strategies help you efficiently find properties and information that 
              match your specific needs.
            </p>

            <h3>Location-Based Search</h3>
            <p>
              Location-based search enables you to find properties and information in specific neighborhoods and 
              communities. Our search tool supports location searches using neighborhood names, zip codes, and 
              community names. Effective location searches help you find properties and information in specific 
              areas that match your location preferences.
            </p>
            <p>
              Location search features include neighborhood searches, zip code searches, and community searches 
              that help you find properties in specific areas. Our search tool provides location suggestions and 
              autocomplete features that help you refine location searches. These location search features help you 
              efficiently find properties and information in specific locations.
            </p>

            <h3>Category and Filter Search</h3>
            <p>
              Category and filter search enables you to find properties and information by category and specific 
              criteria. Our search tool supports category searches including property types, price ranges, and 
              features. Effective category searches help you find properties and information that match specific 
              criteria and preferences.
            </p>
            <p>
              Category search features include property type filters, price range filters, and feature filters that 
              help you refine searches. Our search tool provides various filter options that help you narrow search 
              results. These category search features help you efficiently find properties and information that match 
              specific criteria.
            </p>

            <h2>Popular Search Categories</h2>
            <p>
              Popular search categories reflect common property searches and information requests from buyers and 
              sellers. Our search tool indexes popular categories including luxury homes, new construction, 
              investment properties, and real estate services. Understanding popular search categories helps you 
              explore common property types and services.
            </p>
            <p>
              Popular categories include luxury homes, new construction, investment properties, and neighborhood 
              information that reflect common search interests. Our search tool provides easy access to popular 
              categories through category links and suggestions. These popular categories help you efficiently explore 
              common property types and services.
            </p>
            <p>
              Category exploration includes browsing popular categories, reviewing category results, and exploring 
              related categories. Our search tool provides category navigation that helps you explore property types 
              and services. This category exploration helps you discover properties and information that match your 
              interests.
            </p>

            <h3>Luxury Property Searches</h3>
            <p>
              Luxury property searches enable you to find high-end homes, custom estates, and premium properties in 
              Las Vegas' most exclusive communities. Our search tool indexes luxury properties including custom 
              estates, golf course homes, and mountain view properties. Luxury property searches help you find 
              premium properties that match luxury buyer preferences.
            </p>
            <p>
              Search features include luxury property filters, price range filters, and feature searches that help 
              you find luxury properties. Our search tool provides detailed luxury property information including 
              features, amenities, and location benefits. This luxury property search experience helps you explore 
              premium properties and find homes that match luxury buyer criteria.
            </p>

            <h3>New Construction Searches</h3>
            <p>
              New construction searches enable you to find brand new homes, custom builds, and new development 
              opportunities. Our search tool indexes new construction properties including model homes, custom 
              builds, and new development communities. New construction searches help you find modern homes with 
              current features and warranties.
            </p>
            <p>
              Search features include new construction filters, builder searches, and development searches that help 
              you find new construction properties. Our search tool provides detailed new construction information 
              including floor plans, customization options, and builder information. This new construction search 
              experience helps you explore modern homes and find new construction opportunities.
            </p>

            <h3>Investment Property Searches</h3>
            <p>
              Investment property searches enable you to find rental properties, fix-and-flip opportunities, and 
              commercial real estate. Our search tool indexes investment properties including single-family rentals, 
              multi-family properties, and commercial opportunities. Investment property searches help you find 
              properties with strong investment potential.
            </p>
            <p>
              Search features include investment property filters, ROI searches, and rental property searches that 
              help you find investment opportunities. Our search tool provides detailed investment property 
              information including rental potential, renovation opportunities, and market analysis. This investment 
              property search experience helps you explore investment opportunities and find properties with strong 
              potential.
            </p>
          </div>
        </section>

        {/* Popular Searches */}
        <div class="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Searches</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/centennial-hills-homes-for-sale" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">Centennial Hills Homes</h3>
              <p class="text-sm text-gray-600">Luxury homes and new construction</p>
            </a>
            <a href="/centennial-hills-luxury-homes" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">Luxury Properties</h3>
              <p class="text-sm text-gray-600">High-end homes with premium amenities</p>
            </a>
            <a href="/centennial-hills-new-construction" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">New Construction</h3>
              <p class="text-sm text-gray-600">Brand new homes and custom builds</p>
            </a>
            <a href="/red-rock-country-club" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">Red Rock Country Club</h3>
              <p class="text-sm text-gray-600">Golf course community homes</p>
            </a>
            <a href="/sky-canyon" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">Sky Canyon</h3>
              <p class="text-sm text-gray-600">Modern smart homes</p>
            </a>
            <a href="/investment-properties" class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-gray-900 mb-2">Investment Properties</h3>
              <p class="text-sm text-gray-600">Real estate investment opportunities</p>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Property Search</h3>
              <ul class="space-y-2">
                <li><a href="/mls-search" class="text-blue-600 hover:text-blue-800">MLS Property Search</a></li>
                <li><a href="/active-listings" class="text-blue-600 hover:text-blue-800">Active Listings</a></li>
                <li><a href="/recent-sales" class="text-blue-600 hover:text-blue-800">Recent Sales</a></li>
                <li><a href="/virtual-tours" class="text-blue-600 hover:text-blue-800">Virtual Tours</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Services</h3>
              <ul class="space-y-2">
                <li><a href="/home-valuation" class="text-blue-600 hover:text-blue-800">Home Valuation</a></li>
                <li><a href="/market-analysis" class="text-blue-600 hover:text-blue-800">Market Analysis</a></li>
                <li><a href="/commute-calculator" class="text-blue-600 hover:text-blue-800">Commute Calculator</a></li>
                <li><a href="/contact" class="text-blue-600 hover:text-blue-800">Contact Dr. Janet Duffy</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Property Search"
        className="bg-gray-50"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Search Centennial Hills Real Estate | Property Search & Information',
  meta: [
    {
      name: 'description',
      content: 'Search for Centennial Hills real estate properties, neighborhoods, and information. Find homes, luxury properties, and real estate services.',
    },
    {
      property: 'og:title',
      content: 'Search Centennial Hills Real Estate | Property Search & Information',
    },
    {
      property: 'og:description',
      content: 'Search for Centennial Hills real estate properties, neighborhoods, and information. Find homes, luxury properties, and real estate services.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
};

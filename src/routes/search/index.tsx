import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';

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
            Find properties, neighborhoods, and real estate information in Centennial Hills and Northwest Las Vegas
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

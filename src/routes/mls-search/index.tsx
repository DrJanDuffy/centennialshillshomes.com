import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutSearchWidget from '../../components/realscout-search-widget';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="bg-blue-600 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold mb-4">Las Vegas MLS Search</h1>
          <p class="text-xl opacity-90 max-w-3xl mx-auto">
            Access the complete Multiple Listing Service database for Las Vegas real estate. 
            Find homes, condos, townhouses, and luxury properties with real-time data.
          </p>
        </div>
      </section>

      {/* RealScout Advanced Search */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Advanced MLS Property Search
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Search thousands of Las Vegas properties with comprehensive filtering options
            </p>
          </div>
          
          {/* RealScout Full-Screen Search Widget */}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="text-center mb-6">
              <div class="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
                <span>Powered by RealScout MLS Integration</span>
              </div>
            </div>
            
            <RealScoutSearchWidget
              agentEncodedId="QWdlbnQtMjI1MDUw"
              height="800px"
              width="100%"
            />
          </div>
        </div>
      </section>

      {/* Search Features */}
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow">
              <div class="text-center mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Advanced Filters</h3>
              <p class="text-gray-600">
                Search by price range, property type, square footage, bedrooms, bathrooms, 
                and special features like pools, garages, and mountain views.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow">
              <div class="text-center mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Location-Based Search</h3>
              <p class="text-gray-600">
                Find properties by neighborhood, school district, or specific communities 
                like Centennial Hills, Summerlin, and Henderson.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow">
              <div class="text-center mb-4">
                <svg class="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Real-Time Data</h3>
              <p class="text-gray-600">
                Access current MLS listings with up-to-date pricing, property details, 
                and market status including active, pending, and sold properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Guidance */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Professional Guidance
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. Janet Duffy provides expert interpretation of MLS data and market insights
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Expert Market Analysis
              </h3>
              <p class="text-gray-600 mb-6">
                Dr. Janet Duffy provides expert interpretation of MLS data, helping you understand 
                market trends, pricing strategies, and neighborhood dynamics. Our personalized 
                service ensures you find properties that meet your specific needs and budget 
                requirements in the Las Vegas market.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-gray-900">Market Trend Analysis</h4>
                    <p class="text-gray-600 text-sm">Understand pricing patterns and market movements</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-gray-900">Neighborhood Insights</h4>
                    <p class="text-gray-600 text-sm">Local expertise on communities and amenities</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-gray-900">Property Tours</h4>
                    <p class="text-gray-600 text-sm">Schedule private showings and neighborhood tours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-8">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">
                Ready to Find Your Dream Home?
              </h4>
              <p class="text-gray-600 mb-6">
                Contact Dr. Janet Duffy for personalized assistance with your property search.
              </p>
              <div class="space-y-3">
                <a href="/contact" class="btn btn-primary w-full">
                  Get Personal Assistance
                </a>
                <a href="tel:+17029031952" class="btn btn-outline w-full">
                  Call (702) 903-1952
                </a>
              </div>
            </div>
          </div>
      </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'MLS Search - Las Vegas Real Estate Listings | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Search Las Vegas MLS listings with Dr. Janet Duffy. Find homes for sale, condos, and luxury properties across all Las Vegas neighborhoods with advanced search tools.',
    },
  ],
};







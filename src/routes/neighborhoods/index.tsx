import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8" data-testid="neighborhoods-page">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Northwest Las Vegas Neighborhoods
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the premier neighborhoods of Northwest Las Vegas, each offering unique lifestyle and investment opportunities
          </p>
        </div>

        {/* Featured Neighborhoods */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span class="text-white text-4xl">🏔️</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Centennial Hills</h3>
              <p class="text-gray-600 mb-4">
                Las Vegas' premier luxury community with new construction homes and world-class amenities.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $850K</div>
                <div>Zip Codes: 89135, 89138, 89144</div>
              </div>
              <a href="/centennial-hills" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Centennial Hills →
              </a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <span class="text-white text-4xl">🏌️</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Red Rock Country Club</h3>
              <p class="text-gray-600 mb-4">
                Exclusive golf course community with luxury estates and resort-style living.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $1.2M</div>
                <div>Zip Code: 89135</div>
              </div>
              <a href="/red-rock-country-club" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Red Rock →
              </a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span class="text-white text-4xl">🏘️</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Sky Canyon</h3>
              <p class="text-gray-600 mb-4">
                Modern master-planned community with energy-efficient homes and smart technology.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $750K</div>
                <div>Zip Code: 89135</div>
              </div>
              <a href="/sky-canyon" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Sky Canyon →
              </a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
              <span class="text-white text-4xl">🌵</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Tule Springs</h3>
              <p class="text-gray-600 mb-4">
                New development with custom homes and proximity to natural preserves.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $900K</div>
                <div>Zip Code: 89135</div>
              </div>
              <a href="/tule-springs" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Tule Springs →
              </a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <span class="text-white text-4xl">🏡</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Providence</h3>
              <p class="text-gray-600 mb-4">
                Established community with mature landscaping and family-friendly amenities.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $650K</div>
                <div>Zip Code: 89135</div>
              </div>
              <a href="/providence" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Providence →
              </a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <span class="text-white text-4xl">🎯</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Aliante</h3>
              <p class="text-gray-600 mb-4">
                Master-planned community with golf course, casino, and resort amenities.
              </p>
              <div class="text-sm text-gray-500 mb-4">
                <div>Avg. Price: $600K</div>
                <div>Zip Code: 89135</div>
              </div>
              <a href="/aliante" class="text-blue-600 hover:text-blue-800 font-medium">
                Explore Aliante →
              </a>
            </div>
          </div>
        </div>

        {/* Market Comparison */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Neighborhood Comparison</h2>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-sm">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Neighborhood</th>
                  <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Avg. Price</th>
                  <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Home Types</th>
                  <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amenities</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Centennial Hills</td>
                  <td class="px-6 py-4 text-sm text-gray-600">$850K</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Luxury, New Construction</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Parks, Shopping, Schools</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Red Rock Country Club</td>
                  <td class="px-6 py-4 text-sm text-gray-600">$1.2M</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Estate Homes</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Golf Course, Resort</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Sky Canyon</td>
                  <td class="px-6 py-4 text-sm text-gray-600">$750K</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Modern, Smart Homes</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Tech Features, Energy Efficient</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">Tule Springs</td>
                  <td class="px-6 py-4 text-sm text-gray-600">$900K</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Custom Homes</td>
                  <td class="px-6 py-4 text-sm text-gray-600">Natural Preserves, Hiking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Find Your Perfect Neighborhood
          </h2>
          <p class="text-blue-100 mb-6">
            Let Dr. Janet Duffy help you discover the ideal community for your lifestyle and budget
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/mls-search" class="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Search All Properties
            </a>
            <a href="/contact" class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Get Neighborhood Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Northwest Las Vegas Neighborhoods | Centennial Hills Area Guide',
  meta: [
    {
      name: 'description',
      content: 'Explore Northwest Las Vegas neighborhoods including Centennial Hills, Red Rock Country Club, Sky Canyon, and more. Find your perfect community.',
    },
    {
      property: 'og:title',
      content: 'Northwest Las Vegas Neighborhoods | Centennial Hills Area Guide',
    },
    {
      property: 'og:description',
      content: 'Explore Northwest Las Vegas neighborhoods including Centennial Hills, Red Rock Country Club, Sky Canyon, and more. Find your perfect community.',
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

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8" data-testid="area-explorer-page">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Area Explorer: Northwest Las Vegas
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover everything Northwest Las Vegas has to offer - from luxury homes to world-class amenities
          </p>
        </div>

        {/* Interactive Map Section */}
        <div class="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Area Map</h2>
          <div class="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
            <div class="text-center">
              <div class="text-6xl text-gray-400 mb-4">🗺️</div>
              <p class="text-gray-600 mb-4">Interactive map coming soon</p>
              <p class="text-sm text-gray-500">
                Explore Centennial Hills, Red Rock Country Club, Sky Canyon, and surrounding areas
              </p>
            </div>
          </div>
          <div class="text-center">
            <a href="/maps-test" class="btn btn-primary">
              View Full Map
            </a>
          </div>
        </div>

        {/* Key Areas */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Residential Communities</h3>
            <ul class="space-y-3">
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Centennial Hills</span>
                <a href="/centennial-hills" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Red Rock Country Club</span>
                <a href="/red-rock-country-club" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Sky Canyon</span>
                <a href="/sky-canyon" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Tule Springs</span>
                <a href="/tule-springs" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Providence</span>
                <a href="/providence" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-gray-600">Aliante</span>
                <a href="/aliante" class="text-blue-600 hover:text-blue-800 text-sm">Explore →</a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Nearby Amenities</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🛍️</span>
                <span class="text-gray-600">Centennial Hills Shopping Center</span>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🏫</span>
                <span class="text-gray-600">Centennial Hills Elementary</span>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🏥</span>
                <span class="text-gray-600">Centennial Hills Hospital</span>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🌳</span>
                <span class="text-gray-600">Centennial Hills Park</span>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🏌️</span>
                <span class="text-gray-600">Red Rock Country Club Golf</span>
              </li>
              <li class="flex items-center">
                <span class="text-blue-600 mr-3">🎬</span>
                <span class="text-gray-600">Centennial Hills Movie Theater</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Market Data */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Area Market Data</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">$850K</div>
              <div class="text-gray-600">Average Home Price</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">+5.2%</div>
              <div class="text-gray-600">Year-over-Year Growth</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-purple-600 mb-2">45</div>
              <div class="text-gray-600">Days on Market</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div class="text-gray-600">List-to-Sale Ratio</div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div class="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Transportation & Commuting</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Major Highways</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• US-95 (North-South)</li>
                <li>• I-215 Beltway</li>
                <li>• US-93 (North to Utah)</li>
                <li>• NV-157 (Red Rock Canyon)</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Commute Times</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Downtown Las Vegas: 25 minutes</li>
                <li>• Las Vegas Strip: 30 minutes</li>
                <li>• McCarran Airport: 35 minutes</li>
                <li>• Red Rock Canyon: 15 minutes</li>
              </ul>
            </div>
          </div>
          <div class="text-center mt-6">
            <a href="/commute-calculator" class="btn btn-outline">
              Calculate Your Commute
            </a>
          </div>
        </div>

        {/* Lifestyle Features */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl text-blue-600 mb-4">🏞️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Outdoor Recreation</h3>
            <p class="text-gray-600 text-sm">
              Red Rock Canyon, hiking trails, parks, and outdoor activities for the whole family.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl text-green-600 mb-4">🎓</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Education</h3>
            <p class="text-gray-600 text-sm">
              Top-rated schools including Centennial Hills Elementary and Northwest Career Academy.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl text-purple-600 mb-4">🛍️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Shopping & Dining</h3>
            <p class="text-gray-600 text-sm">
              Centennial Hills Shopping Center, restaurants, and entertainment options nearby.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Explore Northwest Las Vegas?
          </h2>
          <p class="text-blue-100 mb-6">
            Let Dr. Janet Duffy show you the best areas and properties in Northwest Las Vegas
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/mls-search" class="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Search Properties
            </a>
            <a href="/contact" class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Area Tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Area Explorer: Northwest Las Vegas | Centennial Hills Area Guide',
  meta: [
    {
      name: 'description',
      content: 'Explore Northwest Las Vegas with our interactive area guide. Discover neighborhoods, amenities, market data, and lifestyle features.',
    },
    {
      property: 'og:title',
      content: 'Area Explorer: Northwest Las Vegas | Centennial Hills Area Guide',
    },
    {
      property: 'og:description',
      content: 'Explore Northwest Las Vegas with our interactive area guide. Discover neighborhoods, amenities, market data, and lifestyle features.',
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

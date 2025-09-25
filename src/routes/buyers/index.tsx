import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8" data-testid="buyers-page">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Home Buyers in Centennial Hills
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete guide to buying a home in Centennial Hills, Las Vegas' premier luxury community
          </p>
        </div>

        {/* Buyer Types */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-4xl mb-4">🏠</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">First-Time Buyers</h3>
            <p class="text-gray-600 mb-4">
              New to home buying? We'll guide you through every step of the process with expert advice and support.
            </p>
            <a href="/first-time-homebuyers" class="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-4xl mb-4">💎</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Luxury Home Buyers</h3>
            <p class="text-gray-600 mb-4">
              Discover exclusive luxury properties in Centennial Hills with premium amenities and prime locations.
            </p>
            <a href="/luxury-home-buyers" class="text-blue-600 hover:text-blue-800 font-medium">
              Explore Luxury →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-4xl mb-4">🏢</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Investment Properties</h3>
            <p class="text-gray-600 mb-4">
              Build your real estate portfolio with strategic investment properties in growing Las Vegas markets.
            </p>
            <a href="/investment-properties" class="text-blue-600 hover:text-blue-800 font-medium">
              Investment Guide →
            </a>
          </div>
        </div>

        {/* Buying Process */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">The Home Buying Process</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Pre-Approval</h3>
              <p class="text-gray-600 text-sm">Get pre-approved for a mortgage to understand your budget and strengthen your offers.</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Home Search</h3>
              <p class="text-gray-600 text-sm">Work with us to find homes that match your criteria and lifestyle preferences.</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Make Offers</h3>
              <p class="text-gray-600 text-sm">We'll help you craft competitive offers and negotiate the best terms.</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Close & Move</h3>
              <p class="text-gray-600 text-sm">Complete the transaction and move into your new Centennial Hills home.</p>
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Centennial Hills Market Overview</h2>
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                <span class="text-gray-600">Average Home Price</span>
                <span class="font-semibold text-gray-900">$850,000</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                <span class="text-gray-600">Price Range</span>
                <span class="font-semibold text-gray-900">$500K - $3M+</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                <span class="text-gray-600">Home Types</span>
                <span class="font-semibold text-gray-900">Single Family</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                <span class="text-gray-600">Year Built</span>
                <span class="font-semibold text-gray-900">2000 - Present</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Market Trend</span>
                <span class="font-semibold text-green-600">Stable Growth</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Centennial Hills?</h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">Prime Northwest Las Vegas location</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">Excellent schools and amenities</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">New construction and luxury homes</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">Strong community and HOA</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">Easy access to shopping and dining</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">✓</span>
                <span class="text-gray-600">Proximity to Red Rock Canyon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p class="text-blue-100 mb-6">
            Let Dr. Janet Duffy help you find the perfect home in Centennial Hills
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/mls-search" class="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Search Properties
            </a>
            <a href="/contact" class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Get Personal Assistance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Home Buyers Guide | Centennial Hills Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Complete guide for home buyers in Centennial Hills, Las Vegas. Expert assistance for first-time buyers, luxury home buyers, and investors.',
    },
    {
      property: 'og:title',
      content: 'Home Buyers Guide | Centennial Hills Real Estate | Dr. Janet Duffy',
    },
    {
      property: 'og:description',
      content: 'Complete guide for home buyers in Centennial Hills, Las Vegas. Expert assistance for first-time buyers, luxury home buyers, and investors.',
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

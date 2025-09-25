import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8" data-testid="seller-guide-page">
      <div class="max-w-4xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Seller's Guide: How to Sell Your Centennial Hills Home
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert strategies and tips to maximize your home's value and sell quickly in the Centennial Hills market
          </p>
        </div>

        {/* Key Steps */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Pre-Listing Preparation</h2>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Professional home staging and photography
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Complete home inspection and repairs
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Competitive market analysis and pricing
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Marketing strategy development
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Marketing & Showings</h2>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Professional photography and virtual tours
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                MLS listing and online marketing
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Open houses and private showings
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                Social media and digital advertising
              </li>
            </ul>
          </div>
        </div>

        {/* Market Insights */}
        <div class="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Centennial Hills Market Insights</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">$850K</div>
              <div class="text-gray-600">Average Sale Price</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div class="text-gray-600">Days on Market</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div class="text-gray-600">List-to-Sale Ratio</div>
            </div>
          </div>
        </div>

        {/* Pricing Strategy */}
        <div class="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Pricing Strategy</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-blue-600 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">Competitive Market Analysis</h3>
              <p class="text-gray-600">
                We analyze recent sales, active listings, and market trends to determine the optimal listing price for your home.
              </p>
            </div>
            <div class="border-l-4 border-green-600 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">Strategic Pricing</h3>
              <p class="text-gray-600">
                Our pricing strategy maximizes your return while ensuring your home sells within the optimal timeframe.
              </p>
            </div>
            <div class="border-l-4 border-purple-600 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">Market Positioning</h3>
              <p class="text-gray-600">
                We position your home to attract the right buyers and create competitive interest in the market.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center bg-gray-900 text-white rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Sell Your Centennial Hills Home?
          </h2>
          <p class="text-gray-300 mb-6">
            Get a free home valuation and personalized selling strategy from Dr. Janet Duffy
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/home-valuation" class="btn btn-primary bg-white text-gray-900 hover:bg-gray-100">
              Get Free Home Valuation
            </a>
            <a href="/contact" class="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Seller\'s Guide: How to Sell Your Centennial Hills Home | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Expert seller\'s guide for Centennial Hills homes. Learn how to maximize your home\'s value and sell quickly with Dr. Janet Duffy\'s proven strategies.',
    },
    {
      property: 'og:title',
      content: 'Seller\'s Guide: How to Sell Your Centennial Hills Home | Dr. Janet Duffy',
    },
    {
      property: 'og:description',
      content: 'Expert seller\'s guide for Centennial Hills homes. Learn how to maximize your home\'s value and sell quickly with Dr. Janet Duffy\'s proven strategies.',
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

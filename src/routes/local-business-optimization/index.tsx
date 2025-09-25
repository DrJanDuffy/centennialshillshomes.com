import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-8" data-testid="local-business-optimization-page">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Local Business Optimization for Centennial Hills
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert strategies to help local businesses thrive in Centennial Hills and Northwest Las Vegas
          </p>
        </div>

        {/* Services Overview */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Local SEO</h3>
            <p class="text-gray-600 mb-4">
              Optimize your business for local search results and attract Centennial Hills customers.
            </p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Google My Business optimization</li>
              <li>• Local keyword targeting</li>
              <li>• Review management</li>
              <li>• Local citations</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-green-600 text-4xl mb-4">📱</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Digital Marketing</h3>
            <p class="text-gray-600 mb-4">
              Reach your target audience with effective digital marketing strategies.
            </p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Social media marketing</li>
              <li>• Google Ads campaigns</li>
              <li>• Email marketing</li>
              <li>• Content marketing</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="text-purple-600 text-4xl mb-4">🏢</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Business Development</h3>
            <p class="text-gray-600 mb-4">
              Grow your business with strategic planning and community engagement.
            </p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Market analysis</li>
              <li>• Community partnerships</li>
              <li>• Networking strategies</li>
              <li>• Growth planning</li>
            </ul>
          </div>
        </div>

        {/* Local Market Insights */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Centennial Hills Market Insights</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">45K+</div>
              <div class="text-gray-600">Residents</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">$95K</div>
              <div class="text-gray-600">Median Income</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div class="text-gray-600">Homeownership Rate</div>
            </div>
            <div class="text-center bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-orange-600 mb-2">12%</div>
              <div class="text-gray-600">Business Growth</div>
            </div>
          </div>
        </div>

        {/* Target Industries */}
        <div class="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Key Business Opportunities</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">High-Demand Services</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Home improvement and renovation services</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Landscaping and pool maintenance</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Professional services (legal, financial)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Health and wellness services</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Restaurants and entertainment</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Market Advantages</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Affluent demographic with disposable income</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Growing population and new construction</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Strong community engagement</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Limited competition in many sectors</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Prime location with good accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Strategies */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Local SEO Strategies</h2>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-600 pl-4">
                <h3 class="text-lg font-semibold text-gray-900">Google My Business</h3>
                <p class="text-gray-600 text-sm">
                  Optimize your GMB profile with accurate information, photos, and regular posts to improve local visibility.
                </p>
              </div>
              <div class="border-l-4 border-green-600 pl-4">
                <h3 class="text-lg font-semibold text-gray-900">Local Keywords</h3>
                <p class="text-gray-600 text-sm">
                  Target location-specific keywords like "Centennial Hills" and "Northwest Las Vegas" in your content.
                </p>
              </div>
              <div class="border-l-4 border-purple-600 pl-4">
                <h3 class="text-lg font-semibold text-gray-900">Review Management</h3>
                <p class="text-gray-600 text-sm">
                  Encourage customer reviews and respond professionally to build trust and improve rankings.
                </p>
              </div>
              <div class="border-l-4 border-orange-600 pl-4">
                <h3 class="text-lg font-semibold text-gray-900">Local Citations</h3>
                <p class="text-gray-600 text-sm">
                  Ensure consistent business information across all local directories and platforms.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Digital Marketing Tips</h2>
            <div class="space-y-4">
              <div class="bg-blue-50 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
                <p class="text-gray-600 text-sm">
                  Use Facebook, Instagram, and Nextdoor to connect with Centennial Hills residents and showcase your services.
                </p>
              </div>
              <div class="bg-green-50 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Google Ads</h3>
                <p class="text-gray-600 text-sm">
                  Target local keywords and use location extensions to reach customers in your service area.
                </p>
              </div>
              <div class="bg-purple-50 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Content Marketing</h3>
                <p class="text-gray-600 text-sm">
                  Create valuable content about Centennial Hills lifestyle, local events, and your industry expertise.
                </p>
              </div>
              <div class="bg-orange-50 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Email Marketing</h3>
                <p class="text-gray-600 text-sm">
                  Build a local email list and send regular updates about your services and local community news.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div class="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Grow Your Business in Centennial Hills?
          </h2>
          <p class="text-blue-100 mb-6">
            Get expert guidance on local business optimization and digital marketing strategies
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Get Business Consultation
            </a>
            <a href="/market-analysis" class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              View Market Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Local Business Optimization | Centennial Hills Business Growth',
  meta: [
    {
      name: 'description',
      content: 'Expert local business optimization strategies for Centennial Hills and Northwest Las Vegas. SEO, digital marketing, and business development services.',
    },
    {
      property: 'og:title',
      content: 'Local Business Optimization | Centennial Hills Business Growth',
    },
    {
      property: 'og:description',
      content: 'Expert local business optimization strategies for Centennial Hills and Northwest Las Vegas. SEO, digital marketing, and business development services.',
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
